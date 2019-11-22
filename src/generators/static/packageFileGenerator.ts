import { Generator } from "../generator";
import { CodeModel } from "@azure-tools/codemodel";
import { Host } from "@azure-tools/autorest-extension-base";
import * as constants from "../../utils/constants";
import * as fs from "fs";
import { Project } from "ts-morph";
import * as namingUtils from "../../utils/nameUtils";

export async function generatePackageJson(
  packageName: string,
  packageVersion: string,
  project: Project
): Promise<void> {
  const packageJsonFile = project.createSourceFile("package.json", undefined, {
    overwrite: true
  });

  const packageJsonContents = getPackageJsonContents(
    packageName,
    packageVersion,
    "",
    "this-package",
    "sdk/keyvault/keyvault-keys"
  );

  packageJsonFile.addStatements(JSON.stringify(packageJsonContents));

  //const packageName =
  //const packageVersion = await this.host.GetValue("package-version");

  // packageFileModel.clientClassName = `${namingUtils.getClientClassName(
  //   this.codeModel.info.title
  // )}`;
  // packageFileModel.clientFileName = `${namingUtils.getClientFileName(
  //   this.codeModel.info.title
  // )}`;
  // packageFileModel.packageNameModified = `${namingUtils.getPackageNameModified(
  //   packageFileModel.packageName
  // )}`;

  //this.host.WriteFile(`package.json`, data);
}

function getPackageJsonContents(
  packageName: string,
  packageVersion: string,
  packageDescription: string,
  packageFileName: string,
  packageSdkPath: string
) {
  return {
    name: packageName,
    author: "Microsoft Corporation",
    description: packageDescription,
    version: packageVersion,
    dependencies: {
      "@azure/core-arm": "^1.0.0",
      "@azure/core-http": "^1.0.0",
      tslib: "^1.9.3"
    },
    keywords: ["node", "azure", "typescript", "browser", "isomorphic"],
    license: "MIT",
    main: `./dist/${packageFileName}.js`,
    module: `./esm/${packageFileName}.js`,
    types: `./esm/${packageFileName}.d.ts`,
    devDependencies: {
      typescript: "^3.1.1",
      rollup: "^0.66.2",
      "rollup-plugin-node-resolve": "^3.4.0",
      "rollup-plugin-sourcemaps": "^0.4.2",
      "uglify-js": "^3.4.9"
    },
    homepage: `https://github.com/Azure/azure-sdk-for-js/tree/master/${packageSdkPath}`,
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
      minify: `uglifyjs -c -m --comments --source-map "content='./dist/${packageFileName}.js.map'" -o ./dist/${packageFileName}.min.js ./dist/${packageFileName}.js`,
      prepack: "npm install && npm run build"
    },
    sideEffects: false,
    autoPublish: true
  };
}
