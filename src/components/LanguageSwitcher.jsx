import { Translate } from "@phosphor-icons/react";
import { LANGUAGE_LIST } from "../i18n/locales";
import { useI18n } from "../i18n";

/**
 * Native select on purpose: it gets the platform picker on mobile, inherits
 * the existing control styling, and needs no custom popover or focus trap.
 * Each option is shown in its own language so speakers can find it.
 */
export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useI18n();

  return (
    <div className="flex items-center gap-1.5">
      <label htmlFor="lang-select" className="sr-only">
        {t("nav.language")}
      </label>
      <Translate
        size={16}
        aria-hidden="true"
        className="hidden shrink-0 text-muted sm:block"
      />
      <select
        id="lang-select"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="h-9 max-w-[7.5rem] cursor-pointer truncate rounded-[var(--radius-control)] border border-line bg-surface px-2 text-xs text-ink-soft outline-none transition hover:border-signal focus-visible:border-signal focus-visible:ring-2 focus-visible:ring-signal/30 sm:max-w-[9rem] sm:text-sm"
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
