// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ContentNegotiationContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  SameBodyGetAvatarAsPngOptionalParams,
  SameBodyGetAvatarAsJpegOptionalParams,
} from "../../models/options.js";

export function _getAvatarAsPngSend(
  context: Client,
  options: SameBodyGetAvatarAsPngOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/content-negotiation/same-body")
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
  options: SameBodyGetAvatarAsPngOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const result = await _getAvatarAsPngSend(context, options);
  return _getAvatarAsPngDeserialize(result);
}

export function _getAvatarAsJpegSend(
  context: Client,
  options: SameBodyGetAvatarAsJpegOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/content-negotiation/same-body")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "image/jpeg" },
    });
}

export async function _getAvatarAsJpegDeserialize(
  result: PathUncheckedResponse,
): Promise<Uint8Array> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body as any;
}

export async function getAvatarAsJpeg(
  context: Client,
  options: SameBodyGetAvatarAsJpegOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const result = await _getAvatarAsJpegSend(context, options);
  return _getAvatarAsJpegDeserialize(result);
}
