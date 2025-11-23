# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration to automatically save customer enrollment data.

## Step 1: Create a Google Apps Script

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1_Y2wUSbx-IB5PMQ3pjxT90IUiPHNn9h4PaQ6xafUoZE/edit
2. Click on **Extensions** → **Apps Script**
3. Delete any existing code and paste the following script:

```javascript
function doPost(e) {
  try {
    // Handle CORS preflight request
    if (e.parameter && e.parameter.method === 'OPTIONS') {
      return ContentService.createTextOutput('')
        .setMimeType(ContentService.MimeType.JSON)
        .setHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        });
    }
    
    // Parse the incoming JSON data
    let data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      // Fallback: if data comes as parameters
      data = e.parameter;
    } else {
      throw new Error('No data received');
    }
    
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // If the sheet is empty, add headers
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Name',
        'Email',
        'Phone',
        'Plan ID',
        'Plan Name',
        'Plan Price',
        'Payment Gateway'
      ]);
    }
    
    // Append the data as a new row
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.planId || '',
      data.planName || '',
      data.planPrice || '',
      data.paymentGateway || 'pending'
    ]);
    
    // Return success response with CORS headers
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Data saved successfully'
    }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*'
      });
    
  } catch (error) {
    // Return error response with CORS headers
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*'
      });
  }
}
```

## Step 2: Deploy as Web App

1. In the Apps Script editor, click **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type" and choose **Web app**
3. Configure the deployment:
   - **Description**: "Enrollment Data Collector"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone" (or "Anyone with Google account" if you want to restrict)
4. Click **Deploy**
5. Copy the **Web App URL** that appears

## Step 3: Update the Code

1. Open `app/components/PricingSection.tsx`
2. Find the line: `const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";`
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL` with the Web App URL you copied
4. Save the file

## Step 4: Test

1. Fill out the enrollment form on your landing page
2. Select a payment gateway
3. Click "Proceed to Payment"
4. Check your Google Sheet - a new row should appear with the customer data

## Troubleshooting

- **No data appearing**: Make sure the Web App URL is correct and the deployment has "Anyone" access
- **CORS errors**: The code uses `no-cors` mode, so errors won't be visible in the console, but data should still be sent
- **Permission errors**: Make sure the Apps Script has permission to edit the spreadsheet

## Data Structure

The following data will be saved to your Google Sheet:
- Timestamp (ISO format)
- Customer Name
- Customer Email
- Customer Phone
- Plan ID (1, 2, or 3)
- Plan Name (e.g., "LLM Foundations", "Agentic AI Mastery", "Bundle")
- Plan Price (e.g., "₹9,999")
- Payment Gateway ("payu", "razorpay", or "pending")

