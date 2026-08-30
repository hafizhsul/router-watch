import { GitBranch } from "@phosphor-icons/react";
import { useI18n } from "../i18n";

/**
 * Minimal footer. No version stamps, no locale/time strips, no em-dashes.
 */
export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="mt-20 border-t border-line">
      <div className="site-shell flex flex-col gap-4 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-ink">Router Watch</p>
          <p className="mt-1 max-w-md text-muted">{t("footer.about")}</p>
        </div>
        <a
          href="https://github.com/hafizhsul/router-watch/issues/new"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 text-muted transition hover:text-ink"
        >
          <GitBranch size={18} />
          {t("footer.contribute")}
        </a>
      </div>
    </footer>
  );
}
