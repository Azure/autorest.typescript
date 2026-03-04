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
  getTshyConfig,
  resolveWarpExports
} from "./packageJson/packageCommon.js";
import { Project, SourceFile } from "ts-morph";
import { RLCModel } from "../interfaces.js";
import {
  AzureMonorepoInfoConfig,
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
 * Automatically updates the package.json with correct dependencies for Azure SDK.
 * Also updates tshy.exports if provided.
 * For Azure monorepo modular packages: compares existing dependencies against the canonical
 * set from getAzureMonorepoDependencies and updates any inconsistencies (missing or wrong version).
 * Also removes @azure/core-client (Swagger-only dep) when found in modular packages.
 */
export function updatePackageFile(
  model: RLCModel,
  existingFilePathOrContent: string | Record<string, any>,
  { exports, dependencies, clientContextPaths }: PackageFileOptions = {}
) {
  const hasLro = hasPollingOperations(model);
  const isAzure = isAzurePackage(model);
  const isModularLibrary = model.options?.isModularLibrary;
  const isAzureMonorepoLib = isAzureMonorepoPackage(model) && !!isModularLibrary;
  const needsLroUpdate = isAzure && hasLro && !isAzureMonorepoLib;
  const needsExportsUpdate = exports;
  const needsConstantPathsUpdate =
    clientContextPaths && clientContextPaths.length > 0;

  // Early return if nothing needs to be updated (defer monorepo dep check until file is read)
  if (
    !needsLroUpdate &&
    !needsExportsUpdate &&
    !needsConstantPathsUpdate &&
    !isAzureMonorepoLib &&
    !isModularLibrary
  ) {
    return;
  }

  let packageInfo;
  if (typeof existingFilePathOrContent === "string") {
    let packageFile: SourceFile;
    try {
      const project = new Project();
      packageFile = project.addSourceFileAtPath(existingFilePathOrContent);
    } catch (_e) {
      // If the file doesn't exist, we don't need to update it.
      return;
    }
    packageInfo = JSON.parse(packageFile.getFullText());
  } else {
    packageInfo = existingFilePathOrContent;
  }

  // For Azure monorepo modular packages: compare existing deps against the canonical
  // set from getAzureMonorepoDependencies, update any that are missing or have wrong versions.
  const monorepoDepUpdates: Record<string, string> = {};
  let hasSwaggerCoreDep = false;

  if (isAzureMonorepoLib) {
    const expectedConfig: AzureMonorepoInfoConfig = {
      name: getPackageName(model),
      version: getPackageVersion(model),
      description: getDescription(model),
      moduleKind: model.options?.moduleKind ?? "esm",
      withTests: model.options?.generateTest === true,
      withSamples: model.options?.generateSample === true,
      hasLro: hasPollingOperations(model),
      specSource: (model.options?.sourceFrom ?? "TypeSpec") as
        | "TypeSpec"
        | "Swagger",
      clientFilePaths: [getClientFilePath(model)],
      isModularLibrary: true,
      dependencies // format-specific dependencies (e.g. fast-xml-parser) to merge with canonical deps
    };

    const { dependencies: expectedDeps } =
      getAzureMonorepoDependencies(expectedConfig);
    const existingDeps: Record<string, string> = packageInfo.dependencies ?? {};

    for (const [dep, expectedVersion] of Object.entries(expectedDeps)) {
      if (existingDeps[dep] !== expectedVersion) {
        monorepoDepUpdates[dep] = expectedVersion;
      }
    }

    // @azure/core-client is a Swagger/autorest-only dep; remove it from modular packages
    if (existingDeps["@azure/core-client"]) {
      hasSwaggerCoreDep = true;
    }
  }

  const needsMonorepoDepsUpdate =
    Object.keys(monorepoDepUpdates).length > 0 || hasSwaggerCoreDep;

  // For non-azure-monorepo modular packages: simple @azure/core-client → @azure-rest/core-client migration
  const needsNonMonorepoMigration =
    isModularLibrary &&
    !isAzureMonorepoLib &&
    !!packageInfo.dependencies?.["@azure/core-client"];

  // Early return if nothing actually needs to be updated
  if (
    !needsLroUpdate &&
    !needsExportsUpdate &&
    !needsConstantPathsUpdate &&
    !needsMonorepoDepsUpdate &&
    !needsNonMonorepoMigration
  ) {
    return;
  }

  // Update exports based on build system (warp for monorepo, tshy for others)
  if (needsExportsUpdate) {
    if (model.options?.azureSdkForJs) {
      // Warp: update resolved exports in package.json
      packageInfo.exports = resolveWarpExports(exports);
    } else if (packageInfo.tshy) {
      // Tshy: update tshy.exports in package.json
      const newTshy = getTshyConfig({
        exports,
        azureSdkForJs: model.options?.azureSdkForJs
      } as PackageCommonInfoConfig);
      packageInfo.tshy.exports = newTshy.exports;
    }
  }

  // Update LRO dependencies for non-monorepo Azure packages
  // (For monorepo packages LRO deps are handled by the getAzureMonorepoDependencies comparison above)
  if (needsLroUpdate) {
    packageInfo.dependencies = {
      ...packageInfo.dependencies,
      "@azure/core-lro": "^3.1.0",
      "@azure/abort-controller": "^2.1.2"
    };
  }

  // Apply monorepo dep updates: missing or wrong-versioned deps from the canonical set
  if (needsMonorepoDepsUpdate) {
    packageInfo.dependencies = { ...packageInfo.dependencies };
    for (const [dep, version] of Object.entries(monorepoDepUpdates)) {
      packageInfo.dependencies[dep] = version;
    }
    // Remove @azure/core-client (Swagger/autorest-only dep)
    if (hasSwaggerCoreDep) {
      delete packageInfo.dependencies["@azure/core-client"];
    }
  }

  // For non-azure-monorepo modular packages: migrate @azure/core-client → @azure-rest/core-client
  if (needsNonMonorepoMigration) {
    delete packageInfo.dependencies["@azure/core-client"];
    if (!packageInfo.dependencies["@azure-rest/core-client"]) {
      packageInfo.dependencies["@azure-rest/core-client"] = "^2.3.1";
    }
  }

  // Update constantPaths metadata for Azure packages
  if (needsConstantPathsUpdate && isAzure && packageInfo["//metadata"]) {
    const metadata = packageInfo["//metadata"];
    // Filter out existing userAgentInfo entries
    const nonUserAgentPaths = (metadata.constantPaths || []).filter(
      (item: any) => item.prefix !== "userAgentInfo"
    );
    // Add new userAgentInfo entries from clientContextPaths
    const newUserAgentPaths = clientContextPaths!.map((path) => ({
      path: path,
      prefix: "userAgentInfo"
    }));
    metadata.constantPaths = [...nonUserAgentPaths, ...newUserAgentPaths];
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
