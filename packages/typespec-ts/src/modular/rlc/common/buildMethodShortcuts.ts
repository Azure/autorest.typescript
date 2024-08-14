// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  CasingConvention,
  NameType,
  normalizeName,
  ReservedName
} from "./helpers/nameUtils.js";
import { Paths, PathParameter, PathMetadata } from "./interfaces.js";

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

export function buildMethodShortcutImplementation(paths: Paths) {
  const keys: Record<string, string[]> = {};
  for (const [path, pathMetadata] of Object.entries(paths)) {
    const groupName = normalizeName(
      pathMetadata.operationGroupName,
      NameType.OperationGroup,
      true,
      REST_CLIENT_RESERVED,
      CasingConvention.Camel
    );

    if (keys[groupName]) {
      keys[groupName].push(...buildOperationDeclarations(path, pathMetadata));
    } else {
      keys[groupName] = buildOperationDeclarations(path, pathMetadata);
    }
  }
  return keys;
}

function buildOperationDeclarations(path: string, pathMetadata: PathMetadata) {
  let ops: string[] = [];
  for (const [method, operationMethods] of Object.entries(
    pathMetadata.methods
  )) {
    for (const op of operationMethods) {
      const pathParams = pathMetadata?.pathParameters;
      const name = normalizeName(op.operationName, NameType.Property);
      const methodDefinitions = generateOperationDeclaration(
        path,
        name,
        method,
        pathParams
      );
      ops = [...ops, methodDefinitions];
    }
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
    pathParams.length > 0 ? `${pathParams.map((p) => p.name)},` : ""
  }`;
  return `"${operationName}": (${pathParamNames} options) => {
      return client.path("${path}", ${pathParamNames}).${method}(options);
    }`;
}
