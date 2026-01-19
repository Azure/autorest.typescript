// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { XMLBuilder, XMLParser, XmlBuilderOptions } from "fast-xml-parser";

/**
 * XML serialization options for a property or model
 */
export interface XmlSerializationOptions {
  /** Element or attribute name */
  name: string;
  /** If true, serialize as XML attribute instead of element */
  attribute?: boolean;
  /** XML namespace for this element/attribute */
  ns?: {
    namespace: string;
    prefix: string;
  };
  /** For arrays - if true, items are inline without wrapper element */
  unwrapped?: boolean;
  /** For arrays - name of each item element */
  itemsName?: string;
  /** For arrays - namespace for item elements */
  itemsNs?: {
    namespace: string;
    prefix: string;
  };
}

/**
 * Metadata for serializing a model property to XML
 */
export interface XmlPropertyMetadata {
  /** Client-side property name */
  propertyName: string;
  /** XML serialization options */
  xmlOptions: XmlSerializationOptions;
  /** Serializer function for complex types */
  serializer?: (value: any) => XmlSerializedValue;
  /** Type of the property for special handling */
  type?: "array" | "object" | "primitive" | "date" | "bytes";
  /** Date encoding format */
  dateEncoding?: "rfc3339" | "rfc7231" | "unixTimestamp";
}

/**
 * Metadata for deserializing XML to a model property
 */
export interface XmlPropertyDeserializeMetadata {
  /** Client-side property name */
  propertyName: string;
  /** XML serialization options */
  xmlOptions: XmlSerializationOptions;
  /** Deserializer function for complex types */
  deserializer?: (value: any) => any;
  /** Type of the property for special handling */
  type?: "array" | "object" | "primitive" | "date" | "bytes";
  /** Date encoding format */
  dateEncoding?: "rfc3339" | "rfc7231" | "unixTimestamp";
}

/**
 * Result of XML serialization - either a primitive value or structured XML object
 */
export type XmlSerializedValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | XmlSerializedObject;

export interface XmlSerializedObject {
  [key: string]: XmlSerializedValue | XmlSerializedValue[];
}

// Default XML parser/builder options
const defaultParserOptions = {
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  textNodeName: "#text",
  parseAttributeValue: true,
  trimValues: true,
  isArray: (_name: string, _jpath: string, isLeafNode: boolean, isAttribute: boolean) => {
    // Don't auto-detect arrays for attributes or leaf nodes by default
    // Let the metadata drive array detection
    return !isAttribute && !isLeafNode;
  }
};

const defaultBuilderOptions: Partial<XmlBuilderOptions> = {
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  textNodeName: "#text",
  format: true,
  suppressEmptyNode: true
};

/**
 * Creates an XML element name with optional namespace prefix
 */
function getElementName(name: string, ns?: { namespace: string; prefix: string }): string {
  if (ns?.prefix) {
    return `${ns.prefix}:${name}`;
  }
  return name;
}

/**
 * Creates namespace declaration attributes for the root element
 */
function createNamespaceDeclarations(
  namespaces: Map<string, string>
): Record<string, string> {
  const declarations: Record<string, string> = {};
  for (const [prefix, namespace] of namespaces) {
    if (prefix) {
      declarations[`@_xmlns:${prefix}`] = namespace;
    } else {
      declarations["@_xmlns"] = namespace;
    }
  }
  return declarations;
}

/**
 * Collects all namespaces from property metadata
 */
function collectNamespaces(
  properties: XmlPropertyMetadata[],
  rootNs?: { namespace: string; prefix: string }
): Map<string, string> {
  const namespaces = new Map<string, string>();

  if (rootNs) {
    namespaces.set(rootNs.prefix, rootNs.namespace);
  }

  for (const prop of properties) {
    if (prop.xmlOptions.ns) {
      namespaces.set(prop.xmlOptions.ns.prefix, prop.xmlOptions.ns.namespace);
    }
    if (prop.xmlOptions.itemsNs) {
      namespaces.set(prop.xmlOptions.itemsNs.prefix, prop.xmlOptions.itemsNs.namespace);
    }
  }

  return namespaces;
}

/**
 * Serializes a primitive value for XML
 */
function serializePrimitiveValue(
  value: any,
  type?: "array" | "object" | "primitive" | "date" | "bytes",
  dateEncoding?: "rfc3339" | "rfc7231" | "unixTimestamp"
): string | number | boolean {
  if (value === null || value === undefined) {
    return "";
  }

  if (type === "date" && value instanceof Date) {
    switch (dateEncoding) {
      case "rfc7231":
        return value.toUTCString();
      case "unixTimestamp":
        return Math.floor(value.getTime() / 1000);
      case "rfc3339":
      default:
        return value.toISOString();
    }
  }

  if (type === "bytes" && value instanceof Uint8Array) {
    // Convert bytes to base64
    return btoa(String.fromCharCode(...value));
  }

  if (typeof value === "boolean" || typeof value === "number") {
    return value;
  }

  return String(value);
}

