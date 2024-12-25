// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { RLCModel } from "../interfaces.js";

const nodeConfig = `export default defineConfig({
  test: {
    "reporters": ["basic", "junit"],
    "outputFile": {
      "junit": "test-results.browser.xml"
    },
    "fakeTimers": {
      "toFake": ["setTimeout", "Date"]
    },
    "watch": false,
    "include": ["test/**/*.spec.ts"],
    "exclude": ["test/**/browser/*.spec.ts"],
    "coverage": {
      "include": ["src/**/*.ts"],
      "exclude": [
        "src/**/*-browser.mts",
        "src/**/*-react-native.mts",
        "vitest*.config.ts",
        "samples-dev/**/*.ts"
      ],
      "provider": "istanbul",
      "reporter": ["text", "json", "html"],
      "reportsDirectory": "coverage"
    },
    testTimeout: 1200000,
    hookTimeout: 1200000
  }
});`;

const browserConfig = (options: {
  isAzureSdkForJs: boolean;
}) => `process.env.RECORDINGS_RELATIVE_PATH = relativeRecordingsPath();

export default defineConfig({
    "define": {
      "process.env": process.env
    },
    "test": {
      "reporters": ["basic", "junit"],
      "outputFile": {
        "junit": "test-results.browser.xml"
      },
      "browser": {
        "enabled": true,
        "headless": true,
        "name": "chromium",
        "provider": "playwright"
      },
      "fakeTimers": {
        "toFake": ["setTimeout", "Date"]
      },
      "watch": false,
      "include": ${
        options.isAzureSdkForJs
          ? `["dist-test/browser/**/*.spec.js"]`
          : `["test/**/*.spec.ts"]`
      },
      "coverage": {
        "include":  ${
          options.isAzureSdkForJs
            ? `["dist-test/browser/**/*.spec.js"]`
            : `["test/**/*.spec.ts"]`
        },
        "provider": "istanbul",
        "reporter": ["text", "json", "html"],
        "reportsDirectory": "coverage-browser"
      },
      testTimeout: 1200000,
      hookTimeout: 1200000
    }
  });`;

export function buildVitestConfig(
  model: RLCModel,
  platform: "browser" | "node"
) {
  if (
    model.options?.generateMetadata === false ||
    model.options?.generateTest === false
  ) {
    return;
  }

  const project = new Project();

  const isAzureSdkForJs = model.options?.azureSdkForJs ?? false;
  let filePath = "vitest.config.ts";
  let config = nodeConfig;

  if (platform === "browser") {
    filePath = "vitest.browser.config.ts";
    config = browserConfig({
      isAzureSdkForJs
    });
  }

  const configFile = project.createSourceFile(filePath, config, {
    overwrite: true
  });

  configFile.addImportDeclaration({
    moduleSpecifier: "vitest/config",
    namedImports: ["defineConfig"]
  });

  configFile.addImportDeclaration({
    moduleSpecifier: "@azure-tools/test-recorder",
    namedImports: ["relativeRecordingsPath"]
  });

  return {
    path: filePath,
    content: configFile.getFullText()
  };
}
