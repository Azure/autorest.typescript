// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ModelProperty } from "../../models/models.js";
import {
  ModelGet200Response,
  ModelPut204Response,
  ValueTypesContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { ModelGetOptions, ModelPutOptions } from "../../models/options.js";

export function _modelGetSend(
  context: Client,
  options: ModelGetOptions = { requestOptions: {} },
): StreamableMethod<ModelGet200Response> {
  return context
    .path("/type/property/value-types/model")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _modelGetDeserialize(
  result: ModelGet200Response,
): Promise<ModelProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: { property: result.body.property["property"] },
  };
}

/** Get call */
export async function modelGet(
  context: Client,
  options: ModelGetOptions = { requestOptions: {} },
): Promise<ModelProperty> {
  const result = await _modelGetSend(context, options);
  return _modelGetDeserialize(result);
}

export function _modelPutSend(
  context: Client,
  body: ModelProperty,
  options: ModelPutOptions = { requestOptions: {} },
): StreamableMethod<ModelPut204Response> {
  return context
    .path("/type/property/value-types/model")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: { property: body.property["property"] } },
    });
}

export async function _modelPutDeserialize(
  result: ModelPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function modelPut(
  context: Client,
  body: ModelProperty,
  options: ModelPutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelPutSend(context, body, options);
  return _modelPutDeserialize(result);
}
