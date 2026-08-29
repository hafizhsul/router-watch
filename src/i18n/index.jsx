import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  CJK_LANGUAGES,
  DEFAULT_LANGUAGE,
  LANGUAGES,
  LOCALES,
} from "./locales";

const STORAGE_KEY = "router-watch.lang";

const I18nContext = createContext(null);

/**
 * Resolve the best supported language from a list of preferred tags.
 * Matches full tag first ("pt-BR" -> "pt"), then the primary subtag.
 * @param {string[]} preferred
 * @returns {string}
 */
function resolveLanguage(preferred) {
  for (const tag of preferred) {
    if (!tag) continue;
    const lower = tag.toLowerCase();
    if (LANGUAGES[lower]) return lower;
    const primary = lower.split("-")[0];
    if (LANGUAGES[primary]) return primary;
  }
  return DEFAULT_LANGUAGE;
}

/**
 * @param {string} lang
 * @returns {string | null}
 */
function readStored(lang) {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return lang;
  }
}

/**
 * @param {string} lang
 */
function writeStored(lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* Private browsing or blocked storage: language just won't persist. */
  }
}

/**
 * @param {{ children: import("react").ReactNode }} props
 */
export function I18nProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    if (typeof window === "undefined") return DEFAULT_LANGUAGE;
    const stored = readStored(null);
    if (stored && LANGUAGES[stored]) return stored;
    return resolveLanguage(navigator.languages ?? [navigator.language]);
  });

  const setLanguage = useCallback((next) => {
    if (!LANGUAGES[next]) return;
    setLanguageState(next);
    writeStored(next);
  }, []);

  const t = useCallback(
    /**
     * @param {string} key
     * @param {{ [key: string]: string | number }} [vars]
     * @returns {string}
     */
    (key, vars) => {
      const table = LOCALES[language] ?? LOCALES[DEFAULT_LANGUAGE];
      let out = table[key] ?? LOCALES[DEFAULT_LANGUAGE][key] ?? key;
      if (vars) {
        for (const [name, value] of Object.entries(vars)) {
          out = out.replaceAll(`{${name}}`, String(value));
        }
      }
      return out;
    },
    [language],
  );

  // Keep document metadata in sync with the active language.
  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    const title = t("meta.title");
    if (title) document.title = title;
    let desc = document.querySelector('meta[name="description"]');
    const text = t("meta.description");
    if (!desc) {
      desc = document.createElement("meta");
      desc.setAttribute("name", "description");
      document.head.appendChild(desc);
    }
    desc.setAttribute("content", text);
  }, [language, t]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
      isCjk: CJK_LANGUAGES.includes(language),
    }),
    [language, setLanguage, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

/**
 * @returns {{ language: string, setLanguage: (code: string) => void, t: (key: string, vars?: object) => string, isCjk: boolean }}
 */
export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
