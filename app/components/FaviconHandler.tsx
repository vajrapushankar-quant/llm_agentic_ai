"use client";

import { useEffect } from "react";

export default function FaviconHandler() {
  useEffect(() => {
    const updateFavicon = () => {
      const link = document.querySelector("link[rel='icon']") as HTMLLinkElement;
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      
      if (link) {
        link.href = isDark ? "/Q white.svg" : "/Q Black.svg";
      } else {
        // Create favicon link if it doesn't exist
        const newLink = document.createElement("link");
        newLink.rel = "icon";
        newLink.type = "image/svg+xml";
        newLink.href = isDark ? "/Q white.svg" : "/Q Black.svg";
        document.head.appendChild(newLink);
      }
    };

    // Set initial favicon
    updateFavicon();

    // Listen for color scheme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", updateFavicon);

    return () => {
      mediaQuery.removeEventListener("change", updateFavicon);
    };
  }, []);

  return null;
}

