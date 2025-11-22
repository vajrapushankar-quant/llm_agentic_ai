import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl mx-auto bg-white/10 backdrop-blur-sm rounded-full shadow-lg px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/quantum_black_logo.svg"
          alt="Quantum Logo"
          width={300}
          height={90}
          className="h-16 w-auto"
        />
      </div>

      {/* Menu Items and CTA Button Group */}
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
        <button className="bg-black text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-colors whitespace-nowrap">
          Enroll Now
        </button>
      </div>

      {/* Mobile CTA Button */}
      <button className="md:hidden bg-black text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-colors whitespace-nowrap">
        Enroll Now
      </button>
    </nav>
  );
}

