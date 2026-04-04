import { prisma } from "@/lib/db";
import { LazyYouTube } from "@/components/lazy-youtube";
import { Reveal } from "@/components/reveal";
type Project = {
  id: string;
  title: string;
  description: string | null;
  videoUrl: string;
  thumbnailUrl: string | null;
  format: "VERTICAL" | "HORIZONTAL";
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

function WorkCard({ project, vertical }: { project: Project; vertical: boolean }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] shadow-[0_10px_24px_rgba(0,0,0,0.10)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.16)]">
      <div className={vertical ? "border-b border-[var(--color-border)] px-3 py-3" : "border-b border-[var(--color-border)]"}>
        <LazyYouTube url={getYoutubeEmbed(project.videoUrl)} title={project.title} portrait={vertical} />
      </div>
      <div className="p-4">
        <h4 className="mb-2 text-lg font-semibold text-[var(--color-primary)]">{project.title}</h4>
        <p className="text-sm leading-relaxed text-[var(--color-text)]">
          {project.description || "Proyecto de video de alto rendimiento."}
        </p>
      </div>
    </article>
  );
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

  return (
    <section id="prueba" className="py-14 md:py-20 lg:py-24" aria-labelledby="work-title">
      <div className="mx-auto max-w-content px-4 sm:px-5 md:px-6">
        <h2
          id="work-title"
          className="mb-7 text-[clamp(1.65rem,3.5vw,2.25rem)] font-bold text-[var(--color-primary)]"
        >
          Trabajo
        </h2>

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
          <>
            <h3 id="vertical-pack" className="mb-6 mt-10 text-2xl font-semibold text-[var(--color-primary)]">
              Vertical · Ejemplos
            </h3>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {verticalProjects.map((project, index) => (
                <Reveal key={project.id} delay={index * 0.05}>
                  <WorkCard project={project} vertical />
                </Reveal>
              ))}
            </div>

            <h3 id="horizontal-pack" className="mb-6 mt-10 text-2xl font-semibold text-[var(--color-primary)]">
              Horizontal · Ejemplos
            </h3>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {horizontalProjects.map((project, index) => (
                <Reveal key={project.id} delay={index * 0.05}>
                  <WorkCard project={project} vertical={false} />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export function WorkSkeleton() {
  return (
    <section id="prueba" className="py-14 md:py-20 lg:py-24" aria-labelledby="work-title">
      <div className="mx-auto max-w-content px-4 sm:px-5 md:px-6">
        <h2
          id="work-title"
          className="mb-7 text-[clamp(1.65rem,3.5vw,2.25rem)] font-bold text-[var(--color-primary)]"
        >
          Trabajo
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-4">
          Cargando proyectos...
        </div>
      </div>
    </section>
  );
}
