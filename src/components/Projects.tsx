import Image from "next/image";
import { useTranslations } from "next-intl";
import { projects } from "@/content/site";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Projects() {
  const t = useTranslations("projects");

  return (
    <Section id="projects" title={t("title")}>
      <ul className="divide-y divide-line border-y border-line">
        {projects.map((project, index) => (
          <Reveal
            as="li"
            key={project.id}
            delay={index * 80}
            className="grid gap-6 py-8 first:pt-6 last:pb-6 md:grid-cols-[1fr_auto] md:gap-10"
          >
            <div>
              <h3 className="font-display text-xl font-semibold tracking-tight">
                {t(`items.${project.id}.title`)}
              </h3>
              <p className="mt-2 max-w-[60ch] text-pretty text-muted">
                {t(`items.${project.id}.description`)}
              </p>

              <ul
                aria-label={t("stack")}
                className="mt-4 flex flex-wrap gap-x-5 gap-y-1 font-display text-sm font-medium"
              >
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              {project.links.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-display text-sm font-semibold">
                  {project.links.map((link) => (
                    <li key={link.kind}>
                      <a
                        href={link.href}
                        className="text-accent underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t(`links.${link.kind}`)}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {project.image && (
              <Image
                src={project.image.src}
                width={project.image.width}
                height={project.image.height}
                alt={t(`items.${project.id}.imageAlt`)}
                sizes="(min-width: 768px) 20rem, 100vw"
                loading="lazy"
                className="aspect-[16/10] h-auto w-full border border-line object-cover md:w-80"
              />
            )}
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
