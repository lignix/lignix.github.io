"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { localeLabels, routing } from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("common");

  return (
    <nav aria-label={t("language")}>
      <ul className="flex items-center gap-4 font-display text-sm font-medium">
        {routing.locales.map((code) => {
          const active = code === locale;
          return (
            <li key={code}>
              <Link
                href={pathname}
                locale={code}
                hrefLang={code}
                lang={code}
                aria-label={localeLabels[code]}
                aria-current={active ? "true" : undefined}
                className={
                  active
                    ? "underline decoration-2 underline-offset-8"
                    : "text-muted hover:text-ink"
                }
              >
                {code.toUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
