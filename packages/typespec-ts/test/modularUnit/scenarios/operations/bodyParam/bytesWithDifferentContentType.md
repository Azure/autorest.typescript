# bytes response with */* content type should be treated as binary

When a response has `*/*` content type and a `bytes` body, `isBinaryPayload` should return
`true` so the response is deserialized as `Uint8Array` (binary) rather than `string` (base64).
The request body type is unrelated to this scenario and is intentionally kept simple.

## TypeSpec

```tsp
@post op uploadFile(
  @body body: string
): {
  @header contentType: "*/*",
  @body body: bytes
};
```
```yaml
wrap-non-model-return: true
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { UploadFileResponse } from "../models/models.js";
import { getBinaryStreamResponse } from "../static-helpers/serialization/get-binary-stream-response.js";
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

export async function _uploadFileDeserialize(
  result: PathUncheckedResponse & UploadFileResponse,
): Promise<UploadFileResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return { blobBody: result.blobBody, readableStreamBody: result.readableStreamBody };
}

export async function uploadFile(
  context: Client,
  body: string,
  options: UploadFileOptionalParams = { requestOptions: {} },
): Promise<UploadFileResponse> {
  const streamableMethod = _uploadFileSend(context, body, options);
  const result = await getBinaryStreamResponse(streamableMethod);
  return _uploadFileDeserialize(result);
}
```

## Models

```ts models
import { NodeReadableStream } from "../static-helpers/platform-types.js";

export type UploadFileResponse = {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always `undefined` in node.js.
   */
  blobBody?: Promise<Blob>;
  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always `undefined` in the browser.
   */
  readableStreamBody?: NodeReadableStream;
};
```

# bytes response with application/xml content type should be treated as binary

When a response has `application/xml` content type and a `bytes` body, `isBinaryPayload` should
return `true` so the response is deserialized as `Uint8Array` (binary) rather than `string` (base64).

## TypeSpec

```tsp
@post op uploadFile(
  @body body: bytes
): {
  @header contentType: "application/xml",
  @body 
  @encode("bytes")
  body: bytes
};
```
```yaml
wrap-non-model-return: true
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { UploadFileResponse } from "../models/models.js";
import { getBinaryStreamResponse } from "../static-helpers/serialization/get-binary-stream-response.js";
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
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/octet-stream",
      headers: { accept: "application/xml", ...options.requestOptions?.headers },
      body: body,
    });
}

export async function _uploadFileDeserialize(
  result: PathUncheckedResponse & UploadFileResponse,
): Promise<UploadFileResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return { blobBody: result.blobBody, readableStreamBody: result.readableStreamBody };
}

export async function uploadFile(
  context: Client,
  body: Uint8Array,
  options: UploadFileOptionalParams = { requestOptions: {} },
): Promise<UploadFileResponse> {
  const streamableMethod = _uploadFileSend(context, body, options);
  const result = await getBinaryStreamResponse(streamableMethod);
  return _uploadFileDeserialize(result);
}
```

## Models

```ts models
import { NodeReadableStream } from "../static-helpers/platform-types.js";

export type UploadFileResponse = {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always `undefined` in node.js.
   */
  blobBody?: Promise<Blob>;
  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always `undefined` in the browser.
   */
  readableStreamBody?: NodeReadableStream;
};
```

# bytes response with @encode("bytes") and application/json content type should be treated as binary

When a response has `application/json` content type and a `@encode("bytes")` bytes body,
`isBinaryPayload` should return `true` because when `encode="bytes"` is specified and the
content type is not `text/plain`, the payload is treated as binary.

## TypeSpec

```tsp
@post op uploadFile(
  @body body: bytes
): {
  @header contentType: "application/json",
  @body
  @encode("bytes")
  body: bytes
};
```
```yaml
wrap-non-model-return: true
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { UploadFileResponse } from "../models/models.js";
import { getBinaryStreamResponse } from "../static-helpers/serialization/get-binary-stream-response.js";
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
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/octet-stream",
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: body,
    });
}

export async function _uploadFileDeserialize(
  result: PathUncheckedResponse & UploadFileResponse,
): Promise<UploadFileResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return { blobBody: result.blobBody, readableStreamBody: result.readableStreamBody };
}

export async function uploadFile(
  context: Client,
  body: Uint8Array,
  options: UploadFileOptionalParams = { requestOptions: {} },
): Promise<UploadFileResponse> {
  const streamableMethod = _uploadFileSend(context, body, options);
  const result = await getBinaryStreamResponse(streamableMethod);
  return _uploadFileDeserialize(result);
}
```

