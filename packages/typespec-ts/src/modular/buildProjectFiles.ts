import { Project } from "ts-morph";
import { ModularCodeModel } from "./modularCodeModel.js";
import { NameType, normalizeName } from "@azure-tools/rlc-common";
import {
  hasLROOperation,
  hasPagingOperation
} from "./helpers/operationHelpers.js";
import { getClassicalLayerPrefix } from "./helpers/namingHelpers.js";
import { PackageDetails } from "@azure-tools/rlc-common";

// =========== utils =============
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

function buildExportsForMultiClient(
  codeModel: ModularCodeModel,
  packageInfo: any
) {
  if (codeModel.clients.length > 1) {
    delete packageInfo.exports["./api"];
    delete packageInfo.exports["./models"];
    for (const client of codeModel.clients) {
      const subfolder = normalizeName(
        client.name.replace("Client", ""),
        NameType.File
      );
      packageInfo.exports[`./${subfolder}`] = {
        types: `./types/src/${subfolder}/index.d.ts`,
        import: `./dist-esm/src/${subfolder}/index.js`
      };
      packageInfo.exports[`./${subfolder}/api`] = {
        types: `./types/src/${subfolder}/api/index.d.ts`,
        import: `./dist-esm/src/${subfolder}/api/index.js`
      };
      packageInfo.exports[`./${subfolder}/models`] = {
        types: `./types/src/${subfolder}/models/index.d.ts`,
        import: `./dist-esm/src/${subfolder}/models/index.js`
      };
    }
  }
  if (codeModel.options.hierarchyClient) {
    for (const client of codeModel.clients) {
      for (const operationGroup of client.operationGroups) {
        if (operationGroup.namespaceHierarchies.length === 0) {
          continue;
        }
        const subfolder =
          codeModel.clients.length > 1
            ? normalizeName(client.name.replace("Client", ""), NameType.File)
            : undefined;
        const subApiPath = `api/${getClassicalLayerPrefix(
          operationGroup,
          NameType.File,
          "/"
        )}`;
        packageInfo.exports[
          `./${subfolder ? subfolder + "/" : ""}${subApiPath}`
        ] = {
          types: `./types/src/${
            subfolder ? subfolder + "/" : ""
          }${subApiPath}/index.d.ts`,
          import: `./dist-esm/src/${
            subfolder ? subfolder + "/" : ""
          }${subApiPath}/index.js`
        };
      }
    }
  }

  return packageInfo;
}

function buildPackageDetails(packageDetails?: PackageDetails) {
  return (
    packageDetails ?? {
      name: "@msinternal/unamedpackage",
      nameWithoutScope: "unamedpackage",
      version: "1.0.0-beta.1"
    }
  );
}

// Prepare package info without scripts and devDependencies and dependencies ect
function initPackageInfo(codeModel: ModularCodeModel) {
  let { packageDetails, generateTest, branded } = codeModel.options;
  branded = branded ?? true;
  generateTest = generateTest === true || generateTest === undefined;
  packageDetails = buildPackageDetails(packageDetails);
  const description = packageDetails.description
    ? packageDetails.description
    : `A generated SDK for ${codeModel.clients[0]?.name}.`;
  const packageInfo = {
    name: `${packageDetails.name}`,
    "sdk-type": "client",
    ...(branded
      ? {
          author: "Microsoft Corporation"
        }
      : {}),
    version: `${packageDetails.version}`,
    description,
    keywords: [
      "node",
      ...(branded ? ["azure", "cloud"] : []),
      "typescript",
      "browser",
      "isomorphic"
    ],
    license: "MIT",
    type: "module",
    main: "dist/index.js",
    module: "./dist-esm/src/index.js",
    types: `./types/${packageDetails.nameWithoutScope}.d.ts`,
    exports: {
      ".": {
        types: "./types/src/index.d.ts",
        require: "./dist/index.cjs",
        import: "./dist-esm/src/index.js"
      },
      "./api": {
        types: "./types/src/api/index.d.ts",
        import: "./dist-esm/src/api/index.js"
      },
      "./models": {
        types: "./types/src/models/index.d.ts",
        import: "./dist-esm/src/models/index.js"
      }
    },
    ...(branded
      ? {
          repository: "github:Azure/azure-sdk-for-js",
          bugs: {
            url: "https://github.com/Azure/azure-sdk-for-js/issues"
          }
        }
      : {}),
    files: [
      "dist/",
      generateTest && branded ? "dist-esm/src/" : "dist-esm/",
      `types/${packageDetails.nameWithoutScope}.d.ts`,
      "README.md",
      "LICENSE",
      "review/*"
    ],
    engines: {
      node: ">=18.0.0"
    }
  } as any;
  return packageInfo;
}

