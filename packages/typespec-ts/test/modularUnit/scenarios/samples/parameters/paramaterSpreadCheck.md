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
  requiredHeader: string; // requiredHeader

  @header
  optionalHeader?: string;

  @query
  requiredQuery: string;

  @query
  optionalQuery?: string;

  @body
  body: BodyParameter;
}

@doc("show example demo")
op read(...CompositeRequest): void;
```

## Example

Raw json files.

```json
{
  "title": "read",
  "operationId": "read",
  "parameters": {
    "name": "required path param",
    "optionalQuery": "optional query",
    "requiredHeader": "required header",
    "optionalHeader": "optional header",
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
import { TestingClient } from "@azure/internal-test";

/**
 * This sample demonstrates how to show example demo
 *
 * @summary show example demo
 * x-ms-original-file: 2021-10-01-preview/json.json
 */
async function read() {
  const client = new TestingClient();
  const result = await client.read(
    "required path param",
    "required header",
    "required query",
    { name: "body name" },
    { optionalHeader: "optional header", optionalQuery: "optional query" },
  );
  console.log(result);
}

async function main() {
  read();
}

main().catch(console.error);
```
