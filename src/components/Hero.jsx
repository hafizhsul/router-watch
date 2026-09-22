import { ArrowDown } from "@phosphor-icons/react";
import { activeProviders } from "../data/providers";
import Reveal from "./Reveal";
import { useI18n } from "../i18n";

/**
 * Editorial hero per Stitch: ribbon, 48px headline with italic accent,
 * dual CTA, 4-cell ledger stats bar. Counts derived from provider data.
 * ponytail: wire real audit timestamp when a status feed exists.
 */
export default function Hero() {
  const { t, isCjk } = useI18n();
  const count = activeProviders.length;
  const verified = activeProviders.filter((p) => p.verification === "verified").length;
  const disputed = activeProviders.filter((p) => p.verification === "disputed").length;
  const disputePct = count ? ((disputed / count) * 100).toFixed(1) : "0.0";

  const accentClass = isCjk ? "font-semibold not-italic" : "font-normal italic";

  const stats = [
    { label: t("hero.stats.monitored"), value: `${count} active`, sub: `• ${verified} Fully Verified`, tone: "verified" },
    { label: t("hero.stats.value"), value: "$593.00+", sub: "Across all models", tone: "muted" },
    { label: t("hero.stats.dispute"), value: `${disputePct}%`, sub: `${disputed} under investigation`, tone: "disputed" },
    { label: t("hero.stats.audit"), value: t("hero.stats.today"), sub: "04:12 UTC via NodeBot", tone: "accent" },
  ];

  return (
    <section className="border-b border-line bg-canvas py-12 lg:py-16">
      <div className="site-shell flex flex-col items-center text-center">
        <Reveal>
          <h1 className="font-display mx-auto max-w-3xl text-4xl font-bold leading-[1.15] tracking-tight text-ink md:text-5xl">
            {t("hero.title.lead")}{" "}
            <em className={accentClass} style={{ color: "var(--accent-ink)" }}>
              {t("hero.title.accent")}
            </em>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {t("hero.body")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#directory" className="cta-primary">
              {t("hero.cta.count", { n: count })}
              <ArrowDown size={17} weight="bold" />
            </a>
          </div>
        </Reveal>
        <Reveal delay={120} className="mt-12 w-full max-w-4xl">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center bg-card p-4 text-center">
                <dt className="label-caps text-muted">{s.label}</dt>
                <dd className="font-display mt-1 text-[22px] font-bold text-ink">{s.value}</dd>
                <dd
                  className="mt-0.5 font-mono text-[11px]"
                  style={{
                    color:
                      s.tone === "verified" || s.tone === "accent"
                        ? "var(--badge-verified-text)"
                        : s.tone === "disputed"
                          ? "var(--badge-disputed-text)"
                          : "var(--muted)",
                  }}
                >
                  {s.sub}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
