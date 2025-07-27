# Should generate tests for parameter normalization

Test generation should create tests for operations with parameters that require normalization, including uppercase parameter names that get normalized to camelCase.

This test references the TypeSpec and examples from samples/parameters/parameterNormalization.md to validate that test generation handles parameter name normalization correctly.

## TypeSpec

This is tsp definition from samples/parameters/parameterNormalization.md.

```tsp
model ListCredentialsRequest{
  serviceName: string;
  PROPERTY_NAME: string;
}

@doc("show example demo")
op post(@query QUERY_PARAM?: string, @header HEADER_PARAM?: string,@path PATH_PARAM?: string, @body ListCredentialsRequest?: ListCredentialsRequest): void;
```

## Example and generated tests

Raw json files.

```json for post
{
  "title": "post",
  "operationId": "post",
  "parameters": {
    "QUERY_PARAM": "query",
    "header_param": "header",
    "PATH_PARAM": "path",
    "ListCredentialsRequest": {
      "serviceName": "SSH",
      "PROPERTY_NAME": "name"
    }
  },
  "responses": {
    "204": {}
  }
}
```

```ts tests postTest
/** This file path is /test/generated/postTest.spec.ts */

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

  it("should show example demo for post", async function () {
    const client = new TestingClient();
    await client.post({
      ListCredentialsRequest: { serviceName: "SSH", PROPERTY_NAME: "name" },
      queryParam: "query",
      headerParam: "header",
      pathParam: "path",
    });
    /* Test passes if no exception is thrown */
  });
});
```