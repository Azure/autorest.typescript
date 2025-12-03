import { FunctionDeclarationStructure, StructureKind } from "ts-morph";
import {
  SdkArrayType,
  SdkDictionaryType,
  SdkModelPropertyType,
  SdkModelType,
  SdkType,
  SdkUnionType,
  UsageFlags
} from "@azure-tools/typespec-client-generator-core";
import { SdkContext } from "../../utils/interfaces.js";
import {
  getAllAncestors,
  getAllProperties,
  getPropertyFullName,
  getRequestModelMapping,
  getSerializationExpression
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
import {
  MultipartHelpers,
  SerializationHelpers
} from "../static-helpers-metadata.js";
import { resolveReference } from "../../framework/reference.js";
import { isOrExtendsHttpFile } from "@typespec/http";
import { refkey } from "../../framework/refkey.js";
import {
  getAdditionalPropertiesType,
  getDirectSubtypes
} from "../helpers/typeHelpers.js";
import { reportDiagnostic } from "../../lib.js";
import { NoTarget } from "@typespec/compiler";
import { useContext } from "../../contextManager.js";

export function buildPropertySerializer(
  context: SdkContext,
  property: SdkModelPropertyType,
  options: ModelSerializeOptions = {
    nameOnly: false,
    skipDiscriminatedUnionSuffix: false
  }
) {
  const propertyContext =
    useContext("sdkTypes").flattenProperties.get(property);
  // only build de-serializer for flatten property
  if (property.flatten !== true || !propertyContext) {
    return undefined;
  }
  const predefinedName = `_${normalizeName(
    `${propertyContext.baseModel.name}_${property.name}`,
    NameType.Method,
    true
  )}Serializer`;
  return buildModelSerializer(context, property.type, {
    ...options,
    flatten: {
      baseModel: propertyContext.baseModel,
      property
    },
    overrides: {
      allOptional: property.optional,
      propertyRenames: propertyContext.conflictMap
    },
    predefinedName
  });
}

export function buildModelSerializer(
  context: SdkContext,
  type: SdkType,
  options: ModelSerializeOptions = {
    nameOnly: false,
    skipDiscriminatedUnionSuffix: false
  }
): FunctionDeclarationStructure | undefined | string {
  if (!isSupportedSerializeType(type)) {
    return undefined;
  }
  const { nameOnly } = options;
  if (type.kind === "model" || type.kind === "union" || type.kind === "enum") {
    if (
      !type.usage ||
      (type.usage !== undefined &&
        (type.usage & UsageFlags.Input) !== UsageFlags.Input)
    ) {
      return undefined;
    }
    if (!type.name) {
      // TODO: https://github.com/Azure/typespec-azure/issues/1713 and https://github.com/microsoft/typespec/issues/4815
      // throw new Error(`NYI Serialization of anonymous types`);
      return undefined;
    }
    if (
      isAzureCoreErrorType(context.program, type.__raw!) ||
      isOrExtendsHttpFile(context.program, type.__raw!)
    ) {
      return undefined;
    }
  }

  if (
    !isDiscriminatedUnion(type) &&
    type.kind === "model" &&
    type.discriminatorProperty
  ) {
    return buildPolymorphicSerializer(context, type, nameOnly);
  }

  if (isDiscriminatedUnion(type) && !options.skipDiscriminatedUnionSuffix) {
    return buildDiscriminatedUnionSerializer(context, type, nameOnly);
  }

  switch (type.kind) {
    case "model":
      return buildModelTypeSerializer(context, type, options);
    case "union": // for non-discriminated union, we just return whatever we get
      return buildUnionSerializer(context, type, nameOnly);
    case "dict":
      return buildDictTypeSerializer(context, type, nameOnly);
    case "array":
      return buildArrayTypeSerializer(context, type, nameOnly);
    default:
      return undefined;
  }
}

function buildPolymorphicSerializer(
  context: SdkContext,
  type: SdkModelType,
  nameOnly: boolean
): string;
function buildPolymorphicSerializer(
  context: SdkContext,
  type: SdkModelType
): FunctionDeclarationStructure | undefined;
function buildPolymorphicSerializer(
  context: SdkContext,
  type: SdkModelType,
  nameOnly = false
): FunctionDeclarationStructure | undefined | string {
  if (!type.name) {
    reportDiagnostic(context.program, {
      code: "anonymous-type-serialization",
      target: type.__raw || NoTarget
    });
    return undefined; // Return undefined to skip this serialization
  }
  const serializeFunctionName = `${normalizeModelName(
    context,
    type,
    NameType.Operation
  )}Serializer`;
  if (nameOnly) {
    return resolveReference(refkey(type, "serializer"));
  }
  const serializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: serializeFunctionName,
    isExported: true,
    parameters: [
      {
        name: "item",
        type: resolveReference(refkey(type, "polymorphicType"))
      }
    ],
    returnType: "any",
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
        (subType.usage & UsageFlags.Input) !== UsageFlags.Input)
    ) {
      return;
    }
    const union = subType?.discriminatedSubtypes ? "_Union" : "";
    if (!subType || !subType?.name) {
      reportDiagnostic(context.program, {
        code: "anonymous-type-serialization",
        target: subType?.__raw || NoTarget
      });
      return; // Skip this subtype
    }
    const rawSubTypeName = `${subType.name}${union}`;
    const subTypeName = `${normalizeName(rawSubTypeName, NameType.Interface, true)}`;
    const subtypeSerializerName = normalizeName(
      `${rawSubTypeName}_Serializer`,
      NameType.Method,
      true
    );

    cases.push(`
        case "${discriminatedValue}":
          return ${subtypeSerializerName}(item as ${subTypeName});
      `);
  });

  statements.push(`
      switch (item.${normalizeName(type.discriminatorProperty.name, NameType.Property)}) {
       ${cases.join("\n")}
        default:
          return item;
      }
    `);
  serializerFunction.statements = statements.join("\n");
  return serializerFunction;
}

