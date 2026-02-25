#!/bin/bash

set -e

echo "🚀 Deploying to dharach.com..."

rsync -avz --delete \
    --exclude='.git' \
    --exclude='.gitignore' \
    --exclude='AGENTS.md' \
    --exclude='deploy.sh' \
    . \
    robyn:/var/www/htdocs/www.dharach.com/

echo "✅ Deployment complete!"
echo "🌍 Visit https://dharach.com"
