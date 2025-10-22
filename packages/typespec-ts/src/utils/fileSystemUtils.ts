import * as fsextra from "fs-extra";
import { resolve } from "path";

export async function clearDirectory(
  dirPath: string,
  excludeNames: string[] = []
): Promise<void> {
  if (!(await fsextra.pathExists(dirPath))) {
    return;
  }

  // If no exclude names, just use regular emptyDir for efficiency
  if (excludeNames.length === 0) {
    await fsextra.emptyDir(dirPath);
    return;
  }

  try {
    // Get all subdirectories and files
    const entries = await fsextra.readdir(dirPath);

    // Filter entries to exclude those that should be preserved
    const filteredEntries = entries.filter((entry) => {
      return !excludeNames.includes(entry);
    });

    // Process each entry
    for (const entry of filteredEntries) {
      const entryPath = resolve(dirPath, entry);
      await fsextra.rm(entryPath, { recursive: true, force: true });
    }
  } catch (error) {
    // If there's an error, fall back to regular emptyDir
    console.warn(
      `Warning: Selective directory clearing failed, falling back to regular emptyDir: ${error}`
    );
    await fsextra.emptyDir(dirPath);
  }
}
