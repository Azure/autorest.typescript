import { FunctionDeclarationStructure, StructureKind } from "ts-morph";
import {
  SdkArrayType,
  SdkDictionaryType,
  SdkModelType,
  SdkType,
  SdkUnionType,
  UsageFlags
} from "@azure-tools/typespec-client-generator-core";
import { SdkContext } from "../../utils/interfaces.js";
import {
  getAllAncestors,
  getAllProperties,
  getResponseMapping
} from "../helpers/operationHelpers.js";
import {
  getAdditionalPropertiesName,
  normalizeModelName
} from "../emitModels.js";
import { NameType, normalizeName } from "@azure-tools/rlc-common";
import { isAzureCoreErrorType } from "../../utils/modelUtils.js";
import {
  getAllDiscriminatedValues,
  isDiscriminatedUnion,
  isSupportedSerializeType,
  ModelSerializeOptions
} from "./serializeUtils.js";
import { SerializationHelpers } from "../static-helpers-metadata.js";
import { refkey } from "../../framework/refkey.js";
import { resolveReference } from "../../framework/reference.js";
import {
  getAdditionalPropertiesType,
  getDirectSubtypes
} from "../helpers/typeHelpers.js";
import { reportDiagnostic } from "../../lib.js";
import { NoTarget } from "@typespec/compiler";

export function buildModelDeserializer(
  context: SdkContext,
  type: SdkType,
  skipDiscriminatedUnion = false,
  nameOnly: boolean = false
): FunctionDeclarationStructure | undefined | string {
  // const modelTcgcType = getTcgcType(type) as SdkModelType;
  if (!isSupportedSerializeType(type)) {
    return undefined;
  }
  if (type.kind === "model" || type.kind === "union" || type.kind === "enum") {
    if (
      !type.usage ||
      (type.usage !== undefined &&
        (type.usage & UsageFlags.Output) !== UsageFlags.Output &&
        (type.usage & UsageFlags.Exception) !== UsageFlags.Exception)
    ) {
      return undefined;
    }
    if (!type.name) {
      // TODO: https://github.com/Azure/typespec-azure/issues/1713 and https://github.com/microsoft/typespec/issues/4815
      // throw new Error(`NYI Serialization of anonymous types`);
      return undefined;
    }
    if (isAzureCoreErrorType(context.program, type.__raw!)) {
      return undefined;
    }
  }

  if (
    !isDiscriminatedUnion(type) &&
    type.kind === "model" &&
    type.discriminatorProperty
  ) {
    return buildPolymorphicDeserializer(context, type, nameOnly);
  }

  if (isDiscriminatedUnion(type) && !skipDiscriminatedUnion) {
    return buildDiscriminatedUnionDeserializer(context, type, nameOnly);
  }

  switch (type.kind) {
    case "model":
      return buildModelTypeDeserializer(context, type, {
        nameOnly,
        skipDiscriminatedUnionSuffix: skipDiscriminatedUnion
      });
    case "union": // for non-discriminated union, we just return whatever we get
      return buildUnionDeserializer(context, type, nameOnly);
    case "dict":
      return buildDictTypeDeserializer(context, type, nameOnly);
    case "array":
      return buildArrayTypeDeserializer(context, type, nameOnly);
    default:
      return undefined;
  }
}

function buildPolymorphicDeserializer(
  context: SdkContext,
  type: SdkModelType,
  nameOnly: boolean
): string;
function buildPolymorphicDeserializer(
  context: SdkContext,
  type: SdkModelType
): FunctionDeclarationStructure | undefined;
function buildPolymorphicDeserializer(
  context: SdkContext,
  type: SdkModelType,
  nameOnly = false
): FunctionDeclarationStructure | undefined | string {
  if (!type.name) {
    reportDiagnostic(context.program, {
      code: "anonymous-type-deserialization",
      target: type.__raw || NoTarget
    });
    return undefined; // Return undefined to skip this deserialization
  }
  const deserializeFunctionName = `${normalizeModelName(
    context,
    type,
    NameType.Operation
  )}Deserializer`;
  if (nameOnly) {
    return resolveReference(refkey(type, "deserializer"));
  }
  const deserializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: deserializeFunctionName,
    isExported: true,
    parameters: [
      {
        name: "item",
        type: "any"
      }
    ],
    returnType: resolveReference(refkey(type, "polymorphicType")),
    statements: []
  };
  if (!type.discriminatorProperty) {
    return;
  }
  const statements: string[] = [];

  const subTypes = type.discriminatedSubtypes;
  if (!subTypes) {
    return;
  }

  const cases: string[] = [];
  Object.keys(subTypes).forEach((discriminatedValue) => {
    const subType = subTypes[discriminatedValue];
    if (
      !subType?.usage ||
      (subType?.usage !== undefined &&
        (subType.usage & UsageFlags.Output) !== UsageFlags.Output)
    ) {
      return;
    }
    const union = subType?.discriminatedSubtypes ? "_Union" : "";
    if (!subType || !subType?.name) {
      reportDiagnostic(context.program, {
        code: "anonymous-type-deserialization",
        target: subType?.__raw || NoTarget
      });
      return; // Skip this subtype
    }

    const rawSubTypeName = `${subType.name}${union}`;
    const subTypeName = `${normalizeName(rawSubTypeName, NameType.Interface, true)}`;
    const subtypeDeserializerName = normalizeName(
      `${subTypeName}Deserializer`,
      NameType.Operation,
      true
    );

    cases.push(`
        case "${discriminatedValue}":
          return ${subtypeDeserializerName}(item as ${subTypeName});
      `);
  });

  statements.push(`
      switch (item.${normalizeName(type.discriminatorProperty.name, NameType.Property)}) {
       ${cases.join("\n")}
        default:
          return item;
      }
    `);
  deserializerFunction.statements = statements.join("\n");
  return deserializerFunction;
}

