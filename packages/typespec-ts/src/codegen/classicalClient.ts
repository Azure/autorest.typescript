// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NameType, normalizeName } from "@azure-tools/rlc-common";
import {
  MethodDeclarationStructure,
  Project,
  Scope,
  SourceFile,
  StructureKind
} from "ts-morph";
import type {
  TSClient,
  TSGenerationSettings,
  TSMethod
} from "../codemodel/index.js";
import { resolveReference } from "../framework/reference.js";
import { dedupePagedAsyncIterableIteratorImports } from "./pagingImports.js";
import { refkey } from "../framework/refkey.js";
import { useDependencies } from "../framework/hooks/useDependencies.js";
import { AzurePollingDependencies } from "../modular/external-dependencies.js";
import {
  PagingHelpers,
  SimplePollerHelpers
} from "../modular/static-helpers-metadata.js";
import { getPagingLROMethodName } from "../modular/helpers/classicalOperationHelpers.js";

export function emitClassicalClient(
  project: Project,
  client: TSClient,
  settings: TSGenerationSettings
): SourceFile {
  const dependencies = useDependencies();
  const subfolder = client.path.join("/");
  const filePath = `${settings.sourceRoot}/${
    subfolder && subfolder !== "" ? subfolder + "/" : ""
  }${normalizeName(client.name, NameType.File)}.ts`;
  const file = project.createSourceFile(filePath, undefined, {
    overwrite: true
  });

  if (client.usesNamespacedContextType) {
    file.addImportDeclaration({
      namespaceImport: "Client",
      moduleSpecifier: "./api/index.js"
    });
  }

  file.addImportDeclaration({
    namedImports: [
      client.contextTypeName,
      `${client.name}OptionalParams`,
      `create${client.modularName}`
    ],
    moduleSpecifier: "./api/index.js"
  });
  file.addImportDeclaration({
    namedImports: ["Pipeline"],
    moduleSpecifier: "@azure/core-rest-pipeline"
  });
  file.addExportDeclaration({
    isTypeOnly: true,
    namedExports: [`${client.name}OptionalParams`],
    moduleSpecifier: `./api/${normalizeName(client.modularName, NameType.File)}Context.js`
  });

  for (const child of client.children) {
    file.addImportDeclaration({
      moduleSpecifier: `./${normalizeName(child.modularName, NameType.File)}/${normalizeName(
        child.name,
        NameType.File
      )}.js`,
      namedImports: [child.name, `${child.name}OptionalParams`]
    });
  }

  const clientClass = file.addClass({
    isExported: true,
    name: client.name
  });

  clientClass.addProperty({
    name: "_client",
    type: client.usesNamespacedContextType
      ? `Client.${client.contextTypeName}`
      : client.contextTypeName,
    scope: Scope.Private
  });
  clientClass.addProperty({
    name: "pipeline",
    type: resolveReference(dependencies.Pipeline),
    scope: Scope.Public,
    isReadonly: true,
    docs: ["The pipeline used by this client to make requests"]
  });

  const constructorParams = getConstructorParameters(client);
  if (client.hasParentInitializedChildren) {
    clientClass.addProperty({
      name: "_clientParams",
      type: `{${constructorParams.map((parameter) => `${parameter.name}: ${parameter.type}`).join(";")}; options: ${client.name}OptionalParams}`,
      scope: Scope.Private,
      docs: ["The parent client parameters that are used in the constructors."]
    });
  }

  const constructor = addConstructor(clientClass, client, constructorParams);
  const constructorArgs = constructorParams.map((parameter) => {
    if (
      client.allowOptionalSubscriptionId &&
      parameter.name.toLowerCase() === "subscriptionid"
    ) {
      return 'subscriptionId ?? ""';
    }

    return parameter.name;
  });

  constructor.addStatements([
    "const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;",
    "const userAgentPrefix = prefixFromOptions ? `${prefixFromOptions} azsdk-js-client` : `azsdk-js-client`;",
    `this._client = create${client.modularName}(${[
      ...constructorArgs,
      "{ ...options, userAgentOptions: { userAgentPrefix } }"
    ].join(",")});`,
    "this.pipeline = this._client.pipeline;"
  ]);

  if (client.hasParentInitializedChildren) {
    constructor.addStatements(
      `this._clientParams = { ${constructorParams.map((parameter) => parameter.name).join(", ")}, options };`
    );
  }

  const seenOperationGroups = new Set<string>();
  for (const group of client.operationGroups) {
    const rootGroupName = group.prefixes[0] ?? group.name;
    if (seenOperationGroups.has(rootGroupName)) {
      continue;
    }
    seenOperationGroups.add(rootGroupName);

    const propertyName = normalizeName(rootGroupName, NameType.Property);
    const operationsInterfaceName = `${normalizeName(rootGroupName, NameType.OperationGroup)}Operations`;
    const operationGetterName = `_get${normalizeName(rootGroupName, NameType.OperationGroup)}Operations`;

    clientClass.addProperty({
      name: propertyName,
      type: resolveReference(
        refkey(operationsInterfaceName, 0, "classicOperations")
      ),
      scope: Scope.Public,
      isReadonly: true,
      docs: [`The operation groups for ${propertyName}`]
    });
    constructor.addStatements(
      `this.${propertyName} = ${resolveReference(refkey(operationGetterName, 0, "getClassicOperations"))}(this._client);`
    );
  }

  clientClass.addMethods(
    client.methods.flatMap((method) =>
      buildMethodDeclarations(method, settings)
    )
  );

  for (const child of client.children) {
    const diffParams = getChildOnlyParameters(client, child);
    const method = clientClass.addMethod({
      docs: child.docs,
      name: `get${child.name}`,
      returnType: child.name,
      parameters: [
        ...diffParams.map((parameter) => ({
          name: parameter.name,
          type: parameter.type
        })),
        {
          name: "options",
          type: `${child.name}OptionalParams`,
          initializer: "{}"
        }
      ]
    });
    const parentArgs = constructorParams.map(
      (parameter) => `this._clientParams.${parameter.name}`
    );
    const childArgs = diffParams.map((parameter) => parameter.name);
    method.addStatements(
      `return new ${child.name}(${[
        ...parentArgs,
        ...childArgs,
        "{ ...this._clientParams.options, ...options }"
      ].join(",")});`
    );
  }

  file.fixMissingImports({}, { importModuleSpecifierEnding: "js" });
  dedupePagedAsyncIterableIteratorImports(file);
  file.fixUnusedIdentifiers();
  return file;
}

