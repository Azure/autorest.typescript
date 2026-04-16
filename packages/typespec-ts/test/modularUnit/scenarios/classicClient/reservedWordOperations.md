# should generate reserved words operation with prefix $ for classicClient

## TypeSpec

```tsp
op continue(): void;
```

## classicClient

```ts classicClient
import { $continue } from "./api/operations.js";
import { ContinueOptionalParams } from "./api/options.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export type { TestingClientOptionalParams } from "./api/testingContext.js";

export class TestingClient {
  private _client: TestingContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(endpointParam: string, options: TestingClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createTesting(endpointParam, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  continue(options: ContinueOptionalParams = { requestOptions: {} }): Promise<void> {
    return $continue(this._client, options);
  }
}
```
