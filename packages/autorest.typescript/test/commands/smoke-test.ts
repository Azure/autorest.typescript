import { spawn } from "child_process";
import { join as joinPath, sep } from "path";
import { bold } from "chalk";
import { readmes, SpecDefinition } from "./smoke-test-list";
import { command } from "yargs";
import { SPECS_PATH, DEFAULT_SPEC_BRANCH } from "../utils/constants";
import { onExit } from "./childProcessOnExit";
import { appendFileSync, read } from "fs";
import { runAutorest } from "./run";
import { pathExists } from "fs-extra";

const SMOKE_PATH = joinPath(
  `${__dirname}`,
  "..",
  "..",
  "test",
  "smoke",
  "generated"
);

const logError = (str: string) => console.error(bold.red(str));
const logSuccess = (str: string) => console.log(bold.greenBright(str));
const logInfo = (str: string) => console.warn(bold.blueBright(str));

interface SmokeResult {
  readme: string;
  success: boolean;
}

const generateFromReadme = async ({
  path,
  params,
  outputFolderName
}: SpecDefinition) => {
  const matches = path.match(
    /^[^#].*?specification[\/\\]([\w-]+[\/\\][\w-]+)[\/\\]readme.md/
  );
  if (!matches?.length) {
    return;
  }

  const projectName = outputFolderName || matches[1].replace(/[\/\\]/g, "-");

  const output = joinPath(SMOKE_PATH, projectName);
  await runAutorest(
    path,
    {
      srcPath: "",
      licenseHeader: true,
      outputPath: output,
      packageDetails: {
        name: `@msinternal/${projectName}`,
        version: "",
        nameWithoutScope: ""
      },
      allowInsecureConnection: true,
      isTestPackage: true
    },
    false,
    params
  );
  return output;
};

const generateFromLocal = async ({
  path,
  params,
  outputFolderName
}: SpecDefinition) => {
  const readmeFilePaths = path.split(sep);
  const projectName = readmeFilePaths[readmeFilePaths.length - 1].replace(
    /\.md/,
    ""
  );

  const output = joinPath(SMOKE_PATH, projectName);
  await runAutorest(
    path,
    {
      srcPath: "",
      licenseHeader: true,
      outputPath: output,
      packageDetails: {
        name: `@msinternal/${projectName}`,
        version: "",
        nameWithoutScope: ""
      }
    },
    false,
    params
  );
  return output;
};

const buildGenerated = async (projectPath?: string) => {
  if (!projectPath) {
    return;
  }
  const npmCommand = `npm${/^win/.test(process.platform) ? ".cmd" : ""}`;
  const npmInstall = spawn(npmCommand, ["install"], {
    stdio: [process.stdin, process.stdout, process.stderr],
    cwd: projectPath
  });
  await onExit(npmInstall);

  const npmBuild = spawn(npmCommand, ["run", "build"], {
    stdio: [process.stdin, process.stdout, process.stderr],
    cwd: projectPath
  });

  await onExit(npmBuild);
};

const addTransform = async (
  path: string,
  modelNames: string[]
): Promise<void> => {
  let transformCode: string = "";

  for (let i = 0; i < modelNames.length; i++) {
    transformCode = transformCode.concat(`
  
### Change client name of ${modelNames[i]} model
\`\`\`yaml
directive:
  - from: swagger-document
    where: $.definitions.${modelNames[i]}
    transform: >
      $["x-ms-client-name"] = "${modelNames[i]}Def";
\`\`\`

`);
  }

  try {
    appendFileSync(path, transformCode);
  } catch (err) {
    throw new Error(
      `Failed to add transformation to file: ${path}. Transformation to be added: ${transformCode}. Error: ${err}`
    );
  }
};

const specToModify: { [property: string]: string[] } = {
  "./.tmp/specs/specification/sql/resource-manager/readme.md": [
    "DatabaseAutomaticTuning",
    "ServerAutomaticTuning"
  ],
  "./.tmp/specs/specification/web/resource-manager/readme.md": [
    "ResourceHealthMetadata"
  ],
  "./.tmp/specs/specification/graphrbac/data-plane/readme.md": [
    "OAuth2PermissionGrant"
  ],
  "./.tmp/specs/specification/compute/resource-manager/readme.md": ["Usage"],
  "./.tmp/specs/specification/storage/resource-manager/readme.md": [
    "ObjectReplicationPolicies"
  ]
};

const addTransformsToLibraries = async (
  spec: SpecDefinition
): Promise<void> => {
  if (Object.keys(specToModify).includes(spec.path)) {
    await addTransform(spec.path, specToModify[spec.path]);
  }
};

const removeTransform = async (path: string): Promise<unknown> => {
  path = path.replace("./.tmp/specs/", "");
  const childProdcess = spawn("git", ["checkout", path], {
    cwd: SPECS_PATH,
    stdio: [process.stdin, process.stdout, process.stderr]
  });
  return await onExit(childProdcess);
};

const removeTransformsToLibraries = async (
  spec: SpecDefinition
): Promise<void> => {
  if (Object.keys(specToModify).includes(spec.path)) {
    await removeTransform(spec.path);
  }
};

const verifyLibrary = async (spec: SpecDefinition): Promise<SmokeResult> => {
  let success = false;
  const readmeUrl = spec.path;
  try {
    await checkoutBranch(spec.branch);
    await addTransformsToLibraries(spec);
    let projectPath = await generateFromReadme(spec);
    if (!projectPath) {
      projectPath = await generateFromLocal(spec);
    }
    if (await pathExists(joinPath(projectPath, "package.json"))) {
      await buildGenerated(projectPath);
    }
    await removeTransformsToLibraries(spec);
    success = true;
  } catch (e) {
    logError(e as string);
  }

  return { readme: readmeUrl, success };
};

const verifyLibraries = async (readmes: SpecDefinition[]) => {
  const startTime = Date.now();

  let results: SmokeResult[] = [];
  for (let i = 0; i < readmes.length; i++) {
    results.push(await verifyLibrary(readmes[i]));
  }

  const failed = results.filter(r => !r.success);
  logInfo(
    `Smoke Test finished, Took ${Math.round((Date.now() - startTime) / 1000)}s`
  );
  if (failed.length) {
    logError(`The following swaggers failed validation`);
    logError(failed.map(({ readme }) => readme).join("\n"));

    throw new Error(
      `Failed to validate ${failed.length}/${results.length} swaggers`
    );
  }

  logSuccess(
    `Finished smoke testing ${readmes.length}/${results.length} swaggers validated`
  );
};

const main = async () => {
  const args = command("test-smoke", "Run @autorest.typescript smoke test", {
    tag: {
      alias: "t",
      default: undefined,
      type: "string"
    }
  })
    .help()
    .parseSync();

  let tag = (args.tag || args.t) as string;
  let swaggers = readmes;

  // If the tag parameter was provided only generate swaggers with that tag
  if (tag) {
    tag = tag.toLowerCase();
    swaggers = readmes.filter(
      r => r.buildTag && r.buildTag.toLowerCase() === tag
    );
  }

  await verifyLibraries(swaggers);
};

const checkoutBranch = async (branch?: string) => {
  const childProdcess = spawn(
    "git",
    ["checkout", branch || DEFAULT_SPEC_BRANCH],
    {
      cwd: SPECS_PATH,
      stdio: [process.stdin, process.stdout, process.stderr]
    }
  );
  return await onExit(childProdcess);
};

main().catch(error => {
  logError(error);
  process.exit(-1);
});
