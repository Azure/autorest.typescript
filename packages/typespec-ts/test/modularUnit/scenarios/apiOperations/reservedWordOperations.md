# should generate reserved words operation with prefix $

## TypeSpec

```tsp
model Test {
  result: string;
}
op continue(): Test;
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { Test, testDeserializer } from "../models/models.js";
import { ContinueOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _$continueSend(
  context: Client,
  options: ContinueOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context.path("/").get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers
    }
  });
}

export async function _$continueDeserialize(
  result: PathUncheckedResponse
): Promise<Test> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return testDeserializer(result.body);
}

/**
 *  @fixme continue is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $continue(
  context: Client,
  options: ContinueOptionalParams = { requestOptions: {} }
): Promise<Test> {
  const result = await _$continueSend(context, options);
  return _$continueDeserialize(result);
}
```
