// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WidgetManagerContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  FooOperationsGetAvatarAsPngOptionalParams,
  FooOperationsGetAvatarAsJpegOptionalParams,
} from "../../models/options.js";

export function _getAvatarAsPngSend(
  context: Client,
  image: Uint8Array,
  options: FooOperationsGetAvatarAsPngOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/avatar")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "image/png",
      body: image,
    });
}

export async function _getAvatarAsPngDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** A remote procedure call (RPC) operation. */
export async function getAvatarAsPng(
  context: Client,
  image: Uint8Array,
  options: FooOperationsGetAvatarAsPngOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _getAvatarAsPngSend(context, image, options);
  return _getAvatarAsPngDeserialize(result);
}

export function _getAvatarAsJpegSend(
  context: Client,
  image: Uint8Array,
  options: FooOperationsGetAvatarAsJpegOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/avatar")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "image/jpeg",
      body: image,
    });
}

export async function _getAvatarAsJpegDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** A remote procedure call (RPC) operation. */
export async function getAvatarAsJpeg(
  context: Client,
  image: Uint8Array,
  options: FooOperationsGetAvatarAsJpegOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _getAvatarAsJpegSend(context, image, options);
  return _getAvatarAsJpegDeserialize(result);
}
