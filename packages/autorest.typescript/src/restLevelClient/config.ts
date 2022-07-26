import { Options } from "prettier";

export const prettierTypeScriptOptions: Options = {
  parser: "typescript",
  arrowParens: "always",
  bracketSpacing: true,
  endOfLine: "lf",
  printWidth: 80,
  semi: true,
  singleQuote: false,
  tabWidth: 2
};

export const prettierJSONOptions: Options = {
  parser: "json",
  tabWidth: 2,
  semi: false,
  singleQuote: false
};
