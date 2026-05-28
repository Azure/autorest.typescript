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
  TSOperationGroup,
  TSOperationParameter,
  TSSerializerGroup,
  TSHelperFile,
  TSPackageInfo,
  TSProperty,
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
  return [
    ...renderModels(codeModel),
    ...renderClients(codeModel),
    ...renderOperationFiles(codeModel),
    renderLogger(codeModel.packageInfo),
    ...renderIndexFiles(codeModel),
    ...renderPackageFiles(codeModel),
  ];
}

/**
 * Renders model interfaces and enum type aliases.
 *
 * Consumes: `TSCodeModel.models`, `TSCodeModel.enums`
 * Produces: `src/models/models.ts`
 */
export function renderModels(
  codeModel: Pick<TSCodeModel, "models" | "enums">,
): RenderedFile[] {
  const project = new Project({
    manipulationSettings: {
      quoteKind: QuoteKind.Double,
      useTrailingCommas: true,
    },
  });
  const sourceFile = project.createSourceFile("models.ts", "", {
    overwrite: true,
  });

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
  const content = sourceFile
    .getFullText()
    .replace(/}\n\/\*\* model interface/g, "}\n\n/** model interface");
  return [{ path: "src/models/models.ts", content }];
}

function renderModel(
  sourceFile: import("ts-morph").SourceFile,
  model: TSModel,
): void {
  addModelDocs(sourceFile, model);
  const declaration = sourceFile.addInterface({
    name: model.name,
    isExported: true,
    extends: model.baseModel ? [model.baseModel] : undefined,
    properties: model.properties.map(getPropertyStructure),
  });

  if (model.additionalPropertiesType) {
    declaration.addIndexSignature({
      keyName: "propertyName",
      keyType: "string",
      returnType: model.additionalPropertiesType,
    });
  }
}

function getPropertyStructure(
  property: TSProperty,
): import("ts-morph").PropertySignatureStructure {
  return {
    kind: StructureKind.PropertySignature,
    name: property.name,
    type: property.type,
    hasQuestionToken: property.optional,
    isReadonly: property.readonly,
    docs: property.docs.map((doc) => ({ description: doc })),
  };
}

function renderModelSerializer(
  sourceFile: import("ts-morph").SourceFile,
  model: TSModel,
): void {
  if (!model.needsSerializer || !model.serializerName) {
    return;
  }

  sourceFile.addFunction({
    name: model.serializerName,
    isExported: true,
    parameters: [{ name: "item", type: model.name }],
    returnType: "any",
    statements: [
      `return { ${getSerializerMappings(model.properties).join(", ")} };`,
    ],
  });
}

function renderModelDeserializer(
  sourceFile: import("ts-morph").SourceFile,
  model: TSModel,
): void {
  if (!model.needsDeserializer || !model.deserializerName) {
    return;
  }

  sourceFile.addFunction({
    name: model.deserializerName,
    isExported: true,
    parameters: [{ name: "item", type: "any" }],
    returnType: model.name,
    statements: [
      `return { ${getDeserializerMappings(model.properties).join(", ")} };`,
    ],
  });
}

function getSerializerMappings(properties: TSProperty[]): string[] {
  return properties
    .filter((property) => !property.readonly)
    .map((property) =>
      getObjectMapping(property, `item[${JSON.stringify(property.name)}]`),
    );
}

function getDeserializerMappings(properties: TSProperty[]): string[] {
  return properties.map((property) =>
    getObjectMapping(
      property,
      `item[${JSON.stringify(property.serializedName ?? property.name)}]`,
    ),
  );
}

