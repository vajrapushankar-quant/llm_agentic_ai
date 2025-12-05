# Meta Pixel Events Tracking Summary

## ✅ All Events Configured

### 1. **PageView** - Page Load
- **Location**: `app/layout.tsx` (line 37)
- **When**: Automatically fires when user visits any page
- **Status**: ✅ Already configured correctly
- **Code**:
  ```javascript
  fbq('init', '1671478400494384');
  fbq('track', 'PageView');
  ```

### 2. **Lead** - Contact Details Filled
- **Location**: `app/components/PricingSection.tsx` - `handleDetailsSubmit` function
- **When**: After user fills name, email, phone and clicks "Continue" (Step 1)
- **Status**: ✅ Now fires at the correct time
- **Event Data**:
  ```javascript
  fbq('track', 'Lead', {
    planId: planId,
    planName: planName,
    content_name: planName,
  });
  ```

### 3. **InitiateCheckout** - Proceed to Payment
- **Location**: `app/components/PricingSection.tsx` - `handlePayment` function
- **When**: After user selects batch time and clicks "Proceed to Payment" (Step 2)
- **Status**: ✅ Now configured
- **Event Data**:
  ```javascript
  fbq('track', 'InitiateCheckout', {
    content_name: planName,
    content_ids: [planId.toString()],
    value: currentPrice,
    currency: "INR",
  });
  ```

### 4. **Purchase** - Payment Successful
- **Location**: `app/payment/success/page.tsx` - `useEffect` hook
- **When**: When payment is successful and user is redirected to success page
- **Status**: ✅ Already configured correctly
- **Event Data**:
  ```javascript
  fbq('track', 'Purchase', {
    content_name: planName,
    content_ids: [planId],
    value: amount, // Actual price paid
    currency: "INR",
  });
  ```

### 5. **CompleteRegistration** - Registration Complete
- **Location**: `app/payment/success/page.tsx` - `useEffect` hook
- **When**: When payment is successful and user is redirected to success page
- **Status**: ✅ Now configured
- **Event Data**:
  ```javascript
  fbq('track', 'CompleteRegistration', {
    content_name: planName,
    content_ids: [planId],
    value: amount,
    currency: "INR",
    status: true,
  });
  ```

## Event Flow Timeline

1. **User visits page** → `PageView` event fires ✅
2. **User clicks "Enroll Now"** → Modal opens
3. **User fills details (name, email, phone) and clicks "Continue"** → `Lead` event fires ✅
4. **User selects batch time and clicks "Proceed to Payment"** → `InitiateCheckout` event fires ✅
5. **User completes payment** → Redirected to success page
6. **Success page loads** → `Purchase` event fires ✅
7. **Success page loads** → `CompleteRegistration` event fires ✅

## Testing Checklist

- [ ] Open browser console (F12)
- [ ] Visit the page → Check for `fbq('track', 'PageView')`
- [ ] Fill enrollment details → Check for `fbq('track', 'Lead')`
- [ ] Select batch and proceed to payment → Check for `fbq('track', 'InitiateCheckout')`
- [ ] Complete payment → Check for `fbq('track', 'Purchase')` and `fbq('track', 'CompleteRegistration')`
- [ ] Verify all events in Meta Events Manager

## Event Parameters

### Lead Event
- `planId`: Selected plan ID (1, 2, or 3)
- `planName`: Name of the course/plan
- `content_name`: Plan name

### InitiateCheckout Event
- `content_name`: Plan name
- `content_ids`: Array with plan ID
- `value`: Price in INR (based on regional pricing)
- `currency`: "INR"

### Purchase Event
- `content_name`: Plan name
- `content_ids`: Array with plan ID
- `value`: Actual amount paid in INR
- `currency`: "INR"

### CompleteRegistration Event
- `content_name`: Plan name
- `content_ids`: Array with plan ID
- `value`: Actual amount paid in INR
- `currency`: "INR"
- `status`: true

## Notes

- All events are wrapped in checks to ensure Meta Pixel is loaded
- Events use actual pricing data (from regional pricing hook)
- Purchase and CompleteRegistration fire on the same page (success page)
- Events are tracked even if Google Sheets submission fails

