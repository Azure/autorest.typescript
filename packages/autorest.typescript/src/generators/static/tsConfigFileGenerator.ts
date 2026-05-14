// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { getAutorestOptions } from "../../autorestSession";

const highLevelTsConfig: Record<string, any> = {
  compilerOptions: {
    module: "es6",
    moduleResolution: "node",
    strict: true,
    target: "es6",
    sourceMap: true,
    declarationMap: true,
    esModuleInterop: true,
    allowSyntheticDefaultImports: true,
    forceConsistentCasingInFileNames: true,
    lib: ["es6", "dom"],
    declaration: true,
    outDir: "./dist-esm",
    importHelpers: true,
    skipLibCheck: true
  },
  include: ["src/**/*.ts"],
  exclude: ["node_modules"]
};

const highLevelTsConfigInAzureSdkForJs: Record<string, any> = {
  references: [
    { path: "./config/tsconfig.src.esm.json" },
    { path: "./config/tsconfig.src.browser.json" },
    { path: "./config/tsconfig.src.react-native.json" },
    { path: "./config/tsconfig.src.cjs.json" }
  ],
  files: []
}

const highLevelTsSampleConfig: Record<string, any> = {
  extends: "../../../tsconfig.samples.base.json",
  compilerOptions: {}
}

const highLevelTsSnippetsConfig: Record<string, any> = {
  extends: ["../../../tsconfig.snippets.base.json"]
}

export function generateTsConfig(project: Project) {
  const {
    generateMetadata,
    generateTest,
    packageDetails,
    generateSample,
    azureSdkForJs,
  } = getAutorestOptions();

  if (!generateMetadata) {
    return;
  }

  const clientPackageName = packageDetails.name;
  if (azureSdkForJs) {
    if (generateSample) {
      highLevelTsConfigInAzureSdkForJs.references.push({
        path: "./tsconfig.samples.json"
      });
    }

    if (generateTest) {
      highLevelTsConfigInAzureSdkForJs.references.push({
        path: "./tsconfig.test.json"
      });
      highLevelTsConfigInAzureSdkForJs.references.push({
        path: "./tsconfig.snippets.json"
      });
    }
  }
  else {
    if (generateTest) {
      highLevelTsConfig.include.push("test/**/*.ts");
    }

    if (generateSample) {
      highLevelTsConfig.include.push("samples-dev/**/*.ts");
      highLevelTsConfig.compilerOptions["paths"] = {};
      highLevelTsConfig.compilerOptions["paths"][clientPackageName] = [
        "./src/index"
      ];
    }
  }
  project.createSourceFile("tsconfig.json", JSON.stringify(azureSdkForJs ? highLevelTsConfigInAzureSdkForJs : highLevelTsConfig, null, 2), {
    overwrite: true
  });
}

export function generateTsSrcEsmConfig(project: Project) {
  project.createSourceFile(
    "config/tsconfig.src.esm.json",
    JSON.stringify(
      { extends: "../../../../eng/tsconfigs/src.esm.json", include: ["../src/index.ts"] },
      null,
      2
    ),
    { overwrite: true }
  );
}

export function generateTsSrcBrowserConfig(project: Project) {
  project.createSourceFile(
    "config/tsconfig.src.browser.json",
    JSON.stringify(
      { extends: "../../../../eng/tsconfigs/src.browser.json", include: ["../src/index.ts"] },
      null,
      2
    ),
    { overwrite: true }
  );
}

export function generateTsSrcReactNativeConfig(project: Project) {
  project.createSourceFile(
    "config/tsconfig.src.react-native.json",
    JSON.stringify(
      { extends: "../../../../eng/tsconfigs/src.react-native.json", include: ["../src/index.ts"] },
      null,
      2
    ),
    { overwrite: true }
  );
}

export function generateTsSrcCjsConfig(project: Project) {
  project.createSourceFile(
    "config/tsconfig.src.cjs.json",
    JSON.stringify(
      { extends: "../../../../eng/tsconfigs/src.cjs.json", include: ["../src/index.ts"] },
      null,
      2
    ),
    { overwrite: true }
  );
}
export function generateTsSampleConfig(project: Project) {
  const {
    packageDetails,
  } = getAutorestOptions();
  const clientPackageName = packageDetails.name;
  highLevelTsSampleConfig.compilerOptions["paths"] = {};
  highLevelTsSampleConfig.compilerOptions["paths"][clientPackageName] = [
    "./dist/esm"
  ];
  project.createSourceFile("tsconfig.samples.json", JSON.stringify(highLevelTsSampleConfig, null, 2), {
    overwrite: true
  });
}

export function generateTsSnippetsConfig(project: Project) {
  project.createSourceFile("tsconfig.snippets.json", JSON.stringify(highLevelTsSnippetsConfig, null, 2), {
    overwrite: true
  });
}

