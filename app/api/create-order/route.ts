import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

// Regional pricing maps in paise (smallest currency unit)
const INDIA_PRICES: Record<number, number> = {
  1: 1499900, // ₹14,999 - LLM Foundations
  2: 1999900, // ₹19,999 - Agentic AI Mastery
  3: 2499900, // ₹24,999 - Bundle
};

const GLOBAL_PRICES: Record<number, number> = {
  1: 1999900, // ₹19,999 - LLM Foundations
  2: 2499900, // ₹24,999 - Agentic AI Mastery
  3: 3499900, // ₹34,999 - Bundle
};

export async function POST(request: NextRequest) {
  try {
    // Initialize Razorpay with environment variables
    // Use test keys for local, live keys for production
    const razorpayKeyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_RnaJg6IBlcJkrk";
    const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET || "zeLEGY2Ykm5WMcoEWp21WCAr";

    if (!razorpayKeySecret) {
      return NextResponse.json(
        { error: "Razorpay configuration missing" },
        { status: 500 }
      );
    }

    const razorpay = new Razorpay({
      key_id: razorpayKeyId,
      key_secret: razorpayKeySecret,
    });

    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      return NextResponse.json(
        { error: "Invalid request body", details: "Could not parse JSON" },
        { status: 400 }
      );
    }

    const { planId, planName, customerName, customerEmail, customerPhone, pricingRegion } = body;

    if (!planId) {
      return NextResponse.json(
        { error: "Invalid plan ID" },
        { status: 400 }
      );
    }

    // Get price based on region (default to GLOBAL if not specified)
    const region = pricingRegion === "IN" ? "IN" : "GLOBAL";
    const priceMap = region === "IN" ? INDIA_PRICES : GLOBAL_PRICES;
    
    if (!priceMap[planId]) {
      return NextResponse.json(
        { error: "Invalid plan ID" },
        { status: 400 }
      );
    }

    const amount = priceMap[planId];

    // Create Razorpay order
    const order = await razorpay.orders.create({
      amount: amount, // Amount in paise
      currency: "INR",
      receipt: `order_${planId}_${Date.now()}`,
      notes: {
        planId: planId.toString(),
        planName: planName,
        customerName: customerName,
        customerEmail: customerEmail,
        customerPhone: customerPhone,
      },
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: razorpayKeyId,
    });
  } catch (error: any) {
    console.error("Error creating Razorpay order:", error);
    
    // Return proper JSON error response
    const errorMessage = error?.message || "Unknown error occurred";
    const errorDetails = error?.error?.description || error?.description || errorMessage;
    
    return NextResponse.json(
      { 
        error: "Failed to create order", 
        details: errorDetails,
        message: errorMessage
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

