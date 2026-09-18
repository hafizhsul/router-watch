import { ShieldCheck, SquaresFour, Table } from "@phosphor-icons/react";
import { useI18n } from "../i18n";

/**
 * Grid / Audit Table switcher per Stitch directory header.
 */
export default function ViewSwitcher({ view, onView }) {
  const { t } = useI18n();

  const btn = (active) =>
    `flex items-center gap-1 rounded px-2.5 py-1.5 font-mono text-xs ${
      active
        ? "border border-line bg-card text-ink"
        : "text-muted hover:text-ink"
    }`;

  return (
    <div className="flex items-center gap-1 self-start rounded-md border border-line bg-subtle p-1 md:self-auto" role="group" aria-label={t("view.label")}>
      <button type="button" onClick={() => onView("grid")} aria-pressed={view === "grid"} className={btn(view === "grid")}>
        <SquaresFour size={15} aria-hidden="true" />
        {t("view.grid")}
      </button>
      <button type="button" onClick={() => onView("table")} aria-pressed={view === "table"} className={btn(view === "table")}>
        <Table size={15} aria-hidden="true" />
        {t("view.table")}
      </button>
    </div>
  );
}

/**
 * "How does Router Watch classify Verified?" methodology strip.
 */
export function Methodology() {
  const { t } = useI18n();

  return (
    <div id="methodology-brief" className="mt-8 flex scroll-mt-24 flex-col gap-6 rounded-xl border border-line bg-subtle p-6 md:flex-row md:items-center md:justify-between">
      <div className="flex items-start gap-4">
        <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-lg border border-line bg-card" style={{ color: "var(--accent-ink)" }}>
          <ShieldCheck size={20} />
        </span>
        <div>
          <h4 className="font-display text-base font-bold text-ink">{t("methodology.title")}</h4>
          <p className="mt-1 max-w-2xl text-xs leading-relaxed text-muted">{t("methodology.body")}</p>
        </div>
      </div>
      <a
        href="https://github.com/hafizhsul/router-watch"
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 rounded-md border border-line bg-card px-4 py-2 text-xs font-semibold text-ink transition-colors hover:border-accent"
      >
        {t("methodology.cta")}
      </a>
    </div>
  );
}
