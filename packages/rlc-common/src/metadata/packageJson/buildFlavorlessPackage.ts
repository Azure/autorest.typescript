// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PackageCommonInfoConfig,
  getPackageCommonInfo,
  getCommonPackageScripts,
  getCommonPackageDevDependencies,
  commonPackageDependencies
} from "./packageCommon.js";

/**
 * Builds the package.json for a flavorless package.
 */
export function buildFlavorlessPackage(config: PackageCommonInfoConfig) {
  const packageInfo = {
    ...getFlavorlessPackageInfo(config),
    scripts: getFlavorlessScripts(config),
    devDependencies: getCommonPackageDevDependencies(config),
    dependencies: {
      ...commonPackageDependencies,
      "@typespec/ts-http-runtime": "1.0.0-alpha.20240314.2"
    }
  };

  return packageInfo;
}

function getFlavorlessPackageInfo(
  config: PackageCommonInfoConfig
): Record<string, any> {
  const commonPackageInfo = getPackageCommonInfo(config);

  return {
    ...commonPackageInfo
  };
}

function getFlavorlessScripts(config: PackageCommonInfoConfig) {
  return {
    ...getCommonPackageScripts(config),
    ...getCjsScripts(config),
    ...getEsmScripts(config)
  };
}

function getCjsScripts({ moduleKind }: PackageCommonInfoConfig) {
  if (moduleKind !== "cjs") {
    return {};
  }

  return {
    build: "npm run clean && tsc && npm run extract-api"
  };
}

function getEsmScripts({ moduleKind }: PackageCommonInfoConfig) {
  if (moduleKind !== "esm") {
    return {};
  }

  return {
    build: "npm run clean && tshy && npm run extract-api"
  };
}
