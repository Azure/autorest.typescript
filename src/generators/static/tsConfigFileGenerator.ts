// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { CodeModel } from "@autorest/codemodel";
import { Project } from "ts-morph";
import { getAutorestOptions } from "../../autorestSession";
import { hasRLCSamplesGenerated } from "../samples/rlcSampleGenerator";

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
    importHelpers: true
  },
  include: ["./src/**/*.ts"],
  exclude: ["node_modules"]
};


const restLevelTsConfigInAzureSdkForJs: Record<string, any> = {
  "extends": "../../../tsconfig.package",
  "compilerOptions": {
    "outDir": "./dist-esm",
    "declarationDir": "./types",
  },
  "include": ["src/**/*.ts"]
};

const restLevelTsConfigNotInAzureSdkForJs: Record<string, any> = {
  "compilerOptions": {
    "target": "ES2017",
    "module": "es6",
    "lib": [],
    "declaration": true,
    "declarationMap": true,
    "inlineSources": true,
    "sourceMap": true,
    "importHelpers": true,
    "strict": true,
    "alwaysStrict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "outDir": "./dist-esm",
    "declarationDir": "./types"
  },
  "include": ["./src/**/*.ts"]
}


export function generateTsConfig(project: Project) {
  const { generateMetadata, restLevelClient, generateTest, packageDetails, generateSample, azureSdkForJs } = getAutorestOptions();

  if (!generateMetadata) {
    return;
  }

  const clientPackageName = packageDetails.name;

  const restLevelTsConfig = azureSdkForJs ? restLevelTsConfigInAzureSdkForJs : restLevelTsConfigNotInAzureSdkForJs;

  if (generateTest) {
    highLevelTsConfig.include.push("./test/**/*.ts");
    restLevelTsConfig.include.push("./test/**/*.ts");
  }

  if (generateSample) {
    highLevelTsConfig.include.push("samples-dev/**/*.ts");
    highLevelTsConfig.compilerOptions["paths"] = {};
    highLevelTsConfig.compilerOptions["paths"][clientPackageName] = ["./src/index"];
    if (hasRLCSamplesGenerated) {
      restLevelTsConfig.include.push("samples-dev/**/*.ts");
      restLevelTsConfig.compilerOptions["paths"] = {};
      restLevelTsConfig.compilerOptions["paths"][clientPackageName] = ["./src/index"];
    }
  }

  const tsConfigContents = restLevelClient
    ? restLevelTsConfig
    : highLevelTsConfig;

  project.createSourceFile("tsconfig.json", JSON.stringify(tsConfigContents), {
    overwrite: true
  });
}
