import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" fill="none">
  <defs>
    <linearGradient id="emeraldGrad" x1="16" y1="12" x2="48" y2="52" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#34d399"/>
      <stop offset="100%" stop-color="#059669"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" flood-color="#10b981" flood-opacity="0.35"/>
    </filter>
  </defs>

  <!-- Background rounded slate tile -->
  <rect width="64" height="64" rx="16" fill="#0f172a"/>
  <rect x="1" y="1" width="62" height="62" rx="15" fill="none" stroke="#1e293b" stroke-width="2"/>

  <!-- Shield & Checkmark -->
  <g transform="translate(32, 33) scale(1.65) translate(-12, -12)" filter="url(#glow)">
    <path 
      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" 
      fill="rgba(16, 185, 129, 0.15)" 
      stroke="url(#emeraldGrad)" 
      stroke-width="2.2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    />
    <path 
      d="m9 12 2 2 4-4" 
      fill="none" 
      stroke="#34d399" 
      stroke-width="2.5" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    />
  </g>

  <!-- Brand accent dot at top-right of shield -->
  <circle cx="47" cy="17" r="4.2" fill="#34d399" stroke="#0f172a" stroke-width="2.5"/>
</svg>`;

async function generateFavicons() {
  console.log('Generating favicon files...');

  // 1. Write SVG favicon
  const svgPath = path.join(publicDir, 'favicon.svg');
  fs.writeFileSync(svgPath, svgContent, 'utf8');
  console.log('Wrote public/favicon.svg');

  const svgBuffer = Buffer.from(svgContent);

  // 2. Render PNG resolutions
  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'favicon-48x48.png', size: 48 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'icon-192.png', size: 192 },
    { name: 'icon-512.png', size: 512 }
  ];

  for (const { name, size } of sizes) {
    const outPath = path.join(publicDir, name);
    await sharp(svgBuffer)
      .resize(size, size, { fit: 'contain' })
      .png()
      .toFile(outPath);
    console.log(`Generated public/${name} (${size}x${size})`);
  }

  // 3. Generate favicon.ico (can be a 32x32 or 48x48 PNG container or ICO header with PNG data)
  // Standard modern browsers accept PNG encoded in ICO format, or a 32x32 png file as favicon.ico
  const png32Buffer = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  const png16Buffer = await sharp(svgBuffer).resize(16, 16).png().toBuffer();

  // Create standard ICO file containing 16x16 and 32x32 images
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0); // Reserved
  icoHeader.writeUInt16LE(1, 2); // ICO type (1 = icon)
  icoHeader.writeUInt16LE(2, 4); // Number of images (2: 16x16, 32x32)

  const offset1 = 6 + (16 * 2); // 38
  const entry1 = Buffer.alloc(16);
  entry1.writeUInt8(16, 0); // width
  entry1.writeUInt8(16, 1); // height
  entry1.writeUInt8(0, 2);  // color palette
  entry1.writeUInt8(0, 3);  // reserved
  entry1.writeUInt16LE(1, 4); // color planes
  entry1.writeUInt16LE(32, 6); // bits per pixel
  entry1.writeUInt32LE(png16Buffer.length, 8); // size of image data
  entry1.writeUInt32LE(offset1, 12); // offset

  const offset2 = offset1 + png16Buffer.length;
  const entry2 = Buffer.alloc(16);
  entry2.writeUInt8(32, 0); // width
  entry2.writeUInt8(32, 1); // height
  entry2.writeUInt8(0, 2);  // color palette
  entry2.writeUInt8(0, 3);  // reserved
  entry2.writeUInt16LE(1, 4); // color planes
  entry2.writeUInt16LE(32, 6); // bits per pixel
  entry2.writeUInt32LE(png32Buffer.length, 8); // size of image data
  entry2.writeUInt32LE(offset2, 12); // offset

  const icoBuffer = Buffer.concat([icoHeader, entry1, entry2, png16Buffer, png32Buffer]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('Generated public/favicon.ico');

  // Also duplicate favicon.png as default 32x32
  fs.writeFileSync(path.join(publicDir, 'favicon.png'), png32Buffer);
  console.log('Generated public/favicon.png');

  console.log('All favicons generated successfully!');
}

generateFavicons().catch(console.error);
