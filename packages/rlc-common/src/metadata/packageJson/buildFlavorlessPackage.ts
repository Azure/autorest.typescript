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
    devDependencies: {
      ...getCommonPackageDevDependencies(config),
      "@microsoft/api-extractor": "^7.40.3",
      rimraf: "^5.0.5",
      mkdirp: "^3.0.1"
    },
    dependencies: {
      ...commonPackageDependencies,
      "@typespec/ts-http-runtime": "0.1.0"
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
