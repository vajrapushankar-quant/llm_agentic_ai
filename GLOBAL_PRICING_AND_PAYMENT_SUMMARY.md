# Global Pricing & Payment Implementation Summary

## Current Implementation Status

### ✅ 1. Currency Conversion for Global Users

**How it works:**
- Detects user's country using IP geolocation (`ipapi.co`)
- Shows currency conversion for all **non-Indian users**:
  - **UK users**: Shows GBP (British Pounds)
  - **All other international users**: Shows USD (US Dollars)
  - **Indian users**: Shows only INR (no conversion)

**Example:**
- Bundle (₹24,999) shows as:
  - For US users: `₹24,999 (approx. USD 277)`
  - For UK users: `₹24,999 (approx. GBP 219)`
  - For Indian users: `₹24,999` (no conversion)

### ✅ 2. Razorpay API Only (No Payment Links)

**Current Setup:**
- ✅ Uses **Razorpay Checkout API** exclusively
- ✅ No fallback to payment links
- ✅ Creates orders via `/api/create-order` endpoint
- ✅ Opens Razorpay Checkout modal with pre-filled customer data
- ✅ Redirects to success/failure pages after payment

**Why API Only?**
- ✅ Enables proper **Meta Pixel conversion tracking**
- ✅ Better user experience (stays on your site)
- ✅ Tracks payment status in Google Sheets
- ✅ Allows custom success/failure pages

### ✅ 3. Meta Pixel Tracking

**Events Tracked:**
1. **Lead Event** - When user clicks "Proceed to Payment"
2. **Purchase Event** - On payment success page with:
   - Amount (in INR)
   - Currency (INR)
   - Course name
   - Plan ID

**Tracking Flow:**
1. User fills enrollment form → **Lead event** tracked
2. User completes payment → Redirected to success page
3. Success page loads → **Purchase event** tracked
4. Google Sheets updated → Status changed to "completed"

## Verification Checklist

### For Non-Indian IPs (Tor/Proxy):
- [ ] Visit site from non-Indian IP
- [ ] Check if currency conversion is shown (USD or GBP)
- [ ] Verify prices display correctly

### For Payment Flow:
- [ ] Fill enrollment form
- [ ] Select batch time
- [ ] Click "Proceed to Payment"
- [ ] Verify Razorpay Checkout modal opens (not payment link redirect)
- [ ] Complete payment
- [ ] Verify redirect to success page
- [ ] Check browser console for Meta Pixel events

### For Meta Pixel Tracking:
- [ ] Open browser console (F12)
- [ ] Check for `fbq('track', 'Lead')` when clicking payment
- [ ] Check for `fbq('track', 'Purchase')` on success page
- [ ] Verify events in Meta Events Manager

## Important Notes

1. **Currency Conversion Rates:**
   - USD: 1 INR = 0.012 USD (approx $277 for ₹24,999)
   - GBP: 1 INR = 0.0095 GBP (approx £219 for ₹24,999)
   - Update these rates in `CURRENCY_RATES` if needed

2. **Payment Method:**
   - Always uses Razorpay API (Checkout)
   - No payment links used
   - Requires working `/api/create-order` endpoint

3. **Meta Pixel:**
   - Tracking works only with API method
   - Payment links don't allow proper tracking
   - Both Lead and Purchase events are tracked

## Troubleshooting

### Currency not showing:
- Check browser console for IP detection errors
- Verify `ipapi.co` is accessible
- Check if country detection is working

### Payment not working:
- Verify API endpoint is accessible
- Check environment variables (Razorpay keys)
- Check browser console for errors
- Ensure web app is deployed (not static site)

### Meta Pixel not tracking:
- Verify Meta Pixel script is loaded (check browser console)
- Ensure using API method (not payment links)
- Check success page is loading correctly
- Verify events in Meta Events Manager

