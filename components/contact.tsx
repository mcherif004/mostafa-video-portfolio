import { ContactForm } from "@/components/contact-form";

export function Contact() {
  return (
    <section id="contacto" className="bg-blue-50/70 py-16 dark:bg-zinc-900/70 md:py-24" aria-labelledby="contacto-title">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 id="contacto-title" className="mb-4 text-3xl font-bold text-blue-700 dark:text-red-400 md:text-4xl">
          Contacto
        </h2>
        <p className="mx-auto mb-7 max-w-3xl text-center text-lg font-semibold leading-relaxed text-slate-700 dark:text-zinc-200">
          Si quieres presupuesto rapido, escribeme con 4 datos: formato, duracion final, material que
          envias y objetivo del video.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
