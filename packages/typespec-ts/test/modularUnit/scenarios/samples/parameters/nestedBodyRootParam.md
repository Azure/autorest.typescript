# Should generate correct sample for nested @bodyRoot parameter

When a body parameter uses `@bodyRoot` nested inside a wrapper, the sample should
use the wrapper parameter name and nest the body value inside the property structure.

## TypeSpec

This is tsp definition.

```tsp
@doc("Request parameters for stop action.")
model StopParameters {
  @doc("The link index.")
  linkIndex: string;
  @doc("The category.")
  category: string;
}

@doc("Stop with nested body root.")
op stop(@path name: string, body: { @bodyRoot stopParameters: StopParameters }): {
  @body body: {};
};
```

## Example

Raw json files.

```json
{
  "title": "stop",
  "operationId": "stop",
  "parameters": {
    "name": "testResource",
    "stopParameters": {
      "linkIndex": "link1",
      "category": "TestCategory"
    }
  },
  "responses": {
    "200": {}
  }
}
```

## Samples

Generate correct sample with nested body root parameter:

```ts samples
/** This file path is /samples-dev/stopSample.ts */
import { TestingClient } from "@azure/internal-test";

/**
 * This sample demonstrates how to stop with nested body root.
 *
 * @summary stop with nested body root.
 * x-ms-original-file: 2021-10-01-preview/json.json
 */
async function stop(): Promise<void> {
  const endpoint = process.env.TESTING_ENDPOINT || "";
  const client = new TestingClient(endpoint);
  const result = await client.stop("testResource", {
    stopParameters: { linkIndex: "link1", category: "TestCategory" },
  });
  console.log(result);
}

async function main(): Promise<void> {
  await stop();
}

main().catch(console.error);
```
