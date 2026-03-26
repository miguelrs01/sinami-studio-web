const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

function copyFile(sourceRelativePath, destinationRelativePath) {
  const sourcePath = path.join(rootDir, sourceRelativePath);
  const destinationPath = path.join(distDir, destinationRelativePath);
  fs.mkdirSync(path.dirname(destinationPath), { recursive: true });
  fs.copyFileSync(sourcePath, destinationPath);
}

copyFile('CNAME', 'CNAME');
copyFile('index-party.html', path.join('apps', 'yo-nunca', 'play-party', 'index.html'));
