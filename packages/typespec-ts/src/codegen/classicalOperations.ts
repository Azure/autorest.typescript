// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NameType, normalizeName } from "@azure-tools/rlc-common";
import {
  FunctionDeclarationStructure,
  InterfaceDeclarationStructure,
  Project,
  PropertySignatureStructure,
  SourceFile,
  StructureKind
} from "ts-morph";
import type {
  TSClient,
  TSGenerationSettings,
  TSMethod,
  TSOperationGroup
} from "../codemodel/index.js";
import { addDeclaration } from "../framework/declaration.js";
import { refkey } from "../framework/refkey.js";
import { resolveReference } from "../framework/reference.js";
import { AzurePollingDependencies } from "../modular/external-dependencies.js";
import { getPagingLROMethodName } from "../modular/helpers/classicalOperationHelpers.js";
import { getClassicalLayerPrefix } from "../modular/helpers/namingHelpers.js";
import {
  PagingHelpers,
  SimplePollerHelpers
} from "../modular/static-helpers-metadata.js";

interface ClassicalOperationNode {
  prefixes: string[];
  methods: TSMethod[];
  children: Map<string, ClassicalOperationNode>;
}

export function emitClassicalOperationFiles(
  project: Project,
  client: TSClient,
  settings: TSGenerationSettings
): SourceFile[] {
  if (client.operationGroups.length === 0) {
    return [];
  }

  const root = buildOperationTree(client.operationGroups);
  const files: SourceFile[] = [];

  for (const node of getNodes(root)) {
    if (node.prefixes.length === 0) {
      continue;
    }

    const file = project.createSourceFile(
      getClassicFilePath(client, node, settings),
      "",
      { overwrite: true }
    );
    addContextImport(file, client, node);
    emitClassicalOperationFile(file, client, node, settings);
    file.fixMissingImports({}, { importModuleSpecifierEnding: "js" });
    file.fixUnusedIdentifiers();
    files.push(file);
  }

  return files;
}

function buildOperationTree(
  groups: TSOperationGroup[]
): ClassicalOperationNode {
  const root: ClassicalOperationNode = {
    prefixes: [],
    methods: [],
    children: new Map()
  };

  for (const group of groups) {
    let current = root;
    for (const prefix of group.prefixes) {
      let child = current.children.get(prefix);
      if (!child) {
        child = {
          prefixes: [...current.prefixes, prefix],
          methods: [],
          children: new Map()
        };
        current.children.set(prefix, child);
      }
      current = child;
    }

    current.methods.push(...group.methods);
  }

  return root;
}

function getNodes(root: ClassicalOperationNode): ClassicalOperationNode[] {
  const nodes: ClassicalOperationNode[] = [];
  const queue = [...root.children.values()];

  while (queue.length > 0) {
    const node = queue.shift()!;
    nodes.push(node);
    queue.push(...node.children.values());
  }

  return nodes.sort((left, right) =>
    left.prefixes.join("/").localeCompare(right.prefixes.join("/"))
  );
}

function getClassicFilePath(
  client: TSClient,
  node: ClassicalOperationNode,
  settings: TSGenerationSettings
): string {
  const subfolder = client.path.join("/");
  const groupPath = node.prefixes
    .map((prefix) => normalizeName(prefix, NameType.File))
    .join("/");

  return `${settings.sourceRoot}/${
    subfolder && subfolder !== "" ? subfolder + "/" : ""
  }classic/${groupPath}/index.ts`;
}

function addContextImport(
  file: SourceFile,
  client: TSClient,
  node: ClassicalOperationNode
): void {
  file.addImportDeclaration({
    namedImports: [client.contextTypeName],
    moduleSpecifier: `${"../".repeat(node.prefixes.length + 1)}api/index.js`
  });
}

