# bytes body with */* content type should be treated as binary

When an operation has `*/* ` content type and a `bytes` body, `isBinaryPayload` should return
`true` so the parameter is typed as `Uint8Array` (binary) rather than `string` (base64).

## TypeSpec

```tsp
@post op uploadFile(
  @header contentType: "*/*",
  @body body: bytes
): void;
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { UploadFileOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _uploadFileSend(
  context: Client,
  body: Uint8Array,
  options: UploadFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/")
    .post({ ...operationOptionsToRequestParameters(options), contentType: "*/*", body: body });
}

export async function _uploadFileDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function uploadFile(
  context: Client,
  body: Uint8Array,
  options: UploadFileOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _uploadFileSend(context, body, options);
  return _uploadFileDeserialize(result);
}
```
