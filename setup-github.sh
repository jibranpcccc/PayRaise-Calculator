#!/bin/bash

echo "🔧 Setting up GitHub connection for PayRaise Calculator..."

# Remove lock files
echo "Removing git lock files..."
rm -f .git/index.lock .git/config.lock .git/HEAD.lock

# Check git status
echo "Checking git status..."
git status

# Add all files
echo "Adding all files to git..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Complete PayRaise Calculator application - Auto sync setup"

# Set up remote with your token
echo "Setting up remote with authentication..."
git remote set-url origin https://jibranpcccc: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@github.com/jibranpcccc/PayRaise-Calculator.git

# Push to GitHub
echo "Pushing to GitHub..."
git push -u origin main

echo "✅ GitHub connection setup complete!"
echo "Your project is now synced with: https://github.com/jibranpcccc/PayRaise-Calculator"
echo ""
echo "For future changes, simply run:"
echo "git add . && git commit -m 'Your change description' && git push origin main"