#!/bin/bash

# Build script for Netlify deployment

echo "Building client..."
npm run build:client

echo "Copying assets..."
mkdir -p dist/attached_assets
cp -r attached_assets/* dist/attached_assets/ 2>/dev/null || true

echo "Build completed successfully!"