import {
  EnumDeclarationStructure,
  EnumMemberStructure,
  InterfaceDeclarationStructure,
  OptionalKind,
  PropertySignatureStructure,
  SourceFile,
  StructureKind,
  TypeAliasDeclarationStructure
} from "ts-morph";
import { NameType, normalizeName } from "@azure-tools/rlc-common";
import {
  SdkArrayType,
  SdkBodyModelPropertyType,
  SdkClientType,
  SdkDictionaryType,
  SdkEnumType,
  SdkEnumValueType,
  SdkHttpOperation,
  SdkHttpPackage,
  SdkMethod,
  SdkModelPropertyType,
  SdkModelType,
  SdkType,
  SdkUnionType,
  UsageFlags,
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
import {
  getTypeExpression,
  normalizeModelPropertyName
} from "./type-expressions/get-type-expression.js";
import path from "path";
import { refkey } from "../framework/refkey.js";
import { useContext } from "../contextManager.js";
import { isMetadata } from "@typespec/http";
import {
  isAzureCoreErrorType,
  isAzureCoreLroType
} from "../utils/modelUtils.js";
import { isExtensibleEnum } from "./type-expressions/get-enum-expression.js";
import { isDiscriminatedUnion } from "./serialization/serializeUtils.js";
import { reportDiagnostic } from "../lib.js";
import { NoTarget } from "@typespec/compiler";

type InterfaceStructure = OptionalKind<InterfaceDeclarationStructure> & {
  extends?: string[];
  kind: StructureKind.Interface;
};

function isGenerableType(
  type: SdkType
): type is
  | SdkModelType
  | SdkEnumType
  | SdkUnionType
  | SdkDictionaryType
  | SdkArrayType {
  return (
    type.kind === "model" ||
    type.kind === "enum" ||
    type.kind === "union" ||
    type.kind === "dict" ||
    type.kind === "array"
  );
}
export function emitTypes(
  context: SdkContext,
  { sourceRoot }: { sourceRoot: string }
) {
  const sdkPackage = context.sdkPackage;
  const emitQueue: Set<SdkType> = new Set();
  const outputProject = useContext("outputProject");

  visitPackageTypes(sdkPackage, emitQueue);
  const modelsFilePath = getModelsPath(sourceRoot);
  let sourceFile;
  if (
    emitQueue.size > 0 &&
    (sdkPackage.models.length > 0 || sdkPackage.enums.length > 0)
  ) {
    sourceFile = outputProject.createSourceFile(modelsFilePath);
    if (!sourceFile) {
      throw new Error(`Failed to create source file at ${modelsFilePath}`);
    }
  } else {
    return;
  }

  for (const type of emitQueue) {
    if (!isGenerableType(type)) {
      continue;
    }
    if (isAzureCoreLroType(type.__raw)) {
      continue;
    }
    if (type.kind === "model") {
      if (isAzureCoreErrorType(context.program, type.__raw)) {
        continue;
      }
      if (
        !type.usage ||
        (type.usage !== undefined &&
          (type.usage & UsageFlags.Output) !== UsageFlags.Output &&
          (type.usage & UsageFlags.Input) !== UsageFlags.Input)
      ) {
        continue;
      }
      if (!type.name && type.isGeneratedName) {
        // TODO: https://github.com/Azure/typespec-azure/issues/1713 and https://github.com/microsoft/typespec/issues/4815
        // throw new Error(`Generation of anonymous types`);
        continue;
      }
      const modelInterface = buildModelInterface(context, type);
      if (type.discriminatorProperty) {
        modelInterface.properties
          ?.filter((p) => {
            return (
              p.name ===
              normalizeModelPropertyName(context, type.discriminatorProperty!)
            );
          })
          .map((p) => {
            p.docs?.push(
              `The discriminator possible values: ${Object.keys(type.discriminatedSubtypes ?? {}).join(", ")}`
            );
            return p;
          });
      }
      addDeclaration(sourceFile, modelInterface, type);
      const modelPolymorphicType = buildModelPolymorphicType(context, type);
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
      if (
        !type.usage ||
        (type.usage !== undefined &&
          (type.usage & UsageFlags.Output) !== UsageFlags.Output &&
          (type.usage & UsageFlags.Input) !== UsageFlags.Input)
      ) {
        continue;
      }
      const [enumType, knownValuesEnum] = buildEnumTypes(context, type);
      if (isExtensibleEnum(context, type) && !enumType.name.startsWith("_")) {
        addDeclaration(
          sourceFile,
          knownValuesEnum,
          refkey(type, "knownValues")
        );
      }
      if (!enumType.name.startsWith("_")) {
        addDeclaration(sourceFile, enumType, type);
      }
    } else if (type.kind === "union") {
      const unionType = buildUnionType(context, type);
      addDeclaration(sourceFile, unionType, type);
      addSerializationFunctions(context, type, sourceFile);
    } else if (type.kind === "dict") {
      addSerializationFunctions(context, type, sourceFile);
    } else if (type.kind === "array") {
      addSerializationFunctions(context, type, sourceFile);
    }
  }

  if (
    sourceFile.getInterfaces().length === 0 &&
    sourceFile.getTypeAliases().length === 0 &&
    sourceFile.getEnums().length === 0
  ) {
    sourceFile.delete();
    return;
  }
  addImportBySymbol("serializeRecord", sourceFile);
  return sourceFile;
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

function buildUnionType(
  context: SdkContext,
  type: SdkUnionType
): TypeAliasDeclarationStructure {
  const unionDeclaration: TypeAliasDeclarationStructure = {
    kind: StructureKind.TypeAlias,
    name: normalizeModelName(context, type),
    isExported: true,
    type: type.variantTypes
      .map((v) => getTypeExpression(context, v))
      .join(" | ")
  };

  unionDeclaration.docs = [type.doc ?? `Alias for ${unionDeclaration.name}`];

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
      ? type.values.map((v) => getTypeExpression(context, v)).join(" | ")
      : getTypeExpression(context, type.valueType)
  };

  const docs = type.doc ? type.doc : "Type of " + enumAsUnion.name;
  enumAsUnion.docs =
    isExtensibleEnum(context, type) && type.doc
      ? [getExtensibleEnumDescription(type) ?? docs]
      : [docs];
  enumDeclaration.docs = type.doc
    ? [type.doc]
    : [`Known values of {@link ${type.name}} that the service accepts.`];

  return [enumAsUnion, enumDeclaration];
}

function getExtensibleEnumDescription(model: SdkEnumType): string | undefined {
  if (model.isFixed && model.name && model.values) {
    return;
  }
  const valueDescriptions = model.values
    .map((v) => `**${v.value}**${v.doc ? `: ${v.doc}` : ""}`)
    .join(` \\\n`)
    // Escape the character / to make sure we don't incorrectly announce a comment blocks /** */
    .replace(/^\//g, "\\/")
    .replace(/([^\\])(\/)/g, "$1\\/");
  const enumLink = `{@link Known${model.name}} can be used interchangeably with ${model.name},\n this enum contains the known values that the service supports.`;

  return [
    `${model.doc} \\`,
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

  if (member.doc) {
    memberStructure.docs = [member.doc];
  }

  return memberStructure;
}

export function buildModelInterface(
  context: SdkContext,
  type: SdkModelType
): InterfaceDeclarationStructure {
  const interfaceStructure = {
    kind: StructureKind.Interface,
    name: normalizeModelName(context, type, NameType.Interface, true),
    isExported: true,
    properties: type.properties
      .filter((p) => !isMetadata(context.program, p.__raw!))
      .map((p) => {
        return buildModelProperty(context, p);
      })
  } as InterfaceStructure;

  if (type.baseModel) {
    const parentReference = getModelExpression(context, type.baseModel, {
      skipPolymorphicUnion: true
    });
    interfaceStructure.extends = [parentReference];
  }

  if (type.additionalProperties) {
    addExtendedDictInfo(context, type, interfaceStructure);
  }

  interfaceStructure.docs = [
    type.doc ?? "model interface " + interfaceStructure.name
  ];

  return interfaceStructure;
}

function addExtendedDictInfo(
  context: SdkContext,
  model: SdkModelType,
  modelInterface: InterfaceStructure
) {
  const additionalPropertiesType = model.additionalProperties
    ? getTypeExpression(context, model.additionalProperties)
    : undefined;
  if (
    (model.properties &&
      model.properties.length > 0 &&
      model.additionalProperties &&
      model.properties?.every((p) => {
        return additionalPropertiesType?.includes(
          getTypeExpression(context, p.type)
        );
      })) ||
    (model.properties?.length === 0 && model.additionalProperties)
  ) {
    modelInterface.extends = [
      ...(modelInterface.extends ?? []),
      `Record<string, ${additionalPropertiesType ?? "any"}>`
    ];
  } else if (context.rlcOptions?.compatibilityMode) {
    if (!modelInterface.extends) {
      modelInterface.extends = [];
    }
    modelInterface.extends.push(`Record<string, any>`);
  } else {
    modelInterface.properties?.push({
      name: "additionalProperties",
      docs: ["Additional properties"],
      hasQuestionToken: true,
      isReadonly: false,
      type: `Record<string, ${additionalPropertiesType ?? "any"}>`
    });
  }
}

export function normalizeModelName(
  context: SdkContext,
  type:
    | SdkModelType
    | SdkEnumType
    | SdkUnionType
    | SdkArrayType
    | SdkDictionaryType,
  nameType: NameType = NameType.Interface,
  skipPolymorphicUnionSuffix = false
): string {
  if (type.kind === "array") {
    return `Array<${normalizeModelName(context, type.valueType as any, nameType)}>`;
  } else if (type.kind === "dict") {
    return `Record<string, ${normalizeModelName(
      context,
      type.valueType as any,
      nameType
    )}>`;
  }
  if (type.kind !== "model" && type.kind !== "enum" && type.kind !== "union") {
    return getTypeExpression(context, type);
  }
  const segments = type.crossLanguageDefinitionId.split(".");
  segments.pop();
  segments.shift();
  segments.filter((segment) => segment !== context.sdkPackage.rootNamespace);
  let unionSuffix = "";
  if (!skipPolymorphicUnionSuffix) {
    if (type.kind === "model" && isDiscriminatedUnion(type)) {
      unionSuffix = "Union";
    }
  }
  const namespacePrefix = context.rlcOptions?.enableModelNamespace
    ? segments.join("")
    : "";
  let internalModelPrefix = "";
  if (type.__raw && type.__raw.kind === "Model") {
    // TODO: this is temporary until we have a better way in tcgc to extract the paged metadata
    // issue link https://github.com/Azure/typespec-azure/issues/1464
    const page = extractPagedMetadataNested(context.program, type.__raw!);
    internalModelPrefix =
      page && page.itemsSegments && page.itemsSegments.length > 0 ? "_" : "";
  }
  if (type.isGeneratedName) {
    internalModelPrefix = "_";
  }
  return `${internalModelPrefix}${normalizeName(namespacePrefix + type.name + unionSuffix, nameType, true)}`;
}

function buildModelPolymorphicType(context: SdkContext, type: SdkModelType) {
  if (!type.discriminatedSubtypes) {
    return undefined;
  }

  const discriminatedSubtypes = Object.values(type.discriminatedSubtypes);

  const typeDeclaration: TypeAliasDeclarationStructure = {
    kind: StructureKind.TypeAlias,
    name: `${normalizeName(type.name, NameType.Interface)}Union`,
    isExported: true,
    type: discriminatedSubtypes
      .filter((p) => {
        return (
          p.usage !== undefined &&
          ((p.usage & UsageFlags.Output) === UsageFlags.Output ||
            (p.usage & UsageFlags.Input) === UsageFlags.Input)
        );
      })
      .map((t) => getTypeExpression(context, t))
      .join(" | ")
  };
  typeDeclaration.docs = [`Alias for ${typeDeclaration.name}`];

  typeDeclaration.type += ` | ${getModelExpression(context, type, {
    skipPolymorphicUnion: true
  })}`;
  return typeDeclaration;
}

function buildModelProperty(
  context: SdkContext,
  property: SdkModelPropertyType
): PropertySignatureStructure {
  const normalizedPropName = normalizeModelPropertyName(context, property);
  if (
    !context.rlcOptions?.ignorePropertyNameNormalize &&
    normalizedPropName !== `"${property.name}"`
  ) {
    reportDiagnostic(context.program, {
      code: "property-name-normalized",
      format: {
        propertyName: property.name,
        normalizedName: normalizedPropName
      },
      target: NoTarget
    });
  }
  const propertyStructure: PropertySignatureStructure = {
    kind: StructureKind.PropertySignature,
    name: normalizedPropName,
    type: getTypeExpression(context, property.type),
    hasQuestionToken: property.optional,
    isReadonly: isReadOnly(property as SdkBodyModelPropertyType)
  };

  if (property.doc) {
    propertyStructure.docs = [property.doc];
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
    if (!emitQueue.has(enumType)) {
      emitQueue.add(enumType);
    }
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
    if (type.additionalProperties) {
      visitType(type.additionalProperties, emitQueue);
    }
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
    if (!emitQueue.has(type)) {
      emitQueue.add(type);
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
    if (!emitQueue.has(type as any)) {
      emitQueue.add(type);
    }
    for (const value of type.variantTypes) {
      if (!emitQueue.has(value as any)) {
        visitType(value, emitQueue);
      }
    }
  }
}
