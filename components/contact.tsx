import { ContactForm } from "@/components/contact-form";

export function Contact() {
  return (
    <section id="contacto" className="bg-[var(--color-accent)]/75 py-14 md:py-20 lg:py-24" aria-labelledby="contacto-title">
      <div className="mx-auto max-w-content px-4 sm:px-5 md:px-6">
        <h2 id="contacto-title" className="mb-4 text-[clamp(1.65rem,3.5vw,2.25rem)] font-bold text-[var(--color-primary)]">
          Contacto
        </h2>
        <p className="mx-auto mb-7 max-w-3xl text-center text-[clamp(1rem,2.4vw,1.2rem)] font-semibold leading-relaxed text-[var(--color-text)]">
          Si quieres presupuesto rapido, escribeme con 4 datos: formato, duracion final, material que
          envias y objetivo del video.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
