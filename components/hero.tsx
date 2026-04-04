 "use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="bg-[radial-gradient(circle_at_20%_20%,rgba(0,123,255,0.12),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(0,86,179,0.10),transparent_50%)] py-16 md:py-24 dark:bg-[radial-gradient(circle_at_20%_20%,rgba(255,77,77,0.10),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(204,51,51,0.08),transparent_50%)]"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.62fr]">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-blue-700 dark:text-red-400">
              Mostafa Cherif · Edicion para creadores
            </p>
            <h1 id="hero-title" className="mb-4 text-3xl font-bold leading-tight text-blue-700 md:text-5xl">
              Tus videos no fallan por calidad. Fallan por retencion.
            </h1>
            <p className="mb-6 text-lg font-semibold text-slate-800 dark:text-zinc-200">
              Edito contenido para que la gente no se vaya.
              <br /> Mas retencion = mas alcance = mas crecimiento.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#prueba"
                className="inline-flex items-center justify-center rounded-full border border-blue-600 bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Ver como trabajo
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full border border-blue-600 px-6 py-2.5 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50 dark:border-red-500 dark:text-red-400 dark:hover:bg-red-950/40"
              >
                Quiero mejorar mi contenido
              </a>
            </div>
          </motion.div>
          <motion.div
            className="relative flex min-h-[280px] flex-col justify-center gap-3 overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-6 shadow-[0_10px_24px_rgba(0,0,0,0.12)] dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-900"
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
          >
            <div
              className="absolute inset-[-45%] bg-[radial-gradient(circle,rgba(0,123,255,0.22),transparent_55%)] dark:bg-[radial-gradient(circle,rgba(255,77,77,0.20),transparent_55%)]"
            />
            <div className="relative z-10" aria-label="Herramientas que uso">
              <div className="flex items-center justify-center gap-2">
                <Image
                  src="/assets/icons/adobe-after-effects-logo-0.png"
                  alt="After Effects"
                  width={68}
                  height={68}
                  priority
                  className="h-[74px] w-[74px] rounded-xl object-cover"
                />
                <Image
                  src="/assets/icons/adobe-photoshop-logo-0.png"
                  alt="Photoshop"
                  width={68}
                  height={68}
                  priority
                  className="h-[74px] w-[74px] rounded-xl object-cover"
                />
                <Image
                  src="/assets/icons/adobe-premiere-pro-logo-0-1.png"
                  alt="Premiere Pro"
                  width={68}
                  height={68}
                  priority
                  className="h-[74px] w-[74px] rounded-xl object-cover"
                />
              </div>
            </div>
            <p className="relative z-10 w-fit rounded-full border border-blue-100 bg-blue-100/70 px-4 py-2 text-xs font-bold uppercase tracking-wide text-blue-700 dark:border-zinc-700 dark:bg-red-950/40 dark:text-red-400">
              Retencion
            </p>
            <p className="relative z-10 ml-auto w-fit rounded-full border border-blue-100 bg-blue-100/70 px-4 py-2 text-xs font-bold uppercase tracking-wide text-blue-700 dark:border-zinc-700 dark:bg-red-950/40 dark:text-red-400">
              Alcance
            </p>
            <p className="relative z-10 w-fit rounded-full border border-blue-100 bg-blue-100/70 px-4 py-2 text-xs font-bold uppercase tracking-wide text-blue-700 dark:border-zinc-700 dark:bg-red-950/40 dark:text-red-400">
              Crecimiento
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
