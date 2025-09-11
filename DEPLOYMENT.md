# Deployment Guide

This guide provides instructions for deploying the VTV Trade Global website to various hosting platforms.

## Prerequisites

- Node.js 16+ and npm 8+
- Git
- An account on your chosen hosting platform

## General Deployment Steps

1. **Build the application**:

   ```bash
   cd client
   npm install
   npm run build
   ```

2. The production build will be created in the `dist` directory.

## Deployment Options

### Vercel

1. Install Vercel CLI (if not already installed):

   ```bash
   npm install -g vercel
   ```

2. Deploy:

   ```bash
   cd client
   vercel
   ```

3. Follow the prompts to complete the deployment.

### Netlify

# Netlify Deployment Guide

This guide will walk you through deploying your VTV Trade Global application to Netlify.

## Prerequisites
- A Netlify account (sign up at [netlify.com](https://www.netlify.com/) if you don't have one)
- Your application code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### 1. Prepare Your Repository

1. Make sure your project builds successfully locally:
   ```bash
   npm install
   npm run build
   ```

2. Commit and push all your changes to your Git repository.

### 2. Deploy to Netlify

#### Option A: Connect to Git Repository (Recommended)

1. Log in to your [Netlify dashboard](https://app.netlify.com/)
2. Click on "Sites" in the top navigation
3. Click "Add new site" > "Import an existing project"
4. Connect to your Git provider and select your repository
5. Configure the build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

#### Option B: Manual Deploy

1. Build your project locally:
   ```bash
   npm run build
   ```
2. Drag and drop the `dist` folder to the Netlify dashboard

### 3. Configure Environment Variables

1. In your Netlify dashboard, go to "Site settings" > "Build & deploy" > "Environment"
2. Click "Edit variables"
3. Add the following environment variables from your `.env` file:
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
4. Click "Save"

### 4. Configure Custom Domain (Optional)

1. Go to "Domain settings" in your Netlify dashboard
2. Click "Add custom domain"
3. Follow the instructions to verify domain ownership and configure DNS settings

### 5. Enable Continuous Deployment

1. In your Netlify dashboard, go to "Site settings" > "Build & deploy" > "Continuous Deployment"
2. Enable "Build hooks" to trigger builds from external services
3. Configure branch deploys to automatically build from specific branches

## Post-Deployment

- Your site will be available at `https://your-site-name.netlify.app`
- Netlify will automatically deploy changes when you push to your connected repository
- Monitor your site's performance and analytics in the Netlify dashboard

## Troubleshooting

- If you get a 404 on page refresh, ensure the `_redirects` file is in your `public` directory
- If builds fail, check the build logs in the Netlify dashboard for specific error messages
- Make sure all environment variables are properly set in the Netlify dashboard

## Additional Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#netlify)

### GitHub Pages

1. Update `vite.config.ts` with your repository name:

   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... other config
   })
   ```

2. Install `gh-pages`:

   ```bash
   npm install --save-dev gh-pages
   ```

3. Add these scripts to `package.json`:

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. Deploy:

   ```bash
   npm run deploy
   ```

## Environment Variables

Make sure to set up the following environment variables in your hosting platform:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

## Custom Domain

1. Purchase a domain from a registrar like Namecheap, Google Domains, etc.
2. In your hosting platform's dashboard, add your custom domain.
3. Update the DNS settings with your domain registrar to point to your hosting provider.

## SSL/TLS

Most modern hosting platforms provide automatic SSL certificates through Let's Encrypt. Ensure SSL is enabled in your hosting platform's settings.
