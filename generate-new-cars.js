/* eslint-disable no-unused-vars */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.join(__dirname, 'src/assets/cars');
const logoDir = path.join(__dirname, 'src/assets/logos');
const outputPath = path.join(__dirname, 'src/data/carBrands.js');

// МОДИФИЦИРАНО: Вече не трием нищо автоматично
const cleanOldFiles = (dir) => {
  // Можеш да оставиш тази функция празна или да я премахнеш, 
  // ако не искаш изобщо да триеш стари файлове.
  console.log('ℹ️ Проверка за нови изображения...');
};

const processImages = async () => {
  if (!fs.existsSync(baseDir)) return;

  const availableLogos = fs.existsSync(logoDir) ? fs.readdirSync(logoDir) : [];
  const brands = fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory());

  const carData = await Promise.all(brands.map(async (brand) => {
    const modelsPath = path.join(baseDir, brand);
    
    const foundLogo = availableLogos.find(logoFile => 
      logoFile.toLowerCase().includes(brand.toLowerCase())
    );

    const logoPath = foundLogo 
      ? `/src/assets/logos/${foundLogo}` 
      : `/src/assets/logos/default.png`;

    const models = await Promise.all(fs.readdirSync(modelsPath)
      .filter(f => fs.statSync(path.join(modelsPath, f)).isDirectory())
      .map(async (model) => {
        const imagesPath = path.join(modelsPath, model);
        const thumbPath = path.join(imagesPath, 'thumbnails');
        
        if (!fs.existsSync(thumbPath)) fs.mkdirSync(thumbPath, { recursive: true });

        // Вземаме само оригиналните файлове (без вече генерираните .webp)
        const files = fs.readdirSync(imagesPath).filter(file => 
          /\.(jpg|jpeg|png|webp)$/i.test(file) && 
          !file.includes('_large.webp') && 
          !file.includes('_thumb.webp')
        );
        
        const imageData = await Promise.all(files.map(async (file) => {
          const name = path.parse(file).name;
          const fullResName = `${name}_large.webp`;
          const thumbName = `${name}_thumb.webp`;

          const fullResPath = path.join(imagesPath, fullResName);
          const thumbFullPath = path.join(thumbPath, thumbName);

          // ПРОВЕРКА: Ако файловете вече съществуват, не ги генерираме отново
          if (!fs.existsSync(fullResPath)) {
            await sharp(path.join(imagesPath, file))
              .resize(1200, null, { withoutEnlargement: true })
              .webp({ quality: 80 })
              .toFile(fullResPath);
            console.log(`📸 Генерирано голямо изображение: ${fullResName}`);
          }

          if (!fs.existsSync(thumbFullPath)) {
            await sharp(path.join(imagesPath, file))
              .resize(400, 300, { fit: 'cover' })
              .webp({ quality: 70 })
              .toFile(thumbFullPath);
            console.log(`🖼️ Генерирана миниатюра: ${thumbName}`);
          }

          return {
            original: `/src/assets/cars/${brand}/${model}/${fullResName}`,
            thumbnail: `/src/assets/cars/${brand}/${model}/thumbnails/${thumbName}`
          };
        }));

        // Трябва да добавим и вече съществуващите .webp файлове към списъка imageData,
        // за да не изчезнат от carBrands.js при повторно пускане
        const existingWebp = fs.readdirSync(imagesPath)
          .filter(f => f.includes('_large.webp'))
          .map(f => {
            const baseName = f.replace('_large.webp', '');
            return {
              original: `/src/assets/cars/${brand}/${model}/${f}`,
              thumbnail: `/src/assets/cars/${brand}/${model}/thumbnails/${baseName}_thumb.webp`
            };
          });

        return { 
          id: model,
          name: model.replace(/_/g, ' '),
          images: existingWebp // Връщаме всички (стари + новогенерирани)
        };
      }));

    return { 
      id: brand,
      name: brand.toUpperCase(), 
      logo: logoPath,
      models 
    };
  }));

  let jsonString = JSON.stringify(carData, null, 2);
  const cleanString = jsonString.replace(/"([^"]+)":/g, '$1:');

  fs.writeFileSync(outputPath, `export const carBrands = ${cleanString};`);
  console.log('✨ carBrands.js е обновен без изтриване на съществуващи изображения!');
};

processImages();