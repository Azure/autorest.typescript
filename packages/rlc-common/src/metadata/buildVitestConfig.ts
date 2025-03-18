// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { RLCModel } from "../interfaces.js";

const nodeConfig = `
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      testTimeout: 1200000,
      hookTimeout: 1200000,
    },
  }),
);`;

const browserConfig = `
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      include: ["dist-test/browser/test/**/*.spec.js"],
      testTimeout: 1200000,
      hookTimeout: 1200000,
    },
  }),
);`;

const esmConfig = `
export default mergeConfig(vitestConfig, vitestEsmConfig);`;

export function buildVitestNodeConfig(model: RLCModel) {
  if (
    model.options?.generateMetadata === false ||
    model.options?.generateTest === false
  ) {
    return;
  }

  const project = new Project();
  const filePath = "vitest.config.ts";
  const config = nodeConfig;
  const configFile = project.createSourceFile(filePath, config, {
    overwrite: true
  });
  configFile.addImportDeclaration({
    moduleSpecifier: "vitest/config",
    namedImports: ["defineConfig", "mergeConfig"]
  });
  configFile.addImportDeclaration({
    moduleSpecifier: "../../../vitest.shared.config.ts",
    namespaceImport: "viteConfig"
  });

  return {
    path: filePath,
    content: configFile.getFullText()
  };
}

export function buildVitestBrowserConfig(model: RLCModel) {
  if (
    model.options?.generateMetadata === false ||
    model.options?.generateTest === false
  ) {
    return;
  }

  const project = new Project();
  const filePath = "vitest.browser.config.ts";
  const config = browserConfig;
  const configFile = project.createSourceFile(filePath, config, {
    overwrite: true
  });
  configFile.addImportDeclaration({
    moduleSpecifier: "vitest/config",
    namedImports: ["defineConfig", "mergeConfig"]
  });
  configFile.addImportDeclaration({
    moduleSpecifier: "../../../vitest.browser.shared.config.ts",
    namespaceImport: "viteConfig"
  });

  return {
    path: filePath,
    content: configFile.getFullText()
  };
}

export function buildVitestEsmConfig(model: RLCModel) {
  if (
    model.options?.generateMetadata === false ||
    model.options?.generateTest === false
  ) {
    return;
  }

  const project = new Project();
  const filePath = "vitest.esm.config.ts";
  const config = esmConfig;
  const configFile = project.createSourceFile(filePath, config, {
    overwrite: true
  });
  configFile.addImportDeclaration({
    moduleSpecifier: "vitest/config",
    namedImports: ["mergeConfig"]
  });
  configFile.addImportDeclaration({
    moduleSpecifier: "./vitest.config.ts",
    namespaceImport: "vitestConfig"
  });
  configFile.addImportDeclaration({
    moduleSpecifier: "../../../vitest.esm.shared.config.ts",
    namespaceImport: "vitestEsmConfig"
  });

  return {
    path: filePath,
    content: configFile.getFullText()
  };
}
