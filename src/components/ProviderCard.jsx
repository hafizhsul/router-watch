import { ArrowUpRight, Star } from "@phosphor-icons/react";
import { buildSignupUrl } from "../data/providers";

/**
 * A single provider "ticket". Presentational - receives the provider object.
 * One CTA intent: "Open route". No duplicate-intent CTAs.
 */
export default function ProviderCard({ provider }) {
  const url = buildSignupUrl(provider);
  const tagToShow = provider.tags[0];

  return (
    <article
      className="group relative flex flex-col rounded-[var(--radius-card)] border border-line bg-surface p-5 transition hover:-translate-y-1"
      style={{ boxShadow: "var(--shadow-hover)" }}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10 rounded-[inherit]"
        aria-label={`Claim ${provider.name} signup bonus`}
      />
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="m-0 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {provider.category}
          </p>
          <h3 className="mt-1 text-lg font-semibold tracking-tight text-ink">
            {provider.name}
          </h3>
        </div>
        {tagToShow && (
          <span className="shrink-0 rounded-full bg-signal-soft px-2.5 py-1 font-mono text-[10px] font-medium text-signal-deep">
            {tagToShow}
          </span>
        )}
      </div>

      <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-ink-soft">
        {provider.description}
      </p>

      <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
        <span className="inline-flex items-center gap-1.5 font-mono text-sm font-semibold text-ink">
          <Star size={15} weight="fill" className="text-signal" />
          {provider.rating.toFixed(1)}
        </span>
        <span className="z-10 inline-flex items-center gap-1 font-mono text-xs text-muted transition group-hover:text-signal-deep">
          Claim bonus
          <ArrowUpRight
            size={15}
            className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </article>
  );
}
