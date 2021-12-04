import { CodeModel, Operation } from "@autorest/codemodel";
import { OptionalKind, MethodSignatureStructure } from "ts-morph";
import { NameType, normalizeName, ReservedName } from "../utils/nameUtils";
import { buildMethodDefinitions } from "./helpers/operationHelpers";
import { Methods, PathParameter, Paths } from "./interfaces";

const RESCT_CLIENT_RESERVED: ReservedName[] = [
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
      RESCT_CLIENT_RESERVED
    );

    keys[groupName] = buildOperations(group.operations, paths);
  }
  return keys;
}

function buildOperations(operations: Operation[], paths: Paths) {
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
    const methodDefinitions = buildMethodDefinitions({ [name]: methods });
    ops = [...ops, ...methodDefinitions];
  }

  return ops;
}
