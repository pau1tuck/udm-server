#!/bin/bash

datetime=$(date "+%Y-%m-%d_%H:%M%Z")

cd ..

echo $datetime

git add .
git commit -m \"$datetime\"
git push -u origin main
