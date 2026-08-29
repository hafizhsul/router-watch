import { MagnifyingGlass } from "@phosphor-icons/react";
import { categories } from "../data/providers";

/**
 * Search + category filter + sort. Lift all state to the parent; this is a
 * controlled deck. Label-above-input, contrast-safe, no placeholder-as-label.
 *
 * @param {{ query: string, onQuery: (q: string) => void, category: string, onCategory: (c: string) => void, sort: string, onSort: (s: string) => void }} props
 */
export default function ControlDeck({
  query,
  onQuery,
  category,
  onCategory,
  sort,
  onSort,
}) {
  const opts = ["featured", "rating", "name", "category"];

  return (
    <div className="mb-8 grid grid-cols-1 gap-4 rounded-[var(--radius-card)] border border-line bg-paper-2/60 p-4 md:grid-cols-[1fr_auto_auto] md:gap-6 md:p-5">
      <div className="relative">
        <label htmlFor="catalog-search" className="sr-only">
          Search gateways
        </label>
        <MagnifyingGlass
          size={18}
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
        />
        <input
          id="catalog-search"
          type="search"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder="Search by gateway or model"
          className="h-11 w-full rounded-[var(--radius-control)] border border-line bg-surface pl-10 pr-3 text-sm text-ink outline-none transition placeholder:text-muted focus:border-signal focus:ring-2 focus:ring-signal/30"
        />
      </div>

      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
        <label htmlFor="catalog-category" className="text-xs font-medium text-muted">
          Type
        </label>
        <select
          id="catalog-category"
          value={category}
          onChange={(e) => onCategory(e.target.value)}
          className="h-11 rounded-[var(--radius-control)] border border-line bg-surface px-3 text-sm text-ink outline-none focus:border-signal focus:ring-2 focus:ring-signal/30"
        >
          <option value="all">Any type</option>
          {categories().map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
        <label htmlFor="catalog-sort" className="text-xs font-medium text-muted">
          Order
        </label>
        <select
          id="catalog-sort"
          value={sort}
          onChange={(e) => onSort(e.target.value)}
          className="h-11 rounded-[var(--radius-control)] border border-line bg-surface px-3 text-sm text-ink outline-none focus:border-signal focus:ring-2 focus:ring-signal/30"
        >
          {opts.map((o) => (
            <option key={o} value={o}>
              {o[0].toUpperCase() + o.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
