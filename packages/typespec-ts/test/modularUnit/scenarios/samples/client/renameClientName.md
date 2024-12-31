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
@service({
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
typespecTitleMap:
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
async function read() {
  const client = new TestServiceClient();
  const result = await client.read();
  console.log(result);
}

async function main() {
  read();
}

main().catch(console.error);
```
