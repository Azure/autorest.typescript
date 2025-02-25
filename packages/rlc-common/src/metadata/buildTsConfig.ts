// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { RLCModel } from "../interfaces.js";

const restLevelTsConfigInAzureSdkForJs: () => Record<string, any> =
  function () {
    return {
      references: [
        {
          path: "./tsconfig.src.json"
        }
      ]
    };
  };
const tsSrcConfigInAzureSdkForJs: () => Record<string, any> = function () {
  return {
    extends: "../../../tsconfig.lib.json"
  };
};

const tsSampleConfigInAzureSdkForJs: (
  clientPackageName: string
) => Record<string, any> = function (clientPackageName) {
  return {
    extends: "../../../tsconfig.samples.base.json",
    compilerOptions: {
      paths: {
        [clientPackageName]: ["./dist/esm"]
      }
    }
  };
};

const tsTestConfigInAzureSdkForJs: () => Record<string, any> = function () {
  return {
    extends: ["./tsconfig.src.json", "../../../tsconfig.test.base.json"]
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
    ? restLevelTsConfigInAzureSdkForJs()
    : restLevelTsConfigNotInAzureSdkForJs(model);

  if (!azureSdkForJs) {
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
  } else {
    if (generateSample) {
      restLevelTsConfig.references.push({
        path: "./tsconfig.samples.json"
      });
    }

    if (generateTest) {
      restLevelTsConfig.references.push({
        path: "./tsconfig.test.json"
      });
    }
  }

  const filePath = "tsconfig.json";
  const configFile = project.createSourceFile(
    filePath,
    JSON.stringify(restLevelTsConfig, null, 2),
    {
      overwrite: true
    }
  );
  return {
    path: filePath,
    content: configFile.getFullText()
  };
}

export function buildTsSrcConfig() {
  const project = new Project();
  const filePath = "tsconfig.src.json";
  const configFile = project.createSourceFile(
    filePath,
    JSON.stringify(tsSrcConfigInAzureSdkForJs(), null, 2),
    {
      overwrite: true
    }
  );
  return {
    path: filePath,
    content: configFile.getFullText()
  };
}

export function buildTsSampleConfig(model: RLCModel) {
  const project = new Project();
  const { packageDetails } = model.options || {};
  const clientPackageName = packageDetails?.name ?? "";
  const filePath = "tsconfig.sample.json";
  const configFile = project.createSourceFile(
    filePath,
    JSON.stringify(tsSampleConfigInAzureSdkForJs(clientPackageName), null, 2),
    {
      overwrite: true
    }
  );
  return {
    path: filePath,
    content: configFile.getFullText()
  };
}

export function buildTsTestConfig() {
  const project = new Project();
  const filePath = "tsconfig.test.json";
  const configFile = project.createSourceFile(
    filePath,
    JSON.stringify(tsTestConfigInAzureSdkForJs(), null, 2),
    {
      overwrite: true
    }
  );
  return {
    path: filePath,
    content: configFile.getFullText()
  };
}
