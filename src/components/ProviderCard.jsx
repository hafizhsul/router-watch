import { ArrowUpRight, Star, Warning } from "@phosphor-icons/react";
import { useState } from "react";
import { buildSignupUrl } from "../data/providers";
import { useI18n } from "../i18n";

function getInitials(name) {
  if (typeof name !== "string" || !name) return "??";
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}

const FAVICONS = {
  Bluesminds: "/favicons/bluesminds.png",
  "Xiaomi Mimo": "/favicons/xiaomi-mimo.png",
  "Agent Router": "/favicons/agent-router.png",
  "See Kai": "/favicons/see-kai.png",
  Hcnsec: "/favicons/hcnsec.png",
  GoRouter: "/favicons/gorouter.png",
  Bai: "/favicons/bai.png",
  TaBiAi: "/favicons/tabiai.png",
  KKToken: "/favicons/kktoken.png",
  JustDoWork: "/favicons/justdowork.png",
};

const DOT_COLOR = {
  verified: "var(--badge-verified-text)",
  disputed: "var(--badge-disputed-text)",
  unverified: "var(--muted)",
  none: "var(--muted)",
};

/**
 * Gateway card per Stitch: logo slot + category + title + status badge,
 * description, Models roster with status dots, tags, rating footer + CTA.
 * Whole card is one overlay link; hover only swaps the border.
 */
export default function ProviderCard({ provider }) {
  const { t, providerCopy, categoryLabel } = useI18n();
  const [faviconFailed, setFaviconFailed] = useState(false);
  const url = buildSignupUrl(provider);
  const { description, tags } = providerCopy(provider);
  const hasVerdict = ["verified", "unverified", "disputed"].includes(provider.verification);
  const favicon = !faviconFailed ? FAVICONS[provider.name] : undefined;

  const badgeStyle =
    provider.verification === "verified"
      ? { backgroundColor: "var(--badge-verified-bg)", color: "var(--badge-verified-text)", borderColor: "var(--badge-verified-border)" }
      : provider.verification === "disputed"
        ? { backgroundColor: "var(--badge-disputed-bg)", color: "var(--badge-disputed-text)", borderColor: "var(--badge-disputed-border)" }
        : { backgroundColor: "var(--badge-unverified-bg)", color: "var(--badge-unverified-text)", borderColor: "var(--line)" };

  return (
    <article className="gateway-card group relative flex min-h-[380px] flex-col p-5">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10 rounded-[inherit]"
        aria-label={t("card.claim.aria", { name: provider.name })}
      />
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span
            aria-hidden="true"
            className="grid size-9 shrink-0 place-items-center overflow-hidden rounded-lg border border-line bg-subtle"
          >
            {favicon ? (
              <img
                src={favicon}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
                onError={() => setFaviconFailed(true)}
              />
            ) : (
              <span className="font-display text-xs font-bold" style={{ color: "var(--accent-ink)" }}>
                {getInitials(provider.name)}
              </span>
            )}
          </span>
          <div className="min-w-0">
            <p className="label-caps m-0 truncate text-muted">
              {categoryLabel(provider.category)}
            </p>
            <h3 className="font-display mt-0.5 truncate text-base font-bold text-ink">
              {provider.name}
            </h3>
          </div>
        </div>
        {hasVerdict && (
          <span
            className="inline-flex shrink-0 items-center gap-1 rounded border px-2 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-wider"
            style={badgeStyle}
          >
            {provider.verification === "disputed" && <Warning size={12} aria-hidden="true" />}
            {t(`verification.${provider.verification}`)}
          </span>
        )}
      </div>

      <p className="line-clamp-3 flex-1 text-xs leading-relaxed text-ink-soft">
        {description}
      </p>

      {Array.isArray(provider.models) && provider.models.length > 0 && (
        <div className="mt-4">
          <p className="label-caps m-0 text-[10px] text-muted">{t("card.models")}</p>
          <ul className="mt-1.5 space-y-0.5 font-mono text-xs text-ink">
            {provider.models.slice(0, 4).map((m) => (
              <li key={m} className="flex items-center gap-1.5">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full"
                  style={{ backgroundColor: DOT_COLOR[provider.verification] ?? "var(--muted)" }}
                />
                {m}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mb-5 mt-4 flex flex-wrap items-center gap-1.5">
        {tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="rounded border border-line bg-subtle px-2 py-0.5 font-mono text-[11px] text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-line pt-3">
        <span className="inline-flex items-center gap-1 font-mono text-sm font-bold text-ink">
          <Star size={16} weight="fill" aria-hidden="true" style={{ color: "var(--accent-ink)" }} />
          {provider.rating.toFixed(1)}
        </span>
        <span className="pointer-events-none inline-flex items-center gap-1 text-xs font-semibold transition-colors" style={{ color: "var(--accent-ink)" }}>
          {t("card.claim")}
          <ArrowUpRight size={14} aria-hidden="true" />
        </span>
      </div>
    </article>
  );
}
