import { createContext, useState, type FC, useContext, type PropsWithChildren } from "react";

// 1. Define the type for your context
type LanguageContextType = {
  language: "en" | "fr";
  setLanguage: (lang: "en" | "fr") => void;
};

// 2. Create the context with a default value
export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {}, // default empty function
});

// 3. Create the provider component
export const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState<"en" | "fr">("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 4. Optional: a custom hook for easier usage
export const useLanguage = () => useContext(LanguageContext);
