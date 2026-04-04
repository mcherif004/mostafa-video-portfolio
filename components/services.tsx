"use client";

import { motion } from "framer-motion";

export function Services() {
  const items = [
    {
      id: "vertical",
      title: "Verticales que enganchan",
      cta: "#vertical-pack",
      ctaLabel: "Ver verticales",
      bullets: [
        "Abres con un hook que obliga a quedarse: menos scroll, más minutos vistos.",
        "Ritmo cortado para el algoritmo de Shorts, Reels y TikTok — no para ‘verse bonito’.",
        "Subtítulos y picos visuales donde el ojo ya está mirando: más retención por frame.",
        "Entregas listas para publicar: tú grabas; el tiempo de edición vuelve a tu calendario.",
      ],
    },
    {
      id: "youtube",
      title: "Largos que sostienen la atención",
      cta: "#horizontal-pack",
      ctaLabel: "Ver largos",
      bullets: [
        "Estructura narrativa que evita la fuga en el minuto dos: más watch time, más recomendación.",
        "Cortes y silencios trabajados para que el vídeo ‘respire’ sin perder tensión.",
        "Audio limpio y continuidad visual: credibilidad instantánea y menos abandono.",
        "Montaje preparado para YouTube: capítulos mentales claros y payoff al final.",
      ],
    },
    {
      id: "miniaturas",
      title: "Miniaturas con dientes",
      cta: "#pricing",
      ctaLabel: "Ver inversión",
      bullets: [
        "Diseño con una sola promesa visual: más clics sin clickbait barato.",
        "Jerarquía legible en móvil: el 70% de tus impresiones decide en pantalla pequeña.",
        "Coherencia de marca para que te reconozcan en el feed antes de leer el título.",
        "Cada pixel empuja al CTR: menos esfuerzo promocional por vídeo publicado.",
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
          className="mb-3 text-[clamp(1.65rem,3.5vw,2.25rem)] font-bold text-[var(--color-primary)]"
        >
          Lo que hago por tu canal
        </h2>
        <p className="mb-7 max-w-3xl text-sm font-medium leading-relaxed text-[var(--color-text)] md:text-base">
          No vendo ‘edición’. Vendo decisiones de montaje que suben retención, CTR y crecimiento de audiencia — y te
          devuelven horas que hoy pierdes en timeline.
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
