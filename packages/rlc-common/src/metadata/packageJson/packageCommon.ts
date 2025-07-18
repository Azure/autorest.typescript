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
  azureSdkForJs?: boolean;
  //TODO should remove this after finish the release tool test
  shouldUsePnpmDep?: boolean;
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
      node: ">=20.0.0"
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
    "@types/node": "^20.0.0",
    eslint: "^9.9.0",
    typescript: "~5.8.2",
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

  return {
    tshy: getTshyConfig(config),
    type: "module",
    browser: "./dist/browser/index.js",
    "react-native": "./dist/react-native/index.js"
  };
}

export function getTshyConfig(config: PackageCommonInfoConfig) {
  const { exports = {} } = config;
  const tshyConfig: Record<string, any> = {
    exports: {
      "./package.json": "./package.json",
      ".": "./src/index.ts",
      ...exports
    },
    dialects: ["esm", "commonjs"],
    esmDialects: ["browser", "react-native"],
    selfLink: false
  };
  if (config.azureSdkForJs) {
    tshyConfig["project"] = "./tsconfig.src.json";
  }
  return tshyConfig;
}

export function getCommonPackageScripts() {
  return {
    clean:
      "rimraf --glob dist dist-browser dist-esm test-dist temp types *.tgz *.log",
    "extract-api":
      "rimraf review && mkdirp ./review && api-extractor run --local",
    pack: "npm pack 2>&1",
    lint: "eslint package.json api-extractor.json src",
    "lint:fix":
      "eslint package.json api-extractor.json src --fix --fix-type [problem,suggestion]"
  };
}
