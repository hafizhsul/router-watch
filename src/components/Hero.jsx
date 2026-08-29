import { ArrowRight, Compass } from "@phosphor-icons/react";
import { activeProviders } from "../data/providers";
import Reveal from "./Reveal";

/**
 * Hero: warm editorial, left message / right route-ledger panel.
 * Not centered, no dark mesh, no signal-grid. Max 4 text elements.
 */
export default function Hero() {
  const count = activeProviders.length;
  const topRated = [...activeProviders]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section className="relative overflow-hidden">
      <div className="site-shell">
        <div className="grid grid-cols-1 items-center gap-10 pb-16 pt-20 md:grid-cols-[1.1fr_0.9fr] md:gap-14 lg:pt-2 lg:pb-24">
          <Reveal>
            <div className="max-w-xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface-3 px-3 py-1 text-xs font-medium tracking-wide text-signal-deep">
                <Compass size={14} weight="regular" />
                Where the free credit is
              </p>
              <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-5xl">
                Every AI gateway with free credit,{" "}
                <em className="font-medium italic text-signal">in one ledger.</em>
              </h1>
              <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-ink-soft">
                A working list of model gateways, resale routers, and signup
                bonuses. Each entry shows what you actually get, what it costs
                after the bonus, and how to claim it.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#catalog"
                  className="cta-primary"
                >
                  Browse gateways
                  <ArrowRight size={18} weight="bold" />
                </a>
                <span className="font-mono text-sm text-muted">
                  {count} gateways tracked
                </span>
              </div>
            </div>
          </Reveal>

          {/* Route ledger panel */}
          <Reveal delay={120}>
            <div
              className="rounded-[var(--radius-card)] border border-line bg-surface-3 p-6 md:p-7"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="mb-5 flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Best bonuses
                </span>
                <span className="font-mono text-[11px] text-signal-deep">
                  highest rated
                </span>
              </div>
              <ol className="space-y-4">
                {topRated.map((p, i) => (
                  <li
                    key={p.name}
                    className="flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid size-9 place-items-center rounded-md bg-signal-soft font-mono text-sm font-semibold text-signal-deep">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ink">
                          {p.name}
                        </p>
                        <p className="font-mono text-[11px] text-muted">
                          {p.category}
                        </p>
                      </div>
                    </div>
                    <span className="font-mono text-sm font-semibold text-ink">
                      {p.rating.toFixed(1)}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 border-t border-line pt-4 font-mono text-[11px] leading-relaxed text-muted">
                Community maintained. {count} gateways across{" "}
                {new Set(activeProviders.map((p) => p.category)).size}{" "}
                categories, checked for working signup links.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
