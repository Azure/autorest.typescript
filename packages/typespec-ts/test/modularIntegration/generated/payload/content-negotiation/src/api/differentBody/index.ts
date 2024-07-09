// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PngImageAsJson } from "../../models/models.js";
import {
  ContentNegotiationContext as Client,
  DifferentBodyGetAvatarAsJson200Response,
  DifferentBodyGetAvatarAsPng200Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { stringToUint8Array } from "@azure/core-util";
import {
  DifferentBodyGetAvatarAsPngOptionalParams,
  DifferentBodyGetAvatarAsJsonOptionalParams,
} from "../../models/options.js";

export function _getAvatarAsPngSend(
  context: Client,
  options: DifferentBodyGetAvatarAsPngOptionalParams = { requestOptions: {} },
): StreamableMethod<DifferentBodyGetAvatarAsPng200Response> {
  return context
    .path("/content-negotiation/different-body")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "image/png" },
    }) as StreamableMethod<DifferentBodyGetAvatarAsPng200Response>;
}

export async function _getAvatarAsPngDeserialize(
  result: DifferentBodyGetAvatarAsPng200Response,
): Promise<Uint8Array> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as DifferentBodyGetAvatarAsPng200Response;
  return _result.body as any;
}

export async function getAvatarAsPng(
  context: Client,
  options: DifferentBodyGetAvatarAsPngOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const result = await _getAvatarAsPngSend(context, options);
  return _getAvatarAsPngDeserialize(result);
}

export function _getAvatarAsJsonSend(
  context: Client,
  options: DifferentBodyGetAvatarAsJsonOptionalParams = { requestOptions: {} },
): StreamableMethod<DifferentBodyGetAvatarAsJson200Response> {
  return context
    .path("/content-negotiation/different-body")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json" },
    }) as StreamableMethod<DifferentBodyGetAvatarAsJson200Response>;
}

export async function _getAvatarAsJsonDeserialize(
  result: DifferentBodyGetAvatarAsJson200Response,
): Promise<PngImageAsJson> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as DifferentBodyGetAvatarAsJson200Response;
  return {
    content:
      typeof _result.body["content"] === "string"
        ? stringToUint8Array(_result.body["content"], "base64")
        : _result.body["content"],
  };
}

export async function getAvatarAsJson(
  context: Client,
  options: DifferentBodyGetAvatarAsJsonOptionalParams = { requestOptions: {} },
): Promise<PngImageAsJson> {
  const result = await _getAvatarAsJsonSend(context, options);
  return _getAvatarAsJsonDeserialize(result);
}
