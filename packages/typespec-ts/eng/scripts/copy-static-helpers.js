import { copyFile, mkdir, readdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// Get the correct __dirname in both Windows and Linux
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function copyFiles(srcDir, destDir, fileFilter) {
  try {
    const entries = await readdir(srcDir, { withFileTypes: true });
    await mkdir(destDir, { recursive: true });

    for (const entry of entries) {
      const srcPath = path.join(srcDir, entry.name);
      const destPath = path.join(destDir, entry.name);

      if (entry.isDirectory()) {
        await copyFiles(srcPath, destPath, fileFilter);
      } else if (entry.isFile() && fileFilter(srcPath)) {
        await copyFile(srcPath, destPath);
      }
    }
  } catch (error) {
    console.error(`Error copying files from ${srcDir} to ${destDir}:`, error);
    process.exit(1); // Exit with a non-zero status code on error
  }
}

const srcDir = path.resolve(__dirname, "../../src/modular/static-helpers");
const destDir = path.resolve(
  __dirname,
  "../../dist/src/modular/static-helpers"
);

// Copy only .ts files
try {
  await copyFiles(srcDir, destDir, (src) => src.endsWith(".ts"));
  console.log("All files copied successfully.");
} catch (error) {
  console.error("Error during the copy operation:", error);
  process.exit(1); // Exit with a non-zero status code on error
}
