"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const pricingPlans = [
  {
    id: 3,
    title: "LLM Foundations + Agentic AI Mastery",
    price: "₹24,999",
    originalPrice: "₹34,999",
    savings: "₹10,000",
    startDate: "LLM: January 26 | Agentic AI: February 16",
    duration: "10 Weeks Total",
    badge: "⭐ Recommended",
    featureHeading: "The complete AI & Agentic Systems pathway:",
    features: [
      "EVERYTHING in both courses",
      "Build 3–5 LLM apps + 3–5 agents",
      "2 Capstone projects (LLM + Agentic AI)",
      "Priority mentorship access",
      "Deployment support for both systems",
      "Full mastery from prompts → tools → RAG → agents → multi-agent collabs → deployment"
    ],
    perfectFor: "Anyone who wants full-stack AI expertise, wants to build products, automate workflows, or gain end-to-end mastery.",
    cta: "Enroll in the Bundle (Best Value)"
  },
  {
    id: 1,
    title: "LLM Foundations",
    price: "₹14,999",
    startDate: "January 26",
    duration: "5 Weeks · Weekends Only",
    badge: null,
    savings: null,
    featureHeading: "Learn the fundamentals of modern AI:",
    features: [
      "Understand how LLMs actually work",
      "Master prompting, reasoning & function calling",
      "Build real LLM applications from Day 1",
      "Learn RAG, embeddings & vector search",
      "Use OpenAI, Anthropic & Gemini APIs",
      "Deploy your first LLM app with templates included"
    ],
    perfectFor: "Beginners, working professionals, founders, students entering AI for the first time.",
    cta: "Enroll in LLM Foundations"
  },
  {
    id: 2,
    title: "Agentic AI Mastery",
    price: "₹19,999",
    startDate: "February 16",
    duration: "5 Weeks · Weekends Only",
    badge: null,
    savings: null,
    featureHeading: "Build autonomous, real-world AI agents:",
    features: [
      "LangGraph, CrewAI & Autogen deep dive",
      "Design memory-driven single agents",
      "Build multi-agent collaborative workflows",
      "Browser automation, API actions & search tools",
      "Integrate code execution, RAG & databases",
      "Deploy live agent systems using Railway/DO"
    ],
    perfectFor: "Professionals who want to build intelligent systems, automate workflows, or create real AI products.",
    cta: "Enroll in Agentic AI Mastery"
  }
];

