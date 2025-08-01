# handle with title config for classic client

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

@service(#{
  title: "MultiClient"
})
@versioned(Client.Structure.Service.Versions)
namespace Client.Structure.Service;

enum Versions {
  /** Version 2022-08-31 */
  @useDependency(Azure.Core.Versions.v1_0_Preview_2)
  `2022-08-30`,
}

op foo(): void;
```

The config would be like:

```yaml
typespec-title-map:
  ServiceClient: TestServiceClient
withRawContent: true
ignoreWeirdLine: false
```

## classicClient

```ts classicClient
import { foo } from "./api/operations.js";
import { FooOptionalParams } from "./api/options.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { TestServiceClientOptionalParams } from "./api/testServiceContext.js";

export class TestServiceClient {
  private _client: TestServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    options: TestServiceClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createTestService(endpointParam, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  foo(options: FooOptionalParams = { requestOptions: {} }): Promise<void> {
    return foo(this._client, options);
  }
}
```
