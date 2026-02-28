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

function getEsmDevDependencies({
  moduleKind,
  azureSdkForJs
}: PackageCommonInfoConfig) {
  if (moduleKind !== "esm") {
    return {};
  }
  // Azure monorepo packages use warp (invoked via dev-tool), no tshy needed
  if (azureSdkForJs) {
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

  // Azure monorepo packages use warp instead of tshy
  if (config.azureSdkForJs) {
    return {
      type: "module",
      main: "./dist/commonjs/index.js",
      module: "./dist/esm/index.js",
      types: "./dist/commonjs/index.d.ts",
      browser: "./dist/browser/index.js",
      "react-native": "./dist/react-native/index.js",
      exports: resolveWarpExports(config.exports)
    };
  }

  return {
    tshy: getTshyConfig(config),
    type: "module",
    browser: "./dist/browser/index.js",
    "react-native": "./dist/react-native/index.js"
  };
}

/**
 * Resolve source-level exports to dist-level exports for warp.
 * Converts { ".": "./src/index.ts" } to the nested condition map with
 * browser/import/require conditions pointing to dist/ paths.
 */
export function resolveWarpExports(
  sourceExports?: Record<string, any>
): Record<string, any> {
  const exports: Record<string, any> = {};
  const allExports: Record<string, string> = {
    "./package.json": "./package.json",
    ".": "./src/index.ts",
    ...sourceExports
  };

  for (const [subpath, sourcePath] of Object.entries(allExports)) {
    // Pass-through entries (e.g. "./package.json": "./package.json")
    if (!/\.ts$/.test(sourcePath)) {
      exports[subpath] = sourcePath;
      continue;
    }

    // Convert source path to dist path: "./src/foo/index.ts" -> "foo/index"
    const relPath = sourcePath.replace(/^\.\/src\//, "").replace(/\.ts$/, "");

    exports[subpath] = {
      browser: {
        types: `./dist/browser/${relPath}.d.ts`,
        default: `./dist/browser/${relPath}.js`
      },
      "react-native": {
        types: `./dist/react-native/${relPath}.d.ts`,
        default: `./dist/react-native/${relPath}.js`
      },
      import: {
        types: `./dist/esm/${relPath}.d.ts`,
        default: `./dist/esm/${relPath}.js`
      },
      require: {
        types: `./dist/commonjs/${relPath}.d.ts`,
        default: `./dist/commonjs/${relPath}.js`
      }
    };
  }

  return exports;
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
    tshyConfig["project"] = "../../../tsconfig.src.build.json";
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
