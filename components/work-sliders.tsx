"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LazyYouTube } from "@/components/lazy-youtube";

type MediaItem = {
  id: string;
  title: string;
  description?: string | null;
  url?: string;
  kind: "video" | "thumb";
};

// ── Shared controls ───────────────────────────────────────────────────────────

function SliderControls({
  total,
  index,
  onPrev,
  onNext,
  onDot,
}: {
  total: number;
  index: number;
  onPrev: () => void;
  onNext: () => void;
  onDot: (i: number) => void;
}) {
  if (total <= 1) return <div className="h-8" aria-hidden="true" />;
  return (
    <div className="flex items-center justify-between gap-2">
      <button
        type="button"
        onClick={onPrev}
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-black/50 bg-[var(--color-card)] text-xl font-bold text-[var(--color-primary)] transition hover:border-black hover:bg-[var(--color-accent)]"
        aria-label="Anterior"
      >
        ‹
      </button>
      <div className="flex items-center gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onDot(i)}
            className={`rounded-full transition-all duration-300 ${
              i === index ? "h-2 w-5 bg-[var(--color-primary)]" : "h-2 w-2 bg-black/20 hover:bg-black/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={onNext}
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-black/50 bg-[var(--color-card)] text-xl font-bold text-[var(--color-primary)] transition hover:border-black hover:bg-[var(--color-accent)]"
        aria-label="Siguiente"
      >
        ›
      </button>
    </div>
  );
}

// ── VideoBlock: single item slide, directional animation ─────────────────────

const videoVariants = {
  enter: (d: number) => ({ x: d >= 0 ? "52%" : "-52%", opacity: 0, scale: 0.97 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (d: number) => ({ x: d >= 0 ? "-52%" : "52%", opacity: 0, scale: 0.97 }),
};

function VideoBlock({
  items,
  portrait,
  autoMs,
  className,
}: {
  items: MediaItem[];
  portrait: boolean;
  autoMs: number;
  className?: string;
}) {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || items.length <= 1) return;
    const t = setInterval(() => {
      setDir(1);
      setIdx((i) => (i + 1) % items.length);
    }, autoMs);
    return () => clearInterval(t);
  }, [paused, items.length, autoMs]);

  const navigate = (d: 1 | -1) => {
    setDir(d);
    setIdx((i) => (i + d + items.length) % items.length);
  };

  const current = items[idx];
  const mobileAspect = portrait ? "aspect-[9/16]" : "aspect-video";

  return (
    <article
      className={`flex flex-col rounded-3xl border-4 border-black bg-[var(--color-card)] p-3 transition duration-300 hover:shadow-[0_14px_32px_rgba(0,0,0,0.12)] ${className ?? ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={`relative w-full overflow-hidden rounded-2xl bg-black ${mobileAspect} lg:aspect-auto lg:min-h-0 lg:flex-1`}
      >
        <AnimatePresence custom={dir} initial={false}>
          <motion.div
            key={idx}
            custom={dir}
            variants={videoVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.42, ease: [0.33, 1, 0.68, 1] }}
            className="absolute inset-0"
          >
            {current?.kind === "video" && current?.url ? (
              <LazyYouTube
                url={current.url}
                title={current.title}
                portrait={portrait}
                fillHeight
                autoplayMuted
              />
            ) : current?.url ? (
              <Image
                src={current.url}
                fill
                className="object-cover"
                alt={current.title}
                unoptimized
                sizes="(max-width:1024px) 90vw, 55vw"
              />
            ) : (
              <div className="h-full w-full bg-neutral-200" />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-2.5 shrink-0">
        <h3 className="text-sm font-semibold text-[var(--color-primary)] md:text-base">
          {current?.title ?? "—"}
        </h3>
        {current?.description ? (
          <p className="mt-0.5 text-xs leading-snug text-[var(--color-text)] md:text-sm">
            {current.description}
          </p>
        ) : null}
      </div>

      <div className="mt-2.5 shrink-0">
        <SliderControls
          total={items.length}
          index={idx}
          onPrev={() => navigate(-1)}
          onNext={() => navigate(1)}
          onDot={(i) => {
            setDir(i > idx ? 1 : -1);
            setIdx(i);
          }}
        />
      </div>
    </article>
  );
}

// ── ThumbsBlock: 3 visibles al mismo tiempo, desplaza 1 ──────────────────────

const VISIBLE = 3;
const THUMB_GAP = 8;

function ThumbsBlock({
  items,
  autoMs,
  className,
}: {
  items: MediaItem[];
  autoMs: number;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [stepPx, setStepPx] = useState(0);
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);
  const maxOffset = Math.max(0, items.length - VISIBLE);

  /* Calcula el ancho de cada item en función del contenedor */
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const calc = () => {
      const W = el.offsetWidth;
      /* itemWidth = (W - gaps) / VISIBLE;  step = itemWidth + gap */
      setStepPx((W - THUMB_GAP * (VISIBLE - 1)) / VISIBLE + THUMB_GAP);
    };
    calc();
    const ro = new ResizeObserver(calc);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (paused || maxOffset === 0) return;
    const t = setInterval(
      () => setOffset((o) => (o >= maxOffset ? 0 : o + 1)),
      autoMs,
    );
    return () => clearInterval(t);
  }, [paused, maxOffset, autoMs]);

  const navigate = (d: 1 | -1) =>
    setOffset((o) =>
      d === 1 ? (o >= maxOffset ? 0 : o + 1) : Math.max(0, o - 1),
    );

  const itemWidth = stepPx > 0 ? stepPx - THUMB_GAP : 0;
  const current = items[offset];
  const dotsCount = maxOffset + 1;

  return (
    <article
      className={`flex flex-col rounded-3xl border-4 border-black bg-[var(--color-card)] p-3 transition duration-300 hover:shadow-[0_14px_32px_rgba(0,0,0,0.12)] ${className ?? ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Track: overflow hidden, translate continuo */}
      <div
        ref={wrapRef}
        className="relative w-full overflow-hidden rounded-2xl bg-black aspect-[4/3] lg:aspect-auto lg:min-h-0 lg:flex-1"
      >
        <motion.div
          className="absolute inset-y-0 left-0 flex"
          style={{ gap: THUMB_GAP }}
          animate={{ x: -offset * stepPx }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="relative h-full flex-shrink-0 overflow-hidden rounded-xl bg-neutral-200"
              style={{
                width:
                  itemWidth > 0
                    ? `${itemWidth}px`
                    : `calc((100% - ${THUMB_GAP * (VISIBLE - 1)}px) / ${VISIBLE})`,
              }}
            >
              {item.url ? (
                <Image
                  src={item.url}
                  fill
                  className="object-cover"
                  alt={item.title}
                  unoptimized
                  sizes="(max-width:1024px) 30vw, 18vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-300 p-2">
                  <span className="text-center text-[10px] font-semibold leading-snug text-neutral-500">
                    {item.title}
                  </span>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-2.5 shrink-0">
        <h3 className="text-sm font-semibold text-[var(--color-primary)] md:text-base">
          {current?.title ?? "—"}
        </h3>
        {current?.description ? (
          <p className="mt-0.5 text-xs leading-snug text-[var(--color-text)] md:text-sm">
            {current.description}
          </p>
        ) : null}
      </div>

      <div className="mt-2.5 shrink-0">
        <SliderControls
          total={dotsCount}
          index={offset}
          onPrev={() => navigate(-1)}
          onNext={() => navigate(1)}
          onDot={(i) => setOffset(i)}
        />
      </div>
    </article>
  );
}

// ── WorkSliders ───────────────────────────────────────────────────────────────

type WorkSlidersProps = {
  verticalItems: MediaItem[];
  horizontalItems: MediaItem[];
  thumbnailItems: MediaItem[];
};

export function WorkSliders({
  verticalItems,
  horizontalItems,
  thumbnailItems,
}: WorkSlidersProps) {
  const vItems =
    verticalItems.length > 0
      ? verticalItems
      : [
          { id: "fv1", title: "Short Engagement - Tutorial", description: "Vertical con foco en hook y retencion inicial.", url: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", kind: "video" as const },
          { id: "fv2", title: "Short Viral - Productividad", description: "Ejemplo vertical para TikTok/Reels con ritmo rapido.", url: "https://www.youtube-nocookie.com/embed/ysz5S6PUM-U", kind: "video" as const },
        ];

  const hItems =
    horizontalItems.length > 0
      ? horizontalItems
      : [
          { id: "fh1", title: "YouTube Long Form - Tutorial", description: "Caso horizontal para YouTube de formato largo.", url: "https://www.youtube-nocookie.com/embed/ysz5S6PUM-U", kind: "video" as const },
          { id: "fh2", title: "YouTube Serie - Episodio", description: "Formato horizontal para contenido largo con narrativa.", url: "https://www.youtube-nocookie.com/embed/jNQXAC9IVRw", kind: "video" as const },
        ];

  const tItems =
    thumbnailItems.length > 0
      ? thumbnailItems
      : [
          { id: "ft1", title: "Hook visual impacto", description: "CTR alto para feed.", url: undefined, kind: "thumb" as const },
          { id: "ft2", title: "Rostro + accion", description: "Composicion movil.", url: undefined, kind: "thumb" as const },
          { id: "ft3", title: "Promesa + curiosidad", description: "Sin clickbait.", url: undefined, kind: "thumb" as const },
          { id: "ft4", title: "Marca consistente", description: "Sistema visual.", url: undefined, kind: "thumb" as const },
          { id: "ft5", title: "Contraste alto", description: "Maxima visibilidad.", url: undefined, kind: "thumb" as const },
          { id: "ft6", title: "Emotion-first", description: "Conecta antes del clic.", url: undefined, kind: "thumb" as const },
        ];

  return (
    <div className="grid grid-cols-1 gap-5 lg:h-[640px] lg:grid-cols-[3fr_8fr] lg:grid-rows-[1fr_1fr]">
      <VideoBlock portrait items={vItems} autoMs={5000} className="lg:row-span-2 lg:h-full" />
      <VideoBlock portrait={false} items={hItems} autoMs={5500} className="lg:h-full" />
      <ThumbsBlock items={tItems} autoMs={3000} className="lg:h-full" />
    </div>
  );
}
