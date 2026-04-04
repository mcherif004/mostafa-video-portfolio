# Manual de Entrega y Despliegue

## 1) Requisitos previos

- Proyecto de Supabase creado (base de datos PostgreSQL activa).
- Repositorio conectado a Vercel.
- Variables de entorno listas para entorno `Production`.

## 2) Variables de entorno en Vercel

Configura estas variables en Vercel (Project Settings -> Environment Variables):

- `DATABASE_URL`
- `DIRECT_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_SITE_URL` (ejemplo: `https://tu-dominio.com`)

Notas:
- `DATABASE_URL` debe usar la cadena recomendada por Supabase para runtime.
- `DIRECT_URL` debe usar la conexion directa para operaciones de Prisma.

## 3) Base de datos (Prisma)

Antes de usar la web en produccion:

1. Ejecuta `npm run db:push` para aplicar el schema.
2. (Opcional) Ejecuta `npm run seed` para cargar datos iniciales.
3. Verifica en `npm run db:studio` que existen las tablas `Project`, `Service`, `PricingPlan` y `Lead`.

## 4) Deploy en Vercel

1. Sube cambios al repositorio.
2. Vercel lanzara build automatico.
3. Confirma que el build termina en verde.
4. Abre la URL de produccion y prueba:
   - Home y navegacion por secciones.
   - Formulario de contacto (debe crear un `Lead`).

## 5) Subir PDF de CV (opcional)

Si quieres mostrar un CV descargable:

1. Copia tu archivo a `public/assets/cv.pdf`.
2. Agrega un enlace en el componente deseado, por ejemplo:
   - `href="/assets/cv.pdf"` con `target="_blank"` y `rel="noopener noreferrer"`.
3. Despliega de nuevo para publicarlo.

## 6) Checklist rapido de produccion

- Variables de entorno completas.
- `npm run build` local sin errores.
- Formulario crea `Lead` en DB.
- Metadata correcta para compartir (OG/Twitter/icon).
- Accesibilidad por teclado y focus visible verificadas.
