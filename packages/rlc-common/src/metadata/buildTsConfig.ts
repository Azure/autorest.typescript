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
const tsSrcConfigInAzureSdkForJs = `{
    extends: "../../../tsconfig.lib.json"
  }`;

const tsSampleConfigInAzureSdkForJs: (clientPackageName: string) => string =
  function (clientPackageName) {
    return `{
    extends: "../../../tsconfig.samples.base.json",
    compilerOptions: {
      paths: {
        "${clientPackageName}": ["./dist/esm"]
      }
    }
  }`;
  };

const tsTestConfigInAzureSdkForJs = `{
    extends: ["./tsconfig.src.json", "../../../tsconfig.test.base.json"]
  }`;

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
      restLevelTsConfig.references.push({
        path: "./tsconfig.snippets.json"
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
  return {
    path: "tsconfig.src.json",
    content: tsSrcConfigInAzureSdkForJs
  };
}

export function buildTsSampleConfig(model: RLCModel) {
  const { packageDetails } = model.options || {};
  return {
    path: "tsconfig.samples.json",
    content: tsSampleConfigInAzureSdkForJs(packageDetails?.name ?? "")
  };
}

export function buildTsTestConfig() {
  return {
    path: "tsconfig.test.json",
    content: tsTestConfigInAzureSdkForJs
  };
}

export function buildTsSnippetsConfig() {
  return {
    path: "tsconfig.snippets.json",
    content: JSON.stringify(
      {
        extends: ["../../../tsconfig.snippets.base.json"]
      },
      null,
      2
    )
  };
}
