import * as fsextra from "fs-extra";
import { readdir, rm } from "fs/promises";
import { resolve } from "path";
import { NoTarget, Program } from "@typespec/compiler";
import { reportDiagnostic } from "../lib.js";

export async function clearDirectory(
  dirPath: string,
  excludeNames: string[] = [],
  program?: Program
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
    const entries = await readdir(dirPath);

    // Filter entries to exclude those that should be preserved
    const filteredEntries = entries.filter((entry) => {
      return !excludeNames.includes(entry);
    });

    // Process each entry
    for (const entry of filteredEntries) {
      const entryPath = resolve(dirPath, entry);
      await rm(entryPath, { recursive: true, force: true });
    }
  } catch (error) {
    // If there's an error, fall back to regular emptyDir
    if (program) {
      reportDiagnostic(program, {
        code: "directory-traversal-error",
        format: { directory: dirPath, error: String(error) },
        target: NoTarget
      });
    }
    await fsextra.emptyDir(dirPath);
  }
}
