# XML Wrapped Array with Model Items and @Xml.name

Tests that the XML object serializer correctly wraps array items with the item element name
when the array item model has an `@Xml.name` decorator. This validates the fix for issue #3771
where the `<Field>` wrapper element was missing in serialized XML for nested models with arrays.

## TypeSpec

```tsp
/** Represents an Apache Arrow field. */
@Xml.name("Field")
model ArrowField {
  /** The arrow field type. */
  @Xml.name("Type") type: string;

  /** The arrow field name. */
  @Xml.name("Name") name?: string;

  /** The arrow field precision. */
  @Xml.name("Precision") precision?: int32;
}

/** Represents the Apache Arrow configuration. */
model ArrowConfiguration {
  /** The Apache Arrow schema */
  @Xml.name("Schema") schema: ArrowField[];
}

@route("/arrow")
interface ArrowOperations {
  /** Set arrow configuration */
  @put setConfig(@body body: ArrowConfiguration): void;

  /** Get arrow configuration */
  @get getConfig(): ArrowConfiguration;
}
```

## Provide generated models with correct XML object serializers

The key validation is that `arrowConfigurationXmlObjectSerializer` wraps array items
under the `"Field"` item element name within the `"Schema"` wrapper element, producing
the structure `{ "Schema": { "Field": [items...] } }` instead of `{ "Schema": [items...] }`.

```ts models interface ArrowField
/** Represents an Apache Arrow field. */
export interface ArrowField {
  /** The arrow field type. */
  type: string;
  /** The arrow field name. */
  name?: string;
  /** The arrow field precision. */
  precision?: number;
}
```

```ts models interface ArrowConfiguration
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Represents the Apache Arrow configuration. */
export interface ArrowConfiguration {
  /** The Apache Arrow schema */
  schema: ArrowField[];
}
```

```ts models function arrowFieldXmlObjectSerializer
export function arrowFieldXmlObjectSerializer(item: ArrowField): XmlSerializedObject {
  return { Type: item["type"], Name: item["name"], Precision: item["precision"] };
}
```

```ts models function arrowConfigurationXmlSerializer
export function arrowConfigurationXmlSerializer(item: ArrowConfiguration): string {
  const properties: XmlPropertyMetadata[] = [
    {
      propertyName: "schema",
      xmlOptions: { name: "Schema", itemsName: "Field" },
      type: "array",
      serializer: arrowFieldXmlObjectSerializer,
    },
  ];
  return serializeToXml(item, properties, "ArrowConfiguration");
}
```

```ts models function arrowConfigurationXmlObjectSerializer
export function arrowConfigurationXmlObjectSerializer(
  item: ArrowConfiguration,
): XmlSerializedObject {
  return { Schema: { Field: item["schema"]?.map((i: any) => arrowFieldXmlObjectSerializer(i)) } };
}
```

# XML Unwrapped Array with Model Items Serialization

Tests that the XML object serializer correctly handles unwrapped arrays of model items
in the serialization direction. Unwrapped items should appear as direct siblings using the item name.

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
  /** Set tags */
  @put setTags(@body body: BlobTags): void;
}
```

## Provide generated models with correct unwrapped array serializers

The key validation is that `blobTagsXmlObjectSerializer` uses the `itemsName` ("TagSet")
as the key for the unwrapped array, producing `{ "TagSet": [items...] }`.

```ts models interface BlobTag
/** A single tag */
export interface BlobTag {
  /** Tag key */
  key: string;
  /** Tag value */
  value: string;
}
```

```ts models interface BlobTags
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Container for tags */
export interface BlobTags {
  /** The tag set */
  blobTagSet: BlobTag[];
}
```

```ts models function blobTagXmlObjectSerializer
export function blobTagXmlObjectSerializer(item: BlobTag): XmlSerializedObject {
  return { Key: item["key"], Value: item["value"] };
}
```

```ts models function blobTagsXmlSerializer
export function blobTagsXmlSerializer(item: BlobTags): string {
  const properties: XmlPropertyMetadata[] = [
    {
      propertyName: "blobTagSet",
      xmlOptions: { name: "TagSet", unwrapped: true, itemsName: "TagSet" },
      type: "array",
      serializer: blobTagXmlObjectSerializer,
    },
  ];
  return serializeToXml(item, properties, "Tags");
}
```

```ts models function blobTagsXmlObjectSerializer
export function blobTagsXmlObjectSerializer(item: BlobTags): XmlSerializedObject {
  return { TagSet: item["blobTagSet"]?.map((i: any) => blobTagXmlObjectSerializer(i)) };
}
```
