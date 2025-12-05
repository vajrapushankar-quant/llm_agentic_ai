# Static Site Payment Fix - Fallback to Payment Links

## Problem
The static site deployment on Digital Ocean can't use API routes, causing 405 errors when trying to create Razorpay orders.

## Solution Implemented
I've updated the payment handler to automatically fall back to Razorpay payment links when the API is not available.

### How It Works:
1. **First**: Tries to use the Razorpay Checkout API (if available)
2. **Fallback**: If API fails (405 error or unavailable), automatically uses Razorpay payment links
3. **Pre-fills customer data**: Payment links include customer name, email, and phone as URL parameters

### Payment Links Used:
- **LLM Foundations** (Plan 1): `https://rzp.io/rzp/DXdIObc`
- **Agentic AI Mastery** (Plan 2): `https://rzp.io/rzp/rEJZDsc`
- **Bundle** (Plan 3): `https://rzp.io/rzp/kvOudgi`

## Benefits:
✅ Works immediately on static sites (no API needed)  
✅ Automatically tries API first (for future when you add API service)  
✅ Pre-fills customer information in payment links  
✅ No code changes needed when you add API service later  

## Testing:
1. Try the payment flow on your static site
2. It should automatically use payment links
3. Customer data should be pre-filled in Razorpay

## Future: Adding API Service
When you're ready to add an API service (Vercel Functions, separate Node.js service, etc.):
1. Set `NEXT_PUBLIC_API_URL` environment variable to your API endpoint
2. The code will automatically start using Razorpay Checkout API instead of payment links
3. No code changes needed!

