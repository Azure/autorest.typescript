# XML Arrays with Typed Items

Tests that XML serializers and deserializers correctly include `itemType` and `dateEncoding`
metadata for arrays of bytes and dates to ensure proper serialization/deserialization.

## TypeSpec

```tsp
@encode(BytesKnownEncoding.base64)
scalar base64Bytes extends bytes;

/** A block lookup list with arrays of base64 encoded block IDs */
@Xml.name("BlockList")
model BlockLookupList {
  /** The committed blocks */
  @Xml.unwrapped
  @Xml.name("Committed")
  committed?: base64Bytes[];

  /** The uncommitted blocks */
  @Xml.unwrapped
  @Xml.name("Uncommitted")
  uncommitted?: base64Bytes[];

  /** The latest blocks */
  @Xml.unwrapped
  @Xml.name("Latest")
  latest?: base64Bytes[];
}

@route("/blocks")
interface BlockOperations {
  /** Submit block list */
  @put putBlocks(@body body: BlockLookupList): void;
}
```

## Provide generated models with XML serializers that include itemType for bytes arrays

The key validation here is that:

1. `blockLookupListXmlSerializer` includes `itemType: "bytes"` for each array property
2. The runtime will use this metadata to properly base64-encode each `Uint8Array` item

```ts models interface BlockLookupList
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** A block lookup list with arrays of base64 encoded block IDs */
export interface BlockLookupList {
  /** The committed blocks */
  committed?: Uint8Array[];
  /** The uncommitted blocks */
  uncommitted?: Uint8Array[];
  /** The latest blocks */
  latest?: Uint8Array[];
}
```

```ts models function blockLookupListXmlSerializer
export function blockLookupListXmlSerializer(item: BlockLookupList): string {
  const properties: XmlPropertyMetadata[] = [
    {
      propertyName: "committed",
      xmlOptions: { name: "Committed", unwrapped: true, itemsName: "Committed" },
      type: "array",
      bytesEncoding: "base64",
      itemType: "bytes",
    },
    {
      propertyName: "uncommitted",
      xmlOptions: { name: "Uncommitted", unwrapped: true, itemsName: "Uncommitted" },
      type: "array",
      bytesEncoding: "base64",
      itemType: "bytes",
    },
    {
      propertyName: "latest",
      xmlOptions: { name: "Latest", unwrapped: true, itemsName: "Latest" },
      type: "array",
      bytesEncoding: "base64",
      itemType: "bytes",
    },
  ];
  return serializeToXml(item, properties, "BlockList");
}
```

# XML Arrays with Date Items

Tests that XML serializers correctly include `itemType` and `dateEncoding` for arrays of dates.

## TypeSpec

```tsp
/** RFC7231-encoded datetime scalar */
@encode(DateTimeKnownEncoding.rfc7231)
scalar rfc7231DateTime extends utcDateTime;

/** A model with arrays of dates using different encodings */
model DateArraysModel {
  /** Timestamps in RFC3339 format (default) */
  @Xml.name("Timestamps")
  timestamps?: utcDateTime[];

  /** Timestamps in RFC7231 format */
  @Xml.name("HttpDates")
  httpDates?: rfc7231DateTime[];
}

@route("/dates")
interface DateOperations {
  /** Submit dates */
  @put putDates(@body body: DateArraysModel): void;
  /** Get dates */
  @get getDates(): DateArraysModel;
}
```

## Provide generated models with XML serializers that include itemType for date arrays

```ts models interface DateArraysModel
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** A model with arrays of dates using different encodings */
export interface DateArraysModel {
  /** Timestamps in RFC3339 format (default) */
  timestamps?: Date[];
  /** Timestamps in RFC7231 format */
  httpDates?: Date[];
}
```

```ts models function dateArraysModelXmlSerializer
export function dateArraysModelXmlSerializer(item: DateArraysModel): string {
  const properties: XmlPropertyMetadata[] = [
    {
      propertyName: "timestamps",
      xmlOptions: { name: "Timestamps", itemsName: "utcDateTime" },
      type: "array",
      dateEncoding: "rfc3339",
      itemType: "date",
    },
    {
      propertyName: "httpDates",
      xmlOptions: { name: "HttpDates", itemsName: "rfc7231DateTime" },
      type: "array",
      dateEncoding: "rfc7231",
      itemType: "date",
    },
  ];
  return serializeToXml(item, properties, "DateArraysModel");
}
```

```ts models function dateArraysModelXmlDeserializer
export function dateArraysModelXmlDeserializer(xmlString: string): DateArraysModel {
  const properties: XmlPropertyDeserializeMetadata[] = [
    {
      propertyName: "timestamps",
      xmlOptions: { name: "Timestamps", itemsName: "utcDateTime" },
      type: "array",
      dateEncoding: "rfc3339",
      itemType: "date",
    },
    {
      propertyName: "httpDates",
      xmlOptions: { name: "HttpDates", itemsName: "rfc7231DateTime" },
      type: "array",
      dateEncoding: "rfc7231",
      itemType: "date",
    },
  ];
  return deserializeFromXml<DateArraysModel>(xmlString, properties, "DateArraysModel");
}
```
