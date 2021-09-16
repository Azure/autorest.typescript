// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { ClientDetails } from "../../models/clientDetails";
import { PackageDetails } from "../../models/packageDetails";
import { getAutorestOptions, getSession } from "../../autorestSession";
import { hasPagingOperations } from "../../utils/extractPaginationDetails";
import { hasPollingOperations } from "../../restLevelClient/helpers/hasPollingOperations";

export function generatePackageJson(
  project: Project,
  clientDetails?: ClientDetails
) {
  const {
    restLevelClient,
    generateMetadata,
    packageDetails
  } = getAutorestOptions();
  let packageJsonContents;

  if (!generateMetadata) {
    return;
  }

  if (!restLevelClient) {
    if (!clientDetails) {
      throw new Error(
        `Expected ClientDetails and PackageDetails to generate package.json`
      );
    }
    packageJsonContents = regularAutorestPackage(clientDetails, packageDetails);
  } else {
    packageJsonContents = restLevelPackage(packageDetails);
  }

  project.createSourceFile(
    "package.json",
    JSON.stringify(packageJsonContents),
    {
      overwrite: true
    }
  );
}

/**
 * This function defines the REST Level client package.json file
 * or High Level Client
 */
function restLevelPackage(packageDetails: PackageDetails) {
  const { azureArm } = getAutorestOptions();
  const { model } = getSession();
  const hasPaging = hasPagingOperations(model);
  const hasLRO = hasPollingOperations(model);
  return {
    name: `${packageDetails.name}`,
    "sdk-type": `${azureArm ? "mgmt" : "client"}`,
    version: `${packageDetails.version}`,
    description: `${packageDetails.description}`,
    main: "dist-esm/index.js",
    types: `./types/${packageDetails.nameWithoutScope}.d.ts`,
    scripts: {
      test: 'echo "Error: no test specified" && exit 1',
      build: "npm run clean && tsc --build && npm run extract-api",
      "extract-api": "mkdirp ./review && api-extractor run --local",
      pack: "npm pack 2>&1",
      lint: "echo skipped",
      audit: "echo skipped",
      clean: "echo skipped",
      "build:node": "echo skipped",
      "build:browser": "echo skipped",
      "build:test": "echo skipped",
      "build:samples": "echo skipped.",
      "check-format": "echo skipped",
      "execute:samples": "echo skipped",
      format: "echo skipped",
      "test:node": "echo skipped",
      "test:browser": "echo skipped",
      "unit-test": "echo skipped",
      "unit-test:node": "echo skipped",
      "unit-test:browser": "echo skipped",
      "integration-test:browser": "echo skipped",
      "integration-test:node": "echo skipped",
      "integration-test": "echo skipped",
      docs: "echo skipped"
    },
    keywords: [],
    author: "",
    license: "ISC",
    engines: {
      node: ">=12.0.0"
    },
    dependencies: {
      "@azure-rest/core-client": "1.0.0-beta.6",
      "@azure/core-auth": "^1.3.0",
      "@azure/core-rest-pipeline": "^1.0.4",
      ...(hasPaging && {
        "@azure/core-paging": "^1.2.0"
      }),
      ...(hasLRO && {
        "@azure/core-lro": "^2.2.0"
      })
    },
    devDependencies: {
      autorest: "latest",
      "@microsoft/api-extractor": "^7.13.2",
      "@types/node": "^14.14.22",
      dotenv: "^8.2.0",
      prettier: "^2.2.1",
      "ts-node": "^9.1.1",
      typescript: "~4.2.4",
      mkdirp: "^1.0.4"
    },
    sideEffects: false,
    autoPublish: true
  };
}

/**
 * This function defines the Regular Autorest package.json file
 * or High Level Client
 */
