#!/bin/bash

cp -v ~/.node-red/*flow*.json .
git add .
git commit -m "xx" && git push origin master || echo "no changes"
