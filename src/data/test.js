import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.join(__dirname, 'src/assets/cars');
const outputPath = path.join(__dirname, 'src/data/carBrands.js');

const cleanOldFiles = (dir) => {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      if (item === 'thumbnails') {
        fs.rmSync(fullPath, { recursive: true, force: true });
      } else {
        cleanOldFiles(fullPath);
      }
    } else if (item.includes('_large.webp') || item.includes('_thumb.webp')) {
      fs.unlinkSync(fullPath);
    }
  }
};

const processImages = async () => {
  if (!fs.existsSync(baseDir)) return;

  console.log('🧹 Почистване на стари изображения...');
  cleanOldFiles(baseDir);

  const brands = fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory());

  const carData = await Promise.all(brands.map(async (brand) => {
    const modelsPath = path.join(baseDir, brand);
    const models = await Promise.all(fs.readdirSync(modelsPath)
      .filter(f => fs.statSync(path.join(modelsPath, f)).isDirectory())
      .map(async (model) => {
        const imagesPath = path.join(modelsPath, model);
        const thumbPath = path.join(imagesPath, 'thumbnails');
        
        if (!fs.existsSync(thumbPath)) fs.mkdirSync(thumbPath);

        const files = fs.readdirSync(imagesPath).filter(file => 
          /\.(jpg|jpeg|png|webp)$/i.test(file) && !file.includes('_large.webp')
        );
        
        const imageData = await Promise.all(files.map(async (file) => {
          const name = path.parse(file).name;
          const fullResName = `${name}_large.webp`;
          const thumbName = `${name}_thumb.webp`;

          await sharp(path.join(imagesPath, file))
            .resize(1200, null, { withoutEnlargement: true })
            .webp({ quality: 80 })
            .toFile(path.join(imagesPath, fullResName));

          await sharp(path.join(imagesPath, file))
            .resize(400, 300, { fit: 'cover' })
            .webp({ quality: 70 })
            .toFile(path.join(thumbPath, thumbName));

          return {
            original: `/src/assets/cars/${brand}/${model}/${fullResName}`,
            thumbnail: `/src/assets/cars/${brand}/${model}/thumbnails/${thumbName}`
          };
        }));

        return { 
          id: model,
          name: model.replace(/_/g, ' '),
          images: imageData 
        };
      }));

    return { 
      id: brand,
      name: brand.toUpperCase(), 
      logo: `/src/assets/logos/${brand.toLowerCase()}.png`,
      models 
    };
  }));

  let jsonString = JSON.stringify(carData, null, 2);
  const cleanString = jsonString.replace(/"([^"]+)":/g, '$1:');

  fs.writeFileSync(outputPath, `export const carBrands = ${cleanString};`);
  console.log('✨ Генериран файл (без thumbnailId)!');
};

processImages();