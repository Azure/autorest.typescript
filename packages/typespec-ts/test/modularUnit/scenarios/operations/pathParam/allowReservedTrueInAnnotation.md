# Should generate path allowReserved:true parameter for @path(#{ allowReserved: true }

## TypeSpec

This is tsp definition.

```tsp
@route("annotation")
op annotation(@path(#{ allowReserved: true }) param: string): void;
```

## Provide generated operations to call rest-level methods

## Operations

Should enable `allowReserved:true` for path parameter:

```ts operations
import { TestingContext as Client } from "./index.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _annotationSend(
  context: Client,
  param: string,
  options: AnnotationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = __PLACEHOLDER_o15__("/annotation/{+param}").expand({
    param: param
  });
  return context
    .path(path)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _annotationDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function annotation(
  context: Client,
  param: string,
  options: AnnotationOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _annotationSend(context, param, options);
  return _annotationDeserialize(result);
}
```