/**
 * Serializes an array property to XML format
 */
function serializeArrayProperty(
  value: any[],
  metadata: XmlPropertyMetadata
): XmlSerializedObject | XmlSerializedValue[] {
  const { xmlOptions, serializer } = metadata;
  const itemName = getElementName(
    xmlOptions.itemsName || xmlOptions.name,
    xmlOptions.itemsNs || xmlOptions.ns
  );

  const serializedItems = value.map((item) => {
    if (serializer) {
      return serializer(item);
    }
    return serializePrimitiveValue(item, metadata.type, metadata.dateEncoding);
  });

  if (xmlOptions.unwrapped) {
    // Unwrapped: return items directly (they'll be siblings)
    return serializedItems;
  } else {
    // Wrapped: items are nested under a wrapper element
    return {
      [itemName]: serializedItems
    } as XmlSerializedObject;
  }
}

/**
 * Serializes a model to XML object structure
 */
export function serializeModelToXml(
  item: Record<string, any>,
  properties: XmlPropertyMetadata[],
  rootName: string,
  rootNs?: { namespace: string; prefix: string }
): XmlSerializedObject {
  if (item === null || item === undefined) {
    return {};
  }

  const result: XmlSerializedObject = {};
  const attributes: Record<string, any> = {};

  // Collect and add namespace declarations
  const namespaces = collectNamespaces(properties, rootNs);
  const nsDeclarations = createNamespaceDeclarations(namespaces);
  Object.assign(attributes, nsDeclarations);

  for (const prop of properties) {
    const value = item[prop.propertyName];

    if (value === undefined) {
      continue;
    }

    const { xmlOptions, serializer, type } = prop;
    const elementName = getElementName(xmlOptions.name, xmlOptions.ns);

    if (xmlOptions.attribute) {
      // Serialize as attribute
      const attrName = xmlOptions.ns?.prefix
        ? `@_${xmlOptions.ns.prefix}:${xmlOptions.name}`
        : `@_${xmlOptions.name}`;
      attributes[attrName] = serializePrimitiveValue(value, type, prop.dateEncoding);
    } else if (Array.isArray(value)) {
      // Serialize array
      const arrayResult = serializeArrayProperty(value, prop);
      if (xmlOptions.unwrapped && Array.isArray(arrayResult)) {
        // For unwrapped arrays, add each item as a separate element
        const itemName = getElementName(
          xmlOptions.itemsName || xmlOptions.name,
          xmlOptions.itemsNs || xmlOptions.ns
        );
        result[itemName] = arrayResult as XmlSerializedValue[];
      } else {
        Object.assign(result, arrayResult);
      }
    } else if (value !== null && typeof value === "object" && serializer) {
      // Serialize nested object
      result[elementName] = serializer(value);
    } else {
      // Serialize primitive
      result[elementName] = serializePrimitiveValue(value, type, prop.dateEncoding);
    }
  }

  // Merge attributes into result
  Object.assign(result, attributes);

  // Wrap in root element
  const rootElementName = getElementName(rootName, rootNs);
  return {
    [rootElementName]: result
  };
}

/**
 * Converts an XML object structure to XML string
 */
export function xmlObjectToString(
  xmlObject: XmlSerializedObject,
  options?: Partial<XmlBuilderOptions>
): string {
  const builder = new XMLBuilder({
    ...defaultBuilderOptions,
    ...options
  });

  return builder.build(xmlObject);
}

/**
 * Full serialization: model to XML string
 */
export function serializeToXml(
  item: Record<string, any>,
  properties: XmlPropertyMetadata[],
  rootName: string,
  rootNs?: { namespace: string; prefix: string },
  options?: Partial<XmlBuilderOptions>
): string {
  const xmlObject = serializeModelToXml(item, properties, rootName, rootNs);
  return xmlObjectToString(xmlObject, options);
}

/**
 * Parses XML string to object structure
 */
export function parseXmlString(
  xmlString: string,
  options?: Partial<typeof defaultParserOptions>
): any {
  const parser = new XMLParser({
    ...defaultParserOptions,
    ...options
  });

  return parser.parse(xmlString);
}

/**
 * Deserializes a primitive value from XML
 */
function deserializePrimitiveValue(
  value: any,
  type?: "array" | "object" | "primitive" | "date" | "bytes",
  dateEncoding?: "rfc3339" | "rfc7231" | "unixTimestamp"
): any {
  if (value === null || value === undefined || value === "") {
    return undefined;
  }

  if (type === "date") {
    if (dateEncoding === "unixTimestamp" && typeof value === "number") {
      return new Date(value * 1000);
    }
    return new Date(value);
  }

  if (type === "bytes" && typeof value === "string") {
    // Convert base64 to bytes
    const binaryString = atob(value);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }

  return value;
}

