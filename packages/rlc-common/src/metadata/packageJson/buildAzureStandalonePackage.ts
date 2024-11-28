// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AzurePackageInfoConfig,
  getAzureCommonPackageInfo,
  getAzurePackageDependencies,
  getAzurePackageDevDependencies
} from "./azurePackageCommon.js";
import {
  getCommonPackageScripts,
  getPackageCommonInfo
} from "./packageCommon.js";

/**
 * Builds the package.json for an Azure package that won't be hosted in the azure-sdk-for-js repo.
 */
export function buildAzureStandalonePackage(config: AzurePackageInfoConfig) {
  const packageInfo = {
    ...getAzureStandalonePackageInfo(config),
    ...getAzureStandaloneDependencies(config),
    scripts: getAzureStandaloneScripts(config)
  };

  return packageInfo;
}

function getAzureStandalonePackageInfo(
  config: AzurePackageInfoConfig
): Record<string, any> {
  const commonPackageInfo = getPackageCommonInfo(config);

  return {
    ...commonPackageInfo,
    ...getAzureCommonPackageInfo(config)
  };
}

function getAzureStandaloneDependencies(
  config: AzurePackageInfoConfig
): Record<string, any> {
  return {
    dependencies: {
      ...getAzurePackageDependencies(config)
    },
    devDependencies: {
      ...getStandaloneDevDependencies(config),
      "@microsoft/api-extractor": "^7.40.3",
      rimraf: "^5.0.5",
      mkdirp: "^3.0.1"
    }
  };
}

function getStandaloneDevDependencies(config: AzurePackageInfoConfig) {
  return {
    ...getAzurePackageDevDependencies(config),
    ...getStandaloneCjsDevDependencies(config)
  };
}

function getStandaloneCjsDevDependencies(config: AzurePackageInfoConfig) {
  if (config.moduleKind !== "cjs") {
    return {};
  }

  return {
    "@rollup/plugin-commonjs": "^24.0.0",
    "@rollup/plugin-json": "^6.0.0",
    "@rollup/plugin-multi-entry": "^6.0.0",
    "@rollup/plugin-node-resolve": "^13.1.3",
    ...(config.moduleKind === "cjs" &&
      config.withTests && { "cross-env": "^7.0.2" }),
    rollup: "^2.66.1",
    "rollup-plugin-sourcemaps": "^0.6.3",
    "uglify-js": "^3.4.9"
  };
}

function getAzureStandaloneScripts(
  config: AzurePackageInfoConfig
): Record<string, any> {
  const testScripts = {
    "test:browser":
      "npm run clean && npm run build:test && npm run unit-test:browser",
    "test:node":
      "npm run clean && npm run build:test && npm run unit-test:node",
    test: "npm run clean && npm run build:test && npm run unit-test",
    "unit-test": "npm run unit-test:node && npm run unit-test:browser"
  };
  return {
    ...getCommonPackageScripts(config),
    clean:
      "rimraf --glob dist dist-browser dist-esm test-dist temp types *.tgz *.log",
    ...(config.withTests && testScripts),
    ...getCjsScripts(config),
    ...getEsmScripts(config)
  };
}

function getCjsScripts(config: AzurePackageInfoConfig): Record<string, any> {
  if (config.moduleKind !== "cjs") {
    return {};
  }

  const testScripts = {
    "build:test": "tsc -p . && rollup -c 2>&1",
    "integration-test:browser": "karma start --single-run",
    "integration-test:node":
      'nyc mocha -r esm --require source-map-support/register --timeout 5000000 --full-trace "dist-esm/test/{,!(browser)/**/}*.spec.js"',
    "unit-test:node":
      'cross-env TS_NODE_COMPILER_OPTIONS="{\\"module\\":\\"commonjs\\"}" mocha -r esm --require ts-node/register --timeout 1200000 --full-trace "test/{,!(browser)/**/}*.spec.ts"',
    "unit-test:browser": "karma start --single-run",
    "build:browser": "tsc -p . && cross-env ONLY_BROWSER=true rollup -c 2>&1",
    "build:node": "tsc -p . && cross-env ONLY_NODE=true rollup -c 2>&1"
  };

  return {
    build:
      "npm run clean && tsc && rollup -c 2>&1 && npm run minify && mkdirp ./review && npm run extract-api",
    ...(config.withTests && testScripts),
    minify:
      "uglifyjs -c -m --comments --source-map \"content='./dist/index.js.map'\" -o ./dist/index.min.js ./dist/index.js"
  };
}

function getEsmScripts(config: AzurePackageInfoConfig): Record<string, any> {
  if (config.moduleKind !== "esm") {
    return {};
  }

  const testScripts = {
    test: "npm run clean && tshy && npm run unit-test:node && npm run unit-test:browser && npm run integration-test",
    "test:node":
      "npm run clean && tshy && npm run unit-test:node && npm run integration-test:node",
    "test:browser":
      "npm run clean && npm run build:test && npm run unit-test:browser && npm run integration-test:browser",
    "integration-test:browser": "echo skipped",
    "integration-test:node": "echo skipped",
    "unit-test:node": "vitest -c vitest.config.ts",
    "unit-test:browser": "vitest -c vitest.browser.config.ts"
  };

  return {
    build: "npm run clean && tshy && npm run extract-api",
    ...(config.withTests && testScripts)
  };
}
