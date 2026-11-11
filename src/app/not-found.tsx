import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque/wdth.css";
import "@fontsource-variable/instrument-sans/index.css";
import "./globals.css";
import { localeLabels, routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "404 – Charles Bouvier",
  robots: { index: false },
};

// Static hosting serves this one file (/404.html) for every unknown URL, so it
// contains the message in every supported language. A small script shows the one
// that matches the URL (/fr/...) or the browser language; without JavaScript the
// default language is shown. The status code stays 404.
export default async function NotFound() {
  const entries = await Promise.all(
    routing.locales.map(async (locale) => {
      const messages = (await import(`../../messages/${locale}.json`)).default;
      return [locale, messages.notFound as { title: string; text: string; home: string }] as const;
    }),
  );

  const script = `
    (function () {
      var locales = ${JSON.stringify(routing.locales)};
      var pick = location.pathname.split("/")[1];
      if (locales.indexOf(pick) === -1) {
        pick = "${routing.defaultLocale}";
        var langs = navigator.languages || [navigator.language || ""];
        for (var i = 0; i < langs.length; i++) {
          var code = String(langs[i]).toLowerCase().slice(0, 2);
          if (locales.indexOf(code) > -1) { pick = code; break; }
        }
      }
      document.documentElement.lang = pick;
      var blocks = document.querySelectorAll("[data-locale]");
      for (var j = 0; j < blocks.length; j++) {
        blocks[j].hidden = blocks[j].getAttribute("data-locale") !== pick;
      }
    })();
  `;

  return (
    <html lang={routing.defaultLocale} suppressHydrationWarning>
      <body>
        <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-16 md:px-10">
          <p className="hero-name" aria-hidden="true">
            404
          </p>
          {entries.map(([locale, m]) => (
            <div
              key={locale}
              data-locale={locale}
              lang={locale}
              hidden={locale !== routing.defaultLocale}
              suppressHydrationWarning
            >
              <h1 className="mt-6 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                {m.title}
              </h1>
              <p className="mt-3 max-w-[60ch] text-muted">{m.text}</p>
              <p className="mt-8">
                <a href={`/${locale}/`} className="btn btn-primary">
                  {m.home}
                </a>
              </p>
            </div>
          ))}
        </main>
        <script dangerouslySetInnerHTML={{ __html: script }} />
      </body>
    </html>
  );
}
