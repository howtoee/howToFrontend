import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const folders = [
  'src/assets/Images',
  'src/assets/ServicesImages',
  'src/assets/Cilents',
];

const extensions = ['.png', '.jpg', '.jpeg'];

async function convertToWebP(filePath) {
  const dir = path.dirname(filePath);
  const ext = path.extname(filePath).toLowerCase();
  const base = path.basename(filePath, ext);
  const outPath = path.join(dir, base + '.webp');

  if (fs.existsSync(outPath)) {
    const existingStat = fs.statSync(outPath);
    const srcStat = fs.statSync(filePath);
    if (existingStat.mtime > srcStat.mtime) {
      console.log(`  ✓ Already converted: ${base}.webp`);
      return { skipped: true, saved: 0 };
    }
  }

  try {
    const srcSize = fs.statSync(filePath).size;
    await sharp(filePath)
      .webp({ quality: 82, effort: 4 })
      .toFile(outPath);
    const outSize = fs.statSync(outPath).size;
    const saved = srcSize - outSize;
    const pct = ((saved / srcSize) * 100).toFixed(1);
    console.log(`  ✅ ${base}${ext} → ${base}.webp  (${(srcSize/1024/1024).toFixed(1)}MB → ${(outSize/1024/1024).toFixed(1)}MB, −${pct}%)`);
    return { skipped: false, saved };
  } catch (err) {
    console.error(`  ❌ Failed: ${filePath} — ${err.message}`);
    return { skipped: false, saved: 0 };
  }
}

async function main() {
  let totalSaved = 0;
  for (const folder of folders) {
    const absFolder = path.join(__dirname, folder);
    if (!fs.existsSync(absFolder)) continue;
    const files = fs.readdirSync(absFolder);
    console.log(`\n📁 ${folder}`);
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (!extensions.includes(ext)) continue;
      const full = path.join(absFolder, file);
      const res = await convertToWebP(full);
      totalSaved += res.saved;
    }
  }

  // Also convert logo.png
  const logoPath = path.join(__dirname, 'src/assets/logo.png');
  if (fs.existsSync(logoPath)) {
    console.log('\n📁 src/assets');
    const res = await convertToWebP(logoPath);
    totalSaved += res.saved;
  }

  console.log(`\n🎉 Done! Total saved: ${(totalSaved / 1024 / 1024).toFixed(1)} MB`);
}

main();