function buildDiscriminatedUnionSerializer(
  context: SdkContext,
  type: SdkModelType,
  nameOnly: boolean
): string;
function buildDiscriminatedUnionSerializer(
  context: SdkContext,
  type: SdkModelType
): FunctionDeclarationStructure | undefined;
function buildDiscriminatedUnionSerializer(
  context: SdkContext,
  type: SdkModelType,
  nameOnly = false
): FunctionDeclarationStructure | undefined | string {
  if (!type.name) {
    reportDiagnostic(context.program, {
      code: "anonymous-type-serialization",
      target: type.__raw || NoTarget
    });
    return undefined; // Return undefined to skip this serialization
  }
  const cases: string[] = [];
  const output: string[] = [];
  const serializeFunctionName = `${normalizeModelName(
    context,
    type,
    NameType.Operation
  )}Serializer`;
  if (nameOnly) {
    return resolveReference(refkey(type, "serializer"));
  }
  const baseSerializerName = `${normalizeModelName(
    context,
    type,
    NameType.Operation,
    true
  )}Serializer`;
  const directSubtypes = getDirectSubtypes(type);
  for (const subType of directSubtypes) {
    if (
      !subType.usage ||
      (subType.usage !== undefined &&
        (subType.usage & UsageFlags.Input) !== UsageFlags.Input)
    ) {
      continue;
    }
    // get all discriminated values that is linked by this discriminator property
    const discriminatedValues = getAllDiscriminatedValues(
      subType,
      type.discriminatorProperty
    );
    const union = subType.discriminatedSubtypes ? "Union" : "";
    const subTypeName = `${normalizeName(subType.name, NameType.Interface, true)}${union}`;
    const subtypeSerializerName = normalizeName(
      `${subTypeName}Serializer`,
      NameType.Method,
      true
    );

    const caseLabels = discriminatedValues.map((value) => `case "${value}":`);
    cases.push(`
      ${caseLabels.join("\n")}
        return ${subtypeSerializerName}(item as ${subTypeName});
    `);
  }
  output.push(`
    switch (item.${type.discriminatorProperty ? normalizeName(type.discriminatorProperty.name, NameType.Property) : "unknown"}) {
     ${cases.join("\n")}
      default:
        return ${baseSerializerName}(item);
    }
  `);

  const serializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: serializeFunctionName,
    isExported: true,
    parameters: [
      {
        name: "item",
        type: resolveReference(refkey(type, "polymorphicType"))
      }
    ],
    returnType: "any",
    statements: output.join("\n")
  };
  return serializerFunction;
}

