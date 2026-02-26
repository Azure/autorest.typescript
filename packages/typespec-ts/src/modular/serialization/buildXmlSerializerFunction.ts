// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FunctionDeclarationStructure, StructureKind } from "ts-morph";
import {
  SdkModelPropertyType,
  SdkModelType,
  SdkPackage,
  SdkType,
  UsageFlags
} from "@azure-tools/typespec-client-generator-core";
import { SdkContext } from "../../utils/interfaces.js";
import {
  getAllAncestors,
  getAllProperties
} from "../helpers/operationHelpers.js";
import {
  normalizeModelName,
  getAdditionalPropertiesName
} from "../emitModels.js";
import { NameType } from "@azure-tools/rlc-common";
import { isAzureCoreErrorType } from "../../utils/modelUtils.js";
import {
  isSupportedSerializeType,
  ModelSerializeOptions
} from "./serializeUtils.js";
import { XmlHelpers } from "../static-helpers-metadata.js";
import { resolveReference } from "../../framework/reference.js";
import { refkey } from "../../framework/refkey.js";
import { reportDiagnostic } from "../../lib.js";
import { NoTarget } from "@typespec/compiler";
import { isMetadata } from "@typespec/http";
import { normalizeModelPropertyName } from "../type-expressions/get-type-expression.js";
import { isReadOnly } from "@azure-tools/typespec-client-generator-core";
import { useDependencies } from "../../framework/hooks/useDependencies.js";
import { getAdditionalPropertiesType } from "../helpers/typeHelpers.js";

/**
 * Checks if a model type has XML serialization options defined
 */
export function hasXmlSerialization(type: SdkType): boolean {
  if (type.kind !== "model") {
    return false;
  }
  // Check if the model itself has XML options
  if (type.serializationOptions?.xml) {
    return true;
  }
  // Check if any property has XML options
  return type.properties?.some((p) => p.serializationOptions?.xml) ?? false;
}

/**
 * Checks if any model in the SDK package uses XML serialization
 */
export function packageUsesXmlSerialization(
  sdkPackage: SdkPackage<any>
): boolean {
  for (const model of sdkPackage.models) {
    if (hasXmlSerialization(model)) {
      return true;
    }
  }
  return false;
}

/**
 * Gets the XML element name for a model type
 */
export function getXmlRootName(type: SdkModelType): string {
  return type.serializationOptions?.xml?.name ?? type.name;
}

/**
 * Gets the XML namespace for a model type
 */
export function getXmlRootNs(
  type: SdkModelType
): { namespace: string; prefix: string } | undefined {
  return type.serializationOptions?.xml?.ns;
}

/**
 * Builds an XML serializer function for a model type
 */
