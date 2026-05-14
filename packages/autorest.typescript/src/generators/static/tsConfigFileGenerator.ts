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
    if (generateTest) {
      highLevelTsConfigInAzureSdkForJs.references.push(
        { path: "./config/tsconfig.test.node.json" },
        { path: "./config/tsconfig.test.browser.json" }
      );
    }

    if (generateSample) {
      highLevelTsConfigInAzureSdkForJs.references.push({
        path: "./config/tsconfig.samples.json"
      });
    }

    if (generateTest) {
      highLevelTsConfigInAzureSdkForJs.references.push({
        path: "./config/tsconfig.snippets.json"
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
  const { packageDetails } = getAutorestOptions();
  const clientPackageName = packageDetails.name;
  project.createSourceFile(
    "config/tsconfig.samples.json",
    JSON.stringify(
      {
        extends: "../../../../eng/tsconfigs/samples.json",
        compilerOptions: {
          paths: {
            [clientPackageName]: ["../dist/esm"]
          }
        }
      },
      null,
      2
    ),
    { overwrite: true }
  );
}

export function generateTsSnippetsConfig(project: Project) {
  project.createSourceFile(
    "config/tsconfig.snippets.json",
    JSON.stringify(
      { extends: "../../../../eng/tsconfigs/snippets.json" },
      null,
      2
    ),
    { overwrite: true }
  );
}

export function generateTsLintConfig(project: Project) {
  project.createSourceFile(
    "config/tsconfig.lint.json",
    JSON.stringify(
      {
        extends: "../../../../tsconfig.json",
        include: ["../src", "../test"]
      },
      null,
      2
    ),
    { overwrite: true }
  );
}

