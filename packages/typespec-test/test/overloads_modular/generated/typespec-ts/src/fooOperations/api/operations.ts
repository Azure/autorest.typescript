// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooOperationsContext as Client } from "./index.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import { GetAvatarAsJpegOptionalParams, GetAvatarAsPngOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getAvatarAsJpegSend(
  context: Client,
  image: Uint8Array,
  options: GetAvatarAsJpegOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/avatar{?api%2Dversion}",
    {
      "api%2Dversion": context.apiVersion ?? "2022-08-30",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "image/jpeg",
      body: image,
    });
}

export async function _getAvatarAsJpegDeserialize(result: PathUncheckedResponse): Promise<void> {
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
  options: GetAvatarAsJpegOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _getAvatarAsJpegSend(context, image, options);
  return _getAvatarAsJpegDeserialize(result);
}

export function _getAvatarAsPngSend(
  context: Client,
  image: Uint8Array,
  options: GetAvatarAsPngOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/avatar{?api%2Dversion}",
    {
      "api%2Dversion": context.apiVersion ?? "2022-08-30",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "image/png",
      body: image,
    });
}

export async function _getAvatarAsPngDeserialize(result: PathUncheckedResponse): Promise<void> {
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
  options: GetAvatarAsPngOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _getAvatarAsPngSend(context, image, options);
  return _getAvatarAsPngDeserialize(result);
}