export function buildXmlModelSerializer(
  context: SdkContext,
  type: SdkModelType,
  options: ModelSerializeOptions = {
    nameOnly: false,
    skipDiscriminatedUnionSuffix: false
  }
): FunctionDeclarationStructure | string | undefined {
  if (!isSupportedSerializeType(type)) {
    return undefined;
  }

  if (!type.name) {
    reportDiagnostic(context.program, {
      code: "anonymous-type-serialization",
      target: type.__raw || NoTarget
    });
    return undefined;
  }

  if (
    !type.usage ||
    (type.usage !== undefined &&
      (type.usage & UsageFlags.Input) !== UsageFlags.Input)
  ) {
    return undefined;
  }

  if (isAzureCoreErrorType(context.program, type.__raw!)) {
    return undefined;
  }

  const serializerFunctionName =
    options.predefinedName ??
    `${normalizeModelName(
      context,
      type,
      NameType.Operation,
      options.skipDiscriminatedUnionSuffix
    )}XmlSerializer`;

  if (options.nameOnly) {
    return resolveReference(refkey(type, "xmlSerializer"));
  }

  const serializeToXmlRef = resolveReference(XmlHelpers.serializeToXml);
  const xmlPropertyMetadataRef = resolveReference(
    XmlHelpers.XmlPropertyMetadata
  );

  const properties = getAllProperties(context, type, getAllAncestors(type));
  const xmlRootName = getXmlRootName(type);
  const xmlRootNs = getXmlRootNs(type);

  // Build property metadata array
  const propertyMetadata = buildPropertyMetadataArray(context, properties);

  const statements: string[] = [];

  // Generate the properties metadata constant
  statements.push(
    `const properties: ${xmlPropertyMetadataRef}[] = [${propertyMetadata}];`
  );

  // Generate additionalProperties config if applicable
  const additionalPropsConfigExpr = buildAdditionalPropertiesConfigExpr(
    context,
    type,
    properties
  );

  // Generate the serialization call
  if (xmlRootNs) {
    if (additionalPropsConfigExpr) {
      statements.push(
        `return ${serializeToXmlRef}(item, properties, "${xmlRootName}", { namespace: "${xmlRootNs.namespace}", prefix: "${xmlRootNs.prefix}" }, undefined, ${additionalPropsConfigExpr});`
      );
    } else {
      statements.push(
        `return ${serializeToXmlRef}(item, properties, "${xmlRootName}", { namespace: "${xmlRootNs.namespace}", prefix: "${xmlRootNs.prefix}" });`
      );
    }
  } else {
    if (additionalPropsConfigExpr) {
      statements.push(
        `return ${serializeToXmlRef}(item, properties, "${xmlRootName}", undefined, undefined, ${additionalPropsConfigExpr});`
      );
    } else {
      statements.push(
        `return ${serializeToXmlRef}(item, properties, "${xmlRootName}");`
      );
    }
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
    returnType: "string",
    statements
  };

  return serializerFunction;
}

/**
 * Builds an XML object serializer function for a model type.
 * This serializer returns a plain object with XML property names (not an XML string).
 * Used for nested objects within XML serialization.
 */
export function buildXmlObjectModelSerializer(
  context: SdkContext,
  type: SdkModelType,
  options: ModelSerializeOptions = {
    nameOnly: false,
    skipDiscriminatedUnionSuffix: false
  }
): FunctionDeclarationStructure | string | undefined {
  if (!isSupportedSerializeType(type)) {
    return undefined;
  }

  if (!type.name) {
    reportDiagnostic(context.program, {
      code: "anonymous-type-serialization",
      target: type.__raw || NoTarget
    });
    return undefined;
  }

  if (
    !type.usage ||
    (type.usage !== undefined &&
      (type.usage & UsageFlags.Input) !== UsageFlags.Input)
  ) {
    return undefined;
  }

  if (isAzureCoreErrorType(context.program, type.__raw!)) {
    return undefined;
  }

  const serializerFunctionName =
    options.predefinedName ??
    `${normalizeModelName(
      context,
      type,
      NameType.Operation,
      options.skipDiscriminatedUnionSuffix
    )}XmlObjectSerializer`;

  if (options.nameOnly) {
    return resolveReference(refkey(type, "xmlObjectSerializer"));
  }

  const properties = getAllProperties(context, type, getAllAncestors(type));

  // Build the object literal with XML property names
  const propertyAssignments = buildXmlObjectPropertyAssignments(
    context,
    properties
  );

  const statements: string[] = [];

  // Check if the model is a dictionary type (has additionalProperties)
  const additionalPropertyType = getAdditionalPropertiesType(type);

  if (additionalPropertyType) {
    const apName = getAdditionalPropertiesName(context, type);
    if (propertyAssignments.length === 0) {
      // Pure dictionary type - spread additionalProperties entries as XML elements
      statements.push(
        `return { ...item["${apName}"] } as ${resolveReference(XmlHelpers.XmlSerializedObject)};`
      );
    } else {
      // Model with both defined properties and additional properties
      statements.push(`return {${propertyAssignments}, ...item["${apName}"]};`);
    }
  } else {
    statements.push(`return {${propertyAssignments}};`);
  }

  const xmlSerializedObjectRef = resolveReference(
    XmlHelpers.XmlSerializedObject
  );

  // Use _item when there are no properties and not a dict type to avoid unused parameter lint error
  const paramName =
    propertyAssignments.length === 0 && !additionalPropertyType
      ? "_item"
      : "item";

  const serializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: serializerFunctionName,
    isExported: true,
    parameters: [
      {
        name: paramName,
        type: resolveReference(refkey(type))
      }
    ],
    returnType: xmlSerializedObjectRef,
    statements
  };

  return serializerFunction;
}

