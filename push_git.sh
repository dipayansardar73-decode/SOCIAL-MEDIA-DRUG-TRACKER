#!/bin/bash
# Initialize and push to GitHub
git init
git add .
git commit -m "Complete Social Media Drug Tracker Project - Features: Dashboard, 3D Map, Dark Web Sim, AI Assistant"
git branch -M main
git remote remove origin
git remote add origin https://github.com/dipayansardar73-decode/SOCIAL-MEDIA-DRUG-TRACKER.git
git push -u origin main --force
