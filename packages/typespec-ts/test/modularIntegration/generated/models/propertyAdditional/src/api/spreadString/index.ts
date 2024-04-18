// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SpreadStringRecord } from "../../models/models.js";
import {
  AdditionalPropertiesContext as Client,
  SpreadStringGet200Response,
  SpreadStringPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  SpreadStringGetOptionalParams,
  SpreadStringPutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: SpreadStringGetOptionalParams = { requestOptions: {} },
): StreamableMethod<SpreadStringGet200Response> {
  return context
    .path("/type/property/additionalProperties/spreadRecordString")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: SpreadStringGet200Response,
): Promise<SpreadStringRecord> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
  };
}

/** Get call */
export async function get(
  context: Client,
  options: SpreadStringGetOptionalParams = { requestOptions: {} },
): Promise<SpreadStringRecord> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: SpreadStringRecord,
  options: SpreadStringPutOptionalParams = { requestOptions: {} },
): StreamableMethod<SpreadStringPut204Response> {
  return context
    .path("/type/property/additionalProperties/spreadRecordString")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _putDeserialize(
  result: SpreadStringPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function put(
  context: Client,
  body: SpreadStringRecord,
  options: SpreadStringPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
