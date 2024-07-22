import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18n";
import i18n from "i18next";

const updateHtmlLang = (language) => {
  document.documentElement.lang = language;
};

// Set the initial language based on i18n
updateHtmlLang(i18n.language);

// Listen for changes in the language and update the lang attribute accordingly
i18n.on("initialized", (options) => {
  updateHtmlLang(i18n.language);
});
i18n.on("languageChanged", (lng) => {
  updateHtmlLang(lng);
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
