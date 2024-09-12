import {
  EnumDeclarationStructure,
  EnumMemberStructure,
  InterfaceDeclarationStructure,
  PropertySignatureStructure,
  SourceFile,
  StructureKind,
  TypeAliasDeclarationStructure
} from "ts-morph";
import { NameType, normalizeName } from "@azure-tools/rlc-common";
import {
  SdkBodyModelPropertyType,
  SdkClientType,
  SdkEnumType,
  SdkEnumValueType,
  SdkHttpOperation,
  SdkHttpPackage,
  SdkMethod,
  SdkModelPropertyType,
  SdkModelType,
  SdkType,
  SdkUnionType,
  isReadOnly
} from "@azure-tools/typespec-client-generator-core";
import {
  getExternalModel,
  getModelExpression
} from "./type-expressions/get-model-expression.js";

import { SdkContext } from "../utils/interfaces.js";
import { addDeclaration } from "../framework/declaration.js";
import { addImportBySymbol } from "../utils/importHelper.js";
import { buildModelDeserializer } from "./serialization/buildDeserializerFunction.js";
import { buildModelSerializer } from "./serialization/buildSerializerFunction.js";
import { extractPagedMetadataNested } from "../utils/operationUtil.js";
import { getTypeExpression } from "./type-expressions/get-type-expression.js";
import path from "path";
import { refkey } from "../framework/refkey.js";
import { useContext } from "../contextManager.js";
import { isMetadata } from "@typespec/http";

export function emitTypes(
  context: SdkContext,
  { sourceRoot }: { sourceRoot: string }
) {
  const sdkPackage = context.sdkPackage;
  const emitQueue: Set<SdkType> = new Set();
  const outputProject = useContext("outputProject");

  const modelsFilePath = getModelsPath(sourceRoot);
  let sourceFile = outputProject.getSourceFile(modelsFilePath);

  if (!sourceFile) {
    sourceFile = outputProject.createSourceFile(modelsFilePath, "", {
      overwrite: true
    });
  }

  visitPackageTypes(sdkPackage, emitQueue);

  for (const type of emitQueue) {
    if (type.kind === "model") {
      const modelInterface = buildModelInterface(context, type);
      addDeclaration(sourceFile, modelInterface, type);
      const modelPolymorphicType = buildModelPolymorphicType(type);
      if (modelPolymorphicType) {
        addSerializationFunctions(context, type, sourceFile, true);
        addDeclaration(
          sourceFile,
          modelPolymorphicType,
          refkey(type, "polymorphicType")
        );
      }
      addSerializationFunctions(context, type, sourceFile);
    } else if (type.kind === "enum") {
      const [enumType, knownValuesEnum] = buildEnumTypes(context, type);
      if (isExtensibleEnum(context, type)) {
        addDeclaration(
          sourceFile,
          knownValuesEnum,
          refkey(type, "knownValues")
        );
      }
      addDeclaration(sourceFile, enumType, type);
      addSerializationFunctions(context, type, sourceFile);
    } else if (type.kind === "union") {
      const unionType = buildUnionType(type);
      addDeclaration(sourceFile, unionType, type);
      addSerializationFunctions(context, type, sourceFile);
    }
    if (type.kind === "dict") {
      addSerializationFunctions(context, type, sourceFile);
    }
  }

  addImportBySymbol("serializeRecord", sourceFile);
}

export function getModelsPath(sourceRoot: string): string {
  return path.join(...[sourceRoot, "models", `models.ts`]);
}

function addSerializationFunctions(
  context: SdkContext,
  type: SdkType,
  sourceFile: SourceFile,
  skipDiscriminatedUnion = false
) {
  const serializationFunction = buildModelSerializer(
    context,
    type,
    skipDiscriminatedUnion
  );
  if (
    serializationFunction &&
    typeof serializationFunction !== "string" &&
    serializationFunction.name &&
    !sourceFile.getFunction(serializationFunction.name)
  ) {
    addDeclaration(
      sourceFile,
      serializationFunction,
      refkey(type, "serializer")
    );
  }
  const deserializationFunction = buildModelDeserializer(
    context,
    type,
    skipDiscriminatedUnion
  );
  if (
    deserializationFunction &&
    typeof deserializationFunction !== "string" &&
    deserializationFunction.name &&
    !sourceFile.getFunction(deserializationFunction.name)
  ) {
    addDeclaration(
      sourceFile,
      deserializationFunction,
      refkey(type, "deserializer")
    );
  }
}

