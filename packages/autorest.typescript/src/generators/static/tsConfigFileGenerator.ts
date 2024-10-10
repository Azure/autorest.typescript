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
    importHelpers: true
  },
  include: ["src/**/*.ts"],
  exclude: ["node_modules"]
};

export function generateTsConfig(project: Project) {
  const {
    generateMetadata,
    generateTest,
    packageDetails,
    generateSample
  } = getAutorestOptions();

  if (!generateMetadata) {
    return;
  }

  const clientPackageName = packageDetails.name;
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
  project.createSourceFile("tsconfig.json", JSON.stringify(highLevelTsConfig), {
    overwrite: true
  });
}
