#! /bin/bash
# This script setup **blank** nuxt project for you with the provided name.
#
# ** usage **
# source ./setup-codebase.sh facebook-app
# The command above setup a blank nuxt project called facebook-app
#
#

git clone https://github.com/lilisako/base-app
mv base-app $1
sed -i -e s/base-app/$1/ ./$1/nuxt.config.js
sed -i -e s/base-app/$1/ ./$1/package.json
sed -i -e s/base-app/$1/ ./$1/README.md
rm -r ./$1/*-e
rm -r ./$1/.git
cd ./$1
yarn
yarn dev
