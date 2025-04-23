// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AzurePackageInfoConfig,
  getAzureCommonPackageInfo
} from "./azurePackageCommon.js";
import {
  getCommonPackageScripts,
  getPackageCommonInfo
} from "./packageCommon.js";

export interface AzureMonorepoInfoConfig extends AzurePackageInfoConfig {
  monorepoPackageDirectory?: string;
  clientFilePaths: string[];
  clientContextPaths?: string[];
}

/**
 * Builds the package.json for an Azure package that will be hosted in the azure-sdk-for-js mono repo.
 */
export function buildAzureMonorepoPackage(config: AzureMonorepoInfoConfig) {
  const packageInfo = {
    ...getAzureMonorepoPackageInfo(config),
    ...getAzureMonorepoDependencies(config),
    scripts: getAzureMonorepoScripts(config),
    ...getSampleMetadata(config)
  };

  return packageInfo;
}

/**
 * Builds the dependencies for an Azure package that will be hosted in the azure-sdk-for-js mono repo.
 */
export function getAzureMonorepoDependencies(config: AzureMonorepoInfoConfig) {
  const { hasLro, dependencies, withTests } = config;

  const runtimeDeps = {
    ...dependencies,
    "@azure-rest/core-client": "workspace:*",
    ...(hasLro && { "@azure/abort-controller": "workspace:*" }),
    "@azure/core-auth": "workspace:*",
    ...(hasLro && { "@azure/core-lro": "workspace:*" }),
    "@azure/core-rest-pipeline": "workspace:*",
    "@azure/core-util": "workspace:*",
    "@azure/logger": "workspace:*",
    tslib: "catalog:"
  };

  const testDeps = withTests
    ? {
        "@vitest/browser": "catalog:testing",
        "@vitest/coverage-istanbul": "catalog:testing",
        dotenv: "catalog:testing",
        playwright: "catalog:testing",
        typescript: "catalog:",
        vitest: "catalog:testing"
      }
    : {
        typescript: "catalog:"
      };

  return {
    dependencies: runtimeDeps,
    devDependencies: {
      "@azure-tools/test-credential": "workspace:*",
      "@azure-tools/test-recorder": "workspace:*",
      "@azure-tools/test-utils-vitest": "workspace:*",
      "@azure/dev-tool": "workspace:*",
      "@azure/eslint-plugin-azure-sdk": "workspace:*",
      "@azure/identity": "catalog:internal",
      "@azure/logger": "workspace:*",
      "@types/node": "catalog:",
      ...testDeps
    }
  };
}

/**
 * Build the common package.json config for an Azure package that will be hosted in the azure-sdk-for-js mono repo.
 */
export function getAzureMonorepoPackageInfo(
  config: AzureMonorepoInfoConfig
): Record<string, any> {
  const commonPackageInfo = getPackageCommonInfo(config);

  return {
    ...commonPackageInfo,
    ...getAzureCommonPackageInfo(config),
    "sdk-type": `${config.azureArm ? "mgmt" : "client"}`,
    repository: "github:Azure/azure-sdk-for-js",
    bugs: {
      url: "https://github.com/Azure/azure-sdk-for-js/issues"
    },
    ...(config.monorepoPackageDirectory && {
      homepage: `https://github.com/Azure/azure-sdk-for-js/tree/main/${config.monorepoPackageDirectory}/README.md`
    }),
    prettier: "@azure/eslint-plugin-azure-sdk/prettier.json",
    "//metadata": getMetadataInfo(config)
  };
}

function getSampleMetadata({
  name,
  version,
  withSamples
}: AzureMonorepoInfoConfig) {
  if (!withSamples) {
    return {};
  }

  let apiRefUrlQueryParameter: string = "";
  if (version.includes("beta")) {
    apiRefUrlQueryParameter = "?view=azure-node-preview";
  }

  return {
    "//sampleConfiguration": {
      productName: name,
      productSlugs: ["azure"],
      disableDocsMs: true,
      apiRefLink: `https://learn.microsoft.com/javascript/api/${name}${apiRefUrlQueryParameter}`
    }
  };
}

function addSwaggerMetadata(
  metadata: Record<string, any>,
  specSource: "Swagger" | "TypeSpec"
) {
  if (specSource !== "Swagger") {
    return;
  }

  metadata.constantPaths.push({
    path: "swagger/README.md",
    prefix: "package-version"
  });
}

