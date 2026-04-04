import { submitContact, initialContactFormState } from "../app/actions/contact";
import { prisma } from "../lib/db";

async function run() {
  const id = Date.now();
  const email = `e2e-${id}@example.com`;

  const formData = new FormData();
  formData.set("name", "E2E Cursor");
  formData.set("email", email);
  formData.set("contact", "discord:test");
  formData.set("message", "Mensaje de prueba end-to-end para verificar insercion de Lead.");

  const result = await submitContact(initialContactFormState, formData);
  console.log("action_status", result.status);
  console.log("action_message", result.message);

  const lead = await prisma.lead.findFirst({
    where: { email },
    orderBy: { createdAt: "desc" },
  });

  console.log("lead_created", Boolean(lead));

  if (lead) {
    console.log("lead_id", lead.id);
    await prisma.lead.delete({ where: { id: lead.id } });
    console.log("lead_cleanup", "deleted");
  }

  await prisma.$disconnect();
}

run().catch(async (error) => {
  console.error("e2e_error", error);
  await prisma.$disconnect();
  process.exit(1);
});
