# Deployment Guide

## Vercel Deployment

### 1. Prerequisites
- GitHub repository with your code
- Vercel account
- Clerk account with publishable key

### 2. Deploy to Vercel

#### Option A: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Set environment variables
vercel env add VITE_CLERK_PUBLISHABLE_KEY
```

#### Option B: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect it's a Vite project
5. Add environment variable: `VITE_CLERK_PUBLISHABLE_KEY`

### 3. Environment Variables
Make sure to set these in your Vercel project settings:
- `VITE_CLERK_PUBLISHABLE_KEY`: Your Clerk publishable key (starts with `pk_test_` or `pk_live_`)

### 4. Build Settings
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

## Netlify Deployment

### 1. Build Settings
- Build command: `npm run build`
- Publish directory: `dist`

### 2. Environment Variables
Add in Netlify dashboard:
- `VITE_CLERK_PUBLISHABLE_KEY`: Your Clerk publishable key

## GitHub Pages Deployment

### 1. Install gh-pages
```bash
npm install --save-dev gh-pages
```

### 2. Add to package.json
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### 3. Deploy
```bash
npm run deploy
```

## Troubleshooting

### Common Issues:

1. **Blank Page**: Check if environment variables are set
2. **Build Errors**: Ensure all dependencies are in package.json
3. **Clerk Not Working**: Verify publishable key is correct
4. **Routing Issues**: Make sure SPA routing is configured

### Check Deployment:
1. Open browser developer tools
2. Check Console for errors
3. Check Network tab for failed requests
4. Verify environment variables are loaded
