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
import { buildAzureMonorepoPackage } from "./packageJson/buildAzureMonorepoPackage.js";
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
 * Automatically updates the package.json with correct paging and LRO dependencies for Azure SDK.
 * Also updates tshy.exports if provided.
 * When migrating from Swagger/autorest to TypeSpec, replaces @azure/core-client with @azure-rest/core-client.
 */
export function updatePackageFile(
  model: RLCModel,
  existingFilePathOrContent: string | Record<string, any>,
  { exports }: PackageFileOptions = {}
) {
  const hasLro = hasPollingOperations(model);
  const isAzure = isAzurePackage(model);
  const specSource = model.options?.sourceFrom ?? "TypeSpec";
  const needsLroUpdate = isAzure && hasLro;
  const needsExportsUpdate = exports;
  // For Azure TypeSpec packages, we might need to migrate @azure/core-client to @azure-rest/core-client
  const mightNeedCoreClientMigration = isAzure && specSource === "TypeSpec";

  // Early return if nothing needs to be updated
  if (!needsLroUpdate && !needsExportsUpdate && !mightNeedCoreClientMigration) {
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

  // Update LRO dependencies for Azure packages
  if (needsLroUpdate) {
    packageInfo.dependencies = {
      ...packageInfo.dependencies,
      "@azure/core-lro": "^3.1.0",
      "@azure/abort-controller": "^2.1.2"
    };
    hasChanges = true;
  }

  // Migrate @azure/core-client to @azure-rest/core-client when switching from Swagger/autorest to TypeSpec
  if (mightNeedCoreClientMigration && packageInfo.dependencies?.["@azure/core-client"]) {
    const { "@azure/core-client": _removed, ...remainingDeps } =
      packageInfo.dependencies;
    packageInfo.dependencies = {
      ...remainingDeps,
      "@azure-rest/core-client": "^2.3.1"
    };
    hasChanges = true;
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
