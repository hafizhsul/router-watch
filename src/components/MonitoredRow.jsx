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

/**
 * Monitored gateway row ala aigratis: favicon, name + domain, model count.
 * Favicon hotlinks aigratis; onError falls back to initials. Whole row is
 * one overlay link like ProviderCard.
 */
export default function MonitoredRow({ provider }) {
  const { t } = useI18n();
  const [faviconFailed, setFaviconFailed] = useState(false);
  const url = buildSignupUrl(provider);
  const domain = (() => {
    try {
      return new URL(provider.baseUrl).hostname.replace(/^www\./, "");
    } catch {
      return "";
    }
  })();

  return (
    <li className="relative flex items-center gap-3 rounded-lg border border-line bg-card px-3 py-2.5 transition-colors hover:border-accent">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10 rounded-[inherit]"
        aria-label={t("card.claim.aria", { name: provider.name })}
      />
      <span
        aria-hidden="true"
        className="grid size-8 shrink-0 place-items-center overflow-hidden rounded-md border border-line bg-subtle"
      >
        {!faviconFailed && provider.favicon ? (
          <img
            src={provider.favicon}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
            onError={() => setFaviconFailed(true)}
          />
        ) : (
          <span className="font-display text-[11px] font-bold" style={{ color: "var(--accent-ink)" }}>
            {getInitials(provider.name)}
          </span>
        )}
      </span>
      <span className="min-w-0 flex-1">
        <span className="font-display block truncate text-sm font-bold text-ink">
          {provider.name}
        </span>
        {domain && (
          <span className="block truncate font-mono text-[11px] text-muted">{domain}</span>
        )}
      </span>
      <span className="shrink-0 font-mono text-[11px] text-muted">
        {t("monitored.models", { n: modelCount(provider) })}
      </span>
    </li>
  );
}

function modelCount(provider) {
  const tag = provider.tags.find((tag) => /^\d+ models$/.test(tag));
  return tag ? tag.split(" ")[0] : "–";
}