function getObjectMapping(
  property: TSProperty,
  valueExpression: string,
): string {
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

function renderEnum(
  sourceFile: import("ts-morph").SourceFile,
  enumType: TSEnum,
): void {
  addDocs(sourceFile, enumType.docs);
  if (enumType.isExtensible) {
    sourceFile.addEnum({
      name: `Known${enumType.name}`,
      isExported: true,
      members: enumType.members.map((member) => ({
        name: member.name,
        value: member.value,
      })),
    });
    sourceFile.addTypeAlias({
      name: enumType.name,
      isExported: true,
      type: `string`,
    });
    return;
  }

  sourceFile.addTypeAlias({
    name: enumType.name,
    isExported: true,
    type: enumType.members
      .map((member) => JSON.stringify(member.value))
      .join(" | "),
  });
}

function addModelDocs(
  sourceFile: import("ts-morph").SourceFile,
  model: TSModel,
): void {
  if (model.docs.length === 0) {
    sourceFile.addStatements(`/** model interface ${model.name} */`);
    return;
  }

  addDocs(sourceFile, model.docs);
}

function addDocs(
  sourceFile: import("ts-morph").SourceFile,
  docs: string[],
): void {
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
 * Renders client context factories.
 *
 * Consumes: `TSCodeModel.clients`, `TSCodeModel.packageInfo`
 * Produces: `src/api/{clientName}Context.ts`
 */
export function renderClients(
  codeModel: Pick<TSCodeModel, "clients" | "packageInfo">,
): RenderedFile[] {
  return codeModel.clients.map((client) =>
    renderClientContext(client, codeModel.packageInfo),
  );
}

export function renderClientContext(
  client: TSClient,
  packageInfo: TSPackageInfo,
): RenderedFile {
  const clientBaseName = getClientBaseName(client.name);
  const endpointParameter = getEndpointParameter(client);
  const contextName = `${clientBaseName}Context`;
  const optionsName = `${clientBaseName}ClientOptionalParams`;
  const factoryName = `create${clientBaseName}`;
  const endpointExpression = endpointParameter
    ? `String(${endpointParameter.name})`
    : JSON.stringify(client.endpoint.urlTemplate);
  const parameters = endpointParameter
    ? `${endpointParameter.name}: ${endpointParameter.type},\n  `
    : "";
  const content = `${copyrightHeader()}

import { logger } from "../logger.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";

export interface ${contextName} extends Client {}

/** Optional parameters for the client. */
export interface ${optionsName} extends ClientOptions {}

export function ${factoryName}(
  ${parameters}options: ${optionsName} = {},
): ${contextName} {
  const endpointUrl = options.endpoint ?? ${endpointExpression};
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentInfo = \`azsdk-js-${getPackageShortName(packageInfo.name)}/${packageInfo.version}\`;
  const userAgentPrefix = prefixFromOptions
    ? \`${"${prefixFromOptions}"} azsdk-js-api ${"${userAgentInfo}"}\`
    : \`azsdk-js-api ${"${userAgentInfo}"}\`;
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
  };
  const clientContext = getClient(endpointUrl, undefined, updatedOptions);

  if (options.apiVersion) {
    logger.warning(
      "This client does not support client api-version, please change it at the operation level",
    );
  }
  return clientContext;
}
`;
  return { path: `src/api/${lowerFirst(clientBaseName)}Context.ts`, content };
}

/**
 * Renders operation files — send, deserialize, and public API functions.
 *
 * Consumes: `TSClient.methods` and `TSClient.operationGroups[].operations`
 * Produces: `src/api/{group}/{operation}.ts`
 */
export function renderOperations(
  client: TSClient,
  group: TSOperationGroup,
): RenderedFile {
  const operations = group.operations;
  const clientBaseName = getClientBaseName(client.name);
  const serializerNames = operations
    .filter((operation) => operation.bodyShape === "named-with-serializer")
    .map((operation) => getOperationBodySerializerName(operation))
    .sort();
  const optionNames = operations.map((operation) => operation.optionsType.name);
  const content = `${copyrightHeader()}

${renderOperationImports(clientBaseName, serializerNames, optionNames)}

${operations.map((operation) => renderOperation(operation)).join("\n\n")}
`;
  return { path: `src/api/${group.name}/operations.ts`, content };
}

/**
 * Renders options interfaces for each operation.
 *
 * Consumes: `TSOperation.optionsType` across all clients
 * Produces: `src/api/{group}/options.ts`
 */
export function renderOptions(
  _client: TSClient,
  group: TSOperationGroup,
): RenderedFile {
  const content = `${copyrightHeader()}

import { OperationOptions } from "@azure-rest/core-client";

${group.operations
  .map((operation) => renderOptionsInterface(operation))
  .join("\n\n")}
`;
  return { path: `src/api/${group.name}/options.ts`, content };
}

export function renderOperationGroupBarrel(
  _client: TSClient,
  group: TSOperationGroup,
): RenderedFile {
  const operationNames = group.operations
    .map((operation) => operation.name)
    .join(", ");
  const optionNames = group.operations
    .map((operation) => operation.optionsType.name)
    .join(",\n  ");
  const content = `${copyrightHeader()}

export { ${operationNames} } from "./operations.js";
export type {
  ${optionNames},
} from "./options.js";
`;
  return { path: `src/api/${group.name}/index.ts`, content };
}

export function renderOperationFiles(
  codeModel: Pick<TSCodeModel, "clients">,
): RenderedFile[] {
  return codeModel.clients.flatMap((client) =>
    client.operationGroups.flatMap((group) => [
      renderOperations(client, group),
      renderOptions(client, group),
      renderOperationGroupBarrel(client, group),
    ]),
  );
}

function renderOperationImports(
  clientBaseName: string,
  serializerNames: string[],
  optionNames: string[],
): string {
  const serializersImport =
    serializerNames.length > 0
      ? `import { ${serializerNames.join(", ")} } from "../../models/models.js";\n`
      : "";
  return `import { ${clientBaseName}Context as Client } from "../index.js";
${serializersImport}import {
  ${optionNames.join(",\n  ")},
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";`;
}

function renderOperation(operation: TSOperation): string {
  return `${renderSendFunction(operation)}

${renderDeserializeFunction(operation)}

${renderPublicOperationFunction(operation)}`;
}

function renderSendFunction(operation: TSOperation): string {
  const parameters = renderOperationSignatureParameters(operation);
  return `export function _${operation.name}Send(
  context: Client,
${parameters}
  options: ${operation.optionsType.name} = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("${operation.path}")
    .${operation.httpMethod.toLowerCase()}({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      ${renderBodyExpression(operation)}
    });
}`;
}

function renderDeserializeFunction(operation: TSOperation): string {
  return `export async function _${operation.name}Deserialize(result: PathUncheckedResponse): Promise<${operation.returnType.type}> {
  const expectedStatuses = ${JSON.stringify(operation.expectedStatuses)};
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return${operation.returnType.isVoid ? "" : " result.body as " + operation.returnType.type};
}`;
}

function renderPublicOperationFunction(operation: TSOperation): string {
  const parameters = renderOperationSignatureParameters(operation);
  const argumentNames = operation.parameters
    .map((parameter) => parameter.name)
    .join(", ");
  const sendArguments = argumentNames ? `${argumentNames}, options` : "options";
  return `export async function ${operation.name}(
  context: Client,
${parameters}
  options: ${operation.optionsType.name} = { requestOptions: {} },
): Promise<${operation.returnType.type}> {
  const result = await _${operation.name}Send(context, ${sendArguments});
  return _${operation.name}Deserialize(result);
}`;
}

function renderOperationSignatureParameters(operation: TSOperation): string {
  return operation.parameters
    .map((parameter) => renderOperationParameter(parameter))
    .join("\n");
}

function renderOperationParameter(parameter: TSOperationParameter): string {
  return `  ${parameter.name}: ${indentInlineType(parameter.type)},`;
}

function indentInlineType(type: string): string {
  return type;
}

function renderBodyExpression(operation: TSOperation): string {
  if (
    operation.parameters.every((parameter) => parameter.location !== "body")
  ) {
    return "";
  }
  if (operation.bodyShape === "named-with-serializer") {
    const bodyParameter = operation.parameters.find(
      (parameter) => parameter.location === "body",
    );
    return `body: ${getOperationBodySerializerName(operation)}(${bodyParameter?.name ?? "body"}),`;
  }
  const bodyProperties = operation.parameters
    .filter((parameter) => parameter.location === "body")
    .map((parameter) => `${parameter.name}: ${parameter.name}`)
    .join(", ");
  return `body: { ${bodyProperties} },`;
}

function getOperationBodySerializerName(operation: TSOperation): string {
  return `_${operation.name}RequestSerializer`;
}

function renderOptionsInterface(operation: TSOperation): string {
  const properties = operation.optionsType.properties
    .map((property) => `  ${property.name}?: ${property.type};`)
    .join("\n");
  return `/** Optional parameters. */
export interface ${operation.optionsType.name} extends OperationOptions {${properties ? `\n${properties}\n` : ""}}`;
}

/**
 * Renders serialization/deserialization helpers.
 *
 * Consumes: `TSCodeModel.serializers` + `TSCodeModel.models`
 * Produces: `src/models/serializers.ts`
 */
export function renderSerializers(
  _serializers: TSSerializerGroup[],
  _models: TSModel[],
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
      content: `${copyrightHeader()}\n\nexport * from "./models.js";\n`,
    },
    {
      path: "src/index.ts",
      content: `${copyrightHeader()}\n\nexport * from "./models/index.js";\n`,
    },
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
    {
      path: "package.json",
      content: `${renderPackageJson(codeModel.packageInfo)}\n`,
    },
    { path: "tsconfig.json", content: `${renderTsconfig()}\n` },
    { path: "README.md", content: renderReadme(codeModel.packageInfo) },
  ];
}

