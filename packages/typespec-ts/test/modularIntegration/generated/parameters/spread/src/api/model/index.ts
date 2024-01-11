// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BodyParameter } from "../../models/models.js";
import {
  ModelSpreadAsRequestBody204Response,
  SpreadContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { ModelSpreadAsRequestBodyOptions } from "../../models/options.js";

export function _modelSpreadAsRequestBodySend(
  context: Client,
  body: BodyParameter,
  options: ModelSpreadAsRequestBodyOptions = { requestOptions: {} },
): StreamableMethod<ModelSpreadAsRequestBody204Response> {
  return context
    .path("/parameters/spread/model/request-body")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelSpreadAsRequestBodyDeserialize(
  result: ModelSpreadAsRequestBody204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelSpreadAsRequestBody(
  context: Client,
  body: BodyParameter,
  options: ModelSpreadAsRequestBodyOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _modelSpreadAsRequestBodySend(context, body, options);
  return _modelSpreadAsRequestBodyDeserialize(result);
}
