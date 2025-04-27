# generate empty operation for classic client

## TypeSpec

```tsp
model Test {
  @query
  "api-version": string;
}
model Foo {
    id: string;
}
op test(): string;
```

## models

```ts models
// (file was not generated)
```

## classicClient

```ts classicClient
import { TestOptionalParams } from "./api/options.js";
import { test } from "./api/operations.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { TestingClientOptionalParams } from "./api/testingContext.js";

export class TestingClient {
  private _client: TestingContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    options: TestingClientOptionalParams = {}
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createTesting(endpointParam, {
      ...options,
      userAgentOptions: { userAgentPrefix }
    });
    this.pipeline = this._client.pipeline;
  }

  test(options: TestOptionalParams = { requestOptions: {} }): Promise<string> {
    return test(this._client, options);
  }
}
```
