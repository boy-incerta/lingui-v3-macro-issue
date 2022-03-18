import React from "react";
import ReactDOM from "react-dom";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { Message, Switcher } from "./test";

i18n.loadLocaleData("en", {});
i18n.loadLocaleData("ja", {});

export function activate(locale: string) {
  if (locale === "en") {
    i18n.load(locale, { msgid: "English" });
    i18n.activate(locale);
  } else if (locale === "ja") {
    i18n.load(locale, { msgid: "Japanese" });
    i18n.activate(locale);
  }
}

activate("en");

ReactDOM.render(
  <React.StrictMode>
    <I18nProvider i18n={i18n}>
      <Message />
      <Switcher />
    </I18nProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