function getAzureMonorepoScripts(config: AzureMonorepoInfoConfig) {
  const esmScripts = getEsmScripts(config);
  const cjsScripts = getCjsScripts(config);
  return {
    ...getCommonPackageScripts(config),
    "build:samples": config.withSamples
      ? "tsc -p tsconfig.samples.json && dev-tool samples publish -f"
      : "echo skipped",
    "check-format": `dev-tool run vendored prettier --list-different --config ../../../.prettierrc.json --ignore-path ../../../.prettierignore "src/**/*.{ts,cts,mts}" "test/**/*.{ts,cts,mts}" "*.{js,cjs,mjs,json}" ${
      config.withSamples ? '"samples-dev/*.ts"' : ""
    }`,
    clean:
      "dev-tool run vendored rimraf --glob dist dist-browser dist-esm test-dist temp types *.tgz *.log",
    "execute:samples": config.withSamples
      ? "dev-tool samples run samples-dev"
      : "echo skipped",
    "extract-api":
      "dev-tool run vendored rimraf review && dev-tool run extract-api",
    format: `dev-tool run vendored prettier --write --config ../../../.prettierrc.json --ignore-path ../../../.prettierignore "src/**/*.{ts,cts,mts}" "test/**/*.{ts,cts,mts}" "*.{js,cjs,mjs,json}" ${
      config.withSamples ? '"samples-dev/*.ts"' : ""
    }`,
    "integration-test:browser": "echo skipped",
    "integration-test:node": "echo skipped",
    "generate:client": "echo skipped",
    "test:browser":
      "npm run clean && npm run build:test && npm run unit-test:browser && npm run integration-test:browser",
    "lint:fix":
      "eslint package.json api-extractor.json src test --fix --fix-type [problem,suggestion]",
    lint: "eslint package.json api-extractor.json src test",
    minify:
      "dev-tool run vendored uglifyjs -c -m --comments --source-map \"content='./dist/index.js.map'\" -o ./dist/index.min.js ./dist/index.js",
    ...esmScripts,
    ...cjsScripts,
    "update-snippets": "dev-tool run update-snippets"
  };
}

function getEsmScripts({ moduleKind }: AzureMonorepoInfoConfig) {
  if (moduleKind !== "esm") {
    return {};
  }

  return {
    "build:test":
      "npm run clean && dev-tool run build-package && dev-tool run build-test",
    build:
      "npm run clean && dev-tool run build-package && dev-tool run extract-api",
    "test:node":
      "npm run clean && dev-tool run build-package && npm run unit-test:node && npm run integration-test:node",
    test: "npm run clean && dev-tool run build-package && npm run unit-test:node && dev-tool run bundle && npm run unit-test:browser && npm run integration-test",
    "unit-test:browser":
      "npm run build:test && dev-tool run test:vitest --browser",
    "unit-test:node": "dev-tool run test:vitest"
  };
}

function getCjsScripts({ moduleKind }: AzureMonorepoInfoConfig) {
  if (moduleKind !== "cjs") {
    return {};
  }

  return {
    build:
      "npm run clean && tsc -p . && dev-tool run bundle && dev-tool run extract-api",
    "build:node":
      "tsc -p . && dev-tool run vendored cross-env ONLY_NODE=true rollup -c 2>&1",
    "build:test": "tsc -p . && dev-tool run bundle",
    "build:debug":
      "tsc -p . && dev-tool run bundle && dev-tool run extract-api",
    "integration-test:browser": "dev-tool run test:browser",
    "integration-test:node":
      "dev-tool run test:node-js-input -- --timeout 5000000 'dist-esm/test/**/*.spec.js'",
    "unit-test:node":
      "dev-tool run test:node-ts-input -- --timeout 1200000 --exclude 'test/**/browser/*.spec.ts' 'test/**/*.spec.ts'",
    "unit-test:browser": "dev-tool run test:browser"
  };
}

function getMetadataInfo(config: AzureMonorepoInfoConfig) {
  const metadata: Record<string, any> = {
    constantPaths: []
  };
  const paths = config.isModularLibrary
    ? config.clientContextPaths
    : config.clientFilePaths;
  addSwaggerMetadata(metadata, config.specSource);
  for (const path of paths ?? []) {
    metadata.constantPaths.push({
      path: path,
      prefix: "userAgentInfo"
    });
  }

  return metadata;
}
