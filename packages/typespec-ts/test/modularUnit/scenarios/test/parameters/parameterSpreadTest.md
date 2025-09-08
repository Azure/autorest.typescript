# Should generate tests for parameter spread

Test generation should create tests for operations using parameter spread, ensuring proper handling of the parameter order and spread syntax.

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

## Example and generated tests

Raw json files.

```json for read
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
    "200": {
      "body": {}
    }
  }
}
```

```ts tests readTest
/** This file path is /test/generated/readTest.spec.ts */

import { createRecorder } from "../public/utils/recordedClient.js";
import { TestingClient } from "../../src/index.js";
import { Recorder } from "@azure-tools/test-recorder";
import { assert, beforeEach, afterEach, it, describe } from "vitest";

describe("show example demo", () => {
  let recorder: Recorder;
  let client: TestingClient;

  beforeEach(async function (ctx) {
    recorder = await createRecorder(ctx);
    const clientOptions = recorder.configureClientOptions({});
    client = new TestingClient(clientOptions);
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("should show example demo for read", async function () {
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
    assert.ok(result);
  });
});
```
