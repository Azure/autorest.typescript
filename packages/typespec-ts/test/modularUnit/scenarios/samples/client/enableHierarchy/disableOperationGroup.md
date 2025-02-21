# Should generate samples for enabled hierarchy client but disabled operation group

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
      op opBEC(@body body: A):  { @body body: {}};
    }
  }
  op opB(@body body: A):  { @body body: {}};
}

@route("/d")
interface D {
  @doc("show example opD")
  op opD(@body body: A): { @body body: {}};
}
@doc("show example opTopLevel")
op opTopLevel(@body body: A):  { @body body: {}};
```

This is the tspconfig.yaml.

```yaml
hierarchy-client: true
enable-operation-group: false
```

## Provided examples and generated samples

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

Generated samples.

```ts samples
/** This file path is /samples-dev/opTopLevelSample.ts */
import { TestingClient } from "@azure/internal-test";

/**
 * This sample demonstrates how to show example opTopLevel
 *
 * @summary show example opTopLevel
 * x-ms-original-file: 2021-10-01-preview/json_for_opTopLevel.json
 */
async function opTopLevel(): Promise<void> {
  const client = new TestingClient();
  const result = await client.opTopLevel({ prop1: "body name" });
  console.log(result);
}

async function main(): Promise<void> {
  await opTopLevel();
}

main().catch(console.error);
```

Raw json files.

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

Generated samples.

```ts samples
/** This file path is /samples-dev/opDSample.ts */
import { TestingClient } from "@azure/internal-test";

/**
 * This sample demonstrates how to show example opD
 *
 * @summary show example opD
 * x-ms-original-file: 2021-10-01-preview/json_for_opD.json
 */
async function opD(): Promise<void> {
  const client = new TestingClient();
  const result = await client.opD({ prop1: "body name" });
  console.log(result);
}

async function main(): Promise<void> {
  await opD();
}

main().catch(console.error);
```

Raw json files.

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

Generated samples.

```ts samples
/** This file path is /samples-dev/opBECSample.ts */
import { TestingClient } from "@azure/internal-test";

/**
 * This sample demonstrates how to execute opBEC
 *
 * @summary execute opBEC
 * x-ms-original-file: 2021-10-01-preview/json_for_opBEC.json
 */
async function opBEC(): Promise<void> {
  const client = new TestingClient();
  const result = await client.opBEC({ prop3: "body name" });
  console.log(result);
}

async function main(): Promise<void> {
  await opBEC();
}

main().catch(console.error);
```
