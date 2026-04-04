"use client";

import { useEffect, useMemo, useState } from "react";
import { LazyYouTube } from "@/components/lazy-youtube";

type MediaItem = {
  id: string;
  title: string;
  description?: string | null;
  url?: string;
  kind: "video" | "thumb";
};

type SliderProps = {
  title: string;
  subtitle: string;
  items: MediaItem[];
  vertical?: boolean;
  autoMs?: number;
};

function Slider({ title, subtitle, items, vertical = false, autoMs = 4200 }: SliderProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = items.length;

  useEffect(() => {
    if (paused || total <= 1) return;
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % total), autoMs);
    return () => clearInterval(timer);
  }, [paused, total, autoMs]);

  useEffect(() => {
    if (index >= total) setIndex(0);
  }, [index, total]);

  const current = useMemo(() => (total ? items[index] : null), [items, index, total]);

  if (!current) return null;

  return (
    <section
      className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mb-4 flex items-end justify-between gap-3">
        <div>
          <h3 className="text-2xl font-semibold text-[var(--color-primary)]">{title}</h3>
          <p className="text-sm text-[var(--color-text)]/80">{subtitle}</p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setIndex((prev) => (prev - 1 + total) % total)}
            className="rounded-full border border-[var(--color-border)] px-3 py-1 text-sm font-semibold text-[var(--color-primary)]"
            aria-label={`Anterior en ${title}`}
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => setIndex((prev) => (prev + 1) % total)}
            className="rounded-full border border-[var(--color-border)] px-3 py-1 text-sm font-semibold text-[var(--color-primary)]"
            aria-label={`Siguiente en ${title}`}
          >
            →
          </button>
        </div>
      </div>

      {current.kind === "video" && current.url ? (
        <article className={`mx-auto ${vertical ? "max-w-[320px]" : "max-w-[760px]"}`}>
          <LazyYouTube url={current.url} title={current.title} portrait={vertical} />
          <div className={`pt-3 ${vertical ? "mx-auto max-w-[280px]" : ""}`}>
            <h4 className="text-lg font-semibold text-[var(--color-primary)]">{current.title}</h4>
            <p className="mt-1 text-sm text-[var(--color-text)]">
              {current.description || "Edicion optimizada para retencion y conversion."}
            </p>
          </div>
        </article>
      ) : (
        <article className="mx-auto max-w-[760px] overflow-hidden rounded-2xl border border-[var(--color-border)]">
          <div className="relative aspect-video bg-[linear-gradient(135deg,rgba(0,123,255,0.92),rgba(0,39,77,0.95))] p-6 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/75">Thumbnail System</p>
            <h4 className="mt-2 text-2xl font-extrabold">{current.title}</h4>
            <p className="mt-2 max-w-xl text-sm text-white/85">
              {current.description || "Diseño para aumentar CTR y atraer audiencia cualificada."}
            </p>
          </div>
        </article>
      )}

      <div className="mt-4 flex items-center justify-center gap-2">
        {items.map((item, dotIndex) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setIndex(dotIndex)}
            className={`h-2.5 w-2.5 rounded-full transition ${dotIndex === index ? "bg-[var(--color-primary)]" : "bg-[var(--color-border)]"}`}
            aria-label={`Ir al elemento ${dotIndex + 1} de ${title}`}
          />
        ))}
      </div>
    </section>
  );
}

type WorkSlidersProps = {
  verticalItems: MediaItem[];
  horizontalItems: MediaItem[];
};

export function WorkSliders({ verticalItems, horizontalItems }: WorkSlidersProps) {
  const thumbnailItems: MediaItem[] = [
    { id: "thumb-1", title: "Hook visual + contraste", description: "Miniatura de alto impacto para feed.", kind: "thumb" },
    { id: "thumb-2", title: "Rostro + accion", description: "Composicion clara para CTR en movil.", kind: "thumb" },
    { id: "thumb-3", title: "Promesa + curiosidad", description: "Orientada a clic sin clickbait.", kind: "thumb" },
  ];

  return (
    <div className="space-y-8">
      <Slider
        title="Vertical · Slider interactivo"
        subtitle="Autoplay con pausa en hover para revisar cada clip."
        items={verticalItems}
        vertical
        autoMs={4200}
      />
      <Slider
        title="Horizontal · Slider interactivo"
        subtitle="Navegacion con flechas y dots para evaluar narrativa."
        items={horizontalItems}
        autoMs={5000}
      />
      <Slider
        title="Miniaturas · Slider interactivo"
        subtitle="Sistema visual para CTR alto y marca consistente."
        items={thumbnailItems}
        autoMs={3800}
      />
    </div>
  );
}
