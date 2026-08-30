import { ArrowUpRight, Star } from "@phosphor-icons/react";
import { buildSignupUrl } from "../data/providers";
import { useI18n } from "../i18n";

/**
 * Initial badge matching the original site's treatment: two uppercase letters
 * from the gateway name, one shared accent colour. The original derived these
 * with getInitials(), so there is no per-brand logo to reproduce.
 * @param {string} name
 * @returns {string}
 */
function getInitials(name) {
  if (typeof name !== "string" || !name) return "??";
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}

/**
 * A single gateway card. Presentational - receives the provider object.
 * Description, tags and category label are shown translated; the gateway name
 * and the rating stay as-is.
 */
export default function ProviderCard({ provider }) {
  const { t, providerCopy, categoryLabel } = useI18n();
  const url = buildSignupUrl(provider);
  const { description, tags } = providerCopy(provider);
  const tagToShow = tags[0];

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
        aria-label={t("card.claim.aria", { name: provider.name })}
      />
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          {/* Decorative: the card already carries the accessible name via the
              overlay link, so the badge is hidden from assistive tech. */}
          <span
            aria-hidden="true"
            className="grid size-11 shrink-0 place-items-center rounded-[10px] bg-signal-soft font-mono text-sm font-bold tracking-tight text-signal-deep ring-1 ring-inset ring-signal/30"
          >
            {getInitials(provider.name)}
          </span>
          <div className="min-w-0">
            <p className="m-0 truncate font-mono text-2xs uppercase tracking-[0.18em] text-muted">
              {categoryLabel(provider.category)}
            </p>
            <h3 className="mt-0.5 truncate text-lg font-semibold tracking-tight text-ink">
              {provider.name}
            </h3>
          </div>
        </div>
        {tagToShow && (
          <span className="shrink-0 rounded-full bg-signal-soft px-2.5 py-1 font-mono text-micro font-medium text-signal-deep">
            {tagToShow}
          </span>
        )}
      </div>

      <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-ink-soft">
        {description}
      </p>

      <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
        <span className="inline-flex items-center gap-1.5 font-mono text-sm font-semibold text-ink">
          <Star size={15} weight="fill" className="text-signal" />
          {provider.rating.toFixed(1)}
        </span>
        {/* pointer-events-none: let clicks fall through to the overlay link
            above, so the whole footer area is clickable. Colour still reacts
            via group-hover on the card. */}
        <span className="pointer-events-none inline-flex items-center gap-1 font-mono text-xs text-muted transition group-hover:text-signal-deep">
          {t("card.claim")}
          <ArrowUpRight
            size={15}
            className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </article>
  );
}
