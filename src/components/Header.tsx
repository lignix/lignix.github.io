import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";

const links = ["projects", "experience", "skills", "contact"] as const;

// Sticky on desktop so every section is one click away; static on mobile
// where the two-row header would take too much of the screen.
export function Header() {
  const t = useTranslations("nav");
  const common = useTranslations("common");

  return (
    <header className="z-40 border-b border-line bg-bg/90 backdrop-blur md:sticky md:top-0">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-4 px-6 py-5 md:px-10 md:py-4">
        <a href="#main" className="font-display text-lg font-semibold tracking-tight">
          Charles Bouvier
        </a>
        <LanguageSwitcher />
        <nav
          aria-label={common("mainNavigation")}
          className="order-last w-full md:order-none md:w-auto md:flex-1 md:pl-10"
        >
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-display text-sm font-medium md:justify-end">
            {links.map((key) => (
              <li key={key}>
                <a href={`#${key}`} className="text-muted hover:text-ink">
                  {t(key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
