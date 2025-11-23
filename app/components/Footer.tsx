"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Logo */}
          <div className="flex items-center">
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
                width={200}
                height={60}
                className="h-8 md:h-12 w-auto"
              />
            </Link>
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

        {/* Copyright */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} QuantumRush. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

