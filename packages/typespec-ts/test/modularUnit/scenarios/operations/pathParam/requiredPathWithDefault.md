# Should generate optional body in option parameter

Should generate optional body in option parameter.

## TypeSpec

This is tsp definition.

```tsp
@doc("show example demo")
@route("/{strDefault}/{numberDefault}")
op read(@path strDefault: "foobar", @path numberDefault: 1): void;
```

## Provide generated operation options

Generated operation options.

```ts models:withOptions
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface ReadOptionalParams extends OperationOptions {
  strDefault?: "foobar";
  numberDefault?: 1;
}
```

## Provide generated operations to call rest-level methods

## Operations

Should generate operations correctly:

```ts operations
import { TestingContext as Client } from "./index.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _readSend(
  context: Client,
  options: ReadOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context
    .path(
      "/{strDefault}/{numberDefault}",
      options[strDefault] ?? "foobar",
      options[numberDefault] ?? 1
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _readDeserialize(
  result: PathUncheckedResponse
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** show example demo */
export async function read(
  context: Client,
  options: ReadOptionalParams = { requestOptions: {} }
): Promise<void> {
  const result = await _readSend(context, options);
  return _readDeserialize(result);
}
```
