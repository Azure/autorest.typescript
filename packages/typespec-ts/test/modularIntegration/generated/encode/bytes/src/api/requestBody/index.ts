// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  BytesContext as Client,
  RequestBodyBase64204Response,
  RequestBodyBase64url204Response,
  RequestBodyCustomContentType204Response,
  RequestBodyDefault204Response,
  RequestBodyOctetStream204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { uint8ArrayToString } from "@azure/core-util";
import {
  RequestBodyDefaultOptionalParams,
  RequestBodyOctetStreamOptionalParams,
  RequestBodyCustomContentTypeOptionalParams,
  RequestBodyBase64OptionalParams,
  RequestBodyBase64urlOptionalParams,
} from "../../models/options.js";

export function _requestBodyDefaultSend(
  context: Client,
  value: Uint8Array,
  options: RequestBodyDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<RequestBodyDefault204Response> {
  return context
    .path("/encode/bytes/body/request/default")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: uint8ArrayToString(value, "base64"),
    });
}

export async function _requestBodyDefaultDeserialize(
  result: RequestBodyDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function requestBodyDefault(
  context: Client,
  value: Uint8Array,
  options: RequestBodyDefaultOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _requestBodyDefaultSend(context, value, options);
  return _requestBodyDefaultDeserialize(result);
}

export function _requestBodyOctetStreamSend(
  context: Client,
  value: Uint8Array,
  options: RequestBodyOctetStreamOptionalParams = { requestOptions: {} },
): StreamableMethod<RequestBodyOctetStream204Response> {
  return context
    .path("/encode/bytes/body/request/octet-stream")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "application/octet-stream",
      body: value,
    });
}

export async function _requestBodyOctetStreamDeserialize(
  result: RequestBodyOctetStream204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function requestBodyOctetStream(
  context: Client,
  value: Uint8Array,
  options: RequestBodyOctetStreamOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _requestBodyOctetStreamSend(context, value, options);
  return _requestBodyOctetStreamDeserialize(result);
}

export function _requestBodyCustomContentTypeSend(
  context: Client,
  value: Uint8Array,
  options: RequestBodyCustomContentTypeOptionalParams = { requestOptions: {} },
): StreamableMethod<RequestBodyCustomContentType204Response> {
  return context
    .path("/encode/bytes/body/request/custom-content-type")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "image/png",
      body: value,
    });
}

export async function _requestBodyCustomContentTypeDeserialize(
  result: RequestBodyCustomContentType204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function requestBodyCustomContentType(
  context: Client,
  value: Uint8Array,
  options: RequestBodyCustomContentTypeOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _requestBodyCustomContentTypeSend(
    context,
    value,
    options,
  );
  return _requestBodyCustomContentTypeDeserialize(result);
}

export function _requestBodyBase64Send(
  context: Client,
  value: Uint8Array,
  options: RequestBodyBase64OptionalParams = { requestOptions: {} },
): StreamableMethod<RequestBodyBase64204Response> {
  return context
    .path("/encode/bytes/body/request/base64")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: uint8ArrayToString(value, "base64"),
    });
}

export async function _requestBodyBase64Deserialize(
  result: RequestBodyBase64204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function requestBodyBase64(
  context: Client,
  value: Uint8Array,
  options: RequestBodyBase64OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _requestBodyBase64Send(context, value, options);
  return _requestBodyBase64Deserialize(result);
}

export function _requestBodyBase64urlSend(
  context: Client,
  value: Uint8Array,
  options: RequestBodyBase64urlOptionalParams = { requestOptions: {} },
): StreamableMethod<RequestBodyBase64url204Response> {
  return context
    .path("/encode/bytes/body/request/base64url")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: uint8ArrayToString(value, "base64"),
    });
}

export async function _requestBodyBase64urlDeserialize(
  result: RequestBodyBase64url204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function requestBodyBase64url(
  context: Client,
  value: Uint8Array,
  options: RequestBodyBase64urlOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _requestBodyBase64urlSend(context, value, options);
  return _requestBodyBase64urlDeserialize(result);
}
