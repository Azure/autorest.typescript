// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  CreateImageRequest,
  ImagesResponse,
  CreateImageEditRequest,
  CreateImageVariationRequest,
} from "../../models/models.js";
import { OpenAIContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { uint8ArrayToString, stringToUint8Array } from "@azure/core-util";
import {
  ImagesCreateOptionalParams,
  ImagesCreateEditOptionalParams,
  ImagesCreateVariationOptionalParams,
} from "../../models/options.js";

export function _createSend(
  context: Client,
  image: CreateImageRequest,
  options: ImagesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
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
  result: PathUncheckedResponse,
): Promise<ImagesResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    created: new Date(result.body["created"]),
    data: result.body["data"].map((p: any) => {
      return {
        url: p["url"],
        b64Json:
          typeof p["b64_json"] === "string"
            ? stringToUint8Array(p["b64_json"], "string")
            : p["b64_json"],
      };
    }),
  };
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
): StreamableMethod {
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

export async function _createEditDeserialize(
  result: PathUncheckedResponse,
): Promise<ImagesResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    created: new Date(result.body["created"]),
    data: result.body["data"].map((p: any) => {
      return {
        url: p["url"],
        b64Json:
          typeof p["b64_json"] === "string"
            ? stringToUint8Array(p["b64_json"], "string")
            : p["b64_json"],
      };
    }),
  };
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
): StreamableMethod {
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

export async function _createVariationDeserialize(
  result: PathUncheckedResponse,
): Promise<ImagesResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    created: new Date(result.body["created"]),
    data: result.body["data"].map((p: any) => {
      return {
        url: p["url"],
        b64Json:
          typeof p["b64_json"] === "string"
            ? stringToUint8Array(p["b64_json"], "string")
            : p["b64_json"],
      };
    }),
  };
}

export async function createVariation(
  context: Client,
  image: CreateImageVariationRequest,
  options: ImagesCreateVariationOptionalParams = { requestOptions: {} },
): Promise<ImagesResponse> {
  const result = await _createVariationSend(context, image, options);
  return _createVariationDeserialize(result);
}
