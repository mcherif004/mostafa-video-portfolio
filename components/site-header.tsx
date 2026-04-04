"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const useDark = savedTheme ? savedTheme === "dark" : true;
    setDarkMode(useDark);
    document.documentElement.classList.toggle("dark", useDark);

    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  function toggleTheme() {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <header
      id="site-header"
      className={`sticky top-0 z-50 border-b border-white/10 bg-[var(--color-nav-bg)]/90 backdrop-blur-md transition-all ${
        isScrolled ? "shadow-[0_10px_28px_rgba(0,0,0,0.35)]" : "shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
      }`}
    >
      <div className="mx-auto max-w-content px-4 sm:px-5 md:px-6">
        <div className="grid min-h-14 grid-cols-[1fr_auto_auto] items-center gap-3 py-2 md:min-h-16 md:grid-cols-[auto_1fr_auto]">
          <a href="#hero" aria-label="Inicio" className="inline-flex items-center">
            <Image
              src="/assets/light.webp"
              alt="Mostafa Cherif"
              width={44}
              height={44}
              className="h-10 w-10 rounded-xl border border-white/20 object-cover md:h-11 md:w-11"
              priority
            />
          </a>

          <nav
            id="nav-menu"
            aria-label="Principal"
            className={`${menuOpen ? "flex" : "hidden"} col-span-3 mt-1 flex-col gap-1 border-t border-white/10 pt-2 md:col-span-1 md:mt-0 md:flex md:flex-row md:items-center md:justify-center md:gap-1 md:border-0 md:pt-0`}
          >
            <ul className="flex w-full flex-col gap-1 md:w-auto md:flex-row md:items-center">
              <li>
                <a
                  href="#hero"
                  className="rounded-full px-3 py-2 text-center text-sm font-medium text-[var(--color-nav-text)]/95 transition hover:bg-white/10"
                  onClick={() => setMenuOpen(false)}
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="rounded-full px-3 py-2 text-center text-sm font-medium text-[var(--color-nav-text)]/95 transition hover:bg-white/10"
                  onClick={() => setMenuOpen(false)}
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#prueba"
                  className="rounded-full px-3 py-2 text-center text-sm font-medium text-[var(--color-nav-text)]/95 transition hover:bg-white/10"
                  onClick={() => setMenuOpen(false)}
                >
                  Trabajo
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="rounded-full px-3 py-2 text-center text-sm font-medium text-[var(--color-nav-text)]/95 transition hover:bg-white/10"
                  onClick={() => setMenuOpen(false)}
                >
                  Precios
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="rounded-full border border-white/25 bg-white/15 px-4 py-2 text-center text-sm font-semibold text-[var(--color-nav-text)] transition hover:bg-[var(--color-primary)] hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="#condiciones"
                  className="rounded-full px-3 py-2 text-center text-sm font-medium text-[var(--color-nav-text)]/95 transition hover:bg-white/10"
                  onClick={() => setMenuOpen(false)}
                >
                  Condiciones
                </a>
              </li>
            </ul>
          </nav>

          <div className="justify-self-end">
            <button
              type="button"
              id="theme-toggle"
              aria-label="Cambiar tema claro u oscuro"
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[var(--color-nav-text)] transition hover:bg-white/20"
            >
              <span aria-hidden="true" className="text-lg">
                {darkMode ? "🌙" : "☀️"}
              </span>
            </button>
          </div>

          <button
            type="button"
            id="mobile-menu-toggle"
            className="flex h-10 w-10 items-center justify-center justify-self-center rounded-full text-[var(--color-nav-text)] md:hidden"
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
            aria-label={menuOpen ? "Cerrar menu de navegacion" : "Abrir menu de navegacion"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span aria-hidden="true" className="text-xl">
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
