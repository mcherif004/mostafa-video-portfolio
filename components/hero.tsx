"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="bg-[radial-gradient(circle_at_20%_20%,rgba(0,123,255,0.12),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(0,86,179,0.10),transparent_50%)] py-10 md:py-14 lg:py-16 dark:bg-[radial-gradient(circle_at_20%_20%,rgba(255,77,77,0.10),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(204,51,51,0.08),transparent_50%)]"
    >
      <div className="mx-auto max-w-content px-4 sm:px-5 md:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.62fr]">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)] text-sm font-bold text-[var(--color-primary)]">
              MC
            </div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-secondary)]">
              Mostafa Cherif · Edición orientada a retención y crecimiento
            </p>
            <h1
              id="hero-title"
              className="mb-4 text-[clamp(1.7rem,5.4vw,3.15rem)] font-bold leading-[1.12] text-[var(--color-primary)]"
            >
              El algoritmo no perdona el aburrimiento. Tu audiencia tampoco.
            </h1>
            <p className="mb-6 text-[clamp(1rem,2.6vw,1.15rem)] font-semibold leading-relaxed text-[var(--color-text)]">
              Tu contenido puede crecer o estancarse por los primeros 3 segundos. Yo optimizo hook, ritmo y narrativa
              para subir retencion y clic sin que pierdas tiempo editando.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#prueba"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-primary)] bg-[var(--color-primary)] px-6 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--color-secondary)]"
              >
                Ver clips con intención
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-primary)] px-6 py-2.5 text-sm font-semibold text-[var(--color-primary)] transition hover:-translate-y-0.5 hover:bg-[color:var(--color-primary)]/10"
              >
                Quiero escalar mi canal
              </a>
            </div>
          </motion.div>
          <motion.div
            className="relative flex min-h-[250px] flex-col justify-center gap-3 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-card)] to-[var(--color-accent)] p-5 shadow-[0_10px_24px_rgba(0,0,0,0.12)] md:min-h-[280px] md:p-6"
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
          >
            <div className="absolute inset-[-45%] bg-[radial-gradient(circle,rgba(0,123,255,0.22),transparent_55%)] dark:bg-[radial-gradient(circle,rgba(255,77,77,0.20),transparent_55%)]" />
            <div className="relative z-10 grid grid-cols-3 gap-2 text-center text-xs font-semibold text-[var(--color-primary)]">
              <p className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)]/70 px-3 py-2">Premiere</p>
              <p className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)]/70 px-3 py-2">After</p>
              <p className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)]/70 px-3 py-2">PS</p>
            </div>
            <p className="relative z-10 w-fit rounded-full border border-[var(--color-border)] bg-[color:var(--color-primary)]/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-[var(--color-primary)]">
              Hook magnetico
            </p>
            <p className="relative z-10 ml-auto w-fit rounded-full border border-[var(--color-border)] bg-[color:var(--color-primary)]/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-[var(--color-primary)]">
              CTR competitivo
            </p>
            <p className="relative z-10 w-fit rounded-full border border-[var(--color-border)] bg-[color:var(--color-primary)]/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-[var(--color-primary)]">
              Escala semanal
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
