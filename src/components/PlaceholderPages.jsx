import { Columns, Pulse } from "@phosphor-icons/react";
import { useI18n } from "../i18n";
import { routeHref } from "../router";

/**
 * Placeholder matrix: judul + copy + CTA balik ke board.
 * ponytail: ganti dengan tabel perbandingan dari providers.js.
 */
export function MatrixPage() {
  const { t } = useI18n();

  return (
    <section className="site-shell py-16 lg:py-24" aria-labelledby="matrix-title">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <span
          aria-hidden="true"
          className="grid size-12 place-items-center rounded-xl border border-line bg-card"
          style={{ color: "var(--accent-ink)" }}
        >
          <Columns size={24} />
        </span>
        <p className="label-caps mt-6 text-muted">{t("matrix.eyebrow")}</p>
        <h1 id="matrix-title" className="font-display mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">
          {t("matrix.title")}
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted">{t("matrix.body")}</p>
        <a href={routeHref("board")} className="cta-primary mt-8">
          {t("matrix.cta")}
        </a>
      </div>
    </section>
  );
}

/**
 * Placeholder status: judul + copy + CTA balik ke board.
 * ponytail: wire real status feed kalau ada endpoint uptime.
 */
export function StatusPage() {
  const { t } = useI18n();

  return (
    <section className="site-shell py-16 lg:py-24" aria-labelledby="status-title">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <span
          aria-hidden="true"
          className="grid size-12 place-items-center rounded-xl border border-line bg-card"
          style={{ color: "var(--accent-ink)" }}
        >
          <Pulse size={24} />
        </span>
        <p className="label-caps mt-6 text-muted">{t("status.eyebrow")}</p>
        <h1 id="status-title" className="font-display mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">
          {t("status.title")}
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted">{t("status.body")}</p>
        <a href={routeHref("board")} className="cta-primary mt-8">
          {t("status.cta")}
        </a>
      </div>
    </section>
  );
}
