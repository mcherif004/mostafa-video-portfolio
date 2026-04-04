"use client";

import Image from "next/image";
import { LazyYouTube } from "@/components/lazy-youtube";
import { useAutoplaySlider } from "@/hooks/use-autoplay-slider";

type MediaItem = {
  id: string;
  title: string;
  description?: string | null;
  url?: string;
  kind: "video" | "thumb";
};

type WorkSlidersProps = {
  verticalItems: MediaItem[];
  horizontalItems: MediaItem[];
  thumbnailItems: MediaItem[];
};

export function WorkSliders({ verticalItems, horizontalItems, thumbnailItems }: WorkSlidersProps) {
  const fallbackVertical: MediaItem = {
    id: "fallback-vertical",
    title: "Hero vertical",
    description: "Ejemplo vertical optimizado para retencion.",
    url: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    kind: "video",
  };

  const fallbackHorizontalA: MediaItem = {
    id: "fallback-horizontal-a",
    title: "Video horizontal 1",
    description: "Narrativa horizontal orientada a conversion.",
    url: "https://www.youtube-nocookie.com/embed/ysz5S6PUM-U",
    kind: "video",
  };

  const fallbackHorizontalB: MediaItem = {
    id: "fallback-horizontal-b",
    title: "Video horizontal 2",
    description: "Segundo ejemplo para mostrar resultados.",
    url: "https://www.youtube-nocookie.com/embed/jNQXAC9IVRw",
    kind: "video",
  };

  const heroVertical = verticalItems[0] || fallbackVertical;
  const mainHorizontal = horizontalItems[0] || verticalItems[1] || fallbackHorizontalA;
  const backupHorizontal = horizontalItems[1] || verticalItems[2] || fallbackHorizontalB;
  const thumbsPool = thumbnailItems.length > 0 ? thumbnailItems : [mainHorizontal, backupHorizontal];
  const { index, setIndex, setPaused } = useAutoplaySlider(thumbsPool.length, 3200);
  const currentThumb = thumbsPool[index];

  return (
    <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-[1fr_2fr] lg:grid-rows-2">
      <article className="rounded-3xl border-4 border-black bg-[var(--color-card)] p-3 transition duration-300 hover:scale-[1.01] hover:shadow-[0_12px_28px_rgba(0,0,0,0.14)] lg:row-span-2">
        <div className="mx-auto max-w-[300px]">
          <LazyYouTube url={heroVertical.url || ""} title={heroVertical.title} portrait autoplayMuted />
        </div>
        <div className="pt-3">
          <h3 className="text-base font-semibold text-[var(--color-primary)] md:text-lg">{heroVertical.title}</h3>
          {heroVertical.description ? <p className="mt-1 text-sm text-[var(--color-text)]">{heroVertical.description}</p> : null}
        </div>
      </article>

      <article
        className="rounded-3xl border-4 border-black bg-[var(--color-card)] p-3 transition duration-300 hover:scale-[1.01] hover:shadow-[0_12px_28px_rgba(0,0,0,0.14)]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-100">
          {currentThumb?.url ? (
            <Image
              src={currentThumb.url}
              alt={currentThumb.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 66vw"
              unoptimized
            />
          ) : (
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#e5e7eb,#d4d4d8)]" />
          )}
        </div>
        <div className="pt-3">
          <h3 className="text-base font-semibold text-[var(--color-primary)] md:text-lg">
            {currentThumb?.title || "Miniaturas automaticas"}
          </h3>
          <p className="mt-1 text-sm text-[var(--color-text)]">
            {currentThumb?.description || "Slider automatico para comparar hooks visuales."}
          </p>
        </div>
        <div className="mt-3 flex items-center justify-center gap-2">
          {thumbsPool.map((item, dotIndex) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setIndex(dotIndex)}
              className={`h-2.5 w-2.5 rounded-full transition ${dotIndex === index ? "bg-black" : "bg-black/25"}`}
              aria-label={`Ir a miniatura ${dotIndex + 1}`}
            />
          ))}
        </div>
      </article>

      <article className="rounded-3xl border-4 border-black bg-[var(--color-card)] p-3 transition duration-300 hover:scale-[1.01] hover:shadow-[0_12px_28px_rgba(0,0,0,0.14)]">
        <div className="w-full overflow-hidden rounded-xl">
          <LazyYouTube
            url={mainHorizontal.url || backupHorizontal.url || ""}
            title={mainHorizontal.title}
            autoplayMuted
          />
        </div>
        <div className="pt-3">
          <h3 className="text-base font-semibold text-[var(--color-primary)] md:text-lg">{mainHorizontal.title}</h3>
          {mainHorizontal.description ? (
            <p className="mt-1 text-sm text-[var(--color-text)]">{mainHorizontal.description}</p>
          ) : null}
        </div>
      </article>
    </div>
  );
}
