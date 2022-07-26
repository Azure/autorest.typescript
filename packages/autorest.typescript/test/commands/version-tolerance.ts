import { runAutorest } from "./run";
import { promises as fs } from "fs";
import * as path from "path";

/**
 * This tool helps us run Rest Client Version Tolerance validation. With this we have coverage
 * against unexpected SDK breaking changes. Rest Clients are not expected to create any breaking changes
 * if the new swagger doesn't contain API breaking changes.
 *
 * Version tolerance tests are configured in the variable versionToleranceTests. Where we define the pair of
 * swaggers to generate as `initialSwagger` and `updatedSwagger`
 *
 * The tool will generate the 2 swaggers.
 *
 * We need to hand author tests against the initialSwagger. When adding a new versionTolerance swagger, a new
 * test needs to be created in test/version-tolerance/initial-tests/{name}.spec.ts.
 *
 * NOTE: The test file name must be the same name defined in the `versionToleranceTests` object below.
 *
 * We only need to author test for the initial swagger, and the tool will auto-generate a test against the updated swagger
 * taking the test we write and changing the import paths to point to the updated generated sdk.
 *
 * When this tool is invoked without cli parameters, it will generate all the client pairs defined below in `versionToleranceTests`.
 * If --test-gen is passed, the tool will generate a spec.ts file for each file under `test/version-tolerance/initial-tests`
 * change the imports to point to the updated version of the sdks and put the new tests under `test/version-tolerance/updated-tests`
 *
 * Running all tests under `test/version-tolerance` should pass. If a test failure is reported in any of the `updated-tests` it is
 * likely because of an unexpected breaking change.
 */

interface VersionToleranceTest {
  /**
   * this is the test name and also the name that will be given to the generated packages.
   */
  name: string;
  /**
   * Information about the Swagger that defines the initial phase of the
   * version tolerance test
   */
  initialSwagger: SwaggerInfo;
  /**
   * Information about the Swagger that defines the updated phase of the
   * version tolerance test
   */
  updatedSwagger: SwaggerInfo;
}

interface SwaggerInfo {
  /**
   * Input swagger, this will be resolved to the autorest.testserver dependency in node_modules
   * and is a relative path to autorest.testserver swaggers/ folder
   */
  input: string;
  /**
   * This is the folder name for the generated code, relative to tests/version-tolerance/generated
   */
  output: string;
}

/**
 * Here is where version tolerance tests are defined
 */
const versionToleranceTests: VersionToleranceTest[] = [
  {
    name: "rlcClient",
    initialSwagger: { input: "dpg_initial.json", output: "rlc-initial" },
    updatedSwagger: { input: "dpg_update1.json", output: "rlc-updated" }
  }
];

async function generateVersionToleranceClients(tests: VersionToleranceTest[]) {
  for (const { initialSwagger, updatedSwagger, name } of tests) {
    // When given a filename look for it in test server, otherwise use the path
    await generate(name, initialSwagger);
    await generate(name, updatedSwagger);
  }
}

async function generate(name: string, swaggerInfo: SwaggerInfo) {
  const swaggerPath = buildSwaggerPath(swaggerInfo.input);
  await runAutorest(swaggerPath, {
    srcPath: "",
    restLevelClient: true,
    azureSdkForJs: false,
    azureArm: false,
    rlcShortcut: true,
    addCredentials: false,
    outputPath: `./test/version-tolerance/generated/${swaggerInfo.output}`,
    licenseHeader: true,
    packageDetails: {
      name: `@msinternal/${name}`,
      nameWithoutScope: name,
      version: "1.0.0-beta.1"
    }
  });
}

function buildSwaggerPath(fileName: string) {
  return `node_modules/@microsoft.azure/autorest.testserver/swagger/${fileName}`;
}

async function run() {
  const testGeneration = process.argv.indexOf("--test-gen") !== -1;

  if (testGeneration) {
    return await generateUpdatedTests(versionToleranceTests);
  }

  const isDebugging = process.argv.indexOf("--debug") !== -1;
  await generateVersionToleranceClients(versionToleranceTests);
}

/**
 * Generates a spec.ts file for each file under `test/version-tolerance/initial-tests`
 * changes the imports to point to the updated version of the sdks and put the new tests under `test/version-tolerance/updated-tests`
 */
async function generateUpdatedTests(tests: VersionToleranceTest[]) {
  for (const test of tests) {
    const initialTestPath = buildTestPath(test.name, "initial");
    const updatedTestPath = buildTestPath(test.name, "updated");

    const initialTestContents = (await fs.readFile(initialTestPath)).toString();
    const importRegex = new RegExp(
      `"../generated/${test.initialSwagger.output}/src"`,
      "g"
    );
    const importReplacement = `"../generated/${test.updatedSwagger.output}/src"`;
    const phaseRegex = new RegExp(`const phase = "initial";`, "g");
    const phaseReplacement = `const phase = "updated";`;

    const updatedOnlyBlockStartRegex = new RegExp(
      /\/\*\*[ ]?@version-tolerance:[ ]?update-only-start/g
    );
    const updatedOnlyBlockEndRegex = new RegExp(
      /\@version-tolerance:[ ]?update-only-end[ ]?\*\*\//g
    );
    const updatedOnlyBlockReplacement = "";

    const updatedOnlyPathRegex = new RegExp(
      /\/\*@version-tolerance:update-only\*\/[ ]?pathUnchecked/g
    );
    const updatedOnlyPathReplacement = "path";

    let updatedFile = initialTestContents
      .replace(importRegex, importReplacement)
      .replace(phaseRegex, phaseReplacement)
      .replace(updatedOnlyBlockStartRegex, "")
      .replace(updatedOnlyBlockEndRegex, "")
      .replace(updatedOnlyPathRegex, updatedOnlyPathReplacement);

    updatedFile = `// Code generated by Microsoft (R) AutoRest Version Tolerance Test Tool.\n// Changes may cause incorrect behavior and will be lost if the code is regenerated.\n${updatedFile}`;

    await fs.writeFile(updatedTestPath, updatedFile);
  }
}

function buildTestPath(name: string, phase: "initial" | "updated") {
  return path.join(
    __dirname,
    "..",
    "version-tolerance",
    `${phase}-tests`,
    `${name}.spec.ts`
  );
}

run().catch(console.error);
