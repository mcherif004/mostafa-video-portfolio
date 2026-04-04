"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
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
      {pending ? "Enviando..." : "Enviar mensaje"}
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

  return (
    <form
      action={formAction}
      className="rounded-2xl border border-blue-100 bg-white p-6 shadow-[0_10px_24px_rgba(0,0,0,0.10)] dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-[0_10px_24px_rgba(0,0,0,0.35)]"
    >
      <div className="grid gap-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-semibold text-slate-700 dark:text-zinc-200">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-xl border border-blue-100 bg-slate-50 px-3 py-2 text-slate-900 outline-none transition focus:border-blue-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-red-400"
          />
          <FieldError errors={state.errors?.name} />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-semibold text-slate-700 dark:text-zinc-200">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full rounded-xl border border-blue-100 bg-slate-50 px-3 py-2 text-slate-900 outline-none transition focus:border-blue-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-red-400"
          />
          <FieldError errors={state.errors?.email} />
        </div>

        <div>
          <label htmlFor="contact" className="mb-1 block text-sm font-semibold text-slate-700 dark:text-zinc-200">
            Discord / WhatsApp (opcional)
          </label>
          <input
            id="contact"
            name="contact"
            type="text"
            className="w-full rounded-xl border border-blue-100 bg-slate-50 px-3 py-2 text-slate-900 outline-none transition focus:border-blue-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-red-400"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-semibold text-slate-700 dark:text-zinc-200">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full resize-y rounded-xl border border-blue-100 bg-slate-50 px-3 py-2 text-slate-900 outline-none transition focus:border-blue-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-red-400"
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
    </form>
  );
}
