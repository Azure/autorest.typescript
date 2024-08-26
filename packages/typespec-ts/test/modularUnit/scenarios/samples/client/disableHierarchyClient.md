# Should generate samples for disabled hierarchy client

Sample generation should handle hierarchy client successfully.

## TypeSpec

This is tsp definition.

```tsp
model A {
  prop1: string;
}

@route("b")
namespace B {
  @route("e")
  namespace E {
    model A {
      prop3: string;
    }
    interface C {
      op opBEC(@body body: A): void
    }
  }
  op opB(@body body: A): void;
}

@route("/d")
interface D {
  @doc("show example opD")
  op opD(@body body: A): void;
}
@doc("show example opTopLevel")
op opTopLevel(@body body: A): void;
```

This is the tspconfig.yaml.

```yaml
hierarchyClient: false
```

## Example

Raw json files.

```json for opTopLevel
{
  "title": "opTopLevel",
  "operationId": "opTopLevel",
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

```json for opD
{
  "title": "opD",
  "operationId": "D_opD",
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

```json for opBEC
{
  "title": "opBEC",
  "operationId": "C_opBEC",
  "parameters": {
    "body": {
      "prop3": "body name"
    }
  },
  "responses": {
    "200": {}
  }
}
```

## Samples

Generate samples for non-hierarchy cases:

```ts samples
import { TestingClient } from "@azure/internal-test";

/**
 * This sample demonstrates how to show example opTopLevel
 *
 * @summary show example opTopLevel
 * x-ms-original-file: 2021-10-01-preview/json_for_opTopLevel.json
 */
async function opTopLevel() {
  const client = new TestingClient();
  const result = await client.opTopLevel({ prop1: "body name" });
  console.log(result);
}

async function main() {
  opTopLevel();
}

main().catch(console.error);

import { TestingClient } from "@azure/internal-test";

/**
 * This sample demonstrates how to undefined
 *
 * @summary undefined
 * x-ms-original-file: 2021-10-01-preview/json_for_opBEC.json
 */
async function opBEC() {
  const client = new TestingClient();
  const result = await client.c.opBEC({ prop3: "body name" });
  console.log(result);
}

async function main() {
  opBEC();
}

main().catch(console.error);

import { TestingClient } from "@azure/internal-test";

/**
 * This sample demonstrates how to show example opD
 *
 * @summary show example opD
 * x-ms-original-file: 2021-10-01-preview/json_for_opD.json
 */
async function opD() {
  const client = new TestingClient();
  const result = await client.d.opD({ prop1: "body name" });
  console.log(result);
}

async function main() {
  opD();
}

main().catch(console.error);
```
