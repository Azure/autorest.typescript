// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { RLCModel } from "../interfaces.js";

const eslintConfigWithAzurePlugin = `import azsdkEslint from "@azure/eslint-plugin-azure-sdk";

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

const esLintConfigEsmWithAzurePlugin = `import azsdkEslint from "@azure/eslint-plugin-azure-sdk";

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

const standaloneEslintConfig = `import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: globals.node }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "no-console": "warn",
      "prefer-const": "error"
    }
  }
];
`;

export function buildEsLintConfig(model: RLCModel) {
  if (model.options?.flavor !== "azure") {
    return;
  }
  
  const project = new Project();
  const filePath = "eslint.config.mjs";

  let configContent: string;
  
  // Use Azure plugin config for monorepo packages, simple config for standalone packages
  if (model.options?.azureSdkForJs) {
    configContent = model.options?.moduleKind === "esm" ? esLintConfigEsmWithAzurePlugin : eslintConfigWithAzurePlugin;
  } else {
    configContent = standaloneEslintConfig;
  }

  const configFile = project.createSourceFile(
    "eslint.config.mjs",
    configContent,
    {
      overwrite: true
    }
  );
  return {
    path: filePath,
    content: configFile.getFullText()
  };
}