function regularAutorestPackage(
  clientDetails: ClientDetails,
  packageDetails: PackageDetails
) {
  const {
    srcPath,
    useCoreV2,
    tracingInfo,
    disablePagingAsyncIterators,
    azureArm,
    addCredentials,
    azureOutputDirectory,
    generateTest
  } = getAutorestOptions();
  const { model } = getSession();
  const hasLro = hasPollingOperations(model);
  const hasAsyncIterators =
    !disablePagingAsyncIterators && clientDetails.options.hasPaging;

  const packageInfo: Record<string, any> = {
    name: packageDetails.name,
    "sdk-type": `${azureArm ? "mgmt" : "client"}`,
    author: "Microsoft Corporation",
    description:
      packageDetails.description ||
      `A generated SDK for ${clientDetails.name}.`,
    version: packageDetails.version,
    engines: {
      node: ">=12.0.0"
    },
    dependencies: {
      ...(hasLro && { "@azure/core-lro": "^2.2.0" }),
      ...(hasLro && { "@azure/abort-controller": "^1.0.0" }),
      ...(hasAsyncIterators && { "@azure/core-paging": "^1.1.1" }),
      ...(!useCoreV2 && { "@azure/core-http": "^1.2.4" }),
      ...(useCoreV2 && { "@azure/core-client": "^1.0.0" }),
      ...(useCoreV2 && addCredentials && { "@azure/core-auth": "^1.3.0" }),
      ...(useCoreV2 && {
        "@azure/core-rest-pipeline": "^1.1.0"
      }),
      ...(tracingInfo && {
        "@azure/core-tracing": "1.0.0-preview.11",
        "@opentelemetry/api": "^0.10.2"
      }),

      tslib: "^2.2.0"
    },
    keywords: ["node", "azure", "typescript", "browser", "isomorphic"],
    license: "MIT",
    main: `./dist/index.js`,
    module: `./dist-esm/index.js`,
    types: `./types/${packageDetails.nameWithoutScope}.d.ts`,
    devDependencies: {
      "@microsoft/api-extractor": "7.7.11",
      "@rollup/plugin-commonjs": "11.0.2",
      "@rollup/plugin-json": "^4.0.0",
      "@rollup/plugin-multi-entry": "^3.0.0",
      "@rollup/plugin-node-resolve": "^8.0.0",
      mkdirp: "^1.0.4",
      rollup: "^1.16.3",
      "rollup-plugin-sourcemaps": "^0.4.2",
      typescript: "~4.2.0",
      "uglify-js": "^3.4.9"
    },
    // TODO: Calculate the SDK path for the package
    homepage: `https://github.com/Azure/azure-sdk-for-js/tree/main/${azureOutputDirectory}`,
    repository: {
      type: "git",
      url: "https://github.com/Azure/azure-sdk-for-js.git"
    },
    bugs: {
      url: "https://github.com/Azure/azure-sdk-for-js/issues"
    },
    files: [
      "dist/**/*.js",
      "dist/**/*.js.map",
      "dist/**/*.d.ts",
      "dist/**/*.d.ts.map",
      "dist-esm/**/*.js",
      "dist-esm/**/*.js.map",
      "dist-esm/**/*.d.ts",
      "dist-esm/**/*.d.ts.map",
      `${srcPath}/**/*.ts`,
      "README.md",
      "LICENSE",
      "rollup.config.js",
      "tsconfig.json",
      "review/*",
      "CHANGELOG.md",
      "types/*"
    ],
    scripts: {
      build:
        "npm run clean && tsc && rollup -c 2>&1 && npm run minify && mkdirp ./review && npm run extract-api",
      minify: `uglifyjs -c -m --comments --source-map "content='./dist/index.js.map'" -o ./dist/index.min.js ./dist/index.js`,
      prepack: "npm run build",
      pack: "npm pack 2>&1",
      "extract-api": "api-extractor run --local",
      lint: "echo skipped",
      audit: "echo skipped",
      clean: "echo skipped",
      "build:node": "echo skipped",
      "build:browser": "echo skipped",
      "build:test": "echo skipped",
      "build:samples": "echo skipped.",
      "check-format": "echo skipped",
      "execute:samples": "echo skipped",
      format: "echo skipped",
      test: "echo skipped",
      "test:node": "echo skipped",
      "test:browser": "echo skipped",
      "unit-test": "echo skipped",
      "unit-test:node": "echo skipped",
      "unit-test:browser": "echo skipped",
      "integration-test": "echo skipped",
      "integration-test:node": "echo skipped",
      "integration-test:browser": "echo skipped",
      docs: "echo skipped"
    },
    sideEffects: false,
    autoPublish: true
  };
  if (generateTest) {
    packageInfo.module = `./dist-esm/src/index.js`;
    packageInfo.devDependencies["@azure/identity"] = "2.0.0-beta.6";
    packageInfo.devDependencies["@azure-tools/test-recorder"] = "^1.0.0";
    packageInfo.devDependencies["mocha"] = "^7.1.1";
    packageInfo.devDependencies["cross-env"] = "^7.0.2";
    packageInfo.scripts["test"] = "npm run integration-test";
    packageInfo.scripts["unit-test"] =
      "npm run unit-test:node && npm run unit-test:browser";
    packageInfo.scripts["unit-test:node"] =
      "cross-env TEST_MODE=playback npm run integration-test:node";
    packageInfo.scripts["integration-test"] =
      "npm run integration-test:node && npm run integration-test:browser";
    packageInfo.scripts["integration-test:node"] =
      "mocha -r esm --require ts-node/register --timeout 1200000 --full-trace test/*.ts";
  }
  return packageInfo;
}
