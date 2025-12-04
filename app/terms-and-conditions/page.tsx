import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions | QuantumRush",
  description: "QuantumRush terms and conditions for course enrollment and services",
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] pt-24 md:pt-32 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Terms and Conditions
          </h1>
          
          <div className="prose prose-gray max-w-none space-y-6">
            <p className="text-sm text-gray-500 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Agreement to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing or using QuantumRush's website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Course Enrollment
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you enroll in a course:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You agree to pay the full course fee as specified</li>
                <li>Enrollment is subject to availability</li>
                <li>We reserve the right to cancel or reschedule courses if necessary</li>
                <li>Course materials are for personal use only and may not be shared or redistributed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Payment Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All payments must be made in full before course access is granted. We accept payments through:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Domestic payment methods (as available in your region)</li>
                <li>International payment methods (credit cards, debit cards, etc.)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                All prices are in Indian Rupees (₹) unless otherwise stated. International payments will be converted at the prevailing exchange rate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Refund Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our refund policy is detailed in our{" "}
                <Link href="/refund-policy" className="text-purple-600 hover:text-purple-700 underline">
                  Refund Policy
                </Link>
                . By enrolling, you agree to the terms outlined in that policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All course content, materials, and resources are the intellectual property of QuantumRush Pvt. Ltd. You may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Reproduce, distribute, or share course materials</li>
                <li>Record or stream course sessions without permission</li>
                <li>Use course content for commercial purposes</li>
                <li>Create derivative works based on our content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Student Conduct
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Students are expected to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Maintain respectful and professional behavior</li>
                <li>Not engage in any form of harassment or discrimination</li>
                <li>Follow all course guidelines and instructions</li>
                <li>Not share login credentials or course access with others</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Violation of these conduct rules may result in immediate removal from the course without refund.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                QuantumRush shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability shall not exceed the amount you paid for the course.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Modifications to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Governing Law
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                For questions about these Terms and Conditions, please contact us at{" "}
                <a 
                  href="mailto:contact@quantumrush.ai" 
                  className="text-purple-600 hover:text-purple-700 underline"
                >
                  contact@quantumrush.ai
                </a>
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                <strong>Company:</strong> QuantumRush Pvt. Ltd.<br />
                <strong>CIN:</strong> U62011TS2024PTC189742
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

