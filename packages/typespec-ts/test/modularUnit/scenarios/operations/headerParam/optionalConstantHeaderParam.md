# Optional constant header parameters should read from options

## TypeSpec

```tsp
op read(
    @header("required-header") requiredHeader: "requiredValue",
    @header("optional-header") optionalHeader?: "optionalValue",
    @header("optional-string-header") optionalStringHeader?: string,
    @body parameters: string): OkResponse;
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { ReadOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _readSend(
  context: Client,
  parameters: string,
  options: ReadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "text/plain",
      headers: {
        "required-header": "requiredValue",
        ...(options?.optionalHeader !== undefined
          ? {
              "optional-header": !options?.optionalHeader
                ? options?.optionalHeader
                : "optionalValue",
            }
          : {}),
        ...(options?.optionalStringHeader !== undefined
          ? { "optional-string-header": options?.optionalStringHeader }
          : {}),
        ...options.requestOptions?.headers,
      },
      body: parameters,
    });
}

export async function _readDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function read(
  context: Client,
  parameters: string,
  options: ReadOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _readSend(context, parameters, options);
  return _readDeserialize(result);
}
```
