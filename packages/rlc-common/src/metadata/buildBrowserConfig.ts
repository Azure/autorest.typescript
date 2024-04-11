// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";

export function buildTsTestBrowserConfig() {
  const filePath = "tsconfig.browser.config.json";
  const project = new Project();

  const content = {
    extends: "./.tshy/build.json",
    include: ["./src/**/*.ts", "./src/**/*.mts", "./test/**/*.spec.ts"],
    exclude: ["./test/**/node/**/*.ts"],
    compilerOptions: {
      outDir: "./dist-test/browser",
      rootDir: ".",
      skipLibCheck: true
    }
  };

  const configFile = project.createSourceFile(
    filePath,
    JSON.stringify(content),
    {
      overwrite: true
    }
  );
  return {
    path: filePath,
    content: configFile.getFullText()
  };
}
