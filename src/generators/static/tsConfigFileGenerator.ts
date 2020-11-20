// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";

export function generateTsConfig(project: Project) {
  const tsConfigContents = {
    compilerOptions: {
      module: "es6",
      moduleResolution: "node",
      strict: true,
      target: "es5",
      sourceMap: true,
      declarationMap: true,
      esModuleInterop: true,
      allowSyntheticDefaultImports: true,
      forceConsistentCasingInFileNames: true,
      preserveConstEnums: true,
      lib: ["es6", "dom"],
      declaration: true,
      outDir: "./esm",
      importHelpers: true
    },
    include: ["./src/**/*.ts"],
    exclude: ["node_modules"]
  };

  project.createSourceFile("tsconfig.json", JSON.stringify(tsConfigContents), {
    overwrite: true
  });
}
