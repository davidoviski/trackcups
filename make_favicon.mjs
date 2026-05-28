import sharp from 'sharp';

// Create dark background + white logo
const logo = await sharp('./caski/Logo_removebackground.png')
  .resize(56, 56)
  .negate({ alpha: false })
  .toBuffer();

await sharp({ create: { width: 64, height: 64, channels: 4, background: { r: 10, g: 10, b: 10, alpha: 1 } } })
  .composite([{ input: logo, gravity: 'centre' }])
  .png()
  .toFile('./caski/favicon.png');

console.log('favicon.png created!');
