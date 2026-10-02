"""Turn the synthetic creators in assets/Personas into web media. Requires ffmpeg.

    python scripts/build-personas.py            # every persona
    python scripts/build-personas.py Camila     # just one

Reads assets/Personas/<Name>/ and writes public/personas/<name>/:
  <Name>_Profile.png    -> profile.webp            (card and phone avatar)
  <Name>_Sheet.png      -> sheet.webp              (character sheet on hover)
  <Name>_<action>.mp4   -> clip-<action>.mp4 (+ clip-<action>.webp poster)

<action> is a UGC action id from src/data/ugc.js: unboxing, review, rutina,
tutorial, trend or testimonio. Then list the clip under `clips` for that
persona in src/data/ugc.js.
"""
from pathlib import Path
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / 'assets' / 'Personas'
ACTIONS = {'unboxing', 'review', 'rutina', 'tutorial', 'trend', 'testimonio'}


def run(args):
    subprocess.run(['ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', *args], check=True)


def webp(src, dst, width, quality=80):
    run(['-i', str(src), '-vf', f'scale={width}:-2:flags=lanczos', '-c:v', 'libwebp',
         '-quality', str(quality), str(dst)])


def build(name):
    out = ROOT / 'public' / 'personas' / name.lower()
    out.mkdir(parents=True, exist_ok=True)
    for path in sorted((SRC / name).iterdir()):
        stem, ext = path.stem, path.suffix.lower()
        kind = stem.split('_', 1)[1].lower() if '_' in stem else ''
        if ext == '.png' and kind == 'profile':
            webp(path, out / 'profile.webp', 720)
        elif ext == '.png' and kind == 'sheet':
            webp(path, out / 'sheet.webp', 1200)
        elif ext in ('.mp4', '.mov') and kind in ACTIONS:
            clip = out / f'clip-{kind}.mp4'
            # Clips play muted inside the phone mockup, so the audio is dropped.
            run(['-i', str(path), '-vf', 'scale=540:-2', '-c:v', 'libx264', '-preset', 'slow',
                 '-crf', '27', '-pix_fmt', 'yuv420p', '-an', '-movflags', '+faststart', str(clip)])
            run(['-ss', '0.5', '-i', str(path), '-frames:v', '1', '-vf', 'scale=540:-2',
                 '-c:v', 'libwebp', '-quality', '75', str(out / f'clip-{kind}.webp')])
        elif ext in ('.mp4', '.mov'):
            print(f'  skipped {path.name}: name it {name}_<action>, action one of {sorted(ACTIONS)}')
        else:
            print(f'  skipped {path.name}')
    total = sum(f.stat().st_size for f in out.iterdir()) / 1024 / 1024
    print(f'{name}: {len(list(out.iterdir()))} files, {total:.1f} MB -> {out.relative_to(ROOT)}')


if __name__ == '__main__':
    for folder in sys.argv[1:] or sorted(p.name for p in SRC.iterdir() if p.is_dir()):
        build(folder)
