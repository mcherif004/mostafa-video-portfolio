"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Channel = {
  name: string;
  sub: string;
  href: string;
  platform: "youtube" | "tiktok";
};

const youtubeChannels: Channel[] = [
  { name: "mcherifx", sub: "10K+ suscriptores", href: "https://www.youtube.com/@mcherifx", platform: "youtube" },
  { name: "iamkingjayy", sub: "10K+ suscriptores", href: "https://www.youtube.com/@iamkingjayy", platform: "youtube" },
  { name: "IcyBrez", sub: "10K+ suscriptores", href: "https://www.youtube.com/@IcyBrez", platform: "youtube" },
  { name: "JimRisingJuega", sub: "10K+ suscriptores", href: "https://www.youtube.com/@JimRisingJuega", platform: "youtube" },
  { name: "ManiaticLina", sub: "10K+ suscriptores", href: "https://www.youtube.com/@ManiaticLina", platform: "youtube" },
];

const tiktokChannels: Channel[] = [
  { name: "@mcherifx", sub: "10K+ seguidores", href: "https://www.tiktok.com/@mcherifx", platform: "tiktok" },
  { name: "@mcherifx", sub: "10K+ seguidores", href: "https://www.tiktok.com/@mcherifx", platform: "tiktok" },
  { name: "@mcherifx", sub: "10K+ seguidores", href: "https://www.tiktok.com/@mcherifx", platform: "tiktok" },
  { name: "@mcherifx", sub: "10K+ seguidores", href: "https://www.tiktok.com/@mcherifx", platform: "tiktok" },
];

function Row({
  channels,
  reverse = false,
  label,
}: {
  channels: Channel[];
  reverse?: boolean;
  label: string;
}) {
  const marqueeAnimation = reverse
    ? "animate-[marquee_28s_linear_infinite_reverse]"
    : "animate-[marquee_28s_linear_infinite]";

  return (
    <div className="w-screen pl-[calc(50%-50vw)]" aria-label={label}>
      <div className={`flex w-max ${marqueeAnimation}`}>
        {[...channels, ...channels].map((c, idx) => (
          <motion.a
            key={`${c.name}-${c.platform}-${idx}`}
            className="mr-3 inline-flex min-w-[220px] items-center gap-3 rounded-2xl border border-white/10 bg-black px-3 py-2 text-white transition hover:-translate-y-0.5 hover:border-sky-300/40 hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir canal de ${c.platform === "youtube" ? "YouTube" : "TikTok"} ${c.name} (${c.sub})`}
            whileHover={{ y: -3, scale: 1.01 }}
          >
            <Image
              src={`https://unavatar.io/${c.platform}/${c.name.replace("@", "")}`}
              alt=""
              className="h-12 w-12 rounded-full object-cover"
              width={48}
              height={48}
              loading="lazy"
              unoptimized
            />
            <span className="min-w-0 text-left leading-tight">
              <span className="block truncate text-base font-bold text-white">{c.name}</span>
              <span className="block text-xs font-semibold text-sky-300">{c.sub}</span>
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export function ClientsMarquee() {
  return (
    <motion.section
      id="clientes"
      className="overflow-x-clip border-y border-[var(--color-border)] bg-[var(--color-accent)] py-12 md:py-14"
      aria-labelledby="clientes-title"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-content px-4 sm:px-5 md:px-6">
        <h2
          id="clientes-title"
          className="mb-4 text-[clamp(1.45rem,3.2vw,2rem)] font-bold text-[var(--color-primary)] md:text-center"
        >
          Clientes con los que he trabajado
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-[var(--color-text)]">
          Canales reales con trabajo entregado. Carrusel continuo sin cortes.
        </p>
      </div>
      <div className="space-y-3">
        <Row channels={youtubeChannels} label="Fila de canales de YouTube" />
        <Row channels={tiktokChannels} reverse label="Fila de canales de TikTok" />
      </div>
    </motion.section>
  );
}
