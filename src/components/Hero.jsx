import { ArrowRight, Compass, ArrowUpRight } from "@phosphor-icons/react";
import { activeProviders, buildSignupUrl } from "../data/providers";
import Reveal from "./Reveal";
import { useI18n } from "../i18n";

/**
 * Hero: left editorial manifesto (B), right a living board (A/C/D).
 *
 * Right panel shows a network-map backdrop (D), the offer with the highest
 * rating as a highlighted deal (C), and a "best offer" readout. Counts come
 * from the live provider data, so the panel is never stale.
 *
 * For CJK the italic accent is dropped because synthesized oblique CJK glyphs
 * read as a rendering bug, not emphasis. Only transform/opacity animate; the
 * panel carries no scroll listener, and everything respects reduced motion.
 */
export default function Hero() {
  const { t, isCjk, categoryLabel } = useI18n();
  const count = activeProviders.length;
  const categoryCount = new Set(activeProviders.map((p) => p.category)).size;
  const topRated = [...activeProviders]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);
  const best = topRated[0];

  const accentClass = isCjk
    ? "font-semibold text-signal"
    : "font-medium italic text-signal";

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

          {/* Living board (A + C + D) */}
          <Reveal delay={120}>
            <div
              className="relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface-3 p-6 md:p-7"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              {/* Network map backdrop (D). Sits in the top strip only, faint,
                  and fades out before the content so it never reads as an
                  overlap. The card below is opaque and z-10, so nothing can
                  show through it either way. */}
              <svg
                aria-hidden="true"
                viewBox="0 0 400 190"
                preserveAspectRatio="xMidYMax slice"
                className="pointer-events-none absolute left-0 right-0 top-0 h-44 w-full"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 45%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 45%, transparent 100%)",
                }}
              >
                <g stroke="var(--line-strong)" strokeWidth="1" fill="none">
                  <path d="M40 50 C80 30 120 50 150 78" />
                  <path d="M150 78 C180 50 220 40 260 60" />
                  <path d="M40 50 C60 100 120 110 150 78" />
                  <path d="M260 60 C300 80 300 120 340 110" />
                </g>
                <g fill="var(--signal)">
                  <circle cx="40" cy="50" r="3" />
                  <circle cx="150" cy="78" r="4" />
                  <circle cx="260" cy="60" r="3" />
                  <circle cx="340" cy="110" r="2.5" />
                </g>
                <circle
                  cx="150"
                  cy="78"
                  r="7"
                  fill="none"
                  stroke="var(--signal)"
                  strokeOpacity="0.35"
                  className="animate-ping"
                  style={{ transformOrigin: "150px 78px" }}
                />
              </svg>

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

                {/* Best offer (C). Solid surface so content reads cleanly; the
                    faint signal tint marks it as the highlighted offer. */}
                <div className="rounded-[12px] border border-signal/30 bg-surface p-4">
                  <p className="m-0 font-mono text-micro uppercase tracking-[0.18em] text-signal-deep">
                    {t("hero.best.title")}
                  </p>
                  <div className="mt-2 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-base font-semibold text-ink">
                        {best.name}
                      </p>
                      <p className="truncate font-mono text-2xs text-muted">
                        {categoryLabel(best.category)} ·{" "}
                        {best.tags[0] ?? ""}
                      </p>
                    </div>
                    <span className="shrink-0 font-mono text-lg font-bold text-signal">
                      {best.rating.toFixed(1)}
                    </span>
                  </div>
                  <a
                    href={buildSignupUrl(best)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 font-mono text-xs font-semibold text-signal-deep transition hover:gap-1.5"
                  >
                    {t("hero.best.cta")}
                    <ArrowUpRight size={15} weight="bold" />
                  </a>
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