function addConstructor(
  clientClass: any,
  client: TSClient,
  constructorParams: { name: string; type: string }[]
) {
  if (!client.allowOptionalSubscriptionId) {
    return clientClass.addConstructor({
      docs: client.docs,
      parameters: [
        ...constructorParams.map((parameter) => ({
          name: parameter.name,
          type: parameter.type
        })),
        {
          name: "options",
          type: `${client.name}OptionalParams`,
          initializer: "{}"
        }
      ]
    });
  }

  const requiredWithoutSubscriptionId = constructorParams.filter(
    (parameter) => parameter.name.toLowerCase() !== "subscriptionid"
  );
  const constructor = clientClass.addConstructor({
    docs: client.docs,
    parameters: [
      ...requiredWithoutSubscriptionId.map((parameter) => ({
        name: parameter.name,
        type: parameter.type
      })),
      {
        name: "subscriptionIdOrOptions",
        type: `string | ${client.name}OptionalParams`,
        hasQuestionToken: true
      },
      {
        name: "options",
        type: `${client.name}OptionalParams`,
        hasQuestionToken: true
      }
    ]
  });
  constructor.addOverload({
    parameters: [
      ...requiredWithoutSubscriptionId.map((parameter) => ({
        name: parameter.name,
        type: parameter.type
      })),
      {
        name: "options",
        type: `${client.name}OptionalParams`,
        hasQuestionToken: true
      }
    ]
  });
  constructor.addOverload({
    parameters: [
      ...requiredWithoutSubscriptionId.map((parameter) => ({
        name: parameter.name,
        type: parameter.type
      })),
      {
        name: "subscriptionId",
        type:
          constructorParams.find(
            (parameter) => parameter.name.toLowerCase() === "subscriptionid"
          )?.type ?? "string"
      },
      {
        name: "options",
        type: `${client.name}OptionalParams`,
        hasQuestionToken: true
      }
    ]
  });
  constructor.addStatements([
    "let subscriptionId: string | undefined;",
    "",
    'if (typeof subscriptionIdOrOptions === "string") {',
    "  subscriptionId = subscriptionIdOrOptions;",
    '} else if (typeof subscriptionIdOrOptions === "object") {',
    "  options = subscriptionIdOrOptions;",
    "}",
    "options = options ?? {};"
  ]);
  return constructor;
}

