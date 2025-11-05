#!/usr/bin/env node

/**
 * Sync content from root content/ folder to client/public/content/
 * This ensures CMS changes are included in the build
 */

const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', 'content');
const targetDir = path.join(__dirname, '..', 'client', 'public', 'content');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

console.log('📦 Syncing content folder...');
console.log(`   From: ${sourceDir}`);
console.log(`   To:   ${targetDir}`);

// Remove old content if exists
if (fs.existsSync(targetDir)) {
  fs.rmSync(targetDir, { recursive: true, force: true });
}

// Copy fresh content
copyRecursiveSync(sourceDir, targetDir);

console.log('✅ Content synced successfully!');
