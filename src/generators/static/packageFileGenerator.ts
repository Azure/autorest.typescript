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
    packageJsonContents = restLevelPackage();
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
function restLevelPackage() {
  throw Error("Rest Level Client - Not yet implemented");
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
    disablePagingAsyncIterators
  } = getAutorestOptions();
  const hasLRO = clientDetails.operationGroups.some(og =>
    og.operations.some(o => o.isLRO)
  );
  const hasAsyncIterators =
    !disablePagingAsyncIterators && clientDetails.options.hasPaging;

  return {
    name: packageDetails.name,
    author: "Microsoft Corporation",
    description:
      packageDetails.description ||
      `A generated SDK for ${clientDetails.name}.`,
    version: packageDetails.version,
    dependencies: {
      ...(hasLRO && { "@azure/core-lro": "^1.0.5" }),
      ...(hasAsyncIterators && { "@azure/core-paging": "^1.1.1" }),
      ...(!useCoreV2 && { "@azure/core-http": "^1.2.4" }),
      ...(useCoreV2 && { "@azure/core-client": "^1.1.2" }),
      ...(useCoreV2 && {
        "@azure/core-rest-pipeline": "1.0.0-beta.2"
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
      "rollup.config.js",
      "tsconfig.json"
    ],
    scripts: {
      build:
        "tsc && rollup -c rollup.config.js && npm run minify && mkdirp ./review &&  npm run extract-api",
      minify: `uglifyjs -c -m --comments --source-map "content='./dist/index.js.map'" -o ./dist/index.min.js ./dist/index.js`,
      prepack: "npm install && npm run build",
      "extract-api": "api-extractor run --local"
    },
    sideEffects: false,
    autoPublish: true
  };
}
