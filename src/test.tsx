import React, { useState } from "react";
import { t, Trans } from "@lingui/macro";
import { activate } from "./index";

export const Message = () => {
  return (
    <>
      <h1>{t`msgid`}</h1>
      <h2>
        <Trans>msgid</Trans>
      </h2>
    </>
  );
};

export const Switcher = () => {
  const [locale, setLocale] = useState("en");
  return (
    <select
      value={locale}
      onChange={(e) => {
        activate(e.target.value);
        setLocale(e.target.value);
      }}
    >
      <option value="en">English</option>
      <option value="ja">日本語</option>
    </select>
  );
};
