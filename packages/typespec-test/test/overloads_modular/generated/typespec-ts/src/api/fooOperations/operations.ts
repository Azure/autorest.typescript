// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WidgetManagerContext as Client } from "../index.js";
import { GetAvatarAsPngResponse, GetAvatarAsJpegResponse } from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  FooOperationsGetAvatarAsJpegOptionalParams,
  FooOperationsGetAvatarAsPngOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getAvatarAsJpegSend(
  context: Client,
  image: Uint8Array,
  options: FooOperationsGetAvatarAsJpegOptionalParams = { requestOptions: {} },
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

export async function _getAvatarAsJpegDeserialize(
  result: PathUncheckedResponse,
): Promise<GetAvatarAsJpegResponse> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return { accept: result.headers["accept"]! } as GetAvatarAsJpegResponse;
}

/** A remote procedure call (RPC) operation. */
export async function getAvatarAsJpeg(
  context: Client,
  image: Uint8Array,
  options: FooOperationsGetAvatarAsJpegOptionalParams = { requestOptions: {} },
): Promise<GetAvatarAsJpegResponse> {
  const result = await _getAvatarAsJpegSend(context, image, options);
  return _getAvatarAsJpegDeserialize(result);
}

export function _getAvatarAsPngSend(
  context: Client,
  image: Uint8Array,
  options: FooOperationsGetAvatarAsPngOptionalParams = { requestOptions: {} },
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

export async function _getAvatarAsPngDeserialize(
  result: PathUncheckedResponse,
): Promise<GetAvatarAsPngResponse> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return { accept: result.headers["accept"]! } as GetAvatarAsPngResponse;
}

/** A remote procedure call (RPC) operation. */
export async function getAvatarAsPng(
  context: Client,
  image: Uint8Array,
  options: FooOperationsGetAvatarAsPngOptionalParams = { requestOptions: {} },
): Promise<GetAvatarAsPngResponse> {
  const result = await _getAvatarAsPngSend(context, image, options);
  return _getAvatarAsPngDeserialize(result);
}
