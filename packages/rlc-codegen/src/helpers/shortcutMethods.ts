// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  OptionalKind,
  MethodSignatureStructure,
  InterfaceDeclarationStructure
} from "ts-morph";
import { PathMetadata, Paths } from "../interfaces.js";
import { buildMethodDefinitions } from "./operationHelpers.js";
import { NameType, normalizeName } from "./nameUtils.js";

export function generateMethodShortcuts(
  paths: Paths
): OptionalKind<InterfaceDeclarationStructure>[] {
  let keys: Record<string, OptionalKind<MethodSignatureStructure>[]> = {};
  for (const path in paths) {
    const groupName = paths[path].operationGroupName;
    const definitions = buildOperationDefinitions(paths[path]);
    if (!keys[groupName]) {
      keys[groupName] = definitions;
    } else {
      keys[groupName] = [...keys[groupName], ...definitions];
    }
  }

  const interfaces: OptionalKind<InterfaceDeclarationStructure>[] = [];

  for (const interfaceName in keys) {
    const methods = keys[interfaceName];
    interfaces.push({
      name: `${interfaceName}Operations`,
      methods: methods,
      isExported: true,
      docs: [`Contains operations for ${interfaceName} operations`]
    });
  }

  return interfaces;
}

function buildOperationDefinitions(
  path: PathMetadata
): OptionalKind<MethodSignatureStructure>[] {
  let ops: OptionalKind<MethodSignatureStructure>[] = [];

  for (const verb in path.methods) {
    const methods = path.methods[verb];
    for (const method of methods) {
      const name = normalizeName(method.operationName, NameType.Property);
      const pathParams = path.pathParameters;
      const methodDefinitions = buildMethodDefinitions(
        { [name]: [method] },
        pathParams
      );
      ops = [...ops, ...methodDefinitions];
    }
  }
  return ops;
}
