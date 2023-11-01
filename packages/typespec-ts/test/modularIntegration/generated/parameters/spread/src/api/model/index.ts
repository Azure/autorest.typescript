// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BodyParameter } from "../../models/models.js";
import {
  SpreadAsRequestBody204Response,
  SpreadContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { ModelModelSpreadAsRequestBodyOptions } from "../../models/options.js";

export function _modelSpreadAsRequestBodySend(
  context: Client,
  body: BodyParameter,
  options: ModelModelSpreadAsRequestBodyOptions = { requestOptions: {} }
): StreamableMethod<SpreadAsRequestBody204Response> {
  return context
    .path("/parameters/spread/model/request-body")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelSpreadAsRequestBodyDeserialize(
  result: SpreadAsRequestBody204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function modelSpreadAsRequestBody(
  context: Client,
  body: BodyParameter,
  options: ModelModelSpreadAsRequestBodyOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _modelSpreadAsRequestBodySend(context, body, options);
  return _modelSpreadAsRequestBodyDeserialize(result);
}
