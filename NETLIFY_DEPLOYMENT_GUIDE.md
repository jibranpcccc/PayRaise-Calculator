# Netlify Deployment Guide - PayRaise Calculator

## Quick Deployment Steps

### Step 1: Connect GitHub to Netlify
1. Go to [Netlify](https://www.netlify.com) and log into your account
2. Click "New site from Git"
3. Choose "GitHub" as your Git provider
4. Select your repository: `jibranpcccc/PayRaise-Calculator`

### Step 2: Configure Build Settings
Netlify should automatically detect your `netlify.toml` file, but verify these settings:

**Build Settings:**
- Build command: `npm install && NODE_ENV=production npx vite build --config vite.config.netlify.ts`
- Publish directory: `dist`
- Functions directory: `netlify/functions`

**Environment Variables (if needed):**
- `NODE_VERSION`: `20`
- `NPM_FLAGS`: `--legacy-peer-deps`

### Step 3: Deploy
1. Click "Deploy site"
2. Netlify will automatically build and deploy your site
3. You'll get a random subdomain like `amazing-site-123456.netlify.app`

### Step 4: Custom Domain (Optional)
1. In your site settings, go to "Domain management"
2. Add your custom domain
3. Configure DNS settings as instructed by Netlify

## What Gets Deployed

Your complete PayRaise Calculator includes:
- 57+ optimized pages
- Advanced salary calculators
- Industry benchmark data
- SEO-optimized content
- Mobile responsive design
- Sitemap and robots.txt

## Troubleshooting

If deployment fails:
1. Check the deploy log in Netlify dashboard
2. Ensure all dependencies are in package.json
3. Verify the build completes locally first

## Automatic Updates

Once connected:
- Any push to your GitHub main branch will trigger automatic redeployment
- Changes sync from Replit → GitHub → Netlify automatically

Your site will be live and accessible worldwide once deployed!