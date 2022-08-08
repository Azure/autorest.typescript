import {
  CasingConvention,
  NameType,
  normalizeName,
  ReservedName
} from "./helpers/nameUtils.js";
import { Paths, PathParameter } from "./interfaces.js";

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
  paths: Paths
) {
  let keys: Record<string, string[]> = {};
  for (const path of Object.keys(paths)) {
    const groupName = normalizeName(
      paths[path].operationGroupName,
      NameType.OperationGroup,
      true,
      REST_CLIENT_RESERVED,
      CasingConvention.Camel
    );

    keys[groupName] = buildOperationDeclarations(paths);
  }
  return keys;
}

function buildOperationDeclarations(paths: Paths) {
  let ops: string[] = [];

  for (const path of Object.keys(paths)) {
    for(const method of Object.keys(paths[path].methods)) {
      const pathParams = paths[path]?.pathParameters;
      const name = paths[path].methods[method][0].operationName;
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
    pathParams.length > 0 ? `${pathParams.map(p => p.name)},` : ""
  }`;
  return `"${operationName}": (${pathParamNames} options) => {
      return client.path("${path}", ${pathParamNames}).${method}(options);
    }`;
}
