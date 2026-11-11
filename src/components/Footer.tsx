import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-full max-w-5xl px-6 py-8 font-display text-sm text-muted md:px-10">
        © {new Date().getFullYear()} Charles Bouvier. {t("builtWith")}
      </div>
    </footer>
  );
}
