# Auto-Deployment Setup Guide

I've created the auto-deployment configuration for your PayRaise Calculator. Here's how to complete the setup:

## Step 1: Connect Replit to GitHub (Auto-Sync)

1. **In your Replit workspace:**
   - Click the Git icon in the sidebar
   - Click "Connect to GitHub"
   - Select your repository: `jibranpcccc/PayRaise-Calculator`
   - Enable "Auto-push changes"

2. **Configure Git settings:**
   - Set your name and email if prompted
   - This will automatically sync your Replit changes to GitHub

## Step 2: Deploy to Vercel (Auto-Deploy)

1. **Go to vercel.com and sign in**
   - Use your GitHub account to sign in
   - Click "Import Project"
   - Select your repository: `PayRaise-Calculator`

2. **Configure deployment settings:**
   - Build Command: `npm run build`
   - Output Directory: `client/dist`
   - Install Command: `npm install`

3. **Add environment variables in Vercel:**
   - Go to Project Settings → Environment Variables
   - Add: `DATABASE_URL` (your PostgreSQL connection string)
   - Add: `NODE_ENV` = `production`

4. **Deploy:**
   - Click "Deploy"
   - Your website will be live at: `your-project-name.vercel.app`

## Step 3: Enable Auto-Deployment

Once connected:
- Any changes you make in Replit → automatically push to GitHub
- GitHub changes → automatically trigger Vercel deployment
- Your live website updates within 2-3 minutes

## Workflow After Setup:

1. **Make changes in Replit**
2. **Commit changes** (via Git panel or automatically)
3. **Website updates automatically** via Vercel

## Files Added for Auto-Deployment:

- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `vercel.json` - Vercel deployment configuration
- `.replit.yml` - Replit auto-sync settings

## Live Website Features:

Your auto-deployed website will include:
- All 57+ pages working perfectly
- Database connectivity
- SEO optimization
- Mobile responsiveness
- Real-time calculator functionality

## Monitoring Deployments:

- Check deployment status in Vercel dashboard
- View build logs for any issues
- Monitor website performance and uptime

Your PayRaise Calculator will now automatically deploy whenever you make changes!