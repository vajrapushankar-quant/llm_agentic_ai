"use client";

import Image from "next/image";
import { useState } from "react";

const courses = [
  {
    id: 1,
    title: "⭐ LLM FOUNDATIONS (5 Weeks)",
    description: "A practical introduction to LLMs, prompting, tools, APIs & reasoning patterns.",
    cohortInfo: "Cohort Start: January 14 · Duration: 5 weeks · Weekdays/Weekends",
    weeks: [
      {
        id: 1,
        title: "WEEK 1 — Understanding LLMs & Your First AI Build",
        content: [
          "How LLMs work: tokens, context windows, reasoning",
          "Prompting fundamentals: structure, patterns, failure cases",
          "Zero-shot, Few-shot & Chain-of-Thought",
          "Build your first working LLM tool",
          "Research assistant",
          "Summarizer with memory",
          "Introduction to OpenAI, Anthropic & Gemini APIs",
          "Outcome: Build a functioning LLM-powered tool before learning the theory."
        ]
      },
      {
        id: 2,
        title: "WEEK 2 — Prompt Engineering & Function Calling",
        content: [
          "Advanced prompts: role prompting, personas, steering",
          "When and why prompts break",
          "Function Calling (OpenAI), Tools (Anthropic)",
          "Designing predictable LLM behaviours",
          "Building structured response pipelines",
          "Using LLMs for multi-step reasoning tasks",
          "Project: Build a tool-using agent (search, calculator, file parsing)."
        ]
      },
      {
        id: 3,
        title: "WEEK 3 — RAG Fundamentals (Retrieval Augmented Generation)",
        content: [
          "What RAG solves (and what it doesn't)",
          "Embeddings: how they work",
          "Vector databases: Chroma, Pinecone, FAISS",
          "Document chunking strategies",
          "Building a knowledge assistant for PDFs, Docs, Websites",
          "Query rewriting, re-ranking & memory-enhanced RAG",
          "Project: Build a personal knowledge assistant with a vector DB."
        ]
      },
      {
        id: 4,
        title: "WEEK 4 — LLM Applications & Tools Layer",
        content: [
          "Tool integration theory: APIs vs Functions",
          "External actions: search, code execution, file I/O",
          "Using LangChain & LlamaIndex (core patterns only)",
          "Error handling, model fallbacks & retries",
          "Building modular LLM systems that scale",
          "Project: Build a modular LLM app with multiple tools."
        ]
      },
      {
        id: 5,
        title: "WEEK 5 — Capstone: LLM System Design + Deployment",
        content: [
          "Designing LLM-powered products",
          "Observability: logs, evaluation, fixes",
          "Deploying on Railway, Render, DO App Platform",
          "Creating a portfolio-ready demo",
          "Capstone: Deploy a complete LLM-powered application."
        ]
      }
    ]
  },
  {
    id: 2,
    title: "🔥 AGENTIC AI MASTERY (5 Weeks)",
    description: "Build autonomous agents, multi-agent systems, workflows & real AI automation.",
    cohortInfo: "Cohort Start: February 20 · Duration: 5 weeks · Weekdays/Weekends",
    weeks: [
      {
        id: 1,
        title: "WEEK 1 — Agents 101 + Your First Single Agent",
        content: [
          "From LLM → Agent: what changes?",
          "Planning, memory, reasoning loops",
          "Tools API, function calling, structured tasks",
          "LangGraph introduction",
          "Build your first autonomous agent",
          "Task planning",
          "Memory-enabled",
          "Tool-using",
          "Outcome: Deploy a real agent that can plan + execute."
        ]
      },
      {
        id: 2,
        title: "WEEK 2 — Agent Architectures & LangGraph Mastery",
        content: [
          "State machines for AI",
          "Nodes, edges, conditional routing",
          "Memory Types:",
          "Short-term",
          "Long-term vector memory",
          "Entity memory",
          "Error-handling agents",
          "Checkpointing & persistence",
          "Project: Build an agent workflow that solves multi-step tasks."
        ]
      },
      {
        id: 3,
        title: "WEEK 3 — Multi-Agent Collaboration (CrewAI + Autogen)",
        content: [
          "When to use multi-agent systems",
          "CrewAI essentials",
          "Autogen Assistant + User Proxy",
          "Task delegation, routing, collaboration",
          "Communication protocols between agents",
          "Role-based specialisation",
          "Evaluator agents & safety nets",
          "Project: Build a 3-agent team (Researcher → Analyst → Writer)."
        ]
      },
      {
        id: 4,
        title: "WEEK 4 — Real-World Integrations & Action Layer",
        content: [
          "Integrating agents with real tools:",
          "Browser automation (Playwright)",
          "Web research APIs (Serper, Tavily, Exa)",
          "Code execution & debugging",
          "Email, docs, files, spreadsheets",
          "Database operations",
          "Connecting external APIs",
          "Real-time monitoring",
          "Project: Build a fully integrated real-world agent."
        ]
      },
      {
        id: 5,
        title: "WEEK 5 — Capstone: Real AI System Deployment",
        content: [
          "System design for agentic platforms",
          "Observability & debugging agent loops",
          "Deploying agents (Railway / Render / DO)",
          "Using Next.js for simple UI dashboards",
          "Hardening agent systems",
          "Safety, constraints & guardrails",
          "Capstone Options:",
          "Research automation agent",
          "Financial/data analysis agent",
          "Full workflow automation bot",
          "AI customer support agent",
          "Browser research agent",
          "Knowledge worker automation"
        ]
      }
    ]
  }
];

