# Digital Ocean Static Site + API Setup

Since your site is deployed as a static site on Digital Ocean, API routes won't work directly. You have two options:

## Option 1: Add Node.js Component to Digital Ocean App Platform (Recommended)

1. **In your Digital Ocean App Platform dashboard:**
   - Click "Add components" → "Add component from code"
   - Select "Web Service" (Node.js)
   - Connect the same repository
   - Set the **Root Directory** to your project root
   - Set **Build Command**: `npm run build`
   - Set **Run Command**: `npm start` (or `npx next start`)
   - Set **HTTP Port**: `3000`

2. **Environment Variables:**
   Add these to your Node.js component:
   ```
   NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_RnZUlrc7AjedvU
   RAZORPAY_KEY_SECRET=GCZYaifiJmbC529NrXFvL5Ov
   NODE_ENV=production
   ```

3. **Update API URL:**
   In your static site component, add environment variable:
   ```
   NEXT_PUBLIC_API_URL=https://your-nodejs-component-url.ondigitalocean.app/api/create-order
   ```

4. **Keep both components:**
   - Static Site component (for the frontend)
   - Node.js Web Service component (for API routes)

## Option 2: Use External Serverless Function

If you prefer not to add a Node.js component, you can host the API routes on a separate service:

1. **Deploy API routes to:**
   - Vercel (free tier supports serverless functions)
   - Netlify Functions
   - AWS Lambda
   - Or any Node.js hosting service

2. **Update API URL:**
   Set `NEXT_PUBLIC_API_URL` in your static site to point to your external API:
   ```
   NEXT_PUBLIC_API_URL=https://your-api-service.com/api/create-order
   ```

## Option 3: Use Razorpay Payment Links (Simplest, but less flexible)

If you want to keep it simple and don't need dynamic order creation, you can revert to using Razorpay payment links (but they're one-time use only, which you mentioned earlier).

## Recommended: Option 1

Option 1 is recommended because:
- Everything stays in one place (Digital Ocean)
- No external dependencies
- Full control over API routes
- Can use the same environment variables

### Steps for Option 1:

1. In Digital Ocean App Platform, click "Add components"
2. Select "Add component from code"
3. Choose "Web Service"
4. Select your repository
5. Configure:
   - **Name**: `llm-agentic-ai-api` (or any name)
   - **Root Directory**: `/` (or leave empty)
   - **Build Command**: `npm run build`
   - **Run Command**: `npm start`
   - **HTTP Port**: `3000`
6. Add environment variables (same as above)
7. After deployment, copy the component URL
8. In your static site component, add:
   ```
   NEXT_PUBLIC_API_URL=https://your-api-component-url.ondigitalocean.app/api/create-order
   ```
9. Redeploy the static site

This way, your static site will call the Node.js component for API routes, and everything will work seamlessly!

