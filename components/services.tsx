"use client";

import { motion } from "framer-motion";

export function Services() {
  const items = [
    {
      id: "vertical",
      title: "Vertical",
      cta: "#pricing",
      ctaLabel: "Ver Vertical",
      bullets: [
        "Hook fuerte en los primeros segundos.",
        "Ritmo ágil para retención y viralidad.",
        "Montaje pensado para Shorts, Reels y TikTok.",
        "Entrega lista para publicar.",
      ],
    },
    {
      id: "youtube",
      title: "Horizontal (YouTube)",
      cta: "#pricing",
      ctaLabel: "Ver Horizontal",
      bullets: [
        "Estructura narrativa clara de inicio a cierre.",
        "Ritmo estable para mantener atención.",
        "Audio y continuidad visual bien integrados.",
        "Montaje preparado para YouTube largo.",
      ],
    },
    {
      id: "miniaturas",
      title: "Miniaturas",
      cta: "#pricing",
      ctaLabel: "Ver Miniaturas",
      bullets: [
        "Diseño enfocado a CTR.",
        "Jerarquía visual clara en móvil y desktop.",
        "Consistencia con tu marca y estilo.",
        "Pensadas para vender el vídeo en un vistazo.",
      ],
    },
  ];

  return (
    <section
      id="servicios"
      aria-labelledby="servicios-title"
      className="section-shell bg-[var(--color-accent)]/75"
    >
      <div className="mx-auto max-w-content px-4 sm:px-5 md:px-6">
        <p className="section-kicker">Servicios</p>
        <h2
          id="servicios-title"
          className="section-title-premium mb-3 text-[clamp(1.65rem,3.5vw,2.45rem)] font-bold"
        >
          Lo que hago por tu canal
        </h2>
        <p className="mb-7 max-w-3xl text-sm font-medium leading-relaxed text-[var(--color-text)] md:text-base">
          Mensaje simple: mas retencion, mas clic y menos horas en timeline.
        </p>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <motion.article
              key={item.id}
              id={item.id}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-5 shadow-[0_10px_24px_rgba(0,0,0,0.10)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.16)] md:p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
            >
              <h3 className="mb-4 border-b border-[var(--color-border)] pb-2 text-xl font-semibold text-[var(--color-primary)]">
                {item.title}
              </h3>
              <ul className="mb-5 space-y-2 text-sm font-medium text-[var(--color-text)]">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="pl-5 before:relative before:-left-5 before:mr-[-1.2rem] before:text-[var(--color-primary)] before:content-['→']"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
              <a
                href={item.cta}
                className="inline-flex w-full items-center justify-center rounded-full border border-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[color:var(--color-primary)]/10"
              >
                {item.ctaLabel}
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
