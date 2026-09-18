import { Globe } from "@phosphor-icons/react";
import { LANGUAGE_LIST } from "../i18n/locales";
import { useI18n } from "../i18n";

/**
 * Native select: platform picker on mobile, no custom popover.
 * `compact` renders the Stitch header variant (globe + short code).
 */
export default function LanguageSwitcher({ compact = false }) {
  const { language, setLanguage, t } = useI18n();
  const short = language.toUpperCase();

  if (compact) {
    return (
      <div className="hidden items-center gap-1 border-l border-line pl-2 lg:flex">
        <Globe size={16} aria-hidden="true" className="shrink-0 text-muted" />
        <label htmlFor="lang-select" className="sr-only">
          {t("nav.language")}
        </label>
        <select
          id="lang-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          aria-label={t("nav.language")}
          className="h-8 cursor-pointer bg-transparent font-mono text-[11px] font-semibold uppercase tracking-wider text-muted outline-none hover:text-ink focus-visible:text-ink"
        >
          {LANGUAGE_LIST.map((lang) => (
            <option key={lang.code} value={lang.code} lang={lang.code}>
              {lang.code.toUpperCase()}
            </option>
          ))}
        </select>
        <span aria-hidden="true" className="sr-only">{short}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5">
      <label htmlFor="lang-select" className="sr-only">
        {t("nav.language")}
      </label>
      <select
        id="lang-select"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="h-8 cursor-pointer rounded-md border border-line bg-card px-2 text-xs text-ink-soft outline-none transition-colors hover:border-line-strong focus-visible:border-accent"
      >
        {LANGUAGE_LIST.map((lang) => (
          <option key={lang.code} value={lang.code} lang={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}
