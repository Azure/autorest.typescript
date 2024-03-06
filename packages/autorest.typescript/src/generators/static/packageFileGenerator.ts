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
      ...(hasLro && { "@azure/abort-controller": "^1.0.0" }),
      ...(hasAsyncIterators && { "@azure/core-paging": "^1.2.0" }),
      ...(!useCoreV2 && { "@azure/core-http": "^3.0.0" }),
      ...(useCoreV2 && { "@azure/core-client": "^1.7.0" }),
      ...(useCoreV2 && addCredentials && { "@azure/core-auth": "^1.6.0" }),
      ...(useCoreV2 &&
        coreHttpCompatMode && { "@azure/core-http-compat": "^1.2.0" }),
      ...(useCoreV2 && {
        "@azure/core-rest-pipeline": "^1.14.0"
      }),
      ...(tracingInfo && {
        "@azure/core-tracing": "^1.0.0"
      }),
      tslib: "^2.2.0"
    },
    keywords: ["node", "azure", "typescript", "browser", "isomorphic"],
    license: "MIT",
    main: `./dist/index.js`,
    module: `./dist-esm/index.js`,
    types: `./types/${packageDetails.nameWithoutScope}.d.ts`,
    devDependencies: {
      "@microsoft/api-extractor": "^7.31.1",
      mkdirp: "^2.1.2",
      typescript: "~5.3.3",
      "uglify-js": "^3.4.9",
      rimraf: "^5.0.0",
      dotenv: "^16.0.0"
    },
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
    autoPublish: true
  };
  if (azureOutputDirectory) {
    packageInfo.homepage = `https://github.com/Azure/azure-sdk-for-js/tree/main/${azureOutputDirectory}`;
  }

  if (azureSdkForJs) {
    packageInfo.devDependencies["@azure/dev-tool"] = "^1.0.0";
    packageInfo.scripts["build"] =
      "npm run clean && tsc && dev-tool run bundle && npm run minify && mkdirp ./review && npm run extract-api";
  } else {
    packageInfo.devDependencies["@rollup/plugin-commonjs"] = "^24.0.0";
    packageInfo.devDependencies["@rollup/plugin-json"] = "^6.0.0";
    packageInfo.devDependencies["@rollup/plugin-multi-entry"] = "^6.0.0";
    packageInfo.devDependencies["@rollup/plugin-node-resolve"] = "^13.1.3";
    packageInfo.devDependencies["rollup"] = "^2.66.1";
    packageInfo.devDependencies["rollup-plugin-sourcemaps"] = "^0.6.3";
  }

  if (generateTest) {
    packageInfo.module = `./dist-esm/src/index.js`;
    packageInfo.devDependencies["@azure/identity"] = "^4.0.1";
    packageInfo.devDependencies["@azure-tools/test-recorder"] = "^3.0.0";
    packageInfo.devDependencies["@azure-tools/test-credential"] = "^1.0.0";
    packageInfo.devDependencies["mocha"] = "^10.0.0";
    packageInfo.devDependencies["@types/mocha"] = "^10.0.0";
    packageInfo.devDependencies["esm"] = "^3.2.18";
    packageInfo.devDependencies["@types/chai"] = "^4.2.8";
    packageInfo.devDependencies["chai"] = "^4.2.0";
    packageInfo.devDependencies["cross-env"] = "^7.0.2";
    packageInfo.devDependencies["@types/node"] = "^18.0.0";
    packageInfo.devDependencies["ts-node"] = "^10.0.0";

    packageInfo.scripts["test"] = "npm run integration-test";
    packageInfo.scripts["unit-test"] =
      "npm run unit-test:node && npm run unit-test:browser";
    packageInfo.scripts["unit-test:node"] =
      "cross-env TEST_MODE=playback npm run integration-test:node";
    packageInfo.scripts["integration-test"] =
      "npm run integration-test:node && npm run integration-test:browser";

    if (azureSdkForJs) {
      packageInfo.scripts["integration-test:node"] =
        "dev-tool run test:node-ts-input -- --timeout 1200000 'test/*.ts'";
    } else {
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
      apiRefLink: `https://docs.microsoft.com/javascript/api/${clientPackageName}${apiRefUrlQueryParameter}`
    };
  }
  return packageInfo;
}
