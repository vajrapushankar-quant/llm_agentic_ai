# Complete Web App Deployment Guide for Digital Ocean

## Overview

Your site is now configured as a **Next.js Web Application** (not a static site), which means:
- ✅ API routes will work (`/api/create-order`, `/api/verify-payment`)
- ✅ Payment processing works exactly like on localhost
- ✅ UI remains exactly the same
- ✅ All functionality preserved

## Step-by-Step Deployment

### Step 1: Delete Static Site Component

1. Go to **Digital Ocean App Platform**
2. Open your app
3. Find the **"llm-agentic-ai"** Static Site component
4. Click on it → Go to **Settings**
5. Click **"Delete Component"** or **"Remove"**
6. Confirm deletion

### Step 2: Create New Web Service Component

1. In your Digital Ocean app, click **"Add components"**
2. Select **"Add component from code"**
3. Choose **"Web Service"** (not Static Site)
4. Connect your repository:
   - Select your Git provider (GitHub, GitLab, etc.)
   - Choose your repository
   - Select the branch (usually `main` or `master`)

### Step 3: Configure Build Settings

Fill in these settings:

**Basic Configuration:**
- **Component Name**: `llm-agentic-ai` (or any name you prefer)
- **Source Directory**: `/` (leave empty or use `/`)
- **Branch**: `main` (or your default branch)

**Build Settings:**
- **Build Command**: `npm run build`
- **Run Command**: `npm start`
- **HTTP Port**: `3000`

**Resource Settings:**
- **Plan**: Basic ($5/month) or higher
- **Instance Size**: 512 MB RAM minimum (recommended)

### Step 4: Add Environment Variables

Click on **"Environment Variables"** and add:

```bash
NODE_ENV=production
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_RnZUlrc7AjedvU
RAZORPAY_KEY_SECRET=GCZYaifiJmbC529NrXFvL5Ov
```

**Important Notes:**
- `NEXT_PUBLIC_RAZORPAY_KEY_ID` - Public key (safe to expose)
- `RAZORPAY_KEY_SECRET` - Private key (keep secure, not exposed to client)
- For testing, you can use test keys:
  - `NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_RnaJg6IBlcJkrk`
  - `RAZORPAY_KEY_SECRET=zeLEGY2Ykm5WMcoEWp21WCAr`

### Step 5: Deploy

1. Review all settings
2. Click **"Create Resources"** or **"Deploy"**
3. Wait for the build to complete (usually 3-5 minutes)
4. Your app will be live at the provided URL!

## What to Expect

### Build Process:
1. Installs dependencies (`npm install`)
2. Builds the application (`npm run build`)
3. Starts the server (`npm start`)
4. Server runs on port 3000

### After Deployment:
- ✅ Your site will work exactly like on localhost
- ✅ API routes will work (`/api/create-order`)
- ✅ Payment flow will use Razorpay Checkout API
- ✅ UI will be identical to localhost
- ✅ All features will work as expected

## Verification

After deployment, test:
1. **Homepage**: Should load with all styling
2. **Enrollment Form**: Fill out the form
3. **Payment**: Click "Proceed to Payment"
4. **API**: Should create Razorpay order successfully
5. **Checkout**: Razorpay modal should open with customer data pre-filled

## Troubleshooting

### If build fails:
- Check build logs in Digital Ocean
- Verify `package.json` has correct scripts
- Ensure Node.js version is compatible (Next.js 16 needs Node 18+)

### If API routes don't work:
- Verify environment variables are set correctly
- Check that `NEXT_PUBLIC_RAZORPAY_KEY_ID` starts with `NEXT_PUBLIC_`
- Check server logs in Digital Ocean dashboard

### If payment fails:
- Verify Razorpay keys are correct (live keys for production)
- Check browser console for errors
- Verify Google Sheets URL is correct (for data submission)

## Cost Estimate

**Digital Ocean Web Service:**
- **Basic Plan**: $5/month
  - 512 MB RAM
  - 1 GB disk space
  - 100 GB bandwidth
- **Professional Plan**: $12/month (for higher traffic)
  - 1 GB RAM
  - 2 GB disk space
  - 1 TB bandwidth

## Benefits of Web App vs Static Site

✅ **API Routes Work**: Payment processing works natively  
✅ **Server-Side Features**: Can add more features later  
✅ **Dynamic Content**: Can fetch data from APIs  
✅ **Better Performance**: Server-side rendering  
✅ **Same Localhost Experience**: Works exactly as tested  

## Next Steps

1. Delete static site component
2. Create web service component
3. Add environment variables
4. Deploy and test
5. Enjoy working payments! 🎉

Your site will now work exactly like it does on localhost!

