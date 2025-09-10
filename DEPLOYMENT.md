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

1. Install Netlify CLI (if not already installed):

   ```bash
   npm install -g netlify-cli
   ```

2. Deploy:

   ```bash
   cd client
   netlify deploy --prod
   ```

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
