# Should generate tests for body required parameter

Test generation should create tests for operations with required body parameters, ensuring the parameter is properly handled in the test.

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

import { Recorder } from "@azure-tools/test-recorder";
import { createRecorder } from "../public/utils/recordedClient.js";
import { assert } from "chai";
import { Context } from "mocha";
import { TestingClient } from "@azure/internal-test";

describe("show example demo", () => {
  let recorder: Recorder;

  beforeEach(async function (this: Context) {
    recorder = await createRecorder(this);
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("should show example demo for read", async function () {
    const client = new TestingClient();
    const result = await client.read(
      "required path param",
      "required query",
      { name: "body name" },
      { optionalQuery: "renamed optional query" }
    );
    assert.ok(result);
  });
});
```