function buildDiscriminatedUnionDeserializer(
  context: SdkContext,
  type: SdkModelType,
  nameOnly: boolean
): string;
function buildDiscriminatedUnionDeserializer(
  context: SdkContext,
  type: SdkModelType
): FunctionDeclarationStructure | undefined;
function buildDiscriminatedUnionDeserializer(
  context: SdkContext,
  type: SdkModelType,
  nameOnly = false
): FunctionDeclarationStructure | undefined | string {
  if (!type.name) {
    reportDiagnostic(context.program, {
      code: "anonymous-type-deserialization",
      target: type.__raw || NoTarget
    });
    return undefined; // Return undefined to skip this deserialization
  }
  const cases: string[] = [];
  const output: string[] = [];
  const deserializeFunctionName = `${normalizeModelName(
    context,
    type,
    NameType.Operation
  )}Deserializer`;
  if (nameOnly) {
    return resolveReference(refkey(type, "deserializer"));
  }
  // Get the base deserializer name and ensure reference tracking
  const baseDeserializerName = buildModelDeserializer(context, type, false, true) as string;
  const directSubtypes = getDirectSubtypes(type);
  for (const subType of directSubtypes) {
    if (
      !subType.usage ||
      (subType.usage !== undefined &&
        (subType.usage & UsageFlags.Output) !== UsageFlags.Output)
    ) {
      continue;
    }
    // get all discriminated values that is linked by this discriminator property
    const discriminatedValues = getAllDiscriminatedValues(
      subType,
      type.discriminatorProperty
    );
    const union = subType.discriminatedSubtypes ? "Union" : "";
    const subTypeName = normalizeModelName(
      context,
      subType,
      NameType.Interface,
      !union
    );
    // Get the deserializer name and ensure reference tracking
    const subtypeDeserializerName = buildModelDeserializer(context, subType, false, true) as string;

    const caseLabels = discriminatedValues.map((value) => `case "${value}":`);
    cases.push(`
      ${caseLabels.join("\n")}
        return ${subtypeDeserializerName}(item as ${subTypeName});
    `);
  }
  output.push(`
    switch (item.${type.discriminatorProperty ? normalizeName(type.discriminatorProperty.name, NameType.Property) : "unknown"}) {
     ${cases.join("\n")}
      default:
        return ${baseDeserializerName}(item);
    }
  `);

  const deserializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: deserializeFunctionName,
    isExported: true,
    parameters: [
      {
        name: "item",
        type: "any"
      }
    ],
    returnType: resolveReference(refkey(type, "polymorphicType")),
    statements: output.join("\n")
  };
  return deserializerFunction;
}

function buildUnionDeserializer(
  context: SdkContext,
  type: SdkUnionType,
  nameOnly: boolean
): string;
function buildUnionDeserializer(
  context: SdkContext,
  type: SdkUnionType
): FunctionDeclarationStructure;
function buildUnionDeserializer(
  context: SdkContext,
  type: SdkUnionType,
  nameOnly = false
): FunctionDeclarationStructure | string | undefined {
  if (!type.name) {
    reportDiagnostic(context.program, {
      code: "anonymous-type-deserialization",
      target: type.__raw || NoTarget
    });
    return ""; // Return empty string to continue processing
  }
  const deserializerFunctionName = `${normalizeModelName(
    context,
    type,
    NameType.Operation
  )}Deserializer`;
  if (nameOnly) {
    return resolveReference(refkey(type, "deserializer"));
  }
  const deserializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: deserializerFunctionName,
    isExported: true,
    parameters: [
      {
        name: "item",
        type: "any"
      }
    ],
    returnType: resolveReference(refkey(type)),
    statements: ["return item;"]
  };
  return deserializerFunction;
}

