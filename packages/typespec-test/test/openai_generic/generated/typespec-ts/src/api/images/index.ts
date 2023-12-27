// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateImageRequest,
  ImagesResponse,
  CreateImageEditRequest,
  CreateImageVariationRequest,
} from "../../models/models.js";
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
import { reshape } from "@azure/core-util";
import {
  ImagesCreateOptions,
  ImagesCreateEditOptions,
  ImagesCreateVariationOptions,
} from "../../models/options.js";

export function _createSend(
  context: Client,
  image: CreateImageRequest,
  options: ImagesCreateOptions = { requestOptions: {} }
): StreamableMethod<ImagesCreate200Response | ImagesCreateDefaultResponse> {
  return context
    .path("/images/generations")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        prompt: image["prompt"],
        n: image["n"],
        size: image["size"],
        response_format: image["responseFormat"],
        user: image["user"],
      },
    });
}

export async function _createDeserialize(
  result: ImagesCreate200Response | ImagesCreateDefaultResponse
): Promise<ImagesResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  deserializedResponse = reshape(
    deserializedResponse,
    "created",
    (value) => new Date(value as string)
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "data[].b64_json",
    "b64Json"
  );
  return deserializedResponse as ImagesResponse;
}

export async function create(
  context: Client,
  image: CreateImageRequest,
  options: ImagesCreateOptions = { requestOptions: {} }
): Promise<ImagesResponse> {
  const result = await _createSend(context, image, options);
  return _createDeserialize(result);
}

export function _createEditSend(
  context: Client,
  image: CreateImageEditRequest,
  options: ImagesCreateEditOptions = { requestOptions: {} }
): StreamableMethod<
  ImagesCreateEdit200Response | ImagesCreateEditDefaultResponse
> {
  return context
    .path("/images/edits")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: {
        prompt: image["prompt"],
        image: image["image"],
        mask: image["mask"],
        n: image["n"],
        size: image["size"],
        response_format: image["responseFormat"],
        user: image["user"],
      },
    });
}

export async function _createEditDeserialize(
  result: ImagesCreateEdit200Response | ImagesCreateEditDefaultResponse
): Promise<ImagesResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  deserializedResponse = reshape(
    deserializedResponse,
    "created",
    (value) => new Date(value as string)
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "data[].b64_json",
    "b64Json"
  );
  return deserializedResponse as ImagesResponse;
}

export async function createEdit(
  context: Client,
  image: CreateImageEditRequest,
  options: ImagesCreateEditOptions = { requestOptions: {} }
): Promise<ImagesResponse> {
  const result = await _createEditSend(context, image, options);
  return _createEditDeserialize(result);
}

export function _createVariationSend(
  context: Client,
  image: CreateImageVariationRequest,
  options: ImagesCreateVariationOptions = { requestOptions: {} }
): StreamableMethod<
  ImagesCreateVariation200Response | ImagesCreateVariationDefaultResponse
> {
  return context
    .path("/images/variations")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: {
        image: image["image"],
        n: image["n"],
        size: image["size"],
        response_format: image["responseFormat"],
        user: image["user"],
      },
    });
}

export async function _createVariationDeserialize(
  result:
    | ImagesCreateVariation200Response
    | ImagesCreateVariationDefaultResponse
): Promise<ImagesResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  deserializedResponse = reshape(
    deserializedResponse,
    "created",
    (value) => new Date(value as string)
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "data[].b64_json",
    "b64Json"
  );
  return deserializedResponse as ImagesResponse;
}

export async function createVariation(
  context: Client,
  image: CreateImageVariationRequest,
  options: ImagesCreateVariationOptions = { requestOptions: {} }
): Promise<ImagesResponse> {
  const result = await _createVariationSend(context, image, options);
  return _createVariationDeserialize(result);
}
