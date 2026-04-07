import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { SiteLanguageProvider } from "./context/SiteLanguageContext";
import "./styles/globals.css";
import "./styles/index.css";
import "./styles/root.css";
import "./lib/icons";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <React.StrictMode>
    <SiteLanguageProvider>
      <App />
    </SiteLanguageProvider>
  </React.StrictMode>
);