## Models

```ts models
import { NodeReadableStream } from "../static-helpers/platform-types.js";

export type UploadFileResponse = {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always `undefined` in node.js.
   */
  blobBody?: Promise<Blob>;
  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always `undefined` in the browser.
   */
  readableStreamBody?: NodeReadableStream;
};
```

# bytes response with @encode("bytes") and text/plain content type should NOT be treated as binary

When a response has `text/plain` content type and a `@encode("bytes")` bytes body,
`isBinaryPayload` should return `false` because text/plain is an exception — the body
is returned as a plain body property rather than a binary stream.

## TypeSpec

```tsp
@post op uploadFile(
  @body body: bytes
): {
  @header contentType: "text/plain",
  @body
  @encode("bytes")
  body: bytes
};
```
```yaml
wrap-non-model-return: true
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { UploadFileResponse } from "../models/models.js";
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
  body: Uint8Array,
  options: UploadFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/octet-stream",
      headers: { accept: "text/plain", ...options.requestOptions?.headers },
      body: body,
    });
}

export async function _uploadFileDeserialize(
  result: PathUncheckedResponse,
): Promise<UploadFileResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return { body: result.body };
}

export async function uploadFile(
  context: Client,
  body: Uint8Array,
  options: UploadFileOptionalParams = { requestOptions: {} },
): Promise<UploadFileResponse> {
  const streamableMethod = _uploadFileSend(context, body, options);
  const result = await getBinaryResponse(streamableMethod);
  return _uploadFileDeserialize(result);
}
```

## Models

```ts models
export type UploadFileResponse = { body: Uint8Array };
```

# bytes response without @encode and application/json content type should NOT be treated as binary

When a response has `application/json` content type and a plain `bytes` body (no `@encode`),
`isBinaryPayload` should return `false`. The body is deserialized from base64.

## TypeSpec

```tsp
@post op uploadFile(
  @body body: bytes
): {
  @header contentType: "application/json",
  @body body: bytes
};
```
```yaml
wrap-non-model-return: true
```

## Operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { UploadFileResponse } from "../models/models.js";
import { UploadFileOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { stringToUint8Array } from "@azure/core-util";

export function _uploadFileSend(
  context: Client,
  body: Uint8Array,
  options: UploadFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/octet-stream",
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: body,
    });
}

export async function _uploadFileDeserialize(
  result: PathUncheckedResponse,
): Promise<UploadFileResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    body: typeof result.body === "string" ? stringToUint8Array(result.body, "base64") : result.body,
  };
}

export async function uploadFile(
  context: Client,
  body: Uint8Array,
  options: UploadFileOptionalParams = { requestOptions: {} },
): Promise<UploadFileResponse> {
  const result = await _uploadFileSend(context, body, options);
  return _uploadFileDeserialize(result);
}
```

## Models

```ts models
export type UploadFileResponse = { body: Uint8Array };
```

# bytes request body with @encode("bytes") and application/json content type should be treated as binary

When a request body has `application/json` content type and `@encode("bytes")` on bytes,
`isBinaryPayload` returns `true` — the body is sent as raw `Uint8Array`.

## TypeSpec

```tsp
@post op uploadFile(
  @header contentType: "application/json",
  @body
  @encode("bytes")
  body: bytes
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
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: body,
    });
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

# bytes request body with @encode("bytes") and text/plain content type should NOT be treated as binary

When a request body has `text/plain` content type and `@encode("bytes")` on bytes,
`isBinaryPayload` returns `false` (text/plain is exempt). The body is still sent as raw
`Uint8Array` because the "bytes" encode format bypasses base64 conversion.

## TypeSpec

```tsp
@post op uploadFile(
  @header contentType: "text/plain",
  @body
  @encode("bytes")
  body: bytes
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
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "text/plain",
      body: body,
    });
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

# bytes request body without @encode and application/json content type should NOT be treated as binary

When a request body has `application/json` content type and plain `bytes` (no `@encode`),
`isBinaryPayload` returns `false`. The body is base64-encoded before sending.

## TypeSpec

```tsp
@post op uploadFile(
  @header contentType: "application/json",
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
import { uint8ArrayToString } from "@azure/core-util";

export function _uploadFileSend(
  context: Client,
  body: Uint8Array,
  options: UploadFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: uint8ArrayToString(body, "base64"),
    });
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
