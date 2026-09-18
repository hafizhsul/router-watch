import { buildSignupUrl } from "../data/providers";
import { useI18n } from "../i18n";

/**
 * Dense audit table alternative to the card grid. Shares the same provider
 * data and signup URLs; disputed bonuses render muted, verified in accent.
 */
export default function AuditTable({ providers }) {
  const { t, categoryLabel } = useI18n();

  const badgeStyle = (v) =>
    v === "verified"
      ? { backgroundColor: "var(--badge-verified-bg)", color: "var(--badge-verified-text)", borderColor: "var(--badge-verified-border)" }
      : v === "disputed"
        ? { backgroundColor: "var(--badge-disputed-bg)", color: "var(--badge-disputed-text)", borderColor: "var(--badge-disputed-border)" }
        : { backgroundColor: "var(--badge-unverified-bg)", color: "var(--badge-unverified-text)", borderColor: "var(--line)" };

  return (
    <div className="overflow-x-auto rounded-xl border border-line bg-card">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-line bg-subtle">
            {["gateway", "type", "status", "bonus", "models", "rating", "action"].map((k) => (
              <th
                key={k}
                scope="col"
                className={`label-caps px-4 py-3 text-muted ${k === "rating" || k === "action" ? "text-right" : ""}`}
              >
                {t(`table.${k}`)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-line text-xs">
          {providers.map((p) => (
            <tr key={p.name} className="transition-colors hover:bg-subtle/50">
              <td className="font-display px-4 py-3 font-semibold text-ink">{p.name}</td>
              <td className="px-4 py-3 font-mono text-muted">{categoryLabel(p.category)}</td>
              <td className="px-4 py-3">
                <span
                  className="rounded border px-2 py-0.5 font-mono text-[11px]"
                  style={badgeStyle(p.verification)}
                >
                  {t(`verification.${p.verification}`)}
                </span>
              </td>
              <td
                className="px-4 py-3 font-mono font-semibold"
                style={{ color: p.verification === "verified" ? "var(--accent-ink)" : "var(--muted)" }}
              >
                {p.tags[0] ?? "—"}
              </td>
              <td className="max-w-56 truncate px-4 py-3 text-muted">
                {p.models.slice(0, 3).join(", ")}
              </td>
              <td className="px-4 py-3 text-right font-mono font-bold text-ink">
                {p.rating.toFixed(1)}
              </td>
              <td className="px-4 py-3 text-right">
                <a
                  href={buildSignupUrl(p)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono font-semibold hover:underline"
                  style={{ color: "var(--accent-ink)" }}
                >
                  {t("card.claim")} ↗
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
