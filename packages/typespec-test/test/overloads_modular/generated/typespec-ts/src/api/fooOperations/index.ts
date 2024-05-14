// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetAvatarAsJpeg200Response,
  GetAvatarAsJpegDefaultResponse,
  GetAvatarAsPng200Response,
  GetAvatarAsPngDefaultResponse,
  isUnexpected,
  WidgetManagerContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
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
): StreamableMethod<GetAvatarAsPng200Response | GetAvatarAsPngDefaultResponse> {
  return context
    .path("/avatar")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "image/png",
      body: image,
    }) as StreamableMethod<
    GetAvatarAsPng200Response | GetAvatarAsPngDefaultResponse
  >;
}

export async function _getAvatarAsPngDeserialize(
  result: GetAvatarAsPng200Response | GetAvatarAsPngDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
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
): StreamableMethod<
  GetAvatarAsJpeg200Response | GetAvatarAsJpegDefaultResponse
> {
  return context
    .path("/avatar")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "image/jpeg",
      body: image,
    }) as StreamableMethod<
    GetAvatarAsJpeg200Response | GetAvatarAsJpegDefaultResponse
  >;
}

export async function _getAvatarAsJpegDeserialize(
  result: GetAvatarAsJpeg200Response | GetAvatarAsJpegDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
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
