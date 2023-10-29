import {
  FunctionDeclarationStructure,
  OptionalKind,
  SourceFile
} from "ts-morph";
import { Client, OperationGroup } from "../modularCodeModel.js";
import { getClassicalLayerPrefix, getClientName } from "./namingHelpers.js";
import { NameType, normalizeName } from "@azure-tools/rlc-common";
import { getOperationFunction } from "./operationHelpers.js";

export function getClassicalOperation(
  classicFile: SourceFile,
  client: Client,
  operationGroup: OperationGroup,
  layer: number = operationGroup.namespaceHierarchies.length - 1
) {
  const modularClientName = `${getClientName(client)}Context`;
  const hasClientContextImport = classicFile
    .getImportDeclarations()
    .filter((i) => {
      return (
        i.getModuleSpecifierValue() ===
        `${"../".repeat(layer + 2)}api/${modularClientName}.js`
      );
    });
  if (!hasClientContextImport || hasClientContextImport.length === 0) {
    classicFile.addImportDeclaration({
      namedImports: [client.rlcClientName],
      moduleSpecifier: `${"../".repeat(layer + 2)}api/${modularClientName}.js`
    });
  }

  const operationMap = new Map<
    OptionalKind<FunctionDeclarationStructure>,
    string | undefined
  >();
  const operationDeclarations: OptionalKind<FunctionDeclarationStructure>[] =
    operationGroup.operations.map((operation) => {
      const declarations = getOperationFunction(operation, modularClientName);
      operationMap.set(declarations, operation.oriName);
      return declarations;
    });

  const interfaceName = `${getClassicalLayerPrefix(
    operationGroup,
    NameType.Interface,
    "",
    layer
  )}Operations`;
  const existInterface = classicFile
    .getInterfaces()
    .filter((i) => i.getName() === interfaceName)[0];
  const property = {
    name:
      normalizeName(
        (layer === operationGroup.namespaceHierarchies.length - 1
          ? operationGroup.namespaceHierarchies[layer]
          : operationGroup.namespaceHierarchies[layer + 1]) ?? "",
        NameType.Property
      ) ?? operationGroup.propertyName,
    type:
      layer !== operationGroup.namespaceHierarchies.length - 1
        ? `${getClassicalLayerPrefix(
            operationGroup,
            NameType.Interface,
            "",
            layer + 1
          )}Operations`
        : `{
          ${operationDeclarations
            .map((d) => {
              return `${getClassicalMethodName(d)}: (${d.parameters
                ?.filter((p) => p.name !== "context")
                .map(
                  (p) =>
                    p.name + (p.name === "options" ? "?" : "") + ": " + p.type
                )
                .join(",")}) => ${d.returnType}`;
            })
            .join(";")}  
        }`
  };
  if (existInterface) {
    existInterface.addProperty(property);
  } else {
    classicFile.addInterface({
      name: interfaceName,
      isExported: true,
      properties: [property]
    });
  }

  if (layer === operationGroup.namespaceHierarchies.length - 1) {
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
          type: client.rlcClientName
        }
      ],
      statements: `return {
        ${operationDeclarations
          .map((d) => {
            return `${getClassicalMethodName(d)}: (${d.parameters
              ?.filter((p) => p.name !== "context")
              .map(
                (p) =>
                  p.name + (p.name === "options" ? "?" : "") + ": " + p.type
              )
              .join(",")}) => ${d.name}(${[
              "context",
              ...[
                d.parameters?.map((p) => p.name).filter((p) => p !== "context")
              ]
            ].join(",")})`;
          })
          .join(",")}
      }`
    });
  }

  const operationFunctionName = `get${getClassicalLayerPrefix(
    operationGroup,
    NameType.Interface,
    "",
    layer
  )}Operations`;
  const existFunction = classicFile
    .getFunctions()
    .filter((f) => f.getName() === operationFunctionName)[0];
  if (existFunction) {
    const returnStatement = existFunction.getBodyText();
    if (returnStatement) {
      const newReturnStatement = returnStatement.replace(
        /}$/,
        `,
          ${normalizeName(
            operationGroup.namespaceHierarchies[layer + 1] ?? "FIXME",
            NameType.Property
          )}: get${getClassicalLayerPrefix(
          operationGroup,
          NameType.Interface,
          "",
          layer + 1
        )}Operations(context)}`
      );
      existFunction.setBodyText(newReturnStatement);
    }
  } else {
    classicFile.addFunction({
      name: operationFunctionName,
      isExported: true,
      parameters: [
        {
          name: "context",
          type: client.rlcClientName
        }
      ],
      returnType: `${getClassicalLayerPrefix(
        operationGroup,
        NameType.Interface,
        "",
        layer
      )}Operations`,
      statements:
        layer !== operationGroup.namespaceHierarchies.length - 1
          ? `return {
        ${normalizeName(
          operationGroup.namespaceHierarchies[layer + 1] ?? "FIXME",
          NameType.Property
        )}: get${getClassicalLayerPrefix(
              operationGroup,
              NameType.Interface,
              "",
              layer + 1
            )}Operations(context)   
      }`
          : `return {
        ${normalizeName(
          operationGroup.namespaceHierarchies[layer] ?? "FIXME",
          NameType.Property
        )}: get${getClassicalLayerPrefix(
              operationGroup,
              NameType.Interface,
              "",
              layer
            )}(context)
      }`
    });
  }

  function getClassicalMethodName(
    declaration: OptionalKind<FunctionDeclarationStructure>
  ) {
    return operationMap.get(declaration) ?? declaration.name ?? "FIXME";
  }
}
