// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { RLCModel } from "../interfaces.js";

const eslintConfig = `import azsdkEslint from "@azure/eslint-plugin-azure-sdk";

export default azsdkEslint.config([
  {
    rules: {
      "@azure/azure-sdk/ts-modules-only-named": "warn",
      "@azure/azure-sdk/ts-package-json-types": "warn",
      "@azure/azure-sdk/ts-package-json-engine-is-present": "warn",
      "tsdoc/syntax": "warn"
    }
  }
]);
`;

const esLintConfigEsm = `import azsdkEslint from "@azure/eslint-plugin-azure-sdk";

export default azsdkEslint.config([
  {
    rules: {
      "@azure/azure-sdk/ts-modules-only-named": "warn",
      "@azure/azure-sdk/ts-package-json-types": "warn",
      "@azure/azure-sdk/ts-package-json-engine-is-present": "warn",
      "@azure/azure-sdk/ts-package-json-files-required": "off",
      "@azure/azure-sdk/ts-package-json-main-is-cjs": "off",
      "tsdoc/syntax": "warn"
    }
  }
]);
`;

const esLintConfigEsmAzureSdk = `import azsdkEslint from "@azure/eslint-plugin-azure-sdk";

export default [
  ...azsdkEslint.config([
    {
      rules: {
        "@azure/azure-sdk/ts-modules-only-named": "warn",
        "@azure/azure-sdk/ts-package-json-types": "warn",
        "@azure/azure-sdk/ts-package-json-engine-is-present": "warn",
        "@azure/azure-sdk/ts-package-json-files-required": "off",
        "@azure/azure-sdk/ts-package-json-main-is-cjs": "off",
        "tsdoc/syntax": "warn"
      }
    },
  ]),
  {
    files: ["src/**/*.ts", "src/**/*.mts", "test/**/*.ts"],
    languageOptions: {
      parserOptions: {
        projectService: false,
        project: "./config/tsconfig.lint.json",
      },
    },
  },
];
`;

export function buildEsLintConfig(model: RLCModel) {
  if (model.options?.flavor !== "azure") {
    return;
  }
  const project = new Project();
  const filePath = "eslint.config.mjs";

  let template: string;
  if (model.options?.moduleKind === "esm") {
    template = model.options?.azureSdkForJs
      ? esLintConfigEsmAzureSdk
      : esLintConfigEsm;
  } else {
    template = eslintConfig;
  }
  const configFile = project.createSourceFile(
    "eslint.config.mjs",
    template,
    {
      overwrite: true
    }
  );
  return {
    path: filePath,
    content: configFile.getFullText()
  };
}
