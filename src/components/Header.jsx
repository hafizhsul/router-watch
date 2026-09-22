import { useI18n } from "../i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

/**
 * Sticky header: brand, theme toggle, language, Contribute CTA.
 */
export default function Header() {
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-canvas/90 backdrop-blur-md">
      <div className="site-shell flex min-h-16 items-center justify-between gap-3">
        <a
          href="#top"
          className="inline-flex min-w-0 items-center gap-2"
          aria-label={t("brand.home")}
        >
          <strong className="font-display text-sm font-bold tracking-tight text-ink">
            Router Watch
          </strong>
        </a>
        <div className="flex shrink-0 items-center gap-2">
          <LanguageSwitcher compact />
          <ThemeToggle />
          <a
            href="https://github.com/hafizhsul/router-watch/issues/new"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1 rounded-md border border-line bg-card px-3 py-1.5 font-display text-xs font-semibold text-ink transition-colors hover:border-accent sm:inline-flex"
          >
            {t("footer.contribute")}
            <span aria-hidden="true" className="font-mono text-[11px] text-muted">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
