#!/bin/bash

set -o errexit

git stash save 'Before deploy'
git checkout deploy
git merge master --no-edit
npm run build.js
npm run build-less
git commit -am 'New deploy'
git push heroku deploy:master
git checkout master
git stash pop
