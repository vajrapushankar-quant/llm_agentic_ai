# Regional Pricing Implementation Summary

## Overview

The site now implements **regional pricing** with different INR prices for India vs Global customers, while maintaining INR as the only currency for payments.

## Pricing Structure

### India Regional Pricing (₹)
- **LLM Foundations**: ₹14,999
- **Agentic AI Mastery**: ₹19,999
- **Bundle**: ₹24,999

### Global Pricing (₹)
- **LLM Foundations**: ₹19,999
- **Agentic AI Mastery**: ₹24,999
- **Bundle**: ₹34,999

### Currency Display
- **All users**: Prices shown in INR (₹)
- **Global users**: Also shows approximate USD conversion (≈ $XXX USD)
- **India users**: Shows INR only (no USD conversion)

## Key Features

### 1. Automatic Region Detection
- Checks localStorage for saved preference
- Detects from timezone (Asia/Kolkata = India)
- Detects from browser language (en-IN, hi-IN = India)
- Falls back to IP geolocation (ipapi.co)
- Defaults to GLOBAL if detection fails

### 2. User-Controlled Toggle
- Two buttons: "India Pricing" and "Global Pricing"
- Located above the pricing cards
- Preference saved to localStorage
- Persists across sessions

### 3. Payment Flow
- **Razorpay API Only**: Uses Checkout API (not payment links)
- **Currency**: Always INR
- **Amount**: Based on selected region
- **Meta Pixel Tracking**: Proper conversion tracking enabled

### 4. Data Collection
All data sent to Google Sheets includes:
- Pricing region (IN or GLOBAL)
- Actual price paid
- Customer country (for analytics)
- Batch selection
- Payment status

## Technical Implementation

### Files Created/Modified

1. **`app/hooks/useRegionalPricing.ts`**
   - Custom hook for regional pricing logic
   - Handles region detection and localStorage persistence
   - Returns prices and USD approximations

2. **`app/components/PricingSection.tsx`**
   - Updated to use regional pricing hook
   - Shows dynamic prices based on region
   - Includes region toggle UI
   - Passes pricing region to API

3. **`app/api/create-order/route.ts`**
   - Updated to accept `pricingRegion` parameter
   - Calculates correct amount based on region
   - Uses different price maps for IN vs GLOBAL

4. **`app/payment/success/page.tsx`**
   - Uses stored price from localStorage for Meta Pixel tracking
   - Ensures accurate conversion tracking

### API Integration

**Request to `/api/create-order`:**
```json
{
  "planId": 1,
  "planName": "LLM Foundations",
  "customerName": "John Doe",
  "customerEmail": "john@example.com",
  "customerPhone": "+1234567890",
  "pricingRegion": "GLOBAL"
}
```

**Response:**
```json
{
  "orderId": "order_xxx",
  "amount": 1999900,  // In paise (₹19,999.00)
  "currency": "INR",
  "keyId": "rzp_live_xxx"
}
```

## User Experience

### For Indian Users:
1. Region auto-detected as "IN"
2. Sees India discounted pricing
3. Can toggle to Global pricing if needed
4. Pays in INR at discounted rates

### For Global Users:
1. Region auto-detected as "GLOBAL"
2. Sees Global pricing with USD approximation
3. Can toggle to India pricing if needed (for travelers, etc.)
4. Pays in INR at global rates

## Benefits

✅ **Flexible Pricing**: Different prices for different markets
✅ **User Control**: Manual toggle for edge cases (VPN, travel, etc.)
✅ **Proper Tracking**: Meta Pixel conversion events work correctly
✅ **Data Collection**: Track pricing region in Google Sheets
✅ **Always INR**: No currency conversion complexity in payments

## Testing Checklist

- [ ] Visit from Indian IP → Should show India pricing
- [ ] Visit from non-Indian IP → Should show Global pricing with USD
- [ ] Toggle region → Prices should update immediately
- [ ] Refresh page → Selected region should persist
- [ ] Complete payment → Should charge correct regional price
- [ ] Check Google Sheets → Should have pricing region column
- [ ] Check Meta Pixel → Purchase event should have correct amount

