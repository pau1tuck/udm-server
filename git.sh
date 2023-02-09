#!/bin/bash

datetime=$(date "+%Y-%m-%d_%H:%M_ICT+7")

echo $datetime

git add .
git commit -m \"$datetime\"
git push -u origin main
