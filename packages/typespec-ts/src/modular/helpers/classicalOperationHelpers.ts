import {
  FunctionDeclarationStructure,
  OptionalKind,
  SourceFile
} from "ts-morph";
import { Client, OperationGroup } from "../modularCodeModel.js";
import { getClassicalLayerPrefix } from "./namingHelpers.js";
import { NameType } from "@azure-tools/rlc-common";
import { getOperationFunction } from "./operationHelpers.js";
import { normalizeName } from "@azure-tools/rlc-common";

export function getClassicalOperation(
  classicFile: SourceFile,
  client: Client,
  operationGroup: OperationGroup,
  subfolder: string = "",
  layer: number = operationGroup.namespaceHierarchies.length - 1
) {
  const operationMap = new Map<
    OptionalKind<FunctionDeclarationStructure>,
    string | undefined
  >();
  let clientType = "Client";
  if (subfolder && subfolder !== "") {
    clientType = `Client.${client.name}`;
  }
  const operationDeclarations: OptionalKind<FunctionDeclarationStructure>[] =
    operationGroup.operations.map((operation) => {
      const declarations = getOperationFunction(operation, clientType);
      operationMap.set(declarations, operation.oriName);
      return declarations;
    });

  classicFile.addInterface({
    name: `${getClassicalLayerPrefix(
      operationGroup,
      NameType.Interface,
      "",
      layer
    )}Operations`,
    isExported: true,
    properties: [
      {
        name:
          normalizeName(
            operationGroup.namespaceHierarchies[layer] ?? "",
            NameType.Property
          ) ?? operationGroup.propertyName,
        type: `{
              ${operationDeclarations
                .map((d) => {
                  return `${getClassicalMethodName(d)}: (${d.parameters
                    ?.filter((p) => p.name !== "context")
                    .map(
                      (p) =>
                        p.name +
                        (p.name === "options" ? "?" : "") +
                        ": " +
                        p.type
                    )
                    .join(",")}) => ${d.returnType}`;
                })
                .join(";")}  
            }`
      }
    ]
  });

  classicFile.addFunction({
    name: `get${getClassicalLayerPrefix(
      operationGroup,
      NameType.Interface,
      "",
      layer
    )}`,
    isExported: true,
    parameters: [
      {
        name: "context",
        type: clientType
      }
    ],
    statements: `return {
      ${operationDeclarations
        .map((d) => {
          return `${getClassicalMethodName(d)}: (${d.parameters
            ?.filter((p) => p.name !== "context")
            .map(
              (p) => p.name + (p.name === "options" ? "?" : "") + ": " + p.type
            )
            .join(",")}) => ${d.name}(${[
            "context",
            ...[d.parameters?.map((p) => p.name).filter((p) => p !== "context")]
          ].join(",")})`;
        })
        .join(",")}
    }`
  });

  classicFile.addFunction({
    name: `get${getClassicalLayerPrefix(
      operationGroup,
      NameType.Interface,
      "",
      layer
    )}Operations`,
    isExported: true,
    returnType: `${getClassicalLayerPrefix(
      operationGroup,
      NameType.Interface,
      "",
      layer
    )}Operations`,
    statements: `return {
      ${normalizeName(
        operationGroup.namespaceHierarchies[layer] ?? "FIXME",
        NameType.Property
      )}: get${getClassicalLayerPrefix(
      operationGroup,
      NameType.Interface,
      "",
      layer
    )}
    }`
  });

  function getClassicalMethodName(
    declaration: OptionalKind<FunctionDeclarationStructure>
  ) {
    return operationMap.get(declaration) ?? declaration.name ?? "FIXME";
  }
}
