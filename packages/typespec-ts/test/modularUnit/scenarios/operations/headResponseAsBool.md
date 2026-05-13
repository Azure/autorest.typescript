# wrap-non-model-return wraps with @responseAsBool void-only response as boolean body property

When both `wrap-non-model-return` and `@responseAsBool` are enabled and the operation is a HEAD request returning only void (success only),
the response is wrapped as `{ body: boolean }`.

## TypeSpec

```tsp
@route("/resources/{resourceName}")
@Azure.ClientGenerator.Core.responseAsBool
@head
op headResource(@path resourceName: string): void;
```

```yaml
wrap-non-model-return: true
needTCGC: true
```

## Models

```ts models alias HeadResourceResponse
export type HeadResourceResponse = { body: boolean };
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { HeadResourceResponse } from "../models/models.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { HeadResourceOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _headResourceSend(
  context: Client,
  resourceName: string,
  options: HeadResourceOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/resources/{resourceName}",
    {
      resourceName: resourceName,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).head({ ...operationOptionsToRequestParameters(options) });
}

export async function _headResourceDeserialize(
  result: PathUncheckedResponse,
): Promise<HeadResourceResponse> {
  const expectedStatuses = ["204", "404"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return { body: result.status.startsWith("2") };
}

export async function headResource(
  context: Client,
  resourceName: string,
  options: HeadResourceOptionalParams = { requestOptions: {} },
): Promise<HeadResourceResponse> {
  const result = await _headResourceSend(context, resourceName, options);
  return _headResourceDeserialize(result);
}
```

# Non wrap HEAD void-only response as boolean (no body wrap)

with `@responseAsBool`but `wrap-non-model-return` is false, the HEAD operation
returns a plain `boolean` (not wrapped in `{ body: boolean }`).

## TypeSpec

```tsp
@route("/resources/{resourceName}")
@Azure.ClientGenerator.Core.responseAsBool
@head
op headResource(@path resourceName: string): void;
```

```yaml
wrap-non-model-return: false
needTCGC: true
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { HeadResourceOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _headResourceSend(
  context: Client,
  resourceName: string,
  options: HeadResourceOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/resources/{resourceName}",
    {
      resourceName: resourceName,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).head({ ...operationOptionsToRequestParameters(options) });
}

export async function _headResourceDeserialize(result: PathUncheckedResponse): Promise<boolean> {
  const expectedStatuses = ["204", "404"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.status.startsWith("2");
}

export async function headResource(
  context: Client,
  resourceName: string,
  options: HeadResourceOptionalParams = { requestOptions: {} },
): Promise<boolean> {
  const result = await _headResourceSend(context, resourceName, options);
  return _headResourceDeserialize(result);
}
```