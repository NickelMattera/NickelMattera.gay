#!/bin/sh

echo "🧹 Cleaning up temp directory"
rm -rf /tmp/nickelmattera

echo "📦 Downloading the latest"
git clone --depth 1 https://github.com/NicholeMattera/NickelMattera.gay.git /tmp/nickelmattera
cd /tmp/nickelmattera

echo "🛠️ Building"
docker compose build --no-cache

echo "🪦 Bringing down and removing old container"
docker container stop nickelmattera
docker container rm nickelmattera

echo "💡 Bringing up new container"
docker compose up --detach

echo "🧹 Cleaning up old images and temp directory"
docker image prune --all --force
rm -rf /tmp/nickelmattera
