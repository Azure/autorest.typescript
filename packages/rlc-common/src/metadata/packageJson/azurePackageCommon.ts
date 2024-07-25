// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PackageCommonInfoConfig,
  getCommonPackageDevDependencies
} from "./packageCommon.js";

export interface AzurePackageInfoConfig extends PackageCommonInfoConfig {
  hasLro: boolean;
  hasPaging: boolean;
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
  hasPaging,
  specSource
}: AzurePackageInfoConfig) {
  let dependencies: Record<string, string> = {
    "@azure-rest/core-client": specSource === "Swagger" ? "^1.4.0" : "^2.1.0",
    "@azure/core-auth": "^1.6.0",
    "@azure/core-rest-pipeline": "^1.5.0",
    "@azure/logger": "^1.0.0",
    tslib: "^2.6.2"
  };

  if (hasLro) {
    dependencies = {
      ...dependencies,
      "@azure/core-lro": "^3.0.0",
      "@azure/abort-controller": "^2.1.2"
    };
  }

  if (hasPaging) {
    dependencies = {
      ...dependencies,
      "@azure/core-paging": "^1.5.0"
    };
  }

  return dependencies;
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
    "cross-env": "^7.0.2",
    "@types/chai": "^4.2.8",
    chai: "^4.2.0",
    "karma-chrome-launcher": "^3.0.0",
    "karma-coverage": "^2.0.0",
    "karma-env-preprocessor": "^0.1.1",
    "karma-firefox-launcher": "^2.1.2",
    "karma-junit-reporter": "^2.0.1",
    "karma-mocha-reporter": "^2.2.5",
    "karma-mocha": "^2.0.1",
    "karma-source-map-support": "~1.4.0",
    "karma-sourcemap-loader": "^0.4.0",
    karma: "^6.2.0"
  };

  return {
    ...(withTests && testDevDependencies),
    "source-map-support": "^0.5.9",
    "uglify-js": "^3.4.9"
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
      "@vitest/browser": "^1.3.1",
      "@vitest/coverage-istanbul": "^1.3.1",
      playwright: "^1.41.2",
      vitest: "^1.3.1",
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
    "@azure/core-util": "^1.0.0",
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
