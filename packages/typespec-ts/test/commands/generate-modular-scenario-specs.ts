import { mkdirSync, readFileSync, rmSync, writeFileSync } from "fs";
import path from "path";
import {
  getExpectedScenarioSpecFiles,
  scenarioSpecsRoot
} from "./modular-scenario-specs.js";

function main(): void {
  const expectedFiles = getExpectedScenarioSpecFiles();
  rmSync(scenarioSpecsRoot, { recursive: true, force: true });

  for (const [relativeFilePath, content] of expectedFiles) {
    const wrapperPath = path.join(scenarioSpecsRoot, relativeFilePath);
    const wrapperDirectory = path.dirname(wrapperPath);
    mkdirSync(wrapperDirectory, { recursive: true });
    writeIfChanged(wrapperPath, content);
  }

  console.log(
    `Generated ${expectedFiles.size} modular scenario wrapper specs.`
  );
}

function writeIfChanged(filePath: string, content: string): void {
  try {
    if (readFileSync(filePath, "utf8") === content) {
      return;
    }
  } catch {}

  writeFileSync(filePath, content);
}

main();
