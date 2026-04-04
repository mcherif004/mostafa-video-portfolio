import { readdir, stat, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsDir = path.resolve(__dirname, "../public/assets");
const LARGE_FILE_BYTES = 500 * 1024;

const rasterExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const convertibleExtensions = new Set([".jpg", ".jpeg", ".png"]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
      continue;
    }
    if (entry.isFile()) {
      files.push(fullPath);
    }
  }
  return files;
}

function formatKB(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

async function hasSharp() {
  try {
    const sharpModule = await import("sharp");
    return sharpModule.default ?? sharpModule;
  } catch {
    return null;
  }
}

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  console.log(`\n[optimize-images] Escaneando assets en: ${assetsDir}`);

  const allFiles = await walk(assetsDir);
  const imageFiles = [];

  for (const file of allFiles) {
    const ext = path.extname(file).toLowerCase();
    if (!rasterExtensions.has(ext)) continue;
    const meta = await stat(file);
    imageFiles.push({ file, ext, size: meta.size });
  }

  if (imageFiles.length === 0) {
    console.log("[optimize-images] No se encontraron imagenes raster en /public/assets.");
    return;
  }

  const heavy = imageFiles
    .filter((item) => item.size > LARGE_FILE_BYTES)
    .sort((a, b) => b.size - a.size);

  console.log(`\n[reporte] Imagenes encontradas: ${imageFiles.length}`);
  if (heavy.length === 0) {
    console.log("[reporte] No hay imagenes > 500KB.");
  } else {
    console.log(`[reporte] Imagenes > 500KB: ${heavy.length}`);
    for (const item of heavy) {
      console.log(`  - ${path.relative(assetsDir, item.file)} (${formatKB(item.size)})`);
    }
  }

  const sharp = await hasSharp();
  if (!sharp) {
    console.log(
      "\n[optimizacion] 'sharp' no esta disponible. Se deja solo el reporte.\n" +
        "Instala con: npm i -D sharp"
    );
    return;
  }

  const candidates = imageFiles.filter((item) => convertibleExtensions.has(item.ext));
  let converted = 0;
  let skipped = 0;

  console.log(`\n[optimizacion] Convirtiendo ${candidates.length} imagen(es) a WebP (q=80)...`);

  for (const item of candidates) {
    const target = item.file.replace(/\.(jpe?g|png)$/i, ".webp");

    if (await fileExists(target)) {
      skipped += 1;
      continue;
    }

    await sharp(item.file).webp({ quality: 80 }).toFile(target);
    converted += 1;
    console.log(`  + ${path.relative(assetsDir, target)}`);
  }

  console.log(`\n[optimizacion] Conversion finalizada. Convertidas: ${converted}, omitidas: ${skipped}.`);
}

main().catch((error) => {
  console.error("[optimize-images] Error:", error);
  process.exit(1);
});
