// Generates the Open Graph share images (1200x630) and the Organization logo
// into public/images/. Run from the project root: node scripts/gen-og.js
const sharp = require('sharp');
const path = require('path');

const IMAGES = path.join(__dirname, '../public/images');
const W = 1200;
const H = 630;

const BG = '#16190f';
const BG_RAISED = '#1f2416';
const TEXT = '#edefe6';
const MUTED = '#a8ad9d';
const BRAND = '#a3c163';
const BRAND_DARK = '#6b8433';

const FONT = `'Segoe UI', Arial, sans-serif`;

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// The leaf-drop brand mark from favicon.svg (128x128 viewBox)
const mark = (x, y, scale, leaf = BRAND, pit = BRAND_DARK) => `
  <g transform="translate(${x} ${y}) scale(${scale})">
    <path d="M64 12C36 40 24 62 24 82a40 40 0 0 0 80 0c0-20-12-42-40-70Z" fill="${leaf}"/>
    <circle cx="64" cy="82" r="18" fill="${pit}"/>
  </g>`;

const baseBg = `
  <rect width="${W}" height="${H}" fill="${BG}"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <defs>
    <radialGradient id="glow" cx="0.5" cy="0.1" r="1">
      <stop offset="0" stop-color="${BG_RAISED}"/>
      <stop offset="1" stop-color="${BG}" stop-opacity="0"/>
    </radialGradient>
  </defs>`;

async function defaultOg() {
  const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    ${baseBg}
    ${mark(W / 2 - 96, 110, 1.5)}
    <text x="${W / 2}" y="415" text-anchor="middle" font-family=${JSON.stringify(FONT)}
      font-size="88" font-weight="700" fill="${TEXT}">Zetoon</text>
    <text x="${W / 2}" y="490" text-anchor="middle" font-family=${JSON.stringify(FONT)}
      font-size="36" fill="${MUTED}">Thoughtfully crafted mobile apps</text>
  </svg>`;
  await sharp(Buffer.from(svg)).png().toFile(path.join(IMAGES, 'og-default.png'));
  console.log('og-default.png done');
}

async function roundedIcon(file, size, radius) {
  const buf = await sharp(path.join(IMAGES, file), { density: 300 })
    .resize(size, size)
    .png()
    .toBuffer();
  const maskSvg = `<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${radius}" fill="#fff"/></svg>`;
  return sharp(buf)
    .composite([{ input: Buffer.from(maskSvg), blend: 'dest-in' }])
    .png()
    .toBuffer();
}

async function appOg(slug, iconFile, name, tagline) {
  const ICON = 240;
  const iconX = 110;
  const iconY = (H - ICON) / 2;
  const textX = iconX + ICON + 70;

  const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    ${baseBg}
    <text x="${textX}" y="290" font-family=${JSON.stringify(FONT)}
      font-size="68" font-weight="700" fill="${TEXT}">${esc(name)}</text>
    <text x="${textX}" y="352" font-family=${JSON.stringify(FONT)}
      font-size="30" fill="${MUTED}">${esc(tagline)}</text>
    ${mark(W - 140, H - 130, 0.75)}
  </svg>`;

  const icon = await roundedIcon(iconFile, ICON, 52);
  await sharp(Buffer.from(svg))
    .composite([{ input: icon, left: iconX, top: Math.round(iconY) }])
    .png()
    .toFile(path.join(IMAGES, `og-${slug}.png`));
  console.log(`og-${slug}.png done`);
}

async function logo() {
  const size = 512;
  const svg = `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${size}" height="${size}" rx="96" fill="${BG}"/>
    ${mark(size / 2 - 192, 64, 3)}
  </svg>`;
  await sharp(Buffer.from(svg)).png().toFile(path.join(IMAGES, 'zetoon-logo.png'));
  console.log('zetoon-logo.png done');
}

(async () => {
  await defaultOg();
  await appOg('masbaha', 'masbaha-icon.png', 'Masbaha', 'Digital Islamic prayer beads with real physics.');
  await appOg('chromashift', 'chromashift-icon.png', 'ChromaShift', 'A 2048-style puzzle where color drives every merge.');
  await appOg('mymemorycards', 'mymemorycards-icon.svg', 'MyMemoryCards', 'AI-powered language flashcards from your own books.');
  await logo();
})();