// =========== emit package.json =============
export function emitPackage(
  project: Project,
  metadataDir: string,
  codeModel: ModularCodeModel,
  hasSamplesGenerated = false
) {
  const packageJsonFile = project.createSourceFile(
    `${metadataDir}/package.json`,
    "",
    {
      overwrite: true
    }
  );
  const branded = codeModel.options.branded ?? true;
  const packageInfo = branded
    ? emitBrandedPackage(codeModel, hasSamplesGenerated)
    : emitNonBrandedPackage(codeModel);
  packageJsonFile.addStatements(JSON.stringify(packageInfo));
  return packageJsonFile;
}

function emitNonBrandedPackage(codeModel: ModularCodeModel) {
  const runtimeLibVersion =
    codeModel.runtimeImports?.commonFallback?.version ??
    "1.0.0-alpha.20231129.4";
  const packageInfo = {
    ...initPackageInfo(codeModel),
    scripts: {
      "check-format":
        'prettier --list-different --config ../../../.prettierrc.json --ignore-path ../../../.prettierignore "src/**/*.ts" "*.{js,json}" ',
      clean:
        "rimraf --glob dist dist-browser dist-esm test-dist temp types *.tgz *.log",
      "extract-api":
        "rimraf review && mkdirp ./review && api-extractor run --local",
      format:
        'prettier --write --config ../../../.prettierrc.json --ignore-path ../../../.prettierignore "src/**/*.ts" "*.{js,json}" ',
      "lint:fix": "echo skipped",
      lint: "echo skipped",
      pack: "npm pack 2>&1",
      test: 'echo "Error: no test specified" && exit 1',
      build:
        "npm run clean && tsc && rollup -c 2>&1 && npm run minify && mkdirp ./review && npm run extract-api",
      minify:
        "uglifyjs -c -m --comments --source-map \"content='./dist/index.js.map'\" -o ./dist/index.min.js ./dist/index.js"
    },
    sideEffects: false,
    autoPublish: false,
    dependencies: {
      tslib: "^2.2.0",
      "@typespec/ts-http-runtime": runtimeLibVersion
    },
    devDependencies: {
      "@microsoft/api-extractor": "^7.31.1",
      "@types/node": "^18.0.0",
      mkdirp: "^2.1.2",
      prettier: "^3.1.0",
      rimraf: "^5.0.0",
      "source-map-support": "^0.5.9",
      typescript: "~5.3.3",
      "@rollup/plugin-commonjs": "^24.0.0",
      "@rollup/plugin-json": "^6.0.0",
      "@rollup/plugin-multi-entry": "^6.0.0",
      "@rollup/plugin-node-resolve": "^13.1.3",
      rollup: "^2.66.1",
      "rollup-plugin-sourcemaps": "^0.6.3",
      "uglify-js": "^3.4.9"
    }
  } as any;
  buildExportsForMultiClient(codeModel, packageInfo);
  return packageInfo;
}