function buildUnionType(type: SdkUnionType): TypeAliasDeclarationStructure {
  const unionDeclaration: TypeAliasDeclarationStructure = {
    kind: StructureKind.TypeAlias,
    name: normalizeName(type.name, NameType.Interface),
    isExported: true,
    type: type.values.map((v) => getTypeExpression(v)).join(" | ")
  };

  if (type.description) {
    unionDeclaration.docs = [type.description];
  }

  return unionDeclaration;
}

function buildEnumTypes(
  context: SdkContext,
  type: SdkEnumType
): [TypeAliasDeclarationStructure, EnumDeclarationStructure] {
  const enumDeclaration: EnumDeclarationStructure = {
    kind: StructureKind.Enum,
    name: `Known${normalizeModelName(context, type)}`,
    isExported: true,
    members: type.values.map(emitEnumMember)
  };

  const enumAsUnion: TypeAliasDeclarationStructure = {
    kind: StructureKind.TypeAlias,
    name: normalizeModelName(context, type),
    isExported: true,
    type: !isExtensibleEnum(context, type)
      ? type.values.map((v) => getTypeExpression(v)).join(" | ")
      : getTypeExpression(type.valueType)
  };

  if (type.description) {
    enumAsUnion.docs = isExtensibleEnum(context, type)
      ? [getExtensibleEnumDescription(type) ?? type.description]
      : [type.description];
    enumDeclaration.docs = [type.description];
  }

  return [enumAsUnion, enumDeclaration];
}

function isExtensibleEnum(context: SdkContext, type: SdkEnumType): boolean {
  return (
    !type.isFixed && context.rlcOptions?.experimentalExtensibleEnums === true
  );
}

