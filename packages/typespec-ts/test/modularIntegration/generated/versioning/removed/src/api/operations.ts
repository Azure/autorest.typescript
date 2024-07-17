// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ModelV2 } from "../models/models.js";
import { RemovedContext as Client, V2200Response } from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { V2OptionalParams } from "./options.js";

export function _v2Send(
  context: Client,
  body: ModelV2,
  options: V2OptionalParams = { requestOptions: {} },
): StreamableMethod<V2200Response> {
  return context
    .path("/v2")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        prop: body["prop"],
        enumProp: body["enumProp"],
        unionProp: body["unionProp"],
      },
    });
}

export async function _v2Deserialize(result: V2200Response): Promise<ModelV2> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    prop: result.body["prop"],
    enumProp: result.body["enumProp"],
    unionProp: result.body["unionProp"],
  };
}

export async function v2(
  context: Client,
  body: ModelV2,
  options: V2OptionalParams = { requestOptions: {} },
): Promise<ModelV2> {
  const result = await _v2Send(context, body, options);
  return _v2Deserialize(result);
}
