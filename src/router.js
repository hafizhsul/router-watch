import { useEffect, useState } from "react";

export const ROUTES = ["board", "matrix", "status"];

/**
 * Hash router tanpa dependency: #/ (board), #/matrix, #/status.
 * Unknown hash falls back to board. ponytail: ganti react-router
 * kalau jumlah rute > 5 atau butuh nested route.
 * @returns {"board" | "matrix" | "status"}
 */
function parseHash() {
  const h = window.location.hash.replace(/^#\/?/, "").split("?")[0].split("/")[0];
  if (h === "matrix") return "matrix";
  if (h === "status") return "status";
  return "board";
}

export function useRoute() {
  const [route, setRoute] = useState(() =>
    typeof window === "undefined" ? "board" : parseHash(),
  );

  useEffect(() => {
    const onChange = () => setRoute(parseHash());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}

/**
 * @param {"board" | "matrix" | "status"} route
 */
export function routeHref(route) {
  if (route === "board") return "#/";
  return `#/${route}`;
}
