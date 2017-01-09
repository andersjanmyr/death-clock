#!/bin/bash

set -o errexit

git stash save 'Before deploy'
git checkout deploy
git merge master --no-edit
npm run build-js
npm run build-less
if git commit -am Deploy; then
  echo 'Changes Committed'
fi
git push heroku deploy:master
git checkout master
git stash pop || true
