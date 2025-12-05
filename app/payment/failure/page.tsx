"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function PaymentFailureContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center px-4 pt-24">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="text-6xl mb-4">❌</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Payment Failed</h1>
        <p className="text-gray-600 mb-4">
          We couldn't process your payment. This could be due to:
        </p>
        <ul className="text-left text-gray-600 mb-6 space-y-2 max-w-sm mx-auto">
          <li>• Insufficient funds</li>
          <li>• Card declined by bank</li>
          <li>• Network issues</li>
          <li>• Payment gateway timeout</li>
        </ul>
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-6">
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}
        <div className="space-y-3">
          <Link
            href="/#pricing"
            className="block w-full bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
          >
            Try Again
          </Link>
          <Link
            href="/"
            className="block w-full bg-gray-200 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PaymentFailure() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <PaymentFailureContent />
    </Suspense>
  );
}

