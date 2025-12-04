"use client";

import Image from "next/image";
import { useState } from "react";
import InstructorCard from "./InstructorCard";
import AboutInstructorCard from "./AboutInstructorCard";

const instructors = [
  {
    id: 1,
    name: "Girija Shankar Vajrapu",
    title: "Founder, QuantumRush · AI/ML Practitioner · Data & Agentic Systems Architect",
    imageSrc: "/girija.jpg",
    linkedInUrl: "https://www.linkedin.com/in/vajrapushankar/",
    bio: "Girija is a hands-on AI practitioner with over 15 years of experience building intelligent systems, data platforms, and automation workflows across multiple industries.",
    projectsIntro: "He has led and delivered projects in:",
    projects: [
      "AI/ML model development",
      "LLM-based automation",
      "Multi-agent orchestration",
      "Data engineering & analytics",
      "High-scale workflow automation"
    ],
    additionalInfo: [
      "He blends deep technical foundations with practical, real-world implementation, making complex AI concepts simple, actionable, and buildable — even for beginners.",
      "Over the years, Girija has trained professionals, entrepreneurs, founders, and engineers in leveraging AI to automate decisions, streamline operations, and build scalable products."
    ],
    philosophyIntro: "His teaching philosophy is simple:",
    philosophy: [
      "Learn by building.",
      "Understand by doing.",
      "Master by deploying."
    ]
  }
];

export default function InstructorSection() {
  const [currentInstructorIndex, setCurrentInstructorIndex] = useState(0);

  return (
    <div id="instructor" className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      {/* <div className="absolute inset-0 w-full h-full">
        <Image
          src="/infocard_section_background.svg"
          alt="Instructor Section Background"
          fill
          className="object-cover"
          priority
          style={{ opacity: 1 }}
        />
      </div> */}
      
      {/* Main content area */}
      <div className="relative z-10 h-full flex items-center px-4 md:px-8 lg:px-12 xl:px-16 pt-32 md:pt-0 lg:pt-24 xl:pt-0 md:items-center">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-8 xl:gap-12 lg:items-center">
          {/* Left Card - Smaller */}
          <div className="lg:col-span-1 lg:flex lg:items-center">
            <InstructorCard
              name={instructors[currentInstructorIndex].name}
              title={instructors[currentInstructorIndex].title}
              imageSrc={instructors[currentInstructorIndex].imageSrc}
              linkedInUrl={instructors[currentInstructorIndex].linkedInUrl}
            />
          </div>

          {/* Right Card - Larger */}
          <div className="lg:col-span-2">
            <AboutInstructorCard
              bio={instructors[currentInstructorIndex].bio}
              projectsIntro={instructors[currentInstructorIndex].projectsIntro}
              projects={instructors[currentInstructorIndex].projects}
              additionalInfo={instructors[currentInstructorIndex].additionalInfo}
              philosophyIntro={instructors[currentInstructorIndex].philosophyIntro}
              philosophy={instructors[currentInstructorIndex].philosophy}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

