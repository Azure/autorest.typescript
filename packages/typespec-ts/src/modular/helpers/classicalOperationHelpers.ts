import { NameType, normalizeName } from "@azure-tools/rlc-common";
import {
  FunctionDeclarationStructure,
  OptionalKind,
  PropertySignatureStructure,
  SourceFile,
  StructureKind
} from "ts-morph";
import { getClassicalLayerPrefix } from "./namingHelpers.js";
import { getOperationFunction } from "./operationHelpers.js";
import { SdkContext } from "../../utils/interfaces.js";
import {
  SdkClientType,
  SdkHttpOperation,
  SdkServiceMethod,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import { getModularClientOptions } from "../../utils/clientUtils.js";

export function getClassicalOperation(
  dpgContext: SdkContext,
  client: SdkClientType<SdkServiceOperation>,
  classicFile: SourceFile,
  operationGroup: [string[], SdkServiceMethod<SdkHttpOperation>[]],
  layer: number = operationGroup[0].length - 1
) {
  const prefixes = operationGroup[0];
  const operations = operationGroup[1];
  const { rlcClientName } = getModularClientOptions(dpgContext, client);
  const hasClientContextImport = classicFile
    .getImportDeclarations()
    .filter((i) => {
      return (
        i.getModuleSpecifierValue() ===
        `${"../".repeat(layer + 2)}api/${normalizeName(
          rlcClientName,
          NameType.File
        )}.js`
      );
    });
  if (!hasClientContextImport || hasClientContextImport.length === 0) {
    classicFile.addImportDeclaration({
      namedImports: [rlcClientName],
      moduleSpecifier: `${"../".repeat(layer + 2)}api/${normalizeName(
        rlcClientName,
        NameType.File
      )}.js`
    });
  }

  // const operationMap = new Map<
  //   OptionalKind<FunctionDeclarationStructure>,
  //   string | undefined
  // >();
  const operationDeclarations: OptionalKind<FunctionDeclarationStructure>[] =
    operations.map((operation) => {
      const declarations = getOperationFunction(
        dpgContext,
        [prefixes, operation],
        rlcClientName
      );
      // operationMap.set(declarations, operation.oriName);
      return declarations;
    });

  const interfaceNamePrefix = getClassicalLayerPrefix(
    prefixes,
    NameType.Interface,
    "",
    layer
  );
  const interfaceName = `${interfaceNamePrefix}Operations`;
  const existInterface = classicFile
    .getInterfaces()
    .filter((i) => i.getName() === interfaceName)[0];
  const properties: OptionalKind<PropertySignatureStructure>[] = [];
  if (layer !== prefixes.length - 1) {
    properties.push({
      kind: StructureKind.PropertySignature,
      name: normalizeName(
        (layer === prefixes.length - 1
          ? prefixes[layer]
          : prefixes[layer + 1]) ?? "",
        NameType.Property
      ),
      type: `${getClassicalLayerPrefix(
        prefixes,
        NameType.Interface,
        "",
        layer + 1
      )}Operations`
    });
  } else {
    operationDeclarations.forEach((d) => {
      properties.push({
        kind: StructureKind.PropertySignature,
        name: getClassicalMethodName(d),
        type: `(${d.parameters
          ?.filter((p) => p.name !== "context")
          .map(
            (p) =>
              p.name +
              (p.type?.toString().endsWith("OptionalParams") ||
              p.hasQuestionToken
                ? "?"
                : "") +
              ": " +
              p.type
          )
          .join(",")}) => ${d.returnType}`,
        docs: d.docs
      });
    });
  }
  if (existInterface) {
    existInterface.addProperties([...properties]);
  } else {
    classicFile.addInterface({
      name: interfaceName,
      isExported: true,
      properties,
      docs: [`Interface representing a ${interfaceNamePrefix} operations.`]
    });
  }

  if (layer === prefixes.length - 1) {
    classicFile.addFunction({
      name: `get${getClassicalLayerPrefix(
        prefixes,
        NameType.Interface,
        "",
        layer
      )}`,
      isExported: true,
      parameters: [
        {
          name: "context",
          type: rlcClientName
        }
      ],
      statements: `return {
        ${operationDeclarations
          .map((d) => {
            return `${getClassicalMethodName(d)}: (${d.parameters
              ?.filter((p) => p.name !== "context")
              .map(
                (p) =>
                  p.name +
                  (p.type?.toString().endsWith("OptionalParams") ||
                  p.hasQuestionToken
                    ? "?"
                    : "") +
                  ": " +
                  p.type
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
    prefixes,
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
      let statement = `,
      ...get${getClassicalLayerPrefix(
        prefixes,
        NameType.Interface,
        "",
        layer + 1
      )}Operations(context)}`;
      if (layer !== prefixes.length - 1) {
        statement = `,
        ${normalizeName(
          prefixes[layer + 1] ?? "FIXME",
          NameType.Property
        )}: get${getClassicalLayerPrefix(
          prefixes,
          NameType.Interface,
          "",
          layer + 1
        )}Operations(context)}`;
      }
      const newReturnStatement = returnStatement.replace(/}$/, statement);
      existFunction.setBodyText(newReturnStatement);
    }
  } else {
    classicFile.addFunction({
      name: operationFunctionName,
      isExported: true,
      parameters: [
        {
          name: "context",
          type: rlcClientName
        }
      ],
      returnType: `${getClassicalLayerPrefix(
        prefixes,
        NameType.Interface,
        "",
        layer
      )}Operations`,
      statements:
        layer !== prefixes.length - 1
          ? `return {
            ${normalizeName(
              prefixes[layer + 1] ?? "FIXME",
              NameType.Property
            )}: get${getClassicalLayerPrefix(
              prefixes,
              NameType.Interface,
              "",
              layer + 1
            )}Operations(context)   
      }`
          : `return {
        ...get${getClassicalLayerPrefix(
          prefixes,
          NameType.Interface,
          "",
          layer
        )}(context)
      }`
    });
  }

  function getClassicalMethodName(
    declaration: OptionalKind<FunctionDeclarationStructure> & {
      propertyName?: string;
    }
  ) {
    return (
      // operationMap.get(declaration) ??
      declaration.propertyName ?? declaration.name ?? "FIXME"
    );
  }
}
