// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  DatetimeValueGetOptionalParams,
  DatetimeValuePutOptionalParams,
} from "../../models/options.js";

export function _datetimeValueGetSend(
  context: Client,
  options: DatetimeValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/array/datetime")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _datetimeValueGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Date[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body === undefined
    ? result.body
    : result.body.map((p: any) => new Date(p));
}

export async function datetimeValueGet(
  context: Client,
  options: DatetimeValueGetOptionalParams = { requestOptions: {} },
): Promise<Date[]> {
  const result = await _datetimeValueGetSend(context, options);
  return _datetimeValueGetDeserialize(result);
}

export function _datetimeValuePutSend(
  context: Client,
  body: Date[],
  options: DatetimeValuePutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/array/datetime")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _datetimeValuePutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function datetimeValuePut(
  context: Client,
  body: Date[],
  options: DatetimeValuePutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _datetimeValuePutSend(context, body, options);
  return _datetimeValuePutDeserialize(result);
}
