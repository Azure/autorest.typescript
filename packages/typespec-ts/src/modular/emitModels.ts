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
import {
  NameType,
  normalizeName,
  normalizeNumericLiteralName
} from "@azure-tools/rlc-common";
import {
  SdkArrayType,
  SdkBodyModelPropertyType,
  SdkClientType,
  SdkDictionaryType,
  SdkEnumType,
  SdkEnumValueType,
  SdkHttpOperation,
  SdkMethod,
  SdkModelPropertyType,
  SdkModelType,
  SdkNullableType,
  SdkServiceMethod,
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
import {
  getTypeExpression,
  normalizeModelPropertyName
} from "./type-expressions/get-type-expression.js";
import { emitQueue } from "../framework/hooks/sdkTypes.js";

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
  | SdkArrayType
  | SdkNullableType {
  return (
    type.kind === "model" ||
    type.kind === "enum" ||
    type.kind === "union" ||
    type.kind === "dict" ||
    type.kind === "array" ||
    type.kind === "nullable"
  );
}
export function emitTypes(
  context: SdkContext,
  { sourceRoot }: { sourceRoot: string }
) {
  const { sdkPackage } = context;
  const outputProject = useContext("outputProject");

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
    emitType(context, type, sourceFile);
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

function emitType(context: SdkContext, type: SdkType, sourceFile: SourceFile) {
  if (type.kind === "model") {
    if (isAzureCoreErrorType(context.program, type.__raw)) {
      return;
    }
    if (
      !type.usage ||
      (type.usage !== undefined &&
        (type.usage & UsageFlags.Output) !== UsageFlags.Output &&
        (type.usage & UsageFlags.Input) !== UsageFlags.Input)
    ) {
      return;
    }
    if (!type.name && type.isGeneratedName) {
      // TODO: https://github.com/Azure/typespec-azure/issues/1713 and https://github.com/microsoft/typespec/issues/4815
      // throw new Error(`Generation of anonymous types`);
      return;
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
    if (!type.usage) {
      return;
    }
    const apiVersionEnumOnly = type.usage === UsageFlags.ApiVersionEnum;
    const inputUsage = (type.usage & UsageFlags.Input) === UsageFlags.Input;
    const outputUsage = (type.usage & UsageFlags.Output) === UsageFlags.Output;
    if (!(inputUsage || outputUsage || apiVersionEnumOnly)) {
      return;
    }
    const [enumType, knownValuesEnum] = buildEnumTypes(context, type);
    if (enumType.name.startsWith("_")) {
      // skip enum generation for internal enums
      return;
    }
    if (apiVersionEnumOnly) {
      // generate known values enum only for api version enums
      addDeclaration(sourceFile, knownValuesEnum, refkey(type, "knownValues"));
    } else {
      if (isExtensibleEnum(context, type)) {
        addDeclaration(
          sourceFile,
          knownValuesEnum,
          refkey(type, "knownValues")
        );
      }
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

export function getApiVersionEnum(context: SdkContext) {
  const apiVersionEnum = context.sdkPackage.enums.find(
    (e) => e.usage === UsageFlags.ApiVersionEnum
  );
  if (!apiVersionEnum) {
    return;
  }
  return apiVersionEnum;
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

export function buildEnumTypes(
  context: SdkContext,
  type: SdkEnumType
): [TypeAliasDeclarationStructure, EnumDeclarationStructure] {
  const enumDeclaration: EnumDeclarationStructure = {
    kind: StructureKind.Enum,
    name: `Known${normalizeModelName(context, type)}`,
    isExported: true,
    members: type.values.map((value) => emitEnumMember(context, value))
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

function emitEnumMember(
  context: SdkContext,
  member: SdkEnumValueType
): EnumMemberStructure {
  const normalizedMemberName = context.rlcOptions?.ignoreEnumMemberNameNormalize
    ? normalizeNumericLiteralName(member.name, NameType.EnumMemberName) // need to normalize number also for enum member
    : normalizeName(member.name, NameType.EnumMemberName, true);
  if (
    normalizedMemberName.toLowerCase().startsWith("number") &&
    !member.name.toLowerCase().startsWith("number")
  ) {
    reportDiagnostic(context.program, {
      code: "prefix-adding-in-enum-member",
      format: {
        memberName: member.name,
        normalizedName: normalizedMemberName
      },
      target: NoTarget
    });
  }
  const memberStructure: EnumMemberStructure = {
    kind: StructureKind.EnumMember,
    name: normalizedMemberName,
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

export function visitPackageTypes(context: SdkContext) {
  const { sdkPackage } = context;
  emitQueue.clear();
  // Add all models in the package to the emit queue
  for (const model of sdkPackage.models) {
    visitType(context, model);
  }

  for (const union of sdkPackage.unions) {
    visitType(context, union);
  }
  // Add all enums to the queue
  for (const enumType of sdkPackage.enums) {
    if (!emitQueue.has(enumType)) {
      emitQueue.add(enumType);
    }
  }

  // Visit the clients to discover all models
  for (const client of sdkPackage.clients) {
    visitClient(context, client);
  }
}

function visitClient(
  context: SdkContext,
  client: SdkClientType<SdkHttpOperation>
) {
  // Comment this out for now, as client initialization is not used in the generated code
  // visitType(client.initialization, emitQueue);
  client.methods.forEach((method) => visitClientMethod(context, method));
}

function visitClientMethod(
  context: SdkContext,
  method: SdkMethod<SdkHttpOperation>
) {
  switch (method.kind) {
    case "lro":
    case "paging":
    case "lropaging":
    case "basic":
      visitMethod(context, method);
      visitOperation(context, method.operation);
      break;
    case "clientaccessor":
      method.response.methods.forEach((responseMethod) =>
        visitClientMethod(context, responseMethod)
      );
      method.parameters.forEach((parameter) => {
        visitType(context, parameter.type);
      });
      break;
    default:
      throw new Error(`Unknown sdk method kind: ${(method as any).kind}`);
  }
}

function visitOperation(context: SdkContext, operation: SdkHttpOperation) {
  // Visit the request
  visitType(context, operation.bodyParam?.type);
  // Visit the response
  operation.exceptions.forEach((exception) =>
    visitType(context, exception.type)
  );

  operation.parameters.forEach((parameter) => {
    visitType(context, parameter.type);
  });

  operation.responses.forEach((response) => visitType(context, response.type));
}

function visitMethod(
  context: SdkContext,
  method: SdkServiceMethod<SdkHttpOperation>
) {
  // Visit the request
  method.parameters.forEach((parameter) => {
    visitType(context, parameter.type);
  });
  visitType(context, method.response.type);
}

function visitType(context: SdkContext, type: SdkType | undefined) {
  if (!type) {
    return;
  }

  if (emitQueue.has(type)) {
    return;
  }
  emitQueue.add(type);
  if (type.kind === "model") {
    const externalModel = getExternalModel(type);
    if (externalModel) {
      return;
    }

    if (type.additionalProperties) {
      visitType(context, type.additionalProperties);
    }
    for (const property of type.properties) {
      if (!emitQueue.has(property.type as any)) {
        visitType(context, property.type);
      }
    }
    if (type.discriminatedSubtypes) {
      for (const subType of Object.values(type.discriminatedSubtypes)) {
        if (!emitQueue.has(subType as any)) {
          visitType(context, subType);
        }
      }
    }
  }
  if (type.kind === "array") {
    if (!emitQueue.has(type.valueType as any)) {
      visitType(context, type.valueType);
    }
  }
  if (type.kind === "dict") {
    if (!emitQueue.has(type.valueType as any)) {
      visitType(context, type.valueType);
    }
  }
  if (type.kind === "union") {
    emitQueue.add(type);
    for (const value of type.variantTypes) {
      if (!emitQueue.has(value as any)) {
        visitType(context, value);
      }
    }
  }
  if (type.kind === "nullable") {
    emitQueue.add(type);
    if (!emitQueue.has(type.type)) {
      visitType(context, type.type);
    }
  }
}