/**
 * Builds the property assignments for XML object serializer.
 * Maps client property names to XML property names in the output object.
 */
function buildXmlObjectPropertyAssignments(
  context: SdkContext,
  properties: SdkModelPropertyType[]
): string {
  const assignments: string[] = [];

  for (const property of properties) {
    if (property.kind !== "property") {
      continue;
    }
    if (isReadOnly(property)) {
      continue;
    }
    if (isMetadata(context.program, property.__raw!)) {
      continue;
    }

    const xmlOptions = property.serializationOptions?.xml;
    const propertyName = normalizeModelPropertyName(context, property);
    const cleanPropertyName = propertyName.replace(/^"|"$/g, "");

    // Use XML name if available, fall back to serializedName, then JSON name, then property name
    const xmlName = xmlOptions?.name ?? property.name;

    // Handle nested objects and arrays
    const nestedSerializer = getNestedXmlSerializer(context, property.type);

    let valueExpr: string;
    if (nestedSerializer && property.type.kind === "model") {
      // Nested object - use XML object serializer
      valueExpr = `item["${cleanPropertyName}"] !== undefined ? ${nestedSerializer}(item["${cleanPropertyName}"]) : undefined`;
    } else if (
      nestedSerializer &&
      property.type.kind === "array" &&
      property.type.valueType.kind === "model"
    ) {
      // Array of objects - map each item through XML object serializer
      const mappedExpr = `item["${cleanPropertyName}"]?.map((i: any) => ${nestedSerializer}(i))`;
      if (xmlOptions?.unwrapped) {
        // Unwrapped: items are direct siblings under the item element name
        const itemKey = xmlOptions?.itemsName ?? xmlName;
        assignments.push(`"${itemKey}": ${mappedExpr}`);
        continue;
      } else if (xmlOptions?.itemsName) {
        // Wrapped: items nested under wrapper element with item element name
        valueExpr = `{ "${xmlOptions.itemsName}": ${mappedExpr} }`;
      } else {
        valueExpr = mappedExpr;
      }
    } else if (property.type.kind === "array") {
      // Array of primitives - handle itemsName wrapping
      const primitiveExpr = buildXmlValueSerializationExpr(
        context,
        property.type,
        `item["${cleanPropertyName}"]`
      );
      if (xmlOptions?.unwrapped) {
        const itemKey = xmlOptions?.itemsName ?? xmlName;
        assignments.push(`"${itemKey}": ${primitiveExpr}`);
        continue;
      } else if (xmlOptions?.itemsName) {
        valueExpr = `{ "${xmlOptions.itemsName}": ${primitiveExpr} }`;
      } else {
        valueExpr = primitiveExpr;
      }
    } else {
      // Handle type-specific serialization
      valueExpr = buildXmlValueSerializationExpr(
        context,
        property.type,
        `item["${cleanPropertyName}"]`
      );
    }

    assignments.push(`"${xmlName}": ${valueExpr}`);
  }

  return assignments.join(",\n    ");
}

/**
 * Builds the serialization expression for a value based on its type.
 * Handles bytes (base64), dates, and arrays of these types.
 */
