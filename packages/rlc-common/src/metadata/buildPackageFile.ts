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
export {
  getAzureMonorepoDependencies,
  AzureMonorepoInfoConfig
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
 * Automatically updates the package.json for an existing Azure SDK package.
 * - Migrates `@azure/core-client` → `@azure-rest/core-client` when found in dependencies.
 * - Updates `@azure/core-lro` from `^2.x` to `^3.1.0`.
 * - Adds LRO dependencies (`@azure/core-lro`, `@azure/abort-controller`) when the package has
 *   polling operations (for non-monorepo Azure packages).
 * - Updates exports (tshy or warp) when `exports` is provided.
 * - Updates `//metadata.constantPaths` when `clientContextPaths` is provided.
 */
export function updatePackageFile(
  model: RLCModel,
  existingFilePathOrContent: string | Record<string, any>,
  { exports, clientContextPaths }: PackageFileOptions = {}
) {
  const hasLro = hasPollingOperations(model);
  const isAzure = isAzurePackage(model);
  const isAzureMonorepoLib =
    isAzureMonorepoPackage(model) && !!model.options?.isModularLibrary;
  const needsLroUpdate = isAzure && hasLro && !isAzureMonorepoLib;
  const needsExportsUpdate = exports;
  const needsConstantPathsUpdate =
    clientContextPaths && clientContextPaths.length > 0;

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

  // Migrate AutoRest-specific dependency names and versions to their TypeSpec equivalents.
  const deps: Record<string, string> = { ...(packageInfo.dependencies ?? {}) };
  let depsChanged = false;

  // @azure/core-client is AutoRest-only; TypeSpec uses @azure-rest/core-client.
  if ("@azure/core-client" in deps) {
    delete deps["@azure/core-client"];
    if (!("@azure-rest/core-client" in deps)) {
      deps["@azure-rest/core-client"] = "^2.3.1";
    }
    depsChanged = true;
  }

  // core-lro v2.x was the AutoRest version; TypeSpec targets v3.x.
  if (deps["@azure/core-lro"]?.startsWith("^2.")) {
    deps["@azure/core-lro"] = "^3.1.0";
    depsChanged = true;
  }

  if (depsChanged) {
    packageInfo.dependencies = deps;
  }

  // Early return if nothing needs to be updated
  if (
    !needsLroUpdate &&
    !needsExportsUpdate &&
    !needsConstantPathsUpdate &&
    !depsChanged
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

  // Add LRO dependencies for non-monorepo Azure packages
  if (needsLroUpdate) {
    packageInfo.dependencies = {
      ...packageInfo.dependencies,
      "@azure/core-lro": "^3.1.0",
      "@azure/abort-controller": "^2.1.2"
    };
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
