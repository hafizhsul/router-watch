import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/sora";
import "@fontsource/ibm-plex-mono";
import "./index.css";
import App from "./App.jsx";
import { I18nProvider } from "./i18n";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nProvider>
      <App />
    </I18nProvider>
  </StrictMode>,
);
