// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetAsJson200Response,
  GetAsText200Response,
  MediaTypeContext as Client,
  SendAsJson200Response,
  SendAsText200Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  StringBodySendAsTextOptionalParams,
  StringBodyGetAsTextOptionalParams,
  StringBodySendAsJsonOptionalParams,
  StringBodyGetAsJsonOptionalParams,
} from "../../models/options.js";

export function _sendAsTextSend(
  context: Client,
  text: string,
  options: StringBodySendAsTextOptionalParams = { requestOptions: {} },
): StreamableMethod<SendAsText200Response> {
  return context
    .path("/payload/media-type/string-body/sendAsText")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "text/plain",
      body: text,
    });
}

export async function _sendAsTextDeserialize(
  result: SendAsText200Response,
): Promise<void> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return;
}

export async function sendAsText(
  context: Client,
  text: string,
  options: StringBodySendAsTextOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _sendAsTextSend(context, text, options);
  return _sendAsTextDeserialize(result);
}

export function _getAsTextSend(
  context: Client,
  options: StringBodyGetAsTextOptionalParams = { requestOptions: {} },
): StreamableMethod<GetAsText200Response> {
  return context
    .path("/payload/media-type/string-body/getAsText")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getAsTextDeserialize(
  result: GetAsText200Response,
): Promise<string> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as GetAsText200Response;
  return _result.body;
}

export async function getAsText(
  context: Client,
  options: StringBodyGetAsTextOptionalParams = { requestOptions: {} },
): Promise<string> {
  const result = await _getAsTextSend(context, options);
  return _getAsTextDeserialize(result);
}

export function _sendAsJsonSend(
  context: Client,
  text: string,
  options: StringBodySendAsJsonOptionalParams = { requestOptions: {} },
): StreamableMethod<SendAsJson200Response> {
  return context
    .path("/payload/media-type/string-body/sendAsJson")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "application/json",
      body: text,
    });
}

export async function _sendAsJsonDeserialize(
  result: SendAsJson200Response,
): Promise<void> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return;
}

export async function sendAsJson(
  context: Client,
  text: string,
  options: StringBodySendAsJsonOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _sendAsJsonSend(context, text, options);
  return _sendAsJsonDeserialize(result);
}

export function _getAsJsonSend(
  context: Client,
  options: StringBodyGetAsJsonOptionalParams = { requestOptions: {} },
): StreamableMethod<GetAsJson200Response> {
  return context
    .path("/payload/media-type/string-body/getAsJson")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getAsJsonDeserialize(
  result: GetAsJson200Response,
): Promise<string> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as GetAsJson200Response;
  return _result.body;
}

export async function getAsJson(
  context: Client,
  options: StringBodyGetAsJsonOptionalParams = { requestOptions: {} },
): Promise<string> {
  const result = await _getAsJsonSend(context, options);
  return _getAsJsonDeserialize(result);
}
