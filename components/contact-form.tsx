"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { motion } from "framer-motion";
import {
  initialContactFormState,
  submitContact,
  type ContactFormState,
} from "@/app/actions/contact";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center rounded-full border border-indigo-500 bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Enviando..." : "Pedir propuesta"}
    </button>
  );
}

function FieldError({ errors }: { errors?: string[] }) {
  if (!errors?.length) return null;
  return <p className="mt-1 text-sm text-red-500">{errors[0]}</p>;
}

export function ContactForm() {
  const [state, formAction] = useActionState<ContactFormState, FormData>(
    submitContact,
    initialContactFormState
  );
  const serviceOptions = [
    { id: "service-vertical", value: "Vertical", label: "Vertical" },
    { id: "service-horizontal", value: "Horizontal", label: "Horizontal" },
    { id: "service-miniatura", value: "Miniatura", label: "Miniatura" },
    { id: "service-personalizado", value: "Personalizado", label: "Personalizado" },
  ];

  return (
    <motion.form
      action={formAction}
      className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[0_10px_24px_rgba(0,0,0,0.10)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="grid gap-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-semibold text-[var(--color-text)]">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)]"
          />
          <FieldError errors={state.errors?.name} />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-semibold text-[var(--color-text)]">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)]"
          />
          <FieldError errors={state.errors?.email} />
        </div>

        <div>
          <label htmlFor="contact" className="mb-1 block text-sm font-semibold text-[var(--color-text)]">
            Discord / WhatsApp (opcional)
          </label>
          <input
            id="contact"
            name="contact"
            type="text"
            className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)]"
          />
        </div>

        <fieldset className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-3">
          <legend className="px-1 text-sm font-semibold text-[var(--color-text)]">
            Qué quieres escalar (obligatorio)
          </legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {serviceOptions.map((option) => (
              <label key={option.id} htmlFor={option.id} className="inline-flex items-center gap-2 text-sm text-[var(--color-text)]">
                <input
                  id={option.id}
                  name="services"
                  value={option.value}
                  type="checkbox"
                  className="h-4 w-4 rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                />
                {option.label}
              </label>
            ))}
          </div>
          <FieldError errors={state.errors?.services} />
        </fieldset>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-semibold text-[var(--color-text)]">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full resize-y rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)]"
          />
          <FieldError errors={state.errors?.message} />
        </div>

        <div className="mt-1">
          <SubmitButton />
        </div>

        {state.message && (
          <p className={state.status === "success" ? "text-sm text-emerald-600" : "text-sm text-red-500"}>
            {state.message}
          </p>
        )}
      </div>
    </motion.form>
  );
}
