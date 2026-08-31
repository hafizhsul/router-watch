import { ArrowRight } from "@phosphor-icons/react";
import { activeProviders } from "../data/providers";
import Reveal from "./Reveal";
import { useI18n } from "../i18n";

/**
 * Hero: centered value-prop, single column. Three text elements (headline,
 * subtext, CTA) so the fold carries one message. A subtle dot grid vignetted
 * from the centre sits behind the copy — static, CSS-only, themed
 * via --line so it adapts to light/dark automatically.
 *
 * For CJK the italic accent is dropped because synthesized oblique CJK glyphs
 * read as a rendering bug, not emphasis. Count comes from live provider data.
 */
export default function Hero() {
  const { t, isCjk } = useI18n();
  const count = activeProviders.length;

  const accentClass = isCjk
    ? "font-semibold text-signal"
    : "font-medium italic text-signal";

  return (
    <section className="relative overflow-hidden">
      {/* Dot grid, vignetted from centre so the edges fall away behind the
          copy. One static layer, no JS, no motion; mounted first so content
          stacks above it. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--line) 1px, transparent 0)",
          backgroundSize: "24px 24px",
          mask: "radial-gradient(ellipse 70% 60% at 50% 45%, black 0%, transparent 75%)",
        }}
      />
      <div className="site-shell">
        <div className="mx-auto flex max-w-3xl flex-col items-center pb-16 pt-20 text-center md:pb-20 md:pt-28">
          <Reveal>
            <div className="flex flex-col items-center">
              <h1 className="pb-1 text-4xl font-semibold leading-[1.15] tracking-tight text-ink md:text-5xl lg:text-6xl">
                {t("hero.title.lead")}{" "}
                <em className={accentClass}>{t("hero.title.accent")}</em>
              </h1>
              <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-ink-soft">
                {t("hero.body")}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a href="#catalog" className="cta-primary">
                  {t("hero.cta")}
                  <ArrowRight size={18} weight="bold" />
                </a>
              </div>
              <p className="mt-4 font-mono text-xs text-muted">
                {t("hero.count", { n: count })}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
