#!/bin/bash

cp -v ~/.node-red/*flow*.json .
git add .
git commit -m "xx" && echo push
