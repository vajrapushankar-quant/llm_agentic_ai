"use client";

import Image from "next/image";

interface JourneyCardProps {
  title: string;
  description: string;
  items: string[];
  animationSrc: string;
}

export default function JourneyCard({ title, description, items, animationSrc }: JourneyCardProps) {
  return (
    <div className="w-full max-w-7xl mx-auto aspect-[4/3] bg-gray-200/10 backdrop-blur-sm rounded-2xl shadow-lg px-6 md:px-8 lg:px-12 py-8 md:py-12 flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12">
      {/* Animation/Image Section */}
      <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center items-center">
        <Image
          src={animationSrc}
          alt={title}
          width={600}
          height={600}
          className="w-auto h-auto object-contain max-h-[40vh] md:max-h-[50vh]"
          unoptimized
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 w-full md:w-1/2 space-y-4 md:space-y-6">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
          {title}
        </h3>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-2 md:space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex gap-3 items-start">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-purple-600" />
              <span className="text-sm md:text-base text-gray-900">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

