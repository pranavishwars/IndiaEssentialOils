"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
  useSyncExternalStore,
  useCallback,
} from "react";
import { usePathname } from "next/navigation";
import {
  LanguageInfo,
  getLanguageByCode,
  getStoredLanguage,
  isRtlLanguage,
  setGoogleTransCookie,
} from "./languages-data";

interface LanguageContextType {
  currentLanguage: string;
  currentLanguageInfo: LanguageInfo;
  isRTL: boolean;
  isScriptLoaded: boolean;
  isBlocked: boolean;
  isChanging: boolean;
  setLanguage: (code: string) => void;
  markScriptLoaded: () => void;
  markScriptError: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

let langListeners: Array<() => void> = [];
function emitLangChange() {
  for (const listener of langListeners) {
    listener();
  }
}

function subscribe(callback: () => void) {
  langListeners.push(callback);
  window.addEventListener("storage", callback);
  return () => {
    langListeners = langListeners.filter((l) => l !== callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): string {
  return getStoredLanguage();
}

function getServerSnapshot(): string {
  return "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const currentLanguage = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const [isScriptLoaded, setIsScriptLoaded] = useState<boolean>(false);
  const [isBlocked, setIsBlocked] = useState<boolean>(false);
  const [isChanging, setIsChanging] = useState<boolean>(false);

  const pathname = usePathname();
  const initialPathname = useRef(pathname);
  const hasMounted = useRef(false);

  // Sync DOM attributes on mount and handle script error detection
  useEffect(() => {
    const rtl = isRtlLanguage(currentLanguage);
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = rtl ? "rtl" : "ltr";

    hasMounted.current = true;

    // Timeout safety check: if Google Translate script hasn't loaded in 4 seconds
    const timeout = setTimeout(() => {
      if (
        typeof window !== "undefined" &&
        !(window as unknown as { google?: { translate?: unknown } }).google?.translate
      ) {
        setIsBlocked(true);
      }
    }, 4000);

    const errorHandler = () => {
      setIsBlocked(true);
    };
    window.addEventListener("google-translate-error", errorHandler);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("google-translate-error", errorHandler);
    };
  }, [currentLanguage]);

  // Handle client-side Next.js route navigation while in non-default language
  useEffect(() => {
    if (!hasMounted.current) return;
    if (initialPathname.current !== pathname) {
      initialPathname.current = pathname;
      const stored = getStoredLanguage();
      if (stored && stored !== "en") {
        window.location.reload();
      }
    }
  }, [pathname]);

  const setLanguage = useCallback((code: string) => {
    setIsChanging(true);
    setGoogleTransCookie(code);
    emitLangChange();

    const rtl = isRtlLanguage(code);
    document.documentElement.lang = code;
    document.documentElement.dir = rtl ? "rtl" : "ltr";

    // Attempt direct live translation change if Google Translate combo is in DOM
    try {
      const select = document.querySelector<HTMLSelectElement>("#google_translate_element select");
      if (select) {
        select.value = code;
        select.dispatchEvent(new Event("change"));
      }
    } catch {}

    // Clean reload to ensure full DOM translation across all Next.js hydration boundaries
    setTimeout(() => {
      window.location.reload();
    }, 180);
  }, []);

  const markScriptLoaded = useCallback(() => {
    setIsScriptLoaded(true);
    setIsBlocked(false);
  }, []);

  const markScriptError = useCallback(() => {
    setIsBlocked(true);
  }, []);

  const currentLanguageInfo = getLanguageByCode(currentLanguage);
  const isRTL = isRtlLanguage(currentLanguage);

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        currentLanguageInfo,
        isRTL,
        isScriptLoaded,
        isBlocked,
        isChanging,
        setLanguage,
        markScriptLoaded,
        markScriptError,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
