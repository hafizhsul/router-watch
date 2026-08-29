import { GitBranch } from "@phosphor-icons/react";

/**
 * Minimal footer. No version stamps, no locale/time strips, no em-dashes.
 */
export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line">
      <div className="site-shell flex flex-col gap-4 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-ink">Router Watch</p>
          <p className="mt-1 max-w-md text-muted">
            An independent board of AI gateways offering signup credit. Check
            each offer yourself before you spend anything.
          </p>
        </div>
        <a
          href="#catalog"
          className="inline-flex w-fit items-center gap-2 text-muted transition hover:text-ink"
        >
          <GitBranch size={18} />
          Contribute a gateway
        </a>
      </div>
    </footer>
  );
}
