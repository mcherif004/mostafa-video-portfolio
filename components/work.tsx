import { prisma } from "@/lib/db";
import { WorkSliders } from "@/components/work-sliders";
type Project = {
  id: string;
  title: string;
  description: string | null;
  videoUrl: string;
  thumbnailUrl: string | null;
  format: "VERTICAL" | "HORIZONTAL";
};

type SliderMediaItem = {
  id: string;
  title: string;
  description?: string | null;
  url?: string;
  kind: "video" | "thumb";
};

function getYoutubeEmbed(url: string) {
  const shorts = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{6,})/)?.[1];
  if (shorts) return `https://www.youtube-nocookie.com/embed/${shorts}?autoplay=0&rel=0`;
  const watch = url.match(/[?&]v=([a-zA-Z0-9_-]{6,})/)?.[1];
  if (watch) return `https://www.youtube-nocookie.com/embed/${watch}?autoplay=0&rel=0`;
  const shortUrl = url.match(/youtu\.be\/([a-zA-Z0-9_-]{6,})/)?.[1];
  if (shortUrl) return `https://www.youtube-nocookie.com/embed/${shortUrl}?autoplay=0&rel=0`;
  return url;
}

export async function Work() {
  let projects: Project[] = [];
  let dbError = false;

  try {
    projects = await prisma.project.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        videoUrl: true,
        thumbnailUrl: true,
        format: true,
      },
      orderBy: { createdAt: "desc" },
      take: 24,
    });
  } catch {
    dbError = true;
  }

  const verticalProjects = projects.filter((p) => p.format === "VERTICAL");
  const horizontalProjects = projects.filter((p) => p.format === "HORIZONTAL");
  const verticalItems: SliderMediaItem[] = verticalProjects.map((project) => ({
    id: project.id,
    title: project.title,
    description: project.description,
    url: getYoutubeEmbed(project.videoUrl),
    kind: "video",
  }));
  const horizontalItems: SliderMediaItem[] = horizontalProjects.map((project) => ({
    id: project.id,
    title: project.title,
    description: project.description,
    url: getYoutubeEmbed(project.videoUrl),
    kind: "video",
  }));
  const thumbnailItems: SliderMediaItem[] = projects
    .filter((project) => Boolean(project.thumbnailUrl))
    .map((project) => ({
      id: `thumb-${project.id}`,
      title: project.title,
      description: project.description,
      url: project.thumbnailUrl || undefined,
      kind: "thumb" as const,
    }))
    .slice(0, 8);

  return (
    <section id="prueba" className="section-shell" aria-labelledby="work-title">
      <div className="mx-auto max-w-content px-4 sm:px-5 md:px-6">
        <p className="section-kicker">Resultados</p>
        <h2
          id="work-title"
          className="section-title-premium mb-3 text-[clamp(1.35rem,2.75vw,2rem)] font-bold"
        >
          Prueba social, no promesas vacías
        </h2>
        <p className="mb-7 max-w-3xl text-sm font-medium leading-relaxed text-[var(--color-text)] md:text-base">
          Esto es montaje con criterio: ritmo, claridad y picos donde el algoritmo espera retención. Compara con tu
          último upload y mira dónde se va la gente.
        </p>

        {dbError && (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-amber-900/60 dark:bg-amber-950/30 dark:text-amber-200">
            No se pudo conectar con la base de datos todavia.
          </div>
        )}

        {!dbError && projects.length === 0 && (
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-4">
            Aun no hay proyectos publicados.
          </div>
        )}

        {!dbError && projects.length > 0 && (
          <WorkSliders
            verticalItems={verticalItems}
            horizontalItems={horizontalItems}
            thumbnailItems={thumbnailItems}
          />
        )}
      </div>
    </section>
  );
}

export function WorkSkeleton() {
  return (
    <section id="prueba" className="section-shell" aria-labelledby="work-title">
      <div className="mx-auto max-w-content px-4 sm:px-5 md:px-6">
        <h2
          id="work-title"
          className="mb-7 text-[clamp(1.35rem,2.75vw,2rem)] font-bold text-[var(--color-primary)]"
        >
          Prueba social
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-4">
          Cargando proyectos...
        </div>
      </div>
    </section>
  );
}
