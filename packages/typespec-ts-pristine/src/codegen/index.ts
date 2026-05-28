// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Codegen — Phase 3 of the emitter pipeline.
 *
 * This module consumes the TSCodeModel and produces TypeScript source file
 * strings. It has ZERO knowledge of TCGC — it reads only the code model.
 *
 * One function per output file kind. Each function documents:
 * - Which IR fields it consumes
 * - What output file(s) it produces
 *
 * Pattern: same as Go's `codegen.go/` recursive emit and Rust's `codegen/`.
 */

import { Project, QuoteKind, StructureKind } from "ts-morph";
import type {
  TSCodeModel,
  TSClient,
  TSModel,
  TSEnum,
  TSUnion,
  TSOperation,
  TSSerializerGroup,
  TSHelperFile,
  TSPackageInfo,
  TSProperty
} from "../codemodel/index.js";

/** A rendered output file. */
export interface RenderedFile {
  /** Relative path from output root */
  path: string;
  /** File content */
  content: string;
}

/**
 * Renders a complete TSCodeModel into output files.
 *
 * Orchestrates all per-file renderers and collects their output.
 *
 * @param codeModel - The fully-resolved code model
 * @returns All files to write
 */
export function render(codeModel: TSCodeModel): RenderedFile[] {
  return [...renderModels(codeModel), ...renderIndexFiles(codeModel), ...renderPackageFiles(codeModel)];
}

/**
 * Renders model interfaces and enum type aliases.
 *
 * Consumes: `TSCodeModel.models`, `TSCodeModel.enums`
 * Produces: `src/models/models.ts`
 */
export function renderModels(codeModel: Pick<TSCodeModel, "models" | "enums">): RenderedFile[] {
  const project = new Project({
    manipulationSettings: {
      quoteKind: QuoteKind.Double,
      useTrailingCommas: true
    }
  });
  const sourceFile = project.createSourceFile("models.ts", "", { overwrite: true });

  sourceFile.addStatements(`// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */`);

  for (const model of codeModel.models) {
    renderModel(sourceFile, model);
    renderModelSerializer(sourceFile, model);
    renderModelDeserializer(sourceFile, model);
  }

  for (const enumType of codeModel.enums) {
    renderEnum(sourceFile, enumType);
  }

  sourceFile.formatText({ indentSize: 2 });
  const content = sourceFile.getFullText().replace(/}\n\/\*\* model interface/g, "}\n\n/** model interface");
  return [{ path: "src/models/models.ts", content }];
}

function renderModel(sourceFile: import("ts-morph").SourceFile, model: TSModel): void {
  addModelDocs(sourceFile, model);
  const declaration = sourceFile.addInterface({
    name: model.name,
    isExported: true,
    extends: model.baseModel ? [model.baseModel] : undefined,
    properties: model.properties.map(getPropertyStructure)
  });

  if (model.additionalPropertiesType) {
    declaration.addIndexSignature({
      keyName: "propertyName",
      keyType: "string",
      returnType: model.additionalPropertiesType
    });
  }
}

function getPropertyStructure(property: TSProperty): import("ts-morph").PropertySignatureStructure {
  return {
    kind: StructureKind.PropertySignature,
    name: property.name,
    type: property.type,
    hasQuestionToken: property.optional,
    isReadonly: property.readonly,
    docs: property.docs.map((doc) => ({ description: doc }))
  };
}

function renderModelSerializer(sourceFile: import("ts-morph").SourceFile, model: TSModel): void {
  if (!model.needsSerializer || !model.serializerName) {
    return;
  }

  sourceFile.addFunction({
    name: model.serializerName,
    isExported: true,
    parameters: [{ name: "item", type: model.name }],
    returnType: "any",
    statements: [`return { ${getSerializerMappings(model.properties).join(", ")} };`]
  });
}

