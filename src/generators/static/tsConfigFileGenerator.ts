// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { getAutorestOptions } from "../../autorestSession";

const highLevelTsConfig = {
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


const restLevelTsConfig = {
  compilerOptions: {
    module: "es6",
    target: "es2015",
    moduleResolution: "node",
    declaration: true,
    declarationMap: true,
    outDir: "./dist-esm"
  },
  exclude: [
    "node_modules",
    "types",
    "temp",
    "browser",
    "dist",
    "dist-esm",
    "./samples/**/*.ts"
  ]
};

export function generateTsConfig(project: Project) {
  const { generateMetadata, restLevelClient, generateTest } = getAutorestOptions();

  if (!generateMetadata) {
    return;
  }

  if (generateTest) {
    highLevelTsConfig.include.push("./test/**/*.ts");
  }
  
  const tsConfigContents = restLevelClient
    ? restLevelTsConfig
    : highLevelTsConfig;

  project.createSourceFile("tsconfig.json", JSON.stringify(tsConfigContents), {
    overwrite: true
  });
}
