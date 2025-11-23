"use client";

import Image from "next/image";
import Link from "next/link";

interface InstructorCardProps {
  name: string;
  title: string;
  imageSrc?: string;
  linkedInUrl?: string;
}

export default function InstructorCard({ name, title, imageSrc, linkedInUrl }: InstructorCardProps) {
  return (
    <div className="relative rounded-2xl shadow-lg px-6 md:px-8 py-8 md:py-10 pt-20 md:pt-24 overflow-visible">
      {/* Card background - isolated blur layer */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl z-0" />
      
      {/* Etched/recessed circular area - creates carved appearance */}
      {imageSrc && (
        <div 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 rounded-full z-0"
          style={{
            background: 'radial-gradient(circle, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.15) 100%)',
            boxShadow: `
              inset 0 4px 20px rgba(0,0,0,0.6),
              inset 0 -2px 10px rgba(0,0,0,0.4),
              0 0 0 3px rgba(255,255,255,0.1),
              0 4px 15px rgba(0,0,0,0.3)
            `,
          }}
        />
      )}
      
      {/* Instructor Image - Circular, half sticking out */}
      {imageSrc && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/40 shadow-2xl ring-2 ring-emerald-500/40">
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Content with top padding to account for image */}
      <div className="relative z-10 mt-8 md:mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
          {name}
        </h2>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed text-center mb-4">
          {title}
        </p>
        
        {/* LinkedIn Icon */}
        {linkedInUrl && (
          <div className="flex justify-center">
            <Link
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Image
                src="/LinkedIn.svg"
                alt="LinkedIn"
                width={60}
                height={60}
                className="w-12 h-12 md:w-16 md:h-16"
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

