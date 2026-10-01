"""Generate missing turntable angles of a digital clone with Gemini image
generation ("Nano Banana"). Requires ffmpeg and GEMINI_API_KEY (environment
variable, or a line GEMINI_API_KEY=... in .env.local, which git ignores).

    python scripts/generate-angles.py --list                 # image models
    python scripts/generate-angles.py Ruidito 210 240 300 330
    python scripts/generate-angles.py Ruidito 150 --force    # redo one

New frames land next to the originals as assets/DigitalClones/<Name>/<deg>.png.
Then run scripts/build-clone.py <Name> and add the angles in src/data/clone.js.
"""
from pathlib import Path
import argparse
import base64
import json
import os
import subprocess
import tempfile
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
API = 'https://generativelanguage.googleapis.com/v1beta'
DEFAULT_MODEL = 'gemini-3.1-flash-image'  # Nano Banana 2

PROMPT = """These are studio turntable photographs of one product, each labelled
with its rotation angle. The product sits on a turntable and rotates around
its vertical axis; the camera, lights and background never move.

Generate the photograph at {deg} degrees. It lies between the {before} and
{after} degree references, so the faces visible at those angles tell you which
panels of the bag face the camera now.

Keep everything else identical to the references: the same bag, shape, folds,
colours, label design and printed text, the same soft studio lighting, pure
white seamless background, camera height, lens, framing, scale and position of
the product in the frame. The bag stands directly on the white floor exactly as
in the references: no visible turntable, platform, plinth or base, and the
bag is the same height in the frame. Only the rotation changes. Photorealistic
packshot, no added objects, no text overlays, no watermark."""


def api_key():
    if key := os.environ.get('GEMINI_API_KEY'):
        return key
    env = ROOT / '.env.local'
    if env.exists():
        for line in env.read_text(encoding='utf-8').splitlines():
            name, _, value = line.partition('=')
            if name.strip() == 'GEMINI_API_KEY':
                return value.strip().strip('"\'')
    raise SystemExit('Missing GEMINI_API_KEY (environment or .env.local)')


def call(path, body=None):
    request = urllib.request.Request(
        f'{API}/{path}',
        data=json.dumps(body).encode() if body else None,
        headers={'x-goog-api-key': api_key(), 'Content-Type': 'application/json'},
    )
    try:
        with urllib.request.urlopen(request, timeout=300) as response:
            return json.load(response)
    except urllib.error.HTTPError as error:
        raise SystemExit(f'Gemini API {error.code}: {error.read().decode()[:800]}')


def ffmpeg(*args):
    subprocess.run(['ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', *args], check=True)


def reference(path, tmp):
    """A downscaled JPEG of a frame, base64-encoded for the request."""
    small = Path(tmp) / f'{path.stem}.jpg'
    ffmpeg('-i', str(path), '-vf', 'scale=768:-2', '-q:v', '3', str(small))
    return base64.b64encode(small.read_bytes()).decode()


def generate(name, deg, model, size, force):
    folder = ROOT / 'assets' / 'DigitalClones' / name
    out = folder / f'{deg}.png'
    if out.exists() and not force:
        print(f'  {deg} deg: already exists (use --force to redo)')
        return
    frames = {int(p.stem): p for p in folder.glob('*.png') if p.stem.isdigit() and int(p.stem) != deg}
    angles = sorted(frames)
    before = max((a for a in angles if a < deg), default=angles[-1])
    after = min((a for a in angles if a > deg), default=angles[0])
    # Neighbours first, then the four faces for consistency.
    picks = list(dict.fromkeys([before, after, *(a for a in (0, 90, 180, 270) if a in frames)]))
    with tempfile.TemporaryDirectory() as tmp:
        parts = [{'text': PROMPT.format(deg=deg, before=before, after=after)}]
        for a in picks:
            parts.append({'text': f'Reference: {a} degrees'})
            parts.append({'inline_data': {'mime_type': 'image/jpeg', 'data': reference(frames[a], tmp)}})
        result = call(f'models/{model}:generateContent', {
            'contents': [{'parts': parts}],
            'generationConfig': {
                'responseModalities': ['IMAGE'],
                'imageConfig': {'aspectRatio': '4:5', 'imageSize': size},
            },
        })
        images = [p['inlineData'] for c in result.get('candidates', [])
                  for p in c.get('content', {}).get('parts', []) if 'inlineData' in p]
        if not images:
            raise SystemExit(f'{deg} deg: no image returned: {json.dumps(result)[:800]}')
        raw = Path(tmp) / 'raw'
        raw.write_bytes(base64.b64decode(images[0]['data']))
        # Match the originals' size so frames swap without a jump.
        ffmpeg('-i', str(raw), '-vf', 'scale=1856:2304:flags=lanczos', str(out))
    print(f'  {deg} deg: {out.relative_to(ROOT)} (refs {picks})')


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('name', nargs='?')
    parser.add_argument('angles', nargs='*', type=int)
    parser.add_argument('--model', default=DEFAULT_MODEL)
    parser.add_argument('--size', default='2K', help='1K, 2K or 4K')
    parser.add_argument('--force', action='store_true', help='overwrite existing frames')
    parser.add_argument('--list', action='store_true', help='list image-capable models')
    args = parser.parse_args()
    if args.list:
        for m in call('models?pageSize=1000')['models']:
            if 'image' in m['name']:
                print(m['name'].removeprefix('models/'), '-', m.get('displayName', ''))
    elif args.name and args.angles:
        for deg in args.angles:
            generate(args.name, deg, args.model, args.size, args.force)
    else:
        parser.print_help()
