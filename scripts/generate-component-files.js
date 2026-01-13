#!/usr/bin/env node

/**
 * Script to generate individual component JSON files from registry.json
 * This allows shadcn to fetch components individually using the {name} placeholder pattern
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const registryPath = path.join(__dirname, '..', 'registry.json');
const outputDir = path.join(__dirname, '..', 'components-json');

// Read registry.json
const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate individual component files
registry.items.forEach((item) => {
  const fileName = `${item.name}.json`;
  const filePath = path.join(outputDir, fileName);

  // Write each item as its own JSON file
  fs.writeFileSync(
    filePath,
    JSON.stringify(item, null, 2) + '\n',
    'utf8'
  );

  console.log(`✓ Generated ${fileName}`);
});

console.log(`\n✅ Generated ${registry.items.length} component files in ${outputDir}`);
console.log(`\nNext steps:`);
console.log(`1. Commit the ${outputDir} directory to your repository`);
console.log(`2. Make sure your components.json is configured with the correct registry URL`);
