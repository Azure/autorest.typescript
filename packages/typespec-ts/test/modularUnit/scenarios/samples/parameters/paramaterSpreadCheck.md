# Should generate samples for spread cases

Sample generation should handle operation-level parameter order successfully.

## TypeSpec

This is tsp definition.

```tsp
@doc("This is a simple model.")
model BodyParameter {
  name: string;
}
@doc("This is a model with all http request decorator.")
model CompositeRequest {
  @path
  name: string;

  @header
  requiredHeader: string; // required-header

  @header
  optionalHeader?: string;

  @query
  requiredQuery: string;

  @query
  @clientName("renamedOptional", "javascript")
  optionalQuery?: string;

  @body
  body: BodyParameter;
}

@doc("show example demo")
op read(...CompositeRequest): { @body body: {}};
```

## Example

Raw json files.

```json
{
  "title": "read",
  "operationId": "read",
  "parameters": {
    "name": "required path param",
    "optionalQuery": "renamed optional query",
    "required-header": "required header",
    "optional-header": "optional header",
    "requiredQuery": "required query",
    "body": {
      "name": "body name"
    }
  },
  "responses": {
    "200": {}
  }
}
```

## Samples

Generate samples for spread cases:

```ts samples
/** This file path is /samples-dev/readSample.ts */
import { TestingClient } from "@azure/internal-test";

/**
 * This sample demonstrates how to show example demo
 *
 * @summary show example demo
 * x-ms-original-file: 2021-10-01-preview/json.json
 */
async function read(): Promise<void> {
  const endpoint = process.env.ENDPOINT || "";
  const client = new TestingClient(endpoint);
  const result = await client.read(
    "required path param",
    "required header",
    "required query",
    { name: "body name" },
    {
      optionalHeader: "optional header",
      renamedOptional: "renamed optional query",
    },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await read();
}

main().catch(console.error);
```
