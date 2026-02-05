import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// НОВИТЕ ПЪТИЩА (всичко е в public)
const baseDir = path.join(__dirname, 'public/assets/cars');
const logoDir = path.join(__dirname, 'public/assets/logos');
const outputPath = path.join(__dirname, 'public/data/carBrands.json');

const processImages = async () => {
  if (!fs.existsSync(baseDir)) {
    console.error(`❌ Директорията ${baseDir} не съществува!`);
    return;
  }

  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  const availableLogos = fs.existsSync(logoDir) ? fs.readdirSync(logoDir) : [];
  const brands = fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory());

  const carData = await Promise.all(brands.map(async (brand) => {
    const modelsPath = path.join(baseDir, brand);
    
    const foundLogo = availableLogos.find(logoFile => 
      logoFile.toLowerCase().includes(brand.toLowerCase())
    );

    // Пътят към логото вече сочи към /assets/logos/
    const logoPath = foundLogo ? `/assets/logos/${foundLogo}` : `/assets/logos/default.png`;

    const models = await Promise.all(fs.readdirSync(modelsPath)
      .filter(f => fs.statSync(path.join(modelsPath, f)).isDirectory())
      .map(async (model) => {
        const imagesPath = path.join(modelsPath, model);
        const thumbPath = path.join(imagesPath, 'thumbnails');
        
        if (!fs.existsSync(thumbPath)) fs.mkdirSync(thumbPath, { recursive: true });

        const files = fs.readdirSync(imagesPath).filter(file => 
          /\.(jpg|jpeg|png|webp)$/i.test(file) && 
          !file.includes('_large.webp') && 
          !file.includes('_thumb.webp')
        );
        
        await Promise.all(files.map(async (file) => {
          const name = path.parse(file).name;
          const fullResPath = path.join(imagesPath, `${name}_large.webp`);
          const thumbFullPath = path.join(thumbPath, `${name}_thumb.webp`);

          if (!fs.existsSync(fullResPath)) {
            await sharp(path.join(imagesPath, file))
              .resize(1200, null, { withoutEnlargement: true })
              .webp({ quality: 80 }).toFile(fullResPath);
          }
          if (!fs.existsSync(thumbFullPath)) {
            await sharp(path.join(imagesPath, file))
              .resize(400, 300, { fit: 'cover' })
              .webp({ quality: 70 }).toFile(thumbFullPath);
          }
        }));

        const images = fs.readdirSync(imagesPath)
          .filter(f => f.includes('_large.webp'))
          .map(f => {
            const baseName = f.replace('_large.webp', '');
            // ВАЖНО: Вече премахваме "/public", защото браузърът не го вижда
            return {
              original: `/assets/cars/${brand}/${model}/${f}`,
              thumbnail: `/assets/cars/${brand}/${model}/thumbnails/${baseName}_thumb.webp`
            };
          });

        return { id: model, name: model.replace(/_/g, ' '), images };
      }));

    return { id: brand, name: brand.toUpperCase(), logo: logoPath, models };
  }));

  fs.writeFileSync(outputPath, JSON.stringify(carData, null, 2));
  console.log('✨ JSON файлът е генериран успешно с нови пътища!');
};

processImages();