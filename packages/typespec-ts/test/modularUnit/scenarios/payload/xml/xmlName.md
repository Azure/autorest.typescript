# Xml Name with Nested Models

Tests that XML deserializers for nested models use XML property names (from @Xml.name decorators)
instead of JSON property names when deserializing already-parsed XML objects.

## TypeSpec

```tsp
/** The retention policy settings */
model RetentionPolicy {
  /** Whether retention is enabled */
  @Xml.name("Enabled")
  enabled: boolean;

  /** Number of days to retain */
  @Xml.name("Days")
  days?: int32;
}

/** Logging configuration */
model Logging {
  /** The version */
  @Xml.name("Version")
  version: string;

  /** Whether delete is logged */
  @Xml.name("Delete")
  deleteProperty: boolean;

  /** Whether read is logged */
  @Xml.name("Read")
  read: boolean;

  /** Whether write is logged */
  @Xml.name("Write")
  write: boolean;

  /** The retention policy */
  @Xml.name("RetentionPolicy")
  retentionPolicy: RetentionPolicy;
}

@route("/logging")
interface LoggingOperations {
  /** Get logging settings */
  @get getLogging(): Logging;

  /** Set logging settings */
  @put setLogging(@body body: Logging): void;
}
```

## Provide generated models with XML serializers and deserializers

The key validation here is that:

1. `loggingXmlDeserializer` uses `retentionPolicyXmlObjectDeserializer` for the nested type (not the JSON deserializer)
2. `retentionPolicyXmlObjectDeserializer` accesses properties using XML names ("Enabled", "Days") not JSON names

```ts models interface RetentionPolicy
/** The retention policy settings */
export interface RetentionPolicy {
  /** Whether retention is enabled */
  enabled: boolean;
  /** Number of days to retain */
  days?: number;
}
```

```ts models function retentionPolicyXmlSerializer
export function retentionPolicyXmlSerializer(item: RetentionPolicy): string {
  const properties: XmlPropertyMetadata[] = [
    { propertyName: "enabled", xmlOptions: { name: "Enabled" }, type: "primitive" },
    { propertyName: "days", xmlOptions: { name: "Days" }, type: "primitive" },
  ];
  return serializeToXml(item, properties, "RetentionPolicy");
}
```

```ts models function retentionPolicyXmlDeserializer
export function retentionPolicyXmlDeserializer(xmlString: string): RetentionPolicy {
  const properties: XmlPropertyDeserializeMetadata[] = [
    { propertyName: "enabled", xmlOptions: { name: "Enabled" }, type: "primitive" },
    { propertyName: "days", xmlOptions: { name: "Days" }, type: "primitive" },
  ];
  return deserializeFromXml<RetentionPolicy>(xmlString, properties, "RetentionPolicy");
}
```

```ts models function retentionPolicyXmlObjectDeserializer
export function retentionPolicyXmlObjectDeserializer(
  xmlObject: Record<string, unknown>,
): RetentionPolicy {
  const properties: XmlPropertyDeserializeMetadata[] = [
    { propertyName: "enabled", xmlOptions: { name: "Enabled" }, type: "primitive" },
    { propertyName: "days", xmlOptions: { name: "Days" }, type: "primitive" },
  ];
  return deserializeXmlObject<RetentionPolicy>(xmlObject, properties);
}
```

```ts models interface Logging
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Logging configuration */
export interface Logging {
  /** The version */
  version: string;
  /** Whether delete is logged */
  deleteProperty: boolean;
  /** Whether read is logged */
  read: boolean;
  /** Whether write is logged */
  write: boolean;
  /** The retention policy */
  retentionPolicy: RetentionPolicy;
}
```

```ts models function loggingXmlSerializer
export function loggingXmlSerializer(item: Logging): string {
  const properties: XmlPropertyMetadata[] = [
    { propertyName: "version", xmlOptions: { name: "Version" }, type: "primitive" },
    { propertyName: "deleteProperty", xmlOptions: { name: "Delete" }, type: "primitive" },
    { propertyName: "read", xmlOptions: { name: "Read" }, type: "primitive" },
    { propertyName: "write", xmlOptions: { name: "Write" }, type: "primitive" },
    {
      propertyName: "retentionPolicy",
      xmlOptions: { name: "RetentionPolicy" },
      type: "object",
      serializer: retentionPolicySerializer,
    },
  ];
  return serializeToXml(item, properties, "Logging");
}
```

