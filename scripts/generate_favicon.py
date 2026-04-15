from pathlib import Path

from PIL import Image, ImageDraw

SIZE = 512
BG = "#071421"
PANEL = "#0d2233"
CYAN = "#7dd3fc"
WHITE = "#f8fafc"
GRID = "#173247"

root = Path("/home/ubuntu/engineer-solutions-site/client/public")
root.mkdir(parents=True, exist_ok=True)

img = Image.new("RGBA", (SIZE, SIZE), BG)
draw = ImageDraw.Draw(img)

# Inner panel
pad = 32
draw.rectangle((pad, pad, SIZE - pad, SIZE - pad), fill=PANEL)

# Blueprint-style outer frame with broken corners
frame = 58
thick = 12
corner = 70
# top left
draw.rectangle((frame, frame, frame + corner, frame + thick), fill=CYAN)
draw.rectangle((frame, frame, frame + thick, frame + corner), fill=CYAN)
# top right
draw.rectangle((SIZE - frame - corner, frame, SIZE - frame, frame + thick), fill=CYAN)
draw.rectangle((SIZE - frame - thick, frame, SIZE - frame, frame + corner), fill=CYAN)
# bottom left
draw.rectangle((frame, SIZE - frame - thick, frame + corner, SIZE - frame), fill=CYAN)
draw.rectangle((frame, SIZE - frame - corner, frame + thick, SIZE - frame), fill=CYAN)
# bottom right
draw.rectangle((SIZE - frame - corner, SIZE - frame - thick, SIZE - frame, SIZE - frame), fill=CYAN)
draw.rectangle((SIZE - frame - thick, SIZE - frame - corner, SIZE - frame, SIZE - frame), fill=CYAN)

# Technical guide lines
for y in (150, 362):
    draw.line((116, y, SIZE - 116, y), fill=GRID, width=4)
for x in (150, 362):
    draw.line((x, 116, x, SIZE - 116), fill=GRID, width=4)

# Stylized geometric E
left = 150
right = 330
top = 126
bottom = 386
stroke = 28
mid = 256

# vertical spine
draw.rectangle((left, top, left + stroke, bottom), fill=WHITE)
# top arm
draw.rectangle((left, top, right, top + stroke), fill=WHITE)
# middle arm
draw.rectangle((left, mid - stroke // 2, right - 44, mid + stroke // 2), fill=WHITE)
# bottom arm
draw.rectangle((left, bottom - stroke, right, bottom), fill=WHITE)

# Accent diagonal engineering cut
cut_color = CYAN
cut = [(292, 168), (356, 168), (250, 344), (186, 344)]
draw.polygon(cut, fill=cut_color)

# Small precision marker
marker = 22
draw.ellipse((364, 112, 364 + marker, 112 + marker), fill=CYAN)

# Export set
img.save(root / "favicon-512.png")
img.resize((180, 180), Image.Resampling.LANCZOS).save(root / "apple-touch-icon.png")
img.resize((32, 32), Image.Resampling.LANCZOS).save(root / "favicon-32x32.png")
img.resize((16, 16), Image.Resampling.LANCZOS).save(root / "favicon-16x16.png")
img.save(root / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