function renderModelDeserializer(sourceFile: import("ts-morph").SourceFile, model: TSModel): void {
  if (!model.needsDeserializer || !model.deserializerName) {
    return;
  }

  sourceFile.addFunction({
    name: model.deserializerName,
    isExported: true,
    parameters: [{ name: "item", type: "any" }],
    returnType: model.name,
    statements: [`return { ${getDeserializerMappings(model.properties).join(", ")} };`]
  });
}

function getSerializerMappings(properties: TSProperty[]): string[] {
  return properties
    .filter((property) => !property.readonly)
    .map((property) => getObjectMapping(property, `item[${JSON.stringify(property.name)}]`));
}

function getDeserializerMappings(properties: TSProperty[]): string[] {
  return properties.map((property) =>
    getObjectMapping(property, `item[${JSON.stringify(property.serializedName ?? property.name)}]`)
  );
}

function getObjectMapping(property: TSProperty, valueExpression: string): string {
  const wireName = property.serializedName ?? property.name;
  const key = isIdentifier(wireName) ? wireName : JSON.stringify(wireName);
  if (!property.optional) {
    return `${key}: ${valueExpression}`;
  }
  return `...(${valueExpression} === undefined ? {} : { ${key}: ${valueExpression} })`;
}

function isIdentifier(name: string): boolean {
  return /^[$A-Z_a-z][$\w]*$/.test(name);
}

function renderEnum(sourceFile: import("ts-morph").SourceFile, enumType: TSEnum): void {
  addDocs(sourceFile, enumType.docs);
  if (enumType.isExtensible) {
    sourceFile.addEnum({
      name: `Known${enumType.name}`,
      isExported: true,
      members: enumType.members.map((member) => ({ name: member.name, value: member.value }))
    });
    sourceFile.addTypeAlias({
      name: enumType.name,
      isExported: true,
      type: `string`
    });
    return;
  }

  sourceFile.addTypeAlias({
    name: enumType.name,
    isExported: true,
    type: enumType.members.map((member) => JSON.stringify(member.value)).join(" | ")
  });
}

function addModelDocs(sourceFile: import("ts-morph").SourceFile, model: TSModel): void {
  if (model.docs.length === 0) {
    sourceFile.addStatements(`/** model interface ${model.name} */`);
    return;
  }

  addDocs(sourceFile, model.docs);
}

function addDocs(sourceFile: import("ts-morph").SourceFile, docs: string[]): void {
  if (docs.length === 0) {
    return;
  }

  const lines = docs.map((line) => (line.length === 0 ? " *" : ` * ${line}`));
  sourceFile.addStatements(`/**\n${lines.join("\n")}\n */`);
}

/**
 * Renders enum type aliases and known-values constants.
 *
 * Consumes: `TSCodeModel.enums`
 * Produces: `src/models/enums.ts`
 */
export function renderEnums(_enums: TSEnum[]): RenderedFile[] {
  throw new Error("renderEnums: not yet implemented");
}

/**
 * Renders union type aliases.
 *
 * Consumes: `TSCodeModel.unions`
 * Produces: `src/models/unions.ts`
 */
export function renderUnions(_unions: TSUnion[]): RenderedFile[] {
  throw new Error("renderUnions: not yet implemented");
}

/**
 * Renders client context factories and classical client classes.
 *
 * Consumes: `TSCodeModel.clients` (recursively, including children)
 * Produces: `src/{clientName}Context.ts`, `src/{clientName}.ts`
 */
export function renderClients(_clients: TSClient[]): RenderedFile[] {
  throw new Error("renderClients: not yet implemented");
}

/**
 * Renders operation files — send, deserialize, and public API functions.
 *
 * Consumes: `TSClient.methods` and `TSClient.operationGroups[].operations`
 * Produces: `src/api/{group}/{operation}.ts`
 */
export function renderOperations(_clients: TSClient[]): RenderedFile[] {
  throw new Error("renderOperations: not yet implemented");
}

/**
 * Renders options interfaces for each operation.
 *
 * Consumes: `TSOperation.optionsType` across all clients
 * Produces: `src/api/{group}/options.ts`
 */
