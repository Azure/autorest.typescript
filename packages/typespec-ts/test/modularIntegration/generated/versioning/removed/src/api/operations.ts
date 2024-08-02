// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ModelV2 } from "../models/models.js";
import { RemovedContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { V2OptionalParams } from "../models/options.js";

export function _v2Send(
  context: Client,
  body: ModelV2,
  options: V2OptionalParams = { requestOptions: {} },
): StreamableMethod {
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

export async function _v2Deserialize(
  result: PathUncheckedResponse,
): Promise<ModelV2> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
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