function copyrightHeader(): string {
  return `// Copyright (c) Microsoft Corporation.\n// Licensed under the MIT License.`;
}

function renderPackageJson(packageInfo: TSPackageInfo): string {
  const tshyExports = Object.fromEntries([
    ["./package.json", "./package.json"],
    ...packageInfo.exports.map((item) => [item.subpath, item.source]),
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
      selfLink: false,
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
      tslib: "^2.6.2",
    },
    devDependencies: {
      dotenv: "^16.0.0",
      "@types/node": "^20.0.0",
      eslint: "^9.9.0",
      typescript: "~5.8.2",
      tshy: "^2.0.0",
      "@microsoft/api-extractor": "^7.40.3",
      rimraf: "^5.0.5",
      mkdirp: "^3.0.1",
    },
    scripts: {
      clean:
        "rimraf --glob dist dist-browser dist-esm test-dist temp types *.tgz *.log",
      "extract-api":
        "rimraf review && mkdirp ./review && api-extractor run --local",
      pack: "npm pack 2>&1",
      lint: "eslint package.json api-extractor.json src",
      "lint:fix":
        "eslint package.json api-extractor.json src --fix --fix-type [problem,suggestion]",
      build: "npm run clean && tshy && npm run extract-api",
    },
    exports: renderPackageExports(packageInfo.exports),
    main: "./dist/commonjs/index.js",
    types: "./dist/commonjs/index.d.ts",
    module: "./dist/esm/index.js",
  };
  return JSON.stringify(packageJson, undefined, 2);
}

