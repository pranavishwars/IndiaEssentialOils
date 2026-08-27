"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/language-context";

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: unknown;
      };
    };
  }
}

export function GoogleTranslateWidget() {
  const { markScriptLoaded } = useLanguage();

  useEffect(() => {
    // Check if google.translate is available
    const checkReady = () => {
      if (typeof window !== "undefined" && window.google?.translate?.TranslateElement) {
        markScriptLoaded();
        return true;
      }
      return false;
    };

    if (!checkReady()) {
      const interval = setInterval(() => {
        if (checkReady()) clearInterval(interval);
      }, 300);
      return () => clearInterval(interval);
    }
  }, [markScriptLoaded]);

  useEffect(() => {
    // Keep body at top 0 and suppress banners without removing nodes
    const fixBodyOffsetAndHideBanners = () => {
      if (document.body) {
        if (document.body.style.top && document.body.style.top !== "0px") {
          document.body.style.top = "0px";
        }
        if (document.body.style.marginTop && document.body.style.marginTop !== "0px") {
          document.body.style.marginTop = "0px";
        }
        if (document.body.style.position === "relative") {
          document.body.style.position = "static";
        }
      }
      if (document.documentElement) {
        if (document.documentElement.style.top && document.documentElement.style.top !== "0px") {
          document.documentElement.style.top = "0px";
        }
        if (document.documentElement.style.marginTop && document.documentElement.style.marginTop !== "0px") {
          document.documentElement.style.marginTop = "0px";
        }
      }

      // Hide injected skiptranslate banner containers
      const banners = document.querySelectorAll<HTMLElement>(
        "body > .skiptranslate, html > .skiptranslate, .goog-te-banner-frame, iframe.goog-te-banner-frame"
      );
      banners.forEach((b) => {
        if (!b.querySelector("#google_translate_element") && !b.closest(".language-selector-root")) {
          b.style.display = "none";
          b.style.visibility = "hidden";
          b.style.height = "0px";
          b.style.opacity = "0";
          b.style.pointerEvents = "none";
        }
      });
    };

    fixBodyOffsetAndHideBanners();
    const interval = setInterval(fixBodyOffsetAndHideBanners, 200);

    const observer = new MutationObserver(() => {
      fixBodyOffsetAndHideBanners();
    });

    observer.observe(document.body, {
      childList: true,
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return null;
}
