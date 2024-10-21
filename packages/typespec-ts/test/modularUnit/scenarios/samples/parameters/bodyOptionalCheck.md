# skip: Should generate optional body in option parameter

Should generate optional body in option parameter.

// FIXME: issue tracked: https://github.com/Azure/autorest.typescript/issues/2827

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

  @query
  requiredQuery: string;

  @query
  optionalQuery?: string;

  @body
  body?: BodyParameter;
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

Generate optional body in option parameter:

```ts samples
/** This file path is /samples-dev/readSample.ts */
import { TestingClient } from "@azure/internal-test";

/**
 * This sample demonstrates how to show example demo
 *
 * @summary show example demo
 * x-ms-original-file: 2021-10-01-preview/json.json
 */
async function read() {
  const client = new TestingClient();
  const result = await client.read("required path param", "required query", {
    body: { name: "body name" },
    optionalQuery: "renamed optional query"
  });
  console.log(result);
}

async function main() {
  read();
}

main().catch(console.error);
```
