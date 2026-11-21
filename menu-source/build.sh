#!/bin/bash
# Rebuilds the menu PDF and the per-page PNGs used by the website.
# Usage: ./menu-source/build.sh   (edit prices/items in menu-source/menu.html first)
set -euo pipefail
cd "$(dirname "$0")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
SRC="file://$PWD/menu.html"
OUT_PDF="../public/Mr. Baron Billiards Bar.pdf"
OUT_DIR="../public/menuImages"
PAGES=$(grep -o "^  \[" menu.html | wc -l | tr -d ' ')   # content pages listed in PAGES
PAGES=$((PAGES + 1))                                      # + cover

"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=15000 \
  --print-to-pdf="$OUT_PDF" "$SRC" 2>/dev/null

rm -f "$OUT_DIR"/*.png
for i in $(seq 1 "$PAGES"); do
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=3 \
    --window-size=560,996 --virtual-time-budget=15000 \
    --screenshot="$OUT_DIR/Mr. Baron Billiards Bar-$i.png" "$SRC?p=$i" 2>/dev/null
done
echo "Built $PAGES pages -> $OUT_PDF and $OUT_DIR"
