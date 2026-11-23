#!/bin/bash
# Rebuilds the menu PDF and the per-page PNGs used by the website.
# Usage: ./menu-source/build.sh   (edit items/prices in menu-source/menu.html first)
# Needs Google Chrome and an internet connection (Google Fonts).
set -euo pipefail
cd "$(dirname "$0")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
SRC="file://$PWD/menu.html"
OUT_PDF="../public/Mr. Baron Billiards Bar.pdf"
OUT_DIR="../public/menuImages"
W=794; H=1123   # A4 at 96dpi, must match @page in menu.html

PAGES=$("$CHROME" --headless=new --disable-gpu --virtual-time-budget=5000 --dump-dom "$SRC" 2>/dev/null \
  | grep -oE 'class="page( [a-z]+)?"' | wc -l | tr -d ' ')

"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=15000 \
  --print-to-pdf="$OUT_PDF" "$SRC" 2>/dev/null

rm -f "$OUT_DIR"/*.png
for i in $(seq 1 "$PAGES"); do
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
    --window-size=$W,$H --virtual-time-budget=15000 \
    --screenshot="$OUT_DIR/Mr. Baron Billiards Bar-$i.png" "$SRC?p=$i" 2>/dev/null
done
echo "Built $PAGES pages -> $OUT_PDF and $OUT_DIR"
echo "If the page count changed, update the list in src/components/MenuImageViewer.tsx"
