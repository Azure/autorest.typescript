# skip: Should generate samples for parameterized host client

// FIXME: issue tracked in tcgc: https://github.com/Azure/typespec-azure/issues/1419

Sample generation should handle parameterized host client successfully.

## TypeSpec

This is tsp definition.

```tsp
import "@typespec/rest";
import "@typespec/versioning";
import "@typespec/openapi";
import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-autorest";

using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using Azure.Core;
using OpenAPI;

@service(#{title: "ParametrizedHost"})
@useAuth(OAuth2Auth<[MyFlow]>)
@versioned(Versions)
@server(
  "{host}.{subdomain}.{sufix}.com",
  "Confidential Ledger Service",
  {
    @path
    host?: string = "one",
    @path
    subdomain?: string = "two",
    @path
    sufix?: string = "three",
  }
)
namespace Azure.Test.ParametrizedHost;

/** The Contoso Widget Manager service version. */
enum Versions {
  /** Version 2021-10-01-preview */
  
  `2021-10-01-preview`,
}

model MyFlow {
  type: OAuth2FlowType.implicit;
  authorizationUrl: "https://login.microsoftonline.com/common/v2.0/oauth2/authorize";
  tokenUrl: "https://login.microsoftonline.com/common/v2.0/oauth2/token";
  scopes: ["https://parametrized-host.azure.com/.default"];
}

@resource("collections")
@doc("Identifier for collections.")
model Collection {
  @key
  @visibility(Lifecycle.Read)
  collectionId: string;
}

@route("/app")
namespace ConfidentialLedger {
  @summary("Retrieves a list of collection ids present in the Confidential Ledger")
  @doc("Collection ids are user-created collections of ledger entries")
  op listCollections is Azure.Core.Foundations.NonPagedResourceList<Collection>;
}
```

## Example

Raw json files.

```json for listCollections
{
  "title": "listCollections",
  "operationId": "ConfidentialLedger_listCollections",
  "parameters": {
    "host": "one",
    "subdomain": "two",
    "sufix": "three",
    "apiVersion": "v1"
  },
  "responses": {
    "200": {}
  }
}
```

## Samples

Generate samples for parameterized host cases:

```ts samples
import { ParametrizedHostClient } from "@azure/internal-test";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to retrieves a list of collection ids present in the Confidential Ledger
 *
 * @summary retrieves a list of collection ids present in the Confidential Ledger
 * x-ms-original-file: 2021-10-01-preview/json_for_listCollections.json
 */
async function listCollections() {
  const credential = new DefaultAzureCredential();
  const client = new ParametrizedHostClient(credential);
  const result = await client.confidentialLedger.listCollections();
  console.log(result);
}

async function main() {
  listCollections();
}

main().catch(console.error);
```
