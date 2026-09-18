import { useI18n } from "../i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { key: "all-gateways", href: "#catalog", current: true },
  { key: "comparison-matrix", href: "#directory", current: false },
  { key: "verification-faq", href: "#methodology-brief", current: false },
  { key: "api-status", href: "#directory", current: false },
];

/**
 * Sticky Stitch header: brand + Free Credit Index badge, 4-link nav
 * (anchors into the single-page board for now), theme toggle, language,
 * Contribute CTA. ponytail: split nav into real routes when pages exist.
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
          <span className="hidden rounded border px-1.5 py-0.5 font-mono text-[11px] font-semibold uppercase leading-none tracking-wider sm:inline-block"
            style={{
              color: "var(--badge-verified-text)",
              backgroundColor: "var(--badge-verified-bg)",
              borderColor: "var(--badge-verified-border)",
            }}
          >
            Free Credit Index
          </span>
        </a>
        <nav aria-label={t("nav.primary")} className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              aria-current={link.current ? "page" : undefined}
              className={`rounded px-3 py-1.5 text-xs font-medium transition-colors ${
                link.current
                  ? "border border-line bg-card text-ink"
                  : "text-muted hover:bg-card/50 hover:text-ink"
              }`}
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
        </nav>
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
