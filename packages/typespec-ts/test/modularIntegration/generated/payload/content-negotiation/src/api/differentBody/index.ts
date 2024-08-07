// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PngImageAsJson } from "../../models/models.js";
import { ContentNegotiationContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
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
): StreamableMethod {
  return context
    .path("/content-negotiation/different-body")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "image/png" },
    });
}

export async function _getAvatarAsPngDeserialize(
  result: PathUncheckedResponse,
): Promise<Uint8Array> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body as any;
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
): StreamableMethod {
  return context
    .path("/content-negotiation/different-body")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json" },
    });
}

export async function _getAvatarAsJsonDeserialize(
  result: PathUncheckedResponse,
): Promise<PngImageAsJson> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    content:
      typeof result.body["content"] === "string"
        ? stringToUint8Array(result.body["content"], "base64")
        : result.body["content"],
  };
}

export async function getAvatarAsJson(
  context: Client,
  options: DifferentBodyGetAvatarAsJsonOptionalParams = { requestOptions: {} },
): Promise<PngImageAsJson> {
  const result = await _getAvatarAsJsonSend(context, options);
  return _getAvatarAsJsonDeserialize(result);
}
