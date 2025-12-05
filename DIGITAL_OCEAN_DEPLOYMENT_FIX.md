# Digital Ocean Static Site Deployment Fix

## Issue
The website is displaying incorrectly (basic layout without styling) after deployment.

## Solution

### Step 1: Verify Build Output Directory

The build now outputs to the `out/` directory (Next.js default for static export). 

**In Digital Ocean App Platform:**

1. Go to your **Static Site** component settings
2. Check the **Output Directory** setting:
   - It should be set to: `out`
   - NOT `dist` or any other directory

### Step 2: Update Build Configuration

If your Digital Ocean component is configured with a custom build command, make sure it's:

```bash
npm run build
```

The build command should NOT specify an output directory - Next.js will automatically create the `out/` folder.

### Step 3: Verify Static Site Component Settings

In Digital Ocean App Platform, your Static Site component should have:

- **Build Command**: `npm run build`
- **Output Directory**: `out`
- **Root Directory**: `/` (or leave empty if repo root)

### Step 4: Rebuild and Redeploy

1. Commit the changes to `next.config.ts`
2. Push to your repository
3. Digital Ocean should automatically rebuild
4. Or manually trigger a rebuild in the dashboard

### Step 5: Check Browser Console

After deployment, open the browser console (F12) and check for:
- CSS file loading errors (404s)
- JavaScript errors
- Network tab to see which assets are failing to load

### Common Issues:

1. **Wrong Output Directory**: If Digital Ocean is looking in `dist/` but files are in `out/`, update the Output Directory setting
2. **CSS Not Loading**: Check that `_next/static/css/` files are being served correctly
3. **Asset Path Issues**: Ensure all images in `/public` are being copied to the output directory

### Verification:

After deployment, check that these files exist in your deployed site:
- `/index.html`
- `/_next/static/css/` (CSS files)
- `/_next/static/chunks/` (JavaScript files)
- All files from `/public` directory

If any of these are missing, the build or deployment configuration needs adjustment.

