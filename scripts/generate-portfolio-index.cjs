#!/usr/bin/env node

/**
 * Generate portfolio index JSON file for filtering
 * Reads all portfolio markdown files and creates an index
 */

const fs = require('fs');
const path = require('path');

const portfolioDir = path.join(__dirname, '..', 'content', 'portfolio');
const outputFile = path.join(__dirname, '..', 'client', 'public', 'content', 'portfolio-index.json');

function parseMarkdownFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);
  
  if (!match) return {};
  
  const frontmatter = {};
  const lines = match[1].split('\n');
  
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;
    
    const key = line.substring(0, colonIndex).trim();
    let value = line.substring(colonIndex + 1).trim();
    
    // Remove quotes if present
    if ((value.startsWith('"') && value.endsWith('"')) || 
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    
    // Handle arrays (categories, types)
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1).split(',').map(v => v.trim().replace(/['"]/g, ''));
    }
    
    frontmatter[key] = value;
  }
  
  return frontmatter;
}

console.log('📋 Generating portfolio index...');

if (!fs.existsSync(portfolioDir)) {
  console.log('⚠️  Portfolio directory not found, creating empty index');
  fs.writeFileSync(outputFile, JSON.stringify([], null, 2));
  process.exit(0);
}

const files = fs.readdirSync(portfolioDir).filter(f => f.endsWith('.md'));
const portfolioItems = [];

for (const file of files) {
  const filePath = path.join(portfolioDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const frontmatter = parseMarkdownFrontmatter(content);
  
  const slug = file.replace('.md', '');
  
  portfolioItems.push({
    slug,
    title: frontmatter.title || slug,
    date: frontmatter.date || new Date().toISOString().split('T')[0],
    featuredImage: frontmatter.featuredImage || '',
    categories: Array.isArray(frontmatter.categories) ? frontmatter.categories : [],
    types: Array.isArray(frontmatter.types) ? frontmatter.types : []
  });
}

// Sort by date descending
portfolioItems.sort((a, b) => new Date(b.date) - new Date(a.date));

// Ensure output directory exists
const outputDir = path.dirname(outputFile);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputFile, JSON.stringify(portfolioItems, null, 2));

console.log(`✅ Generated index with ${portfolioItems.length} items`);
console.log(`   Output: ${outputFile}`);
