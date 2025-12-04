import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy | QuantumRush",
  description: "QuantumRush refund policy for all courses and payments",
};

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] pt-24 md:pt-32 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Refund Policy
          </h1>
          
          <div className="prose prose-gray max-w-none space-y-6">
            <p className="text-sm text-gray-500 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Overview
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This refund policy applies to all payments made for QuantumRush courses, whether made through domestic or international payment methods. We are committed to providing fair and transparent refund processes for all our students.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Refund Eligibility
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may request a refund under the following conditions:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Within 30 days of payment:</strong> You can request a full refund within 30 days of making the payment, regardless of when the course starts.
                </li>
                <li>
                  <strong>Within 15 days of course start date:</strong> If the course has already started, you can request a refund within 15 days of the course start date, even if 30 days from payment have not yet passed.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Important Conditions
              </h2>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4">
                <p className="text-gray-800 leading-relaxed">
                  <strong>Note:</strong> If you request a refund 15 days after the course has started (even if 30 days from payment have not yet passed), you will have the option to attend the next batch of the course, but you will <strong>not</strong> be eligible for a refund.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Refund Processing Time
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Once your refund request is approved, we will process the refund within <strong>15 business days</strong>. The refund will be credited back to the original payment method used for the transaction.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Please note that the time it takes for the refund to appear in your account may vary depending on your bank or payment provider, especially for international payments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How to Request a Refund
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To request a refund, please contact us at:
              </p>
              <p className="text-gray-700 leading-relaxed">
                <a 
                  href="mailto:contact@quantumrush.ai" 
                  className="text-purple-600 hover:text-purple-700 underline"
                >
                  contact@quantumrush.ai
                </a>
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Please include the following information in your refund request:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
                <li>Your full name</li>
                <li>Email address used for enrollment</li>
                <li>Course name and batch</li>
                <li>Payment transaction ID or receipt</li>
                <li>Reason for refund request</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Non-Refundable Items
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Refunds will not be provided for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
                <li>Requests made after the 30-day period from payment (unless within 15 days of course start)</li>
                <li>Requests made 15 days after course start date (batch transfer option available instead)</li>
                <li>Any additional services or materials purchased separately</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Refund Policy, please contact us at{" "}
                <a 
                  href="mailto:contact@quantumrush.ai" 
                  className="text-purple-600 hover:text-purple-700 underline"
                >
                  contact@quantumrush.ai
                </a>
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link
                href="/"
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

