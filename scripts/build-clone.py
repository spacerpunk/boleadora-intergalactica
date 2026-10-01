"""Turn a digital-clone folder into web-sized media. Requires ffmpeg.

    python scripts/build-clone.py Ruidito

Reads assets/DigitalClones/<Name>/ and writes public/clones/<name>/:
  Hero.png            -> hero.webp (+ hero-thumb.webp)
  Location_<n>.png    -> location-<n>.webp (+ location-<n>-thumb.webp)
  <degrees>.png       -> spin-<degrees>.webp   (the 360 turntable frames)
  UGC_<n>.mp4         -> ugc-<n>.mp4 (+ ugc-<n>.webp poster)
"""
from pathlib import Path
import re
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]
STILL_W, THUMB_W, SPIN_W = 1080, 240, 900


def run(args):
    subprocess.run(['ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', *args], check=True)


def webp(src, dst, width, quality=80):
    run(['-i', str(src), '-vf', f'scale={width}:-2:flags=lanczos', '-c:v', 'libwebp',
         '-quality', str(quality), str(dst)])


def build(name):
    src = ROOT / 'assets' / 'DigitalClones' / name
    out = ROOT / 'public' / 'clones' / name.lower()
    out.mkdir(parents=True, exist_ok=True)
    for path in sorted(src.iterdir()):
        stem, ext = path.stem, path.suffix.lower()
        if ext == '.png' and stem.lower() == 'hero':
            webp(path, out / 'hero.webp', STILL_W)
            webp(path, out / 'hero-thumb.webp', THUMB_W, 70)
        elif ext == '.png' and (m := re.fullmatch(r'location_(\d+)', stem, re.I)):
            webp(path, out / f'location-{m[1]}.webp', STILL_W)
            webp(path, out / f'location-{m[1]}-thumb.webp', THUMB_W, 70)
        elif ext == '.png' and stem.isdigit():
            webp(path, out / f'spin-{int(stem):03}.webp', SPIN_W)
        elif ext == '.mp4' and (m := re.fullmatch(r'ugc_(\d+)', stem, re.I)):
            clip = out / f'ugc-{m[1]}.mp4'
            run(['-i', str(path), '-vf', 'scale=540:-2', '-c:v', 'libx264', '-preset', 'slow',
                 '-crf', '27', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '96k',
                 '-movflags', '+faststart', str(clip)])
            run(['-ss', '0.5', '-i', str(path), '-frames:v', '1', '-vf', 'scale=540:-2',
                 '-c:v', 'libwebp', '-quality', '75', str(out / f'ugc-{m[1]}.webp')])
        else:
            print(f'  skipped {path.name}')
    total = sum(f.stat().st_size for f in out.iterdir()) / 1024 / 1024
    print(f'{name}: {len(list(out.iterdir()))} files, {total:.1f} MB -> {out.relative_to(ROOT)}')


if __name__ == '__main__':
    for folder in sys.argv[1:] or ['Ruidito']:
        build(folder)
