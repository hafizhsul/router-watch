import { MagnifyingGlass } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";
import { categories, modelTypes } from "../data/providers";
import { useI18n } from "../i18n";

const SORT_OPTIONS = ["featured", "rating", "name", "category"];

/**
 * Stitch filter bar: 12-col grid (search 4 / type 3 / model 3 / order 2),
 * 32px inputs, kbd "/" shortcut, focus border accent with no glow.
 */
export default function ControlDeck({
  query,
  onQuery,
  category,
  onCategory,
  model,
  onModel,
  sort,
  onSort,
}) {
  const { t, categoryLabel } = useI18n();
  const searchRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      const tag = document.activeElement?.tagName;
      if (e.key === "/" && tag !== "INPUT" && tag !== "SELECT" && tag !== "TEXTAREA") {
        e.preventDefault();
        searchRef.current?.focus();
        searchRef.current?.select();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const inputClass =
    "h-8 w-full rounded-md border border-line bg-card px-2.5 text-xs text-ink outline-none transition-colors placeholder:text-muted focus:border-accent";

  return (
    <div className="grid grid-cols-1 items-center gap-3 rounded-xl border border-line bg-subtle p-3 sm:grid-cols-2 lg:grid-cols-12">
      <div className="relative lg:col-span-4">
        <label htmlFor="catalog-search" className="sr-only">
          {t("filter.search.label")}
        </label>
        <MagnifyingGlass
          size={16}
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
        />
        <input
          ref={searchRef}
          id="catalog-search"
          type="search"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder={t("filter.search.placeholder")}
          className="h-8 w-full rounded-md border border-line bg-card py-2 pl-9 pr-8 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-accent"
        />
        <kbd
          aria-hidden="true"
          className="absolute right-2.5 top-1/2 hidden -translate-y-1/2 rounded border border-line bg-card px-1 font-mono text-[10px] text-muted sm:inline-block"
        >
          /
        </kbd>
      </div>

      <div className="flex items-center gap-2 lg:col-span-3">
        <label htmlFor="catalog-category" className="label-caps shrink-0 text-muted">
          {t("filter.type.label")}
        </label>
        <select
          id="catalog-category"
          value={category}
          onChange={(e) => onCategory(e.target.value)}
          className={inputClass}
        >
          <option value="all">{t("filter.type.all")}</option>
          {categories().map((c) => (
            <option key={c} value={c}>
              {categoryLabel(c)}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2 lg:col-span-3">
        <label htmlFor="catalog-model" className="label-caps shrink-0 text-muted">
          {t("filter.model.label")}
        </label>
        <select
          id="catalog-model"
          value={model}
          onChange={(e) => onModel(e.target.value)}
          className={inputClass}
        >
          <option value="all">{t("filter.model.all")}</option>
          {modelTypes().map((m) => (
            <option key={m} value={m}>
              {t(`filter.model.${m}`)}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2 lg:col-span-2">
        <label htmlFor="catalog-sort" className="label-caps shrink-0 text-muted">
          {t("filter.order.label")}
        </label>
        <select
          id="catalog-sort"
          value={sort}
          onChange={(e) => onSort(e.target.value)}
          className={inputClass}
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {t(`order.${o}`)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
