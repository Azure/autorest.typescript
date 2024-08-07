// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  childModelSerializer,
  childFlattenModelSerializer,
  FlattenModel,
  NestedFlattenModel,
} from "../models/models.js";
import { FlattenContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  PutFlattenModelOptionalParams,
  PutNestedFlattenModelOptionalParams,
} from "../models/options.js";

export function _putFlattenModelSend(
  context: Client,
  input: FlattenModel,
  options: PutFlattenModelOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/model/flatten/flattenModel")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        name: input["name"],
        properties: childModelSerializer(input.properties),
      },
    });
}

export async function _putFlattenModelDeserialize(
  result: PathUncheckedResponse,
): Promise<FlattenModel> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
    properties: {
      description: result.body.properties["description"],
      age: result.body.properties["age"],
    },
  };
}

export async function putFlattenModel(
  context: Client,
  input: FlattenModel,
  options: PutFlattenModelOptionalParams = { requestOptions: {} },
): Promise<FlattenModel> {
  const result = await _putFlattenModelSend(context, input, options);
  return _putFlattenModelDeserialize(result);
}

export function _putNestedFlattenModelSend(
  context: Client,
  input: NestedFlattenModel,
  options: PutNestedFlattenModelOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/model/flatten/nestedFlattenModel")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        name: input["name"],
        properties: childFlattenModelSerializer(input.properties),
      },
    });
}

export async function _putNestedFlattenModelDeserialize(
  result: PathUncheckedResponse,
): Promise<NestedFlattenModel> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
    properties: {
      summary: result.body.properties["summary"],
      properties: {
        description: result.body.properties.properties["description"],
        age: result.body.properties.properties["age"],
      },
    },
  };
}

export async function putNestedFlattenModel(
  context: Client,
  input: NestedFlattenModel,
  options: PutNestedFlattenModelOptionalParams = { requestOptions: {} },
): Promise<NestedFlattenModel> {
  const result = await _putNestedFlattenModelSend(context, input, options);
  return _putNestedFlattenModelDeserialize(result);
}
