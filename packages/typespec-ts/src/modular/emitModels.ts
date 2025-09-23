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
  fixLeadingNumber,
  NameType,
  normalizeName
} from "@azure-tools/rlc-common";
import {
  SdkArrayType,
  SdkModelPropertyType,
  SdkClientType,
  SdkDictionaryType,
  SdkEnumType,
  SdkEnumValueType,
  SdkHttpOperation,
  SdkMethod,
  SdkModelType,
  SdkNullableType,
  SdkServiceMethod,
  SdkServiceOperation,
  SdkType,
  SdkUnionType,
  UsageFlags,
  isPagedResultModel,
  isReadOnly,
  listAllServiceNamespaces
} from "@azure-tools/typespec-client-generator-core";
import {
  getExternalModel,
  getModelExpression
} from "./type-expressions/get-model-expression.js";

import { SdkContext } from "../utils/interfaces.js";
import { addDeclaration } from "../framework/declaration.js";
import { buildModelDeserializer } from "./serialization/buildDeserializerFunction.js";
import { buildModelSerializer } from "./serialization/buildSerializerFunction.js";
import path from "path";
import { refkey } from "../framework/refkey.js";
import { useContext } from "../contextManager.js";
import { isMetadata, isOrExtendsHttpFile } from "@typespec/http";
import {
  isAzureCoreErrorType,
  isAzureCoreLroType
} from "../utils/modelUtils.js";
import { isExtensibleEnum } from "./type-expressions/get-enum-expression.js";
import { isDiscriminatedUnion } from "./serialization/serializeUtils.js";
import { reportDiagnostic } from "../lib.js";
import { getNamespaceFullName, NoTarget } from "@typespec/compiler";
import {
  getTypeExpression,
  normalizeModelPropertyName
} from "./type-expressions/get-type-expression.js";
import {
  emitQueue,
  getAllOperationsFromClient
} from "../framework/hooks/sdkTypes.js";
import { resolveReference } from "../framework/reference.js";
import { MultipartHelpers } from "./static-helpers-metadata.js";
import { getAllAncestors } from "./helpers/operationHelpers.js";
import { getAllProperties } from "./helpers/operationHelpers.js";

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
    (type.kind === "nullable" &&
      isGenerableType(type.type) &&
      Boolean(type.name) &&
      !type.isGeneratedName)
  );
}
export function emitTypes(
  context: SdkContext,
  { sourceRoot }: { sourceRoot: string }
) {
  const outputProject = useContext("outputProject");

  let sourceFile;

  for (const type of emitQueue) {
    if (!isGenerableType(type)) {
      continue;
    }
    if (isAzureCoreLroType(type.__raw)) {
      continue;
    }

    const namespaces = getModelNamespaces(context, type);
    const filepath = getModelsPath(sourceRoot, namespaces);
    sourceFile = outputProject.getSourceFile(filepath);
    if (!sourceFile) {
      sourceFile = outputProject.createSourceFile(filepath);
    }
    emitType(context, type, sourceFile);
  }

  const modelFiles = outputProject.getSourceFiles(
    sourceRoot + "/models/**/*.ts"
  );
  const result = [];
  for (const modelFile of modelFiles) {
    if (
      modelFile.getInterfaces().length === 0 &&
      modelFile.getTypeAliases().length === 0 &&
      modelFile.getEnums().length === 0
    ) {
      outputProject.removeSourceFile(modelFile);
      continue;
    }
    result.push(modelFile);
  }

  return result;
}

