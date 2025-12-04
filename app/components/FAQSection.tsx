"use client";

import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Do I need prior AI or coding experience to join?",
    answer: "No. The LLM Foundations cohort starts from absolute basics and focuses on practical building rather than theory. Agentic AI Mastery requires only the basics you learn in the LLM course—no advanced coding or ML background needed."
  },
  {
    id: 2,
    question: "What if I have never worked with APIs or Python before?",
    answer: "You'll learn all the essential elements during the course. Every session includes guided examples, templates, and hands-on walkthroughs designed for beginners."
  },
  {
    id: 3,
    question: "What's the difference between the two courses?",
    answer: "LLM Foundations teaches: how LLMs work, prompting, function calling, RAG, building simple applications. Agentic AI Mastery teaches: autonomous agents, multi-agent workflows, LangGraph, CrewAI, Autogen, memory systems, real-world automation & deployment. Most students who want deep expertise take the Bundle (LLM + Agentic AI)."
  },
  {
    id: 4,
    question: "What tools and technologies will we use?",
    answer: "You'll work with OpenAI, Anthropic, Gemini, LangGraph, CrewAI, ChromaDB, Pinecone, API integrations, browser automation, and deployment platforms such as Railway, Render, and DigitalOcean. All tools are guided step-by-step."
  },
  {
    id: 5,
    question: "Are the classes live or recorded?",
    answer: "Both. You attend live weekend classes. All sessions are recorded and available for lifetime access. Perfect for people with unpredictable schedules."
  },
  {
    id: 6,
    question: "Will there be assignments or projects?",
    answer: "Yes. Every week includes a hands-on project, and both courses end with a full capstone project that helps you build a portfolio-ready AI or Agentic system."
  },
  {
    id: 7,
    question: "What should I do if I miss a class?",
    answer: "Recordings are uploaded within 12–24 hours, and you can ask questions anytime in the community group or during office hours."
  },
  {
    id: 8,
    question: "Do I get a certificate?",
    answer: "Yes. Every student receives a QuantumRush Certificate of Completion for each course they finish."
  },
  {
    id: 9,
    question: "How long will it take before I can build my own AI tools?",
    answer: "In the very first session. Your first class focuses on building your initial working AI tool so you gain confidence immediately."
  },
  {
    id: 10,
    question: "Will I be able to add these projects to my portfolio or resume?",
    answer: "Absolutely. The core intention of the program is to help you graduate with real, deployable AI systems you can demonstrate to employers, clients, or investors."
  },
  {
    id: 11,
    question: "I'm a working professional. Will I be able to manage the workload?",
    answer: "Yes. The program is designed for busy schedules: Weekend-only live sessions, Weekly project work that can be done at your own pace, Complete recordings and templates provided."
  },
  {
    id: 12,
    question: "How do I choose between LLM Foundations and the Agentic AI Mastery?",
    answer: "If you're new to LLMs or have not built AI applications before → Start with LLM Foundations. If you already know prompting, function calling, and basic RAG → You can jump directly into Agentic AI Mastery. If you want full-stack mastery → Choose the Bundle (recommended)."
  },
  {
    id: 13,
    question: "Do I need to pay for the tools and APIs used in the course?",
    answer: "All tools used in the course come with generous free tiers. You only need to create free developer accounts for OpenAI, Anthropic, Pinecone, etc. Any optional usage beyond the free tier is your choice."
  }
];

function FAQCard({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="bg-gray-200/10 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 md:px-8 py-4 md:py-5 text-left flex items-center justify-between hover:bg-gray-200/20 transition-colors"
      >
        <h3 className="text-lg md:text-xl lg:text-base xl:text-xl font-semibold text-gray-900 pr-4">
          {faq.question}
        </h3>
        <svg
          className={`w-5 h-5 md:w-6 md:h-6 text-gray-900 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 md:px-8 pb-6 md:pb-8">
          <p className="text-sm md:text-base text-gray-900 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  const [openFAQs, setOpenFAQs] = useState<Set<number>>(new Set());

  const toggleFAQ = (faqId: number) => {
    const newOpenFAQs = new Set(openFAQs);
    if (newOpenFAQs.has(faqId)) {
      newOpenFAQs.delete(faqId);
    } else {
      newOpenFAQs.add(faqId);
    }
    setOpenFAQs(newOpenFAQs);
  };

  return (
    <div id="faq" className="relative w-full min-h-screen overflow-hidden">
      
      {/* Main content area */}
      <div className="relative z-10 min-h-screen flex items-start px-4 md:px-8 lg:px-12 xl:px-16 pt-20 lg:pt-24 xl:pt-8 md:items-start overflow-y-auto">
        <div className="w-full max-w-7xl mx-auto py-8 md:py-12">
          {/* Heading Section */}
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-3xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              ⭐ FAQ SECTION
            </h2>
          </div>

          {/* FAQ Cards */}
          <div className="space-y-4 md:space-y-6">
            {faqs.map((faq) => (
              <FAQCard
                key={faq.id}
                faq={faq}
                isOpen={openFAQs.has(faq.id)}
                onToggle={() => toggleFAQ(faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

