import { Info } from "@phosphor-icons/react";
import { useI18n } from "../i18n";

const QUICK_KEYS = ["verified", "claude", "agents", "deepseek"];

/**
 * Quick filter pills strip per Stitch. Delegates to App state via callbacks;
 * "verified" maps to the sort slot, model keys map to the model filter.
 * ponytail: add active-chip state when App exposes the current filter.
 */
export default function QuickFilters({ onQuick, onReset }) {
  const { t } = useI18n();

  return (
    <section aria-label={t("quick.title")} className="border-b border-line bg-subtle py-3">
      <div className="site-shell flex items-center justify-between gap-4 overflow-x-auto">
        <div className="flex shrink-0 items-center gap-2">
          <span className="label-caps mr-1 text-muted">{t("quick.title")}:</span>
          {QUICK_KEYS.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => onQuick(key)}
              className="flex items-center gap-1.5 rounded-full border border-line bg-card px-3 py-1 font-mono text-xs text-ink transition-colors hover:border-accent"
            >
              {key === "verified" && (
                <span aria-hidden="true" className="size-1.5 rounded-full" style={{ backgroundColor: "var(--badge-verified-text)" }} />
              )}
              {t(`quick.${key}`)}
            </button>
          ))}
          <button
            type="button"
            onClick={onReset}
            className="ml-2 font-mono text-xs text-muted underline hover:text-ink"
          >
            {t("quick.reset")}
          </button>
        </div>
        <p className="hidden shrink-0 items-center gap-2 font-mono text-xs text-muted md:flex">
          <Info size={14} aria-hidden="true" />
          {t("quick.note")}
        </p>
      </div>
    </section>
  );
}
