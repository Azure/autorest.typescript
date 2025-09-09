# Should rename client name in samples

Should generate fake api key credential in non-azure client.

## TypeSpec

This is tsp definition.

```tsp
import "@typespec/http";
import "@typespec/rest";
import "@typespec/versioning";
using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
@service(#{
  title: "Demo Service",
})
@versioned(Versions)
namespace DemoService;

enum Versions {
  /** Version 2021-10-01-preview */
  `2021-10-01-preview`,
}

@doc("show example demo")
op read(name: string):  { @body body: {}};
```

The config would be like:

```yaml
typespec-title-map:
  DemoServiceClient: TestServiceClient
```

## Example

Raw json files.

```json for read
{
  "title": "read",
  "operationId": "read",
  "parameters": {
    "readRequest": {
      "name": "test"
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
/** This file path is /samples-dev/readSample.ts */
import { TestServiceClient } from "@azure/internal-test";

/**
 * This sample demonstrates how to show example demo
 *
 * @summary show example demo
 * x-ms-original-file: 2021-10-01-preview/json_for_read.json
 */
async function read(): Promise<void> {
  const client = new TestServiceClient();
  const result = await client.read();
  console.log(result);
}

async function main(): Promise<void> {
  await read();
}

main().catch(console.error);
```

## Generated tests

```ts tests
/** This file path is /test/generated/readTest.spec.ts */

import { TestServiceClient } from "../../src/index.js";
import { createRecorder } from "./util/recordedClient.js";
import { Recorder } from "@azure-tools/test-recorder";
import { assert, beforeEach, afterEach, it, describe } from "vitest";

describe("show example demo", () => {
  let recorder: Recorder;
  let client: TestServiceClient;

  beforeEach(async function (ctx) {
    recorder = await createRecorder(ctx);
    const clientOptions = recorder.configureClientOptions({});
    client = new TestServiceClient(clientOptions);
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("should show example demo for read", async function () {
    const result = await client.read();
    assert.ok(result);
  });
});
```
