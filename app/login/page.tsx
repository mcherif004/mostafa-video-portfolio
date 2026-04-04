import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Acceso | Mostafa Cherif",
  description: "Inicia sesión en el área de clientes (próximamente).",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <main className="relative min-h-[calc(100vh-8rem)] overflow-hidden py-16 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,123,255,0.25),transparent),radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(255,77,77,0.12),transparent),radial-gradient(ellipse_50%_50%_at_0%_80%,rgba(0,86,179,0.15),transparent)]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 backdrop-blur-[2px]" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex max-w-content justify-center px-4 sm:px-5 md:px-6">
        <div className="w-full max-w-md rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl dark:bg-black/40 md:p-10">
          <div className="mb-8 flex flex-col items-center text-center">
            <Image
              src="/assets/light.webp"
              alt="Mostafa Cherif"
              width={56}
              height={56}
              className="mb-4 h-14 w-14 rounded-2xl border border-white/15 object-cover shadow-lg"
              priority
            />
            <h1 className="text-2xl font-bold tracking-tight text-[var(--color-primary)]">Área de clientes</h1>
            <p className="mt-2 text-sm font-medium text-[var(--color-text)]/85">
              Acceso reservado · La autenticación se activará en la siguiente iteración.
            </p>
          </div>

          <form className="space-y-4" noValidate aria-label="Inicio de sesión (interfaz únicamente)">
            <div>
              <label htmlFor="login-email" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-[var(--color-text)]/80">
                Email
              </label>
              <input
                id="login-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="nombre@estudio.com"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text)]/35 outline-none ring-0 transition focus:border-[var(--color-primary)]/60 focus:bg-white/[0.07]"
              />
            </div>
            <div>
              <label htmlFor="login-password" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-[var(--color-text)]/80">
                Contraseña
              </label>
              <input
                id="login-password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text)]/35 outline-none transition focus:border-[var(--color-primary)]/60 focus:bg-white/[0.07]"
              />
            </div>
            <button
              type="button"
              className="mt-2 w-full rounded-xl bg-[var(--color-primary)] py-3 text-sm font-bold text-white shadow-[0_12px_32px_rgba(0,123,255,0.25)] transition hover:brightness-110 dark:shadow-[0_12px_32px_rgba(255,77,77,0.2)]"
            >
              Continuar
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text)]/50">
              <span className="bg-[var(--color-card)]/80 px-3 backdrop-blur-sm dark:bg-zinc-950/80">O continúa con</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] py-3 text-sm font-semibold text-[var(--color-text)] transition hover:border-white/20 hover:bg-white/[0.08]"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#5865F2]/20 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:border-[#5865F2]/50 hover:bg-[#5865F2]/30"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              Discord
            </button>
          </div>

          <p className="mt-8 text-center text-xs text-[var(--color-text)]/55">
            <Link href="/#hero" className="font-semibold text-[var(--color-primary)] underline-offset-4 hover:underline">
              Volver al sitio
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