function renderPackageExports(
  exports: TSPackageInfo["exports"],
): Record<string, unknown> {
  return Object.fromEntries([
    ["./package.json", "./package.json"],
    ...exports.map((item) => [item.subpath, renderPackageExport(item.source)]),
  ]);
}

function renderPackageExport(
  source: string,
): Record<string, Record<string, string>> {
  const distPath = source
    .replace(/^\.\/src\//, "./dist/{dialect}/")
    .replace(/\.ts$/, ".js");
  const typesPath = distPath.replace(/\.js$/, ".d.ts");
  return {
    browser: {
      types: typesPath.replace("{dialect}", "browser"),
      default: distPath.replace("{dialect}", "browser"),
    },
    import: {
      types: typesPath.replace("{dialect}", "esm"),
      default: distPath.replace("{dialect}", "esm"),
    },
    require: {
      types: typesPath.replace("{dialect}", "commonjs"),
      default: distPath.replace("{dialect}", "commonjs"),
    },
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
        esModuleInterop: true,
      },
      include: ["src/**/*.ts"],
    },
    undefined,
    2,
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
export function renderLogger(packageInfo: TSPackageInfo): RenderedFile {
  return {
    path: "src/logger.ts",
    content: `${copyrightHeader()}\n\nimport { createClientLogger } from "@azure/logger";\nexport const logger = createClientLogger("${getPackageShortName(packageInfo.name)}");\n`,
  };
}

function getClientBaseName(clientName: string): string {
  return clientName.endsWith("Client")
    ? clientName.slice(0, -"Client".length)
    : clientName;
}

function getEndpointParameter(
  client: TSClient,
): TSClient["parameters"][number] | undefined {
  return client.parameters.find((parameter) =>
    parameter.name.toLowerCase().includes("endpoint"),
  );
}

function getPackageShortName(packageName: string): string {
  return packageName.split("/").at(-1) ?? packageName;
}

function lowerFirst(name: string): string {
  return `${name.charAt(0).toLowerCase()}${name.slice(1)}`;
}
