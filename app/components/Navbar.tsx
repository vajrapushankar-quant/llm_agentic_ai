"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl mx-auto bg-white/10 backdrop-blur-sm rounded-full shadow-lg px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Logo - smaller on mobile */}
        <Link 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center"
        >
          <Image
            src="/quantum_black_logo.svg"
            alt="Quantum Logo"
            width={300}
            height={90}
            className="h-8 md:h-16 w-auto"
          />
        </Link>

        {/* Menu Items and CTA Button Group - Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {/* Menu Items */}
          <div className="flex items-center gap-8">
            <Link
              href="#course"
              className="text-gray-700 hover:text-black transition-all duration-200 font-medium relative hover:underline underline-offset-4"
            >
              Course
            </Link>
            <Link
              href="#journey"
              className="text-gray-700 hover:text-black transition-all duration-200 font-medium relative hover:underline underline-offset-4"
            >
              Journey
            </Link>
            <Link
              href="#instructor"
              className="text-gray-700 hover:text-black transition-all duration-200 font-medium relative hover:underline underline-offset-4"
            >
              Instructor
            </Link>
            <Link
              href="#faq"
              className="text-gray-700 hover:text-black transition-all duration-200 font-medium relative hover:underline underline-offset-4"
            >
              FAQ
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="#pricing"
            className="bg-black text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
          >
            Enroll Now
          </Link>
        </div>

        {/* Hamburger Menu Button - Mobile only */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu - slides down */}
      {isMenuOpen && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 w-[95%] max-w-7xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-xl md:hidden">
          <div className="flex flex-col p-6 gap-4">
            <Link
              href="#course"
              className="text-gray-700 hover:text-black transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Course
            </Link>
            <Link
              href="#journey"
              className="text-gray-700 hover:text-black transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Journey
            </Link>
            <Link
              href="#instructor"
              className="text-gray-700 hover:text-black transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Instructor
            </Link>
            <Link
              href="#faq"
              className="text-gray-700 hover:text-black transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="#pricing"
              className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors mt-2 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

