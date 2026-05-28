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
    ...renderClassicalFiles(codeModel),
    renderLogger(codeModel.packageInfo),
    ...renderIndexFiles(codeModel),
    ...renderHelpers(codeModel.helpers),
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
  if (enumType.knownValuesOnly) {
    addDocs(sourceFile, enumType.docs);
    sourceFile.addEnum({
      name: enumType.name,
      isExported: true,
      members: enumType.members.map((member) => ({
        name: member.name,
        value: member.value,
      })),
    });
    return;
  }

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

function getCredentialParameter(client: TSClient): { name: string; type: string } | undefined {
  return client.credential
    ? { name: client.credential.paramName, type: client.credential.type }
    : undefined;
}

function renderEndpointExpression(client: TSClient, endpointParameterName: string): string {
  if (client.endpoint.urlTemplate === "{endpoint}") {
    return `String(${endpointParameterName})`;
  }
  return `\`${client.endpoint.urlTemplate.replace(/\{[^}]+\}/g, `\${${endpointParameterName}}`)}\``;
}

function renderApiVersionInterfaceProperty(client: TSClient): string {
  if (!client.apiVersion) {
    return "";
  }
  return `
  /** The API version to use for this operation. */
  /** Known values of {@link KnownVersions} that the service accepts. */
  apiVersion?: string;
`;
}