function buildModelTypeDeserializer(
  context: SdkContext,
  type: SdkModelType,
  options: ModelSerializeOptions = {
    nameOnly: false,
    skipDiscriminatedUnionSuffix: false
  }
): FunctionDeclarationStructure | string | undefined {
  if (!type.name) {
    reportDiagnostic(context.program, {
      code: "anonymous-type-deserialization",
      target: type.__raw || NoTarget
    });
    return ""; // Return empty string to continue processing
  }
  const deserializerFunctionName = `${normalizeModelName(
    context,
    type,
    NameType.Operation,
    options.skipDiscriminatedUnionSuffix
  )}Deserializer`;
  if (options.nameOnly) {
    return resolveReference(refkey(type, "deserializer"));
  }
  const deserializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: deserializerFunctionName,
    isExported: true,
    parameters: [
      {
        name: "item",
        type: "any"
      }
    ],
    returnType: resolveReference(refkey(type)),
    statements: ["return item;"]
  };
  const nullabilityPrefix = "";

  const additionalPropertiesSpread =
    getAdditionalPropertiesStatement(context, type) ?? "";

  const propertiesStr = getResponseMapping(context, type, "item");
  const propertiesDeserialization = propertiesStr.filter((p) => p.trim());

  const output = [];

  // don't emit a serializer if there is nothing to serialize
  if (propertiesDeserialization.length || additionalPropertiesSpread) {
    const fnBody = `{
           ${additionalPropertiesSpread}
           ${nullabilityPrefix} ${propertiesDeserialization.join(",\n")}
        }`;
    output.push(`
        return ${fnBody}
      `);
  } else {
    output.push(`
        return item;
      `);
  }
  deserializerFunction.statements = output;
  return deserializerFunction;
}

function getAdditionalPropertiesStatement(
  context: SdkContext,
  type: SdkModelType
): string | undefined {
  const additionalPropertyType = getAdditionalPropertiesType(type);
  if (!additionalPropertyType) {
    return undefined;
  }
  const allParents = getAllAncestors(type);
  const properties = getAllProperties(context, type, allParents);
  const excludeProperties = properties
    .filter((p) => !!p.name)
    .map((p) => `"${p.name}"`);
  const params = ["item"];
  params.push(`[${excludeProperties.join(",")}]`);
  const deserializerFunction = buildModelDeserializer(
    context,
    additionalPropertyType,
    false,
    true
  );
  if (typeof deserializerFunction === "string") {
    params.push(deserializerFunction);
  }
  return context.rlcOptions?.compatibilityMode === true
    ? "...item,"
    : `${getAdditionalPropertiesName(context, type)}: ${resolveReference(SerializationHelpers.serializeRecord)}(${params.join(",")}),`;
}

function buildDictTypeDeserializer(
  context: SdkContext,
  type: SdkDictionaryType,
  nameOnly: boolean
): string;
function buildDictTypeDeserializer(
  context: SdkContext,
  type: SdkDictionaryType
): FunctionDeclarationStructure | undefined;
function buildDictTypeDeserializer(
  context: SdkContext,
  type: SdkDictionaryType,
  nameOnly = false
): FunctionDeclarationStructure | undefined | string {
  const valueDeserializer = buildModelDeserializer(
    context,
    type.valueType,
    false,
    true
  );
  if (!valueDeserializer) {
    return undefined;
  }
  if (!isSupportedSerializeType(type.valueType)) {
    return undefined;
  }

  if (typeof valueDeserializer !== "string") {
    return undefined;
  }

  const deserializerFunctionName = `${normalizeModelName(context, type, NameType.Operation, false, true)}Deserializer`;
  if (nameOnly) {
    return resolveReference(refkey(type, "deserializer"));
  }
  const deserializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: deserializerFunctionName,
    isExported: true,
    parameters: [
      {
        name: "item",
        type: "Record<string, any>"
      }
    ],
    returnType: `Record<string, ${resolveReference(refkey(type.valueType)) ?? "any"}>`,
    statements: [
      `
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]? item[key]: ${valueDeserializer}(item[key])
  });
  return result;
      `
    ]
  };
  return deserializerFunction;
}

function buildArrayTypeDeserializer(
  context: SdkContext,
  type: SdkArrayType,
  nameOnly: boolean
): string;
function buildArrayTypeDeserializer(
  context: SdkContext,
  type: SdkArrayType
): FunctionDeclarationStructure | undefined;
function buildArrayTypeDeserializer(
  context: SdkContext,
  type: SdkArrayType,
  nameOnly = false
): FunctionDeclarationStructure | undefined | string {
  const valueDeserializer = buildModelDeserializer(
    context,
    type.valueType,
    false,
    true
  );
  if (!valueDeserializer) {
    return undefined;
  }
  if (!isSupportedSerializeType(type.valueType)) {
    return undefined;
  }

  if (typeof valueDeserializer !== "string") {
    return undefined;
  }
  const deserializerFunctionName = `${normalizeModelName(context, type, NameType.Operation, false, true)}Deserializer`;
  if (nameOnly) {
    return resolveReference(refkey(type, "deserializer"));
  }
  const serializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: deserializerFunctionName,
    isExported: true,
    parameters: [
      {
        name: "result",
        type: `Array<${normalizeModelName(context, type.valueType as any) ?? "any"}>`
      }
    ],
    returnType: "any[]",
    statements: [
      `
  return result.map((item) => {
    return ${valueDeserializer}(item)
  });
      `
    ]
  };
  return serializerFunction;
}
