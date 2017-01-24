#!/bin/bash
# Jenkins build script for web client
rm -rf ./node_modules
rm -rf ./bower_components
npm install
bower install
rm -rf ./builds
mkdir builds
rm -f ./node_modules/\@types/redux-promise-middleware/index.d.ts
cp ./src/types/redux-promise-middleware/index.d.ts ./node_modules/\@types/redux-promise-middleware
webpack
cp ./src/index.html ./builds
echo "Done"
