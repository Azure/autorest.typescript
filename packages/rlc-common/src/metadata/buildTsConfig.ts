// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { RLCModel } from "../interfaces.js";

/**
 * Builds the root tsconfig.json.
 *
 * For azureSdkForJs packages, emits project references pointing into the
 * `config/` subfolder (following the eng/tsconfigs pattern).
 */
export function buildTsConfig(model: RLCModel) {
  const { packageDetails, azureSdkForJs } = model.options || {};
  const { generateTest, generateSample } = model.options || {};
  const clientPackageName = packageDetails?.name ?? "";
  const project = new Project();

  let tsConfig: Record<string, any>;

  if (azureSdkForJs) {
    const references: { path: string }[] = [
      { path: "./config/tsconfig.src.esm.json" },
      { path: "./config/tsconfig.src.browser.json" },
      { path: "./config/tsconfig.src.react-native.json" },
      { path: "./config/tsconfig.src.cjs.json" }
    ];

    if (generateTest) {
      references.push(
        { path: "./config/tsconfig.test.node.json" },
        { path: "./config/tsconfig.test.browser.json" }
      );
    }

    if (generateSample) {
      references.push({ path: "./config/tsconfig.samples.json" });
    }

    if (generateTest) {
      references.push({ path: "./config/tsconfig.snippets.json" });
    }

    tsConfig = { references, files: [] };
  } else {
    const { options } = model;
    tsConfig = {
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

    if (generateTest) {
      tsConfig.include.push("test/**/*.ts");
    }
    if (generateSample) {
      tsConfig.include.push("samples-dev/**/*.ts");
      tsConfig.compilerOptions["paths"] = {};
      tsConfig.compilerOptions["paths"][clientPackageName] = ["./src/index"];
    }
  }

  const filePath = "tsconfig.json";
  const configFile = project.createSourceFile(
    filePath,
    JSON.stringify(tsConfig, null, 2),
    { overwrite: true }
  );
  return {
    path: filePath,
    content: configFile.getFullText()
  };
}

/**
 * Builds config/tsconfig.src.esm.json — extends eng/tsconfigs/src.esm.json
 */
export function buildTsSrcEsmConfig() {
  return {
    path: "config/tsconfig.src.esm.json",
    content: JSON.stringify(
      {
        extends: "../../../../eng/tsconfigs/src.esm.json",
        include: ["../src/index.ts"]
      },
      null,
      2
    )
  };
}

/**
 * Builds config/tsconfig.src.browser.json — extends eng/tsconfigs/src.browser.json
 */
export function buildTsSrcBrowserConfig() {
  return {
    path: "config/tsconfig.src.browser.json",
    content: JSON.stringify(
      {
        extends: "../../../../eng/tsconfigs/src.browser.json",
        include: ["../src/index.ts"]
      },
      null,
      2
    )
  };
}

/**
 * Builds config/tsconfig.src.react-native.json — extends eng/tsconfigs/src.react-native.json
 */
export function buildTsSrcReactNativeConfig() {
  return {
    path: "config/tsconfig.src.react-native.json",
    content: JSON.stringify(
      {
        extends: "../../../../eng/tsconfigs/src.react-native.json",
        include: ["../src/index.ts"]
      },
      null,
      2
    )
  };
}

/**
 * Builds config/tsconfig.src.cjs.json — extends eng/tsconfigs/src.cjs.json
 */
export function buildTsSrcCjsConfig() {
  return {
    path: "config/tsconfig.src.cjs.json",
    content: JSON.stringify(
      {
        extends: "../../../../eng/tsconfigs/src.cjs.json",
        include: ["../src/index.ts"]
      },
      null,
      2
    )
  };
}

/**
 * Builds config/tsconfig.samples.json — extends eng/tsconfigs/samples.json
 */
export function buildTsSampleConfig(model: RLCModel) {
  const { packageDetails } = model.options || {};
  const clientPackageName = packageDetails?.name ?? "";
  return {
    path: "config/tsconfig.samples.json",
    content: JSON.stringify(
      {
        extends: "../../../../eng/tsconfigs/samples.json",
        compilerOptions: {
          paths: {
            [clientPackageName]: ["../dist/esm"]
          }
        }
      },
      null,
      2
    )
  };
}

/**
 * Builds config/tsconfig.snippets.json — extends eng/tsconfigs/snippets.json
 */
export function buildTsSnippetsConfig() {
  return {
    path: "config/tsconfig.snippets.json",
    content: JSON.stringify(
      {
        extends: "../../../../eng/tsconfigs/snippets.json"
      },
      null,
      2
    )
  };
}

// ─── Backward-compatible exports for autorest.typescript (maintenance mode) ───

/** @deprecated Use buildTsSrcEsmConfig instead. Kept for autorest.typescript compat. */
export function buildTsSrcConfig() {
  return {
    path: "tsconfig.src.json",
    content: `{
    extends: "../../../tsconfig.lib.json"
  }`
  };
}

/** @deprecated Kept for autorest.typescript compat. */
export function buildTsTestConfig() {
  return {
    path: "tsconfig.test.json",
    content: `{
    extends: ["./tsconfig.src.json", "../../../tsconfig.test.base.json"]
  }`
  };
}
