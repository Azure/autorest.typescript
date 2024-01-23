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
  DatetimeValueGetOptions,
  DatetimeValuePutOptions,
} from "../../models/options.js";

export function _datetimeValueGetSend(
  context: Client,
  options: DatetimeValueGetOptions = { requestOptions: {} },
): StreamableMethod<DatetimeValueGet200Response> {
  return context
    .path("/type/dictionary/datetime")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _datetimeValueGetDeserialize(
  result: DatetimeValueGet200Response,
): Promise<Record<string, Date>> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const newResult: Record<string, Date> = {};
  Object.entries(result.body).forEach(([key, value]) => {
    newResult[key] = new Date(value);
  });
  return newResult;
}

export async function datetimeValueGet(
  context: Client,
  options: DatetimeValueGetOptions = { requestOptions: {} },
): Promise<Record<string, Date>> {
  const result = await _datetimeValueGetSend(context, options);
  return _datetimeValueGetDeserialize(result);
}

export function _datetimeValuePutSend(
  context: Client,
  body: Record<string, Date>,
  options: DatetimeValuePutOptions = { requestOptions: {} },
): StreamableMethod<DatetimeValuePut204Response> {
  const newBody: Record<string, string> = {};
  Object.entries(body).forEach(([key, value]) => {
    newBody[key] = value.toISOString();
  });
  return context
    .path("/type/dictionary/datetime")
    .put({ ...operationOptionsToRequestParameters(options), body: newBody });
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
  body: Record<string, Date>,
  options: DatetimeValuePutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _datetimeValuePutSend(context, body, options);
  return _datetimeValuePutDeserialize(result);
}
