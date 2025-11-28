#!/usr/bin/env node
/**
 * This script runs typespec-bump-deps and syncs the versions to pnpm.overrides
 * Run: node scripts/update-typespec-overrides.js
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageJsonPath = resolve(__dirname, '../package.json');

function updateOverrides() {
  console.log('Running typespec-bump-deps...\n');

  try {
    // Run typespec-bump-deps and capture output
    const output = execSync('npx @azure-tools/typespec-bump-deps@latest package.json', {
      encoding: 'utf8',
      cwd: resolve(__dirname, '..')
    });

    // Parse the output to extract the version mapping
    // Look for the JSON object in the output
    const lines = output.split('\n');
    let inObject = false;
    let jsonLines = [];

    for (const line of lines) {
      if (line.trim() === '{') {
        inObject = true;
        jsonLines = ['{'];
      } else if (inObject) {
        jsonLines.push(line);
        if (line.trim() === '}') {
          break;
        }
      }
    }

    if (jsonLines.length === 0) {
      console.error('Could not find version mapping in typespec-bump-deps output');
      process.exit(1);
    }

    // Join and parse the JSON
    const jsonStr = jsonLines.join('\n').replace(/'/g, '"');
    const versionMap = JSON.parse(jsonStr);

    // Read package.json
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));

    if (!packageJson.pnpm) {
      packageJson.pnpm = {};
    }

    if (!packageJson.pnpm.overrides) {
      packageJson.pnpm.overrides = {};
    }

    // Update overrides with the versions from typespec-bump-deps
    console.log('\nUpdating pnpm.overrides...\n');
    for (const [pkg, version] of Object.entries(versionMap)) {
      packageJson.pnpm.overrides[pkg] = version;
      console.log(`✓ ${pkg}: ${version}`);
    }

    // Write back to package.json
    writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

    console.log('\n✅ Successfully updated pnpm.overrides in package.json');

  } catch (error) {
    console.error('Error:', error.message);
    if (error.stdout) {
      console.log('stdout:', error.stdout);
    }
    if (error.stderr) {
      console.error('stderr:', error.stderr);
    }
    process.exit(1);
  }
}

updateOverrides();