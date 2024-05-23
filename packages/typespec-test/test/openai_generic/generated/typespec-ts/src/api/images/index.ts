// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateImageRequest,
  ImagesResponse,
  CreateImageEditRequest,
  CreateImageVariationRequest,
} from "../../models/models.js";
import {
  serializeCreateImageRequest,
  deserializeImagesResponse,
  serializeCreateImageEditRequest,
  serializeCreateImageVariationRequest,
} from "../../utils/serializeUtil.js";
import {
  ImagesCreate200Response,
  ImagesCreateDefaultResponse,
  ImagesCreateEdit200Response,
  ImagesCreateEditDefaultResponse,
  ImagesCreateVariation200Response,
  ImagesCreateVariationDefaultResponse,
  isUnexpected,
  OpenAIContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ImagesCreateOptionalParams,
  ImagesCreateEditOptionalParams,
  ImagesCreateVariationOptionalParams,
} from "../../models/options.js";

export function _createSend(
  context: Client,
  image: CreateImageRequest,
  options: ImagesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod<ImagesCreate200Response | ImagesCreateDefaultResponse> {
  return context
    .path("/images/generations")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: serializeCreateImageRequest(image),
    });
}

export async function _createDeserialize(
  result: ImagesCreate200Response | ImagesCreateDefaultResponse,
): Promise<ImagesResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeImagesResponse(result.body);
}

export async function create(
  context: Client,
  image: CreateImageRequest,
  options: ImagesCreateOptionalParams = { requestOptions: {} },
): Promise<ImagesResponse> {
  const result = await _createSend(context, image, options);
  return _createDeserialize(result);
}

export function _createEditSend(
  context: Client,
  image: CreateImageEditRequest,
  options: ImagesCreateEditOptionalParams = { requestOptions: {} },
): StreamableMethod<
  ImagesCreateEdit200Response | ImagesCreateEditDefaultResponse
> {
  return context
    .path("/images/edits")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: serializeCreateImageEditRequest(image),
    });
}

export async function _createEditDeserialize(
  result: ImagesCreateEdit200Response | ImagesCreateEditDefaultResponse,
): Promise<ImagesResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeImagesResponse(result.body);
}

export async function createEdit(
  context: Client,
  image: CreateImageEditRequest,
  options: ImagesCreateEditOptionalParams = { requestOptions: {} },
): Promise<ImagesResponse> {
  const result = await _createEditSend(context, image, options);
  return _createEditDeserialize(result);
}

export function _createVariationSend(
  context: Client,
  image: CreateImageVariationRequest,
  options: ImagesCreateVariationOptionalParams = { requestOptions: {} },
): StreamableMethod<
  ImagesCreateVariation200Response | ImagesCreateVariationDefaultResponse
> {
  return context
    .path("/images/variations")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: serializeCreateImageVariationRequest(image),
    });
}

export async function _createVariationDeserialize(
  result:
    | ImagesCreateVariation200Response
    | ImagesCreateVariationDefaultResponse,
): Promise<ImagesResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeImagesResponse(result.body);
}

export async function createVariation(
  context: Client,
  image: CreateImageVariationRequest,
  options: ImagesCreateVariationOptionalParams = { requestOptions: {} },
): Promise<ImagesResponse> {
  const result = await _createVariationSend(context, image, options);
  return _createVariationDeserialize(result);
}
