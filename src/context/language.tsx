import React from "react";

type languageType = "en" | "fr";

type languageContextType = {
  setLanguage: React.Dispatch<React.SetStateAction<languageType>>;
  language: languageType;
  changeLanguageLocaly: (language: languageType) => void;
};

export const LanguageContext = React.createContext<languageContextType>({
  setLanguage: () => {},
  language: "en",
  changeLanguageLocaly: () => {},
});

const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = React.useState<languageType>("en");

  const changeLanguageLocaly = (language: languageType) => {
    setLanguage(language);
    localStorage.setItem("language_preference", language);
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, changeLanguageLocaly }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
