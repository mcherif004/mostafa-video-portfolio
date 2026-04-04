# Progreso de Migracion: `Portfolio_v2` -> `portfolio-video`

## Checklist

- [x] Crear plan de migracion y tracker inicial
- [x] Sincronizar assets de `Portfolio_v2/img` a `public/assets`
- [x] Migrar Header + Hero a Tailwind y actualizar referencias de imagen
- [x] Migrar secciones Home (`Services`, `Work`, `Pricing`, `Contact`, `Clients`, `Conditions`, `Footer`) a Tailwind
- [x] Reducir `app/globals.css` a estilos globales minimos no redundantes
- [x] Corregir desalineacion de variable Supabase en middleware
- [x] Verificar persistencia de contacto con `Lead` (Prisma)
- [x] Ejecutar `npm run build` sin errores de TypeScript
- [x] Ajustar breakpoints y escalado tipografico en Hero, Services y Work
- [x] Centralizar colores de marca originales en variables CSS y Tailwind config
- [x] Pulir micro-interacciones con Framer Motion (entradas y hover)
- [x] Completar SEO metadata (title, description, OG, Twitter, icon)
- [x] Ejecutar prueba E2E de contacto con insercion real en `Lead`
- [x] Mejorar accesibilidad AA (focus-visible, aria-labels, orden de tab)
- [x] Optimizar imagenes para reducir CLS/LCP en Hero y embeds
- [x] Ejecutar auditoria final de build y revisar peso de bundle
- [x] Limpiar artefactos de prueba y ruido local
- [x] Preparar guia de despliegue (`README_DEPLOY.md`)

## Notas

- Objetivo de calidad: Home funcional y visualmente superior a la version HTML estatica.
- Regla de trabajo: commit por bloque funcional terminado.
- Prueba E2E ejecutada con `scripts/e2e-lead-test.ts` (luego eliminado para evitar ruido):
  - `action_status success`
  - `lead_created true`
  - limpieza de prueba: `lead_cleanup deleted`

## Estado

- **Production Ready**: si configuras las variables de entorno en Vercel, el proyecto esta listo para despliegue.
