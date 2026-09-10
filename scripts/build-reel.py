"""Build the first studio edit from local portfolio media. Requires ffmpeg."""
from pathlib import Path
import subprocess
import json

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public' / 'media'
TMP = ROOT / 'tmp' / 'reel'
OUT.mkdir(parents=True, exist_ok=True)
TMP.mkdir(parents=True, exist_ok=True)
SHOTS = [
    ('assets/Portfolios/Nicolas Requena/nasaxhonda/SHORT 01_FINAL.mp4', 3, 3),
    ('assets/Portfolios/Nicolas Requena/Monks/GoogleAgent/Master_q90_fps15_540x960.gif', 0, 2),
    ('public/imgs/projects/nico-dove.jpg', 0, 1.5),
    ('assets/Portfolios/Nicolas Requena/nasaxhonda/SHORT 01_FINAL.mp4', 8, 2.5),
    ('public/imgs/projects/tienda10.gif', 0, 2),
    ('assets/Portfolios/Cecilia Fagoaga/Fern_RE-SoundDesignTEST_20250506.mp4', 20, 2.5),
    ('public/imgs/projects/nico-toyota-team23.jpg', 0, 1.5),
    ('assets/Portfolios/Nicolas Requena/nasaxhonda/SHORT 01_FINAL.mp4', 11, 3),
]
def run(args):
    subprocess.run(['ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', *args], check=True)
for i, (source, start, duration) in enumerate(SHOTS):
    path = ROOT / source
    inputs = ['-loop', '1'] if path.suffix.lower() in ['.jpg', '.png'] else ['-stream_loop', '-1']
    run([*inputs, '-ss', str(start), '-i', str(path), '-t', str(duration),
         '-vf', 'scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,setsar=1,fps=24',
         '-an', '-c:v', 'libx264', '-preset', 'fast', '-crf', '24', '-pix_fmt', 'yuv420p', str(TMP / f'{i:02}.mp4')])
listing = TMP / 'shots.txt'
listing.write_text('\n'.join(f"file '{i:02}.mp4'" for i in range(len(SHOTS))))
run(['-f', 'concat', '-safe', '0', '-i', str(listing), '-c', 'copy', '-movflags', '+faststart', str(OUT / 'studio-reel.mp4')])
run(['-ss', '0.5', '-i', str(OUT / 'studio-reel.mp4'), '-frames:v', '1', '-q:v', '3', str(OUT / 'reel-poster.jpg')])
(OUT / 'reel-sources.json').write_text(json.dumps({'note': 'Initial silent edit from existing team work. Final curation and sound mix pending.', 'shots': SHOTS}, ensure_ascii=False, indent=2), encoding='utf-8')
print(f'Reel: {sum(s[2] for s in SHOTS)} seconds, {(OUT / "studio-reel.mp4").stat().st_size / 1024 / 1024:.1f} MB')
