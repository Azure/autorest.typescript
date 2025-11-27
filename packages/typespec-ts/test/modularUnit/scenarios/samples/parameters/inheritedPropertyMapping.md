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
/** This file path is /samples-dev/publishSample.ts */
import { TestingClient } from "@azure/internal-test";

/**
 * This sample demonstrates how to execute publish
 *
 * @summary execute publish
 * x-ms-original-file: 2021-10-01-preview/json.json
 */
async function publishDocuments(): Promise<void> {
  const endpoint = process.env.TESTING_ENDPOINT || "";
  const client = new TestingClient(endpoint);
  await client.publish({
    documents: [
      {
        documentType: "Exception",
        exceptionType: "System.ArgumentNullException",
        exceptionMessage: "Value cannot be null",
        properties: ["stream-1", "stream-2"],
      },
    ],
  });
}

async function main(): Promise<void> {
  await publishDocuments();
}

main().catch(console.error);
```
