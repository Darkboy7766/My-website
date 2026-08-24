import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.join(__dirname, 'public/assets/cars');
const logoDir = path.join(__dirname, 'public/assets/logos');
const outputPath = path.join(__dirname, 'public/data/carBrands.json');

const processImages = async () => {
  if (!fs.existsSync(baseDir)) return;

  const brands = fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory());

  const carData = await Promise.all(brands.map(async (brand) => {
    const modelsPath = path.join(baseDir, brand);
    const models = await Promise.all(fs.readdirSync(modelsPath)
      .filter(f => fs.statSync(path.join(modelsPath, f)).isDirectory())
      .map(async (model) => {
        const imagesPath = path.join(modelsPath, model);
        const thumbPath = path.join(imagesPath, 'thumbnails');
        
        if (!fs.existsSync(thumbPath)) fs.mkdirSync(thumbPath, { recursive: true });

        // Вземаме оригиналните файлове (jpg, png и т.н.)
        const files = fs.readdirSync(imagesPath).filter(file => 
          /\.(jpg|jpeg|png)$/i.test(file) // Търсим само сурови формати
        );
        
        for (const file of files) {
          const name = path.parse(file).name;
          const inputPath = path.join(imagesPath, file);
          const fullResPath = path.join(imagesPath, `${name}_large.webp`);
          const thumbFullPath = path.join(thumbPath, `${name}_thumb.webp`);

          try {
            // 1. Генерираме голямо изображение
            await sharp(inputPath)
              .resize(1200, null, { withoutEnlargement: true })
              .webp({ quality: 80 })
              .toFile(fullResPath);

            // 2. Генерираме миниатюра
            await sharp(inputPath)
              .resize(400, 300, { fit: 'cover' })
              .webp({ quality: 70 })
              .toFile(thumbFullPath);

            // 3. ИЗТРИВАМЕ ОРИГИНАЛА
            fs.unlinkSync(inputPath); 
            console.log(`🗑️ Изтрит оригинал: ${file} (Конвертиран в WebP)`);

          } catch (err) {
            console.error(`❌ Грешка при обработка на ${file}:`, err);
          }
        }

        // Събираме информацията за JSON (само webp файловете)
        const images = fs.readdirSync(imagesPath)
          .filter(f => f.includes('_large.webp'))
          .map(f => {
            const baseName = f.replace('_large.webp', '');
            return {
              original: `/assets/cars/${brand}/${model}/${f}`,
              thumbnail: `/assets/cars/${brand}/${model}/thumbnails/${baseName}_thumb.webp`
            };
          });

        return { id: model, name: model.replace(/_/g, ' '), images };
      }));

    // Сортиране на моделите по име
    models.sort((a, b) => a.name.localeCompare(b.name));

    const foundLogo = fs.readdirSync(logoDir).find(l => l.toLowerCase().includes(brand.toLowerCase()));
    return { 
      id: brand, 
      name: brand.toUpperCase(), 
      logo: foundLogo ? `/assets/logos/${foundLogo}` : `/assets/logos/default.png`, 
      models 
    };
  }));

  // Сортиране на марките по име (A-Z)
  carData.sort((a, b) => a.name.localeCompare(b.name));

  fs.writeFileSync(outputPath, JSON.stringify(carData, null, 2));
  console.log('✨ Всичко е готово! Оригиналите са изтрити, а марките са сортирани.');
};

processImages();