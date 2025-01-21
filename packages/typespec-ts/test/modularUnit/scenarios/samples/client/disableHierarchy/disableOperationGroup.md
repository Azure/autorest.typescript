# Should generate samples for disabled hierarchy client and disabled operation group

Will prompt all operations into top-level.

## TypeSpec

This is tsp definition.

```tsp
model A {
  prop1: string;
}

@route("b")
namespace B {
  model A {
    prop2: string;
  }
  interface C {
    op foo(@body body: A):  { @body body: {}};
  }
}

@route("/d")
interface D {
  op bar(@body body: A):  { @body body: {}};
}
```

This is the tspconfig.yaml.

```yaml
hierarchyClient: false
enableOperationGroup: false
```

## Provide examples and generated samples

Raw json files.

```json for bar
{
  "title": "bar",
  "operationId": "D_bar",
  "parameters": {
    "body": {
      "prop1": "body name"
    }
  },
  "responses": {
    "200": {}
  }
}
```

Generated samples.

```ts samples
/** This file path is /samples-dev/barSample.ts */
import { TestingClient } from "@azure/internal-test";

/**
 * This sample demonstrates how to execute bar
 *
 * @summary execute bar
 * x-ms-original-file: 2021-10-01-preview/json_for_bar.json
 */
async function bar() {
  const client = new TestingClient();
  const result = await client.bar({ prop1: "body name" });
  console.log(result);
}

async function main() {
  await bar();
}

main().catch(console.error);
```

Raw json files.

```json for foo
{
  "title": "foo",
  "operationId": "C_foo",
  "parameters": {
    "body": {
      "prop2": "body name"
    }
  },
  "responses": {
    "200": {}
  }
}
```

Generated samples.

```ts samples
/** This file path is /samples-dev/fooSample.ts */
import { TestingClient } from "@azure/internal-test";

/**
 * This sample demonstrates how to execute foo
 *
 * @summary execute foo
 * x-ms-original-file: 2021-10-01-preview/json_for_foo.json
 */
async function foo() {
  const client = new TestingClient();
  const result = await client.foo({ prop2: "body name" });
  console.log(result);
}

async function main() {
  await foo();
}

main().catch(console.error);
```
