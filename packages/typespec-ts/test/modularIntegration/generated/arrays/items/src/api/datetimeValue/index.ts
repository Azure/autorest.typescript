// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ArrayContext as Client,
  DatetimeValueGet200Response,
  DatetimeValuePut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  DatetimeValueGetOptions,
  DatetimeValuePutOptions,
} from "../../models/options.js";

export function _datetimeValueGetSend(
  context: Client,
  options: DatetimeValueGetOptions = { requestOptions: {} },
): StreamableMethod<DatetimeValueGet200Response> {
  return context
    .path("/type/array/datetime")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _datetimeValueGetDeserialize(
  result: DatetimeValueGet200Response,
): Promise<Date[]> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return !result.body ? result.body : result.body.map((p) => new Date(p));
}

export async function datetimeValueGet(
  context: Client,
  options: DatetimeValueGetOptions = { requestOptions: {} },
): Promise<Date[]> {
  const result = await _datetimeValueGetSend(context, options);
  return _datetimeValueGetDeserialize(result);
}

export function _datetimeValuePutSend(
  context: Client,
  body: Date[],
  options: DatetimeValuePutOptions = { requestOptions: {} },
): StreamableMethod<DatetimeValuePut204Response> {
  return context
    .path("/type/array/datetime")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _datetimeValuePutDeserialize(
  result: DatetimeValuePut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function datetimeValuePut(
  context: Client,
  body: Date[],
  options: DatetimeValuePutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _datetimeValuePutSend(context, body, options);
  return _datetimeValuePutDeserialize(result);
}