function emitBrandedPackage(
  codeModel: ModularCodeModel,
  hasSamplesGenerated: boolean
) {
  const hasLRO = hasLROOperation(codeModel, true),
    hasPaging = hasPagingOperation(codeModel, true);
  const { azureOutputDirectory, azureSdkForJs, sourceFrom, isModularLibrary } =
    codeModel.options;
  let { packageDetails, generateTest, generateSample } = codeModel.options;
  packageDetails = buildPackageDetails(packageDetails);
  // Take the undefined as true by default
  generateTest = generateTest === true || generateTest === undefined;
  generateSample =
    (generateSample === true || generateSample === undefined) &&
    hasSamplesGenerated;
  const clientPackageName = packageDetails.name;
  let apiRefUrlQueryParameter: string = "";
  packageDetails.version = packageDetails.version ?? "1.0.0-beta.1";
  if (packageDetails.version.includes("beta")) {
    apiRefUrlQueryParameter = "?view=azure-node-preview";
  }
  const packageInfo = {
    ...initPackageInfo(codeModel),
    scripts: {
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
        "rimraf --glob dist dist-browser dist-esm test-dist temp types *.tgz *.log",
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
      "@azure/core-auth": "^1.6.0",
      "@azure-rest/core-client": "^1.2.0",
      "@azure/core-rest-pipeline": "^1.14.0",
      "@azure/logger": "^1.0.0",
      tslib: "^2.2.0",
      ...(hasPaging && {
        "@azure/core-paging": "^1.5.0"
      }),
      ...(hasLRO && {
        "@azure/core-lro": "^2.5.4",
        "@azure/abort-controller": "^1.0.0"
      }),
      ...(isModularLibrary && {
        "@azure/core-util": "^1.4.0"
      })
    },
    devDependencies: {
      "@microsoft/api-extractor": "^7.31.1",
      autorest: "latest",
      "@types/node": "^18.0.0",
      dotenv: "^16.0.0",
      eslint: "^8.0.0",
      mkdirp: "^2.1.2",
      prettier: "^3.1.0",
      rimraf: "^5.0.0",
      "source-map-support": "^0.5.9",
      typescript: "~5.3.3"
    }
  } as any;

  if (azureOutputDirectory) {
    packageInfo["homepage"] =
      `https://github.com/Azure/azure-sdk-for-js/tree/main/${azureOutputDirectory}/README.md`;
  }

  if (azureSdkForJs) {
    packageInfo["//metadata"] = {
      constantPaths: []
    };
    // TODO: remember to put the userAgent path into metadata
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
    // azsdkjs repo use dev-tool to run vendored prettier
    const dtxPrettierCmd = "dev-tool run vendored ";
    packageInfo.scripts["check-format"] =
      dtxPrettierCmd + packageInfo.scripts["check-format"];
    packageInfo.scripts["format"] =
      dtxPrettierCmd + packageInfo.scripts["format"];
    delete packageInfo.devDependencies.prettier;
  } else {
    packageInfo.scripts["build"] =
      "npm run clean && tsc && rollup -c 2>&1 && npm run minify && mkdirp ./review && npm run extract-api";
    packageInfo.scripts["minify"] =
      `uglifyjs -c -m --comments --source-map "content='./dist/index.js.map'" -o ./dist/index.min.js ./dist/index.js`;
    packageInfo.devDependencies["@rollup/plugin-commonjs"] = "^24.0.0";
    packageInfo.devDependencies["@rollup/plugin-json"] = "^6.0.0";
    packageInfo.devDependencies["@rollup/plugin-multi-entry"] = "^6.0.0";
    packageInfo.devDependencies["@rollup/plugin-node-resolve"] = "^13.1.3";
    packageInfo.devDependencies["rollup"] = "^2.66.1";
    packageInfo.devDependencies["rollup-plugin-sourcemaps"] = "^0.6.3";
    packageInfo.devDependencies["uglify-js"] = "^3.4.9";
  }

  if (generateTest) {
    packageInfo.module = `./dist-esm/src/index.js`;
    packageInfo.devDependencies["@azure-tools/test-credential"] = "^1.0.0";
    packageInfo.devDependencies["@azure/identity"] = "^4.0.1";
    packageInfo.devDependencies["@azure-tools/test-recorder"] = "^3.0.0";
    packageInfo.devDependencies["mocha"] = "^10.0.0";
    packageInfo.devDependencies["@types/mocha"] = "^10.0.0";
    packageInfo.devDependencies["cross-env"] = "^7.0.2";
    packageInfo.devDependencies["@types/chai"] = "^4.2.8";
    packageInfo.devDependencies["chai"] = "^4.2.0";
    packageInfo.devDependencies["cross-env"] = "^7.0.2";
    packageInfo.devDependencies["karma-chrome-launcher"] = "^3.0.0";
    packageInfo.devDependencies["karma-coverage"] = "^2.0.0";
    packageInfo.devDependencies["karma-env-preprocessor"] = "^0.1.1";
    packageInfo.devDependencies["karma-firefox-launcher"] = "^2.1.2";
    packageInfo.devDependencies["karma-junit-reporter"] = "^2.0.1";
    packageInfo.devDependencies["karma-mocha-reporter"] = "^2.2.5";
    packageInfo.devDependencies["karma-mocha"] = "^2.0.1";
    packageInfo.devDependencies["karma-source-map-support"] = "~1.4.0";
    packageInfo.devDependencies["karma-sourcemap-loader"] = "^0.4.0";
    packageInfo.devDependencies["karma"] = "^6.2.0";
    packageInfo.devDependencies["c8"] = "^8.0.0";
    packageInfo.devDependencies["source-map-support"] = "^0.5.9";
    packageInfo.devDependencies["ts-node"] = "^10.0.0";
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
      'mocha --full-trace "test/{,!(browser)/**/}*.spec.ts"';
    packageInfo.scripts["unit-test:browser"] = "karma start --single-run";
    packageInfo.scripts["integration-test:browser"] =
      "karma start --single-run";
    packageInfo.scripts["integration-test:node"] =
      'nyc mocha --require source-map-support/register.js --timeout 5000000 --full-trace "dist-esm/test/{,!(browser)/**/}*.spec.js"';
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

    packageInfo["mocha"] = {
      extension: ["ts"],
      timeout: "1200000",
      loader: "ts-node/esm"
    };
  }

  if (generateSample) {
    packageInfo["//sampleConfiguration"] = {
      productName:
        codeModel.options.serviceInfo?.title ?? codeModel.clients[0]?.name,
      productSlugs: ["azure"],
      disableDocsMs: true,
      apiRefLink: `https://docs.microsoft.com/javascript/api/${clientPackageName}${apiRefUrlQueryParameter}`
    };
    if (azureSdkForJs) {
      packageInfo.scripts["execute:samples"] =
        "dev-tool samples run samples-dev";
    }
  }

  buildExportsForMultiClient(codeModel, packageInfo);
  return packageInfo;
}

