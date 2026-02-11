# Inherited properties should be correctly mapped in sample generation

## TypeSpec

```tsp
model DocumentBase {
  documentType: string;
  Properties?: string[];
}

model ExceptionDocument extends DocumentBase {
  ExceptionType: string;
  ExceptionMessage: string;
}

model RequestModel{
    Documents:ExceptionDocument[];
}
@route("/documents")
interface Documents {
  @post
  publish(@body body: RequestModel): void;
}

```

Should ignore the warning `@azure-tools/typespec-ts/property-name-normalized`:

```yaml
mustEmptyDiagnostic: false
```

## Example

```json
{
  "title": "Publish Documents",
  "operationId": "Documents_publish",
  "parameters": {
    "body": {
      "Documents": [
        {
          "documentType": "Exception",
          "ExceptionType": "System.ArgumentNullException",
          "ExceptionMessage": "Value cannot be null",
          "Properties": ["stream-1", "stream-2"]
        }
      ]
    }
  }
}
```

## Samples

```ts samples
```
