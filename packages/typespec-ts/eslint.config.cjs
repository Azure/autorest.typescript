const tseslint = require("@typescript-eslint/eslint-plugin");
const tsparser = require("@typescript-eslint/parser");
const requireExtensions = require("eslint-plugin-require-extensions");

module.exports = [
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "require-extensions": requireExtensions,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: ".*",
          caughtErrorsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/no-deprecated": "warn",
      "no-console": "error",
      "require-extensions/require-extensions": "error",
      "require-extensions/require-index": "error",
    },
  },
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      "typespec-output/**",
      "test/**/generated/**",
      "coverage/**",
      "temp/**",
    ],
  },
];
