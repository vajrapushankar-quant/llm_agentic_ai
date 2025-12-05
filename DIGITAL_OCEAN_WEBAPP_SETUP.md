# Digital Ocean Web App Deployment Guide

## Converting from Static Site to Web App

Since your site needs API routes (Razorpay payment processing), we're converting it from a static site to a Node.js web application.

## Steps to Deploy

### Step 1: Delete Static Site Component

1. Go to Digital Ocean App Platform
2. Open your app
3. Find the **Static Site** component (`llm-agentic-ai`)
4. Delete/Remove this component

### Step 2: Add Web Service Component

1. In Digital Ocean App Platform, click **"Add components"**
2. Select **"Add component from code"**
3. Choose **"Web Service"** (Node.js)
4. Connect your repository (same one you're using)
5. Configure the component:

   **Basic Settings:**
   - **Name**: `llm-agentic-ai` (or any name you prefer)
   - **Root Directory**: `/` (leave empty or use `/`)
   
   **Build & Run Settings:**
   - **Build Command**: `npm run build`
   - **Run Command**: `npm start`
   - **HTTP Port**: `3000`
   
   **Environment Variables:**
   Add these environment variables:
   ```
   NODE_ENV=production
   NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_RnZUlrc7AjedvU
   RAZORPAY_KEY_SECRET=GCZYaifiJmbC529NrXFvL5Ov
   ```

### Step 3: Deploy

1. Click **"Create Resources"** or **"Deploy"**
2. Wait for the build to complete
3. Your app will be available at the provided URL

## What Changed

### Configuration Changes:
- ✅ Removed `output: 'export'` from `next.config.ts`
- ✅ API routes will now work (`/api/create-order`, `/api/verify-payment`)
- ✅ Server-side rendering is enabled
- ✅ Payment flow will use Razorpay Checkout API (not payment links)

### Benefits:
- ✅ API routes work natively
- ✅ Payment processing works as designed
- ✅ Same UI and functionality
- ✅ Better performance with server-side features

## Payment Flow

The payment flow will now work exactly like on localhost:
1. User fills enrollment form
2. Clicks "Proceed to Payment"
3. API creates Razorpay order
4. Razorpay Checkout modal opens
5. User completes payment
6. Redirects to success/failure page

## Environment Variables

Make sure to set these in Digital Ocean:
- `NEXT_PUBLIC_RAZORPAY_KEY_ID` - Your Razorpay Key ID (public, safe to expose)
- `RAZORPAY_KEY_SECRET` - Your Razorpay Secret (private, keep secure)

For production, use live keys. For testing, you can use test keys.

## Troubleshooting

If you see errors:
1. Check build logs in Digital Ocean
2. Verify environment variables are set
3. Ensure port is set to `3000`
4. Check that build command is `npm run build`

## Cost

Web Service components on Digital Ocean:
- Basic plan starts at $5/month
- Includes 512 MB RAM and 1 GB disk space
- Auto-scaling available

Your site will work exactly like it does on localhost!

