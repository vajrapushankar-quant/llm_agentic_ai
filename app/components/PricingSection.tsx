"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// Currency conversion rates (approximate, update as needed)
const CURRENCY_RATES = {
  USD: 0.012, // 1 INR = 0.012 USD (approx)
  GBP: 0.0095, // 1 INR = 0.0095 GBP (approx)
};

// Price in INR (without currency symbol)
const PRICE_IN_INR = {
  1: 14999,
  2: 19999,
  3: 24999,
};

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

function PriceCard({ plan, onEnroll, userCountry }: { plan: typeof pricingPlans[0]; onEnroll: () => void; userCountry: string | null }) {
  const isBundle = plan.id === 3;
  const isAgenticAI = plan.id === 2;
  
  // Get price in INR
  const priceInINR = PRICE_IN_INR[plan.id as keyof typeof PRICE_IN_INR];
  
  // Calculate converted price based on country
  let convertedPrice: string | null = null;
  if (userCountry === "US") {
    const usdPrice = Math.round(priceInINR * CURRENCY_RATES.USD);
    convertedPrice = `(approx. USD ${usdPrice})`;
  } else if (userCountry === "GB") {
    const gbpPrice = Math.round(priceInINR * CURRENCY_RATES.GBP);
    convertedPrice = `(approx. GBP ${gbpPrice})`;
  }
  
  return (
    <div className={`${isBundle ? 'bg-gray-900 md:scale-110 ring-4 ring-purple-600/30' : 'bg-gray-200/10 backdrop-blur-sm'} rounded-2xl shadow-lg ${isBundle ? 'p-5 md:p-10' : 'p-5 md:p-8'} flex flex-col h-full relative ${isBundle ? 'z-10' : ''}`}>
      {plan.badge && (
        <div className="mb-4 text-center">
          <span className={`inline-block px-4 py-2 ${isBundle ? 'bg-purple-600 text-white' : 'bg-purple-600/20 text-purple-700'} rounded-full text-sm font-semibold`}>
            {plan.badge}
          </span>
        </div>
      )}
      
      <h3 className={`text-xl md:text-3xl lg:text-2xl xl:text-3xl font-bold ${isBundle ? 'text-white' : 'text-gray-900'} mb-2`}>
        {plan.title}
      </h3>
      
      <div className="mb-4">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className={`text-2xl md:text-4xl lg:text-3xl xl:text-4xl font-bold ${isBundle ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
          {plan.originalPrice && (
            <span className={`text-lg ${isBundle ? 'text-gray-400' : 'text-gray-500'} line-through`}>{plan.originalPrice}</span>
          )}
        </div>
        {convertedPrice && (
          <p className={`text-sm ${isBundle ? 'text-gray-300' : 'text-gray-600'} mt-1`}>{convertedPrice}</p>
        )}
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
        className={`w-full ${isBundle ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'} px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold transition-colors text-sm md:text-lg mt-auto`}
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
  planName,
  userCountry
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  planId: number;
  planName: string;
  userCountry: string | null;
}) {
  // Start with form step (removed warning popup for better conversion)
  const [step, setStep] = useState<"form" | "payment" | "cancel">("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    batch: "" as "" | "weekday" | "weekend"
  });
  const [selectedGateway, setSelectedGateway] = useState<"razorpay" | null>("razorpay");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cancelReason, setCancelReason] = useState("");
  const [localTimes, setLocalTimes] = useState<{ weekday: string; weekend: string } | null>(null);

  // Convert IST times to user's local timezone
  useEffect(() => {
    if (isOpen) {
      // Helper function to convert IST time to local time string
      const convertISTToLocal = (istHour: number, istMinute: number): string => {
        // Create a date string in IST format
        const today = new Date();
        const istDateString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}T${String(istHour).padStart(2, '0')}:${String(istMinute).padStart(2, '0')}:00+05:30`;
        
        // Parse as IST and convert to local
        const istDate = new Date(istDateString);
        
        // Format in local time
        const hours = istDate.getHours();
        const minutes = istDate.getMinutes();
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
      };
      
      // Weekday: 6-8 AM IST
      const weekdayStartTime = convertISTToLocal(6, 0);
      const weekdayEndTime = convertISTToLocal(8, 0);
      
      // Weekend: 10 AM - 2 PM IST
      const weekendStartTime = convertISTToLocal(10, 0);
      const weekendEndTime = convertISTToLocal(14, 0);
      
      const weekdayTime = `${weekdayStartTime} - ${weekdayEndTime}`;
      const weekendTime = `${weekendStartTime} - ${weekendEndTime}`;
      
      setLocalTimes({ weekday: weekdayTime, weekend: weekendTime });
    }
  }, [isOpen]);

  // Reset step when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setStep("form");
      setFormData({ name: "", email: "", phone: "", batch: "" });
      setSelectedGateway(null);
      setCancelReason("");
    }
  }, [isOpen, planId]);

  // Google Apps Script Web App URL - Replace with your actual web app URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby_GA6mD1aBpcwBTltK7hEGeCcuWdwQrzTMh9Sgtlkd88IPDJvRayFgdAtQ2bYQmggpOw/exec";

  const submitToGoogleSheets = async (status: "pending" | "cancelled" = "pending", reason?: string) => {
    try {
      const planDetails = pricingPlans.find(p => p.id === planId);
      const timestamp = new Date().toISOString();
      
      // Get batch time in local timezone
      const batchTime = formData.batch === "weekday" 
        ? `Weekday 6-8 AM IST (${localTimes?.weekday || "6:00 - 8:00"} local time)`
        : formData.batch === "weekend"
        ? `Weekend 10 AM - 2 PM IST (${localTimes?.weekend || "10:00 - 14:00"} local time)`
        : "";
      
      const data = {
        timestamp: timestamp,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        planId: planId,
        planName: planName,
        planPrice: planDetails?.price || "",
        paymentGateway: status === "cancelled" ? "cancelled" : "razorpay",
        status: status,
        batch: batchTime,
        cancelReason: reason || "",
        country: userCountry || ""
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
    if (!formData.batch) {
      alert("Please select a batch time");
      return;
    }
    setStep("payment");
  };

  const handleCancel = () => {
    setStep("cancel");
  };

  const handleCancelSubmit = async () => {
    if (!cancelReason) {
      alert("Please select a reason for cancellation");
      return;
    }
    
    setIsSubmitting(true);
    try {
      await submitToGoogleSheets("cancelled", cancelReason);
      alert("Thank you for your feedback. We're sorry to see you go!");
      onClose();
    } catch (error) {
      console.error("Error submitting cancellation:", error);
      alert("There was an error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const loadRazorpayScript = (): Promise<void> => {
    return new Promise((resolve) => {
      if ((window as any).Razorpay) {
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve();
      script.onerror = () => {
        console.error("Failed to load Razorpay script");
        resolve(); // Resolve anyway to prevent hanging
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setIsSubmitting(true);

    try {
      // Submit to Google Sheets before redirecting
      await submitToGoogleSheets("pending");

      // Fire Meta Pixel Lead event
      if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
        (window as any).fbq("track", "Lead", {
          planId: planId,
          planName: planName
        });
      }

      // Store customer data in localStorage for reference
      localStorage.setItem('customerData', JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        planId: planId,
        planName: planName,
        country: userCountry || "",
        batch: formData.batch
      }));

      // Load Razorpay script
      await loadRazorpayScript();

      // Create order via API
      const response = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          planId,
          planName,
          customerName: formData.name,
          customerEmail: formData.email,
          customerPhone: formData.phone,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to create order");
      }

      const orderData = await response.json();

      // Get Razorpay key from order response or use default test key
      const razorpayKeyId = orderData.keyId || "rzp_test_RnaJg6IBlcJkrk";

      // Initialize Razorpay Checkout
      const options = {
        key: razorpayKeyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "QuantumRush",
        description: planName,
        order_id: orderData.orderId,
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        handler: function (response: any) {
          // Payment successful
          const successUrl = `/payment/success?razorpay_payment_id=${response.razorpay_payment_id}&razorpay_order_id=${response.razorpay_order_id}&razorpay_signature=${response.razorpay_signature}&planId=${planId}&planName=${encodeURIComponent(planName)}`;
          window.location.href = successUrl;
        },
        modal: {
          ondismiss: function () {
            // User closed the checkout
            setIsSubmitting(false);
          },
        },
        theme: {
          color: "#9333EA",
        },
      };

      const razorpay = new (window as any).Razorpay(options);
      
      razorpay.on("payment.failed", function (response: any) {
        // Payment failed
        const failureUrl = `/payment/failure?error=${encodeURIComponent(response.error.description || "Payment failed")}`;
        window.location.href = failureUrl;
      });

      razorpay.open();
    } catch (error: any) {
      console.error('Error in handlePayment:', error);
      alert(error.message || "Payment failed. Please try again.");
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

          {step === "cancel" ? (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why are you cancelling?</h3>
              <div className="space-y-3">
                <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="cancelReason"
                    value="Changed my mind"
                    checked={cancelReason === "Changed my mind"}
                    onChange={(e) => setCancelReason(e.target.value)}
                    className="mr-3"
                  />
                  <span className="text-gray-700">Changed my mind</span>
                </label>
                <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="cancelReason"
                    value="Price too high"
                    checked={cancelReason === "Price too high"}
                    onChange={(e) => setCancelReason(e.target.value)}
                    className="mr-3"
                  />
                  <span className="text-gray-700">Price too high</span>
                </label>
                <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="cancelReason"
                    value="Neither batch time is convenient for me"
                    checked={cancelReason === "Neither batch time is convenient for me"}
                    onChange={(e) => setCancelReason(e.target.value)}
                    className="mr-3"
                  />
                  <span className="text-gray-700">Neither batch time is convenient for me</span>
                </label>
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setStep("form")}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleCancelSubmit}
                  disabled={isSubmitting || !cancelReason}
                  className="flex-1 bg-gray-900 text-white px-4 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          ) : step === "form" ? (
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Batch Time *
                </label>
                <div className="space-y-3">
                  <label className="flex items-start p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-purple-500 transition-colors">
                    <input
                      type="radio"
                      name="batch"
                      value="weekday"
                      checked={formData.batch === "weekday"}
                      onChange={(e) => setFormData({ ...formData, batch: e.target.value as "weekday" | "weekend" })}
                      className="mt-1 mr-3"
                      required
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">Weekday Batch</div>
                      <div className="text-sm text-gray-600">6-8 AM IST</div>
                      {localTimes && (
                        <div className="text-xs text-gray-500 mt-1">({localTimes.weekday} your local time)</div>
                      )}
                    </div>
                  </label>
                  <label className="flex items-start p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-purple-500 transition-colors">
                    <input
                      type="radio"
                      name="batch"
                      value="weekend"
                      checked={formData.batch === "weekend"}
                      onChange={(e) => setFormData({ ...formData, batch: e.target.value as "weekday" | "weekend" })}
                      className="mt-1 mr-3"
                      required
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">Weekend Batch</div>
                      <div className="text-sm text-gray-600">10 AM - 2 PM IST</div>
                      {localTimes && (
                        <div className="text-xs text-gray-500 mt-1">({localTimes.weekend} your local time)</div>
                      )}
                    </div>
                  </label>
                </div>
              </div>
              
              <div className="flex gap-4 pt-2">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Continue to Payment"}
                </button>
              </div>
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
  const [userCountry, setUserCountry] = useState<string | null>(null);

  // Detect user's country for currency conversion
  useEffect(() => {
    const detectCountry = async () => {
      try {
        // Using a free IP geolocation service
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        if (data.country_code) {
          setUserCountry(data.country_code);
        }
      } catch (error) {
        console.error("Error detecting country:", error);
        // Fallback: try to detect from timezone
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (timezone.includes("America")) {
          setUserCountry("US");
        } else if (timezone.includes("Europe/London")) {
          setUserCountry("GB");
        }
      }
    };
    detectCountry();
  }, []);

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
        <div className="relative z-10 min-h-screen flex items-start px-4 md:px-8 lg:px-12 xl:px-16 pt-20 lg:pt-24 xl:pt-8 md:items-start overflow-y-auto">
          <div className="w-full max-w-7xl mx-auto py-8 md:py-12">
            {/* Heading Section */}
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-3xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                Choose Your Learning Path
              </h2>
              <p className="text-base md:text-lg lg:text-base xl:text-lg text-gray-700 max-w-3xl mx-auto">
                Select the course that best fits your goals and start building AI systems today.
              </p>
            </div>

            {/* Price Cards */}
            <div 
              className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {pricingPlans.map((plan) => (
                <div key={plan.id} className="flex-shrink-0 w-[90vw] max-w-sm md:w-auto snap-center">
                  <PriceCard
                    plan={plan}
                    onEnroll={() => handleEnroll(plan.id)}
                    userCountry={userCountry}
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
          userCountry={userCountry}
        />
      )}
    </>
  );
}

