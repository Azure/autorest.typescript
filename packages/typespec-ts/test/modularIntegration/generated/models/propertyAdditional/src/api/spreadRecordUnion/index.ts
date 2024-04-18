// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SpreadRecordForUnion } from "../../models/models.js";
import {
  AdditionalPropertiesContext as Client,
  SpreadRecordUnionGet200Response,
  SpreadRecordUnionPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  SpreadRecordUnionGetOptionalParams,
  SpreadRecordUnionPutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: SpreadRecordUnionGetOptionalParams = { requestOptions: {} },
): StreamableMethod<SpreadRecordUnionGet200Response> {
  return context
    .path("/type/property/additionalProperties/spreadRecordUnion")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: SpreadRecordUnionGet200Response,
): Promise<SpreadRecordForUnion> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    flag: result.body["flag"],
  };
}

/** Get call */
export async function get(
  context: Client,
  options: SpreadRecordUnionGetOptionalParams = { requestOptions: {} },
): Promise<SpreadRecordForUnion> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: SpreadRecordForUnion,
  options: SpreadRecordUnionPutOptionalParams = { requestOptions: {} },
): StreamableMethod<SpreadRecordUnionPut204Response> {
  return context
    .path("/type/property/additionalProperties/spreadRecordUnion")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _putDeserialize(
  result: SpreadRecordUnionPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function put(
  context: Client,
  body: SpreadRecordForUnion,
  options: SpreadRecordUnionPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
