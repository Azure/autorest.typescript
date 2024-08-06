// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { innerModelSerializer, ModelProperty } from "../../models/models.js";
import { ValueTypesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  ModelGetOptionalParams,
  ModelPutOptionalParams,
} from "../../models/options.js";

export function _modelGetSend(
  context: Client,
  options: ModelGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/model")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _modelGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ModelProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    property: { property: result.body.property["property"] },
  };
}

/** Get call */
export async function modelGet(
  context: Client,
  options: ModelGetOptionalParams = { requestOptions: {} },
): Promise<ModelProperty> {
  const result = await _modelGetSend(context, options);
  return _modelGetDeserialize(result);
}

export function _modelPutSend(
  context: Client,
  body: ModelProperty,
  options: ModelPutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/model")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: innerModelSerializer(body.property) },
    });
}

export async function _modelPutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function modelPut(
  context: Client,
  body: ModelProperty,
  options: ModelPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelPutSend(context, body, options);
  return _modelPutDeserialize(result);
}
