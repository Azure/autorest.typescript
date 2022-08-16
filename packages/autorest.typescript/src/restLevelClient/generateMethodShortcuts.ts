// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { CodeModel, Operation } from "@autorest/codemodel";
import {
  CasingConvention,
  NameType,
  normalizeName,
  ReservedName
} from "../utils/nameUtils";
import { Paths, PathParameter } from "@azure-tools/rlc-codegen";

export const REST_CLIENT_RESERVED: ReservedName[] = [
  { name: "path", reservedFor: [NameType.Property, NameType.OperationGroup] },
  {
    name: "pathUnchecked",
    reservedFor: [NameType.Property, NameType.OperationGroup]
  },
  {
    name: "pipeline",
    reservedFor: [NameType.Property, NameType.OperationGroup]
  }
];

export function generateMethodShortcutImplementation(
  model: CodeModel,
  paths: Paths
) {
  const operationGroups = model.operationGroups;
  let keys: Record<string, string[]> = {};
  for (const group of operationGroups) {
    const groupName = normalizeName(
      group.language.default.name,
      NameType.OperationGroup,
      true,
      REST_CLIENT_RESERVED,
      CasingConvention.Camel
    );

    keys[groupName] = buildOperationDeclarations(group.operations, paths);
  }
  return keys;
}

function buildOperationDeclarations(operations: Operation[], paths: Paths) {
  let ops: string[] = [];

  for (const operation of operations) {
    const name = normalizeName(
      operation.language.default.name,
      NameType.Property,
      true
    );

    const path = operation.requests![0].protocol.http?.path;
    const method = operation.requests![0].protocol.http?.method;
    const pathParams = paths[path]?.pathParameters;
    const methodDefinitions = generateOperationDeclaration(
      path,
      name,
      method,
      pathParams
    );
    ops = [...ops, methodDefinitions];
  }

  return ops;
}

function generateOperationDeclaration(
  path: string,
  operationName: string,
  method: string,
  pathParams: PathParameter[] = []
): string {
  const pathParamNames = `${
    pathParams.length > 0 ? `${pathParams.map(p => p.name)},` : ""
  }`;
  return `"${operationName}": (${pathParamNames} options) => {
      return client.path("${path}", ${pathParamNames}).${method}(options);
    }`;
}
