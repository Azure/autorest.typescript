// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { ClientDetails } from "../../models/clientDetails";
import { PackageDetails } from "../../models/packageDetails";
import { getAutorestOptions } from "../../autorestSession";

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
  return {
    name: `${packageDetails.name}`,
    "sdk-type": `${azureArm ? "mgmt" : "client"}`,
    version: `${packageDetails.version}`,
    description: `${packageDetails.description}`,
    main: "esm/index.js",
    types: "esm/index.d.ts",
    scripts: {
      test: 'echo "Error: no test specified" && exit 1',
      build: "tsc --build && npm run extract-api",
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
      prebuild: "echo skipped",
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
      "@azure-rest/core-client": "1.0.0-beta.4",
      "@azure/core-auth": "^1.3.0",
      "@azure/core-rest-pipeline": "^1.0.4"
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
    addCredentials
  } = getAutorestOptions();
  const hasLro = clientDetails.operationGroups.some(og =>
    og.operations.some(o => o.isLro)
  );
  const hasAsyncIterators =
    !disablePagingAsyncIterators && clientDetails.options.hasPaging;

  return {
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
      ...(hasLro && { "@azure/core-lro": "^1.0.5" }),
      ...(hasLro && { "@azure/abort-controller": "^1.0.0" }),
      ...(hasAsyncIterators && { "@azure/core-paging": "^1.1.1" }),
      ...(!useCoreV2 && { "@azure/core-http": "^1.2.4" }),
      ...(useCoreV2 && { "@azure/core-client": "^1.2.2" }),
      ...(useCoreV2 && addCredentials && { "@azure/core-auth": "^1.3.0" }),
      ...(useCoreV2 && {
        "@azure/core-rest-pipeline": "^1.1.1"
      }),
      ...(tracingInfo && {
        "@azure/core-tracing": "1.0.0-preview.11",
        "@opentelemetry/api": "^0.10.2"
      }),

      tslib: "^1.9.3"
    },
    keywords: ["node", "azure", "typescript", "browser", "isomorphic"],
    license: "MIT",
    main: `./dist/index.js`,
    module: `./esm/index.js`,
    types: `./esm/index.d.ts`,
    devDependencies: {
      "@microsoft/api-extractor": "7.9.10",
      "@rollup/plugin-commonjs": "11.0.2",
      "@rollup/plugin-json": "^4.0.0",
      "@rollup/plugin-multi-entry": "^3.0.0",
      "@rollup/plugin-node-resolve": "^8.0.0",
      mkdirp: "^1.0.4",
      rollup: "^1.16.3",
      "rollup-plugin-sourcemaps": "^0.4.2",
      "rollup-plugin-node-resolve": "^3.4.0",
      typescript: "^3.1.1",
      "uglify-js": "^3.4.9"
    },
    // TODO: Calculate the SDK path for the package
    homepage: `https://github.com/Azure/azure-sdk-for-js`,
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
      "esm/**/*.js",
      "esm/**/*.js.map",
      "esm/**/*.d.ts",
      "esm/**/*.d.ts.map",
      `${srcPath}/**/*.ts`,
      "README.md",
      "LICENSE",
      "rollup.config.js",
      "tsconfig.json",
      "review/*",
      "CHANGELOG.md"
    ],
    scripts: {
      build:
        "tsc && rollup -c rollup.config.js && npm run minify && mkdirp ./review &&  npm run extract-api",
      minify: `uglifyjs -c -m --comments --source-map "content='./dist/index.js.map'" -o ./dist/index.min.js ./dist/index.js`,
      prepack: "npm install && npm run build",
      pack: "npm pack 2>&1",
      "extract-api": "mkdirp ./review && api-extractor run --local",
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
      prebuild: "echo skipped",
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
    sideEffects: false,
    autoPublish: true
  };
}
