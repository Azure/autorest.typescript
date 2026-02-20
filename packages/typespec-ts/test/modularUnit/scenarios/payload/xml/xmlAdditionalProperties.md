# Xml AdditionalProperties Deserialization

Tests that XML deserializers correctly handle models with additionalProperties (Record spread).
The XML deserializer should collect undeclared XML elements into the additionalProperties field.

## TypeSpec

```tsp
model BlobMetadata {
  /** Whether the blob metadata is encrypted. */
  @Xml.attribute
  @Xml.name("Encrypted")
  encrypted?: string;
  ...Record<string>;
}

@route("/blobs")
interface BlobOperations {
  /** Get blob metadata */
  @get getMetadata(): BlobMetadata;
}
```

## Provide generated models with XML deserializers that handle additionalProperties

```ts models interface BlobMetadata
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface BlobMetadata */
export interface BlobMetadata {
  /** Whether the blob metadata is encrypted. */
  encrypted?: string;
  /** Additional properties */
  additionalProperties?: Record<string, string>;
}
```

```ts models function blobMetadataXmlDeserializer
export function blobMetadataXmlDeserializer(xmlString: string): BlobMetadata {
  const properties: XmlPropertyDeserializeMetadata[] = [
    {
      propertyName: "encrypted",
      xmlOptions: { name: "Encrypted", attribute: true },
      type: "primitive",
    },
  ];
  return deserializeFromXml<BlobMetadata>(xmlString, properties, "BlobMetadata", undefined, undefined, {
    propertyName: "additionalProperties",
    excludeNames: ["Encrypted"],
  });
}
```

```ts models function blobMetadataXmlObjectDeserializer
export function blobMetadataXmlObjectDeserializer(
  xmlObject: Record<string, unknown>,
): BlobMetadata {
  const properties: XmlPropertyDeserializeMetadata[] = [
    {
      propertyName: "encrypted",
      xmlOptions: { name: "Encrypted", attribute: true },
      type: "primitive",
    },
  ];
  return deserializeXmlObject<BlobMetadata>(xmlObject, properties, {
    propertyName: "additionalProperties",
    excludeNames: ["Encrypted"],
  });
}
```

# Xml AdditionalProperties Serialization

Tests that XML serializers correctly handle models with additionalProperties (Record spread).
The XML serializer should spread additionalProperties entries as sibling XML elements.

## TypeSpec

```tsp
model BlobMetadata {
  /** Whether the blob metadata is encrypted. */
  @Xml.attribute
  @Xml.name("Encrypted")
  encrypted?: string;
  ...Record<string>;
}

@route("/blobs")
interface BlobOperations {
  /** Set blob metadata */
  @put setMetadata(@body body: BlobMetadata): void;
}
```

## Provide generated models with XML serializers that handle additionalProperties

```ts models function blobMetadataXmlSerializer
export function blobMetadataXmlSerializer(item: BlobMetadata): string {
  const properties: XmlPropertyMetadata[] = [
    {
      propertyName: "encrypted",
      xmlOptions: { name: "Encrypted", attribute: true },
      type: "primitive",
    },
  ];
  return serializeToXml(item, properties, "BlobMetadata", undefined, undefined, {
    propertyName: "additionalProperties",
    excludeNames: ["Encrypted"],
  });
}
```

```ts models function blobMetadataXmlObjectSerializer
export function blobMetadataXmlObjectSerializer(
  item: BlobMetadata,
): XmlSerializedObject {
  return {
    Encrypted: item["encrypted"],
    ...item["additionalProperties"],
  };
}
```
