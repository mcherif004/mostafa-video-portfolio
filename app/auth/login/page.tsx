import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login Cliente | Mostafa Cherif",
  description: "Acceso privado para clientes de edicion premium.",
  robots: { index: false, follow: false },
};

export default function AuthLoginPage() {
  return (
    <main className="relative min-h-[calc(100vh-8rem)] overflow-hidden section-shell">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(0,123,255,0.22),transparent_45%),radial-gradient(circle_at_80%_100%,rgba(4,16,30,0.72),transparent_45%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-content px-4 sm:px-5 md:px-6">
        <div className="mx-auto w-full max-w-md rounded-[28px] border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] p-8 shadow-[0_28px_80px_rgba(4,10,20,0.5)] backdrop-blur-2xl md:p-10">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-base font-bold text-white">
              MC
            </div>
            <h1 className="text-2xl font-bold tracking-[-0.02em] text-white">Client Access</h1>
            <p className="mt-2 text-sm text-white/70">Panel privado estilo Apple/Stripe. Login funcional en siguiente release.</p>
          </div>

          <form className="space-y-4" noValidate aria-label="Inicio de sesion de cliente">
            <div>
              <label htmlFor="auth-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-white/70">
                Email
              </label>
              <input
                id="auth-email"
                type="email"
                autoComplete="email"
                placeholder="nombre@empresa.com"
                className="w-full rounded-xl border border-white/15 bg-black/35 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-white/35"
              />
            </div>
            <div>
              <label htmlFor="auth-password" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-white/70">
                Password
              </label>
              <input
                id="auth-password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full rounded-xl border border-white/15 bg-black/35 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-white/35"
              />
            </div>
            <button
              type="button"
              className="w-full rounded-xl bg-white py-3 text-sm font-bold text-black transition hover:translate-y-[-1px] hover:shadow-[0_14px_30px_rgba(255,255,255,0.22)]"
            >
              Continuar
            </button>
          </form>

          <div className="relative my-7">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/15" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-black/40 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">o</span>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <button type="button" className="rounded-xl border border-white/15 bg-black/35 py-3 text-sm font-semibold text-white transition hover:border-white/30">
              Continuar con Google
            </button>
            <button type="button" className="rounded-xl border border-[#5865F2]/40 bg-[#5865F2]/25 py-3 text-sm font-semibold text-white transition hover:border-[#5865F2]/70">
              Continuar con Discord
            </button>
          </div>

          <p className="mt-7 text-center text-xs text-white/60">
            <Link href="/#hero" className="font-semibold text-white underline-offset-4 hover:underline">
              Volver al inicio
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
