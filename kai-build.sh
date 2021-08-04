#!/bin/sh

# stolen from https://gitlab.com/suborg/wallace-toolbox/-/blob/master/build.sh


mkdir -p build/tmp
cp -r css build/tmp/
cp -r img build/tmp/
cp -r js build/tmp/
cp -r fonts build/tmp/
cp -r index.html build/tmp/
cp -r manifest.webapp build/tmp/
cp -r chart.html build/tmp/
cp -r LICENSE build/tmp/
cd build/tmp
zip -9r ../nihonoari.zip ./*
cd ..
cp nihonoari.zip ../
cd ..
rm -rf build
echo "Application packed"
