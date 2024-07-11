// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  childModelSerializer,
  childFlattenModelSerializer,
  FlattenModel,
  NestedFlattenModel,
} from "../models/models.js";
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
} from "./options.js";

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
        properties: childModelSerializer(input.properties),
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
        properties: childFlattenModelSerializer(input.properties),
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
