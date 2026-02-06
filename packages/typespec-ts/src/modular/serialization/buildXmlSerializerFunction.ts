// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  FunctionDeclarationStructure,
  ParameterDeclarationStructure,
  StructureKind
} from "ts-morph";
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
import { normalizeModelName } from "../emitModels.js";
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
import { isMetadata, isHeader } from "@typespec/http";
import { normalizeModelPropertyName } from "../type-expressions/get-type-expression.js";
import { isReadOnly } from "@azure-tools/typespec-client-generator-core";
import { buildModelSerializer } from "./buildSerializerFunction.js";
import { buildModelDeserializer } from "./buildDeserializerFunction.js";
import { getResponseMapping } from "../helpers/operationHelpers.js";

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

  // Generate the serialization call
  if (xmlRootNs) {
    statements.push(
      `return ${serializeToXmlRef}(item, properties, "${xmlRootName}", { namespace: "${xmlRootNs.namespace}", prefix: "${xmlRootNs.prefix}" });`
    );
  } else {
    statements.push(
      `return ${serializeToXmlRef}(item, properties, "${xmlRootName}");`
    );
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
    // Skip header properties as they are handled separately
    if (isHeader(context.program, property.__raw!)) {
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
  dateEncoding?: "rfc3339" | "rfc7231" | "unixTimestamp";
} {
  switch (type.kind) {
    case "array":
      return { type: "array" };
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
    case "bytes":
      return { type: "bytes" };
    default:
      return { type: "primitive" };
  }
}

/**
 * Gets the nested XML serializer function reference for complex types
 */
function getNestedXmlSerializer(
  context: SdkContext,
  type: SdkType
): string | undefined {
  if (type.kind === "model") {
    // For nested objects, use the regular JSON serializer which returns objects
    // The XML builder will convert these objects to XML elements
    const serializerName = buildModelSerializer(context, type, {
      nameOnly: true,
      skipDiscriminatedUnionSuffix: false
    });
    if (typeof serializerName === "string") {
      return serializerName;
    }
  }
  if (type.kind === "array" && type.valueType.kind === "model") {
    // For arrays, use the regular JSON serializer which returns objects
    // The XML helper calls this for each item and handles the array mapping
    const itemSerializer = buildModelSerializer(context, type.valueType, {
      nameOnly: true,
      skipDiscriminatedUnionSuffix: false
    });
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

  // Check if model or its ancestors have header properties that need special handling.
  // If so, the deserializer function will accept an optional 'headers' parameter
  // to deserialize header values into the model properties.
  const allProps = type.kind === "model" ? (type.properties ?? []) : [];
  const ancestorProps =
    type.kind === "model"
      ? getAllAncestors(type)
          .filter((p) => p.kind === "model")
          .flatMap((p) => (p as SdkModelType).properties ?? [])
      : [];
  const hasHeaderProperties = [...allProps, ...ancestorProps].some((p) =>
    isHeader(context.program, p.__raw!)
  );

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

  // Generate the deserialization call
  const typeRef = resolveReference(refkey(type));
  if (hasHeaderProperties) {
    // First deserialize the XML body
    if (xmlRootNs) {
      statements.push(
        `const result = ${deserializeFromXmlRef}<${typeRef}>(xmlString, properties, "${xmlRootName}", { namespace: "${xmlRootNs.namespace}", prefix: "${xmlRootNs.prefix}" });`
      );
    } else {
      statements.push(
        `const result = ${deserializeFromXmlRef}<${typeRef}>(xmlString, properties, "${xmlRootName}");`
      );
    }
    // Get header property mappings with type transformations
    const headerPropertiesStr = getResponseMapping(
      context,
      type,
      "result",
      {
        propertyFilter(property) {
          return isHeader(context.program, property.__raw!);
        }
      },
      true,
      "headers"
    );
    const headerMappings = headerPropertiesStr.filter((p) => p.trim());

    if (headerMappings.length > 0) {
      // Merge header properties into the result
      statements.push(`if (headers) {`);
      statements.push(
        `  Object.assign(result, { ${headerMappings.join(", ")} });`
      );
      statements.push(`}`);
    }
    statements.push(`return result;`);
  } else {
    // No headers to handle, deserialize normally
    if (xmlRootNs) {
      statements.push(
        `return ${deserializeFromXmlRef}<${typeRef}>(xmlString, properties, "${xmlRootName}", { namespace: "${xmlRootNs.namespace}", prefix: "${xmlRootNs.prefix}" });`
      );
    } else {
      statements.push(
        `return ${deserializeFromXmlRef}<${typeRef}>(xmlString, properties, "${xmlRootName}");`
      );
    }
  }

  const parameters: ParameterDeclarationStructure[] = [
    {
      kind: StructureKind.Parameter,
      name: "xmlString",
      type: "string"
    }
  ];
  if (hasHeaderProperties) {
    parameters.push({
      kind: StructureKind.Parameter,
      name: "headers",
      type: "any",
      hasQuestionToken: true
    });
  }

  const deserializerFunction: FunctionDeclarationStructure = {
    kind: StructureKind.Function,
    name: deserializerFunctionName,
    isExported: true,
    parameters,
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
    } // Skip header properties as they are passed separately via the headers parameter
    if (isHeader(context.program, property.__raw!)) {
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
 * Gets the nested XML deserializer function reference for complex types
 */
function getNestedXmlDeserializer(
  context: SdkContext,
  type: SdkType
): string | undefined {
  if (type.kind === "model") {
    // For nested objects, use the regular JSON deserializer which takes parsed objects
    // The XML parser has already converted the XML to an object structure
    const deserializerName = buildModelDeserializer(context, type, {
      nameOnly: true,
      skipDiscriminatedUnionSuffix: false
    });
    if (typeof deserializerName === "string") {
      return deserializerName;
    }
  }
  if (type.kind === "array" && type.valueType.kind === "model") {
    // For arrays, use the regular JSON deserializer which takes parsed objects
    // The XML helper calls this for each item and handles the array mapping
    const itemDeserializer = buildModelDeserializer(context, type.valueType, {
      nameOnly: true,
      skipDiscriminatedUnionSuffix: false
    });
    if (typeof itemDeserializer === "string") {
      return itemDeserializer;
    }
  }
  return undefined;
}
