import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type SiteLanguage = "es" | "en";

export const SITE_LANGUAGE_STORAGE_KEY = "cushuro-site-language";

type SiteLanguageContextValue = {
  language: SiteLanguage;
  setLanguage: (language: SiteLanguage) => void;
  toggleLanguage: () => void;
};

const SiteLanguageContext = createContext<SiteLanguageContextValue | null>(null);

function getInitialLanguage(): SiteLanguage {
  if (typeof window === "undefined") return "es";

  return window.localStorage.getItem(SITE_LANGUAGE_STORAGE_KEY) === "en" ? "en" : "es";
}

export function SiteLanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<SiteLanguage>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(SITE_LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo<SiteLanguageContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => {
        setLanguage((current) => (current === "es" ? "en" : "es"));
      },
    }),
    [language]
  );

  return <SiteLanguageContext.Provider value={value}>{children}</SiteLanguageContext.Provider>;
}

export function useSiteLanguage() {
  const context = useContext(SiteLanguageContext);

  if (!context) {
    throw new Error("useSiteLanguage must be used within SiteLanguageProvider");
  }

  return context;
}

export function useLocalizedContent<T>(content: Record<SiteLanguage, T>) {
  const { language } = useSiteLanguage();
  return content[language];
}
