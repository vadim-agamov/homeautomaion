#!/bin/bash

date=`date`

cp -v ~/.node-red/*flow*.json .
git add .
git commit -m "backup $date" && git push origin master || echo "no changes"
