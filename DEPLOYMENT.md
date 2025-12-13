# Vercel Deployment Guide

This guide will help you deploy your AccountBridge website to Vercel.

## Prerequisites

- A [Vercel account](https://vercel.com/signup) (free tier works)
- Your GitHub repository connected to Vercel
- EmailJS credentials ready

## Quick Deployment Steps

### 1. Connect to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect the Vite framework

### 2. Configure Environment Variables

Before deploying, add your environment variables in Vercel:

1. In your Vercel project settings, go to **Settings → Environment Variables**
2. Add the following variables:

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
EMAILJS_PRIVATE_KEY=your_private_key_here
```

> **Important**: Get these values from your [EmailJS Dashboard](https://dashboard.emailjs.com/)

3. Make sure to add them for all environments (Production, Preview, Development)

### 3. Deploy

1. Click **"Deploy"**
2. Vercel will automatically:
   - Install dependencies using `npm install`
   - Build your project using `npm run build`
   - Deploy the `dist` folder

### 4. Verify Deployment

Once deployed:

1. Visit your deployment URL (e.g., `your-project.vercel.app`)
2. Test the contact form to ensure EmailJS is working
3. Check all pages and navigation

## Automatic Deployments

Vercel automatically deploys:

- **Production**: Every push to `main` branch
- **Preview**: Every pull request

## Custom Domain (Optional)

To add a custom domain:

1. Go to **Settings → Domains**
2. Add your domain
3. Follow Vercel's DNS configuration instructions

## Build Configuration

The project is already configured with `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

This ensures:

- Proper routing for single-page application
- Optimized caching for static assets
- Correct build output directory

## Troubleshooting

### Build Fails

If the build fails:

1. Check the build logs in Vercel dashboard
2. Ensure all environment variables are set
3. Verify `package.json` dependencies are correct

### Environment Variables Not Working

- Remember: Only variables prefixed with `VITE_` are exposed to the client
- After adding/changing env vars, redeploy the project

### 404 Errors on Page Refresh

This is already handled by the `rewrites` configuration in `vercel.json`, which redirects all routes to `index.html`.

## Local Testing Before Deployment

Test the production build locally:

```bash
npm run build
npm run preview
```

This simulates the production environment.

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
