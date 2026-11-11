import { useTranslations } from "next-intl";
import { experience } from "@/content/site";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const groups = ["dev", "other"] as const;

export function Experience() {
  const t = useTranslations("experience");

  return (
    <Section id="experience" title={t("title")}>
      <div className="space-y-14">
        {groups.map((group) => (
          <Reveal key={group}>
            <h3 className="font-display text-sm font-semibold text-muted">
              {t(group)}
            </h3>
            <ol className="mt-4 divide-y divide-line border-y border-line">
              {experience[group].map((id) => (
                <li
                  key={id}
                  className="grid gap-2 py-6 sm:grid-cols-[10rem_1fr] sm:gap-8"
                >
                  <p className="font-display text-sm font-medium text-muted sm:pt-1">
                    {t(`items.${id}.period`)}
                  </p>
                  <div>
                    <h4 className="font-display text-lg font-semibold tracking-tight">
                      {t(`items.${id}.role`)}
                    </h4>
                    <p className="text-muted">
                      {t(`items.${id}.company`)}, {t(`items.${id}.place`)}
                    </p>
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-muted">
                      {(t.raw(`items.${id}.bullets`) as string[]).map((bullet) => (
                        <li key={bullet} className="max-w-[62ch] text-pretty">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
