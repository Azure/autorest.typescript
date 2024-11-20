# handle with no default values in server

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";

using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using Azure.Core;
using Azure.Core.Traits;

@server(
  "{endpoint}/client/structure/{client}",
  "",
  {
    @doc("Need to be set as 'http://localhost:3000' in client.")
    endpoint: url,

    @doc("Need to be set as 'default', 'multi-client', 'renamed-operation', 'two-operation-group' in client.")
    client: ClientType = ClientType.Default,
  }
)
@service({
  title: "MultiClient"
})
@versioned(Client.Structure.Service.Versions)
namespace Client.Structure.Service;

enum Versions {
  /** Version 2022-08-31 */
  @useDependency(Azure.Core.Versions.v1_0_Preview_2)
  \`2022-08-30\`,
}

enum ClientType {
  Default: "default",
  MultiClient: "multi-client",
  RenamedOperation: "renamed-operation",
  TwoOperationGroup: "two-operation-group",
}

@route("/one")
@post
op one(): void;
```

```yaml
withRawContent: true
```

## clientContext

```ts clientContext

```

# handle with default values in server

## TypeSpec

```tsp
import "@typespec/http";
import "@typespec/rest";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";

using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using Azure.Core;
using Azure.Core.Traits;

@server(
  "{endpoint}/client/structure/{client}",
  "",
  {
    @doc("Need to be set as 'http://localhost:3000' in client.")
    endpoint: url = "http://localhost:3000",

    @doc("Need to be set as 'default', 'multi-client', 'renamed-operation', 'two-operation-group' in client.")
    client: ClientType = ClientType.Default,
  }
)
@service({
  title: "MultiClient"
})
@versioned(Client.Structure.Service.Versions)
namespace Client.Structure.Service;

enum Versions {
  /** Version 2022-08-31 */
  @useDependency(Azure.Core.Versions.v1_0_Preview_2)
  \`2022-08-30\`,
}

enum ClientType {
  Default: "default",
  MultiClient: "multi-client",
  RenamedOperation: "renamed-operation",
  TwoOperationGroup: "two-operation-group",
}

@route("/one")
@post
op one(): void;
```

```yaml
withRawContent: true
```

## clientContext

```ts clientContext

```
