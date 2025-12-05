import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

// Price map in paise (smallest currency unit)
const priceMap: Record<number, number> = {
  1: 1499900, // ₹14,999
  2: 1999900, // ₹19,999
  3: 2499900, // ₹24,999
};

export async function POST(request: NextRequest) {
  try {
    // Initialize Razorpay with environment variables
    // Use test keys for local, live keys for production
    const razorpayKeyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_RnaJg6IBlcJkrk";
    const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET || "zeLEGY2Ykm5WMcoEWp21WCAr";

    const razorpay = new Razorpay({
      key_id: razorpayKeyId,
      key_secret: razorpayKeySecret,
    });
    const body = await request.json();
    const { planId, planName, customerName, customerEmail, customerPhone } = body;

    if (!planId || !priceMap[planId]) {
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
    return NextResponse.json(
      { error: "Failed to create order", details: error.message },
      { status: 500 }
    );
  }
}