export function renderOptions(_operations: TSOperation[]): RenderedFile[] {
  throw new Error("renderOptions: not yet implemented");
}

/**
 * Renders serialization/deserialization helpers.
 *
 * Consumes: `TSCodeModel.serializers` + `TSCodeModel.models`
 * Produces: `src/models/serializers.ts`
 */
export function renderSerializers(
  _serializers: TSSerializerGroup[],
  _models: TSModel[]
): RenderedFile[] {
  throw new Error("renderSerializers: not yet implemented");
}

/**
 * Renders static helper files (paging, polling, auth, etc.).
 *
 * Consumes: `TSCodeModel.helpers`
 * Produces: `src/helpers/{category}.ts`
 */
export function renderHelpers(_helpers: TSHelperFile[]): RenderedFile[] {
  throw new Error("renderHelpers: not yet implemented");
}

/**
 * Renders barrel index files (root, subpath, models, api).
 *
 * Consumes: full `TSCodeModel` (needs to know all exported symbols)
 * Produces: `src/index.ts`, `src/models/index.ts`, `src/api/index.ts`, etc.
 */
export function renderIndexFiles(codeModel: TSCodeModel): RenderedFile[] {
  if (codeModel.models.length === 0 && codeModel.enums.length === 0) {
    return [];
  }

  return [
    {
      path: "src/models/index.ts",
      content: `${copyrightHeader()}\n\nexport * from "./models.js";\n`
    },
    {
      path: "src/index.ts",
      content: `${copyrightHeader()}\n\nexport * from "./models/index.js";\n`
    }
  ];
}

/**
 * Renders package infrastructure files (package.json, tsconfig, etc.).
 *
 * Consumes: `TSCodeModel.packageInfo`
 * Produces: `package.json`, `tsconfig.json`, `README.md`
 */
export function renderPackageFiles(codeModel: TSCodeModel): RenderedFile[] {
  return [
    { path: "package.json", content: `${renderPackageJson(codeModel.packageInfo)}\n` },
    { path: "tsconfig.json", content: `${renderTsconfig()}\n` },
    { path: "README.md", content: renderReadme(codeModel.packageInfo) }
  ];
}

function copyrightHeader(): string {
  return `// Copyright (c) Microsoft Corporation.\n// Licensed under the MIT License.`;
}

function renderPackageJson(packageInfo: TSPackageInfo): string {
  const tshyExports = Object.fromEntries([
    ["./package.json", "./package.json"],
    ...packageInfo.exports.map((item) => [item.subpath, item.source])
  ]);
  const packageJson = {
    name: packageInfo.name,
    version: packageInfo.version,
    description: `A generated SDK for ${packageInfo.clientName}.`,
    engines: { node: ">=20.0.0" },
    sideEffects: false,
    autoPublish: false,
    tshy: {
      exports: tshyExports,
      dialects: ["esm", "commonjs"],
      esmDialects: ["browser"],
      selfLink: false
    },
    type: "module",
    browser: "./dist/browser/index.js",
    keywords: ["node", "azure", "cloud", "typescript", "browser", "isomorphic"],
    author: "Microsoft Corporation",
    license: "MIT",
    files: ["dist/", "!dist/**/*.d.*ts.map", "README.md", "LICENSE"],
    dependencies: {
      "@azure/core-util": "^1.9.2",
      "@azure-rest/core-client": "^2.3.1",
      "@azure/core-auth": "^1.6.0",
      "@azure/core-rest-pipeline": "^1.5.0",
      "@azure/logger": "^1.0.0",
      tslib: "^2.6.2"
    },
    devDependencies: {
      dotenv: "^16.0.0",
      "@types/node": "^20.0.0",
      eslint: "^9.9.0",
      typescript: "~5.8.2",
      tshy: "^2.0.0",
      "@microsoft/api-extractor": "^7.40.3",
      rimraf: "^5.0.5",
      mkdirp: "^3.0.1"
    },
    scripts: {
      clean: "rimraf --glob dist dist-browser dist-esm test-dist temp types *.tgz *.log",
      "extract-api": "rimraf review && mkdirp ./review && api-extractor run --local",
      pack: "npm pack 2>&1",
      lint: "eslint package.json api-extractor.json src",
      "lint:fix": "eslint package.json api-extractor.json src --fix --fix-type [problem,suggestion]",
      build: "npm run clean && tshy && npm run extract-api"
    },
    exports: renderPackageExports(packageInfo.exports),
    main: "./dist/commonjs/index.js",
    types: "./dist/commonjs/index.d.ts",
    module: "./dist/esm/index.js"
  };
  return JSON.stringify(packageJson, undefined, 2);
}