function getExtensibleEnumDescription(model: SdkEnumType): string | undefined {
  if (model.isFixed && model.name && model.values) {
    return;
  }
  const valueDescriptions = model.values
    .map((v) => `**${v.value}**${v.description ? `: ${v.description}` : ""}`)
    .join(` \\\n`)
    // Escape the character / to make sure we don't incorrectly announce a comment blocks /** */
    .replace(/^\//g, "\\/")
    .replace(/([^\\])(\/)/g, "$1\\/");
  const enumLink = `{@link Known${model.name}} can be used interchangeably with ${model.name},\n this enum contains the known values that the service supports.`;

  return [
    `${model.description} \\`,
    enumLink,
    `### Known values supported by the service`,
    valueDescriptions
  ].join(" \n");
}

function emitEnumMember(member: SdkEnumValueType): EnumMemberStructure {
  const memberStructure: EnumMemberStructure = {
    kind: StructureKind.EnumMember,
    name: member.name,
    value: member.value
  };

  if (member.description) {
    memberStructure.docs = [member.description];
  }

  return memberStructure;
}

function buildModelInterface(
  context: SdkContext,
  type: SdkModelType
): InterfaceDeclarationStructure {
  const interfaceStructure: InterfaceDeclarationStructure = {
    kind: StructureKind.Interface,
    name: normalizeModelName(context, type),
    isExported: true,
    properties: type.properties
      .filter((p) => !isMetadata(context.program, p.__raw!))
      .map(buildModelProperty)
  };

  if (type.baseModel) {
    const partentReference = getModelExpression(type.baseModel, {
      skipPolymorphicUnion: true
    });
    interfaceStructure.extends = [partentReference];
  }

  if (type.description) {
    interfaceStructure.docs = [type.description];
  }

  return interfaceStructure;
}

export function normalizeModelName(
  context: SdkContext,
  type: SdkModelType | SdkEnumType | SdkUnionType
): string {
  const segments = type.crossLanguageDefinitionId.split(".");
  segments.pop();
  segments.shift();
  segments.filter((segment) => segment !== context.sdkPackage.rootNamespace);
  const namespacePrefix = context.rlcOptions?.enableModelNamespace
    ? segments.join("")
    : "";
  let pagePrefix = "";
  if (type.__raw && type.__raw.kind === "Model") {
    // TODO: this is temporary until we have a better way in tcgc to extract the paged metadata
    // issue link https://github.com/Azure/typespec-azure/issues/1464
    const page = extractPagedMetadataNested(context.program, type.__raw!);
    pagePrefix =
      page && page.itemsSegments && page.itemsSegments.length > 0 ? "_" : "";
  }
  return `${pagePrefix}${namespacePrefix}${normalizeName(
    type.name,
    NameType.Interface
  )}`;
}

function buildModelPolymorphicType(type: SdkModelType) {
  if (!type.discriminatedSubtypes) {
    return undefined;
  }

  const discriminatedSubtypes = Object.values(type.discriminatedSubtypes);

  const typeDeclaration: TypeAliasDeclarationStructure = {
    kind: StructureKind.TypeAlias,
    name: `${normalizeName(type.name, NameType.Interface)}Union`,
    isExported: true,
    type: discriminatedSubtypes.map((t) => getTypeExpression(t)).join(" | ")
  };

  typeDeclaration.type += ` | ${getModelExpression(type, {
    skipPolymorphicUnion: true
  })}`;
  return typeDeclaration;
}

function buildModelProperty(
  property: SdkModelPropertyType
): PropertySignatureStructure {
  const propertyStructure: PropertySignatureStructure = {
    kind: StructureKind.PropertySignature,
    name: `"${property.name}"`,
    type: getTypeExpression(property.type),
    hasQuestionToken: property.optional,
    isReadonly: isReadOnly(property as SdkBodyModelPropertyType)
  };

  if (property.description) {
    propertyStructure.docs = [property.description];
  }

  return propertyStructure;
}

export function visitPackageTypes(
  sdkPackage: SdkHttpPackage,
  emitQueue: Set<SdkType>
) {
  // Add all models in the package to the emit queue
  for (const model of sdkPackage.models) {
    visitType(model, emitQueue);
  }

  // Add all enums to the queue
  for (const enumType of sdkPackage.enums) {
    emitQueue.add(enumType);
  }

  // Visit the clients to discover all models
  for (const client of sdkPackage.clients) {
    visitClient(client, emitQueue);
  }
}

function visitClient(
  client: SdkClientType<SdkHttpOperation>,
  emitQueue: Set<SdkType>
) {
  // Comment this out for now, as client initialization is not used in the generated code
  // visitType(client.initialization, emitQueue);
  client.methods.forEach((method) => visitClientMethod(method, emitQueue));
}

function visitClientMethod(
  method: SdkMethod<SdkHttpOperation>,
  emitQueue: Set<SdkType>
) {
  switch (method.kind) {
    case "lro":
    case "paging":
    case "lropaging":
    case "basic":
      // Visit the response
      visitType(method.response.type, emitQueue);
      // Visit the error response
      visitType(method.exception?.type, emitQueue);
      // Visit the parameters
      method.parameters.forEach((parameter) => {
        visitType(parameter.type, emitQueue);
      });

      visitOperation(method.operation, emitQueue);
      break;
    case "clientaccessor":
      method.response.methods.forEach((responseMethod) =>
        visitClientMethod(responseMethod, emitQueue)
      );
      method.parameters.forEach((parameter) =>
        visitType(parameter.type, emitQueue)
      );
      break;
    default:
      throw new Error(`Unknown sdk method kind: ${(method as any).kind}`);
  }
}

function visitOperation(operation: SdkHttpOperation, emitQueue: Set<SdkType>) {
  // Visit the request
  visitType(operation.bodyParam?.type, emitQueue);
  // Visit the response
  operation.exceptions.forEach((exception) =>
    visitType(exception.type, emitQueue)
  );

  operation.parameters.forEach((parameter) =>
    visitType(parameter.type, emitQueue)
  );

  operation.responses.forEach((response) =>
    visitType(response.type, emitQueue)
  );
}

function visitType(type: SdkType | undefined, emitQueue: Set<SdkType>) {
  if (!type) {
    return;
  }

  if (emitQueue.has(type as any)) {
    return;
  }

  if (type.kind === "model") {
    const externalModel = getExternalModel(type);
    if (externalModel) {
      return;
    }
    emitQueue.add(type);
    for (const property of type.properties) {
      if (!emitQueue.has(property.type as any)) {
        visitType(property.type, emitQueue);
      }
    }
    if (type.discriminatedSubtypes) {
      for (const subType of Object.values(type.discriminatedSubtypes)) {
        if (!emitQueue.has(subType as any)) {
          visitType(subType, emitQueue);
        }
      }
    }
  }
  if (type.kind === "array") {
    if (!emitQueue.has(type.valueType as any)) {
      visitType(type.valueType, emitQueue);
    }
  }
  if (type.kind === "dict") {
    if (!emitQueue.has(type.valueType as any)) {
      visitType(type.valueType, emitQueue);
    }
    if (!emitQueue.has(type)) {
      emitQueue.add(type);
    }
  }
  if (type.kind === "enum") {
    if (!emitQueue.has(type as any)) {
      emitQueue.add(type);
    }
  }
  if (type.kind === "nullable") {
    if (!emitQueue.has(type as any)) {
      emitQueue.add(type);
    }
    if (!emitQueue.has(type.type as any)) {
      visitType(type.type, emitQueue);
    }
  }
  if (type.kind === "union") {
    emitQueue.add(type);
    for (const value of type.values) {
      if (!emitQueue.has(value as any)) {
        visitType(value, emitQueue);
      }
    }
  }
}
