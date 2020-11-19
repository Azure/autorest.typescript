// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { ClientDetails } from "../../models/clientDetails";

export function generateTsConfig(
  project: Project,
  clientDetails: ClientDetails
) {
  const esNext =
    !clientDetails.options.disablePagingAsyncIterators &&
    clientDetails.options.hasPaging
      ? ["esnext"]
      : [];

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
      lib: ["es6", "dom", ...esNext],
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
