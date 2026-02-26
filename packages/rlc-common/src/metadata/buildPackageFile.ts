// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NameType, normalizeName } from "../helpers/nameUtils.js";
import { hasPollingOperations } from "../helpers/operationHelpers.js";
import {
  isAzureMonorepoPackage,
  isAzurePackage,
  isAzureStandalonePackage
} from "../helpers/packageUtil.js";
import {
  PackageCommonInfoConfig,
  getTshyConfig
} from "./packageJson/packageCommon.js";
import { Project, SourceFile } from "ts-morph";
import { RLCModel } from "../interfaces.js";
import {
  buildAzureMonorepoPackage,
  getAzureMonorepoDependencies
} from "./packageJson/buildAzureMonorepoPackage.js";
import { buildAzureStandalonePackage } from "./packageJson/buildAzureStandalonePackage.js";
import { buildFlavorlessPackage } from "./packageJson/buildFlavorlessPackage.js";
import { getRelativePartFromSrcPath } from "../helpers/pathUtils.js";
import { getPackageName } from "./utils.js";

interface PackageFileOptions {
  exports?: Record<string, any>;
  dependencies?: Record<string, string>;
  clientContextPaths?: string[];
}

export function buildPackageFile(
  model: RLCModel,
  { exports, dependencies, clientContextPaths }: PackageFileOptions = {}
) {
  const config: PackageCommonInfoConfig = {
    description: getDescription(model),
    moduleKind: model.options?.moduleKind ?? "esm",
    name: getPackageName(model),
    version: getPackageVersion(model),
    withSamples: model.options?.generateSample === true,
    withTests: model.options?.generateTest === true,
    nameWithoutScope: model.options?.packageDetails?.nameWithoutScope,
    exports,
    azureArm: model.options?.azureArm,
    isModularLibrary: model.options?.isModularLibrary ?? false,
    azureSdkForJs: model.options?.azureSdkForJs
  };

  let packageInfo: Record<string, any> = buildFlavorlessPackage(config);

  const extendedConfig = {
    ...config,
    clientFilePaths: [getClientFilePath(model)],
    hasLro: hasPollingOperations(model),
    monorepoPackageDirectory: model.options?.azureOutputDirectory,
    specSource: model.options?.sourceFrom ?? "TypeSpec",
    dependencies,
    clientContextPaths
  };

  if (isAzureMonorepoPackage(model)) {
    packageInfo = buildAzureMonorepoPackage(extendedConfig);
  }

  if (isAzureStandalonePackage(model)) {
    packageInfo = buildAzureStandalonePackage(extendedConfig);
  }

  const project = new Project();
  const filePath = "package.json";

  if (!packageInfo) {
    return;
  }

  const packageFile = project.createSourceFile(
    filePath,
    JSON.stringify(packageInfo, null, 2),
    {
      overwrite: true
    }
  );
  return {
    path: filePath,
    content: packageFile.getFullText()
  };
}

/**
 * Automatically updates the package.json to keep it consistent with what the TypeSpec emitter
 * would generate. For Azure TypeSpec monorepo packages this compares the existing dependencies
 * with the canonical set produced by `getAzureMonorepoDependencies` and merges any missing or
 * outdated entries. For standalone Azure packages the function handles LRO dependency additions
 * and migrates @azure/core-client → @azure-rest/core-client when moving from Swagger to TypeSpec.
 * Also updates tshy.exports when a new export map is provided.
 */
