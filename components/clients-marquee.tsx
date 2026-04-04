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
  { name: "@creatorone", sub: "10K+ seguidores", href: "https://www.tiktok.com/@mcherifx", platform: "tiktok" },
  { name: "@creatortwo", sub: "10K+ seguidores", href: "https://www.tiktok.com/@mcherifx", platform: "tiktok" },
  { name: "@creatorthree", sub: "10K+ seguidores", href: "https://www.tiktok.com/@mcherifx", platform: "tiktok" },
];

function quadrupleChannels(channels: Channel[]) {
  return [...channels, ...channels, ...channels, ...channels];
}

function MarqueeRow({
  channels,
  reverse = false,
  label,
}: {
  channels: Channel[];
  reverse?: boolean;
  label: string;
}) {
  const loop = quadrupleChannels(channels);

  return (
    <div className="relative w-screen overflow-hidden pl-[calc(50%-50vw)]" aria-label={label}>
      <div
        className="flex w-max gap-3 pr-3 will-change-transform"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} 42s linear infinite`,
        }}
      >
        {loop.map((c, idx) => (
          <a
            key={`${c.platform}-${c.name}-${idx}`}
            className="inline-flex min-w-[220px] items-center gap-3 rounded-2xl border border-white/10 bg-black/90 px-3 py-2 text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-sky-300/40 hover:shadow-[0_12px_32px_rgba(0,0,0,0.45)]"
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir canal de ${c.platform === "youtube" ? "YouTube" : "TikTok"} ${c.name} (${c.sub})`}
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
          </a>
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
          Canales que ya confían en el corte
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-sm font-medium text-[var(--color-text)] md:text-base">
          Carrusel continuo: pista duplicada en bucle, animación lineal 0% → −50% sin saltos perceptibles.
        </p>
      </div>
      <div className="space-y-3">
        <MarqueeRow channels={youtubeChannels} label="Fila de canales de YouTube, desplazamiento a la izquierda" />
        <MarqueeRow
          channels={tiktokChannels}
          reverse
          label="Fila de canales de TikTok, desplazamiento a la derecha"
        />
      </div>
    </motion.section>
  );
}