function emitClassicalOperationFile(
  file: SourceFile,
  client: TSClient,
  node: ClassicalOperationNode,
  settings: TSGenerationSettings
): void {
  const interfaceNamePrefix = getNodeNamePrefix(node);
  const interfaceName = `${interfaceNamePrefix}Operations`;
  const properties: PropertySignatureStructure[] = [
    ...getChildProperties(node),
    ...node.methods.flatMap((method) => getMethodProperties(method, settings))
  ];

  addDeclaration(
    file,
    {
      kind: StructureKind.Interface,
      name: interfaceName,
      isExported: true,
      properties,
      docs: [`Interface representing a ${interfaceNamePrefix} operations.`]
    } satisfies InterfaceDeclarationStructure,
    refkey(interfaceName, node.prefixes.length - 1, "classicOperations")
  );

  if (node.methods.length > 0) {
    addDeclaration(
      file,
      getMethodFactory(node, client),
      refkey(
        `_get${interfaceNamePrefix}`,
        node.prefixes.length - 1,
        "getClassicOperation"
      )
    );
  }

  addDeclaration(
    file,
    getOperationsFactory(node, client),
    refkey(
      `_get${interfaceNamePrefix}Operations`,
      node.prefixes.length - 1,
      "getClassicOperations"
    )
  );
}

function getNodeNamePrefix(node: ClassicalOperationNode): string {
  return getClassicalLayerPrefix(
    node.prefixes,
    NameType.Interface,
    "",
    node.prefixes.length - 1
  );
}

function getChildProperties(
  node: ClassicalOperationNode
): PropertySignatureStructure[] {
  return [...node.children.values()]
    .sort((left, right) => {
      const leftName = left.prefixes[left.prefixes.length - 1] ?? "";
      const rightName = right.prefixes[right.prefixes.length - 1] ?? "";
      return leftName.localeCompare(rightName);
    })
    .map((child) => {
      const childName = child.prefixes[child.prefixes.length - 1] ?? "";
      const childPrefix = getNodeNamePrefix(child);
      return {
        kind: StructureKind.PropertySignature,
        name: normalizeName(childName, NameType.Property),
        type: resolveReference(
          refkey(
            `${childPrefix}Operations`,
            child.prefixes.length - 1,
            "classicOperations"
          )
        )
      } satisfies PropertySignatureStructure;
    });
}

function getMethodProperties(
  method: TSMethod,
  settings: TSGenerationSettings
): PropertySignatureStructure[] {
  const methodName = getClassicalMethodName(method);
  const paramStr = getSignatureParameters(method);
  const properties: PropertySignatureStructure[] = [
    {
      kind: StructureKind.PropertySignature,
      name: methodName,
      type: `(${paramStr}) => ${method.apiFunction.returnType}`,
      docs: method.apiFunction.docs
    }
  ];

  if (!settings.compatibilityLro) {
    return properties;
  }

  if (method.kind === "lro") {
    const operationStateReference = resolveReference(
      AzurePollingDependencies.OperationState
    );
    const simplePollerLikeReference = resolveReference(
      SimplePollerHelpers.SimplePollerLike
    );
    const returnType = method.compatibilityLroReturnType ?? "void";
    const beginName = normalizeName(`begin_${methodName}`, NameType.Method);
    const beginAndWaitName = normalizeName(
      `${beginName}_andWait`,
      NameType.Method
    );

    properties.push({
      kind: StructureKind.PropertySignature,
      name: beginName,
      type: `(${paramStr}) => Promise<${simplePollerLikeReference}<${operationStateReference}<${returnType}>, ${returnType}>>`,
      docs: [`@deprecated use ${methodName} instead`]
    });
    properties.push({
      kind: StructureKind.PropertySignature,
      name: beginAndWaitName,
      type: `(${paramStr}) => Promise<${returnType}>`,
      docs: [`@deprecated use ${methodName} instead`]
    });
  }

  if (method.kind === "lroPaging") {
    properties.push({
      kind: StructureKind.PropertySignature,
      name: normalizeName(getPagingLROMethodName(methodName), NameType.Method),
      type: `(${paramStr}) => ${resolveReference(
        PagingHelpers.PagedAsyncIterableIterator
      )}<${method.compatibilityLroPagingReturnType ?? "void"}>`,
      docs: [`@deprecated use ${methodName} instead`]
    });
  }

  return properties;
}

