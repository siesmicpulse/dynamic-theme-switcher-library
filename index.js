const fs = require('fs').promises;
require('lodash');
require('jquery');

async function writeFileAsync(filePath, content) {
  try {
    await fs.writeFile(filePath, content, 'utf8');
  } catch (err) {
    console.error(err);
  }
}

// Simple function to switch the theme
function switchTheme(newTheme) {
  document.documentElement.setAttribute('data-theme', newTheme);
}

module.exports = { switchTheme };
