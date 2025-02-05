# Should generate fake api key credential in non-azure client

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
@useAuth(ApiKeyAuth<ApiKeyLocation.header, "api-key">)
namespace DemoService;

enum Versions {
  /** Version 2021-10-01-preview */
  `2021-10-01-preview`,
}

@doc("show example demo")
op read(name: string):  { @body body: {}};
```

This is the tspconfig.yaml.

```yaml
flavor: "demo"
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
import { DemoServiceClient } from "@azure/internal-test";

/**
 * This sample demonstrates how to show example demo
 *
 * @summary show example demo
 * x-ms-original-file: 2021-10-01-preview/json_for_read.json
 */
async function read(): Promise<void> {
  const credential = { key: "INPUT_YOUR_KEY_HERE" };
  const client = new DemoServiceClient(credential);
  const result = await client.read();
  console.log(result);
}

async function main(): Promise<void> {
  await read();
}

main().catch(console.error);
```
