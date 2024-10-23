# Should generate path allowReserved:true parameter for {+param}

## TypeSpec

This is tsp definition.

```tsp
@route("template/{+param}")
op template(param: string): void;
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
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";

export function _templateSend(
  context: Client,
  param: string,
  options: TemplateOptionalParams = { requestOptions: {} }
): StreamableMethod {
  return context
    .path("/template/{param}", { value: param, allowReserved: true })
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _templateDeserialize(
  result: PathUncheckedResponse
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function template(
  context: Client,
  param: string,
  options: TemplateOptionalParams = { requestOptions: {} }
): Promise<void> {
  const result = await _templateSend(context, param, options);
  return _templateDeserialize(result);
}
```
