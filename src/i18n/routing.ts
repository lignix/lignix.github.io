import { defineRouting } from "next-intl/routing";

// To add a language:
//   1. add its code to `locales` below
//   2. add its name to `localeLabels`
//   3. create messages/<code>.json (copy en.json and translate it)
// The switcher, the 404 page, the root redirect and the sitemap pick it up automatically.
export const routing = defineRouting({
  locales: ["en", "fr"],
  defaultLocale: "en",
});

export type Locale = (typeof routing.locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  fr: "Français",
};
