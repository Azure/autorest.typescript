# only: Should support property flatten with required `properties` for sample input

Should support property flatten with required `properties` and its model includes optional and required properties.

## TypeSpec

This is tsp definition.

```tsp
model A {
  x: string;
}
model FooProperties {
  bar?: A[];
  baz: A[];
}

@doc("This is a simple model.")
model BodyParameter {
  name: string;

  @Azure.ClientGenerator.Core.Legacy.flattenProperty
  properties: FooProperties;
}

@doc("show example demo")
op read(@body widget?: BodyParameter): void;
```

Enable the raw content with TCGC dependency.

```yaml
needArmTemplate: true
withVersionedApiVersion: true
needTCGC: true
```

## Example

Raw json files.

```json
{
  "title": "read",
  "operationId": "read",
  "parameters": {
    "widget": {
      "name": "body name",
      "properties": {
        "baz": [
          {
            "x": "bbb"
          }
        ],
        "bar": [
          {
            "x": "xx"
          }
        ]
      }
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
async function read(): Promise<void> {
  const endpoint = process.env.TESTING_ENDPOINT || "";
  const client = new TestingClient(endpoint);
  await client.read({ widget: { name: "body name", baz: [{ x: "bbb" }], bar: [{ x: "xx" }] } });
}

async function main(): Promise<void> {
  await read();
}

main().catch(console.error);
```
