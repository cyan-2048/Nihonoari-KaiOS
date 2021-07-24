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
zip -9r ../application.zip ./*
cd ..
echo '{"version": 1, "manifestURL": "app://nihonoari.bananahackers.net/manifest.webapp"}' > metadata.json
zip -9r ../nihonoari-omni.zip application.zip metadata.json
cd ..
rm -rf build
echo "Application packed"
