import { ArrowRight, Compass, ArrowUpRight } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { activeProviders, buildSignupUrl } from "../data/providers";
import Reveal from "./Reveal";
import { useI18n } from "../i18n";

/**
 * Hero: left editorial manifesto (B), right a living board (A/C).
 *
 * The right panel auto-rotates through the top-rated gateways with a crossfade
 * and progress dots, so the highlighted offer is always moving. It pauses on
 * hover/focus and never auto-rotates under prefers-reduced-motion. Counts come
 * from live provider data. Only transform/opacity animate; no scroll listener.
 *
 * For CJK the italic accent is dropped because synthesized oblique CJK glyphs
 * read as a rendering bug, not emphasis.
 */
export default function Hero() {
  const { t, isCjk, categoryLabel } = useI18n();
  const count = activeProviders.length;
  const categoryCount = new Set(activeProviders.map((p) => p.category)).size;
  const topRated = [...activeProviders]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  const [offerIndex, setOfferIndex] = useState(0);
  // Rotating stops while this timestamp is in the future. Set on any direct
  // interaction (dot click, hover, focus) so the reader's choice wins for a
  // short window before rotation resumes.
  const pausedUntil = useRef(0);

  const accentClass = isCjk
    ? "font-semibold text-signal"
    : "font-medium italic text-signal";

  const pauseRotation = () => {
    pausedUntil.current = Date.now() + 10000;
  };

  // Auto-rotate the highlighted offer. Reduced motion or a single offer means
  // no rotation at all; any interaction pauses it for a short window.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || topRated.length <= 1) return;
    const id = setInterval(() => {
      if (Date.now() >= pausedUntil.current) {
        setOfferIndex((i) => (i + 1) % topRated.length);
      }
    }, 4000);
    return () => clearInterval(id);
  }, [topRated.length]);

  const offer = topRated[offerIndex];

  return (
    <section className="relative overflow-hidden">
      <div className="site-shell">
        <div className="grid grid-cols-1 items-stretch gap-10 pb-14 pt-20 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:pt-24 lg:pb-20">
          {/* Editorial side (B) */}
          <Reveal>
            <div className="flex h-full max-w-2xl flex-col justify-center">
              <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface-3 px-3 py-1 text-xs font-medium tracking-wide text-signal-deep">
                <Compass size={14} weight="regular" />
                {t("hero.eyebrow")}
              </p>
              {/* Descender clearance: text scales with CJK, leading stays >= 1.1 */}
              <h1 className="pb-1 text-4xl font-semibold leading-[1.15] tracking-tight text-ink md:text-5xl lg:text-6xl">
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

          {/* Living board (A + C) */}
          <Reveal delay={120}>
            <div
              className="relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface-3 p-6 md:p-7"
              style={{ boxShadow: "var(--shadow-card)" }}
              onMouseEnter={pauseRotation}
              onMouseLeave={pauseRotation}
            >
              <div className="relative z-10 flex flex-col">
                <div className="mb-5 flex items-center justify-between border-b border-line pb-4">
                  <span className="inline-flex items-center gap-2 font-mono text-2xs uppercase tracking-[0.18em] text-muted">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
                      <span className="relative inline-flex size-2 rounded-full bg-signal" />
                    </span>
                    {t("hero.live")}
                  </span>
                  <span className="font-mono text-2xs text-signal-deep">
                    {count} · {categoryCount}
                  </span>
                </div>

                {/* Rotating best offer (C). Crossfades on a key remount; the
                    dot indicator never lies about which offer is showing.
                    Interaction pauses rotation briefly, and reduced-motion
                    disables it entirely in the effect above. */}
                <div
                  className="rounded-[12px] border border-signal/30 bg-surface p-4"
                  onFocus={pauseRotation}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="m-0 font-mono text-micro uppercase tracking-[0.18em] text-signal-deep">
                      {t("hero.best.title")}
                    </p>
                    <div className="flex gap-1.5">
                      {topRated.map((p, i) => (
                        <button
                          key={p.name}
                          type="button"
                          aria-label={`${p.name} ${p.rating.toFixed(1)}`}
                          aria-current={i === offerIndex ? "true" : undefined}
                          onClick={() => {
                            setOfferIndex(i);
                            pauseRotation();
                          }}
                          className="grid size-6 place-items-center"
                        >
                          {/* 24px hit area (WCAG 2.2 target), visual bar in the
                              middle so the control reads as a dot indicator. */}
                          <span
                            className={`block h-1.5 rounded-full transition-all duration-300 ${
                              i === offerIndex
                                ? "w-4 bg-signal"
                                : "w-1.5 bg-line hover:bg-signal/50"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div key={offer.name} className="offer-crossfade mt-2">
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-base font-semibold text-ink">
                          {offer.name}
                        </p>
                        <p className="truncate font-mono text-2xs text-muted">
                          {categoryLabel(offer.category)} ·{" "}
                          {offer.tags[0] ?? ""}
                        </p>
                      </div>
                      <span className="shrink-0 font-mono text-lg font-bold text-signal">
                        {offer.rating.toFixed(1)}
                      </span>
                    </div>
                    <a
                      href={buildSignupUrl(offer)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 font-mono text-xs font-semibold text-signal-deep transition hover:gap-1.5"
                    >
                      {t("hero.best.cta")}
                      <ArrowUpRight size={15} weight="bold" />
                    </a>
                  </div>
                </div>

                {/* Leaderboard (A) */}
                <p className="mt-5 font-mono text-2xs uppercase tracking-[0.18em] text-muted">
                  {t("hero.ticker")}
                </p>
                <ol className="mt-3 space-y-1.5">
                  {topRated.map((p, i) => (
                    <li
                      key={p.name}
                      className="flex items-center justify-between gap-4 border-b border-line/60 pb-2 last:border-0 last:pb-0"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <span className="font-mono text-xs text-muted">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="truncate text-sm font-medium text-ink">
                          {p.name}
                        </p>
                      </div>
                      <span className="shrink-0 font-mono text-xs text-signal-deep">
                        {p.rating.toFixed(1)}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
