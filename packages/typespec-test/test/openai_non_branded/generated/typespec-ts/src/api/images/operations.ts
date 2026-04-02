// Licensed under the MIT License.

import { OpenAIContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  CreateImageEditRequest,
  createImageEditRequestSerializer,
  ImagesResponse,
  imagesResponseDeserializer,
  CreateImageVariationRequest,
  createImageVariationRequestSerializer,
} from "../../models/models.js";
import { ImagesCreateVariationOptionalParams, ImagesCreateEditOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

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
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: createImageVariationRequestSerializer(image),
    });
}

export async function _createVariationDeserialize(
  result: PathUncheckedResponse,
): Promise<ImagesResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);

    throw error;
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
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: createImageEditRequestSerializer(image),
    });
}

export async function _createEditDeserialize(
  result: PathUncheckedResponse,
): Promise<ImagesResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);

    throw error;
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
