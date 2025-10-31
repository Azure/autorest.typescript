// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import "mocha";

import { TestModelConfig, createMockModel } from "./mockHelper.js";
import {
  buildPackageFile,
  updatePackageFile
} from "../../src/metadata/buildPackageFile.js";

import { expect } from "chai";

describe("Package file generation", () => {
  describe("Flavor agnostic config", () => {
    it("[esm] should create a package file", () => {
      const libraryName = "@msinternal/test";
      const version = "1.0.0";
      const description = "Test description";
      const model = createMockModel({
        libraryName,
        moduleKind: "esm",
        version,
        description
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      // Verify flavorless metadata
      expect(packageFile).to.have.property("name", libraryName);
      expect(packageFile).to.have.property("version", version);
      expect(packageFile).to.have.property("description", description);
      expect(packageFile).to.have.property("tshy");
      expect(packageFile).to.have.property("type", "module");
    });

    it("should specify Node.js 20 as minimum engine version", () => {
      const model = createMockModel({
        libraryName: "@msinternal/test",
        moduleKind: "esm",
        version: "1.0.0",
        description: "Test description"
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      expect(packageFile).to.have.property("engines");
      expect(packageFile.engines).to.have.property("node", ">=20.0.0");
    });

    it("should specify @types/node version 20 in devDependencies", () => {
      const model = createMockModel({
        libraryName: "@msinternal/test",
        moduleKind: "esm",
        version: "1.0.0",
        description: "Test description"
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      expect(packageFile).to.have.property("devDependencies");
      expect(packageFile.devDependencies).to.have.property("@types/node", "^20.0.0");
    });

    it("[cjs] should create a package file", () => {
      const libraryName = "@msinternal/test";
      const nameWithoutScope = "test";
      const version = "1.0.0";
      const description = "Test description";
      const model = createMockModel({
        libraryName,
        moduleKind: "cjs",
        version,
        description
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      // Verify flavorless metadata
      expect(packageFile).to.have.property("main", "dist/index.js");
      expect(packageFile).to.have.property(
        "types",
        `./types/${nameWithoutScope}.d.ts`
      );
    });

    it("[esm] should create the right export mappings", () => {
      const libraryName = "@msinternal/test";
      const version = "1.0.0";
      const description = "Test description";
      const model = createMockModel({
        libraryName,
        moduleKind: "esm",
        version,
        description
      });

      const exports = {
        "./package.json": "./package.json",
        ".": "./src/index.ts",
        "./api": "./src/api/index.ts",
        "./models": "./src/models/index.ts"
      };
      const packageFileContent = buildPackageFile(model, { exports });
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      expect(packageFile).to.have.property("tshy");
      expect(packageFile.tshy).to.have.property("exports");
      expect(packageFile.tshy.exports).to.deep.equal(exports);
    });
  });

  describe("Azure flavor for Azure SDK for JS Monorepo", () => {
    const libraryName = "test";
    const version = "1.0.0";
    const description = "Test description";

    const baseConfig: TestModelConfig = {
      libraryName,
      moduleKind: "esm",
      version,
      description,
      flavor: "azure",
      isMonorepo: true
    };

    it("should create a package file with repo info", () => {
      const model = createMockModel({
        ...baseConfig,
        monorepoPackageDirectory: "test"
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      expect(packageFile).to.have.property("sdk-type", "client");
      expect(packageFile).to.have.property(
        "repository",
        "github:Azure/azure-sdk-for-js"
      );
      expect(packageFile).to.have.property("bugs");
      expect(packageFile.bugs).to.have.property(
        "url",
        "https://github.com/Azure/azure-sdk-for-js/issues"
      );
      expect(packageFile).to.have.property(
        "homepage",
        `https://github.com/Azure/azure-sdk-for-js/tree/main/test/README.md`
      );
      expect(packageFile).to.have.property(
        "prettier",
        "@azure/eslint-plugin-azure-sdk/prettier.json"
      );
    });

    it("should have monorepo metadata", () => {
      const model = createMockModel({ ...baseConfig });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      const expectedMetadata = {
        constantPaths: [
          {
            path: "src/test.ts",
            prefix: "userAgentInfo"
          }
        ]
      };

      // Verify monorepo specific metadata
      expect(packageFile).to.have.property("//metadata");
      expect(packageFile["//metadata"]).to.deep.equal(expectedMetadata);
    });

    it("should have monorepo metadata when source is swagger", () => {
      const model = createMockModel({ ...baseConfig, source: "Swagger" });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      const expectedMetadata = {
        constantPaths: [
          {
            path: "swagger/README.md",
            prefix: "package-version"
          },
          {
            path: "src/test.ts",
            prefix: "userAgentInfo"
          }
        ]
      };

      // Verify monorepo specific metadata
      expect(packageFile).to.have.property("//metadata");
      expect(packageFile["//metadata"]).to.deep.equal(expectedMetadata);
    });

    it("should have sample metadata", () => {
      const model = createMockModel({
        ...baseConfig,
        withSamples: true
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      const expectedSampleConfig = {
        productName: `${libraryName}`,
        productSlugs: ["azure"],
        disableDocsMs: true,
        apiRefLink: `https://learn.microsoft.com/javascript/api/${libraryName}`
      };

      expect(packageFile).to.have.property("//sampleConfiguration");
      expect(packageFile["//sampleConfiguration"]).to.deep.equal(
        expectedSampleConfig
      );
    });

    it("should have sample metadata when beta version", () => {
      const model = createMockModel({
        ...baseConfig,
        version: "1.0.0-beta.1",
        withSamples: true
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      const expectedSampleConfig = {
        productName: `${libraryName}`,
        productSlugs: ["azure"],
        disableDocsMs: true,
        apiRefLink: `https://learn.microsoft.com/javascript/api/${libraryName}?view=azure-node-preview`
      };

      expect(packageFile).to.have.property("//sampleConfiguration");
      expect(packageFile["//sampleConfiguration"]).to.deep.equal(
        expectedSampleConfig
      );
    });

    it("[cjs] should include correct entrypoints with tests", () => {
      const model = createMockModel({
        ...baseConfig,
        withTests: true,
        moduleKind: "cjs"
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      expect(packageFile).to.have.property("main", "dist/src/index.js");
      expect(packageFile).to.have.property("types", `./types/src/test.d.ts`);
      expect(packageFile).to.have.property("module", "./dist-esm/src/index.js");
    });

    it("[cjs] should include correct entrypoints with samples", () => {
      const model = createMockModel({
        ...baseConfig,
        withSamples: true,
        moduleKind: "cjs"
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      expect(packageFile).to.have.property("main", "dist/src/index.js");
      expect(packageFile).to.have.property("types", `./types/src/test.d.ts`);
      expect(packageFile).to.have.property("module", "./dist-esm/src/index.js");
    });

    it("[esm] should include correct entrypoints", () => {
      const model = createMockModel({
        ...baseConfig,
        withSamples: true,
        moduleKind: "esm"
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      const expectedTshy = {
        project: "../../../tsconfig.src.build.json",
        exports: { "./package.json": "./package.json", ".": "./src/index.ts" },
        dialects: ["esm", "commonjs"],
        esmDialects: ["browser", "react-native"],
        selfLink: false
      };

      expect(packageFile).to.have.property("tshy");
      expect(packageFile.tshy).to.deep.equal(expectedTshy);
      expect(packageFile).to.have.property("type", "module");
    });

    it("[esm] should include correct devDependencies", () => {
      const model = createMockModel({
        ...baseConfig,
        moduleKind: "esm"
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");
    });

    it("[esm] should include correct devDependencies with tests", () => {
      const model = createMockModel({
        ...baseConfig,
        moduleKind: "esm",
        withTests: true
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      expect(packageFile.devDependencies).to.have.property("@vitest/browser");
      expect(packageFile.devDependencies).to.have.property(
        "@vitest/coverage-istanbul"
      );
      expect(packageFile.devDependencies).to.have.property("playwright");
      expect(packageFile.devDependencies).to.have.property("vitest");
    });

    it("[esm] should include correct scripts with tests", () => {
      const model = createMockModel({
        ...baseConfig,
        moduleKind: "esm",
        withTests: true
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      expect(packageFile.scripts).to.have.property(
        "build",
        "npm run clean && dev-tool run build-package && dev-tool run extract-api"
      );
      expect(packageFile.scripts).to.have.property(
        "test:node:esm",
        "dev-tool run test:vitest --esm"
      );
      expect(packageFile.scripts).to.have.property(
        "test:node",
        "dev-tool run test:vitest"
      );
      expect(packageFile.scripts).to.have.property(
        "clean",
        "rimraf --glob dist dist-browser dist-esm test-dist temp types *.tgz *.log"
      );
      expect(packageFile.scripts).to.have.property(
        "extract-api",
        "rimraf review && dev-tool run extract-api"
      );
      expect(packageFile.scripts).to.have.property(
        "test:browser",
        "dev-tool run build-test && dev-tool run test:vitest --browser"
      );
      expect(packageFile.scripts).to.have.property("pack", "pnpm pack 2>&1");
      expect(packageFile.scripts).to.have.property(
        "test",
        "npm run test:node && npm run test:browser"
      );
      expect(packageFile.scripts).to.have.property(
        "format",
        'prettier --write --config ../../../.prettierrc.json --ignore-path ../../../.prettierignore "src/**/*.{ts,cts,mts}" "test/**/*.{ts,cts,mts}" "*.{js,cjs,mjs,json}" '
      );
    });

    it("[cjs] should include correct scripts with tests", () => {
      const model = createMockModel({
        ...baseConfig,
        moduleKind: "cjs",
        withTests: true
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      expect(packageFile.scripts).to.have.property(
        "build",
        "npm run clean && tsc -p . && dev-tool run extract-api"
      );
      expect(packageFile.scripts).to.have.property(
        "build:node",
        "tsc -p . && cross-env ONLY_NODE=true rollup -c 2>&1"
      );
      expect(packageFile.scripts).to.have.property(
        "build:test",
        "tsc -p ."
      );
      expect(packageFile.scripts).to.have.property(
        "build:debug",
        "tsc -p . && dev-tool run extract-api"
      );
      expect(packageFile.scripts).to.have.property(
        "clean",
        "rimraf --glob dist dist-browser dist-esm test-dist temp types *.tgz *.log"
      );
      expect(packageFile.scripts).to.have.property(
        "extract-api",
        "rimraf review && dev-tool run extract-api"
      );
      expect(packageFile.scripts).to.have.property(
        "format",
        'prettier --write --config ../../../.prettierrc.json --ignore-path ../../../.prettierignore "src/**/*.{ts,cts,mts}" "test/**/*.{ts,cts,mts}" "*.{js,cjs,mjs,json}" '
      );
    });

    it("[esm] should read clientContextPaths from config for modular", () => {
      const model = createMockModel({
        ...baseConfig,
        moduleKind: "esm",
        isModularLibrary: true
      });

      const packageFileContent = buildPackageFile(model, {
        clientContextPaths: ["src/api/chatCompletionsContext.ts"]
      });
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");
      expect(packageFile).to.have.property("//metadata");
      expect(packageFile["//metadata"]["constantPaths"][0]).to.have.property("path", "src/api/chatCompletionsContext.ts", "modular");
    });

    it("[esm] should read clientPath from config for rlc", () => {
      const model = createMockModel({
        ...baseConfig,
        moduleKind: "esm",
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");
      expect(packageFile).to.have.property("//metadata");
      expect(packageFile["//metadata"]["constantPaths"][0]).to.have.property("path", "src/test.ts", "rlc");
    });

    it("should skip lint scripts with arm packages for modular", () => {
      const model = createMockModel({
        ...baseConfig,
        azureArm: true,
        isModularLibrary: true
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      expect(packageFile.scripts).to.have.property(
        "lint:fix",
        "echo skipped"
      );
      expect(packageFile.scripts).to.have.property(
        "lint",
        "echo skipped"
      );
    });

    it("should include correct build:samples script for ARM packages with samples", () => {
      const model = createMockModel({
        ...baseConfig,
        azureArm: true,
        withSamples: true
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      expect(packageFile.scripts).to.have.property(
        "build:samples",
        "tsc -p tsconfig.samples.json && dev-tool samples publish -f"
      );
    });

    it("should include correct build:samples script for non-ARM packages with samples", () => {
      const model = createMockModel({
        ...baseConfig,
        azureArm: false,
        withSamples: true
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      expect(packageFile.scripts).to.have.property(
        "build:samples",
        "tsc -p tsconfig.samples.json"
      );
    });

    it("should skip build:samples script when samples are not enabled", () => {
      const model = createMockModel({
        ...baseConfig,
        azureArm: true,
        withSamples: false
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      expect(packageFile.scripts).to.have.property(
        "build:samples",
        "echo skipped"
      );
    });
    it("[esm] should include correct scripts with pack", () => {
      const model = createMockModel({
        ...baseConfig,
        moduleKind: "esm",
        withTests: true
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      expect(packageFile.scripts).to.have.property(
        "pack",
        "pnpm pack 2>&1"
      );
    });

    it("should include browser and react-native in package.json", () => {
      const model = createMockModel({
        ...baseConfig,
        azureArm: true,
        isModularLibrary: true
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      expect(packageFile).to.have.property(
        "browser", "./dist/browser/index.js",
      );
      expect(packageFile).to.have.property(
        "react-native", "./dist/react-native/index.js"
      );

    });
  });

  describe("Azure flavor for standalone library", () => {
    it("[cjs] should have correct devDependencies", () => {
      const model = createMockModel({
        moduleKind: "cjs",
        flavor: "azure",
        isMonorepo: false,
        withTests: false
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      expect(packageFile.devDependencies).to.have.property(
        "@rollup/plugin-commonjs"
      );
      expect(packageFile.devDependencies).to.have.property(
        "@rollup/plugin-json"
      );
      expect(packageFile.devDependencies).to.have.property(
        "@rollup/plugin-multi-entry"
      );
      expect(packageFile.devDependencies).to.have.property(
        "@rollup/plugin-node-resolve"
      );
      expect(packageFile.devDependencies).to.have.property("rollup");
      expect(packageFile.devDependencies).to.have.property(
        "rollup-plugin-sourcemaps"
      );
    });

    it("[cjs] should have correct devDependencies with test", () => {
      const model = createMockModel({
        moduleKind: "cjs",
        flavor: "azure",
        isMonorepo: false,
        withTests: true
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      expect(packageFile.devDependencies).to.have.property("nyc");
      expect(packageFile.devDependencies).to.have.property("mocha");
      expect(packageFile.devDependencies).to.have.property("@types/mocha");
      expect(packageFile.devDependencies).to.have.property("cross-env");
      expect(packageFile.devDependencies).to.have.property("@types/chai");
      expect(packageFile.devDependencies).to.have.property("chai");
      expect(packageFile.devDependencies).to.have.property(
        "karma-chrome-launcher"
      );
      expect(packageFile.devDependencies).to.have.property("karma-coverage");
      expect(packageFile.devDependencies).to.have.property(
        "karma-env-preprocessor"
      );
      expect(packageFile.devDependencies).to.have.property(
        "karma-firefox-launcher"
      );
      expect(packageFile.devDependencies).to.have.property(
        "karma-junit-reporter"
      );
      expect(packageFile.devDependencies).to.have.property(
        "karma-mocha-reporter"
      );
      expect(packageFile.devDependencies).to.have.property("karma-mocha");
      expect(packageFile.devDependencies).to.have.property(
        "karma-source-map-support"
      );
      expect(packageFile.devDependencies).to.have.property(
        "karma-sourcemap-loader"
      );
      expect(packageFile.devDependencies).to.have.property("karma");
    });

    it("[esm] should have correct devDependencies", () => {
      const model = createMockModel({
        moduleKind: "esm",
        flavor: "azure",
        isMonorepo: false,
        withTests: false
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      expect(packageFile.devDependencies).to.have.property("tshy");
    });

    it("[esm] should have correct devDependencies with test", () => {
      const model = createMockModel({
        moduleKind: "esm",
        flavor: "azure",
        isMonorepo: false,
        withTests: true
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      expect(packageFile.devDependencies).to.have.property("tshy");
      expect(packageFile.devDependencies).to.have.property("@vitest/browser");
      expect(packageFile.devDependencies).to.have.property(
        "@vitest/coverage-istanbul"
      );
      expect(packageFile.devDependencies).to.have.property("playwright");
      expect(packageFile.devDependencies).to.have.property("vitest");
    });

    it("[esm] should have correct scripts", () => {
      const model = createMockModel({
        moduleKind: "esm",
        flavor: "azure",
        isMonorepo: false
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      expect(packageFile.scripts).to.have.property(
        "build",
        "npm run clean && tshy && npm run extract-api"
      );
    });

    it("[esm] should have correct scripts with test", () => {
      const model = createMockModel({
        moduleKind: "esm",
        flavor: "azure",
        withTests: true,
        isMonorepo: false
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      expect(packageFile.scripts).to.have.property(
        "build",
        "npm run clean && tshy && npm run extract-api"
      );
      expect(packageFile.scripts).to.have.property(
        "test",
        "npm run clean && tshy && npm run unit-test:node && npm run unit-test:browser && npm run integration-test"
      );
      expect(packageFile.scripts).to.have.property(
        "test:node",
        "vitest -c vitest.config.ts"
      );
      expect(packageFile.scripts).to.have.property(
        "test:browser",
        "vitest -c vitest.browser.config.ts"
      );
    });

    it("[cjs] should have correct scripts", () => {
      const model = createMockModel({
        moduleKind: "cjs",
        flavor: "azure",
        isMonorepo: false
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      expect(packageFile.scripts).to.have.property(
        "build",
        "npm run clean && tsc && rollup -c 2>&1 && npm run minify && mkdirp ./review && npm run extract-api"
      );

      expect(packageFile.scripts).to.have.property(
        "minify",
        "uglifyjs -c -m --comments --source-map \"content='./dist/index.js.map'\" -o ./dist/index.min.js ./dist/index.js"
      );
    });

    it("[cjs] should have correct scripts", () => {
      const model = createMockModel({
        moduleKind: "cjs",
        flavor: "azure",
        isMonorepo: false,
        withTests: true
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      expect(packageFile.scripts).to.have.property(
        "build",
        "npm run clean && tsc && rollup -c 2>&1 && npm run minify && mkdirp ./review && npm run extract-api"
      );

      expect(packageFile.scripts).to.have.property(
        "minify",
        "uglifyjs -c -m --comments --source-map \"content='./dist/index.js.map'\" -o ./dist/index.min.js ./dist/index.js"
      );

      expect(packageFile.scripts).to.have.property(
        "build:test",
        "tsc -p . && rollup -c 2>&1"
      );
      expect(packageFile.scripts).to.have.property(
        "build:browser",
        "tsc -p . && cross-env ONLY_BROWSER=true rollup -c 2>&1"
      );
      expect(packageFile.scripts).to.have.property(
        "build:node",
        "tsc -p . && cross-env ONLY_NODE=true rollup -c 2>&1"
      );
    });
    it("[cjs] should update to correct lro dependencies if there are lro operations", () => {
      const model = createMockModel({
        moduleKind: "cjs",
        flavor: "azure",
        isMonorepo: false,
        withTests: true,
        hasLro: true
      });
      const packageFileContent = updatePackageFile(
        model,
        "./test/integration/static/package.json"
      );
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");
      expect(packageFile.dependencies).to.have.property(
        "@azure/core-lro",
        "^3.1.0"
      );
      expect(packageFile.dependencies).to.have.property(
        "@azure/abort-controller",
        "^2.1.2"
      );
    });

    it("[cjs] should return directly if package.json is non-existing or no lro operations", () => {
      let model = createMockModel({
        moduleKind: "cjs",
        flavor: "azure",
        isMonorepo: false,
        withTests: true,
        hasLro: false
      });
      let packageFileContent = updatePackageFile(
        model,
        "./test/integration/static/package.json"
      );
      expect(packageFileContent).to.be.undefined;
      model = createMockModel({
        moduleKind: "cjs",
        flavor: "azure",
        isMonorepo: false,
        withTests: true,
        hasLro: true
      });
      packageFileContent = updatePackageFile(
        model,
        "./test/integration/static/package_non_existing.json"
      );
      expect(packageFileContent).to.be.undefined;
    });

    it("should use standard version for LRO dependencies", () => {
      const model = createMockModel({
        moduleKind: "esm",
        flavor: "azure",
        isMonorepo: true,
        hasLro: true
      });
      
      const initialPackageInfo = {
        name: "@azure/test-package",
        version: "1.0.0",
        dependencies: {
          "@azure/core-client": "^1.0.0"
        }
      };
      
      const packageFileContent = updatePackageFile(model, initialPackageInfo);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");
      
      expect(packageFile.dependencies).to.have.property("@azure/core-lro", "^3.1.0");
      expect(packageFile.dependencies).to.have.property("@azure/abort-controller", "^2.1.2");
    });
  });

  describe("Flavorless lib", () => {
    it("should have correct dependencies", () => {
      const model = createMockModel({
        moduleKind: "esm"
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      expect(packageFile.dependencies).to.have.property(
        "@typespec/ts-http-runtime"
      );
    });

    it("[esm] should have correct devDependencies", () => {
      const model = createMockModel({
        moduleKind: "esm"
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      expect(packageFile.devDependencies).to.have.property("tshy");
    });

    it("[esm] should have correct scripts", () => {
      const model = createMockModel({
        moduleKind: "esm"
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      expect(packageFile.scripts).to.have.property(
        "build",
        "npm run clean && tshy && npm run extract-api"
      );
    });

    it("[cjs] should have correct scripts", () => {
      const model = createMockModel({
        moduleKind: "cjs"
      });
      const packageFileContent = buildPackageFile(model);
      const packageFile = JSON.parse(packageFileContent?.content ?? "{}");

      expect(packageFile.scripts).to.have.property(
        "build",
        "npm run clean && tsc && npm run extract-api"
      );
    });
  });
});
