# Enrollment Modal Updates - Implementation Summary

## Changes Implemented So Far
✅ Bundle card moved to first position
✅ Pricing FAQ added (FAQ #14)
✅ Step types updated to include "details", "batch", "regionWarning"

## Changes Remaining

### 1. Split Form into Two Steps

**Step 1: Details Collection**
- Collect: Name, Email, Phone
- Submit to Google Sheets immediately (even if they cancel later)
- Continue button (no cancel button here)
- Moves to Step 2 (batch selection)

**Step 2: Batch Selection**
- Select batch time
- Cancel button here (captures cancellation reason)
- Proceed button (checks region mismatch first)

### 2. Region Mismatch Detection

Before proceeding to payment, check:
- If `userCountry === "IN"` and `pricingRegion === "GLOBAL"`:
  - Show WARNING (yellow/orange): "You have selected Global Pricing. Kindly select India pricing to proceed further. Do you want to proceed anyway?"
  - Options: "Switch to India Pricing" | "Proceed Anyway" | "Cancel"
  - Link to FAQ

- If `userCountry !== "IN"` and `pricingRegion === "IN"`:
  - Show ERROR (red): "You have selected India Pricing but you are not in India. Please switch to Global Pricing to proceed."
  - Options: "Switch to Global Pricing" | "Cancel"
  - Link to FAQ

### 3. Region Warning Screen

Create new step: "regionWarning"
- Display appropriate message based on mismatch type
- Include FAQ link: `<a href="#faq">Learn more about pricing</a>`
- Show proceed/cancel options

### 4. Update Google Sheets Submission

- Step 1 submission: Submit with status "pending" and empty batch field
- Step 2 submission: Update with batch selection or cancellation

## Implementation Steps

1. Update `submitToGoogleSheets` to handle partial submissions
2. Add `handleDetailsSubmit` function
3. Add `handleBatchSubmit` function with region check
4. Add region warning screen UI
5. Update form rendering to split into two steps
6. Add FAQ link to warning screen

