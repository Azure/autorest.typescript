import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { existsSync } from "fs";

/**
 * Recursively finds the nearest package.json file starting from the specified directory.
 * @param {string} currentDir - The directory to start searching from. Defaults to the directory of the current module.
 * @returns {string} path to the directory containing the package.json file.
 */
export function resolveProjectRoot(
  currentDir: string = dirname(fileURLToPath(import.meta.url))
): string {
  const packageJsonPath = resolve(currentDir, "package.json");

  if (existsSync(packageJsonPath)) {
    return currentDir; // Return the directory containing the package.json
  }

  const parentDir = resolve(currentDir, "..");

  if (parentDir === currentDir) {
    // If we've reached the root directory and haven't found package.json
    throw new Error("Could not find package.json");
  }

  // Recursively search the parent directory
  return resolveProjectRoot(parentDir);
}
