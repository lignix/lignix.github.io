import type { CSSProperties } from "react";
import { useLocale, useTranslations } from "next-intl";
import { contact, cv } from "@/content/site";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const cvHref = cv[locale] ?? null;

  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto w-full max-w-5xl px-6 pb-20 pt-10 md:px-10 md:pb-28 md:pt-20"
    >
      <p
        className="hero-fade mb-8 flex items-center gap-3 font-display text-sm font-medium text-muted"
        style={delay(500)}
      >
        <span className="status-dot" aria-hidden="true" />
        {t("status")}
      </p>

      <h1 id="hero-title" className="hero-name">
        <span className="hero-line">
          <span style={delay(0)}>Charles Bouvier</span>
        </span>
      </h1>

      <p
        className="hero-fade mt-8 font-display text-2xl font-semibold tracking-tight md:text-3xl"
        style={delay(450)}
      >
        {t("role")}
      </p>
      <p className="hero-fade mt-5 max-w-[60ch] text-pretty text-muted" style={delay(570)}>
        {t("intro")}
      </p>

      <div className="hero-fade mt-10 flex flex-wrap gap-3" style={delay(690)}>
        <a href="#projects" className="btn btn-primary">
          {t("viewProjects")}
        </a>
        <a href={`mailto:${contact.email}`} className="btn">
          {t("contactMe")}
        </a>
        {cvHref && (
          <a href={cvHref} className="btn" download>
            {t("downloadCv")}
          </a>
        )}
      </div>

      <p className="hero-fade mt-8 font-display text-sm text-muted" style={delay(810)}>
        {t("location")}
      </p>
    </section>
  );
}
