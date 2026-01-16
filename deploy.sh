#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting VANILLA deployment to dharach.com..."

# Create a dist directory
echo "📦 Preparing static files..."
rm -rf dist
mkdir dist

# Copy core files
cp index.html dist/
cp styles.css dist/
cp script.js dist/

# Copy assets
cp public/* dist/

# Deploy to server
echo "wv Uploading to robyn..."
# Using rsync to copy the CONTENTS of dist/ to the server directory
rsync -avz --delete dist/ robyn:/var/www/htdocs/www.dharach.com/

echo "✅ Deployment complete!"
echo "🌍 Visit https://dharach.com"
