import type { Metadata } from "next";
import { localeLabels, routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Charles Bouvier",
  robots: { index: false },
};

// Static export has no server redirect, so "/" picks a language in the browser:
// the first browser language that matches a supported locale, else the default.
const script = `
  (function () {
    var locales = ${JSON.stringify(routing.locales)};
    var pick = "${routing.defaultLocale}";
    var langs = navigator.languages || [navigator.language || ""];
    for (var i = 0; i < langs.length; i++) {
      var code = String(langs[i]).toLowerCase().slice(0, 2);
      if (locales.indexOf(code) > -1) { pick = code; break; }
    }
    location.replace("/" + pick + "/" + location.hash);
  })();
`;

export default function RootPage() {
  return (
    <html lang={routing.defaultLocale}>
      <head>
        <noscript>
          <meta httpEquiv="refresh" content={`0;url=/${routing.defaultLocale}/`} />
        </noscript>
        <script dangerouslySetInnerHTML={{ __html: script }} />
      </head>
      <body>
        <p>
          {routing.locales.map((locale, i) => (
            <span key={locale}>
              {i > 0 && " · "}
              <a href={`/${locale}/`}>{localeLabels[locale]}</a>
            </span>
          ))}
        </p>
      </body>
    </html>
  );
}
