console.log('Generating icon types...');
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsDir = path.join(__dirname, '../src/lib/icons/assets');
const outputFile = path.join(__dirname, '../src/lib/icons/iconTypes.ts');

const iconFiles = fs.readdirSync(iconsDir).filter((file) => file.endsWith('.svg'));
const iconNames = iconFiles.map((file) => file.replace('.svg', ''));

const content = `export type IconName = ${iconNames.map((name) => `'${name}'`).join(' | ')};`;

fs.writeFileSync(outputFile, content);

console.log('Icon types generated successfully!');
