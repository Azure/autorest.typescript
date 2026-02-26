# Xml Error AdditionalProperties Deserialization

Tests that XML deserializers for error models (marked with `@error`) automatically include
additionalProperties config, even when the model does not explicitly spread a Record type.
This ensures unknown XML elements in error responses are captured during deserialization.

## TypeSpec

```tsp
@error
@mediaTypeHint("application/xml")
model StorageError {
  @Xml.name("Code") code?: string;
  @Xml.name("Message") message?: string;
}

model Widget {
  id: string;
  name: string;
}

@route("/widgets/{id}")
@get
op getWidget(@path id: string): Widget | StorageError;
```

## Provide generated models with XML deserializers that include additionalProperties for error models

```ts models function storageErrorXmlDeserializer
export function storageErrorXmlDeserializer(xmlString: string): StorageError {
  const properties: XmlPropertyDeserializeMetadata[] = [
    {
      propertyName: "code",
      xmlOptions: { name: "Code" },
      type: "primitive",
      primitiveSubtype: "string",
    },
    {
      propertyName: "message",
      xmlOptions: { name: "Message" },
      type: "primitive",
      primitiveSubtype: "string",
    },
  ];
  return deserializeFromXml<StorageError>(
    xmlString,
    properties,
    "StorageError",
    undefined,
    undefined,
    { propertyName: "additionalProperties", excludeNames: ["Code", "Message"] },
  );
}
```

```ts models function storageErrorXmlObjectDeserializer
export function storageErrorXmlObjectDeserializer(
  xmlObject: Record<string, unknown>,
): StorageError {
  const properties: XmlPropertyDeserializeMetadata[] = [
    {
      propertyName: "code",
      xmlOptions: { name: "Code" },
      type: "primitive",
      primitiveSubtype: "string",
    },
    {
      propertyName: "message",
      xmlOptions: { name: "Message" },
      type: "primitive",
      primitiveSubtype: "string",
    },
  ];
  return deserializeXmlObject<StorageError>(xmlObject, properties, {
    propertyName: "additionalProperties",
    excludeNames: ["Code", "Message"],
  });
}
```