// =========== emit tsconfig.json =============
const modularTsConfigInSDKRepo: Record<string, any> = {
  extends: "../../../tsconfig.package",
  compilerOptions: {
    outDir: "./dist-esm",
    declarationDir: "./types",
    module: "NodeNext",
    moduleResolution: "NodeNext",
    lib: ["esnext", "dom"],
    rootDir: "."
  },
  "ts-node": { esm: true },
  include: ["src/**/*.ts"]
};

const modularTsConfigNotInSDKRepo: Record<string, any> = {
  compilerOptions: {
    target: "ES2017",
    module: "NodeNext",
    lib: ["esnext", "dom"],
    declaration: true,
    declarationMap: true,
    inlineSources: true,
    sourceMap: true,
    importHelpers: true,
    strict: true,
    alwaysStrict: true,
    noUnusedLocals: true,
    noUnusedParameters: true,
    noImplicitReturns: true,
    noFallthroughCasesInSwitch: true,
    forceConsistentCasingInFileNames: true,
    moduleResolution: "NodeNext",
    allowSyntheticDefaultImports: true,
    esModuleInterop: true,
    outDir: "./dist-esm",
    declarationDir: "./types",
    rootDir: "."
  },
  "ts-node": { esm: true },
  include: ["./src/**/*.ts"]
};

export function emitTsConfig(
  project: Project,
  srcPath: string,
  codeModel: ModularCodeModel,
  hasSamplesGenerated = false
) {
  const tsConfigFile = project.createSourceFile(
    `${srcPath}/tsconfig.json`,
    "",
    {
      overwrite: true
    }
  );

  const { packageDetails, azureSdkForJs } = codeModel.options || {};
  let { generateTest, generateSample } = codeModel.options || {};
  const isBranded = codeModel.options?.branded ?? true;
  // Take the undefined as true by default
  generateTest = generateTest === true || generateTest === undefined;
  generateSample =
    (generateSample === true || generateSample === undefined) &&
    hasSamplesGenerated;
  const clientPackageName = packageDetails?.name ?? "@msinternal/unamedpackage";
  const tsConfig = (
    !isBranded
      ? modularTsConfigNotInSDKRepo
      : azureSdkForJs
        ? modularTsConfigInSDKRepo
        : modularTsConfigNotInSDKRepo
  ) as any;

  if (generateTest && isBranded) {
    tsConfig.include.push("./test/**/*.ts");
  }
  if (generateSample && isBranded) {
    tsConfig.include.push("samples-dev/**/*.ts");
    tsConfig.compilerOptions["paths"] = {};
    tsConfig.compilerOptions["paths"][clientPackageName] = ["./src/index"];
  }

  tsConfigFile.addStatements(JSON.stringify(tsConfig));

  return tsConfigFile;
}
