const sharp = require('sharp');

sharp('stich.gif')
  .resize(80)
  .toFile('stich.png');