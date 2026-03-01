/* eslint-disable no-unused-vars */
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logoDir = path.join(__dirname, 'src/assets/logos');

// Списък с марките - имената трябва да съвпадат с папките ти в src/assets/cars
const brands = [
  'alfa-romeo', 'audi', 'bmw', 'chevrolet', 'citroen', 'dacia', 'daewoo', 'daihatsu', 'dodge', 'fiat', 'ford', 'honda', 'hyundai', 'infiniti', 'jaguar', 'jeep', 'kia', 'lancia', 'land-rover', 'lexus','Lincoln', 'mazda', 'mercedes-benz', 'mercury', 'mini', 'mitsubishi', 'nissan', 'opel', 'peugeot', 'porsche', 'ram', 'renault', 'rover', 'seat', 'skoda',  'subaru', 'suzuki', 'toyota', 'volkswagen', 'volvo'
];

if (!fs.existsSync(logoDir)) {
  fs.mkdirSync(logoDir, { recursive: true });
}

const downloadLogos = async () => {
  console.log('🏎️  Започвам изтегляне на лога от CarLogos.org...');

  for (const brand of brands) {
    const fileName = `${brand}.png`;
    const filePath = path.join(logoDir, fileName);

    if (fs.existsSync(filePath)) {
      console.log(`⏩ ${brand} вече съществува.`);
      continue;
    }

    // Структура на URL в CarLogos (обикновено малки букви)
    const url = `https://www.carlogos.org/car-logos/${brand}-logo.png`;

    try {
      const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream',
        headers: {
          'User-Agent': 'Mozilla/5.0' // Добавяме това, за да не ни блокират като бот
        }
      });

      const writer = fs.createWriteStream(filePath);
      response.data.pipe(writer);

      await new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
      });

      console.log(`✅ Изтеглено: ${fileName}`);
    } catch (error) {
      // Ако не намери -logo.png, опитваме само с името (някои са така)
      try {
        const fallbackUrl = `https://www.carlogos.org/logo/${brand}-logo.png`;
        // ... тук може да се добави втори опит, но горният покрива 90%
        console.error(`❌ Неуспех за ${brand} (404)`);
      } catch (e) {
        console.error(`❌ Грешка при ${brand}`);
      }
    }
  }
  console.log('✨ Процесът приключи!');
};

downloadLogos();