function buildMethodDeclarations(
  method: TSMethod,
  settings: TSGenerationSettings
): MethodDeclarationStructure[] {
  const methodName =
    method.apiFunction.propertyName ?? method.apiFunction.name ?? method.name;
  const parameters = method.apiFunction.parameters.filter(
    (parameter) => parameter.name !== "context"
  );
  const declarations: MethodDeclarationStructure[] = [
    {
      docs: method.apiFunction.docs,
      kind: StructureKind.Method,
      name: methodName,
      returnType: method.apiFunction.returnType,
      parameters,
      statements: `return ${resolveReference(method.apiRefKey)}(${[
        "this._client",
        ...parameters.map((parameter) => parameter.name)
      ].join(",")})`
    }
  ];

  if (!settings.compatibilityLro) {
    return declarations;
  }

  if (method.kind === "lro") {
    const operationStateReference = resolveReference(
      AzurePollingDependencies.OperationState
    );
    const simplePollerLikeReference = resolveReference(
      SimplePollerHelpers.SimplePollerLike
    );
    const getSimplePollerReference = resolveReference(
      SimplePollerHelpers.getSimplePoller
    );
    const returnType = method.compatibilityLroReturnType ?? "void";
    const beginName = normalizeName(`begin_${methodName}`, NameType.Method);
    const beginAndWaitName = normalizeName(
      `${beginName}_andWait`,
      NameType.Method
    );

    declarations.push({
      isAsync: true,
      docs: [`@deprecated use ${methodName} instead`],
      kind: StructureKind.Method,
      name: beginName,
      returnType: `Promise<${simplePollerLikeReference}<${operationStateReference}<${returnType}>, ${returnType}>>`,
      parameters,
      statements: `const poller = ${resolveReference(method.apiRefKey)}(${[
        "this._client",
        ...parameters.map((parameter) => parameter.name)
      ].join(
        ","
      )});\nawait poller.submitted();\nreturn ${getSimplePollerReference}(poller);`
    });
    declarations.push({
      isAsync: true,
      docs: [`@deprecated use ${methodName} instead`],
      kind: StructureKind.Method,
      name: beginAndWaitName,
      returnType: `Promise<${returnType}>`,
      parameters,
      statements: `return await ${resolveReference(method.apiRefKey)}(${[
        "this._client",
        ...parameters.map((parameter) => parameter.name)
      ].join(",")});`
    });
  }

  if (method.kind === "lroPaging") {
    declarations.push({
      docs: [`@deprecated use ${methodName} instead`],
      kind: StructureKind.Method,
      name: normalizeName(getPagingLROMethodName(methodName), NameType.Method),
      returnType: `${resolveReference(PagingHelpers.PagedAsyncIterableIterator)}<${method.compatibilityLroPagingReturnType ?? "void"}>`,
      parameters,
      statements: `return ${resolveReference(method.apiRefKey)}(${[
        "this._client",
        ...parameters.map((parameter) => parameter.name)
      ].join(",")});`
    });
  }

  return declarations;
}

function getConstructorParameters(client: TSClient) {
  return client.parameters
    .filter((parameter) => parameter.required && !parameter.hasDefaultValue)
    .filter((parameter) => !parameter.isApiVersion)
    .map((parameter) => ({
      name: parameter.name,
      type: parameter.type
    }));
}

function getChildOnlyParameters(parent: TSClient, child: TSClient) {
  const parentParams = new Set(
    getConstructorParameters(parent).map((parameter) => parameter.name)
  );
  return getConstructorParameters(child).filter(
    (parameter) => !parentParams.has(parameter.name)
  );
}
