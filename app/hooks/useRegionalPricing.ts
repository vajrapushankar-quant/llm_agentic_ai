"use client";

import { useState, useEffect, useCallback } from "react";

export type PricingRegion = "IN" | "GLOBAL";

interface RegionalPricing {
  llm: number;
  agentic: number;
  bundle: number;
}

interface UseRegionalPricingResult {
  region: PricingRegion;
  setRegion: (region: PricingRegion) => void;
  prices: RegionalPricing;
  approxUSD: RegionalPricing;
}

// Regional pricing in INR
const INDIA_PRICES: RegionalPricing = {
  llm: 14999,      // ₹14,999
  agentic: 19999,  // ₹19,999
  bundle: 24999,   // ₹24,999
};

const GLOBAL_PRICES: RegionalPricing = {
  llm: 19999,      // ₹19,999
  agentic: 24999,  // ₹24,999
  bundle: 34999,   // ₹34,999
};

// USD conversion rate (approximate)
const INR_TO_USD = 0.012; // 1 INR = 0.012 USD

export function useRegionalPricing(): UseRegionalPricingResult {
  const [region, setRegionState] = useState<PricingRegion>("GLOBAL");

  // Initialize region on mount
  useEffect(() => {
    // Check localStorage first
    if (typeof window !== "undefined") {
      const storedRegion = localStorage.getItem("pricingRegion") as PricingRegion | null;
      
      if (storedRegion === "IN" || storedRegion === "GLOBAL") {
        setRegionState(storedRegion);
        return;
      }

      // Try to infer region from browser APIs
      try {
        // Check timezone
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (timezone.includes("Kolkata") || timezone.includes("Calcutta") || timezone.includes("Asia/Kolkata")) {
          setRegionState("IN");
          localStorage.setItem("pricingRegion", "IN");
          return;
        }

        // Check language
        const language = navigator.language || (navigator as any).userLanguage;
        if (language.includes("en-IN") || language.includes("hi-IN")) {
          setRegionState("IN");
          localStorage.setItem("pricingRegion", "IN");
          return;
        }

        // Try IP geolocation as fallback
        fetch("https://ipapi.co/json/")
          .then((res) => res.json())
          .then((data) => {
            if (data.country_code === "IN") {
              setRegionState("IN");
              localStorage.setItem("pricingRegion", "IN");
            } else {
              setRegionState("GLOBAL");
              localStorage.setItem("pricingRegion", "GLOBAL");
            }
          })
          .catch(() => {
            // If all detection fails, default to GLOBAL
            setRegionState("GLOBAL");
          });
      } catch (error) {
        // If detection fails, default to GLOBAL
        setRegionState("GLOBAL");
      }
    }
  }, []);

  // Set region and persist to localStorage
  const setRegion = useCallback((newRegion: PricingRegion) => {
    setRegionState(newRegion);
    if (typeof window !== "undefined") {
      localStorage.setItem("pricingRegion", newRegion);
    }
  }, []);

  // Get prices based on region
  const prices = region === "IN" ? INDIA_PRICES : GLOBAL_PRICES;

  // Calculate approximate USD prices
  const approxUSD: RegionalPricing = {
    llm: Math.round(prices.llm * INR_TO_USD),
    agentic: Math.round(prices.agentic * INR_TO_USD),
    bundle: Math.round(prices.bundle * INR_TO_USD),
  };

  return {
    region,
    setRegion,
    prices,
    approxUSD,
  };
}

