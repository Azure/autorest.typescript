// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { NameType, normalizeName } from "../helpers/nameUtils.js";
import {
  hasPagingOperations,
  hasPollingOperations
} from "../helpers/operationHelpers.js";
import { getRelativePartFromSrcPath } from "../helpers/pathUtils.js";
import { RLCModel } from "../interfaces.js";

let hasPaging = false;
let hasLRO = false;
let clientFilePaths: string[] = [];

export function buildPackageFile(model: RLCModel, hasSamplesGenerated = false) {
  const generateMetadata = Boolean(model.options?.generateMetadata);
  if (!generateMetadata) {
    return;
  }
  const project = new Project();
  const filePath = "package.json";
  const packageJsonContents = restLevelPackage(model, hasSamplesGenerated);
  // return direclty if no content generated
  if (!packageJsonContents) {
    return;
  }

  const packageFile = project.createSourceFile(
    filePath,
    JSON.stringify(packageJsonContents),
    {
      overwrite: true
    }
  );
  return {
    path: filePath,
    content: packageFile.getFullText()
  };
}

/**
 * This function defines the REST Level client package.json file
 * or High Level Client
 */
function restLevelPackage(model: RLCModel, hasSamplesGenerated: boolean) {
  if (!model.options || !model.options.packageDetails) {
    return;
  }

  clientFilePaths.push(getClientFilePath(model));
  hasPaging = hasPaging || hasPagingOperations(model);
  hasLRO = hasLRO || hasPollingOperations(model);

  const {
    packageDetails,
    generateTest,
    generateSample,
    azureOutputDirectory,
    azureSdkForJs,
    isCadlTest,
    sourceFrom,
    multiClient,
    batch
  } = model.options;
  if (
    multiClient &&
    batch &&
    batch.length > 1 &&
    clientFilePaths.length < batch.length
  ) {
    return;
  }

  const clientPackageName = packageDetails.name;
  let apiRefUrlQueryParameter: string = "";
  if (packageDetails.version.includes("beta")) {
    apiRefUrlQueryParameter = "?view=azure-node-preview";
  }

  const packageInfo: Record<string, any> = {
    name: `${packageDetails.name}`,
    "sdk-type": "client",
    author: "Microsoft Corporation",
    version: `${packageDetails.version}`,
    description:
      `${packageDetails.description}` ||
      `A generated SDK for ${model.libraryName}.`,
    keywords: ["node", "azure", "cloud", "typescript", "browser", "isomorphic"],
    license: "MIT",
    main: "dist/index.js",
    module: generateTest ? "./dist-esm/src/index.js" : "./dist-esm/index.js",
    types: `./types/${packageDetails.nameWithoutScope}.d.ts`,
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
    engines: {
      node: ">=14.0.0"
    },
    scripts: {
      audit:
        "node ../../../common/scripts/rush-audit.js && rimraf node_modules package-lock.json && npm i --package-lock-only 2>&1 && npm audit",
      "build:browser": "echo skipped.",
      "build:node": "echo skipped.",
      "build:samples": "echo skipped.",
      "build:test": "echo skipped.",
      "build:debug": "echo skipped.",
      "check-format": `prettier --list-different --config ../../../.prettierrc.json --ignore-path ../../../.prettierignore "src/**/*.ts" "*.{js,json}" ${appendPathWhenFormat(
        generateTest,
        generateSample
      )}`,
      clean:
        "rimraf dist dist-browser dist-esm test-dist temp types *.tgz *.log",
      "execute:samples": "echo skipped",
      "extract-api":
        "rimraf review && mkdirp ./review && api-extractor run --local",
      format: `prettier --write --config ../../../.prettierrc.json --ignore-path ../../../.prettierignore "src/**/*.ts" "*.{js,json}" ${appendPathWhenFormat(
        generateTest,
        generateSample
      )}`,
      "generate:client":
        sourceFrom === "Swagger"
          ? "autorest --typescript swagger/README.md && npm run format"
          : "echo skipped",
      "integration-test:browser": "echo skipped",
      "integration-test:node": "echo skipped",
      "integration-test": "echo skipped",
      "lint:fix": `eslint package.json api-extractor.json src ${appednPathWhenLint(
        generateTest
      )} --ext .ts --fix --fix-type [problem,suggestion]`,
      lint: `eslint package.json api-extractor.json src ${appednPathWhenLint(
        generateTest
      )} --ext .ts`,
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
      "@azure-rest/core-client": "^1.1.3",
      "@azure/core-rest-pipeline": "^1.8.0",
      "@azure/logger": "^1.0.0",
      tslib: "^2.2.0",
      ...(hasPaging && {
        "@azure/core-paging": "^1.5.0"
      }),
      ...(hasLRO && {
        "@azure/core-lro": "^2.5.3",
        "@azure/abort-controller": "^1.0.0"
      })
    },
    devDependencies: {
      "@microsoft/api-extractor": "^7.31.1",
      autorest: "latest",
      "@types/node": "^14.0.0",
      dotenv: "^16.0.0",
      eslint: "^8.0.0",
      mkdirp: "^2.1.2",
      prettier: "^2.5.1",
      rimraf: "^3.0.0",
      "source-map-support": "^0.5.9",
      typescript: "~5.0.0"
    }
  };

  if (azureOutputDirectory) {
    packageInfo.homepage = `https://github.com/Azure/azure-sdk-for-js/tree/main/${azureOutputDirectory}/README.md`;
  }

  if (azureSdkForJs) {
    packageInfo["//metadata"] = {
      constantPaths: []
    };
    clientFilePaths.forEach((path) => {
      packageInfo["//metadata"].constantPaths.push({
        path,
        prefix: "userAgentInfo"
      });
    });
    // Only generate this from Swagger spec
    if (sourceFrom === "Swagger") {
      packageInfo["//metadata"].constantPaths.push({
        path: "swagger/README.md",
        prefix: "package-version"
      });
    }
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
    packageInfo.devDependencies["@rollup/plugin-commonjs"] = "^24.0.0";
    packageInfo.devDependencies["@rollup/plugin-json"] = "^6.0.0";
    packageInfo.devDependencies["@rollup/plugin-multi-entry"] = "^6.0.0";
    packageInfo.devDependencies["@rollup/plugin-node-resolve"] = "^13.1.3";
    packageInfo.devDependencies["rollup"] = "^2.66.1";
    packageInfo.devDependencies["rollup-plugin-sourcemaps"] = "^0.6.3";
    packageInfo.devDependencies["uglify-js"] = "^3.4.9";
  }

  if (isCadlTest) {
    packageInfo["type"] = "module";
  }

  if (generateTest) {
    packageInfo.module = `./dist-esm/src/index.js`;
    packageInfo.devDependencies["@azure-tools/test-credential"] = "^1.0.0";
    packageInfo.devDependencies["@azure/identity"] = "^2.0.1";
    packageInfo.devDependencies["@azure-tools/test-recorder"] = "^3.0.0";
    packageInfo.devDependencies["mocha"] = "^7.1.1";
    packageInfo.devDependencies["@types/mocha"] = "^7.0.2";
    packageInfo.devDependencies["mocha-junit-reporter"] = "^1.18.0";
    packageInfo.devDependencies["cross-env"] = "^7.0.2";
    packageInfo.devDependencies["@types/chai"] = "^4.2.8";
    packageInfo.devDependencies["chai"] = "^4.2.0";
    packageInfo.devDependencies["cross-env"] = "^7.0.2";
    packageInfo.devDependencies["karma-chrome-launcher"] = "^3.0.0";
    packageInfo.devDependencies["karma-coverage"] = "^2.0.0";
    packageInfo.devDependencies["karma-env-preprocessor"] = "^0.1.1";
    packageInfo.devDependencies["karma-firefox-launcher"] = "^1.1.0";
    packageInfo.devDependencies["karma-junit-reporter"] = "^2.0.1";
    packageInfo.devDependencies["karma-mocha-reporter"] = "^2.2.5";
    packageInfo.devDependencies["karma-mocha"] = "^2.0.1";
    packageInfo.devDependencies["karma-source-map-support"] = "~1.4.0";
    packageInfo.devDependencies["karma-sourcemap-loader"] = "^0.3.8";
    packageInfo.devDependencies["karma"] = "^6.2.0";
    packageInfo.devDependencies["nyc"] = "^15.0.0";
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

  if (generateSample && hasSamplesGenerated) {
    packageInfo["//sampleConfiguration"] = {
      productName: model.options.serviceInfo?.title ?? model.libraryName,
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

function appendPathWhenFormat(
  generateTest?: boolean,
  generateSample?: boolean
) {
  let path = "";
  if (generateTest) {
    path = path + ` "test/**/*.ts"`;
  }
  if (generateSample) {
    path = path + ` "samples-dev/**/*.ts"`;
  }
  return path;
}

function appednPathWhenLint(generateTest?: boolean) {
  return generateTest ? "test" : "";
}

function getClientFilePath(model: RLCModel) {
  const { srcPath } = model;
  const sdkReletivePart = getRelativePartFromSrcPath(srcPath);
  const clientFilename = normalizeName(model.libraryName, NameType.File);
  return sdkReletivePart
    ? `src/${sdkReletivePart}/${clientFilename}.ts`
    : `src/${clientFilename}.ts`;
}
