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

## Notas

- Objetivo de calidad: Home funcional y visualmente superior a la version HTML estatica.
- Regla de trabajo: commit por bloque funcional terminado.