/**
 * Extracts element value from parsed XML, handling namespaces
 */
function getElementValue(
  obj: any,
  xmlOptions: XmlSerializationOptions
): any {
  if (!obj) {
    return undefined;
  }

  const { name, ns, attribute } = xmlOptions;

  if (attribute) {
    // Look for attribute with or without namespace prefix
    const attrName = ns?.prefix ? `@_${ns.prefix}:${name}` : `@_${name}`;
    return obj[attrName];
  }

  // Look for element with or without namespace prefix
  const elementName = ns?.prefix ? `${ns.prefix}:${name}` : name;
  return obj[elementName] ?? obj[name]; // Fall back to name without prefix
}

/**
 * Deserializes an array from XML
 */
function deserializeArrayProperty(
  obj: any,
  metadata: XmlPropertyDeserializeMetadata
): any[] {
  const { xmlOptions, deserializer, type, dateEncoding } = metadata;

  let arrayData: any;

  if (xmlOptions.unwrapped) {
    // Items are direct children
    const itemName = getElementName(
      xmlOptions.itemsName || xmlOptions.name,
      xmlOptions.itemsNs || xmlOptions.ns
    );
    arrayData = obj[itemName] ?? obj[xmlOptions.itemsName || xmlOptions.name];
  } else {
    // Items are nested under wrapper element
    const wrapperName = getElementName(xmlOptions.name, xmlOptions.ns);
    const wrapper = obj[wrapperName] ?? obj[xmlOptions.name];

    if (!wrapper) {
      return [];
    }

    const itemName = getElementName(
      xmlOptions.itemsName || xmlOptions.name,
      xmlOptions.itemsNs
    );
    arrayData = wrapper[itemName] ?? wrapper[xmlOptions.itemsName || xmlOptions.name] ?? wrapper;
  }

  if (!arrayData) {
    return [];
  }

  // Ensure it's an array
  const items = Array.isArray(arrayData) ? arrayData : [arrayData];

  return items.map((item) => {
    if (deserializer) {
      return deserializer(item);
    }
    return deserializePrimitiveValue(item, type, dateEncoding);
  });
}

/**
 * Deserializes XML object structure to model
 */
export function deserializeXmlToModel<T = Record<string, any>>(
  xmlObject: any,
  properties: XmlPropertyDeserializeMetadata[],
  rootName: string,
  rootNs?: { namespace: string; prefix: string }
): T {
  if (!xmlObject) {
    return {} as T;
  }

  // Get root element content
  const rootElementName = getElementName(rootName, rootNs);
  const content = xmlObject[rootElementName] ?? xmlObject[rootName] ?? xmlObject;

  const result: Record<string, any> = {};

  for (const prop of properties) {
    const { propertyName, xmlOptions, deserializer, type, dateEncoding } = prop;

    if (type === "array" || xmlOptions.itemsName) {
      // Deserialize array
      result[propertyName] = deserializeArrayProperty(content, prop);
    } else {
      // Get element or attribute value
      const rawValue = getElementValue(content, xmlOptions);

      if (rawValue === undefined) {
        continue;
      }

      if (deserializer && typeof rawValue === "object") {
        // Deserialize nested object
        result[propertyName] = deserializer(rawValue);
      } else {
        // Deserialize primitive
        result[propertyName] = deserializePrimitiveValue(rawValue, type, dateEncoding);
      }
    }
  }

  return result as T;
}

/**
 * Full deserialization: XML string to model
 */
export function deserializeFromXml<T = Record<string, any>>(
  xmlString: string,
  properties: XmlPropertyDeserializeMetadata[],
  rootName: string,
  rootNs?: { namespace: string; prefix: string },
  parserOptions?: Partial<typeof defaultParserOptions>
): T {
  const xmlObject = parseXmlString(xmlString, parserOptions);
  return deserializeXmlToModel<T>(xmlObject, properties, rootName, rootNs);
}

/**
 * Utility to check if a content type is XML
 */
export function isXmlContentType(contentType: string): boolean {
  const normalized = contentType.toLowerCase();
  return (
    normalized.includes("application/xml") ||
    normalized.includes("text/xml") ||
    normalized.endsWith("+xml")
  );
}

/**
 * Utility to check if a content type is JSON
 */
export function isJsonContentType(contentType: string): boolean {
  const normalized = contentType.toLowerCase();
  return (
    normalized.includes("application/json") ||
    normalized.includes("text/json") ||
    normalized.endsWith("+json")
  );
}