export function updatePackageFile(
  model: RLCModel,
  existingFilePathOrContent: string | Record<string, any>,
  { exports }: PackageFileOptions = {}
) {
  const hasLro = hasPollingOperations(model);
  const isAzure = isAzurePackage(model);
  const isMonorepo = isAzureMonorepoPackage(model);
  const specSource = model.options?.sourceFrom ?? "TypeSpec";
  const needsExportsUpdate = exports;
  // For Azure TypeSpec monorepo packages compare against the canonical deps.
  const needsMonorepoDepMigration = isMonorepo && specSource === "TypeSpec";
  // LRO and core-client migrations apply to non-monorepo-TypeSpec Azure packages.
  // Monorepo TypeSpec packages use the canonical comparison below which already
  // covers LRO deps and the @azure/core-client → @azure-rest/core-client migration.
  const needsLroUpdate = isAzure && hasLro && !needsMonorepoDepMigration;
  const mightNeedCoreClientMigration =
    isAzure && !isMonorepo && specSource === "TypeSpec";

  // Early return if nothing needs to be updated
  if (
    !needsLroUpdate &&
    !needsExportsUpdate &&
    !mightNeedCoreClientMigration &&
    !needsMonorepoDepMigration
  ) {
    return;
  }

  let packageInfo;
  if (typeof existingFilePathOrContent === "string") {
    let packageFile: SourceFile;
    try {
      const project = new Project();
      packageFile = project.addSourceFileAtPath(existingFilePathOrContent);
    } catch (e) {
      // If the file doesn't exist, we don't need to update it.
      return;
    }
    packageInfo = JSON.parse(packageFile.getFullText());
  } else {
    packageInfo = existingFilePathOrContent;
  }

  let hasChanges = false;

  // Update tshy.exports if exports are provided and tshy exists
  if (needsExportsUpdate && packageInfo.tshy) {
    const newTshy = getTshyConfig({
      exports,
      azureSdkForJs: model.options?.azureSdkForJs
    } as PackageCommonInfoConfig);
    packageInfo.tshy.exports = newTshy.exports;
    hasChanges = true;
  }

  // Update LRO dependencies for standalone Azure packages
  if (needsLroUpdate) {
    packageInfo.dependencies = {
      ...packageInfo.dependencies,
      "@azure/core-lro": "^3.1.0",
      "@azure/abort-controller": "^2.1.2"
    };
    hasChanges = true;
  }

  // Migrate @azure/core-client → @azure-rest/core-client for standalone Azure TypeSpec packages
  if (
    mightNeedCoreClientMigration &&
    packageInfo.dependencies?.["@azure/core-client"]
  ) {
    const { "@azure/core-client": _removed, ...remainingDeps } =
      packageInfo.dependencies;
    packageInfo.dependencies = {
      ...remainingDeps,
      "@azure-rest/core-client": "^2.3.1"
    };
    hasChanges = true;
  }

  // For Azure TypeSpec monorepo packages: compare existing deps with the canonical set
  // produced by getAzureMonorepoDependencies and merge any missing or outdated entries.
  if (needsMonorepoDepMigration) {
    const canonical = getAzureMonorepoDependencies({
      // Fields used by getAzureMonorepoDependencies: hasLro, withTests, and specSource.
      // The other required fields (name, version, description, etc.) are not used
      // by that function and are set to safe defaults.
      name: "",
      version: "",
      description: "",
      moduleKind: "esm",
      withTests: model.options?.generateTest === true,
      withSamples: false,
      clientFilePaths: [],
      hasLro,
      specSource: "TypeSpec"
    });

    const existingDeps = packageInfo.dependencies ?? {};
    const existingDevDeps = packageInfo.devDependencies ?? {};

    // Needs update if legacy @azure/core-client is present, or if any canonical key
    // is missing from (or has a different value in) the existing dependencies.
    const depsNeedUpdate =
      "@azure/core-client" in existingDeps ||
      Object.entries(canonical.dependencies).some(
        ([k, v]) => existingDeps[k] !== v
      );
    const devDepsNeedUpdate = Object.entries(canonical.devDependencies).some(
      ([k, v]) => existingDevDeps[k] !== v
    );

    if (depsNeedUpdate || devDepsNeedUpdate) {
      // Remove legacy @azure/core-client and overlay canonical deps onto existing.
      // Existing keys that are not in canonical are preserved.
      const { "@azure/core-client": _removed, ...remainingDeps } = existingDeps;
      packageInfo.dependencies = { ...remainingDeps, ...canonical.dependencies };
      packageInfo.devDependencies = {
        ...existingDevDeps,
        ...canonical.devDependencies
      };
      hasChanges = true;
    }
  }

  if (!hasChanges) {
    return;
  }

  return {
    path: "package.json",
    content: JSON.stringify(packageInfo, null, 2)
  };
}

function getPackageVersion(model: RLCModel): string {
  return model.options?.packageDetails?.version ?? "1.0.0-beta.1";
}

function getDescription(model: RLCModel): string {
  const description = model.options?.packageDetails?.description;
  if (!description) {
    return `A generated SDK for ${model.libraryName}.`;
  }
  return description;
}

function getClientFilePath(model: RLCModel) {
  const { srcPath } = model;
  const sdkReletivePart = getRelativePartFromSrcPath(srcPath);
  const clientFilename = normalizeName(model.libraryName, NameType.File);
  return sdkReletivePart
    ? `src/${sdkReletivePart}/${clientFilename}.ts`
    : `src/${clientFilename}.ts`;
}
