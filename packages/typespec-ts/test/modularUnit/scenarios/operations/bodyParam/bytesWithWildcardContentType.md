# bytes response with */* content type should be treated as binary

When a response has `*/*` content type and a `bytes` body, `isBinaryPayload` should return
`true` so the response is deserialized as `Uint8Array` (binary) rather than `string` (base64).

## TypeSpec

```tsp
@post op uploadFile(
  @body body: string
): {
  @header contentType: "*/*",
  @body body: bytes
};
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { getBinaryResponse } from "../static-helpers/serialization/get-binary-response.js";
import { UploadFileOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _uploadFileSend(
  context: Client,
  body: string,
  options: UploadFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "text/plain",
      headers: { accept: "*/*", ...options.requestOptions?.headers },
      body: body,
    });
}

export async function _uploadFileDeserialize(result: PathUncheckedResponse): Promise<Uint8Array> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function uploadFile(
  context: Client,
  body: string,
  options: UploadFileOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const streamableMethod = _uploadFileSend(context, body, options);
  const result = await getBinaryResponse(streamableMethod);
  return _uploadFileDeserialize(result);
}
```
