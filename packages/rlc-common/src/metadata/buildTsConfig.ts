// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { RLCModel } from "../interfaces.js";

const restLevelTsConfigInAzureSdkForJs: Record<string, any> = {
  extends: "../../../tsconfig.package",
  compilerOptions: {
    outDir: "./dist-esm",
    declarationDir: "./types"
  },
  include: ["src/**/*.ts"]
};

const restLevelTsConfigNotInAzureSdkForJs: Record<string, any> = {
  compilerOptions: {
    target: "ES2017",
    module: "es6",
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
    moduleResolution: "node",
    allowSyntheticDefaultImports: true,
    esModuleInterop: true,
    outDir: "./dist-esm",
    declarationDir: "./types"
  },
  include: ["./src/**/*.ts"]
};

export function buildTsConfig(model: RLCModel, hasSamplesGenerated = false) {
  const { packageDetails, azureSdkForJs } = model.options || {};
  let { generateTest, generateSample } = model.options || {};
  // Take the undefined as true by default
  generateTest = generateTest === true || generateTest === undefined;
  generateSample =
    (generateSample === true || generateSample === undefined) &&
    hasSamplesGenerated;
  const clientPackageName = packageDetails?.name ?? "";
  const project = new Project();

  const restLevelTsConfig = azureSdkForJs
    ? restLevelTsConfigInAzureSdkForJs
    : restLevelTsConfigNotInAzureSdkForJs;

  if (generateTest) {
    restLevelTsConfig.include.push("./test/**/*.ts");
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
