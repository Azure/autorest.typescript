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
  stringToUint8Array,
} from "@typespec/ts-http-runtime";
import {
  ImagesCreateOptions,
  ImagesCreateEditOptions,
  ImagesCreateVariationOptions,
} from "../../models/options.js";

export function _createSend(
  context: Client,
  image: CreateImageRequest,
  options: ImagesCreateOptions = { requestOptions: {} },
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
  result: ImagesCreate200Response | ImagesCreateDefaultResponse,
): Promise<ImagesResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    created: new Date(result.body["created"]),
    data: result.body["data"].map((p) => ({
      url: p["url"],
      b64Json:
        typeof p["b64_json"] === "string"
          ? stringToUint8Array(p["b64_json"], "base64")
          : p["b64_json"],
    })),
  };
}

export async function create(
  context: Client,
  image: CreateImageRequest,
  options: ImagesCreateOptions = { requestOptions: {} },
): Promise<ImagesResponse> {
  const result = await _createSend(context, image, options);
  return _createDeserialize(result);
}

export function _createEditSend(
  context: Client,
  image: CreateImageEditRequest,
  options: ImagesCreateEditOptions = { requestOptions: {} },
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
  result: ImagesCreateEdit200Response | ImagesCreateEditDefaultResponse,
): Promise<ImagesResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    created: new Date(result.body["created"]),
    data: result.body["data"].map((p) => ({
      url: p["url"],
      b64Json:
        typeof p["b64_json"] === "string"
          ? stringToUint8Array(p["b64_json"], "base64")
          : p["b64_json"],
    })),
  };
}

export async function createEdit(
  context: Client,
  image: CreateImageEditRequest,
  options: ImagesCreateEditOptions = { requestOptions: {} },
): Promise<ImagesResponse> {
  const result = await _createEditSend(context, image, options);
  return _createEditDeserialize(result);
}

export function _createVariationSend(
  context: Client,
  image: CreateImageVariationRequest,
  options: ImagesCreateVariationOptions = { requestOptions: {} },
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
    | ImagesCreateVariationDefaultResponse,
): Promise<ImagesResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    created: new Date(result.body["created"]),
    data: result.body["data"].map((p) => ({
      url: p["url"],
      b64Json:
        typeof p["b64_json"] === "string"
          ? stringToUint8Array(p["b64_json"], "base64")
          : p["b64_json"],
    })),
  };
}

export async function createVariation(
  context: Client,
  image: CreateImageVariationRequest,
  options: ImagesCreateVariationOptions = { requestOptions: {} },
): Promise<ImagesResponse> {
  const result = await _createVariationSend(context, image, options);
  return _createVariationDeserialize(result);
}
