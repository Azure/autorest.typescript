# Should generate samples for spread cases

The return type for an empty anonymous model `{}` should be Record<string, any>

## TypeSpec

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
  testHeader: string;

  @header
  optionalQuery?: string;

  @body
  body: BodyParameter;
}

@doc("show example demo")
op read(...CompositeRequest): void;
```

## Example

```json
{
  "title": "read",
  "operationId": "read",
  "parameters": {
    "name": "foo",
    "optionalQuery": "optional query",
    "testHeader": "xxx-header",
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
/**
 * This sample demonstrates how to show example demo
 *
 * @summary show example demo
 * x-ms-original-file: json.json
 */
async function read() {
  const client = new TestingClient();
  const result = await client.read(
    "foo",
    "xxx-header",
    { name: "body name" },
    {
      optionalQuery: "optional query"
    }
  );
  console.log(result);
}

async function main() {
  read();
}

main().catch(console.error);
```
