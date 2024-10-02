// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { RLCModel } from "../interfaces.js";

const restLevelTsConfigInAzureSdkForJs: (
  model: RLCModel
) => Record<string, any> = function (model: RLCModel) {
  if (model.options?.moduleKind === "esm") {
    return {
      extends: "../../../tsconfig",
      compilerOptions: {
        module: "NodeNext",
        moduleResolution: "NodeNext",
        rootDir: ".",
        skipLibCheck: true
      },
      include: ["src/**/*.ts", "src/**/*.mts", "src/**/*.cts", "test/**/*.ts"]
    };
  }

  return {
    extends: "../../../tsconfig",
    compilerOptions: {
      outDir: "./dist-esm",
      declarationDir: "./types",
      skipLibCheck: true
    },
    include: ["src/**/*.ts"]
  };
};

const restLevelTsConfigNotInAzureSdkForJs: (
  model: RLCModel
) => Record<string, any> = function (model: RLCModel) {
  const { options } = model;
  return {
    compilerOptions: {
      target: "ES2017",
      module: options?.moduleKind === "esm" ? "NodeNext" : "es6",
      lib: [],
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
      moduleResolution: options?.moduleKind === "esm" ? "NodeNext" : "node",
      allowSyntheticDefaultImports: true,
      esModuleInterop: true,
      outDir: options?.moduleKind === "cjs" ? "./dist-esm" : undefined,
      declarationDir: options?.moduleKind === "cjs" ? "./types" : undefined
    },
    include: ["src/**/*.ts"]
  };
};

export function buildTsConfig(model: RLCModel) {
  const { packageDetails, azureSdkForJs } = model.options || {};
  const { generateTest, generateSample } = model.options || {};
  // Take the undefined as true by default
  const clientPackageName = packageDetails?.name ?? "";
  const project = new Project();

  const restLevelTsConfig = azureSdkForJs
    ? restLevelTsConfigInAzureSdkForJs(model)
    : restLevelTsConfigNotInAzureSdkForJs(model);

  if (generateTest) {
    restLevelTsConfig.include.push("test/**/*.ts");
  }
  if (generateSample) {
    restLevelTsConfig.include.push("samples-dev/**/*.ts");
    restLevelTsConfig.compilerOptions["paths"] = {};
    restLevelTsConfig.compilerOptions["paths"][clientPackageName] = [
      "./src/index"
    ];
  }

  const filePath = "tsconfig.json";
  const configFile = project.createSourceFile(
    filePath,
    JSON.stringify(restLevelTsConfig),
    {
      overwrite: true
    }
  );
  return {
    path: filePath,
    content: configFile.getFullText()
  };
}
