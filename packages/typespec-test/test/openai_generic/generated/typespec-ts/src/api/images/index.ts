// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  OpenAIContext as Client,
  ImagesCreateEditOptionalParams,
  ImagesCreateOptionalParams,
  ImagesCreateVariationOptionalParams,
} from "../index.js";
import {
  CreateImageRequest,
  createImageRequestSerializer,
  ImagesResponse,
  imagesResponseDeserializer,
  CreateImageEditRequest,
  createImageEditRequestSerializer,
  CreateImageVariationRequest,
  createImageVariationRequestSerializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _createVariationSend(
  context: Client,
  image: CreateImageVariationRequest,
  options: ImagesCreateVariationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/images/variations")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "multipart/form-data",
      headers: { accept: "application/json" },
      body: createImageVariationRequestSerializer(image),
    });
}

export async function _createVariationDeserialize(
  result: PathUncheckedResponse,
): Promise<ImagesResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return imagesResponseDeserializer(result.body);
}

export async function createVariation(
  context: Client,
  image: CreateImageVariationRequest,
  options: ImagesCreateVariationOptionalParams = { requestOptions: {} },
): Promise<ImagesResponse> {
  const result = await _createVariationSend(context, image, options);
  return _createVariationDeserialize(result);
}

export function _createEditSend(
  context: Client,
  image: CreateImageEditRequest,
  options: ImagesCreateEditOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/images/edits")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "multipart/form-data",
      headers: { accept: "application/json" },
      body: createImageEditRequestSerializer(image),
    });
}

export async function _createEditDeserialize(
  result: PathUncheckedResponse,
): Promise<ImagesResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return imagesResponseDeserializer(result.body);
}

export async function createEdit(
  context: Client,
  image: CreateImageEditRequest,
  options: ImagesCreateEditOptionalParams = { requestOptions: {} },
): Promise<ImagesResponse> {
  const result = await _createEditSend(context, image, options);
  return _createEditDeserialize(result);
}

export function _createSend(
  context: Client,
  image: CreateImageRequest,
  options: ImagesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/images/generations")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "application/json",
      headers: { accept: "application/json" },
      body: createImageRequestSerializer(image),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<ImagesResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return imagesResponseDeserializer(result.body);
}

export async function create(
  context: Client,
  image: CreateImageRequest,
  options: ImagesCreateOptionalParams = { requestOptions: {} },
): Promise<ImagesResponse> {
  const result = await _createSend(context, image, options);
  return _createDeserialize(result);
}
