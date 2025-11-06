# response body with bytes type should handle undefined response.type

This test reproduces the issue found in Microsoft.CodeTransparency where the response body is defined as `bytes` type and during code generation, `response.type.__raw` might be undefined, causing a crash in `isBinaryPayload` -> `getEffectiveModelFromType` trying to access `type.kind` on undefined.

## TypeSpec

```tsp
@doc("Response with bytes body")
model BytesResponse {
  @doc("Content type header")
  @header
  contentType: "application/octet-stream";

  @doc("Binary content")
  @body
  body: bytes;
}

@route("/data")
@get
op getData(): BytesResponse;
```

## operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { getBinaryResponse } from "../static-helpers/serialization/get-binary-response.js";
import { GetDataOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getDataSend(
  context: Client,
  options: GetDataOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/data")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/octet-stream",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getDataDeserialize(
  result: PathUncheckedResponse,
): Promise<Uint8Array> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function getData(
  context: Client,
  options: GetDataOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const streamableMethod = _getDataSend(context, options);
  const result = await getBinaryResponse(streamableMethod);
  return _getDataDeserialize(result);
}
```

# response with bytes body and custom CBOR content type

## TypeSpec

```tsp

@doc("CBOR response with bytes body")
model CborResponse {
  @doc("CBOR content type")
  @header
  contentType: "application/cbor";

  @doc("CBOR binary content")
  @body
  body: bytes;
}

@route("/cbor")
@get
op getCbor(): CborResponse;
```

## operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { getBinaryResponse } from "../static-helpers/serialization/get-binary-response.js";
import { GetCborOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getCborSend(
  context: Client,
  options: GetCborOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/cbor")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/cbor",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getCborDeserialize(
  result: PathUncheckedResponse,
): Promise<Uint8Array> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function getCbor(
  context: Client,
  options: GetCborOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const streamableMethod = _getCborSend(context, options);
  const result = await getBinaryResponse(streamableMethod);
  return _getCborDeserialize(result);
}
```

# response with @bodyRoot bytes and COSE content type

## TypeSpec

```tsp

@doc("Response with @bodyRoot bytes")
model RootBytesResponse {
  @doc("Status code")
  @statusCode
  statusCode: 200;

  @doc("Content type")
  @header
  contentType: "application/cose";

  @doc("Binary body at root")
  @bodyRoot
  body: bytes;
}

@route("/cose")
@get
op getCose(): RootBytesResponse;
```

## operations

```ts operations
import { TestingContext as Client } from "./index.js";
import { getBinaryResponse } from "../static-helpers/serialization/get-binary-response.js";
import { GetCoseOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getCoseSend(
  context: Client,
  options: GetCoseOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/cose")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/cose",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getCoseDeserialize(
  result: PathUncheckedResponse,
): Promise<Uint8Array> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function getCose(
  context: Client,
  options: GetCoseOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const streamableMethod = _getCoseSend(context, options);
  const result = await getBinaryResponse(streamableMethod);
  return _getCoseDeserialize(result);
}
```
