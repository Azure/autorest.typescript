// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  RemovedContext as Client,
  ModelV3OptionalParams,
  V2OptionalParams,
} from "./index.js";
import {
  ModelV2,
  modelV2Serializer,
  modelV2Deserializer,
  ModelV3,
  modelV3Serializer,
  modelV3Deserializer,
} from "../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _modelV3Send(
  context: Client,
  body: ModelV3,
  options: ModelV3OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/v3")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: modelV3Serializer(body),
    });
}

export async function _modelV3Deserialize(
  result: PathUncheckedResponse,
): Promise<ModelV3> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return modelV3Deserializer(result.body);
}

/** This operation will pass different paths and different request bodies based on different versions. */
export async function modelV3(
  context: Client,
  body: ModelV3,
  options: ModelV3OptionalParams = { requestOptions: {} },
): Promise<ModelV3> {
  const result = await _modelV3Send(context, body, options);
  return _modelV3Deserialize(result);
}

export function _v2Send(
  context: Client,
  body: ModelV2,
  options: V2OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/v2")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: modelV2Serializer(body),
    });
}

export async function _v2Deserialize(
  result: PathUncheckedResponse,
): Promise<ModelV2> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return modelV2Deserializer(result.body);
}

export async function v2(
  context: Client,
  body: ModelV2,
  options: V2OptionalParams = { requestOptions: {} },
): Promise<ModelV2> {
  const result = await _v2Send(context, body, options);
  return _v2Deserialize(result);
}
