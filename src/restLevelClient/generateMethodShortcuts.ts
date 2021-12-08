import { CodeModel, Operation } from "@autorest/codemodel";
import { OptionalKind, MethodSignatureStructure } from "ts-morph";
import { NameType, normalizeName, ReservedName } from "../utils/nameUtils";
import { buildMethodDefinitions } from "./helpers/operationHelpers";
import { PathParameter, Paths } from "./interfaces";

const REST_CLIENT_RESERVED: ReservedName[] = [
  { name: "path", reservedFor: [NameType.Property] },
  { name: "pathUnchecked", reservedFor: [NameType.Property] },
  { name: "pipeline", reservedFor: [NameType.Property] }
];

export function generateMethodShortcuts(model: CodeModel, paths: Paths) {
  const operationGroups = model.operationGroups;
  let keys: Record<string, OptionalKind<MethodSignatureStructure>[]> = {};
  for (const group of operationGroups) {
    const groupName = normalizeName(
      group.language.default.name,
      NameType.Property,
      true,
      REST_CLIENT_RESERVED
    );

    keys[groupName] = buildOperationDefinitions(group.operations, paths);
  }
  return keys;
}

export function generateMethodShortcutImplementation(
  model: CodeModel,
  paths: Paths
) {
  const operationGroups = model.operationGroups;
  let keys: Record<string, string[]> = {};
  for (const group of operationGroups) {
    const groupName = normalizeName(
      group.language.default.name,
      NameType.Property,
      true,
      REST_CLIENT_RESERVED
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

function buildOperationDefinitions(operations: Operation[], paths: Paths) {
  let ops: OptionalKind<MethodSignatureStructure>[] = [];

  for (const operation of operations) {
    const name = normalizeName(
      operation.language.default.name,
      NameType.Property,
      true
    );

    const path = operation.requests![0].protocol.http?.path;
    const method: string = operation.requests![0].protocol.http?.method;
    const methods = paths[path]?.methods[method];
    const pathParams = paths[path]?.pathParameters;
    const methodDefinitions = buildMethodDefinitions(
      { [name]: methods },
      pathParams
    );
    ops = [...ops, ...methodDefinitions];
  }

  return ops;
}
