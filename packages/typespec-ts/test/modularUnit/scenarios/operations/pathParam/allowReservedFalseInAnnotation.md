# Should generate normal path parameter for @path(#{ allowReserved: false }

## TypeSpec

This is tsp definition.

```tsp
@route("annotationWithFalse")
op annotationWithFalse(@path(#{ allowReserved: false }) param: string): void;
```

## Provide generated operations to call rest-level methods

## Operations

Should normal path parameter:

```ts operations
import { TestingContext as Client } from "./index.js";
import { AnnotationWithFalseOptionalParams } from "./options.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _annotationWithFalseSend(
  context: Client,
  param: string,
  options: AnnotationWithFalseOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/annotationWithFalse/{param}",
    {
      param: param,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _annotationWithFalseDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function annotationWithFalse(
  context: Client,
  param: string,
  options: AnnotationWithFalseOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _annotationWithFalseSend(context, param, options);
  return _annotationWithFalseDeserialize(result);
}
```
