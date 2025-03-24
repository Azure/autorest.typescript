// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { ClientDetails } from "../../models/clientDetails";
import { PackageDetails } from "../../models/packageDetails";
import { getAutorestOptions, getSession } from "../../autorestSession";
import { hasPollingOperations } from "../../restLevelClient/helpers/hasPollingOperations";
import { NameType, normalizeName } from "../../utils/nameUtils";
import { getSecurityInfoFromModel } from "../../utils/schemaHelpers";

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
    azureOutputDirectory,
    generateTest,
    generateSample,
    coreHttpCompatMode,
    azureSdkForJs
  } = getAutorestOptions();
  const { model } = getSession();
  const { addCredentials } = getSecurityInfoFromModel(model.security);
  const hasLro = hasPollingOperations(model);
  const hasAsyncIterators =
    !disablePagingAsyncIterators && clientDetails.options.hasPaging;
  const clientPackageName = packageDetails.name;
  let apiRefUrlQueryParameter: string = "";
  if (packageDetails.version.includes("beta")) {
    apiRefUrlQueryParameter = "?view=azure-node-preview";
  }
  const description = packageDetails.description;

  const packageInfo: Record<string, any> = {
    name: packageDetails.name,
    "sdk-type": `${azureArm ? "mgmt" : "client"}`,
    author: "Microsoft Corporation",
    description:
      packageDetails.description ||
      `A generated SDK for ${clientDetails.name}.`,
    version: packageDetails.version,
    engines: {
      node: ">=18.0.0"
    },
    dependencies: {
      ...(hasLro && { "@azure/core-lro": "^2.5.4" }),
      ...(hasLro && { "@azure/abort-controller": "^2.1.2" }),
      ...(hasAsyncIterators && { "@azure/core-paging": "^1.6.2" }),
      ...(useCoreV2 && { "@azure/core-client": "^1.9.2" }),
      ...(useCoreV2 && addCredentials && { "@azure/core-auth": "^1.9.0" }),
      ...(useCoreV2 && {
        "@azure/core-rest-pipeline": "^1.19.0"
      }),
      ...(tracingInfo && {
        "@azure/core-tracing": "^1.2.0"
      }),
      tslib: "^2.8.1"
    },
    keywords: ["node", "azure", "typescript", "browser", "isomorphic", "cloud"],
    license: "MIT",
    main: "./dist/commonjs/index.js",
    module: "./dist/esm/index.js",
    types: "./dist/commonjs/index.d.ts",
    devDependencies: {
      "@microsoft/api-extractor": "^7.40.3",
      mkdirp: "^3.0.1",
      typescript: "~5.7.2",
      rimraf: "^5.0.0",
      dotenv: "^16.0.0"
    },
    repository: "github:Azure/azure-sdk-for-js",
    bugs: {
      url: "https://github.com/Azure/azure-sdk-for-js/issues"
    },
    files: [
      "dist/",
      "README.md",
      "LICENSE",
      "review/*",
      "CHANGELOG.md",
    ],
    scripts: {
      build:
        "npm run clean && tsc && rollup -c 2>&1 && npm run minify && mkdirp ./review && npm run extract-api",
      minify: `uglifyjs -c -m --comments --source-map "content='./dist/index.js.map'" -o ./dist/index.min.js ./dist/index.js`,
      prepack: "npm run build",
      pack: "npm pack 2>&1",
      "extract-api": "api-extractor run --local",
      lint: "echo skipped",
      clean:
        "rimraf --glob dist dist-browser dist-esm test-dist temp types *.tgz *.log",
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
      "integration-test:browser": "echo skipped"
    },
    sideEffects: false,
    "//metadata": {
      constantPaths: [
        {
          path: `src/${normalizeName(clientDetails.name, NameType.File)}.ts`,
          prefix: "packageDetails"
        }
      ]
    },
    autoPublish: true,
    type: "module",
    tshy: {
      project: "./tsconfig.src.json",
      exports: {
        "./package.json": "./package.json",
        ".": "./src/index.ts",
      },
      dialects: ["esm", "commonjs"],
      esmDialects: ["browser", "react-native"],
      selfLink: false,
    },
    browser: "./dist/browser/index.js",
    "react-native": "./dist/react-native/index.js"
  };
  if (azureOutputDirectory) {
    packageInfo.homepage = `https://github.com/Azure/azure-sdk-for-js/tree/main/${azureOutputDirectory}`;
  }

  if (azureSdkForJs) {
    packageInfo.devDependencies["@azure/dev-tool"] = "^1.0.0";
    delete packageInfo.devDependencies["@microsoft/api-extractor"];
    delete packageInfo.devDependencies["rimraf"];
    delete packageInfo.devDependencies["mkdirp"];
    packageInfo.scripts["build"] =
      "npm run clean && dev-tool run build-package && dev-tool run extract-api";
    packageInfo.scripts["clean"] = "dev-tool run vendored rimraf --glob dist dist-browser dist-esm test-dist temp types *.tgz *.log";
    packageInfo.scripts["extract-api"] = "dev-tool run extract-api";
    packageInfo.scripts["update-snippets"] = "dev-tool run update-snippets";
    packageInfo.scripts["minify"] = `dev-tool run vendored uglifyjs -c -m --comments --source-map "content='./dist/index.js.map'" -o ./dist/index.min.js ./dist/index.js`;
    packageInfo.scripts["check-format"] = "dev-tool run vendored prettier --list-different --config ../../../.prettierrc.json --ignore-path ../../../.prettierignore \"src/**/*.{ts,cts,mts}\" \"test/**/*.{ts,cts,mts}\" \"*.{js,cjs,mjs,json}\" ";
    packageInfo.scripts["format"] = "dev-tool run vendored prettier --write --config ../../../.prettierrc.json --ignore-path ../../../.prettierignore \"src/**/*.{ts,cts,mts}\" \"test/**/*.{ts,cts,mts}\" \"*.{js,cjs,mjs,json}\" ";
  } else {
    packageInfo.devDependencies["@rollup/plugin-commonjs"] = "^24.0.0";
    packageInfo.devDependencies["@rollup/plugin-json"] = "^6.0.0";
    packageInfo.devDependencies["@rollup/plugin-multi-entry"] = "^6.0.0";
    packageInfo.devDependencies["@rollup/plugin-node-resolve"] = "^13.1.3";
    packageInfo.devDependencies["rollup"] = "^2.66.1";
    packageInfo.devDependencies["rollup-plugin-sourcemaps"] = "^0.6.3";
    packageInfo.devDependencies["uglify-js"] = "^3.4.9";
  }

  if (generateTest) {
    packageInfo.devDependencies["@azure/identity"] = "^4.6.0";
    packageInfo.devDependencies["@azure/logger"] = "^1.1.4";
    packageInfo.devDependencies["@azure-tools/test-recorder"] = "^4.1.0";
    packageInfo.devDependencies["@azure-tools/test-credential"] = "^2.0.0";
    packageInfo.devDependencies["@azure-tools/test-utils-vitest"] = "^1.0.0";
    packageInfo.devDependencies["@types/node"] = "^18.0.0";
    packageInfo.devDependencies["@vitest/browser"] = "^3.0.9";
    packageInfo.devDependencies["@vitest/coverage-istanbul"] = "^3.0.9";
    packageInfo.devDependencies["playwright"] = "^1.50.1";
    packageInfo.devDependencies["vitest"] = "^3.0.9";

    packageInfo.scripts["test"] = "npm run integration-test";
    packageInfo.scripts["unit-test"] =
      "npm run unit-test:node && npm run unit-test:browser";
    packageInfo.scripts["integration-test"] =
      "npm run integration-test:node && npm run integration-test:browser";

    if (azureSdkForJs) {
      packageInfo.scripts["unit-test:node"] =
        "dev-tool run test:vitest";
      packageInfo.scripts["integration-test:node"] =
        "dev-tool run test:vitest --esm";
    } else {
      packageInfo.devDependencies["cross-env"] = "^7.0.2";
      packageInfo.scripts["unit-test:node"] =
        "cross-env TEST_MODE=playback npm run integration-test:node";
      packageInfo.scripts["integration-test:node"] = `cross-env TS_NODE_COMPILER_OPTIONS="{\\\"module\\\":\\\"commonjs\\\"}" mocha -r esm --require ts-node/register --timeout 1200000 --full-trace test/*.ts`;
    }
  }
  if (
    generateSample &&
    clientDetails.samples &&
    clientDetails.samples.length > 0
  ) {
    packageInfo["//sampleConfiguration"] = {
      productName: description,
      productSlugs: ["azure"],
      disableDocsMs: true,
      apiRefLink: `https://learn.microsoft.com/javascript/api/${clientPackageName}${apiRefUrlQueryParameter}`
    };
  }
  return packageInfo;
}
