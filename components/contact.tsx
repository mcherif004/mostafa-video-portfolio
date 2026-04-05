import { ContactForm } from "@/components/contact-form";

export function Contact() {
  return (
    <section id="contacto" className="section-shell bg-[var(--color-accent)]/75" aria-labelledby="contacto-title">
      <div className="mx-auto max-w-content px-4 sm:px-5 md:px-6">
        <p className="section-kicker">Contacto</p>
        <h2 id="contacto-title" className="section-title-premium mb-4 text-[clamp(1.65rem,3.5vw,2.45rem)] font-bold">
          Cierra el círculo
        </h2>
        <p className="mx-auto mb-7 max-w-3xl text-center text-[clamp(1rem,2.4vw,1.2rem)] font-semibold leading-relaxed text-[var(--color-text)]">
          Si quieres una respuesta con número y fecha, envía esto en un solo mensaje: formato, duración deseada, enlace
          al material y qué métrica quieres mover (retención, CTR, publicaciones/semana). Cuanto más claro el brief,
          antes vuelves a crear en lugar de perseguir revisiones.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
