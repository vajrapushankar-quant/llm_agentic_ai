"use client";

import Image from "next/image";
import JourneyCard from "./JourneyCard";
import { useState, useRef } from "react";

const journeyCards = [
  {
    id: 1,
    title: "1. Quick Wins: Build Your First AI Tool",
    description: "Students immediately build something real in the first class. This builds confidence and momentum from day one.",
    items: [
      "A research assistant",
      "A summarizer with memory",
      "A simple autonomous agent"
    ],
    animationSrc: "/quick win animation.gif"
  },
  {
    id: 2,
    title: "2. Awareness & Understanding",
    description: "Now they understand what happened behind the scenes. They now know why their first project worked.",
    items: [
      "how LLMs think",
      "how context & memory work",
      "how reasoning patterns operate",
      "why tools expand capabilities"
    ],
    animationSrc: "/awareness_animation.gif"
  },
  {
    id: 3,
    title: "3. Developing LLM Skillsets",
    description: "Students deepen their capabilities. They move from \"copy-pasting prompts\" → actually understanding LLM mechanics.",
    items: [
      "prompt frameworks",
      "function calling",
      "tool usage",
      "RAG pipelines",
      "embeddings & vector stores"
    ],
    animationSrc: "/skillset.gif"
  },
  {
    id: 4,
    title: "4. Building Real Agent Workflows",
    description: "Students move from LLM apps → autonomous agents. Now they build agents that act, not just respond.",
    items: [
      "LangGraph",
      "CrewAI",
      "Autogen basics",
      "state machines",
      "memory loops",
      "evaluation & correction cycles"
    ],
    animationSrc: "/workflow.gif"
  },
  {
    id: 5,
    title: "5. Multi-Agent Systems",
    description: "Students design multi-agent collaboration. This is where they build \"AI teams\".",
    items: [
      "communication patterns",
      "message passing",
      "delegation",
      "routing roles"
    ],
    animationSrc: "/multi agent.gif"
  },
  {
    id: 6,
    title: "6. Integration With the Real World",
    description: "Students connect agents to tools & actions. Now their agents can research, take actions, automate workflows, and deploy systems.",
    items: [
      "browser automation",
      "search",
      "code execution",
      "file I/O",
      "API integrations"
    ],
    animationSrc: "/integration.gif"
  },
  {
    id: 7,
    title: "7. Capstone: Deploying a Real AI System",
    description: "Students build an end-to-end production project and deploy it with Railway / DO / Next.js.",
    items: [
      "research agent",
      "workflow automation bot",
      "personal productivity agent",
      "analytics agent",
      "trading helper",
      "customer support agent"
    ],
    animationSrc: "/deploye.gif"
  }
];

export default function AiJourneySection() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const isDragging = useRef(false);

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentCardIndex < journeyCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
    if (isRightSwipe && currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  // Mouse drag support for desktop
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    touchStartX.current = e.clientX;
    touchEndX.current = null;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    touchEndX.current = e.clientX;
  };

  const onMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentCardIndex < journeyCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
    if (isRightSwipe && currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentCardIndex < journeyCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  return (
    <div 
      id="journey"
      className="relative w-full h-screen overflow-hidden cursor-grab active:cursor-grabbing md:cursor-default"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      {/* Background image */}
      {/* <div className="absolute inset-0 w-full h-full">
        <Image
          src="/infocard_section_background.svg"
          alt="Info Card Section Background"
          fill
          className="object-cover"
          priority
          style={{ opacity: 1 }}
        />
      </div> */}
      
      {/* Main content area */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 md:px-8 lg:px-12 xl:px-16 pt-20 lg:pt-24 xl:pt-0">
        {/* Mobile: Show cards with peek effect */}
        <div className="relative w-full max-w-7xl md:hidden flex items-center justify-center">
          {/* Previous card peek (left edge) */}
          {currentCardIndex > 0 && (
            <div className="absolute left-0 w-[8%] h-full flex items-center pointer-events-none z-0">
              <div className="w-full h-[60%] bg-white/10 backdrop-blur-sm rounded-l-2xl shadow-lg border-l-2 border-white/20" />
            </div>
          )}
          
          {/* Current card (center) */}
          <div className="w-full z-10">
            <JourneyCard
              title={journeyCards[currentCardIndex].title}
              description={journeyCards[currentCardIndex].description}
              items={journeyCards[currentCardIndex].items}
              animationSrc={journeyCards[currentCardIndex].animationSrc}
            />
          </div>

          {/* Next card peek (right edge) */}
          {currentCardIndex < journeyCards.length - 1 && (
            <div className="absolute right-0 w-[8%] h-full flex items-center pointer-events-none z-0">
              <div className="w-full h-[60%] bg-white/10 backdrop-blur-sm rounded-r-2xl shadow-lg border-r-2 border-white/20" />
            </div>
          )}
        </div>

        {/* Desktop: Single card with arrows */}
        <div className="hidden md:flex relative w-full max-w-7xl items-center">
          {/* Left Arrow Button */}
          {currentCardIndex > 0 && (
            <button
              onClick={goToPrevious}
              className="absolute left-0 -translate-x-full -ml-4 lg:-ml-8 xl:-ml-12 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 lg:p-4 transition-all duration-200 shadow-lg"
              aria-label="Previous card"
            >
              <svg
                className="w-6 h-6 lg:w-8 lg:h-8 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Current card */}
          <div className="w-full">
            <JourneyCard
              title={journeyCards[currentCardIndex].title}
              description={journeyCards[currentCardIndex].description}
              items={journeyCards[currentCardIndex].items}
              animationSrc={journeyCards[currentCardIndex].animationSrc}
            />
          </div>

          {/* Right Arrow Button */}
          {currentCardIndex < journeyCards.length - 1 && (
            <button
              onClick={goToNext}
              className="absolute left-full ml-4 lg:ml-8 xl:ml-12 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 lg:p-4 transition-all duration-200 shadow-lg"
              aria-label="Next card"
            >
              <svg
                className="w-6 h-6 lg:w-8 lg:h-8 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Position Indicator (Desktop only) */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 gap-2">
        {journeyCards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentCardIndex(index)}
            className={`transition-all duration-200 rounded-full ${
              index === currentCardIndex
                ? "w-8 h-2 bg-white/80"
                : "w-2 h-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
