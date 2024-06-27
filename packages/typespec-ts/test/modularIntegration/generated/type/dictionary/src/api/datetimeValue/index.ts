// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DatetimeValueGet200Response,
  DatetimeValuePut204Response,
  DictionaryContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  DatetimeValueGetOptionalParams,
  DatetimeValuePutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: DatetimeValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod<DatetimeValueGet200Response> {
  return context
    .path("/type/dictionary/datetime")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: DatetimeValueGet200Response,
): Promise<Record<string, Date>> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

export async function get(
  context: Client,
  options: DatetimeValueGetOptionalParams = { requestOptions: {} },
): Promise<Record<string, Date>> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: Record<string, Date>,
  options: DatetimeValuePutOptionalParams = { requestOptions: {} },
): StreamableMethod<DatetimeValuePut204Response> {
  return context
    .path("/type/dictionary/datetime")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _putDeserialize(
  result: DatetimeValuePut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function put(
  context: Client,
  body: Record<string, Date>,
  options: DatetimeValuePutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
