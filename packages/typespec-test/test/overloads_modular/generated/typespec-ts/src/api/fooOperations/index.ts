// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetAvatarAsJpeg204Response,
  GetAvatarAsJpegDefaultResponse,
  GetAvatarAsPng204Response,
  GetAvatarAsPngDefaultResponse,
  isUnexpected,
  WidgetManagerContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { RestError } from "@azure/core-rest-pipeline";
import {
  FooOperationsGetAvatarAsPngOptions,
  FooOperationsGetAvatarAsJpegOptions,
} from "../../models/options.js";

export function _getAvatarAsPngSend(
  context: Client,
  image: Uint8Array,
  options: FooOperationsGetAvatarAsPngOptions = { requestOptions: {} }
): StreamableMethod<GetAvatarAsPng204Response | GetAvatarAsPngDefaultResponse> {
  return context
    .path("/avatar")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "image/png",
      body: image,
    }) as StreamableMethod<
    GetAvatarAsPng204Response | GetAvatarAsPngDefaultResponse
  >;
}

export async function _getAvatarAsPngDeserialize(
  result: GetAvatarAsPng204Response | GetAvatarAsPngDefaultResponse
): Promise<void> {
  if (isUnexpected(result)) {
    const internalError = (result.body as any).error || result.body || result;
    const message = `Unexpected status code ${result.status}`;
    throw new RestError(internalError.message ?? message, {
      statusCode: Number(result.status),
      code: internalError.code,
      request: result.request,
    });
  }

  return;
}

/** A remote procedure call (RPC) operation. */
export async function getAvatarAsPng(
  context: Client,
  image: Uint8Array,
  options: FooOperationsGetAvatarAsPngOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _getAvatarAsPngSend(context, image, options);
  return _getAvatarAsPngDeserialize(result);
}

export function _getAvatarAsJpegSend(
  context: Client,
  image: Uint8Array,
  options: FooOperationsGetAvatarAsJpegOptions = { requestOptions: {} }
): StreamableMethod<
  GetAvatarAsJpeg204Response | GetAvatarAsJpegDefaultResponse
> {
  return context
    .path("/avatar")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "image/jpeg",
      body: image,
    }) as StreamableMethod<
    GetAvatarAsJpeg204Response | GetAvatarAsJpegDefaultResponse
  >;
}

export async function _getAvatarAsJpegDeserialize(
  result: GetAvatarAsJpeg204Response | GetAvatarAsJpegDefaultResponse
): Promise<void> {
  if (isUnexpected(result)) {
    const internalError = (result.body as any).error || result.body || result;
    const message = `Unexpected status code ${result.status}`;
    throw new RestError(internalError.message ?? message, {
      statusCode: Number(result.status),
      code: internalError.code,
      request: result.request,
    });
  }

  return;
}

/** A remote procedure call (RPC) operation. */
export async function getAvatarAsJpeg(
  context: Client,
  image: Uint8Array,
  options: FooOperationsGetAvatarAsJpegOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _getAvatarAsJpegSend(context, image, options);
  return _getAvatarAsJpegDeserialize(result);
}
