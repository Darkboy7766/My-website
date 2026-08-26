// Post-build стъпка: inline-ва критичния (above-the-fold) CSS за всяка
// страница и прави останалата част от стиловете (вкл. Footer.*.css)
// неблокираща, за да не спира рендера — без FOUC, защото критичните
// стилове са вече вградени в HTML-а.
import Beasties from 'beasties';
import { readdir, readFile, writeFile, stat } from 'fs/promises';
import path from 'path';

const distDir = path.resolve(process.cwd(), 'dist');

async function findHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const res = path.resolve(dir, entry.name);
      if (entry.isDirectory()) return findHtmlFiles(res);
      return entry.name.endsWith('.html') ? [res] : [];
    })
  );
  return files.flat();
}

const beasties = new Beasties({
  path: distDir,
  preload: 'swap',
  pruneSource: false,
  compress: true,
  logLevel: 'warn',
});

const htmlFiles = await findHtmlFiles(distDir);
let processed = 0;

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf-8');
  const result = await beasties.process(html);
  await writeFile(file, result);
  processed++;
}

console.log(`inline-critical-css: обработени ${processed} HTML файла в dist/`);
