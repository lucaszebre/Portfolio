import en from "./en.json";
import fr from "./fr.json";

export const languages = {
  en: "English",
  fr: "Français",
};

export const defaultLang = "en";

export type Lang = keyof typeof languages;

const translations = { en, fr } as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const keys = key.split(".");
    let value: unknown = translations[lang];
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }
    return (value as string) ?? key;
  };
}

export function getCollectionName(base: string, lang: Lang): string {
  return lang === defaultLang ? base : `${base}-${lang}`;
}

export function getAllCollectionNames(base: string): string[] {
  return [base, ...Object.keys(languages)
    .filter((l) => l !== defaultLang)
    .map((l) => `${base}-${l}`)];
}

export function getLocaleString(lang: Lang): "en-US" | "fr-FR" {
  return lang === "fr" ? "fr-FR" : "en-US";
}

export function getLocalizedPath(path: string, lang: Lang): string {
  const segments = path.split("/").filter(Boolean);
  if (segments.length > 0 && segments[0] in languages) {
    segments[0] = lang;
  } else {
    segments.unshift(lang);
  }
  return "/" + segments.join("/");
}

export function switchLangPath(currentPath: string, targetLang: Lang): string {
  const segments = currentPath.split("/").filter(Boolean);
  if (segments.length > 0 && segments[0] in languages) {
    segments[0] = targetLang;
  } else {
    segments.unshift(targetLang);
  }
  return "/" + segments.join("/");
}
