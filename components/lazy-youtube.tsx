"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

function extractVideoId(url: string) {
  const shorts = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{6,})/)?.[1];
  if (shorts) return shorts;
  const watch = url.match(/[?&]v=([a-zA-Z0-9_-]{6,})/)?.[1];
  if (watch) return watch;
  return url.match(/youtu\.be\/([a-zA-Z0-9_-]{6,})/)?.[1] ?? null;
}

export type LazyYouTubeProps = {
  url: string;
  title: string;
  /** Render as 9:16 portrait */
  portrait?: boolean;
  /** Load iframe immediately with autoplay + muted */
  autoplayMuted?: boolean;
  /** Fill parent height/width (no intrinsic aspect-ratio) */
  fillHeight?: boolean;
};

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

export function LazyYouTube({
  url,
  title,
  portrait = false,
  autoplayMuted = false,
  fillHeight = false,
}: LazyYouTubeProps) {
  const [loaded, setLoaded] = useState(autoplayMuted);
  const videoId = useMemo(() => extractVideoId(url), [url]);

  const shell = fillHeight
    ? "relative h-full w-full overflow-hidden rounded-xl bg-black"
    : portrait
      ? "relative mx-auto aspect-[9/16] w-full max-w-[280px] max-h-[450px] overflow-hidden rounded-2xl bg-black shadow-[0_16px_48px_rgba(0,0,0,0.22)] ring-1 ring-black/15"
      : "relative aspect-video overflow-hidden rounded-2xl bg-black shadow-[0_12px_40px_rgba(0,0,0,0.18)] ring-1 ring-black/10";

  const iframeSrc = videoId
    ? autoplayMuted
      ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${videoId}&rel=0`
      : `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`
    : autoplayMuted
      ? `${url}${url.includes("?") ? "&" : "?"}autoplay=1&mute=1&playsinline=1`
      : url;

  const thumbnailUrl = videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : null;

  if (!videoId || loaded) {
    return (
      <div className={shell}>
        <iframe
          src={iframeSrc}
          title={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div
      className={`group ${shell} cursor-pointer`}
      onClick={() => setLoaded(true)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setLoaded(true);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Reproducir: ${title}`}
    >
      {thumbnailUrl && (
        <Image
          src={thumbnailUrl}
          alt={`Miniatura de ${title}`}
          fill
          sizes={portrait ? "280px" : "(max-width: 768px) 95vw, 720px"}
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
          unoptimized
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-md transition group-hover:border-white/60 group-hover:bg-white/20">
          <PlayIcon />
        </span>
      </div>
    </div>
  );
}
