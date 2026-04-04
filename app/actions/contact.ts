"use server";

import { z } from "zod";
import { prisma } from "@/lib/db";

const contactSchema = z.object({
  name: z.string().trim().min(2, "El nombre es obligatorio."),
  email: z.string().trim().email("Email invalido.").optional().or(z.literal("")),
  contact: z.string().trim().optional().or(z.literal("")),
  message: z.string().trim().min(10, "El mensaje es demasiado corto."),
});

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"name" | "email" | "message", string[]>>;
};

export const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
};

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    contact: formData.get("contact"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Revisa los campos marcados e intentalo de nuevo.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.lead.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email || null,
        contact: parsed.data.contact || null,
        message: parsed.data.message,
        source: "web",
        status: "new",
      },
    });

    return {
      status: "success",
      message: "Mensaje enviado. Te respondere lo antes posible.",
    };
  } catch {
    return {
      status: "error",
      message: "No se pudo enviar el mensaje por un error de conexion.",
    };
  }
}
