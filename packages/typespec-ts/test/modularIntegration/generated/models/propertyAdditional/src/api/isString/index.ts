// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AdditionalPropertiesContext as Client,
  IsStringGet200Response,
  IsStringPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  IsStringGetOptionalParams,
  IsStringPutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: IsStringGetOptionalParams = { requestOptions: {} },
): StreamableMethod<IsStringGet200Response> {
  return context
    .path("/type/property/additionalProperties/isRecordstring")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: IsStringGet200Response,
): Promise<Record<string, string>> {
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
  options: IsStringGetOptionalParams = { requestOptions: {} },
): Promise<Record<string, string>> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: Record<string, string>,
  options: IsStringPutOptionalParams = { requestOptions: {} },
): StreamableMethod<IsStringPut204Response> {
  return context
    .path("/type/property/additionalProperties/isRecordstring")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _putDeserialize(
  result: IsStringPut204Response,
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
  options: IsStringPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
