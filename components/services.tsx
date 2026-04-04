"use client";

import { motion } from "framer-motion";

export function Services() {
  const items = [
    {
      id: "vertical",
      title: "Vertical",
      cta: "#vertical-pack",
      ctaLabel: "Ver Vertical",
      bullets: [
        "Hook fuerte en los primeros segundos",
        "Ritmo agil para retencion y viralidad",
        "Montaje para Shorts, Reels y TikTok",
        "Entrega lista para publicar",
      ],
    },
    {
      id: "youtube",
      title: "Horizontal (YouTube)",
      cta: "#horizontal-pack",
      ctaLabel: "Ver Horizontal",
      bullets: [
        "Estructura narrativa clara de inicio a cierre",
        "Ritmo estable para mantener atencion",
        "Audio y continuidad visual bien integrados",
        "Montaje preparado para YouTube largo",
      ],
    },
    {
      id: "miniaturas",
      title: "Miniaturas",
      cta: "#pricing",
      ctaLabel: "Ver Precios",
      bullets: [
        "Diseno enfocado a CTR",
        "Jerarquia visual clara en movil y desktop",
        "Consistencia con tu marca y estilo",
        "Pensadas para vender el video en un vistazo",
      ],
    },
  ];

  return (
    <section
      id="servicios"
      aria-labelledby="servicios-title"
      className="bg-[var(--color-accent)]/75 py-14 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-content px-4 sm:px-5 md:px-6">
        <h2
          id="servicios-title"
          className="mb-7 text-[clamp(1.65rem,3.5vw,2.25rem)] font-bold text-[var(--color-primary)]"
        >
          Servicios
        </h2>
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