function buildXmlValueSerializationExpr(
  context: SdkContext,
  type: SdkType,
  valueExpr: string
): string {
  const uint8ArrayToStringRef = resolveReference(
    useDependencies().uint8ArrayToString
  );

  switch (type.kind) {
    case "bytes":
      // Convert Uint8Array to base64 string
      return `${valueExpr} !== undefined ? ${uint8ArrayToStringRef}(${valueExpr}, "base64") : undefined`;

    case "utcDateTime": {
      // Convert Date to appropriate string format
      const encoding = (type.encode as string) ?? "rfc3339";
      if (encoding === "unixTimestamp") {
        return `${valueExpr} !== undefined ? ${valueExpr}.getTime() : undefined`;
      } else if (encoding === "rfc7231") {
        return `${valueExpr} !== undefined ? ${valueExpr}.toUTCString() : undefined`;
      }
      // Default rfc3339
      return `${valueExpr} !== undefined ? ${valueExpr}.toISOString() : undefined`;
    }

    case "array": {
      // Handle arrays - need to serialize each element
      const itemExpr = buildXmlValueSerializationExpr(
        context,
        type.valueType,
        "i"
      );
      if (itemExpr !== "i") {
        // If items need transformation, map them
        return `${valueExpr}?.map((i: any) => ${itemExpr})`;
      }
      // No transformation needed
      return valueExpr;
    }

    default:
      // Primitive types - use directly
      return valueExpr;
  }
}

/**
 * Builds the property metadata array for XML serialization
 */
function buildPropertyMetadataArray(
  context: SdkContext,
  properties: SdkModelPropertyType[]
): string {
  const metadataEntries: string[] = [];

  for (const property of properties) {
    if (property.kind !== "property") {
      continue;
    }
    if (isReadOnly(property)) {
      continue;
    }
    if (isMetadata(context.program, property.__raw!)) {
      continue;
    }

    const xmlOptions = property.serializationOptions?.xml;
    const jsonOptions = property.serializationOptions?.json;
    const propertyName = normalizeModelPropertyName(context, property);
    const cleanPropertyName = propertyName.replace(/^"|"$/g, "");

    // Use XML name if available, fall back to JSON name, then property name
    const serializedName =
      xmlOptions?.name ?? jsonOptions?.name ?? property.name;

    const metadataObj: string[] = [
      `propertyName: "${cleanPropertyName}"`,
      `xmlOptions: { name: "${serializedName}"${buildXmlOptionsString(xmlOptions)} }`
    ];

    // Add type information for special handling
    const typeInfo = getPropertyTypeInfo(property.type);
    if (typeInfo.type) {
      metadataObj.push(`type: "${typeInfo.type}"`);
    }
    if (typeInfo.dateEncoding) {
      metadataObj.push(`dateEncoding: "${typeInfo.dateEncoding}"`);
    }
    if (typeInfo.bytesEncoding) {
      metadataObj.push(`bytesEncoding: "${typeInfo.bytesEncoding}"`);
    }
    if (typeInfo.itemType) {
      metadataObj.push(`itemType: "${typeInfo.itemType}"`);
    }

    // Add serializer for complex types
    const nestedSerializer = getNestedXmlSerializer(context, property.type);
    if (nestedSerializer) {
      metadataObj.push(`serializer: ${nestedSerializer}`);
    }

    metadataEntries.push(`{ ${metadataObj.join(", ")} }`);
  }

  return metadataEntries.join(",\n    ");
}

/**
 * Builds the XML options string from XmlSerializationOptions
 */
function buildXmlOptionsString(xmlOptions?: {
  name: string;
  attribute?: boolean;
  ns?: { namespace: string; prefix: string };
  unwrapped?: boolean;
  itemsName?: string;
  itemsNs?: { namespace: string; prefix: string };
}): string {
  if (!xmlOptions) {
    return "";
  }

  const parts: string[] = [];

  if (xmlOptions.attribute) {
    parts.push(`attribute: true`);
  }
  if (xmlOptions.ns) {
    parts.push(
      `ns: { namespace: "${xmlOptions.ns.namespace}", prefix: "${xmlOptions.ns.prefix}" }`
    );
  }
  if (xmlOptions.unwrapped) {
    parts.push(`unwrapped: true`);
  }
  if (xmlOptions.itemsName) {
    parts.push(`itemsName: "${xmlOptions.itemsName}"`);
  }
  if (xmlOptions.itemsNs) {
    parts.push(
      `itemsNs: { namespace: "${xmlOptions.itemsNs.namespace}", prefix: "${xmlOptions.itemsNs.prefix}" }`
    );
  }

  return parts.length > 0 ? `, ${parts.join(", ")}` : "";
}

