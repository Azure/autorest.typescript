// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { ClientDetails } from "../../models/clientDetails";
import { PackageDetails } from "../../models/packageDetails";
import { getAutorestOptions, getSession } from "../../autorestSession";
import { hasPagingOperations } from "../../utils/extractPaginationDetails";
import { hasPollingOperations } from "../../restLevelClient/helpers/hasPollingOperations";
import { NameType, normalizeName } from "../../utils/nameUtils";
import { getSecurityInfoFromModel } from "../../utils/schemaHelpers";
import { hasRLCSamplesGenerated } from "../samples/rlcSampleGenerator";

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
  const {
    azureArm,
    generateTest,
    generateSample,
    azureOutputDirectory,
    azureSdkForJs
  } = getAutorestOptions();
  const { model } = getSession();
  const clientPackageName = packageDetails.name;
  let apiRefUrlQueryParameter: string = "";
  if (packageDetails.version.includes("beta")) {
    apiRefUrlQueryParameter = "?view=azure-node-preview";
  }
  const description = packageDetails.description;
  const hasPaging = hasPagingOperations(model);
  const hasLRO = hasPollingOperations(model);
  const packageInfo: Record<string, any> = {
    name: `${packageDetails.name}`,
    "sdk-type": "client",
    author: "Microsoft Corporation",
    version: `${packageDetails.version}`,
    description: `${packageDetails.description}`,
    keywords: ["node", "azure", "cloud", "typescript", "browser", "isomorphic"],
    license: "MIT",
    main: "dist/index.js",
    module: generateTest ? "./dist-esm/src/index.js" : "./dist-esm/index.js",
    types: `./types/${packageDetails.nameWithoutScope}.d.ts`,
    homepage: `https://github.com/Azure/azure-sdk-for-js/tree/main/${azureOutputDirectory}/README.md`,
    repository: "github:Azure/azure-sdk-for-js",
    bugs: {
      url: "https://github.com/Azure/azure-sdk-for-js/issues"
    },
    files: [
      "dist/",
      generateTest ? "dist-esm/src/" : "dist-esm/",
      `types/${packageDetails.nameWithoutScope}.d.ts`,
      "README.md",
      "LICENSE",
      "review/*"
    ],
    "//metadata": {
      constantPaths: [
        {
          path: "swagger/README.md",
          prefix: "package-version"
        }
      ]
    },
    engines: {
      node: ">=12.0.0"
    },
    scripts: {
      audit:
        "node ../../../common/scripts/rush-audit.js && rimraf node_modules package-lock.json && npm i --package-lock-only 2>&1 && npm audit",
      "build:browser": "echo skipped.",
      "build:node": "echo skipped.",
      "build:samples": "echo skipped.",
      "build:test": "echo skipped.",
      "build:debug": "echo skipped.",
      "check-format":
        'prettier --list-different --config ../../../.prettierrc.json --ignore-path ../../../.prettierignore "src/**/*.ts" "test/**/*.ts" "samples-dev/**/*.ts" "*.{js,json}"',
      clean:
        "rimraf dist dist-browser dist-esm test-dist temp types *.tgz *.log",
      "execute:samples": "echo skipped",
      "extract-api":
        "rimraf review && mkdirp ./review && api-extractor run --local",
      format:
        'prettier --write --config ../../../.prettierrc.json --ignore-path ../../../.prettierignore "src/**/*.ts" "test/**/*.ts" "samples-dev/**/*.ts" "*.{js,json}"',
      "generate:client":
        "autorest --typescript swagger/README.md && npm run format",
      "integration-test:browser": "echo skipped",
      "integration-test:node": "echo skipped",
      "integration-test": "echo skipped",
      "lint:fix":
        "eslint package.json api-extractor.json src test --ext .ts --fix --fix-type [problem,suggestion]",
      lint: "eslint package.json api-extractor.json src test --ext .ts",
      pack: "npm pack 2>&1",
      "test:browser": "echo skipped",
      "test:node": "echo skipped",
      test: 'echo "Error: no test specified" && exit 1',
      "unit-test": "echo skipped",
      "unit-test:node": "echo skipped",
      "unit-test:browser": "echo skipped"
    },
    sideEffects: false,
    autoPublish: false,
    dependencies: {
      "@azure/core-auth": "^1.3.0",
      "@azure-rest/core-client": "1.0.0-beta.10",
      "@azure/core-rest-pipeline": "^1.8.0",
      "@azure/logger": "^1.0.0",
      tslib: "^2.2.0",
      ...(hasPaging && {
        "@azure/core-paging": "^1.2.0"
      }),
      ...(hasLRO && {
        "@azure/core-lro": "^2.2.0"
      })
    },
    devDependencies: {
      "@microsoft/api-extractor": "7.18.11",
      autorest: "latest",
      "@types/node": "^12.0.0",
      dotenv: "^8.2.0",
      eslint: "^8.0.0",
      mkdirp: "^1.0.4",
      prettier: "2.2.1",
      rimraf: "^3.0.0",
      "source-map-support": "^0.5.9",
      typescript: "~4.6.0"
    }
  };

  if (azureSdkForJs) {
    packageInfo.scripts["build"] =
      "npm run clean && tsc -p . && dev-tool run bundle && mkdirp ./review && api-extractor run --local";
    packageInfo.scripts["build:debug"] =
      "tsc -p . && dev-tool run bundle && api-extractor run --local";
    packageInfo.scripts["build:browser"] = "tsc -p . && dev-tool run bundle";
    packageInfo.scripts["build:node"] = "tsc -p . && dev-tool run bundle";
    packageInfo.devDependencies["@azure/dev-tool"] = "^1.0.0";
    packageInfo.devDependencies["@azure/eslint-plugin-azure-sdk"] = "^3.0.0";
  } else {
    packageInfo.scripts["build"] =
      "npm run clean && tsc && rollup -c 2>&1 && npm run minify && mkdirp ./review && npm run extract-api";
    packageInfo.scripts[
      "minify"
    ] = `uglifyjs -c -m --comments --source-map "content='./dist/index.js.map'" -o ./dist/index.min.js ./dist/index.js`;
    packageInfo.devDependencies["@rollup/plugin-commonjs"] = "^21.0.1";
    packageInfo.devDependencies["@rollup/plugin-json"] = "^4.1.0";
    packageInfo.devDependencies["@rollup/plugin-multi-entry"] = "^4.1.0";
    packageInfo.devDependencies["@rollup/plugin-node-resolve"] = "^13.1.3";
    packageInfo.devDependencies["rollup"] = "^2.66.1";
    packageInfo.devDependencies["rollup-plugin-sourcemaps"] = "^0.6.3";
    packageInfo.devDependencies["uglify-js"] = "^3.4.9";
  }

  if (generateTest) {
    packageInfo.module = `./dist-esm/src/index.js`;
    packageInfo.devDependencies["@azure-tools/test-credential"] = "^1.0.0";
    packageInfo.devDependencies["@azure/identity"] = "^2.0.1";
    packageInfo.devDependencies["@azure-tools/test-recorder"] = "^2.0.0";
    packageInfo.devDependencies["mocha"] = "^7.1.1";
    packageInfo.devDependencies["mocha-junit-reporter"] = "^1.18.0";
    packageInfo.devDependencies["cross-env"] = "^7.0.2";
    packageInfo.devDependencies["@types/chai"] = "^4.2.8";
    packageInfo.devDependencies["chai"] = "^4.2.0";
    packageInfo.devDependencies["cross-env"] = "^7.0.2";
    packageInfo.devDependencies["karma-chrome-launcher"] = "^3.0.0";
    packageInfo.devDependencies["karma-coverage"] = "^2.0.0";
    packageInfo.devDependencies["karma-edge-launcher"] = "^0.4.2";
    packageInfo.devDependencies["karma-env-preprocessor"] = "^0.1.1";
    packageInfo.devDependencies["karma-firefox-launcher"] = "^1.1.0";
    packageInfo.devDependencies["karma-ie-launcher"] = "^1.0.0";
    packageInfo.devDependencies["karma-junit-reporter"] = "^2.0.1";
    packageInfo.devDependencies["karma-mocha-reporter"] = "^2.2.5";
    packageInfo.devDependencies["karma-mocha"] = "^2.0.1";
    packageInfo.devDependencies["karma-source-map-support"] = "~1.4.0";
    packageInfo.devDependencies["karma-sourcemap-loader"] = "^0.3.8";
    packageInfo.devDependencies["karma"] = "^6.2.0";
    packageInfo.devDependencies["nyc"] = "^14.0.0";
    packageInfo.devDependencies["source-map-support"] = "^0.5.9";
    packageInfo.scripts["test"] =
      "npm run clean && npm run build:test && npm run unit-test";
    packageInfo.scripts["test:node"] =
      "npm run clean && npm run build:test && npm run unit-test:node";
    packageInfo.scripts["test:browser"] =
      "npm run clean && npm run build:test && npm run unit-test:browser";
    packageInfo.scripts["build:browser"] =
      "tsc -p . && cross-env ONLY_BROWSER=true rollup -c 2>&1";
    packageInfo.scripts["build:node"] =
      "tsc -p . && cross-env ONLY_NODE=true rollup -c 2>&1";
    packageInfo.scripts["build:test"] = "tsc -p . && rollup -c 2>&1";
    packageInfo.scripts["unit-test"] =
      "npm run unit-test:node && npm run unit-test:browser";
    packageInfo.scripts["unit-test:node"] =
      'mocha -r esm --require ts-node/register --reporter ../../../common/tools/mocha-multi-reporter.js --timeout 1200000 --full-trace "test/{,!(browser)/**/}*.spec.ts"';
    packageInfo.scripts["unit-test:browser"] = "karma start --single-run";
    packageInfo.scripts["integration-test:browser"] =
      "karma start --single-run";
    packageInfo.scripts["integration-test:node"] =
      'nyc mocha -r esm --require source-map-support/register --reporter ../../../common/tools/mocha-multi-reporter.js --timeout 5000000 --full-trace "dist-esm/test/{,!(browser)/**/}*.spec.js"';
    packageInfo.scripts["integration-test"] =
      "npm run integration-test:node && npm run integration-test:browser";
    if (azureSdkForJs) {
      packageInfo.scripts["build:test"] = "tsc -p . && dev-tool run bundle";
      packageInfo.scripts["integration-test:browser"] =
        "dev-tool run test:browser";
      packageInfo.scripts["unit-test:browser"] = "dev-tool run test:browser";
      packageInfo.scripts["unit-test:node"] =
        "dev-tool run test:node-ts-input -- --timeout 1200000 --exclude 'test/**/browser/*.spec.ts' 'test/**/*.spec.ts'";
      packageInfo.scripts["integration-test:node"] =
        "dev-tool run test:node-js-input -- --timeout 5000000 'dist-esm/test/**/*.spec.js'";
    }

    packageInfo["browser"] = {
      "./dist-esm/test/public/utils/env.js":
        "./dist-esm/test/public/utils/env.browser.js"
    };
  }

  if (
    generateSample && hasRLCSamplesGenerated
  ) {
    packageInfo["//sampleConfiguration"] = {
      productName: description,
      productSlugs: ["azure"],
      disableDocsMs: true,
      apiRefLink: `https://docs.microsoft.com/javascript/api/${clientPackageName}${apiRefUrlQueryParameter}`
    };
    if (azureSdkForJs) {
      packageInfo.scripts["execute:samples"] =
        "dev-tool samples run samples-dev";
    }
  }

  return packageInfo;
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
      node: ">=12.0.0"
    },
    dependencies: {
      ...(hasLro && { "@azure/core-lro": "^2.2.0" }),
      ...(hasLro && { "@azure/abort-controller": "^1.0.0" }),
      ...(hasAsyncIterators && { "@azure/core-paging": "^1.2.0" }),
      ...(!useCoreV2 && { "@azure/core-http": "^2.0.0" }),
      ...(useCoreV2 && { "@azure/core-client": "^1.5.0" }),
      ...(useCoreV2 && addCredentials && { "@azure/core-auth": "^1.3.0" }),
      ...(useCoreV2 &&
        coreHttpCompatMode && { "@azure/core-http-compat": "^1.2.0" }),
      ...(useCoreV2 && {
        "@azure/core-rest-pipeline": "^1.8.0"
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
      "@microsoft/api-extractor": "7.18.11",
      "@rollup/plugin-commonjs": "^21.0.1",
      "@rollup/plugin-json": "^4.1.0",
      "@rollup/plugin-multi-entry": "^4.1.0",
      "@rollup/plugin-node-resolve": "^13.1.3",
      mkdirp: "^1.0.4",
      rollup: "^2.66.1",
      "rollup-plugin-sourcemaps": "^0.6.3",
      typescript: "~4.6.0",
      "uglify-js": "^3.4.9",
      rimraf: "^3.0.0"
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
      clean:
        "rimraf dist dist-browser dist-esm test-dist temp types *.tgz *.log",
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
  if (generateTest) {
    packageInfo.module = `./dist-esm/src/index.js`;
    packageInfo.devDependencies["@azure/identity"] = "^2.0.1";
    packageInfo.devDependencies["@azure-tools/test-recorder"] = "^2.0.0";
    packageInfo.devDependencies["@azure-tools/test-credential"] = "^1.0.0";
    packageInfo.devDependencies["mocha"] = "^7.1.1";
    packageInfo.devDependencies["@types/chai"] = "^4.2.8";
    packageInfo.devDependencies["chai"] = "^4.2.0";
    packageInfo.devDependencies["cross-env"] = "^7.0.2";
    packageInfo.scripts["test"] = "npm run integration-test";
    packageInfo.scripts["unit-test"] =
      "npm run unit-test:node && npm run unit-test:browser";
    packageInfo.scripts["unit-test:node"] =
      "cross-env TEST_MODE=playback npm run integration-test:node";
    packageInfo.scripts["integration-test"] =
      "npm run integration-test:node && npm run integration-test:browser";

    if (azureSdkForJs) {
      packageInfo.devDependencies["@azure/dev-tool"] = "^1.0.0";
      packageInfo.scripts["integration-test:node"] =
        "dev-tool run test:node-ts-input -- --timeout 1200000 'test/*.ts'";
    } else {
      packageInfo.scripts["integration-test:node"] =
        "mocha -r esm --require ts-node/register --timeout 1200000 --full-trace test/*.ts --reporter ../../../common/tools/mocha-multi-reporter.js";
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
