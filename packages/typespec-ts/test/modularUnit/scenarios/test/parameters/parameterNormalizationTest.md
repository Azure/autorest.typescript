# Should generate tests for parameter normalization

Test generation should create tests for operations with parameters that require normalization, including uppercase parameter names that get normalized to camelCase.

## TypeSpec

This is tsp definition.

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

import { TestingClient } from "../../src/index.js";
import { createRecorder } from "./util/recordedClient.js";
import { Recorder } from "@azure-tools/test-recorder";
import { beforeEach, afterEach, it, describe } from "vitest";

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

  it("should show example demo for post", async function () {
    await client.post({
      listCredentialsRequest: { serviceName: "SSH", propertyName: "name" },
      queryParam: "query",
      headerParam: "header",
      pathParam: "path",
    });
    /* Test passes if no exception is thrown */
  });
});
```
