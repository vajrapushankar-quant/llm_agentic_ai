"use client";

import { useEffect } from "react";

export default function FaviconHandler() {
  useEffect(() => {
    const updateFavicon = () => {
      const link = document.querySelector("link[rel='icon']") as HTMLLinkElement;
      
      if (link) {
        link.href = "/favicon.svg";
      } else {
        // Create favicon link if it doesn't exist
        const newLink = document.createElement("link");
        newLink.rel = "icon";
        newLink.type = "image/svg+xml";
        newLink.href = "/favicon.svg";
        document.head.appendChild(newLink);
      }
    };

    // Set initial favicon
    updateFavicon();
  }, []);

  return null;
}

