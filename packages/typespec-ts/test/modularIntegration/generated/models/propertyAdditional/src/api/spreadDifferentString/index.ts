// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AdditionalPropertiesContext as Client,
  SpreadDifferentStringGet200Response,
  SpreadDifferentStringPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  SpreadDifferentStringGetOptionalParams,
  SpreadDifferentStringPutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: SpreadDifferentStringGetOptionalParams = { requestOptions: {} },
): StreamableMethod<SpreadDifferentStringGet200Response> {
  return context
    .path("/type/property/additionalProperties/spreadDifferentRecordString")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: SpreadDifferentStringGet200Response,
): Promise<Record<string, string>> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
  };
}

/** Get call */
export async function get(
  context: Client,
  options: SpreadDifferentStringGetOptionalParams = { requestOptions: {} },
): Promise<Record<string, string>> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: Record<string, string>,
  options: SpreadDifferentStringPutOptionalParams = { requestOptions: {} },
): StreamableMethod<SpreadDifferentStringPut204Response> {
  return context
    .path("/type/property/additionalProperties/spreadDifferentRecordString")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _putDeserialize(
  result: SpreadDifferentStringPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function put(
  context: Client,
  body: Record<string, string>,
  options: SpreadDifferentStringPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