function emitType(context: SdkContext, type: SdkType, sourceFile: SourceFile) {
  if (type.kind === "model") {
    if (isAzureCoreErrorType(context.program, type.__raw)) {
      return;
    }
    if (isOrExtendsHttpFile(context.program, type.__raw!)) {
      return;
    }
    if (
      !type.usage ||
      (type.usage !== undefined &&
        (type.usage & UsageFlags.Output) !== UsageFlags.Output &&
        (type.usage & UsageFlags.Input) !== UsageFlags.Input &&
        (type.usage & UsageFlags.Exception) !== UsageFlags.Exception)
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
    const exceptionUsage =
      (type.usage & UsageFlags.Exception) === UsageFlags.Exception;
    if (!(inputUsage || outputUsage || apiVersionEnumOnly || exceptionUsage)) {
      return;
    }
    const [enumType, knownValuesEnum] = buildEnumTypes(
      context,
      type,
      isExtensibleEnum(context, type)
    );
    if (enumType.name.startsWith("_")) {
      // skip enum generation for internal enums
      return;
    }
    if (apiVersionEnumOnly) {
      // generate known values enum only for api version enums
      addDeclaration(
        sourceFile,
        knownValuesEnum,
        refkey(knownValuesEnum.name, "knownValues")
      );
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
    addDeclaration(sourceFile, normalizeModelName(context, type), type);
    addSerializationFunctions(context, type, sourceFile);
  } else if (type.kind === "array") {
    addDeclaration(sourceFile, normalizeModelName(context, type), type);
    addSerializationFunctions(context, type, sourceFile);
  } else if (type.kind === "nullable") {
    const nullableType = buildNullableType(context, type);
    addDeclaration(sourceFile, nullableType, type);
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

export function getModelsPath(
  sourceRoot: string,
  modelNamespace: string[] = []
): string {
  return path.join(
    ...[
      sourceRoot,
      "models",
      ...modelNamespace.map((n) => normalizeName(n, NameType.File)),
      `models.ts`
    ]
  );
}

export function getModelNamespaces(
  context: SdkContext,
  model: SdkType
): string[] {
  const deepestNamespace = getNamespaceFullName(
    listAllServiceNamespaces(context)[0]!
  );
  if (
    model.kind === "model" ||
    model.kind === "enum" ||
    model.kind === "union"
  ) {
    if (
      (model.namespace ?? "").startsWith("Azure.ResourceManager") ||
      (model.namespace ?? "").startsWith("Azure.Core") ||
      (model.crossLanguageDefinitionId ?? "").startsWith(
        "TypeSpec.Rest.Resource"
      ) ||
      (model.crossLanguageDefinitionId ?? "") === "TypeSpec.Http.File" // filter out the TypeSpec.Http.File model similar like what java does here https://github.com/microsoft/typespec/blob/main/packages/http-client-java/emitter/src/code-model-builder.ts#L2589
    ) {
      return [];
    }
    const segments = model.namespace.split(".");
    const rootNamespace = deepestNamespace.split(".") ?? [];
    if (segments.length > rootNamespace.length) {
      while (segments[0] === rootNamespace[0]) {
        segments.shift();
        rootNamespace.shift();
      }
      return segments;
    }
    return [];
  } else if (model.kind === "array" || model.kind === "dict") {
    return getModelNamespaces(context, model.valueType);
  } else if (model.kind === "nullable") {
    return getModelNamespaces(context, model.type);
  }
  return [];
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

  const serializerRefkey = refkey(type, "serializer");
  const deserailizerRefKey = refkey(type, "deserializer");
  if (
    serializationFunction &&
    typeof serializationFunction !== "string" &&
    serializationFunction.name
  ) {
    addDeclaration(sourceFile, serializationFunction, serializerRefkey);
  }
  const deserializationFunction = buildModelDeserializer(
    context,
    type,
    skipDiscriminatedUnion
  );
  if (
    deserializationFunction &&
    typeof deserializationFunction !== "string" &&
    deserializationFunction.name
  ) {
    addDeclaration(sourceFile, deserializationFunction, deserailizerRefKey);
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

function buildNullableType(context: SdkContext, type: SdkNullableType) {
  const nullableDeclaration: TypeAliasDeclarationStructure = {
    kind: StructureKind.TypeAlias,
    name: normalizeModelName(context, type),
    isExported: true,
    type: getTypeExpression(context, type.type) + " | null"
  };
  nullableDeclaration.docs = [
    type.doc ?? `Alias for ${nullableDeclaration.name}`
  ];
  return nullableDeclaration;
}

export function buildEnumTypes(
  context: SdkContext,
  type: SdkEnumType,
  reportMemberNameDiagnostic = false // if reportMemberNameDiagnostic is true, it will report diagnostic for enum member name
): [TypeAliasDeclarationStructure, EnumDeclarationStructure] {
  const enumDeclaration: EnumDeclarationStructure = {
    kind: StructureKind.Enum,
    name: `Known${normalizeModelName(context, type)}`,
    isExported: true,
    members: type.values.map((value) =>
      emitEnumMember(context, value, reportMemberNameDiagnostic)
    )
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
      ? [getExtensibleEnumDescription(context, type) ?? docs]
      : [docs];
  enumDeclaration.docs = type.doc
    ? [type.doc]
    : [`Known values of {@link ${type.name}} that the service accepts.`];

  return [enumAsUnion, enumDeclaration];
}

function getExtensibleEnumDescription(
  context: SdkContext,
  model: SdkEnumType
): string | undefined {
  if (model.isFixed && model.name && model.values) {
    return;
  }
  const valueDescriptions = model.values
    .map((v) => `**${v.value}**${v.doc ? `: ${v.doc}` : ""}`)
    .join(` \\\n`)
    // Escape the character / to make sure we don't incorrectly announce a comment blocks /** */
    .replace(/^\//g, "\\/")
    .replace(/([^\\])(\/)/g, "$1\\/");
  const enumLink = `{@link Known${normalizeModelName(context, model)}} can be used interchangeably with ${normalizeModelName(context, model)},\n this enum contains the known values that the service supports.`;

  return [
    `${model.doc} \\`,
    enumLink,
    `### Known values supported by the service`,
    valueDescriptions
  ].join(" \n");
}

function emitEnumMember(
  context: SdkContext,
  member: SdkEnumValueType,
  reportMemberNameDiagnostic = false // if reportMemberNameDiagnostic is true, it will report diagnostic for enum member name
): EnumMemberStructure {
  const normalizedMemberName = context.rlcOptions?.ignoreEnumMemberNameNormalize
    ? fixLeadingNumber(member.name, NameType.EnumMemberName) // need to fix the leading number also for enum member
    : normalizeName(member.name, NameType.EnumMemberName, true);
  if (
    reportMemberNameDiagnostic &&
    normalizedMemberName.toLowerCase().startsWith("_") &&
    !member.name.toLowerCase().startsWith("_")
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

function buildModelInterface(
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
        return buildModelProperty(context, p, type);
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
  if (context.rlcOptions?.compatibilityMode) {
    const ancestors = getAllAncestors(model);
    const properties = getAllProperties(context, model, ancestors);
    let anyType = true;
    if (!additionalPropertiesType) {
      // case 1: if additionalProperties is not defined, we should use any type
      anyType = true;
    } else if (properties.length === 0) {
      // case 2: if additionalProperties is defined and model.properties is empty, we should use additionalProperties type
      anyType = false;
    } else {
      // case 3: if additionalProperties is defined and model.properties is not empty, we should check if all properties are compatible with additionalProperties type
      anyType = !properties.every((p) => {
        return additionalPropertiesType?.includes(
          getTypeExpression(context, p.type)
        );
      });
    }
    if (!modelInterface.extends) {
      modelInterface.extends = [];
    }
    modelInterface.extends.push(
      `Record<string, ${anyType ? "any" : additionalPropertiesType}>`
    );
  } else {
    const additionalPropertiesType = model.additionalProperties
      ? getTypeExpression(context, model.additionalProperties)
      : undefined;
    const name = getAdditionalPropertiesName(context, model);
    if (name !== "additionalProperties") {
      // report diagnostic for additionalProperties
      reportDiagnostic(context.program, {
        code: "property-name-conflict",
        format: {
          propertyName: "additionalProperties"
        },
        target: NoTarget
      });
    }
    if (!modelInterface.properties) {
      modelInterface.properties = [];
    }
    modelInterface.properties.push({
      name,
      docs: ["Additional properties"],
      hasQuestionToken: true,
      isReadonly: false,
      type: `Record<string, ${additionalPropertiesType ?? "any"}>`
    });
  }
}

export function getAdditionalPropertiesName(
  context: SdkContext,
  model: SdkModelType
): string {
  const ancestors = getAllAncestors(model);
  const properties = getAllProperties(context, model, ancestors);
  const nameConflict = properties.find(
    (p) => p.name === "additionalProperties"
  );
  return nameConflict ? "additionalPropertiesBag" : "additionalProperties";
}

export function normalizeModelName(
  context: SdkContext,
  type:
    | SdkModelType
    | SdkEnumType
    | SdkUnionType
    | SdkArrayType
    | SdkDictionaryType
    | SdkNullableType,
  nameType: NameType = NameType.Interface,
  skipPolymorphicUnionSuffix = false,
  rawModelName?: boolean
): string {
  if (type.kind === "array") {
    if (rawModelName) {
      return `${normalizeModelName(context, type.valueType as any, nameType, skipPolymorphicUnionSuffix, rawModelName)}Array`;
    }
    return `Array<${normalizeModelName(context, type.valueType as any, nameType)}>`;
  } else if (type.kind === "dict") {
    if (rawModelName) {
      return `${normalizeModelName(context, type.valueType as any, nameType, skipPolymorphicUnionSuffix, rawModelName)}Record`;
    }
    return `Record<string, ${normalizeModelName(
      context,
      type.valueType as any,
      nameType
    )}>`;
  }
  if (
    type.kind !== "model" &&
    type.kind !== "enum" &&
    type.kind !== "union" &&
    type.kind !== "nullable"
  ) {
    return getTypeExpression(context, type);
  }

  const segments = getModelNamespaces(context, type);
  let unionSuffix = "";
  if (!skipPolymorphicUnionSuffix) {
    if (type.kind === "model" && isDiscriminatedUnion(type)) {
      unionSuffix = "Union";
    }
  }
  const namespacePrefix = context.rlcOptions?.enableModelNamespace
    ? segments.join("")
    : "";
  const internalModelPrefix =
    isPagedResultModel(context, type) || type.isGeneratedName ? "_" : "";
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

function getDiscriminatorValueForModel(
  model: SdkModelType
): string | undefined {
  if (!model.discriminatorProperty) {
    return undefined;
  }

  // Find the discriminator property in the model's properties
  const discriminatorProp = model.properties.find(
    (p) => p.name === model.discriminatorProperty!.name
  );

  if (discriminatorProp && discriminatorProp.type.kind === "constant") {
    return discriminatorProp.type.value as string;
  }

  return undefined;
}

function buildModelProperty(
  context: SdkContext,
  property: SdkModelPropertyType,
  parentModel?: SdkModelType
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

  let typeExpression: string;

  // Handle discriminator properties for hierarchical inheritance
  if (
    parentModel &&
    parentModel.discriminatorProperty &&
    property.name === parentModel.discriminatorProperty.name
  ) {
    // Only apply union logic if this is an intermediate model:
    // 1. It has a baseModel (it extends something)
    // 2. It has its own discriminated subtypes (other models extend it)
    if (parentModel.baseModel && parentModel.discriminatedSubtypes) {
      const childDiscriminatorValues: string[] = [];
      const currentModelValue = getDiscriminatorValueForModel(parentModel);
      if (currentModelValue) {
        childDiscriminatorValues.push(`"${currentModelValue}"`);
      }

      // Find all subtypes that extend from this model
      for (const [discriminatorValue, subtype] of Object.entries(
        parentModel.discriminatedSubtypes
      )) {
        if (subtype.baseModel === parentModel) {
          childDiscriminatorValues.push(`"${discriminatorValue}"`);
        }
      }

      if (childDiscriminatorValues.length > 1) {
        typeExpression = childDiscriminatorValues.join(" | ");
      } else {
        typeExpression = getTypeExpression(context, property.type);
      }
    } else {
      typeExpression = getTypeExpression(context, property.type);
    }
  }
  // eslint-disable-next-line
  else if (property.kind === "property" && property.isMultipartFileInput) {
    // eslint-disable-next-line
    const multipartOptions = property.multipartOptions;
    typeExpression = "{";
    typeExpression += `contents: ${resolveReference(MultipartHelpers.FileContents)};`;

    const isContentTypeOptional =
      multipartOptions?.contentType === undefined ||
      multipartOptions.contentType.optional ||
      multipartOptions.defaultContentTypes.length > 0;
    const isFilenameOptional =
      multipartOptions?.filename === undefined ||
      multipartOptions.filename.optional;

    const contentTypeType = multipartOptions?.contentType
      ? getTypeExpression(context, multipartOptions.contentType.type)
      : "string";
    const filenameType = multipartOptions?.filename
      ? getTypeExpression(context, multipartOptions.filename.type)
      : "string";

    typeExpression += `contentType${isContentTypeOptional ? "?" : ""}: ${contentTypeType};`;
    typeExpression += `filename${isFilenameOptional ? "?" : ""}: ${filenameType};`;

    typeExpression += "}";

    if (isContentTypeOptional && isFilenameOptional) {
      // Allow passing content directly if both filename and content type are optional
      typeExpression = `(${resolveReference(MultipartHelpers.FileContents)}) | ${typeExpression}`;
    } else {
      // If either one is required, still accept File at the top level since it requires a filename
      typeExpression = `File | ${typeExpression}`;
    }

    if (property.type.kind === "array") {
      typeExpression = `Array<${typeExpression}>`;
    }
  } else {
    typeExpression = getTypeExpression(context, property.type);
  }

  const propertyStructure: PropertySignatureStructure = {
    kind: StructureKind.PropertySignature,
    name: normalizedPropName,
    type: typeExpression,
    hasQuestionToken: property.optional,
    isReadonly: isReadOnly(property as SdkModelPropertyType)
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
  client: SdkClientType<SdkServiceOperation>
) {
  // TODO: include the client parameters
  // https://github.com/Azure/autorest.typescript/issues/3148
  // Comment this out for now, as client initialization is not used in the generated code
  getAllOperationsFromClient(client).forEach((method) =>
    visitClientMethod(context, method)
  );
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
      if (!emitQueue.has(property.type)) {
        visitType(context, property.type);
      }
    }
    if (type.discriminatedSubtypes) {
      for (const subType of Object.values(type.discriminatedSubtypes)) {
        if (!emitQueue.has(subType)) {
          visitType(context, subType);
        }
      }
    }
  }
  if (type.kind === "array") {
    if (!emitQueue.has(type.valueType)) {
      visitType(context, type.valueType);
    }
  }
  if (type.kind === "dict") {
    if (!emitQueue.has(type.valueType)) {
      visitType(context, type.valueType);
    }
  }
  if (type.kind === "union") {
    emitQueue.add(type);
    for (const value of type.variantTypes) {
      if (!emitQueue.has(value)) {
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