/**
 * Gets type information for a property for XML serialization
 */
function getPropertyTypeInfo(type: SdkType): {
  type?: "array" | "object" | "primitive" | "date" | "bytes" | "dict";
  primitiveSubtype?: "string" | "number" | "boolean";
  dateEncoding?: "rfc3339" | "rfc7231" | "unixTimestamp";
  bytesEncoding?: "base64" | "base64url";
  itemType?: "primitive" | "date" | "bytes";
} {
  switch (type.kind) {
    case "array": {
      // For arrays, also extract item type info for bytes/date items
      const itemInfo = getPropertyTypeInfo(type.valueType);
      const result: ReturnType<typeof getPropertyTypeInfo> = { type: "array" };
      // Only include item type info for types that need special serialization
      if (
        itemInfo.type === "bytes" ||
        itemInfo.type === "date" ||
        itemInfo.type === "primitive"
      ) {
        result.itemType = itemInfo.type as "primitive" | "date" | "bytes";
      }
      if (itemInfo.dateEncoding) {
        result.dateEncoding = itemInfo.dateEncoding;
      }
      if (itemInfo.bytesEncoding) {
        result.bytesEncoding = itemInfo.bytesEncoding;
      }
      if (itemInfo.primitiveSubtype) {
        result.primitiveSubtype = itemInfo.primitiveSubtype;
      }
      return result;
    }
    case "model":
      return { type: "object" };
    case "dict":
      return { type: "dict" };
    case "utcDateTime":
      return {
        type: "date",
        dateEncoding:
          (type.encode as "rfc3339" | "rfc7231" | "unixTimestamp") ?? "rfc3339"
      };
    case "bytes": {
      const encode = (type as any).encode as string | undefined;
      // Default to base64 if no encoding specified
      const bytesEncoding =
        encode === "base64url" ? "base64url" : ("base64" as const);
      return { type: "bytes", bytesEncoding };
    }
    case "boolean":
      return { type: "primitive", primitiveSubtype: "boolean" };
    case "string":
    case "url":
      return { type: "primitive", primitiveSubtype: "string" };
    case "enum":
    case "enumvalue":
    case "constant":
      // Recurse into the underlying value type (e.g. string enum → string)
      return getPropertyTypeInfo(type.valueType);
    case "union":
      // Inspect variant types; if all share the same subtype use it,
      // otherwise default to string as a safe fallback
      if (type.variantTypes.length > 0) {
        const first = getPropertyTypeInfo(type.variantTypes[0]!);
        const allSame = type.variantTypes.every(
          (v) =>
            getPropertyTypeInfo(v).primitiveSubtype === first.primitiveSubtype
        );
        if (allSame) {
          return first;
        }
      }
      return { type: "primitive", primitiveSubtype: "string" };
    case "nullable":
      // Recurse into the underlying non-null type
      return getPropertyTypeInfo(type.type);
    default:
      // Numeric kinds (int8, int16, int32, int64, uint8, ..., float32, float64,
      // decimal, decimal128, numeric, integer, safeint, float) and any other
      // scalar types default to number subtype.
      return { type: "primitive", primitiveSubtype: "number" };
  }
}

/**
 * Gets the nested XML serializer function reference for complex types.
 * Uses the XML object serializer to properly handle XML property names.
 */
