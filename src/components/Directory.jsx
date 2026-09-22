import { SquaresFour, Table } from "@phosphor-icons/react";
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
