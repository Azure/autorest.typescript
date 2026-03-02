# Should ignore cookie parameters for now

// TODO: https://github.com/Azure/autorest.typescript/issues/2898

## TypeSpec

This is tsp definition.

```tsp
op test(@cookie token: string): string;
```

Should ingore the warning `@azure-tools/typespec-ts/parameter-type-not-supported`:

```yaml
mustEmptyDiagnostic: false
```

## Provide generated operations to call rest-level methods

## Operations

Should normal path parameter:

```ts operations
import { TestingContext as Client } from "./index.js";
import { TestOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export interface TestResponse {
  body: string;
}

export function _testSend(
  context: Client,
  options: TestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "text/plain", ...options.requestOptions?.headers },
    });
}

export async function _testDeserialize(result: PathUncheckedResponse): Promise<TestResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return { body: result.body };
}

export async function test(
  context: Client,
  options: TestOptionalParams = { requestOptions: {} },
): Promise<TestResponse> {
  const result = await _testSend(context, options);
  return _testDeserialize(result);
}
```