function buildUnionSerializer(
  context: SdkContext,
  type: SdkUnionType,
  nameOnly: boolean
): string;
function buildUnionSerializer(
  context: SdkContext,
  type: SdkUnionType
): FunctionDeclarationStructure;
function buildUnionSerializer(
  context: SdkContext,
  type: SdkUnionType,
  nameOnly = false
): FunctionDeclarationStructure | string {
  if (!type.name) {
    reportDiagnostic(context.program, {
      code: "anonymous-type-serialization",
      target: type.__raw || NoTarget
    });
    return ""; // Return empty string to continue processing
  }
  const serializerFunctionName = `${normalizeModelName(
    context,
    type,
    NameType.Operation
  )}Serializer`;
  if (nameOnly) {
    return resolveReference(refkey(type, "serializer"));
  }
  const serializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: serializerFunctionName,
    isExported: true,
    parameters: [
      {
        name: "item",
        type: resolveReference(refkey(type))
      }
    ],
    returnType: "any",
    statements: ["return item;"]
  };
  return serializerFunction;
}

function buildModelTypeSerializer(
  context: SdkContext,
  type: SdkModelType,
  options: ModelSerializeOptions = {
    nameOnly: false,
    skipDiscriminatedUnionSuffix: false
  }
): FunctionDeclarationStructure | string {
  if (!type.name) {
    reportDiagnostic(context.program, {
      code: "anonymous-type-deserialization",
      target: type.__raw || NoTarget
    });
    return ""; // Return empty string to continue processing
  }
  const serializerFunctionName =
    options.predefinedName ??
    `${normalizeModelName(
      context,
      type,
      NameType.Operation,
      options.skipDiscriminatedUnionSuffix
    )}Serializer`;
  if (options.nameOnly) {
    return options.flatten
      ? resolveReference(refkey(options.flatten.property, "serializer"))
      : resolveReference(refkey(type, "serializer"));
  }
  const serializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: serializerFunctionName,
    isExported: true,
    parameters: [
      {
        name: "item",
        type: options.flatten
          ? resolveReference(refkey(options.flatten.baseModel))
          : resolveReference(refkey(type))
      }
    ],
    returnType: "any",
    statements: ["return item;"]
  };

  if (
    (type.usage & UsageFlags.Input) === UsageFlags.Input &&
    (type.usage & UsageFlags.MultipartFormData) === UsageFlags.MultipartFormData
  ) {
    // For MFD models, serialize into an array of parts
    // TODO: cleaner abstraction, quite a bit of duplication with the non-MFD stuff here
    const parts: string[] = [];

    const properties = getAllProperties(context, type, getAllAncestors(type));
    for (const property of properties) {
      if (property.kind !== "property") {
        continue;
      }
      const expr = getSerializationExpression(context, property, "item");

      let partDefinition: string;
      // eslint-disable-next-line
      const multipart = property.serializationOptions.multipart;
      if (multipart?.isFilePart) {
        const createFilePartDescriptorDefinition = resolveReference(
          MultipartHelpers.createFilePartDescriptor
        );
        // eslint-disable-next-line
        const itemPath = multipart.isMulti
          ? "x"
          : getPropertyFullName(context, property, "item");
        /* eslint-disable */
        partDefinition = `${createFilePartDescriptorDefinition}("${multipart.name}", ${itemPath}, )`;

        // If the TypeSpec doesn't specify a default content type, TCGC will infer a default of "*/*".
        // In this case, we actually want the content type to be left unset so that Core will take care of
        // setting the content type correctly.
        // eslint-disable
        const contentType =
          multipart.defaultContentTypes?.[0] === "*/*"
            ? undefined
            : multipart.defaultContentTypes?.[0];

        if (multipart.isMulti) {
          partDefinition = `...(item["${multipart.name}"].map((x: unknown) => ${createFilePartDescriptorDefinition}("${multipart.name}", x${contentType ? `,"${contentType}"` : ""})))`;
        } else {
          partDefinition = `${createFilePartDescriptorDefinition}("${multipart.name}", item["${multipart.name}"]${contentType ? `, "${contentType}"` : ""})`;
        }
      } else if (multipart?.isMulti) {
        partDefinition = `...((${expr}).map((x: unknown) => ({ name: "${multipart?.name}", body: x })))`;
      } else {
        partDefinition = `{ name: "${multipart?.name}", body: (${expr}) }`;
      }
      /* eslint-disable */
      if (property.optional) {
        parts.push(
          `...(${getPropertyFullName(context, property, "item")} === undefined ? [] : [${partDefinition}])`
        );
      } else {
        parts.push(partDefinition);
      }

      // TODO: How to handle additionalProperties for MFD?
    }

    serializerFunction.statements = [`return [${parts.join(",")}]`];
  } else {
    const additionalPropertiesSpread = getAdditionalPropertiesStatement(
      context,
      type
    );

    const propertiesStr = getRequestModelMapping(
      context,
      type,
      "item",
      options.overrides
    );

    if (additionalPropertiesSpread) {
      propertiesStr.unshift(additionalPropertiesSpread);
    }
    const serializeContent = `{${propertiesStr.join(",")}}`;

    const output = [];

    // don't emit a serializer if there is nothing to serialize
    if (propertiesStr.length) {
      output.push(`
        return ${serializeContent}
      `);
    } else {
      output.push(`
        return item;
      `);
    }
    serializerFunction.statements = output;
  }
  return serializerFunction;
}