function getNestedXmlSerializer(
  context: SdkContext,
  type: SdkType
): string | undefined {
  if (type.kind === "model") {
    // For nested objects, use the XML object serializer which returns objects
    // with XML property names for proper serialization
    const serializerName = buildXmlObjectModelSerializer(context, type, {
      nameOnly: true,
      skipDiscriminatedUnionSuffix: false
    });
    if (typeof serializerName === "string") {
      return serializerName;
    }
  }
  if (type.kind === "array" && type.valueType.kind === "model") {
    // For arrays, use the XML object serializer for items
    // The XML helper calls this for each item and handles the array mapping
    const itemSerializer = buildXmlObjectModelSerializer(
      context,
      type.valueType,
      {
        nameOnly: true,
        skipDiscriminatedUnionSuffix: false
      }
    );
    if (typeof itemSerializer === "string") {
      return itemSerializer;
    }
  }
  return undefined;
}

/**
 * Builds an XML deserializer function for a model type
 */
export function buildXmlModelDeserializer(
  context: SdkContext,
  type: SdkModelType,
  options: ModelSerializeOptions = {
    nameOnly: false,
    skipDiscriminatedUnionSuffix: false
  }
): FunctionDeclarationStructure | string | undefined {
  if (!isSupportedSerializeType(type)) {
    return undefined;
  }

  if (!type.name) {
    reportDiagnostic(context.program, {
      code: "anonymous-type-deserialization",
      target: type.__raw || NoTarget
    });
    return undefined;
  }

  if (
    !type.usage ||
    (type.usage !== undefined &&
      (type.usage & UsageFlags.Output) !== UsageFlags.Output &&
      (type.usage & UsageFlags.Exception) !== UsageFlags.Exception)
  ) {
    return undefined;
  }

  if (isAzureCoreErrorType(context.program, type.__raw!)) {
    return undefined;
  }

  const deserializerFunctionName =
    options.predefinedName ??
    `${normalizeModelName(
      context,
      type,
      NameType.Operation,
      options.skipDiscriminatedUnionSuffix
    )}XmlDeserializer`;

  if (options.nameOnly) {
    return resolveReference(refkey(type, "xmlDeserializer"));
  }

  const deserializeFromXmlRef = resolveReference(XmlHelpers.deserializeFromXml);
  const xmlPropertyDeserializeMetadataRef = resolveReference(
    XmlHelpers.XmlPropertyDeserializeMetadata
  );

  const properties = getAllProperties(context, type, getAllAncestors(type));
  const xmlRootName = getXmlRootName(type);
  const xmlRootNs = getXmlRootNs(type);

  // Build property metadata array for deserialization
  const propertyMetadata = buildDeserializePropertyMetadataArray(
    context,
    properties
  );

  const statements: string[] = [];

  // Generate the properties metadata constant
  statements.push(
    `const properties: ${xmlPropertyDeserializeMetadataRef}[] = [${propertyMetadata}];`
  );

  // Generate additionalProperties config if applicable
  const additionalPropsConfigExpr = buildAdditionalPropertiesConfigExpr(
    context,
    type,
    properties
  );

  // Generate the deserialization call
  const typeRef = resolveReference(refkey(type));
  if (xmlRootNs) {
    if (additionalPropsConfigExpr) {
      statements.push(
        `return ${deserializeFromXmlRef}<${typeRef}>(xmlString, properties, "${xmlRootName}", { namespace: "${xmlRootNs.namespace}", prefix: "${xmlRootNs.prefix}" }, undefined, ${additionalPropsConfigExpr});`
      );
    } else {
      statements.push(
        `return ${deserializeFromXmlRef}<${typeRef}>(xmlString, properties, "${xmlRootName}", { namespace: "${xmlRootNs.namespace}", prefix: "${xmlRootNs.prefix}" });`
      );
    }
  } else {
    if (additionalPropsConfigExpr) {
      statements.push(
        `return ${deserializeFromXmlRef}<${typeRef}>(xmlString, properties, "${xmlRootName}", undefined, undefined, ${additionalPropsConfigExpr});`
      );
    } else {
      statements.push(
        `return ${deserializeFromXmlRef}<${typeRef}>(xmlString, properties, "${xmlRootName}");`
      );
    }
  }

  const deserializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: deserializerFunctionName,
    isExported: true,
    parameters: [
      {
        name: "xmlString",
        type: "string"
      }
    ],
    returnType: resolveReference(refkey(type)),
    statements
  };

  return deserializerFunction;
}

