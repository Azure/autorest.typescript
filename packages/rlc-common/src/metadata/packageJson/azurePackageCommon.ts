// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PackageCommonInfoConfig,
  getCommonPackageDevDependencies
} from "./packageCommon.js";

export interface AzurePackageInfoConfig extends PackageCommonInfoConfig {
  hasLro: boolean;
  specSource: "Swagger" | "TypeSpec";
}

/**
 * Build the common package.json config for an Azure package.
 */
export function getAzureCommonPackageInfo(config: AzurePackageInfoConfig) {
  return {
    keywords: ["node", "azure", "cloud", "typescript", "browser", "isomorphic"],
    author: "Microsoft Corporation",
    license: "MIT",
    ...getAzureCjsCommonInfo(config),
    ...getAzureEsmCommonInfo(config)
  };
}

/**
 * Builds the common dependencies for an Azure package.
 */
export function getAzurePackageDependencies({
  hasLro,
  specSource,
  dependencies
}: AzurePackageInfoConfig) {
  let azureDependencies: Record<string, string> = {
    ...dependencies,
    "@azure-rest/core-client": specSource === "Swagger" ? "^1.4.0" : "^2.3.1",
    "@azure/core-auth": "^1.6.0",
    "@azure/core-rest-pipeline": "^1.5.0",
    "@azure/logger": "^1.0.0",
    tslib: "^2.6.2"
  };

  if (hasLro) {
    azureDependencies = {
      ...azureDependencies,
      "@azure/core-lro": "^3.1.0",
      "@azure/abort-controller": "^2.1.2"
    };
  }

  return azureDependencies;
}

function getAzureCjsCommonInfo({
  withTests,
  withSamples,
  name,
  nameWithoutScope,
  moduleKind
}: AzurePackageInfoConfig) {
  if (moduleKind !== "cjs") {
    return {};
  }

  return {
    files: [
      "dist/",
      withTests || withSamples ? "dist-esm/src/" : "dist-esm/",
      `types/${nameWithoutScope ?? name}.d.ts`,
      "README.md",
      "LICENSE",
      "review/*",
      "CHANGELOG.md"
    ]
  };
}

function getAzureEsmCommonInfo({ moduleKind }: AzurePackageInfoConfig) {
  if (moduleKind !== "esm") {
    return {};
  }
  return {
    files: ["dist", "README.md", "LICENSE", "review/*", "CHANGELOG.md"]
  };
}

function getAzurePackageCjsDevDependencies({
  moduleKind,
  withTests
}: AzurePackageInfoConfig) {
  if (moduleKind !== "cjs") {
    return {};
  }
  const testDevDependencies = {
    "@azure-tools/test-credential": "^1.1.0",
    "@azure-tools/test-recorder": "^3.0.0",
    nyc: "^15.1.0",
    mocha: "^10.0.0",
    "@types/mocha": "^10.0.0",
    "@types/chai": "^4.2.8",
    chai: "^4.2.0",
    "karma-chrome-launcher": "^3.0.0",
    "karma-coverage": "^2.0.0",
    "karma-env-preprocessor": "^0.1.1",
    "karma-firefox-launcher": "^2.1.3",
    "karma-junit-reporter": "^2.0.1",
    "karma-mocha-reporter": "^2.2.5",
    "karma-mocha": "^2.0.1",
    "karma-source-map-support": "~1.4.0",
    "karma-sourcemap-loader": "^0.4.0",
    karma: "^6.2.0"
  };

  return {
    ...(withTests && testDevDependencies),
    "source-map-support": "^0.5.9"
  };
}

function getAzurePackageEsmDevDependencies({
  moduleKind,
  withTests
}: AzurePackageInfoConfig) {
  if (moduleKind !== "esm") {
    return {};
  }

  let devDependencies: Record<string, string> = {};

  if (withTests) {
    devDependencies = {
      ...devDependencies,
      "@vitest/browser": "^2.0.5",
      "@vitest/coverage-istanbul": "^2.0.5",
      playwright: "^1.41.2",
      vitest: "^2.0.5",
      "@azure-tools/test-credential": "^2.0.0",
      "@azure-tools/test-recorder": "^4.0.0"
    };
  }

  return devDependencies;
}

export function getAzurePackageDevDependencies(config: AzurePackageInfoConfig) {
  const esmDevDependencies = getAzurePackageEsmDevDependencies(config);
  const cjsDevDependencies = getAzurePackageCjsDevDependencies(config);

  const testDevDependencies = {
    "@azure/identity": "^4.2.1"
  };

  return {
    dotenv: "^16.0.0",
    ...getCommonPackageDevDependencies(config),
    ...(config.withTests && testDevDependencies),
    ...(config.specSource === "Swagger" && { autorest: "latest" }),
    ...esmDevDependencies,
    ...cjsDevDependencies
  };
}