function getAdditionalPropertiesStatement(
  context: SdkContext,
  type: SdkModelType
): string | undefined {
  const additionalPropertyType = getAdditionalPropertiesType(type);
  if (!additionalPropertyType) {
    return undefined;
  }
  const deserializerFunction = buildModelSerializer(
    context,
    additionalPropertyType,
    {
      nameOnly: true,
      skipDiscriminatedUnionSuffix: false
    }
  );
  const params = [`item.${getAdditionalPropertiesName(context, type)} ?? {}`];
  if (typeof deserializerFunction === "string") {
    params.push("undefined");
    params.push(deserializerFunction);
  }
  return context.rlcOptions?.compatibilityMode === true
    ? "...item"
    : `...${resolveReference(SerializationHelpers.serializeRecord)}(${params.join(",")})`;
}

function buildDictTypeSerializer(
  context: SdkContext,
  type: SdkDictionaryType,
  nameOnly: boolean
): string;
function buildDictTypeSerializer(
  context: SdkContext,
  type: SdkDictionaryType
): FunctionDeclarationStructure | undefined;
function buildDictTypeSerializer(
  context: SdkContext,
  type: SdkDictionaryType,
  nameOnly = false
): FunctionDeclarationStructure | undefined | string {
  const valueSerializer = buildModelSerializer(context, type.valueType, {
    nameOnly: true,
    skipDiscriminatedUnionSuffix: false
  });
  if (!valueSerializer) {
    return undefined;
  }
  if (!isSupportedSerializeType(type.valueType)) {
    return undefined;
  }

  if (typeof valueSerializer !== "string") {
    return undefined;
  }
  const serializerFunctionName = `${normalizeModelName(context, type, NameType.Operation, false, true)}Serializer`;
  if (nameOnly) {
    return resolveReference(refkey(type, "serializer"));
  }
  const serializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: serializerFunctionName,
    isExported: true,
    parameters: [
      {
        name: "item",
        type: `Record<string, ${resolveReference(type.valueType) ?? "any"}>`
      }
    ],
    returnType: "Record<string, any>",
    statements: [
      `
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]? item[key]: ${valueSerializer}(item[key])
  });
  return result;
      `
    ]
  };
  return serializerFunction;
}

function buildArrayTypeSerializer(
  context: SdkContext,
  type: SdkArrayType,
  nameOnly: boolean
): string;
function buildArrayTypeSerializer(
  context: SdkContext,
  type: SdkArrayType
): FunctionDeclarationStructure | undefined;
function buildArrayTypeSerializer(
  context: SdkContext,
  type: SdkArrayType,
  nameOnly = false
): FunctionDeclarationStructure | undefined | string {
  const valueSerializer = buildModelSerializer(context, type.valueType, {
    nameOnly: true,
    skipDiscriminatedUnionSuffix: false
  });
  if (!valueSerializer) {
    return undefined;
  }
  if (!isSupportedSerializeType(type.valueType)) {
    return undefined;
  }

  if (typeof valueSerializer !== "string") {
    return undefined;
  }
  const serializerFunctionName = `${normalizeModelName(context, type, NameType.Operation, false, true)}Serializer`;
  if (nameOnly) {
    return resolveReference(refkey(type, "serializer"));
  }
  const serializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: serializerFunctionName,
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
    return ${valueSerializer}(item)
  });
      `
    ]
  };
  return serializerFunction;
}
