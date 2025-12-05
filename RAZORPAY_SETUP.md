# Razorpay Payment Integration Setup

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

### For Local Development (Test Mode)
```env
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_RnaJg6IBlcJkrk
RAZORPAY_KEY_SECRET=zeLEGY2Ykm5WMcoEWp21WCAr
```

### For Production (Live Mode)
```env
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_RnZUlrc7AjedvU
RAZORPAY_KEY_SECRET=GCZYaifiJmbC529NrXFvL5Ov
```

## How It Works

1. **Order Creation**: When user clicks "Proceed to Payment", an API call is made to `/api/create-order` to create a Razorpay order
2. **Checkout**: Razorpay Checkout modal opens with customer details pre-filled
3. **Payment**: User completes payment on Razorpay's secure payment page
4. **Redirect**: After payment, user is redirected to:
   - `/payment/success` - On successful payment (with Meta Pixel conversion tracking)
   - `/payment/failure` - On payment failure

## Meta Pixel Conversion Tracking

The payment success page automatically tracks:
- **Purchase** event with amount and course details
- **Lead** event with plan information

This allows you to track conversions in Meta Ads Manager and change campaign objectives from Lead to Conversion.

## Testing

For local testing, use the test keys. Test card numbers:
- Success: 4111 1111 1111 1111
- Failure: Any other card number

CVV: Any 3 digits
Expiry: Any future date

