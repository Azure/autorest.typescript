// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { FlattenModel, NestedFlattenModel } from "../models/models.js";
import {
  FlattenContext as Client,
  PutFlattenModel200Response,
  PutNestedFlattenModel200Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
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
): StreamableMethod<PutFlattenModel200Response> {
  return context
    .path("/type/model/flatten/flattenModel")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        name: input["name"],
        properties: {
          description: input.properties["description"],
          age: input.properties["age"],
        },
      },
    });
}

export async function _putFlattenModelDeserialize(
  result: PutFlattenModel200Response,
): Promise<FlattenModel> {
  if (result.status !== "200") {
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
): StreamableMethod<PutNestedFlattenModel200Response> {
  return context
    .path("/type/model/flatten/nestedFlattenModel")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        name: input["name"],
        properties: {
          summary: input.properties["summary"],
          properties: {
            description: input.properties.properties["description"],
            age: input.properties.properties["age"],
          },
        },
      },
    });
}

export async function _putNestedFlattenModelDeserialize(
  result: PutNestedFlattenModel200Response,
): Promise<NestedFlattenModel> {
  if (result.status !== "200") {
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
