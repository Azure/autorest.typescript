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
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import { getModularClientOptions } from "../../utils/clientUtils.js";
import { ServiceOperation } from "../../utils/operationUtil.js";

export function getClassicalOperation(
  dpgContext: SdkContext,
  client: SdkClientType<SdkServiceOperation>,
  classicFile: SourceFile,
  operationGroup: [string[], ServiceOperation[]],
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

  const operationMap = new Map<
    OptionalKind<FunctionDeclarationStructure>,
    string | undefined
  >();
  const operationDeclarations: OptionalKind<FunctionDeclarationStructure>[] =
    operations.map((operation) => {
      const declarations = getOperationFunction(
        dpgContext,
        [prefixes, operation],
        rlcClientName
      );
      operationMap.set(declarations, operation.oriName);
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
    const name = normalizeName(
      (layer === prefixes.length - 1 ? prefixes[layer] : prefixes[layer + 1]) ??
        "",
      NameType.Property
    );
    if (
      !properties.some((x) => x.name === name) &&
      !(existInterface && existInterface.getProperty(name))
    ) {
      properties.push({
        kind: StructureKind.PropertySignature,
        name,
        type: `${getClassicalLayerPrefix(
          prefixes,
          NameType.Interface,
          "",
          layer + 1
        )}Operations`
      });
    }
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
    // only adding the property if it doesn't exist
    const unExistingProperties = properties.filter(
      (p) => !existInterface.getProperty(p.name)
    );
    existInterface.addProperties([...unExistingProperties]);
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
      name: `_get${getClassicalLayerPrefix(
        prefixes,
        NameType.Interface,
        "",
        layer
      )}`,
      isExported: false,
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

  const operationFunctionName = `_get${getClassicalLayerPrefix(
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
      let statement: string | undefined = undefined;
      if (layer !== prefixes.length - 1) {
        const name = normalizeName(
          prefixes[layer + 1] ?? "FIXME",
          NameType.Property
        );

        // HACK: check if the statement includes a group of this name already to prevent an operation group appearing multiple times
        // TODO: would be good to refactor so that we have an intermediate data structure before generating the return statement
        if (!returnStatement.includes(`${name}:`)) {
          statement = `,
          ${normalizeName(
            prefixes[layer + 1] ?? "FIXME",
            NameType.Property
          )}: _get${getClassicalLayerPrefix(
            prefixes,
            NameType.Interface,
            "",
            layer + 1
          )}Operations(context)}`;
        }
      } else {
        statement = `,
      ..._get${getClassicalLayerPrefix(
        prefixes,
        NameType.Interface,
        "",
        layer + 1
      )}Operations(context)}`;
        // only adding the property if it doesn't exist
        if (!returnStatement.includes(propertyAndGetterStatement)) {
          statement = `,
        ${propertyAndGetterStatement}Operations(context${
        } else {
          statement = `}`;
        }
      }

      if (statement) {
        const newReturnStatement = returnStatement.replace(/}$/, statement);
        existFunction.setBodyText(newReturnStatement);
      }
    }
  } else {
    const functions = {
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
            )}: _get${getClassicalLayerPrefix(
              prefixes,
              NameType.Interface,
              "",
              layer + 1
            )}Operations(context)   
      }`
          : `return {
        ..._get${getClassicalLayerPrefix(
          prefixes,
          NameType.Interface,
          "",
          layer
        )}(context)
      }`
    };
    classicFile.addFunction(functions);
  }

  function getClassicalMethodName(
    declaration: OptionalKind<FunctionDeclarationStructure> & {
      propertyName?: string;
    }
  ) {
    return (
      operationMap.get(declaration) ??
      declaration.propertyName ??
      declaration.name ??
      "FIXME"
    );
  }
}
