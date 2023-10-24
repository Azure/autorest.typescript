// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateImageRequest,
  ImagesResponse,
  CreateImageEditRequest,
  CreateImageVariationRequest,
} from "../../models/models.js";
import {
  CreateImage200Response,
  CreateImageDefaultResponse,
  CreateImageEdit200Response,
  CreateImageEditDefaultResponse,
  CreateImageVariation200Response,
  CreateImageVariationDefaultResponse,
  isUnexpected,
  OpenAIContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { stringToUint8Array, uint8ArrayToString } from "@azure/core-util";
import {
  CreateImageOptions,
  CreateImageEditOptions,
  CreateImageVariationOptions,
} from "../../models/options.js";

export function _createImageSend(
  context: Client,
  image: CreateImageRequest,
  options: CreateImageOptions = { requestOptions: {} }
): StreamableMethod<CreateImage200Response | CreateImageDefaultResponse> {
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

export async function _createImageDeserialize(
  result: CreateImage200Response | CreateImageDefaultResponse
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

export async function createImage(
  context: Client,
  image: CreateImageRequest,
  options: CreateImageOptions = { requestOptions: {} }
): Promise<ImagesResponse> {
  const result = await _createImageSend(context, image, options);
  return _createImageDeserialize(result);
}

export function _createImageEditSend(
  context: Client,
  image: CreateImageEditRequest,
  options: CreateImageEditOptions = { requestOptions: {} }
): StreamableMethod<
  CreateImageEdit200Response | CreateImageEditDefaultResponse
> {
  return context
    .path("/images/edits")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: {
        prompt: image["prompt"],
        image: uint8ArrayToString(image["image"], "base64"),
        mask:
          image["mask"] !== undefined
            ? uint8ArrayToString(image["mask"], "base64")
            : undefined,
        n: image["n"],
        size: image["size"],
        response_format: image["responseFormat"],
        user: image["user"],
      },
    });
}

export async function _createImageEditDeserialize(
  result: CreateImageEdit200Response | CreateImageEditDefaultResponse
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

export async function createImageEdit(
  context: Client,
  image: CreateImageEditRequest,
  options: CreateImageEditOptions = { requestOptions: {} }
): Promise<ImagesResponse> {
  const result = await _createImageEditSend(context, image, options);
  return _createImageEditDeserialize(result);
}

export function _createImageVariationSend(
  context: Client,
  image: CreateImageVariationRequest,
  options: CreateImageVariationOptions = { requestOptions: {} }
): StreamableMethod<
  CreateImageVariation200Response | CreateImageVariationDefaultResponse
> {
  return context
    .path("/images/variations")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: {
        image: uint8ArrayToString(image["image"], "base64"),
        n: image["n"],
        size: image["size"],
        response_format: image["responseFormat"],
        user: image["user"],
      },
    });
}

export async function _createImageVariationDeserialize(
  result: CreateImageVariation200Response | CreateImageVariationDefaultResponse
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

export async function createImageVariation(
  context: Client,
  image: CreateImageVariationRequest,
  options: CreateImageVariationOptions = { requestOptions: {} }
): Promise<ImagesResponse> {
  const result = await _createImageVariationSend(context, image, options);
  return _createImageVariationDeserialize(result);
}