/**
 * Builds the property metadata array for XML deserialization
 */
function buildDeserializePropertyMetadataArray(
  context: SdkContext,
  properties: SdkModelPropertyType[]
): string {
  const metadataEntries: string[] = [];

  for (const property of properties) {
    if (property.kind !== "property") {
      continue;
    }
    if (isMetadata(context.program, property.__raw!)) {
      continue;
    }

    const xmlOptions = property.serializationOptions?.xml;
    const jsonOptions = property.serializationOptions?.json;
    const propertyName = normalizeModelPropertyName(context, property);
    const cleanPropertyName = propertyName.replace(/^"|"$/g, "");

    // Use XML name if available, fall back to JSON name, then property name
    const serializedName =
      xmlOptions?.name ?? jsonOptions?.name ?? property.name;

    const metadataObj: string[] = [
      `propertyName: "${cleanPropertyName}"`,
      `xmlOptions: { name: "${serializedName}"${buildXmlOptionsString(xmlOptions)} }`
    ];

    // Add type information for special handling
    const typeInfo = getPropertyTypeInfo(property.type);
    if (typeInfo.type) {
      metadataObj.push(`type: "${typeInfo.type}"`);
    }
    if (typeInfo.dateEncoding) {
      metadataObj.push(`dateEncoding: "${typeInfo.dateEncoding}"`);
    }
    if (typeInfo.bytesEncoding) {
      metadataObj.push(`bytesEncoding: "${typeInfo.bytesEncoding}"`);
    }
    if (typeInfo.itemType) {
      metadataObj.push(`itemType: "${typeInfo.itemType}"`);
    }
    if (typeInfo.primitiveSubtype) {
      metadataObj.push(`primitiveSubtype: "${typeInfo.primitiveSubtype}"`);
    }

    // Add deserializer for complex types
    const nestedDeserializer = getNestedXmlDeserializer(context, property.type);
    if (nestedDeserializer) {
      metadataObj.push(`deserializer: ${nestedDeserializer}`);
    }

    metadataEntries.push(`{ ${metadataObj.join(", ")} }`);
  }

  return metadataEntries.join(",\n    ");
}

/**
 * Gets the nested XML deserializer function reference for complex types.
 * Uses the XML object deserializer to properly handle XML property names.
 */
function getNestedXmlDeserializer(
  context: SdkContext,
  type: SdkType
): string | undefined {
  if (type.kind === "model") {
    // For nested objects, use the XML object deserializer which takes parsed XML objects
    // and uses XML property names for mapping
    const deserializerName = buildXmlObjectModelDeserializer(context, type, {
      nameOnly: true,
      skipDiscriminatedUnionSuffix: false
    });
    if (typeof deserializerName === "string") {
      return deserializerName;
    }
  }
  if (type.kind === "array" && type.valueType.kind === "model") {
    // For arrays, use the XML object deserializer for items
    // The XML helper calls this for each item and handles the array mapping
    const itemDeserializer = buildXmlObjectModelDeserializer(
      context,
      type.valueType,
      {
        nameOnly: true,
        skipDiscriminatedUnionSuffix: false
      }
    );
    if (typeof itemDeserializer === "string") {
      return itemDeserializer;
    }
  }
  return undefined;
}

/**
 * Builds an XML object deserializer function for a model type.
 * This deserializer takes a pre-parsed XML object (not an XML string)
 * and uses XML property names for mapping. Used for nested objects.
 */
