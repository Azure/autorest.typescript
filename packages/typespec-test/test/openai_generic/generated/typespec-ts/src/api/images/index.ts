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
} from "@azure-rest/core-client";
import { stringToUint8Array } from "@azure/core-util";
import {
  ImagesCreateOptions,
  ImagesCreateEditOptions,
  ImagesCreateVariationOptions,
} from "../../models/options.js";

export function _imagesCreateSend(
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

export async function _imagesCreateDeserialize(
  result: ImagesCreate200Response | ImagesCreateDefaultResponse
): Promise<ImagesResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    created: new Date(result.body["created"]),
    data: (result.body["data"] ?? []).map((p) => ({
      url: p["url"],
      b64Json:
        typeof p["b64_json"] === "string"
          ? stringToUint8Array(p["b64_json"], "base64")
          : p["b64_json"],
    })),
  };
}

export async function imagesCreate(
  context: Client,
  image: CreateImageRequest,
  options: ImagesCreateOptions = { requestOptions: {} }
): Promise<ImagesResponse> {
  const result = await _imagesCreateSend(context, image, options);
  return _imagesCreateDeserialize(result);
}

export function _imagesCreateEditSend(
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

export async function _imagesCreateEditDeserialize(
  result: ImagesCreateEdit200Response | ImagesCreateEditDefaultResponse
): Promise<ImagesResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    created: new Date(result.body["created"]),
    data: (result.body["data"] ?? []).map((p) => ({
      url: p["url"],
      b64Json:
        typeof p["b64_json"] === "string"
          ? stringToUint8Array(p["b64_json"], "base64")
          : p["b64_json"],
    })),
  };
}

export async function imagesCreateEdit(
  context: Client,
  image: CreateImageEditRequest,
  options: ImagesCreateEditOptions = { requestOptions: {} }
): Promise<ImagesResponse> {
  const result = await _imagesCreateEditSend(context, image, options);
  return _imagesCreateEditDeserialize(result);
}

export function _imagesCreateVariationSend(
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

export async function _imagesCreateVariationDeserialize(
  result:
    | ImagesCreateVariation200Response
    | ImagesCreateVariationDefaultResponse
): Promise<ImagesResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    created: new Date(result.body["created"]),
    data: (result.body["data"] ?? []).map((p) => ({
      url: p["url"],
      b64Json:
        typeof p["b64_json"] === "string"
          ? stringToUint8Array(p["b64_json"], "base64")
          : p["b64_json"],
    })),
  };
}

export async function imagesCreateVariation(
  context: Client,
  image: CreateImageVariationRequest,
  options: ImagesCreateVariationOptions = { requestOptions: {} }
): Promise<ImagesResponse> {
  const result = await _imagesCreateVariationSend(context, image, options);
  return _imagesCreateVariationDeserialize(result);
}
