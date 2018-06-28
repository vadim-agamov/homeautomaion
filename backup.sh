#!/bin/bash

date=`date`

cd /home/vadim/code/homeautomaion
git pull -r origin master
cp -v /home/vadim/code/homeautomaion/.node-red/*flow*.json .
git add .
git commit -m "backup $date" && git push origin master || echo "no changes"
