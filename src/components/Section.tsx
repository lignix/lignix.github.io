import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line">
      <div className="mx-auto grid w-full max-w-5xl gap-8 px-6 py-16 md:grid-cols-[13rem_1fr] md:gap-12 md:px-10 md:py-24">
        <Reveal>
          <h2
            id={`${id}-title`}
            className="font-display text-2xl font-semibold tracking-tight md:pt-1"
          >
            {title}
          </h2>
        </Reveal>
        <div>{children}</div>
      </div>
    </section>
  );
}
