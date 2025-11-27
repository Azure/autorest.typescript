# Should support path parameters

## TypeSpec

This is tsp definition.

```tsp
op read(@path param?: string): OkResponse;
```

## Operations

Should normal path parameter:

```ts operations
import { TestingContext as Client } from "./index.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { ReadOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _readSend(
  context: Client,
  options: ReadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "{/param}",
    {
      param: options["param"],
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({ ...operationOptionsToRequestParameters(options) });
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
  options: ReadOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _readSend(context, options);
  return _readDeserialize(result);
}
```

## Options should include optional path parameter

```ts models:withOptions
import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface ReadOptionalParams extends OperationOptions {
  param?: string;
}
```