function renderCredentialOptions(client: TSClient): string {
  if (!client.credential) {
    return "";
  }
  const scopes = client.credential.scopes.length > 0 ? client.credential.scopes : [];
  const apiKeyHeaderName = client.credential.apiKeyHeaderName;
  return `
    credentials: {
      scopes: options.credentials?.scopes ?? ${JSON.stringify(scopes)},${
        apiKeyHeaderName
          ? `
      apiKeyHeaderName: options.credentials?.apiKeyHeaderName ?? ${JSON.stringify(apiKeyHeaderName)},`
          : ""
      }
    },`;
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
  const credentialParameter = getCredentialParameter(client);
  const endpointExpression = endpointParameter
    ? renderEndpointExpression(client, endpointParameter.name)
    : JSON.stringify(client.endpoint.urlTemplate);
  const parameters = [
    ...(endpointParameter ? [`${endpointParameter.name}: ${endpointParameter.type}`] : []),
    ...(credentialParameter ? [`${credentialParameter.name}: ${credentialParameter.type}`] : []),
  ];
  const content = `${copyrightHeader()}

import { logger } from "../logger.js";
${client.apiVersion ? `import { KnownVersions } from "../models/models.js";\n` : ""}import { Client, ClientOptions, getClient } from "@azure-rest/core-client";
${credentialParameter ? `import { KeyCredential, TokenCredential } from "@azure/core-auth";\n` : ""}
export interface ${contextName} extends Client {${renderApiVersionInterfaceProperty(client)}}

/** Optional parameters for the client. */
export interface ${optionsName} extends ClientOptions {${renderApiVersionInterfaceProperty(client)}}

export function ${factoryName}(
  ${parameters.length > 0 ? `${parameters.join(",\n  ")},\n  ` : ""}options: ${optionsName} = {},
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
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },${renderCredentialOptions(client)}
  };
  const clientContext = getClient(endpointUrl, ${credentialParameter?.name ?? "undefined"}, updatedOptions);
${client.apiVersion ? `  const apiVersion = options.apiVersion;\n  return { ...clientContext, apiVersion } as ${contextName};` : `\n  if (options.apiVersion) {
    logger.warning(
      "This client does not support client api-version, please change it at the operation level",
    );
  }
  return clientContext;`}
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

${renderOperationImports(
  clientBaseName,
  serializerNames,
  optionNames,
  operations.some((operation) => operation.apiVersionQuery),
)}

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
  needsUrlTemplate: boolean,
): string {
  const serializersImport =
    serializerNames.length > 0
      ? `import { ${serializerNames.join(", ")} } from "../../models/models.js";\n`
      : "";
  const urlTemplateImport = needsUrlTemplate
    ? `import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";\n`
    : "";
  return `import { ${clientBaseName}Context as Client } from "../index.js";
${urlTemplateImport}${serializersImport}import {
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

function renderOperationDocs(operation: TSOperation, indent = ""): string {
  if (operation.docs.length === 0) {
    return "";
  }
  if (operation.docs.length === 1) {
    return `${indent}/** ${operation.docs[0]} */\n`;
  }
  const lines = operation.docs.map((line) => `${indent} * ${line}`).join("\n");
  return `${indent}/**\n${lines}\n${indent} */\n`;
}

function renderPathExpression(operation: TSOperation): string {
  if (!operation.apiVersionQuery) {
    return "";
  }
  const query = operation.apiVersionQuery;
  return `  const path = expandUrlTemplate(
    "${operation.path}{?${query.encodedName}}",
    {
      "${query.encodedName}": context.apiVersion ?? "${query.defaultValue}",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
`;
}

function renderSendFunction(operation: TSOperation): string {
  const parameters = renderOperationSignatureParameters(operation);
  return `export function _${operation.name}Send(
  context: Client,
${parameters}
  options: ${operation.optionsType.name} = { requestOptions: {} },
): StreamableMethod {
${renderPathExpression(operation)}  return context
    .path(${operation.apiVersionQuery ? "path" : JSON.stringify(operation.path)})
    .${operation.httpMethod.toLowerCase()}({
      ...operationOptionsToRequestParameters(options),
      contentType: ${JSON.stringify(operation.contentType ?? "application/json")},
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
  return `${renderOperationDocs(operation)}export async function ${operation.name}(
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
  const bodyParameter = operation.parameters.find(
    (parameter) => parameter.location === "body",
  );
  if (operation.bodyShape === "raw") {
    return `body: ${bodyParameter?.name ?? "body"},`;
  }
  if (operation.bodyShape === "named-with-serializer") {
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
 * Renders classical client class and operation group wrappers.
 *
 * Consumes: `TSCodeModel.clients` with operation groups and operations
 * Produces: `src/{clientName}.ts`, `src/classic/{group}/index.ts`, `src/classic/index.ts`
 */
export function renderClassicalFiles(
  codeModel: Pick<TSCodeModel, "clients">,
): RenderedFile[] {
  return codeModel.clients.flatMap((client) => [
    renderClassicalClient(client),
    ...client.operationGroups.map((group) =>
      renderClassicalOperationGroup(client, group),
    ),
    renderClassicalBarrel(client),
  ]);
}

export function renderClassicalClient(client: TSClient): RenderedFile {
  const clientBaseName = getClientBaseName(client.name);
  const contextName = `${clientBaseName}Context`;
  const optionsName = `${clientBaseName}ClientOptionalParams`;
  const factoryName = `create${clientBaseName}`;
  const clientClassName = `${clientBaseName}Client`;
  const endpointParameter = getEndpointParameter(client);
  const credentialParameter = getCredentialParameter(client);
  const constructorParameters = [
    ...(endpointParameter
      ? [`${endpointParameter.name}: ${endpointParameter.type}`]
      : []),
    ...(credentialParameter ? [`${credentialParameter.name}: ${credentialParameter.type}`] : []),
    `options: ${optionsName} = {}`,
  ].join(", ");
  const factoryOptions = `{
      ...options,
      userAgentOptions: { userAgentPrefix },
    }`;
  const factoryArguments = [
    ...(endpointParameter ? [endpointParameter.name] : []),
    ...(credentialParameter ? [credentialParameter.name] : []),
    factoryOptions,
  ].join(", ");
  const groupImports = client.operationGroups
    .map((group) => {
      const groupType = `${upperFirst(group.name)}Operations`;
      return `import { ${groupType}, _get${upperFirst(
        group.name,
      )}Operations } from "./classic/${group.name}/index.js";`;
    })
    .join("\n");
  const groupInitializers = client.operationGroups
    .map(
      (group) =>
        `    this.${group.name} = _get${upperFirst(group.name)}Operations(this._client);`,
    )
    .join("\n");
  const groupProperties = client.operationGroups
    .map(
      (group) =>
        `  /** The operation groups for ${group.name} */\n  public readonly ${group.name}: ${upperFirst(group.name)}Operations;`,
    )
    .join("\n\n");

  const content = `${copyrightHeader()}

import {
  ${contextName},
  ${optionsName},
  ${factoryName},
} from "./api/index.js";
${groupImports}
${credentialParameter ? `import { KeyCredential, TokenCredential } from "@azure/core-auth";\n` : ""}import { Pipeline } from "@azure/core-rest-pipeline";

export type { ${optionsName} } from "./api/${lowerFirst(clientBaseName)}Context.js";

export class ${clientClassName} {
  private _client: ${contextName};
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(${constructorParameters}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? \`${"${prefixFromOptions}"} azsdk-js-client\`
      : \`azsdk-js-client\`;
    this._client = ${factoryName}(${factoryArguments});
    this.pipeline = this._client.pipeline;
${groupInitializers}
  }

${groupProperties}
}
`;
  return { path: `src/${lowerFirst(clientClassName)}.ts`, content };
}

export function renderClassicalOperationGroup(
  client: TSClient,
  group: TSOperationGroup,
): RenderedFile {
  const clientBaseName = getClientBaseName(client.name);
  const contextName = `${clientBaseName}Context`;
  const groupName = upperFirst(group.name);
  const operationNames = group.operations
    .map((operation) => operation.name)
    .join(", ");
  const optionNames = group.operations
    .map((operation) => operation.optionsType.name)
    .join(",\n  ");
  const content = `${copyrightHeader()}

import { ${contextName} } from "../../api/${lowerFirst(clientBaseName)}Context.js";
import { ${operationNames} } from "../../api/${group.name}/operations.js";
import {
  ${optionNames},
} from "../../api/${group.name}/options.js";

/** Interface representing a ${groupName} operations. */
export interface ${groupName}Operations {
${group.operations.map(renderClassicalMethodSignature).join("\n")}
}

function _get${groupName}(context: ${contextName}) {
  return {
${group.operations.map(renderClassicalMethodDelegate).join("\n")}
  };
}

${renderGetOperationsFunctionDeclaration(groupName, contextName)} {
  return {
    ..._get${groupName}(context),
  };
}
`;
  return { path: `src/classic/${group.name}/index.ts`, content };
}

export function renderClassicalBarrel(client: TSClient): RenderedFile {
  const exports = client.operationGroups
    .map(
      (group) =>
        `export type { ${upperFirst(group.name)}Operations } from "./${group.name}/index.js";`,
    )
    .join("\n");
  return {
    path: "src/classic/index.ts",
    content: `${copyrightHeader()}\n\n${exports}\n`,
  };
}

function renderGetOperationsFunctionDeclaration(
  groupName: string,
  contextName: string,
): string {
  const oneLine = `export function _get${groupName}Operations(context: ${contextName}): ${groupName}Operations`;
  if (oneLine.length <= 100) {
    return oneLine;
  }
  return `export function _get${groupName}Operations(\n  context: ${contextName},\n): ${groupName}Operations`;
}

function renderClassicalMethodSignature(operation: TSOperation): string {
  const docs = renderOperationDocs(operation, "  ");
  if (shouldRenderMultilineSignature(operation)) {
    return `${docs}  ${operation.name}: (\n${renderClassicalSignatureParameters(
      operation,
      4,
    )}\n  ) => Promise<${operation.returnType.type}>;`;
  }
  return `${docs}  ${operation.name}: (${renderClassicalSignatureParameters(
    operation,
  )}) => Promise<${operation.returnType.type}>;`;
}

function renderClassicalMethodDelegate(operation: TSOperation): string {
  const parameterNames = operation.parameters
    .map((parameter) => parameter.name)
    .join(", ");
  const argumentsList = parameterNames
    ? `${parameterNames}, options`
    : "options";
  if (hasMultilineParameter(operation)) {
    return `    ${operation.name}: (\n${renderClassicalSignatureParameters(
      operation,
      6,
    )}\n    ) => ${operation.name}(context, ${argumentsList}),`;
  }
  const line = `    ${operation.name}: (${renderClassicalSignatureParameters(
    operation,
  )}) => ${operation.name}(context, ${argumentsList}),`;
  if (line.length <= 100) {
    return line;
  }
  return `    ${operation.name}: (${renderClassicalSignatureParameters(
    operation,
  )}) =>\n      ${operation.name}(context, ${argumentsList}),`;
}

function renderClassicalSignatureParameters(
  operation: TSOperation,
  indent?: number,
): string {
  if (indent === undefined) {
    return [
      ...operation.parameters.map(
        (parameter) => `${parameter.name}: ${parameter.type}`,
      ),
      `options?: ${operation.optionsType.name}`,
    ].join(", ");
  }

  const spaces = " ".repeat(indent);
  return [
    ...operation.parameters.map((parameter) =>
      renderClassicalParameter(parameter, indent),
    ),
    `${spaces}options?: ${operation.optionsType.name},`,
  ].join("\n");
}

function renderClassicalParameter(
  parameter: TSOperationParameter,
  indent: number,
): string {
  const spaces = " ".repeat(indent);
  const lines = parameter.type.split("\n");
  if (lines.length === 1) {
    return `${spaces}${parameter.name}: ${parameter.type},`;
  }
  return [
    `${spaces}${parameter.name}: ${(lines[0] ?? "").trimEnd()}`,
    ...lines.slice(1).map((line, index, rest) => {
      const trimmed = line.trim();
      const lineIndent = trimmed === "}" ? spaces : `${spaces}  `;
      const suffix = index === rest.length - 1 ? "," : "";
      return `${lineIndent}${trimmed}${suffix}`;
    }),
  ].join("\n");
}

function hasMultilineParameter(operation: TSOperation): boolean {
  return operation.parameters.some((parameter) =>
    parameter.type.includes("\n"),
  );
}

function shouldRenderMultilineSignature(operation: TSOperation): boolean {
  return (
    hasMultilineParameter(operation) ||
    `  ${operation.name}: (${renderClassicalSignatureParameters(operation)}) => Promise<${operation.returnType.type}>;`.length > 100
  );
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
export function renderHelpers(helpers: TSHelperFile[]): RenderedFile[] {
  return helpers.map((helper) => {
    if (helper.outputPath === "static-helpers/urlTemplate.ts") {
      return { path: "src/static-helpers/urlTemplate.ts", content: urlTemplateHelperContent() };
    }
    throw new Error(`Unsupported helper: ${helper.outputPath}`);
  });
}

/**
 * Renders barrel index files (root, subpath, models, api).
 *
 * Consumes: full `TSCodeModel` (needs to know all exported symbols)
 * Produces: `src/index.ts`, `src/models/index.ts`, `src/api/index.ts`, etc.
 */
export function renderIndexFiles(codeModel: TSCodeModel): RenderedFile[] {
  return [
    renderRootBarrel(codeModel),
    ...codeModel.clients.map((client) => renderApiBarrel(client)),
    renderModelsBarrel(codeModel),
  ];
}

export function renderRootBarrel(
  codeModel: Pick<TSCodeModel, "clients" | "enums">,
): RenderedFile {
  const clientExports = codeModel.clients
    .map((client) => getClientBaseName(client.name))
    .sort()
    .map(
      (clientBaseName) =>
        `export { ${clientBaseName}Client } from "./${lowerFirst(clientBaseName)}Client.js";`,
    )
    .join("\n");
  const clientOptionNames = codeModel.clients
    .map((client) => `${getClientBaseName(client.name)}ClientOptionalParams`)
    .sort();
  const operationOptionExports = collectOperationOptionExports(
    codeModel.clients,
  );
  const groupInterfaceNames = codeModel.clients
    .flatMap((client) => client.operationGroups)
    .map((group) => `${upperFirst(group.name)}Operations`)
    .sort();

  const enumValueExports = codeModel.enums
    .filter((enumType) => enumType.knownValuesOnly)
    .map((enumType) => enumType.name)
    .sort();

  const sections = [
    clientExports,
    enumValueExports.length > 0
      ? `export { ${enumValueExports.join(", ")} } from "./models/index.js";`
      : "",
    clientOptionNames.length > 0
      ? `export type { ${clientOptionNames.join(", ")} } from "./api/index.js";`
      : "",
    ...operationOptionExports,
    groupInterfaceNames.length > 0
      ? `export type { ${groupInterfaceNames.join(", ")} } from "./classic/index.js";`
      : "",
    `export { RestError, isRestError } from "@azure/core-rest-pipeline";`,
  ].filter((section) => section.length > 0);

  return {
    path: "src/index.ts",
    content: `${copyrightHeader()}\n\n${sections.join("\n")}\n`,
  };
}

export function renderApiBarrel(client: TSClient): RenderedFile {
  const clientBaseName = getClientBaseName(client.name);
  const contextModule = `./${lowerFirst(clientBaseName)}Context.js`;
  const contextTypeNames = [
    `${clientBaseName}Context`,
    `${clientBaseName}ClientOptionalParams`,
  ];
  const factoryName = `create${clientBaseName}`;

  const contextTypeExport =
    contextTypeNames.length > 1 && (client.credential || client.apiVersion)
      ? `export type {\n  ${contextTypeNames.join(",\n  ")},\n} from "${contextModule}";`
      : `export type { ${contextTypeNames.join(", ")} } from "${contextModule}";`;
  return {
    path: "src/api/index.ts",
    content: `${copyrightHeader()}\n\n${contextTypeExport}\nexport { ${factoryName} } from "${contextModule}";\n`,
  };
}

export function renderModelsBarrel(
  codeModel: Pick<TSCodeModel, "models" | "enums" | "unions">,
): RenderedFile {
  const valueNames = codeModel.enums
    .filter((enumType) => enumType.knownValuesOnly)
    .map((enumType) => enumType.name)
    .sort();
  const typeNames = [
    ...codeModel.models.map((model) => model.name),
    ...codeModel.enums
      .filter((enumType) => !enumType.knownValuesOnly)
      .map((enumType) => enumType.name),
    ...codeModel.unions.map((union) => union.name),
  ]
    .filter((name) => !name.startsWith("_"))
    .sort();
  const sections = [
    valueNames.length > 0 ? `export { ${valueNames.join(", ")} } from "./models.js";` : "",
    typeNames.length > 0 ? `export type { ${typeNames.join(", ")} } from "./models.js";` : "",
  ].filter((section) => section.length > 0);
  const content =
    sections.length > 0
      ? `${copyrightHeader()}\n\n${sections.join("\n")}\n`
      : `${copyrightHeader()}\n`;

  return {
    path: "src/models/index.ts",
    content,
  };
}

function collectOperationOptionExports(clients: TSClient[]): string[] {
  const optionsByGroup = new Map<string, Set<string>>();
  for (const client of clients) {
    for (const group of client.operationGroups) {
      const groupOptions = optionsByGroup.get(group.name) ?? new Set<string>();
      for (const operation of group.operations) {
        groupOptions.add(operation.optionsType.name);
      }
      optionsByGroup.set(group.name, groupOptions);
    }
  }

  return [...optionsByGroup.entries()]
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([groupName, optionNames]) =>
      renderTypeExport([...optionNames], `./api/${groupName}/index.js`),
    );
}

function renderTypeExport(typeNames: string[], modulePath: string): string {
  if (typeNames.length === 0) {
    return "";
  }
  if (typeNames.length === 1) {
    return `export type { ${typeNames[0]} } from "${modulePath}";`;
  }
  return `export type {\n  ${typeNames.join(",\n  ")},\n} from "${modulePath}";`;
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
    { path: "CHANGELOG.md", content: renderChangelog(codeModel.packageInfo) },
    { path: "LICENSE", content: renderLicense() },
    { path: "api-extractor.json", content: `${renderApiExtractorJson(codeModel.packageInfo)}\n` },
    { path: "eslint.config.mjs", content: renderEslintConfig() },
    { path: "rollup.config.js", content: renderRollupConfig() },
  ];
}

function renderLicense(): string {
  return `Copyright (c) Microsoft Corporation.

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;
}

function renderEslintConfig(): string {
  return `import azsdkEslint from "@azure/eslint-plugin-azure-sdk";

export default azsdkEslint.config([
  {
    rules: {
      "@azure/azure-sdk/ts-modules-only-named": "warn",
      "@azure/azure-sdk/ts-package-json-types": "warn",
      "@azure/azure-sdk/ts-package-json-engine-is-present": "warn",
      "@azure/azure-sdk/ts-package-json-files-required": "off",
      "@azure/azure-sdk/ts-package-json-main-is-cjs": "off",
      "tsdoc/syntax": "warn"
    }
  }
]);
`;
}

function renderRollupConfig(): string {
  return `// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import nodeResolve from "@rollup/plugin-node-resolve";
import cjs from "@rollup/plugin-commonjs";
import sourcemaps from "rollup-plugin-sourcemaps";
import multiEntry from "@rollup/plugin-multi-entry";
import json from "@rollup/plugin-json";

import nodeBuiltins from "builtin-modules";

// #region Warning Handler

/**
 * A function that can determine whether a rollup warning should be ignored. If
 * the function returns \`true\`, then the warning will not be displayed.
 */

function ignoreNiseSinonEval(warning) {
  return (
    warning.code === "EVAL" &&
    warning.id &&
    (warning.id.includes("node_modules/nise") || warning.id.includes("node_modules/sinon")) === true
  );
}

function ignoreChaiCircularDependency(warning) {
  return (
    warning.code === "CIRCULAR_DEPENDENCY" &&
    warning.importer &&
    warning.importer.includes("node_modules/chai") === true
  );
}

const warningInhibitors = [ignoreChaiCircularDependency, ignoreNiseSinonEval];

/**
 * Construct a warning handler for the shared rollup configuration
 * that ignores certain warnings that are not relevant to testing.
 */
function makeOnWarnForTesting() {
  return (warning, warn) => {
    // If every inhibitor returns false (i.e. no inhibitors), then show the warning
    if (warningInhibitors.every((inhib) => !inhib(warning))) {
      warn(warning);
    }
  };
}

// #endregion

function makeBrowserTestConfig() {
  const config = {
    input: {
      include: ["dist-esm/test/**/*.spec.js"],
      exclude: ["dist-esm/test/**/node/**"],
    },
    output: {
      file: \`dist-test/index.browser.js\`,
      format: "umd",
      sourcemap: true,
    },
    preserveSymlinks: false,
    plugins: [
      multiEntry({ exports: false }),
      nodeResolve({
        mainFields: ["module", "browser"],
      }),
      cjs(),
      json(),
      sourcemaps(),
      //viz({ filename: "dist-test/browser-stats.html", sourcemap: true })
    ],
    onwarn: makeOnWarnForTesting(),
    // Disable tree-shaking of test code.  In rollup-plugin-node-resolve@5.0.0,
    // rollup started respecting the "sideEffects" field in package.json.  Since
    // our package.json sets "sideEffects=false", this also applies to test
    // code, which causes all tests to be removed by tree-shaking.
    treeshake: false,
  };

  return config;
}

const defaultConfigurationOptions = {
  disableBrowserBundle: false,
};

export function makeConfig(pkg, options) {
  options = {
    ...defaultConfigurationOptions,
    ...(options || {}),
  };

  const baseConfig = {
    // Use the package's module field if it has one
    input: pkg["module"] || "dist-esm/src/index.js",
    external: [
      ...nodeBuiltins,
      ...Object.keys(pkg.dependencies),
      ...Object.keys(pkg.devDependencies),
    ],
    output: { file: "dist/index.js", format: "cjs", sourcemap: true },
    preserveSymlinks: false,
    plugins: [sourcemaps(), nodeResolve()],
  };

  const config = [baseConfig];

  if (!options.disableBrowserBundle) {
    config.push(makeBrowserTestConfig());
  }

  return config;
}

export default makeConfig(require("./package.json"));
`;
}

function renderChangelog(packageInfo: TSPackageInfo): string {
  return `# Release History\n\n## ${packageInfo.version} (Unreleased)\n\n### Features Added\n\n### Breaking Changes\n\n### Bugs Fixed\n\n### Other Changes\n`;
}

function renderApiExtractorJson(packageInfo: TSPackageInfo): string {
  const shortName = getPackageShortName(packageInfo.name);
  return `{
  "$schema": "https://developer.microsoft.com/json-schemas/api-extractor/v7/api-extractor.schema.json",
  "mainEntryPointFilePath": "dist/esm/index.d.ts",
  "docModel": { "enabled": true },
  "apiReport": { "enabled": true, "reportFolder": "./review" },
  "dtsRollup": {
    "enabled": true,
    "untrimmedFilePath": "",
    "publicTrimmedFilePath": "dist/${shortName}.d.ts"
  },
  "messages": {
    "tsdocMessageReporting": { "default": { "logLevel": "none" } },
    "extractorMessageReporting": {
      "ae-missing-release-tag": { "logLevel": "none" },
      "ae-unresolved-link": { "logLevel": "none" }
    }
  }
}`;
}

function urlTemplateHelperContent(): string {
  return "// Copyright (c) Microsoft Corporation.\n// Licensed under the MIT License.\n\n// ---------------------\n// interfaces\n// ---------------------\ninterface ValueOptions {\n  isFirst: boolean; // is first value in the expression\n  op?: string; // operator\n  varValue?: any; // variable value\n  varName?: string; // variable name\n  modifier?: string; // modifier e.g *\n  reserved?: boolean; // if true we'll keep reserved words with not encoding\n}\n\nexport interface UrlTemplateOptions {\n  // if set to true, reserved characters will not be encoded\n  allowReserved?: boolean;\n}\n\n// ---------------------\n// helpers\n// ---------------------\nfunction encodeComponent(val: string, reserved?: boolean, op?: string): string {\n  return (reserved ?? op === \"+\") || op === \"#\"\n    ? encodeReservedComponent(val)\n    : encodeRFC3986URIComponent(val);\n}\n\nfunction encodeReservedComponent(str: string): string {\n  return str\n    .split(/(%[0-9A-Fa-f]{2})/g)\n    .map((part) => (!/%[0-9A-Fa-f]/.test(part) ? encodeURI(part) : part))\n    .join(\"\");\n}\n\nfunction encodeRFC3986URIComponent(str: string): string {\n  return encodeURIComponent(str).replace(\n    /[!'()*]/g,\n    (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,\n  );\n}\n\nfunction isDefined(val: any): boolean {\n  return val !== undefined && val !== null;\n}\n\nfunction getNamedAndIfEmpty(op?: string): [boolean, string] {\n  return [!!op && [\";\", \"?\", \"&\"].includes(op), !!op && [\"?\", \"&\"].includes(op) ? \"=\" : \"\"];\n}\n\nfunction getFirstOrSep(op?: string, isFirst = false): string {\n  if (isFirst) {\n    return !op || op === \"+\" ? \"\" : op;\n  } else if (!op || op === \"+\" || op === \"#\") {\n    return \",\";\n  } else if (op === \"?\") {\n    return \"&\";\n  } else {\n    return op;\n  }\n}\n\nfunction getExpandedValue(option: ValueOptions): string {\n  let isFirst = option.isFirst;\n  const { op, varName, varValue: value, reserved } = option;\n  const vals: string[] = [];\n  const [named, ifEmpty] = getNamedAndIfEmpty(op);\n\n  if (Array.isArray(value)) {\n    for (const val of value.filter(isDefined)) {\n      // prepare the following parts: separator, varName, value\n      vals.push(`${getFirstOrSep(op, isFirst)}`);\n      if (named && varName) {\n        vals.push(`${encodeURIComponent(varName)}`);\n        if (val === \"\") {\n          vals.push(ifEmpty);\n        } else {\n          vals.push(\"=\");\n        }\n      }\n      vals.push(encodeComponent(val, reserved, op));\n      isFirst = false;\n    }\n  } else if (typeof value === \"object\") {\n    for (const key of Object.keys(value)) {\n      const val = value[key];\n      if (!isDefined(val)) {\n        continue;\n      }\n      // prepare the following parts: separator, key, value\n      vals.push(`${getFirstOrSep(op, isFirst)}`);\n      if (key) {\n        vals.push(`${encodeURIComponent(key)}`);\n        if (named && val === \"\") {\n          vals.push(ifEmpty);\n        } else {\n          vals.push(\"=\");\n        }\n      }\n      vals.push(encodeComponent(val, reserved, op));\n      isFirst = false;\n    }\n  }\n  return vals.join(\"\");\n}\n\nfunction getNonExpandedValue(option: ValueOptions): string | undefined {\n  const { op, varName, varValue: value, isFirst, reserved } = option;\n  const vals: string[] = [];\n  const first = getFirstOrSep(op, isFirst);\n  const [named, ifEmpty] = getNamedAndIfEmpty(op);\n  if (named && varName) {\n    vals.push(encodeComponent(varName, reserved, op));\n    if (value === \"\") {\n      if (!ifEmpty) {\n        vals.push(ifEmpty);\n      }\n      return !vals.join(\"\") ? undefined : `${first}${vals.join(\"\")}`;\n    }\n    vals.push(\"=\");\n  }\n\n  const items = [];\n  if (Array.isArray(value)) {\n    for (const val of value.filter(isDefined)) {\n      items.push(encodeComponent(val, reserved, op));\n    }\n  } else if (typeof value === \"object\") {\n    for (const key of Object.keys(value)) {\n      if (!isDefined(value[key])) {\n        continue;\n      }\n      items.push(encodeRFC3986URIComponent(key));\n      items.push(encodeComponent(value[key], reserved, op));\n    }\n  }\n  vals.push(items.join(\",\"));\n  return !vals.join(\",\") ? undefined : `${first}${vals.join(\"\")}`;\n}\n\nfunction getVarValue(option: ValueOptions): string | undefined {\n  const { op, varName, modifier, isFirst, reserved, varValue: value } = option;\n\n  if (!isDefined(value)) {\n    return undefined;\n  } else if ([\"string\", \"number\", \"boolean\"].includes(typeof value)) {\n    let val = value.toString();\n    const [named, ifEmpty] = getNamedAndIfEmpty(op);\n    const vals: string[] = [getFirstOrSep(op, isFirst)];\n    if (named && varName) {\n      // No need to encode varName considering it is already encoded\n      vals.push(varName);\n      if (val === \"\") {\n        vals.push(ifEmpty);\n      } else {\n        vals.push(\"=\");\n      }\n    }\n    if (modifier && modifier !== \"*\") {\n      val = val.substring(0, parseInt(modifier, 10));\n    }\n    vals.push(encodeComponent(val, reserved, op));\n    return vals.join(\"\");\n  } else if (modifier === \"*\") {\n    return getExpandedValue(option);\n  } else {\n    return getNonExpandedValue(option);\n  }\n}\n\n// ---------------------------------------------------------------------------------------------------\n// This is an implementation of RFC 6570 URI Template: https://datatracker.ietf.org/doc/html/rfc6570.\n// ---------------------------------------------------------------------------------------------------\nexport function expandUrlTemplate(\n  template: string,\n  context: Record<string, any>,\n  option?: UrlTemplateOptions,\n): string {\n  const result = template.replace(/\\{([^{}]+)\\}|([^{}]+)/g, (_, expr, text) => {\n    if (!expr) {\n      return encodeReservedComponent(text);\n    }\n    let op;\n    if ([\"+\", \"#\", \".\", \"/\", \";\", \"?\", \"&\"].includes(expr[0])) {\n      op = expr[0];\n      expr = expr.slice(1);\n    }\n    const varList = expr.split(/,/g);\n    const innerResult = [];\n    for (const varSpec of varList) {\n      const varMatch = /([^:*]*)(?::(\\d+)|(\\*))?/.exec(varSpec);\n      if (!varMatch || !varMatch[1]) {\n        continue;\n      }\n      const varValue = getVarValue({\n        isFirst: innerResult.length === 0,\n        op,\n        varValue: context[varMatch[1]],\n        varName: varMatch[1],\n        modifier: varMatch[2] || varMatch[3],\n        reserved: option?.allowReserved,\n      });\n      if (varValue) {\n        innerResult.push(varValue);\n      }\n    }\n    return innerResult.join(\"\");\n  });\n\n  return normalizeUnreserved(result);\n}\n\n/**\n * Normalize an expanded URI by decoding percent-encoded unreserved characters.\n * RFC 3986 unreserved: \"-\" / \".\" / \"~\"\n */\nfunction normalizeUnreserved(uri: string): string {\n  return uri.replace(/%([0-9A-Fa-f]{2})/g, (match, hex) => {\n    const char = String.fromCharCode(parseInt(hex, 16));\n    // Decode only if it's unreserved\n    if (/[.~-]/.test(char)) {\n      return char;\n    }\n    return match; // leave other encodings intact\n  });\n}\n";
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
    description: packageInfo.description ?? `A generated SDK for ${packageInfo.clientName}.`,
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
  return `{
  "compilerOptions": {
    "target": "ES2017",
    "module": "NodeNext",
    "lib": [],
    "declaration": true,
    "declarationMap": true,
    "inlineSources": true,
    "sourceMap": true,
    "importHelpers": true,
    "strict": true,
    "alwaysStrict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "NodeNext",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*.ts"]
}`;
}

function renderReadme(packageInfo: TSPackageInfo): string {
  return `# ${packageInfo.serviceName} client library for JavaScript

This package contains an isomorphic SDK (runs both in Node.js and in browsers) for ${packageInfo.serviceName} client.

${packageInfo.description ?? ""}

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

function upperFirst(name: string): string {
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
}
