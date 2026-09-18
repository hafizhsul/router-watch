import { Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "../theme";

/**
 * Segmented sun/moon toggle per Stitch header. Manual switch persisted to
 * localStorage via ThemeProvider; dark is the default.
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="flex items-center rounded-full border border-line bg-card p-0.5 transition-colors hover:border-line-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span
        aria-hidden="true"
        className={`grid size-6 place-items-center rounded-full transition-colors ${
          isDark ? "text-muted" : "bg-subtle text-accent-ink"
        }`}
      >
        <Sun size={15} weight={isDark ? "regular" : "fill"} />
      </span>
      <span
        aria-hidden="true"
        className={`grid size-6 place-items-center rounded-full transition-colors ${
          isDark ? "bg-subtle text-accent-ink" : "text-muted"
        }`}
      >
        <Moon size={15} weight={isDark ? "fill" : "regular"} />
      </span>
    </button>
  );
}
