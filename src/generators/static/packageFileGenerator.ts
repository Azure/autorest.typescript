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
  const hasLRO = clientDetails.operationGroups.some(og =>
    og.operations.some(o => o.isLRO)
  );
  const hasAsyncIterators =
    !clientDetails.options.disablePagingAsyncIterators &&
    clientDetails.options.hasPaging;

  const packageJsonContents = {
    name: packageDetails.name,
    author: "Microsoft Corporation",
    description:
      packageDetails.description ||
      `A generated SDK for ${clientDetails.name}.`,
    version: packageDetails.version,
    dependencies: {
      ...(hasLRO && { "@azure/core-lro": "^1.0.1" }),
      ...(hasAsyncIterators && { "@azure/core-paging": "^1.1.1" }),
      "@azure/core-http": "^1.1.4",
      ...(clientDetails.tracing && {
        "@azure/core-tracing": "1.0.0-preview.9",
        "@opentelemetry/api": "^0.10.2"
      }),

      tslib: "^1.9.3"
    },
    keywords: ["node", "azure", "typescript", "browser", "isomorphic"],
    license: "MIT",
    main: `./dist/${packageDetails.nameWithoutScope}.js`,
    module: `./esm/index.js`,
    types: `./esm/index.d.ts`,
    devDependencies: {
      typescript: "^3.1.1",
      rollup: "^0.66.2",
      "rollup-plugin-node-resolve": "^3.4.0",
      "rollup-plugin-sourcemaps": "^0.4.2",
      "uglify-js": "^3.4.9",
      "@microsoft/api-extractor": "7.9.10"
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
      `${clientDetails.srcPath}/**/*.ts`,
      "README.md",
      "rollup.config.js",
      "tsconfig.json"
    ],
    scripts: {
      build:
        "tsc && rollup -c rollup.config.js && npm run minify && npm run extract-api",
      minify: `uglifyjs -c -m --comments --source-map "content='./dist/${packageDetails.nameWithoutScope}.js.map'" -o ./dist/${packageDetails.nameWithoutScope}.min.js ./dist/${packageDetails.nameWithoutScope}.js`,
      prepack: "npm install && npm run build",
      "extract-api": "api-extractor run --local"
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