export function buildXmlObjectModelDeserializer(
  context: SdkContext,
  type: SdkModelType,
  options: ModelSerializeOptions = {
    nameOnly: false,
    skipDiscriminatedUnionSuffix: false
  }
): FunctionDeclarationStructure | string | undefined {
  if (!isSupportedSerializeType(type)) {
    return undefined;
  }

  if (!type.name) {
    reportDiagnostic(context.program, {
      code: "anonymous-type-deserialization",
      target: type.__raw || NoTarget
    });
    return undefined;
  }

  if (
    !type.usage ||
    (type.usage !== undefined &&
      (type.usage & UsageFlags.Output) !== UsageFlags.Output &&
      (type.usage & UsageFlags.Exception) !== UsageFlags.Exception)
  ) {
    return undefined;
  }

  if (isAzureCoreErrorType(context.program, type.__raw!)) {
    return undefined;
  }

  const deserializerFunctionName =
    options.predefinedName ??
    `${normalizeModelName(
      context,
      type,
      NameType.Operation,
      options.skipDiscriminatedUnionSuffix
    )}XmlObjectDeserializer`;

  if (options.nameOnly) {
    return resolveReference(refkey(type, "xmlObjectDeserializer"));
  }

  const deserializeXmlObjectRef = resolveReference(
    XmlHelpers.deserializeXmlObject
  );
  const xmlPropertyDeserializeMetadataRef = resolveReference(
    XmlHelpers.XmlPropertyDeserializeMetadata
  );

  const properties = getAllProperties(context, type, getAllAncestors(type));

  // Build property metadata array for deserialization
  const propertyMetadata = buildDeserializePropertyMetadataArray(
    context,
    properties
  );

  const statements: string[] = [];

  // Generate the properties metadata constant
  statements.push(
    `const properties: ${xmlPropertyDeserializeMetadataRef}[] = [${propertyMetadata}];`
  );

  // Generate additionalProperties config if applicable
  const additionalPropsConfigExpr = buildAdditionalPropertiesConfigExpr(
    context,
    type,
    properties
  );

  // Generate the deserialization call - no rootName needed for object deserializer
  const typeRef = resolveReference(refkey(type));
  if (additionalPropsConfigExpr) {
    statements.push(
      `return ${deserializeXmlObjectRef}<${typeRef}>(xmlObject, properties, ${additionalPropsConfigExpr});`
    );
  } else {
    statements.push(
      `return ${deserializeXmlObjectRef}<${typeRef}>(xmlObject, properties);`
    );
  }

  const deserializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: deserializerFunctionName,
    isExported: true,
    parameters: [
      {
        name: "xmlObject",
        type: "Record<string, unknown>"
      }
    ],
    returnType: resolveReference(refkey(type)),
    statements
  };

  return deserializerFunction;
}

/**
 * Builds the additionalProperties config expression for XML deserializers.
 * Returns undefined if the model has no additionalProperties.
 */
function buildAdditionalPropertiesConfigExpr(
  context: SdkContext,
  type: SdkModelType,
  properties: SdkModelPropertyType[]
): string | undefined {
  const additionalPropertyType = getAdditionalPropertiesType(type);
  if (!additionalPropertyType) {
    return undefined;
  }

  // Resolve the XmlAdditionalPropertiesConfig type reference
  resolveReference(XmlHelpers.XmlAdditionalPropertiesConfig);

  const propName = getAdditionalPropertiesName(context, type);

  // Collect XML element names of declared properties to exclude
  const excludeNames: string[] = [];
  for (const property of properties) {
    if (property.kind !== "property") {
      continue;
    }
    if (isMetadata(context.program, property.__raw!)) {
      continue;
    }
    const xmlOptions = property.serializationOptions?.xml;
    const jsonOptions = property.serializationOptions?.json;
    const xmlName = xmlOptions?.name ?? jsonOptions?.name ?? property.name;
    excludeNames.push(xmlName);
  }

  return `{ propertyName: "${propName}", excludeNames: [${excludeNames.map((n) => `"${n}"`).join(", ")}] }`;
}
