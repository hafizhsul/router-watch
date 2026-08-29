import { useMemo, useState } from "react";
import Hero from "./components/Hero";
import ControlDeck from "./components/ControlDeck";
import ProviderCard from "./components/ProviderCard";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import { activeProviders } from "./data/providers";

function sortProviders(list, sort) {
  const sorted = [...list];
  switch (sort) {
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "name":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "category":
      return sorted.sort((a, b) =>
        a.category.localeCompare(b.category),
      );
    case "featured":
    default:
      return sorted.sort((a, b) =>
        a.featured === b.featured ? 0 : a.featured ? -1 : 1,
      );
  }
}

export default function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = activeProviders;
    if (q) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.category.toLowerCase().includes(q),
      );
    }
    if (category !== "all") {
      list = list.filter((p) => p.category === category);
    }
    return sortProviders(list, sort);
  }, [query, category, sort]);

  return (
    <div className="min-h-[100dvh] font-display">
      <header
        className="sticky top-0 z-20 border-b border-line backdrop-blur-md"
        style={{
          backgroundColor: "color-mix(in srgb, var(--paper) 85%, transparent)",
          boxShadow: "var(--shadow-header)",
        }}
      >
        <div className="site-shell flex min-h-[64px] items-center justify-between">
          <a href="#top" className="inline-flex items-center gap-2.5" aria-label="Router Watch home">
            <span
              className="grid size-9 place-items-center rounded-md font-mono text-sm font-semibold"
              style={{ backgroundColor: "var(--mark-bg)", color: "var(--mark-text)" }}
            >
              RW
            </span>
            <span className="leading-tight">
              <strong className="block text-sm font-semibold text-ink">
                Router Watch
              </strong>
              <small className="block font-mono text-[10px] uppercase tracking-wider text-muted">
                Free credit, tracked
              </small>
            </span>
          </a>
          <nav aria-label="Primary">
            <a
              href="#catalog"
              className="rounded-md px-3 py-2 text-sm text-ink-soft transition hover:bg-paper-2 hover:text-ink"
            >
              Catalog
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <Hero />

        <section
          id="catalog"
          className="site-shell scroll-mt-24"
          aria-labelledby="catalog-title"
        >
          <Reveal>
            <div className="mb-8 max-w-2xl">
              <h2
                id="catalog-title"
                className="text-2xl font-semibold tracking-tight text-ink md:text-3xl"
              >
                Gateway list
              </h2>
              <p className="mt-3 text-muted">
                Every gateway, its signup bonus, and the models behind it.
                Narrow the list before you commit to a signup.
              </p>
            </div>

            <ControlDeck
              query={query}
              onQuery={setQuery}
              category={category}
              onCategory={setCategory}
              sort={sort}
              onSort={setSort}
            />
          </Reveal>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <Reveal key={p.name} delay={(i % 3) * 60}>
                  <ProviderCard provider={p} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="rounded-[var(--radius-card)] border border-dashed border-line-strong bg-paper-2/40 p-12 text-center">
              <p className="text-base font-semibold text-ink">
                Nothing matches those filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setCategory("all");
                }}
                className="mt-4 inline-flex rounded-[var(--radius-control)] border border-line bg-surface px-4 py-2 text-sm text-ink-soft transition hover:border-signal hover:text-signal-deep"
              >
                Clear filters
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
