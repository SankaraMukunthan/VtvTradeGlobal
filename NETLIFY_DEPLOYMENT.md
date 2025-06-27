# VTV Enterprises - Netlify Deployment Guide

This guide walks you through deploying the VTV Enterprises website to Netlify with a PostgreSQL database.

## Prerequisites

- GitHub account
- Netlify account
- Database hosting service (Railway, Supabase, or Neon)

## Step 1: Prepare Your Repository

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Netlify deployment"
   git push origin main
   ```

2. **Ensure build configuration**
   
   Create `netlify.toml` in your project root:
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"
     
   [build.environment]
     NODE_VERSION = "18"
     
   [[redirects]]
     from = "/api/*"
     to = "/.netlify/functions/api/:splat"
     status = 200
     
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

## Step 2: Set Up Database Hosting

### Option A: Railway (Recommended)

1. **Create Railway account**: https://railway.app
2. **Create new project** → **Add PostgreSQL**
3. **Get connection details** from Railway dashboard
4. **Note down**: `DATABASE_URL` from the Connect tab

### Option B: Supabase

1. **Create Supabase account**: https://supabase.com
2. **Create new project**
3. **Go to Settings** → **Database**
4. **Copy connection string** (URI format)

### Option C: Neon

1. **Create Neon account**: https://neon.tech
2. **Create new project**
3. **Copy connection string** from dashboard

## Step 3: Prepare for Serverless Functions

Create `netlify/functions/api.js`:
```javascript
import { app } from '../../server/index.js';
import serverless from 'serverless-http';

const handler = serverless(app);

export { handler };
```

Update `package.json` scripts:
```json
{
  "scripts": {
    "build": "npm run build:client && npm run build:server",
    "build:client": "vite build",
    "build:server": "tsc server/index.ts --outDir netlify/functions --target es2020 --module commonjs",
    "dev": "tsx server/index.ts"
  }
}
```

## Step 4: Deploy to Netlify

### Method 1: Netlify Dashboard (Recommended)

1. **Log in to Netlify**: https://netlify.com
2. **Click "Add new site"** → **Import an existing project**
3. **Connect to Git provider** (GitHub)
4. **Select your repository**
5. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Functions directory: `netlify/functions`

### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site
netlify init

# Deploy
netlify deploy --prod
```

## Step 5: Configure Environment Variables

In your Netlify dashboard:

1. **Go to Site settings** → **Environment variables**
2. **Add the following variables**:

```env
# Database
DATABASE_URL=your_railway_or_supabase_connection_string
PGHOST=your_db_host
PGPORT=5432
PGDATABASE=your_db_name
PGUSER=your_db_user
PGPASSWORD=your_db_password

# Email Service
EMAILJS_PUBLIC_KEY=your_emailjs_public_key
EMAILJS_SERVICE_ID=your_emailjs_service_id
EMAILJS_TEMPLATE_ID=your_emailjs_template_id

# Optional: SendGrid
SENDGRID_API_KEY=your_sendgrid_api_key

# Node Environment
NODE_ENV=production
```

## Step 6: Set Up Database Schema

After deployment, run database setup:

```bash
# Install dependencies locally with your production DATABASE_URL
DATABASE_URL=your_production_url npm run db:push
DATABASE_URL=your_production_url npm run db:seed
```

Or use a migration service:

1. **Railway**: Use their built-in migration tools
2. **Supabase**: Use the SQL editor in dashboard
3. **Neon**: Use their console or CLI

## Step 7: Configure File Serving

For static assets in `attached_assets/`:

1. **Copy files to public directory**:
   ```bash
   cp -r attached_assets public/
   ```

2. **Update file references** in code from `/attached_assets/` to `/attached_assets/`

3. **Or use Netlify Large Media** for large files:
   ```bash
   netlify plugins:install netlify-plugin-large-media
   netlify large-media:setup
   ```

## Step 8: Custom Domain (Optional)

1. **In Netlify dashboard** → **Domain settings**
2. **Add custom domain**: your-domain.com
3. **Configure DNS** with your domain provider:
   - Add CNAME record: `www` → `your-site.netlify.app`
   - Add A record: `@` → Netlify's IP addresses
4. **Enable HTTPS** (automatic with Netlify)

## Deployment Commands

```bash
# Manual deployment
netlify deploy --prod

# Deploy with build
netlify deploy --prod --build

# Preview deployment
netlify deploy

# Check deployment status
netlify status
```

## Monitoring and Maintenance

### View Logs
```bash
netlify logs
```

### Analytics
- **Netlify Analytics**: Built-in traffic analytics
- **Google Analytics**: Add tracking code to `index.html`

### Performance
- **Netlify automatically provides**:
  - CDN distribution
  - Image optimization
  - Gzip compression
  - HTTP/2 support

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check build logs in Netlify dashboard
   - Verify `package.json` scripts
   - Ensure all dependencies are in `dependencies`, not `devDependencies`

2. **Database Connection Issues**
   - Verify DATABASE_URL format
   - Check firewall settings on database host
   - Test connection locally first

3. **API Routes Not Working**
   - Ensure `netlify.toml` redirects are configured
   - Check function deployment in dashboard
   - Verify serverless function setup

4. **Static Files Not Loading**
   - Check file paths are correct
   - Ensure files are in `public/` directory
   - Verify build process includes static files

### Environment-Specific Issues

- **Functions timeout**: Increase timeout in `netlify.toml`
- **Build time limit**: Optimize build process
- **Bandwidth limits**: Consider Netlify Pro for high traffic

## Cost Considerations

### Netlify Free Tier Includes:
- 100GB bandwidth/month
- 300 build minutes/month
- 125,000 function invocations/month

### Upgrade if you need:
- More bandwidth or build time
- Advanced features like split testing
- Priority support

## Security Best Practices

1. **Environment Variables**: Never commit sensitive data
2. **Database**: Use connection pooling for production
3. **API Rate Limiting**: Implement in your Express routes
4. **CORS**: Configure properly for your domain
5. **HTTPS**: Enabled automatically by Netlify

## Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All pages accessible
- [ ] Contact form works
- [ ] PDF documents open properly
- [ ] Database queries function
- [ ] Email service operational
- [ ] Mobile responsiveness verified
- [ ] Performance optimized
- [ ] Custom domain configured (if applicable)
- [ ] Analytics tracking setup