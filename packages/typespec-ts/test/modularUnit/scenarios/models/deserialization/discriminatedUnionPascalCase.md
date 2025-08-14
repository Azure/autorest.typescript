# Should generate discriminated union with PascalCase discriminator property

Verify that discriminated union serializers use camelCase property names in switch statements even when the discriminator property in TypeSpec is PascalCase.

## TypeSpec

This TypeSpec definition has a PascalCase discriminator property.

```tsp
@discriminator("DocumentType")
model DocumentIngressUnion {
  DocumentType: DocumentType;
}

union DocumentType {
  string,
  "Request": "Request",
  "Response": "Response",
}

model Request extends DocumentIngressUnion {
  DocumentType: "Request";
  requestId: string;
}

model Response extends DocumentIngressUnion {
  DocumentType: "Response";
  responseId: string;
}

@route("/serialize")
interface D {
  @get op bar(): DocumentIngressUnion;
}
```

Should ignore the warning `@azure-tools/typespec-ts/property-name-normalized`:

```yaml
mustEmptyDiagnostic: false
```

## Provide generated models and its serializer

Generated Models.

```ts models
/** model interface DocumentIngressUnion */
export interface DocumentIngressUnion {
  documentType: DocumentType;
}

export function documentIngressUnionDeserializer(
  item: any,
): DocumentIngressUnion {
  return {
    documentType: item["DocumentType"],
  };
}

/** Alias for DocumentIngressUnionUnion */
export type DocumentIngressUnionUnion =
  | Request
  | Response
  | DocumentIngressUnion;

export function documentIngressUnionUnionDeserializer(
  item: any,
): DocumentIngressUnionUnion {
  switch (item.documentType) {
    case "Request":
      return requestDeserializer(item as Request);

    case "Response":
      return responseDeserializer(item as Response);

    default:
      return documentIngressUnionDeserializer(item);
  }
}

/** Type of DocumentType */
export type DocumentType = "Request" | "Response";

/** model interface Request */
export interface Request extends DocumentIngressUnion {
  documentType: "Request";
  requestId: string;
}

export function requestDeserializer(item: any): Request {
  return {
    documentType: item["DocumentType"],
    requestId: item["requestId"],
  };
}

/** model interface Response */
export interface Response extends DocumentIngressUnion {
  documentType: "Response";
  responseId: string;
}

export function responseDeserializer(item: any): Response {
  return {
    documentType: item["DocumentType"],
    responseId: item["responseId"],
  };
}
```