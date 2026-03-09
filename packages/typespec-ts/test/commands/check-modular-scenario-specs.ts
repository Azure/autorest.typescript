import {
  getActualScenarioSpecFiles,
  getExpectedScenarioSpecFiles
} from "./modular-scenario-specs.js";

function main(): void {
  const expectedFiles = getExpectedScenarioSpecFiles();
  const actualFiles = getActualScenarioSpecFiles();

  const missingFiles = [...expectedFiles.keys()].filter(
    (file) => !actualFiles.has(file)
  );
  const extraFiles = [...actualFiles.keys()].filter(
    (file) => !expectedFiles.has(file)
  );
  const staleFiles = [...expectedFiles.entries()]
    .filter(
      ([file, content]) =>
        actualFiles.has(file) && actualFiles.get(file) !== content
    )
    .map(([file]) => file);

  if (
    missingFiles.length === 0 &&
    extraFiles.length === 0 &&
    staleFiles.length === 0
  ) {
    console.log(
      `Scenario wrapper specs are up to date (${expectedFiles.size} files).`
    );
    return;
  }

  const parts: string[] = [
    "Modular scenario wrapper specs are out of date.",
    "Run `npm run regen-scenario-specs` in `packages/typespec-ts` and commit the resulting changes."
  ];

  if (missingFiles.length > 0) {
    parts.push(`Missing files:\n- ${missingFiles.join("\n- ")}`);
  }

  if (extraFiles.length > 0) {
    parts.push(`Unexpected files:\n- ${extraFiles.join("\n- ")}`);
  }

  if (staleFiles.length > 0) {
    parts.push(`Changed files:\n- ${staleFiles.join("\n- ")}`);
  }

  throw new Error(parts.join("\n\n"));
}

main();
