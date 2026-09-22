import { useI18n } from "../i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { routeHref, useRoute } from "../router";

const NAV = [
  { route: "board", key: "board" },
  { route: "matrix", key: "matrix" },
  { route: "status", key: "status" },
];

/**
 * Sticky header: brand, 3-link nav (board/matrix/status via hash route),
 * theme toggle, language, Contribute CTA.
 */
export default function Header() {
  const { t } = useI18n();
  const route = useRoute();

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-canvas/90 backdrop-blur-md">
      <div className="site-shell flex min-h-16 items-center justify-between gap-3">
        <a
          href={routeHref("board")}
          className="inline-flex min-w-0 items-center gap-2"
          aria-label={t("brand.home")}
        >
          <strong className="font-display text-sm font-bold tracking-tight text-ink">
            Router Watch
          </strong>
        </a>
        <nav aria-label={t("nav.label")} className="hidden items-center gap-1 md:flex">
          {NAV.map((link) => (
            <a
              key={link.route}
              href={routeHref(link.route)}
              aria-current={route === link.route ? "page" : undefined}
              className={`rounded px-3 py-1.5 text-xs font-medium transition-colors ${
                route === link.route
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
