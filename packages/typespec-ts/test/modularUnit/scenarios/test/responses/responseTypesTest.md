# Should generate tests for response type assertions

Test generation should create tests for operations with response types, ensuring proper assertions are generated.

## TypeSpec

This is tsp definition.

```tsp
model FooResponse {
  id: string;
  name: string;
  value?: int32;
}

@doc("get foo")
op getFoo(): FooResponse;
```

## Example and generated tests

Raw json files.

```json for getFoo
{
  "title": "getFoo",
  "operationId": "getFoo",
  "parameters": {},
  "responses": {
    "200": {
      "body": {
        "id": "foo-id",
        "name": "foo-name",
        "value": 42
      }
    }
  }
}
```

```ts tests getFooTest
/** This file path is /test/generated/getFooTest.spec.ts */

import { TestingClient } from "../../src/index.js";
import { createRecorder } from "./util/recordedClient.js";
import { Recorder } from "@azure-tools/test-recorder";
import { assert, beforeEach, afterEach, it, describe } from "vitest";

describe("get foo", () => {
  let recorder: Recorder;
  let client: TestingClient;

  beforeEach(async function (ctx) {
    recorder = await createRecorder(ctx);
    const endpoint = process.env.TESTING_ENDPOINT || "";
    const clientOptions = recorder.configureClientOptions({});
    client = new TestingClient(endpoint, clientOptions);
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("should get foo for getFoo", async function () {
    const result = await client.getFoo();
    assert.ok(result);
    assert.strictEqual(result.id, "foo-id");
    assert.strictEqual(result.name, "foo-name");
    assert.strictEqual(result.value, 42);
  });
});
```