function PriceCard({ plan, onEnroll }: { plan: typeof pricingPlans[0]; onEnroll: () => void }) {
  const isBundle = plan.id === 3;
  const isAgenticAI = plan.id === 2;
  
  return (
    <div className={`${isBundle ? 'bg-gray-900 scale-110 ring-4 ring-purple-600/30' : 'bg-gray-200/10 backdrop-blur-sm'} rounded-2xl shadow-lg ${isBundle ? 'p-7 md:p-10' : 'p-6 md:p-8'} flex flex-col h-full relative ${isBundle ? 'z-10' : ''}`}>
      {plan.badge && (
        <div className="mb-4 text-center">
          <span className={`inline-block px-4 py-2 ${isBundle ? 'bg-purple-600 text-white' : 'bg-purple-600/20 text-purple-700'} rounded-full text-sm font-semibold`}>
            {plan.badge}
          </span>
        </div>
      )}
      
      <h3 className={`text-2xl md:text-3xl font-bold ${isBundle ? 'text-white' : 'text-gray-900'} mb-2`}>
        {plan.title}
      </h3>
      
      <div className="mb-4">
        <div className="flex items-baseline gap-2">
          <span className={`text-3xl md:text-4xl font-bold ${isBundle ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
          {plan.originalPrice && (
            <span className={`text-lg ${isBundle ? 'text-gray-400' : 'text-gray-500'} line-through`}>{plan.originalPrice}</span>
          )}
        </div>
        {plan.savings && (
          <p className={`text-sm ${isBundle ? 'text-purple-400' : 'text-purple-600'} font-semibold mt-1`}>Save {plan.savings}</p>
        )}
      </div>
      
      <div className={`mb-6 space-y-2 text-sm md:text-base ${isBundle ? 'text-gray-300' : 'text-gray-700'}`}>
        <p><span className="font-semibold">Start Date:</span> {plan.startDate}</p>
        <p><span className="font-semibold">Duration:</span> {plan.duration}</p>
      </div>
      
      <div className="mb-6 flex-1">
        <h4 className={`font-semibold ${isBundle ? 'text-white' : 'text-gray-900'} mb-3`}>{plan.featureHeading}</h4>
        <ul className="space-y-2">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex gap-2 items-start">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-purple-600" />
              <span className={`text-sm md:text-base ${isBundle ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mb-6">
        <p className={`text-sm md:text-base ${isBundle ? 'text-gray-300' : 'text-gray-700'}`}>
          <span className="font-semibold">Perfect for:</span> {plan.perfectFor}
        </p>
      </div>

      {/* Recommendation note for Agentic AI */}
      {isAgenticAI && (
        <div className="mb-4 p-3 bg-purple-500/10 border border-purple-600/30 rounded-lg">
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
            <strong>💡 Recommended:</strong> Take LLM Foundations first or choose Bundle
          </p>
        </div>
      )}
      
      <button
        onClick={onEnroll}
        className={`w-full ${isBundle ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'} px-6 py-3 rounded-full font-semibold transition-colors text-base md:text-lg mt-auto`}
      >
        {plan.cta}
      </button>
    </div>
  );
}

function EnrollmentModal({ 
  isOpen, 
  onClose, 
  planId, 
  planName 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  planId: number;
  planName: string;
}) {
  // Start with form step (removed warning popup for better conversion)
  const [step, setStep] = useState<"form" | "payment">("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [selectedGateway, setSelectedGateway] = useState<"razorpay" | null>("razorpay");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset step when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setStep("form");
      setFormData({ name: "", email: "", phone: "" });
      setSelectedGateway(null);
    }
  }, [isOpen, planId]);

  // Google Apps Script Web App URL - Replace with your actual web app URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby_GA6mD1aBpcwBTltK7hEGeCcuWdwQrzTMh9Sgtlkd88IPDJvRayFgdAtQ2bYQmggpOw/exec";

  const submitToGoogleSheets = async () => {
    try {
      const planDetails = pricingPlans.find(p => p.id === planId);
      const timestamp = new Date().toISOString();
      
      const data = {
        timestamp: timestamp,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        planId: planId,
        planName: planName,
        planPrice: planDetails?.price || "",
        paymentGateway: "razorpay"
      };

      // Submit to Google Sheets
      if (GOOGLE_SCRIPT_URL) {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        
        // Note: no-cors mode means we can't read the response
        // But the data will still be sent to Google Sheets
        console.log("Data submitted to Google Sheets:", data);
      }
    } catch (error) {
      console.error("Error submitting to Google Sheets:", error);
      // Continue with payment flow even if Google Sheets submission fails
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
  };

  const handlePayment = async () => {
    setIsSubmitting(true);

    try {
      // Submit to Google Sheets before redirecting
      await submitToGoogleSheets();

      // Store customer data in localStorage for reference
      localStorage.setItem('customerData', JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        planId: planId,
        planName: planName
      }));

      const gatewayMap: Record<string, string> = {
        "1-razorpay": "https://rzp.io/rzp/DXdIObc", // LLM Foundations
        "2-razorpay": "https://rzp.io/rzp/rEJZDsc", // Agentic AI Mastery
        "3-razorpay": "https://rzp.io/rzp/kvOudgi"  // Bundle
      };
      
      const paymentKey = `${planId}-razorpay`;
      const paymentUrl = gatewayMap[paymentKey];
      
      if (!paymentUrl) {
        console.error('Payment URL not found for plan:', planId);
        setIsSubmitting(false);
        return;
      }
      
      // Add customer data as URL parameters for Razorpay
      const urlWithParams = new URL(paymentUrl);
      urlWithParams.searchParams.set('prefill[name]', formData.name);
      urlWithParams.searchParams.set('prefill[email]', formData.email);
      urlWithParams.searchParams.set('prefill[contact]', formData.phone);
      
      console.log('Redirecting to:', urlWithParams.toString());
      
      // Redirect to Razorpay with pre-filled customer data
      window.location.href = urlWithParams.toString();
    } catch (error) {
      console.error('Error in handlePayment:', error);
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {step === "form" ? "Enroll Now" : "Choose Payment Gateway"}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-900/90 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          {step === "form" ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Banner for Agentic AI suggesting Bundle */}
              {planId === 2 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    <strong>💡 Recommendation:</strong> Want to start with LLM Foundations?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        // Trigger enrollment for Bundle (planId 3) after a short delay
                        setTimeout(() => {
                          const event = new CustomEvent('switchToPlan', { detail: { planId: 3 } });
                          window.dispatchEvent(event);
                        }, 100);
                      }}
                      className="text-blue-600 hover:text-blue-800 font-semibold underline"
                    >
                      Switch to Bundle for best value
                    </button>
                  </p>
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Continue to Payment"}
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-700 mb-6">
                You will be redirected to our secure payment gateway:
              </p>
              
              <div className="w-full p-4 border-2 border-gray-900 bg-gray-50 rounded-lg">
                <div className="font-semibold text-gray-900">Razorpay</div>
                <div className="text-sm text-gray-600">Secure payment via Razorpay</div>
                <div className="text-xs text-green-600 mt-1">✓ Your details will be pre-filled</div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setStep("form")}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => {
                    console.log('Payment button clicked');
                    handlePayment();
                  }}
                  disabled={isSubmitting}
                  className="flex-1 bg-gray-900 text-white px-4 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Proceed to Payment"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnroll = (planId: number) => {
    setSelectedPlan(planId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  // Listen for plan switch events from the enrollment modal
  useEffect(() => {
    const handleSwitchPlan = (event: CustomEvent) => {
      const { planId } = event.detail;
      setSelectedPlan(planId);
      setIsModalOpen(true);
    };

    window.addEventListener('switchToPlan', handleSwitchPlan as EventListener);
    return () => {
      window.removeEventListener('switchToPlan', handleSwitchPlan as EventListener);
    };
  }, []);

  return (
    <>
      <div id="pricing" className="relative w-full min-h-screen overflow-hidden">
        
        {/* Main content area */}
        <div className="relative z-10 min-h-screen flex items-start px-4 md:px-8 lg:px-12 xl:px-16 pt-16 md:pt-8 md:items-start overflow-y-auto">
          <div className="w-full max-w-7xl mx-auto py-8 md:py-12">
            {/* Heading Section */}
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                Choose Your Learning Path
              </h2>
              <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
                Select the course that best fits your goals and start building AI systems today.
              </p>
            </div>

            {/* Price Cards */}
            <div 
              className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {pricingPlans.map((plan) => (
                <div key={plan.id} className="flex-shrink-0 w-[85vw] md:w-auto snap-center">
                  <PriceCard
                    plan={plan}
                    onEnroll={() => handleEnroll(plan.id)}
                  />
                </div>
              ))}
            </div>

            {/* Tool Usage Policy Disclaimer */}
            <div className="mt-8 md:mt-12 text-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 md:p-6 max-w-3xl mx-auto border border-white/10">
                <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-3 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Tool Usage Policy
                </h3>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  All tools used in the course come with generous free tiers. You only need to create free developer accounts for OpenAI, Anthropic, Pinecone, etc. Any optional usage beyond the free tier is your choice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enrollment Modal */}
      {selectedPlan && (
        <EnrollmentModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          planId={selectedPlan}
          planName={pricingPlans.find(p => p.id === selectedPlan)?.title || ""}
        />
      )}
    </>
  );
}

