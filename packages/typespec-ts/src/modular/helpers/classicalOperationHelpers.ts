import { NameType, normalizeName } from "@azure-tools/rlc-common";
import {
  FunctionDeclarationStructure,
  InterfaceDeclarationStructure,
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
import { refkey } from "../../framework/refkey.js";
import { resolveReference } from "../../framework/reference.js";
import { addDeclaration } from "../../framework/declaration.js";

interface OperationDeclarationInfo {
  // the operation function
  declaration: OptionalKind<FunctionDeclarationStructure>;
  // the original operation name
  oriName: string | undefined;
  // the refkey of the operation declaration
  declarationRefKey: string | undefined;
  // the default is false
  isLro?: boolean;
  // only set when isLro is true
  lroFinalReturnType?: string;
}

export function getClassicalOperation(
  dpgContext: SdkContext,
  clientMap: [string[], SdkClientType<SdkServiceOperation>],
  classicFile: SourceFile,
  operationGroup: [string[], ServiceOperation[]],
  layer: number = operationGroup[0].length - 1
) {
  const prefixes = operationGroup[0];
  const operations = operationGroup[1];
  const { rlcClientName } = getModularClientOptions(clientMap);
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

  const operationDeclarationMap = new Map<
    OptionalKind<FunctionDeclarationStructure>,
    OperationDeclarationInfo | undefined
  >();
  const operationDeclarations: OptionalKind<FunctionDeclarationStructure>[] =
    operations.map((operation) => {
      const declaration = getOperationFunction(
        dpgContext,
        [prefixes, operation],
        rlcClientName
      );
      operationDeclarationMap.set(declaration, {
        declaration,
        oriName: operation.oriName,
        declarationRefKey: resolveReference(refkey(operation, "api")),
        isLro: declaration.isLro,
        lroFinalReturnType: declaration.lroFinalReturnType
      });
      return declaration;
    });

  const interfaceNamePrefix = getClassicalLayerPrefix(
    prefixes,
    NameType.Interface,
    "",
    layer
  );
  const interfaceName = `${interfaceNamePrefix}Operations`;
  const nextLayerInterfaceName = `${getClassicalLayerPrefix(
    prefixes,
    NameType.Interface,
    "",
    layer + 1
  )}Operations`;
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
        type: resolveReference(
          refkey(nextLayerInterfaceName, layer + 1, "classicOperations")
        )
      });
    }
  } else {
    operationDeclarations.forEach((d) => {
      const operationInfo = operationDeclarationMap.get(d);
      const paramStr = d.parameters
        ?.filter((p) => p.name !== "context")
        .map(
          (p) =>
            p.name +
            (p.type?.toString().endsWith("operationOptions__") ||
            p.hasQuestionToken
              ? "?"
              : "") +
            ": " +
            p.type
        )
        .join(",");
      // add the operation method signature
      properties.push({
        kind: StructureKind.PropertySignature,
        name: getClassicalMethodName(d),
        type: `(${paramStr}) => ${d.returnType}`,
        docs: d.docs
      });
      // add LRO helper methods if applicable
      if (dpgContext.rlcOptions?.compatibilityLro && operationInfo?.isLro) {
        const methodName = `begin_${getClassicalMethodName(d)}_andWait`;
        properties.push({
          kind: StructureKind.PropertySignature,
          name: `${normalizeName(methodName, NameType.Method)}`,
          type: `(${paramStr}) => Promise<${operationInfo?.lroFinalReturnType ?? "void"}>`,
          docs: [`@deprecated use ${getClassicalMethodName(d)} instead`]
        });
      }
    });
  }
  if (existInterface) {
    existInterface.addProperties([...properties]);
  } else {
    const interfaceDeclaration: InterfaceDeclarationStructure = {
      kind: StructureKind.Interface,
      name: interfaceName,
      isExported: true,
      properties,
      docs: [`Interface representing a ${interfaceNamePrefix} operations.`]
    };
    addDeclaration(
      classicFile,
      interfaceDeclaration,
      refkey(interfaceName, layer, "classicOperations")
    );
  }

  const functionName = `_get${getClassicalLayerPrefix(
    prefixes,
    NameType.Interface,
    "",
    layer
  )}`;
  if (layer === prefixes.length - 1) {
    const functionDeclaration: FunctionDeclarationStructure = {
      kind: StructureKind.Function,
      name: functionName,
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
            const operationInfo = operationDeclarationMap.get(d);
            const classicalParamStr = d.parameters
              ?.filter((p) => p.name !== "context")
              .map(
                (p) =>
                  p.name +
                  (p.type?.toString().endsWith("operationOptions__") ||
                  p.hasQuestionToken
                    ? "?"
                    : "") +
                  ": " +
                  p.type
              )
              .join(",");
            const apiParamStr = [
              "context",
              ...[
                d.parameters?.map((p) => p.name).filter((p) => p !== "context")
              ]
            ].join(",");
            const ret = [
              `${getClassicalMethodName(d)}: (${classicalParamStr}) => ${operationInfo?.declarationRefKey}(${
                apiParamStr
              })`
            ];
            // add LRO helper methods if applicable
            if (
              dpgContext.rlcOptions?.compatibilityLro &&
              operationInfo?.isLro
            ) {
              const methodName = `begin_${getClassicalMethodName(d)}_andWait`;
              ret.push(
                `${normalizeName(
                  methodName,
                  NameType.Method
                )}: async (${classicalParamStr}) => {
                  return await ${operationInfo?.declarationRefKey}(${
                    apiParamStr
                  });
                }`
              );
            }
            return ret.join(",");
          })
          .join(",")}
      }`
    };
    addDeclaration(
      classicFile,
      functionDeclaration,
      refkey(functionName, layer, "getClassicOperation")
    );
  }

  const operationFunctionName = `_get${getClassicalLayerPrefix(
    prefixes,
    NameType.Interface,
    "",
    layer
  )}Operations`;
  const nextLayerOperationFunctionName = `_get${getClassicalLayerPrefix(
    prefixes,
    NameType.Interface,
    "",
    layer + 1
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
          )}: ${resolveReference(refkey(nextLayerOperationFunctionName, layer + 1, "getClassicOperations"))}(context)}`;
        }
      } else {
        statement = `,
      ...${resolveReference(refkey(nextLayerOperationFunctionName, layer + 1, "getClassicOperations"))}(context)}`;
      }

      if (statement) {
        const newReturnStatement = returnStatement.replace(/}$/, statement);
        existFunction.setBodyText(newReturnStatement);
      }
    }
  } else {
    const functions: FunctionDeclarationStructure = {
      kind: StructureKind.Function,
      name: operationFunctionName,
      isExported: true,
      parameters: [
        {
          name: "context",
          type: rlcClientName
        }
      ],
      returnType: resolveReference(
        refkey(interfaceName, layer, "classicOperations")
      ),
      statements:
        layer !== prefixes.length - 1
          ? `return {
            ${normalizeName(
              prefixes[layer + 1] ?? "FIXME",
              NameType.Property
            )}: ${resolveReference(refkey(nextLayerOperationFunctionName, layer + 1, "getClassicOperations"))}(context)   
      }`
          : `return {
        ...${resolveReference(refkey(functionName, layer, "getClassicOperation"))}(context)
      }`
    };
    addDeclaration(
      classicFile,
      functions,
      refkey(operationFunctionName, layer, "getClassicOperations")
    );
  }

  function getClassicalMethodName(
    declaration: OptionalKind<FunctionDeclarationStructure> & {
      propertyName?: string;
    }
  ) {
    return normalizeName(
      operationDeclarationMap.get(declaration)?.oriName ??
        declaration.propertyName ??
        declaration.name ??
        "FIXME",
      NameType.Method
    );
  }
}