function WeekCard({ week, isOpen, onToggle }: { week: typeof courses[0]['weeks'][0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="bg-gray-200/10 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 md:px-8 py-4 md:py-5 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <h3 className="text-lg md:text-xl lg:text-base xl:text-xl font-semibold text-gray-900 pr-4">
          {(() => {
            const parts = week.title.split(' — ');
            if (parts.length > 1) {
              return (
                <>
                  <span className="text-purple-600">{parts[0]} — </span>
                  <span>{parts.slice(1).join(' — ')}</span>
                </>
              );
            }
            return <span>{week.title}</span>;
          })()}
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
          <ul className="space-y-2 md:space-y-3">
            {week.content.map((item, index) => (
              <li key={index} className="flex gap-3 items-start">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-purple-600" />
                <span className="text-sm md:text-base text-gray-900 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function CourseSection() {
  const [openWeeks, setOpenWeeks] = useState<Set<string>>(new Set());

  const toggleWeek = (courseId: number, weekId: number) => {
    const key = `${courseId}-${weekId}`;
    const newOpenWeeks = new Set(openWeeks);
    if (newOpenWeeks.has(key)) {
      newOpenWeeks.delete(key);
    } else {
      newOpenWeeks.add(key);
    }
    setOpenWeeks(newOpenWeeks);
  };

  return (
    <div id="course" className="relative w-full min-h-screen overflow-hidden">
      
      {/* Main content area */}
      <div className="relative z-10 min-h-screen flex items-start px-4 md:px-8 lg:px-12 xl:px-16 pt-20 lg:pt-24 xl:pt-8 md:items-start overflow-y-auto">
        <div className="w-full max-w-7xl mx-auto py-8 md:py-12">
          {courses.map((course) => (
            <div key={course.id} className="mb-16 md:mb-20 last:mb-0">
              {/* Heading Section */}
              <div className="mb-8 md:mb-12 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-3xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                  {course.title}
                </h2>
                <p className="text-base md:text-lg lg:text-base xl:text-xl text-gray-900 mb-4 md:mb-6 max-w-3xl mx-auto">
                  {course.description}
                </p>
                <p className="text-sm md:text-base lg:text-sm xl:text-base text-gray-700">
                  {course.cohortInfo}
                </p>
              </div>

              {/* Week Cards */}
              <div className="space-y-4 md:space-y-6">
                {course.weeks.map((week) => (
                  <WeekCard
                    key={week.id}
                    week={week}
                    isOpen={openWeeks.has(`${course.id}-${week.id}`)}
                    onToggle={() => toggleWeek(course.id, week.id)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

