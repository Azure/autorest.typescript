import { Project } from "ts-morph";

const esLintConfig = {
  plugins: ["@azure/azure-sdk"],
  extends: ["plugin:@azure/azure-sdk/azure-sdk-base"],
  rules: {
    "@azure/azure-sdk/ts-modules-only-named": "warn",
    "@azure/azure-sdk/ts-apiextractor-json-types": "warn",
    "@azure/azure-sdk/ts-package-json-types": "warn",
    "@azure/azure-sdk/ts-package-json-engine-is-present": "warn",
    "tsdoc/syntax": "warn"
  }
};

export function buildEsLintConfig() {
  const project = new Project();
  const filePath = ".eslintrc.json";
  const configFile = project.createSourceFile(
    ".eslintrc.json",
    JSON.stringify(esLintConfig),
    {
      overwrite: true
    }
  );
  return {
    path: filePath,
    content: configFile.getFullText()
  };
}
