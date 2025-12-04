"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center gap-3">
            <Link 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <Image
                src="/Quantumrush White.png"
                alt="QuantumRush Logo"
                width={300}
                height={90}
                className="h-12 md:h-16 w-auto"
              />
            </Link>
            <h2 className="text-xl md:text-1xl font-bold text-gray-50 text-center">
              The Future, Fast-Tracked.
            </h2>
            <p className="text-sm md:text-base text-gray-200 text-center">
              The world moves fast. We'll help you move faster.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <Link
              href="#course"
              className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
            >
              Course
            </Link>
            <Link
              href="#journey"
              className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
            >
              Journey
            </Link>
            <Link
              href="#instructor"
              className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
            >
              Instructor
            </Link>
            <Link
              href="#pricing"
              className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
            >
              FAQ
            </Link>
          </nav>
        </div>

        {/* Contact Email */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <a
            href="mailto:contact@quantumrush.ai"
            className="text-sm text-gray-300 hover:text-white transition-colors inline-block mb-4"
          >
            contact@quantumrush.ai
          </a>
        </div>

        {/* Policy Links */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm">
          <Link
            href="/refund-policy"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Refund Policy
          </Link>
          <span className="text-gray-600">|</span>
          <Link
            href="/privacy-policy"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <span className="text-gray-600">|</span>
          <Link
            href="/terms-and-conditions"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Terms & Conditions
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} QuantumRush Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            CIN: U62011TS2024PTC189742
          </p>
        </div>
      </div>
    </footer>
  );
}