```ts models function loggingXmlDeserializer
export function loggingXmlDeserializer(xmlString: string): Logging {
  const properties: XmlPropertyDeserializeMetadata[] = [
    { propertyName: "version", xmlOptions: { name: "Version" }, type: "primitive" },
    { propertyName: "deleteProperty", xmlOptions: { name: "Delete" }, type: "primitive" },
    { propertyName: "read", xmlOptions: { name: "Read" }, type: "primitive" },
    { propertyName: "write", xmlOptions: { name: "Write" }, type: "primitive" },
    {
      propertyName: "retentionPolicy",
      xmlOptions: { name: "RetentionPolicy" },
      type: "object",
      deserializer: retentionPolicyXmlObjectDeserializer,
    },
  ];
  return deserializeFromXml<Logging>(xmlString, properties, "Logging");
}
```

```ts models function loggingXmlObjectDeserializer
export function loggingXmlObjectDeserializer(xmlObject: Record<string, unknown>): Logging {
  const properties: XmlPropertyDeserializeMetadata[] = [
    { propertyName: "version", xmlOptions: { name: "Version" }, type: "primitive" },
    { propertyName: "deleteProperty", xmlOptions: { name: "Delete" }, type: "primitive" },
    { propertyName: "read", xmlOptions: { name: "Read" }, type: "primitive" },
    { propertyName: "write", xmlOptions: { name: "Write" }, type: "primitive" },
    {
      propertyName: "retentionPolicy",
      xmlOptions: { name: "RetentionPolicy" },
      type: "object",
      deserializer: retentionPolicyXmlObjectDeserializer,
    },
  ];
  return deserializeXmlObject<Logging>(xmlObject, properties);
}
```

# Xml Name with Nested Array Models

Tests XML deserialization with nested arrays where items have @Xml.name decorators.

## TypeSpec

```tsp
/** A single tag */
model BlobTag {
  /** Tag key */
  @Xml.name("Key")
  key: string;

  /** Tag value */
  @Xml.name("Value")
  value: string;
}

/** Container for tags */
@Xml.name("Tags")
model BlobTags {
  /** The tag set */
  @Xml.name("TagSet")
  @Xml.unwrapped
  blobTagSet: BlobTag[];
}

@route("/tags")
interface TagOperations {
  /** Get tags */
  @get getTags(): BlobTags;
}
```

## Provide generated models with XML array deserializers

```ts models interface BlobTag
/** A single tag */
export interface BlobTag {
  /** Tag key */
  key: string;
  /** Tag value */
  value: string;
}
```

```ts models function blobTagXmlDeserializer
export function blobTagXmlDeserializer(xmlString: string): BlobTag {
  const properties: XmlPropertyDeserializeMetadata[] = [
    { propertyName: "key", xmlOptions: { name: "Key" }, type: "primitive" },
    { propertyName: "value", xmlOptions: { name: "Value" }, type: "primitive" },
  ];
  return deserializeFromXml<BlobTag>(xmlString, properties, "BlobTag");
}
```

```ts models function blobTagXmlObjectDeserializer
export function blobTagXmlObjectDeserializer(xmlObject: Record<string, unknown>): BlobTag {
  const properties: XmlPropertyDeserializeMetadata[] = [
    { propertyName: "key", xmlOptions: { name: "Key" }, type: "primitive" },
    { propertyName: "value", xmlOptions: { name: "Value" }, type: "primitive" },
  ];
  return deserializeXmlObject<BlobTag>(xmlObject, properties);
}
```

```ts models function blobTagsXmlDeserializer
export function blobTagsXmlDeserializer(xmlString: string): BlobTags {
  const properties: XmlPropertyDeserializeMetadata[] = [
    {
      propertyName: "blobTagSet",
      xmlOptions: { name: "TagSet", unwrapped: true, itemsName: "TagSet" },
      type: "array",
      deserializer: blobTagXmlObjectDeserializer,
    },
  ];
  return deserializeFromXml<BlobTags>(xmlString, properties, "Tags");
}
```

```ts models function blobTagsXmlObjectDeserializer
export function blobTagsXmlObjectDeserializer(xmlObject: Record<string, unknown>): BlobTags {
  const properties: XmlPropertyDeserializeMetadata[] = [
    {
      propertyName: "blobTagSet",
      xmlOptions: { name: "TagSet", unwrapped: true, itemsName: "TagSet" },
      type: "array",
      deserializer: blobTagXmlObjectDeserializer,
    },
  ];
  return deserializeXmlObject<BlobTags>(xmlObject, properties);
}
```
