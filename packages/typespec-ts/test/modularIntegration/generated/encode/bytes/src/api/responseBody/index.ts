// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  BytesContext as Client,
  ResponseBodyBase64200Response,
  ResponseBodyBase64url200Response,
  ResponseBodyCustomContentType200Response,
  ResponseBodyDefault200Response,
  ResponseBodyOctetStream200Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { stringToUint8Array } from "@azure/core-util";
import {
  ResponseBodyDefaultOptions,
  ResponseBodyOctetStreamOptions,
  ResponseBodyCustomContentTypeOptions,
  ResponseBodyBase64Options,
  ResponseBodyBase64urlOptions,
} from "../../models/options.js";

export function _responseBodyDefaultSend(
  context: Client,
  options: ResponseBodyDefaultOptions = { requestOptions: {} },
): StreamableMethod<ResponseBodyDefault200Response> {
  return context
    .path("/encode/bytes/body/response/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _responseBodyDefaultDeserialize(
  result: ResponseBodyDefault200Response,
): Promise<Uint8Array> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return typeof result.body === "string"
    ? stringToUint8Array(result.body, "base64")
    : result.body;
}

export async function responseBodyDefault(
  context: Client,
  options: ResponseBodyDefaultOptions = { requestOptions: {} },
): Promise<Uint8Array> {
  const result = await _responseBodyDefaultSend(context, options);
  return _responseBodyDefaultDeserialize(result);
}

export function _responseBodyOctetStreamSend(
  context: Client,
  options: ResponseBodyOctetStreamOptions = { requestOptions: {} },
): StreamableMethod<ResponseBodyOctetStream200Response> {
  return context
    .path("/encode/bytes/body/response/octet-stream")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _responseBodyOctetStreamDeserialize(
  result: ResponseBodyOctetStream200Response,
): Promise<Uint8Array> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

export async function responseBodyOctetStream(
  context: Client,
  options: ResponseBodyOctetStreamOptions = { requestOptions: {} },
): Promise<Uint8Array> {
  const result = await _responseBodyOctetStreamSend(context, options);
  return _responseBodyOctetStreamDeserialize(result);
}

export function _responseBodyCustomContentTypeSend(
  context: Client,
  options: ResponseBodyCustomContentTypeOptions = { requestOptions: {} },
): StreamableMethod<ResponseBodyCustomContentType200Response> {
  return context
    .path("/encode/bytes/body/response/custom-content-type")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _responseBodyCustomContentTypeDeserialize(
  result: ResponseBodyCustomContentType200Response,
): Promise<Uint8Array> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

export async function responseBodyCustomContentType(
  context: Client,
  options: ResponseBodyCustomContentTypeOptions = { requestOptions: {} },
): Promise<Uint8Array> {
  const result = await _responseBodyCustomContentTypeSend(context, options);
  return _responseBodyCustomContentTypeDeserialize(result);
}

export function _responseBodyBase64Send(
  context: Client,
  options: ResponseBodyBase64Options = { requestOptions: {} },
): StreamableMethod<ResponseBodyBase64200Response> {
  return context
    .path("/encode/bytes/body/response/base64")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _responseBodyBase64Deserialize(
  result: ResponseBodyBase64200Response,
): Promise<Uint8Array> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return typeof result.body === "string"
    ? stringToUint8Array(result.body, "base64")
    : result.body;
}

export async function responseBodyBase64(
  context: Client,
  options: ResponseBodyBase64Options = { requestOptions: {} },
): Promise<Uint8Array> {
  const result = await _responseBodyBase64Send(context, options);
  return _responseBodyBase64Deserialize(result);
}

export function _responseBodyBase64urlSend(
  context: Client,
  options: ResponseBodyBase64urlOptions = { requestOptions: {} },
): StreamableMethod<ResponseBodyBase64url200Response> {
  return context
    .path("/encode/bytes/body/response/base64url")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _responseBodyBase64urlDeserialize(
  result: ResponseBodyBase64url200Response,
): Promise<Uint8Array> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return typeof result.body === "string"
    ? stringToUint8Array(result.body, "base64url")
    : result.body;
}

export async function responseBodyBase64url(
  context: Client,
  options: ResponseBodyBase64urlOptions = { requestOptions: {} },
): Promise<Uint8Array> {
  const result = await _responseBodyBase64urlSend(context, options);
  return _responseBodyBase64urlDeserialize(result);
}
