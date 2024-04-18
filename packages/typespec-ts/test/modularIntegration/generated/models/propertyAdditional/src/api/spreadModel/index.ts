// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SpreadModelRecord } from "../../models/models.js";
import {
  AdditionalPropertiesContext as Client,
  SpreadModelGet200Response,
  SpreadModelPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  SpreadModelGetOptionalParams,
  SpreadModelPutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: SpreadModelGetOptionalParams = { requestOptions: {} },
): StreamableMethod<SpreadModelGet200Response> {
  return context
    .path("/type/property/additionalProperties/spreadRecordModel")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: SpreadModelGet200Response,
): Promise<SpreadModelRecord> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    knownProp: { state: result.body.knownProp["state"] },
  };
}

/** Get call */
export async function get(
  context: Client,
  options: SpreadModelGetOptionalParams = { requestOptions: {} },
): Promise<SpreadModelRecord> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: SpreadModelRecord,
  options: SpreadModelPutOptionalParams = { requestOptions: {} },
): StreamableMethod<SpreadModelPut204Response> {
  return context
    .path("/type/property/additionalProperties/spreadRecordModel")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _putDeserialize(
  result: SpreadModelPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function put(
  context: Client,
  body: SpreadModelRecord,
  options: SpreadModelPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
