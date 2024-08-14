// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { RLCModel } from "../interfaces.js";

const rules: Record<string, any> = {
  rules: {
    "@azure/azure-sdk/ts-modules-only-named": "warn",
    "@azure/azure-sdk/ts-apiextractor-json-types": "warn",
    "@azure/azure-sdk/ts-package-json-types": "warn",
    "@azure/azure-sdk/ts-package-json-engine-is-present": "warn",
    "tsdoc/syntax": "warn"
  }
};

const esmRules: Record<string, any> = {
  rules: {
    "@azure/azure-sdk/ts-modules-only-named": "warn",
    "@azure/azure-sdk/ts-apiextractor-json-types": "warn",
    "@azure/azure-sdk/ts-package-json-types": "warn",
    "@azure/azure-sdk/ts-package-json-engine-is-present": "warn",
    "@azure/azure-sdk/ts-package-json-module": "off",
    "@azure/azure-sdk/ts-package-json-files-required": "off",
    "@azure/azure-sdk/ts-package-json-main-is-cjs": "off",
    "tsdoc/syntax": "warn"
  }
};

const esLintConfigTemplate = `import azsdkEslint from "@azure/eslint-plugin-azure-sdk";

export default [
  ...azsdkEslint.configs.recommended,
  <rulesPlaceHolder>
];
`;

export function buildEsLintConfig(model: RLCModel) {
  if (model.options?.flavor !== "azure") {
    return;
  }
  const project = new Project();
  const filePath = "eslint.config.mjs";

  const contentText = esLintConfigTemplate.replace(
    "<rulesPlaceHolder>",
    JSON.stringify(model.options?.moduleKind === "esm" ? esmRules : rules, null, 2)
  );

  const configFile = project.createSourceFile(
    "eslint.config.mjs",
    contentText,
    {
      overwrite: true
    }
  );
  return {
    path: filePath,
    content: configFile.getFullText()
  };
}
