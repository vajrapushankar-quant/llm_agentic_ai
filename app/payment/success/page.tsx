"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [paymentData, setPaymentData] = useState<any>(null);

  useEffect(() => {
    // Get payment details from URL params
    const orderId = searchParams.get("razorpay_order_id");
    const paymentId = searchParams.get("razorpay_payment_id");
    const signature = searchParams.get("razorpay_signature");
    const planId = searchParams.get("planId");
    const planName = searchParams.get("planName");

    if (orderId && paymentId && signature) {
      setPaymentData({
        orderId,
        paymentId,
        signature,
        planId,
        planName,
      });

      // Track Meta Pixel Purchase conversion
      if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
        const amount = planId === "1" ? "14999" : planId === "2" ? "19999" : "24999";
        (window as any).fbq("track", "Purchase", {
          content_name: planName,
          content_ids: [planId],
          value: parseFloat(amount),
          currency: "INR",
        });
      }

      // Also track Lead conversion
      if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
        (window as any).fbq("track", "Lead", {
          planId: planId,
          planName: planName,
        });
      }

      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Processing...</p>
        </div>
      </div>
    );
  }

  if (!paymentData) {
    return (
      <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Payment Verification Failed</h1>
          <p className="text-gray-600 mb-6">
            We couldn't verify your payment. Please contact support if you've been charged.
          </p>
          <Link
            href="/#pricing"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
          >
            Try Again
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center px-4 pt-24">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for enrolling in <strong>{paymentData.planName}</strong>. Your payment has been processed successfully.
        </p>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Payment ID:</span>
              <span className="font-mono text-xs text-gray-900">{paymentData.paymentId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Order ID:</span>
              <span className="font-mono text-xs text-gray-900">{paymentData.orderId}</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-6">
          You will receive a confirmation email shortly with course access details.
        </p>

        <Link
          href="/"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default function PaymentSuccess() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <PaymentSuccessContent />
    </Suspense>
  );
}

