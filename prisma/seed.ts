import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const services = [
    {
      name: "Edicion Vertical",
      slug: "edicion-vertical",
      description: "Edicion optimizada para Shorts, Reels y TikTok.",
      plans: [
        {
          name: "Basico",
          price: 15,
          description: "Montaje rapido para piezas cortas.",
          features: ["Hasta 45s", "1 revision", "Entrega en 48h"],
        },
        {
          name: "Pro",
          price: 30,
          description: "Mejor ritmo narrativo y diseno sonoro.",
          features: ["Hasta 90s", "2 revisiones", "Hook optimizado"],
        },
        {
          name: "Premium",
          price: 70,
          description: "Edicion avanzada con mayor detalle visual.",
          features: ["Hasta 3m", "3 revisiones", "Ajustes avanzados"],
        },
      ],
    },
    {
      name: "Edicion Horizontal",
      slug: "edicion-horizontal",
      description: "Edicion para YouTube largo y piezas publicitarias.",
      plans: [
        {
          name: "Basico",
          price: 30,
          description: "Edicion base para videos largos.",
          features: ["Hasta 15m", "1 revision", "Ritmo estable"],
        },
        {
          name: "Pro",
          price: 60,
          description: "Narrativa reforzada y audio mas cuidado.",
          features: ["Hasta 25m", "2 revisiones", "Graficos basicos"],
        },
        {
          name: "Premium",
          price: 110,
          description: "Paquete completo para contenido de alto impacto.",
          features: ["Hasta 35m", "3 revisiones", "Postproduccion avanzada"],
        },
      ],
    },
  ];

  for (const serviceData of services) {
    const service = await prisma.service.upsert({
      where: { slug: serviceData.slug },
      update: {
        name: serviceData.name,
        description: serviceData.description,
        active: true,
      },
      create: {
        name: serviceData.name,
        slug: serviceData.slug,
        description: serviceData.description,
        active: true,
      },
    });

    await prisma.pricingPlan.deleteMany({
      where: { serviceId: service.id },
    });

    await prisma.pricingPlan.createMany({
      data: serviceData.plans.map((plan) => ({
        serviceId: service.id,
        name: plan.name,
        price: plan.price,
        currency: "EUR",
        description: plan.description,
        features: plan.features,
        active: true,
      })),
    });
  }

  const projects = [
    {
      title: "Short Viral - Productividad",
      slug: "short-viral-productividad",
      description: "Ejemplo vertical para TikTok/Reels con ritmo rapido.",
      videoUrl: "https://www.youtube.com/shorts/Kj0xnYV1M0w",
      thumbnailUrl: "https://i.ytimg.com/vi/Kj0xnYV1M0w/hqdefault.jpg",
      format: "VERTICAL" as const,
    },
    {
      title: "Reel Storytelling - Gaming",
      slug: "reel-storytelling-gaming",
      description: "Pieza vertical orientada a retencion con gancho inicial.",
      videoUrl: "https://www.youtube.com/shorts/bD32yrfPmfc",
      thumbnailUrl: "https://i.ytimg.com/vi/bD32yrfPmfc/hqdefault.jpg",
      format: "VERTICAL" as const,
    },
    {
      title: "Short Engagement - Tutorial",
      slug: "short-engagement-tutorial",
      description: "Vertical con foco en hook y retencion inicial.",
      videoUrl: "https://www.youtube.com/shorts/Q1FzK9Mu54U",
      thumbnailUrl: "https://i.ytimg.com/vi/Q1FzK9Mu54U/hqdefault.jpg",
      format: "VERTICAL" as const,
    },
    {
      title: "YouTube Long Form - Tutorial",
      slug: "youtube-longform-tutorial",
      description: "Caso horizontal para YouTube de formato largo.",
      videoUrl: "https://www.youtube.com/watch?v=MxRjnojmVCE",
      thumbnailUrl: "https://i.ytimg.com/vi/MxRjnojmVCE/hqdefault.jpg",
      format: "HORIZONTAL" as const,
    },
    {
      title: "Spot Publicitario - Marca",
      slug: "spot-publicitario-marca",
      description: "Video horizontal estilo anuncio para campana digital.",
      videoUrl: "https://www.youtube.com/watch?v=waM70tLmNZI",
      thumbnailUrl: "https://i.ytimg.com/vi/waM70tLmNZI/hqdefault.jpg",
      format: "HORIZONTAL" as const,
    },
    {
      title: "YouTube Serie - Episodio",
      slug: "youtube-serie-episodio",
      description: "Formato horizontal para contenido largo con narrativa.",
      videoUrl: "https://www.youtube.com/watch?v=_b9G5WRZNPA",
      thumbnailUrl: "https://i.ytimg.com/vi/_b9G5WRZNPA/hqdefault.jpg",
      format: "HORIZONTAL" as const,
    },
  ];

  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: project,
      create: project,
    });
  }

  // Seed finalizado.
}

main()
  .catch((error) => {
    console.error("Error al ejecutar seed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
