import { useTranslations } from "next-intl";
import { skills } from "@/content/site";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const groups = Object.keys(skills) as (keyof typeof skills)[];

export function Skills() {
  const t = useTranslations("skills");

  return (
    <Section id="skills" title={t("title")}>
      <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {groups.map((group, index) => (
          <Reveal key={group} delay={index * 70}>
            <dt className="font-display text-sm font-semibold text-muted">
              {t(`groups.${group}`)}
            </dt>
            <dd className="mt-1">{skills[group].join(", ")}</dd>
          </Reveal>
        ))}
        <Reveal delay={groups.length * 70}>
          <dt className="font-display text-sm font-semibold text-muted">
            {t("groups.languages")}
          </dt>
          <dd className="mt-1">{(t.raw("languages") as string[]).join(", ")}</dd>
        </Reveal>
      </dl>
    </Section>
  );
}
