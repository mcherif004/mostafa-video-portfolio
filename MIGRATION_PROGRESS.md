# Progreso de Migracion: `Portfolio_v2` -> `portfolio-video`

## Checklist

- [x] Crear plan de migracion y tracker inicial
- [x] Sincronizar assets de `Portfolio_v2/img` a `public/assets`
- [x] Migrar Header + Hero a Tailwind y actualizar referencias de imagen
- [ ] Migrar secciones Home (`Services`, `Work`, `Pricing`, `Contact`, `Clients`, `Conditions`, `Footer`) a Tailwind
- [ ] Reducir `app/globals.css` a estilos globales minimos no redundantes
- [ ] Corregir desalineacion de variable Supabase en middleware
- [ ] Verificar persistencia de contacto con `Lead` (Prisma)
- [ ] Ejecutar `npm run build` sin errores de TypeScript

## Notas

- Objetivo de calidad: Home funcional y visualmente superior a la version HTML estatica.
- Regla de trabajo: commit por bloque funcional terminado.