function getMethodFactory(
  node: ClassicalOperationNode,
  client: TSClient
): FunctionDeclarationStructure {
  const interfaceNamePrefix = getNodeNamePrefix(node);
  return {
    kind: StructureKind.Function,
    name: `_get${interfaceNamePrefix}`,
    parameters: [
      {
        name: "context",
        type: client.contextTypeName
      }
    ],
    statements: `return {\n${node.methods
      .map((method) => getMethodImplementation(method))
      .join(",\n")}\n}`
  };
}

function getOperationsFactory(
  node: ClassicalOperationNode,
  client: TSClient
): FunctionDeclarationStructure {
  const interfaceNamePrefix = getNodeNamePrefix(node);
  const properties = [...node.children.values()]
    .sort((left, right) =>
      (left.prefixes[left.prefixes.length - 1] ?? "").localeCompare(
        right.prefixes[right.prefixes.length - 1] ?? ""
      )
    )
    .map((child) => {
      const childName = normalizeName(
        child.prefixes[child.prefixes.length - 1] ?? "",
        NameType.Property
      );
      const childPrefix = getNodeNamePrefix(child);
      return `${childName}: ${resolveReference(
        refkey(
          `_get${childPrefix}Operations`,
          child.prefixes.length - 1,
          "getClassicOperations"
        )
      )}(context)`;
    });

  if (node.methods.length > 0) {
    properties.push(`..._get${interfaceNamePrefix}(context)`);
  }

  return {
    kind: StructureKind.Function,
    name: `_get${interfaceNamePrefix}Operations`,
    isExported: true,
    parameters: [
      {
        name: "context",
        type: client.contextTypeName
      }
    ],
    returnType: resolveReference(
      refkey(
        interfaceNamePrefix + "Operations",
        node.prefixes.length - 1,
        "classicOperations"
      )
    ),
    statements: `return {\n${properties.join(",\n")}\n}`
  };
}

function getMethodImplementation(method: TSMethod): string {
  const methodName = getClassicalMethodName(method);
  const signatureParams = getSignatureParameters(method);
  const apiParams = [
    "context",
    ...method.apiFunction.parameters
      .map((parameter) => parameter.name)
      .filter((name) => name !== "context")
  ].join(", ");
  const entries = [
    `${methodName}: (${signatureParams}) => ${resolveReference(method.apiRefKey)}(${apiParams})`
  ];

  if (method.kind === "lro") {
    const getSimplePollerReference = resolveReference(
      SimplePollerHelpers.getSimplePoller
    );
    const beginName = normalizeName(`begin_${methodName}`, NameType.Method);
    const beginAndWaitName = normalizeName(
      `${beginName}_andWait`,
      NameType.Method
    );
    entries.push(`${beginName}: async (${signatureParams}) => {
      const poller = ${resolveReference(method.apiRefKey)}(${apiParams});
      await poller.submitted();
      return ${getSimplePollerReference}(poller);
    }`);
    entries.push(`${beginAndWaitName}: async (${signatureParams}) => {
      return await ${resolveReference(method.apiRefKey)}(${apiParams});
    }`);
  }

  if (method.kind === "lroPaging") {
    const beginListAndWaitName = normalizeName(
      getPagingLROMethodName(methodName),
      NameType.Method
    );
    entries.push(`${beginListAndWaitName}: (${signatureParams}) => {
      return ${resolveReference(method.apiRefKey)}(${apiParams});
    }`);
  }

  return entries.join(",\n");
}

function getSignatureParameters(method: TSMethod): string {
  return method.apiFunction.parameters
    .filter((parameter) => parameter.name !== "context")
    .map((parameter) => {
      const isOptional =
        parameter.hasQuestionToken ||
        parameter.type?.toString().endsWith("operationOptions__");
      return `${parameter.name}${isOptional ? "?" : ""}: ${parameter.type}`;
    })
    .join(", ");
}

function getClassicalMethodName(method: TSMethod): string {
  return normalizeName(
    method.originalName ??
      method.apiFunction.propertyName ??
      method.apiFunction.name ??
      method.name,
    NameType.Method
  );
}
