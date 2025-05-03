#!/bin/bash
echo "📦 Releasing Hyoml-JS..."
npm version patch
npm publish
echo "✅ Release complete."
