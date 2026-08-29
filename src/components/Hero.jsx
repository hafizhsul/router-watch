import { ArrowRight, Compass } from "@phosphor-icons/react";
import { activeProviders } from "../data/providers";
import Reveal from "./Reveal";
import { useI18n } from "../i18n";

/**
 * Hero: left message / right top-bonus panel.
 * Max 4 text elements. The italic accent is dropped for CJK locales because
 * synthesized oblique CJK glyphs read as a rendering bug, not emphasis.
 */
export default function Hero() {
  const { t, isCjk, categoryLabel } = useI18n();
  const count = activeProviders.length;
  const categoryCount = new Set(activeProviders.map((p) => p.category)).size;
  const topRated = [...activeProviders]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  const accentClass = isCjk
    ? "font-semibold text-signal"
    : "font-medium italic text-signal";

  return (
    <section className="relative overflow-hidden">
      <div className="site-shell">
        <div className="grid grid-cols-1 items-center gap-10 pb-16 pt-20 md:grid-cols-[1.1fr_0.9fr] md:gap-14 lg:pt-2 lg:pb-24">
          <Reveal>
            <div className="max-w-xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface-3 px-3 py-1 text-xs font-medium tracking-wide text-signal-deep">
                <Compass size={14} weight="regular" />
                {t("hero.eyebrow")}
              </p>
              {/* Descender clearance: text scales with CJK, leading stays >= 1.1 */}
              <h1 className="pb-1 text-4xl font-semibold leading-[1.15] tracking-tight text-ink md:text-5xl">
                {t("hero.title.lead")}{" "}
                <em className={accentClass}>{t("hero.title.accent")}</em>
              </h1>
              <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-ink-soft">
                {t("hero.body")}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#catalog" className="cta-primary">
                  {t("hero.cta")}
                  <ArrowRight size={18} weight="bold" />
                </a>
                <span className="font-mono text-sm text-muted">
                  {t("hero.count", { n: count })}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div
              className="rounded-[var(--radius-card)] border border-line bg-surface-3 p-6 md:p-7"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="mb-5 flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {t("ledger.title")}
                </span>
                <span className="font-mono text-[11px] text-signal-deep">
                  {t("ledger.note")}
                </span>
              </div>
              <ol className="space-y-4">
                {topRated.map((p, i) => (
                  <li
                    key={p.name}
                    className="flex items-center justify-between gap-4"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="grid size-9 shrink-0 place-items-center rounded-md bg-signal-soft font-mono text-sm font-semibold text-signal-deep">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-ink">
                          {p.name}
                        </p>
                        <p className="truncate font-mono text-[11px] text-muted">
                          {categoryLabel(p.category)}
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 font-mono text-sm font-semibold text-ink">
                      {p.rating.toFixed(1)}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 border-t border-line pt-4 font-mono text-[11px] leading-relaxed text-muted">
                {t("ledger.footer", { n: count, c: categoryCount })}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
