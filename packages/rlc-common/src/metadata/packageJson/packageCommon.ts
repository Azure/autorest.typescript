// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export interface PackageCommonInfoConfig {
  name: string;
  nameWithoutScope?: string;
  version: string;
  description: string;
  moduleKind: "esm" | "cjs";
  withTests: boolean;
  withSamples: boolean;
  exports?: Record<string, any>;
  dependencies?: Record<string, string>;
  azureArm?: boolean;
  isModularLibrary?: boolean;
}

/**
 * Common package.json config for a package.
 */
export function getPackageCommonInfo(config: PackageCommonInfoConfig) {
  const { name, version, description } = config;

  return {
    name,
    version,
    description,
    engines: {
      node: ">=18.0.0"
    },
    sideEffects: false,
    autoPublish: false,
    ...getEntryPointInformation(config)
  };
}

export const commonPackageDependencies = {
  tslib: "^2.6.2"
};

export function getCommonPackageDevDependencies(
  config: PackageCommonInfoConfig
) {
  return {
    "@microsoft/api-extractor": "^7.40.3",
    "@types/node": "^18.0.0",
    eslint: "^9.9.0",
    typescript: "~5.6.2",
    ...getEsmDevDependencies(config)
  };
}

function getEsmDevDependencies({ moduleKind }: PackageCommonInfoConfig) {
  if (moduleKind !== "esm") {
    return {};
  }
  return {
    tshy: "^2.0.0"
  };
}

function getEntryPointInformation(config: PackageCommonInfoConfig) {
  return {
    ...getCjsEntrypointInformation(config),
    ...getEsmEntrypointInformation(config)
  };
}

function getCjsEntrypointInformation({
  name,
  nameWithoutScope,
  moduleKind,
  withTests,
  withSamples
}: PackageCommonInfoConfig) {
  if (moduleKind !== "cjs") {
    return;
  }

  const types =
    withTests || withSamples
      ? `./types/src/${nameWithoutScope ?? name}.d.ts`
      : `./types/${nameWithoutScope ?? name}.d.ts`;
  const main = withTests || withSamples ? "dist/src/index.js" : "dist/index.js";
  return {
    main,
    module:
      withTests || withSamples
        ? "./dist-esm/src/index.js"
        : "./dist-esm/index.js",
    types
  };
}

function getEsmEntrypointInformation(config: PackageCommonInfoConfig) {
  if (config.moduleKind !== "esm") {
    return;
  }

  return { tshy: getTshyConfig(config), type: "module" };
}

export function getTshyConfig(config: PackageCommonInfoConfig) {
  const { exports = {} } = config;
  return {
    exports: {
      "./package.json": "./package.json",
      ".": "./src/index.ts",
      ...exports
    },
    dialects: ["esm", "commonjs"],
    esmDialects: ["browser", "react-native"],
    selfLink: false
  };
}

export function getCommonPackageScripts({
  withTests
}: PackageCommonInfoConfig) {
  const testScripts = {
    "unit-test": "npm run unit-test:node && npm run unit-test:browser",
    "unit-test:browser": "echo skipped",
    "unit-test:node": "echo skipped",
    "integration-test":
      "npm run integration-test:node && npm run integration-test:browser",
    "integration-test:browser": "echo skipped",
    "integration-test:node": "echo skipped"
  };

  return {
    clean:
      "rimraf --glob dist dist-browser dist-esm test-dist temp types *.tgz *.log",
    "extract-api":
      "rimraf review && mkdirp ./review && api-extractor run --local",
    pack: "npm pack 2>&1",
    lint: "eslint package.json api-extractor.json src",
    "lint:fix":
      "eslint package.json api-extractor.json src --fix --fix-type [problem,suggestion]",
    ...(withTests && testScripts)
  };
}