function renderPackageExports(exports: TSPackageInfo["exports"]): Record<string, unknown> {
  return Object.fromEntries([
    ["./package.json", "./package.json"],
    ...exports.map((item) => [item.subpath, renderPackageExport(item.source)])
  ]);
}

function renderPackageExport(source: string): Record<string, Record<string, string>> {
  const distPath = source.replace(/^\.\/src\//, "./dist/{dialect}/").replace(/\.ts$/, ".js");
  const typesPath = distPath.replace(/\.js$/, ".d.ts");
  return {
    browser: {
      types: typesPath.replace("{dialect}", "browser"),
      default: distPath.replace("{dialect}", "browser")
    },
    import: {
      types: typesPath.replace("{dialect}", "esm"),
      default: distPath.replace("{dialect}", "esm")
    },
    require: {
      types: typesPath.replace("{dialect}", "commonjs"),
      default: distPath.replace("{dialect}", "commonjs")
    }
  };
}

function renderTsconfig(): string {
  return JSON.stringify(
    {
      compilerOptions: {
        target: "ES2017",
        module: "NodeNext",
        lib: [],
        declaration: true,
        declarationMap: true,
        inlineSources: true,
        sourceMap: true,
        importHelpers: true,
        strict: true,
        alwaysStrict: true,
        noUnusedLocals: true,
        noUnusedParameters: true,
        noImplicitReturns: true,
        noFallthroughCasesInSwitch: true,
        forceConsistentCasingInFileNames: true,
        moduleResolution: "NodeNext",
        allowSyntheticDefaultImports: true,
        esModuleInterop: true
      },
      include: ["src/**/*.ts"]
    },
    undefined,
    2
  );
}

function renderReadme(packageInfo: TSPackageInfo): string {
  return `# ${packageInfo.serviceName} client library for JavaScript

This package contains an isomorphic SDK (runs both in Node.js and in browsers) for ${packageInfo.serviceName} client.



Key links:

- [Package (NPM)](https://www.npmjs.com/package/${packageInfo.name})

## Getting started

### Currently supported environments

- [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule)
- Latest versions of Safari, Chrome, Edge and Firefox.

See our [support policy](https://github.com/Azure/azure-sdk-for-js/blob/main/SUPPORT.md) for more details.


### Install the \`${packageInfo.name}\` package

Install the ${packageInfo.serviceName} client library for JavaScript with \`npm\`:

\`\`\`bash
npm install ${packageInfo.name}
\`\`\`



### JavaScript Bundle
To use this client library in the browser, first you need to use a bundler. For details on how to do this, please refer to our [bundling documentation](https://aka.ms/AzureSDKBundling).

## Key concepts

### ${packageInfo.clientName}

\`${packageInfo.clientName}\` is the primary interface for developers using the ${packageInfo.serviceName} client library. Explore the methods on this client object to understand the different features of the ${packageInfo.serviceName} service that you can access.
`;
}

/**
 * Renders logger file.
 *
 * Consumes: `TSCodeModel.settings.packageName`
 * Produces: `src/logger.ts`
 */
export function renderLogger(_packageName: string): RenderedFile {
  throw new Error("renderLogger: not yet implemented");
}
