# Should generate samples for enabled hierarchy client

Sample generation should handle hierarchy client successfully.

## TypeSpec

This is tsp definition.

```tsp
import "@typespec/http";
import "@typespec/rest";
import "@typespec/versioning";
import "@azure-tools/typespec-client-generator-core";
using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using Azure.ClientGenerator.Core;

@service(#{
  title: "Demo Service",
})
@versioned(Versions)
@useAuth(ApiKeyAuth<ApiKeyLocation.header, "api-key">)
namespace DemoService;

enum Versions {
  /** Version 2021-10-01-preview */
  `2021-10-01-preview`,
}
@route("b")
namespace Sub {
  @route("foo")
  op foo(): { @body body: {}};
  @route("bar")
  op bar(): { @body body: {}};
}

@client({
  name: "AClient",
  service: DemoService,
})
interface ClientA {
  foo is Sub.foo;
}


@client({
  name: "BClient",
  service: DemoService,
})
interface ClientB {
  bar is Sub.bar;
}
```

## Example

Raw json files.

```json for Sub_foo
{
  "title": "Sub_foo",
  "operationId": "Sub_foo",
  "parameters": {},
  "responses": {
    "200": {}
  }
}
```

## Samples

Generate samples for hierarchy cases:

```ts samples
/** This file path is /samples-dev/aClient/fooSample.ts */
import { AClient } from "@azure/internal-test";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to execute foo
 *
 * @summary execute foo
 * x-ms-original-file: 2021-10-01-preview/json_for_Sub_foo.json
 */
async function subFoo(): Promise<void> {
  const endpoint = process.env.ENDPOINT || "";
  const credential = new DefaultAzureCredential();
  const client = new AClient(endpoint, credential);
  const result = await client.foo();
  console.log(result);
}

async function main(): Promise<void> {
  await subFoo();
}

main().catch(console.error);
```
