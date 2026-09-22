import { useMemo, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import QuickFilters from "./components/QuickFilters";
import ControlDeck from "./components/ControlDeck";
import ProviderCard from "./components/ProviderCard";
import AuditTable from "./components/AuditTable";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import ViewSwitcher from "./components/Directory";
import { activeProviders } from "./data/providers";
import { useI18n } from "./i18n";

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
  const { t, providerCopy, categoryLabel } = useI18n();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [model, setModel] = useState("all");
  const [sort, setSort] = useState("rating");
  const [view, setView] = useState("grid");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = activeProviders;
    if (q) {
      list = list.filter((p) => {
        const { description, tags } = providerCopy(p);
        return (
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((tag) => tag.toLowerCase().includes(q)) ||
          p.models.some((m) => m.toLowerCase().includes(q)) ||
          p.category.toLowerCase().includes(q) ||
          p.modelType.toLowerCase().includes(q) ||
          description.toLowerCase().includes(q) ||
          tags.some((tag) => tag.toLowerCase().includes(q)) ||
          categoryLabel(p.category).toLowerCase().includes(q)
        );
      });
    }
    if (category !== "all") {
      list = list.filter((p) => p.category === category);
    }
    if (model !== "all") {
      list = list.filter((p) => p.modelType === model);
    }
    return sortProviders(list, sort);
  }, [query, category, model, sort, providerCopy, categoryLabel]);

  const handleQuick = (key) => {
    if (key === "verified") {
      setQuery("verified");
      setCategory("all");
      setModel("all");
    } else if (key === "claude") {
      setQuery("");
      setModel("anthropic");
    } else if (key === "deepseek") {
      setQuery("deepseek");
      setModel("all");
    } else if (key === "agents") {
      setQuery("agent");
      setModel("all");
    }
    document.getElementById("directory")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleReset = () => {
    setQuery("");
    setCategory("all");
    setModel("all");
    setSort("rating");
  };

  return (
    <div className="min-h-[100dvh] bg-canvas font-sans text-ink">
      <Header />

      <main id="top">
        <Hero />
        <QuickFilters onQuick={handleQuick} onReset={handleReset} />

        <section id="directory" className="site-shell scroll-mt-24 py-10 lg:py-14" aria-labelledby="catalog-title">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 id="catalog-title" className="font-display text-2xl font-bold tracking-tight text-ink md:text-[32px] md:leading-10">
                  {t("catalog.title")}
                </h2>
                <p className="mt-1 max-w-xl text-sm text-muted">{t("catalog.body")}</p>
              </div>
              <ViewSwitcher view={view} onView={setView} />
            </div>

            <ControlDeck
              query={query}
              onQuery={setQuery}
              category={category}
              onCategory={setCategory}
              model={model}
              onModel={setModel}
              sort={sort}
              onSort={setSort}
            />
          </div>

          <div className="mt-8">
            {filtered.length > 0 ? (
              view === "grid" ? (
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {filtered.map((p, i) => (
                    <Reveal key={p.name} delay={(i % 3) * 60}>
                      <ProviderCard provider={p} />
                    </Reveal>
                  ))}
                </div>
              ) : (
                <AuditTable providers={filtered} />
              )
            ) : (
              <div className="rounded-xl border border-dashed border-line-strong bg-subtle/40 p-12 text-center">
                <p className="font-display text-base font-semibold text-ink">
                  {t("empty.title")}
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-4 inline-flex rounded-md border border-line bg-card px-4 py-2 text-sm text-ink-soft transition-colors hover:border-accent"
                >
                  {t("empty.action")}
                </button>
              </div>
            )}
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
