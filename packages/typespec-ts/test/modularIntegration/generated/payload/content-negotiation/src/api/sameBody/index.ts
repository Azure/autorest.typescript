// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ContentNegotiationContext as Client,
  SameBodyGetAvatarAsJpeg200Response,
  SameBodyGetAvatarAsPng200Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  SameBodyGetAvatarAsPngOptionalParams,
  SameBodyGetAvatarAsJpegOptionalParams,
} from "../../models/options.js";

export function _getAvatarAsPngSend(
  context: Client,
  options: SameBodyGetAvatarAsPngOptionalParams = { requestOptions: {} },
): StreamableMethod<SameBodyGetAvatarAsPng200Response> {
  return context
    .path("/content-negotiation/same-body")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept:
          options.requestOptions?.headers?.["accept"] ?? ("image/png" as any),
      },
    }) as StreamableMethod<SameBodyGetAvatarAsPng200Response>;
}

export async function _getAvatarAsPngDeserialize(
  result: SameBodyGetAvatarAsPng200Response,
): Promise<Uint8Array> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

export async function getAvatarAsPng(
  context: Client,
  options: SameBodyGetAvatarAsPngOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const result = await _getAvatarAsPngSend(context, options);
  return _getAvatarAsPngDeserialize(result);
}

export function _getAvatarAsJpegSend(
  context: Client,
  options: SameBodyGetAvatarAsJpegOptionalParams = { requestOptions: {} },
): StreamableMethod<SameBodyGetAvatarAsJpeg200Response> {
  return context
    .path("/content-negotiation/same-body")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept:
          options.requestOptions?.headers?.["accept"] ?? ("image/jpeg" as any),
      },
    }) as StreamableMethod<SameBodyGetAvatarAsJpeg200Response>;
}

export async function _getAvatarAsJpegDeserialize(
  result: SameBodyGetAvatarAsJpeg200Response,
): Promise<Uint8Array> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

export async function getAvatarAsJpeg(
  context: Client,
  options: SameBodyGetAvatarAsJpegOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const result = await _getAvatarAsJpegSend(context, options);
  return _getAvatarAsJpegDeserialize(result);
}
