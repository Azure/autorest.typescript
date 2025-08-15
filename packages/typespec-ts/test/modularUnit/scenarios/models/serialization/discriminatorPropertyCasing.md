# Should generate correct serializer for discriminator property with casing conversion

Should ingore the warning `@azure-tools/typespec-ts/property-name-normalized`:

```yaml
mustEmptyDiagnostic: false
```

Will ensure discriminated union serializers use the correct property names when TypeSpec property names are converted from PascalCase to camelCase.

## TypeSpec

This is tsp definition.

```tsp
@doc("Document type")
union DocumentType {
  string,
  Request: "Request",
  RemoteDependency: "RemoteDependency",
  Exception: "Exception",
  Event: "Event",
  Trace: "Trace",
  Unknown: "Unknown",
}

@discriminator("DocumentType")
model DocumentIngress {
  DocumentType: DocumentType;
  DocumentStreamIds?: string[];
  Properties?: string[];
}

model Request extends DocumentIngress {
  DocumentType: DocumentType.Request;
  Name?: string;
  Url?: string;
}

model Exception extends DocumentIngress {
  DocumentType: DocumentType.Exception;
  ExceptionType?: string;
  ExceptionMessage?: string;
}

@route("/documents")
interface DocumentService {
  op processDocument(@body body: DocumentIngress): void;
}
```

## Provide generated models and its serializer

Generated Models.

```ts models
/** model interface DocumentIngress */
export interface DocumentIngress {
  documentType: DocumentType;
  documentStreamIds?: string[];
  properties?: string[];
}

export function documentIngressSerializer(item: DocumentIngress): any {
  return {
    DocumentType: item["documentType"],
    DocumentStreamIds: !item["documentStreamIds"]
      ? item["documentStreamIds"]
      : item["documentStreamIds"].map((p: any) => {
          return p;
        }),
    Properties: !item["properties"]
      ? item["properties"]
      : item["properties"].map((p: any) => {
          return p;
        }),
  };
}

/** Alias for DocumentIngressUnion */
export type DocumentIngressUnion = Request | Exception | DocumentIngress;

export function documentIngressUnionSerializer(
  item: DocumentIngressUnion,
): any {
  switch (item.documentType) {
    case "Request":
      return requestSerializer(item as Request);

    case "Exception":
      return exceptionSerializer(item as Exception);

    default:
      return documentIngressSerializer(item);
  }
}

/** Document type */
export type DocumentType =
  | "Request"
  | "RemoteDependency"
  | "Exception"
  | "Event"
  | "Trace"
  | "Unknown";

/** model interface Request */
export interface Request extends DocumentIngress {
  documentType: "Request";
  name?: string;
  url?: string;
}

export function requestSerializer(item: Request): any {
  return {
    DocumentType: item["documentType"],
    DocumentStreamIds: !item["documentStreamIds"]
      ? item["documentStreamIds"]
      : item["documentStreamIds"].map((p: any) => {
          return p;
        }),
    Properties: !item["properties"]
      ? item["properties"]
      : item["properties"].map((p: any) => {
          return p;
        }),
    Name: item["name"],
    Url: item["url"],
  };
}

/** model interface Exception */
export interface Exception extends DocumentIngress {
  documentType: "Exception";
  exceptionType?: string;
  exceptionMessage?: string;
}

export function exceptionSerializer(item: Exception): any {
  return {
    DocumentType: item["documentType"],
    DocumentStreamIds: !item["documentStreamIds"]
      ? item["documentStreamIds"]
      : item["documentStreamIds"].map((p: any) => {
          return p;
        }),
    Properties: !item["properties"]
      ? item["properties"]
      : item["properties"].map((p: any) => {
          return p;
        }),
    ExceptionType: item["exceptionType"],
    ExceptionMessage: item["exceptionMessage"],
  };
}
```
