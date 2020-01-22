// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Project } from "ts-morph";
import { ClientDetails } from "../../models/clientDetails";
import { PackageDetails } from "../../models/packageDetails";

export function generatePackageJson(
  clientDetails: ClientDetails,
  packageDetails: PackageDetails,
  project: Project
) {
  const packageJsonContents = {
    name: packageDetails.name,
    author: "Microsoft Corporation",
    description:
      packageDetails.description ||
      `A generated SDK for ${clientDetails.name}.`,
    version: packageDetails.version,
    dependencies: {
      "@azure/core-http": "^1.0.0",
      tslib: "^1.9.3"
    },
    keywords: ["node", "azure", "typescript", "browser", "isomorphic"],
    license: "MIT",
    main: `./dist/${packageDetails.nameWithoutScope}.js`,
    module: `./esm/${clientDetails.sourceFileName}.js`,
    types: `./esm/${clientDetails.sourceFileName}.d.ts`,
    devDependencies: {
      typescript: "^3.1.1",
      rollup: "^0.66.2",
      "rollup-plugin-node-resolve": "^3.4.0",
      "rollup-plugin-sourcemaps": "^0.4.2",
      "uglify-js": "^3.4.9"
    },
    // TODO: Calculate the SDK path for the package
    homepage: `https://github.com/Azure/azure-sdk-for-js`,
    repository: {
      type: "git",
      url: "https://github.com/Azure/azure-sdk-for-js.git"
    },
    bugs: {
      url: "https://github.com/Azure/azure-sdk-for-js/issues"
    },
    files: [
      "dist/**/*.js",
      "dist/**/*.js.map",
      "dist/**/*.d.ts",
      "dist/**/*.d.ts.map",
      "esm/**/*.js",
      "esm/**/*.js.map",
      "esm/**/*.d.ts",
      "esm/**/*.d.ts.map",
      "src/**/*.ts",
      "README.md",
      "rollup.config.js",
      "tsconfig.json"
    ],
    scripts: {
      build: "tsc && rollup -c rollup.config.js && npm run minify",
      minify: `uglifyjs -c -m --comments --source-map "content='./dist/${packageDetails.nameWithoutScope}.js.map'" -o ./dist/${packageDetails.nameWithoutScope}.min.js ./dist/${packageDetails.nameWithoutScope}.js`,
      prepack: "npm install && npm run build"
    },
    sideEffects: false,
    autoPublish: true
  };

  project.createSourceFile(
    "package.json",
    JSON.stringify(packageJsonContents),
    {
      overwrite: true
    }
  );
}
