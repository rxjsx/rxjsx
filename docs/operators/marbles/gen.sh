marblesgen operators.marble
rm -rf svg
mkdir -p svg
mv *.svg svg

for file in svg/*.svg; do inkscape $file -e ${file%svg}png; done
rm -rf png
mkdir -p png
mv svg/*.png png
