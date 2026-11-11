import { useTranslations } from "next-intl";
import { contact } from "@/content/site";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Contact() {
  const t = useTranslations("contact");

  return (
    <Section id="contact" title={t("title")}>
      <Reveal>
      <p className="max-w-[60ch] text-pretty text-muted">{t("text")}</p>
      <p className="mt-6">
        <a
          href={`mailto:${contact.email}`}
          className="break-words font-display text-lg font-semibold tracking-tight text-accent underline sm:text-2xl md:text-3xl"
        >
          {contact.email}
        </a>
      </p>
      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-display text-base font-semibold">
        <li>
          <a href={contact.github} className="underline" target="_blank" rel="noopener noreferrer">
            {t("github")}
          </a>
        </li>
        {contact.linkedin && (
          <li>
            <a href={contact.linkedin} className="underline" target="_blank" rel="noopener noreferrer">
              {t("linkedin")}
            </a>
          </li>
        )}
      </ul>
      </Reveal>
    </Section>
  );
}
