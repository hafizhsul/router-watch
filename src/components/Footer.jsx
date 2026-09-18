import { useI18n } from "../i18n";

/**
 * Two-tier Stitch footer: brand + link row, then disclaimer + copyright.
 */
export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-line bg-subtle py-10">
      <div className="site-shell flex flex-col gap-6">
        <div className="flex flex-col gap-4 border-b border-line pb-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <p className="flex items-center gap-2">
              <span className="font-display text-sm font-bold text-ink">Router Watch</span>
              <span className="font-mono text-xs text-muted">v1.4</span>
            </p>
            <p className="max-w-xl text-xs text-muted">{t("footer.about")}</p>
          </div>
          <nav aria-label={t("footer.nav")} className="flex flex-wrap items-center gap-4 text-xs">
            <a href="#methodology-brief" className="text-muted transition-colors hover:text-ink">
              {t("footer.methodology")}
            </a>
            <a
              href="https://github.com/hafizhsul/router-watch/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-ink"
            >
              {t("footer.submit")}
            </a>
            <a href="#methodology-brief" className="text-muted transition-colors hover:text-ink">
              {t("footer.standards")}
            </a>
            <a
              href="https://github.com/hafizhsul/router-watch/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:underline"
              style={{ color: "var(--badge-disputed-text)" }}
            >
              {t("footer.report")}
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-2 text-[11px] leading-relaxed text-muted md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl">{t("footer.disclaimer")}</p>
          <p className="shrink-0 font-mono">{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
