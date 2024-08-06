// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DatetimeProperty } from "../../models/models.js";
import { ValueTypesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  DatetimeGetOptionalParams,
  DatetimePutOptionalParams,
} from "../../models/options.js";

export function _datetimeGetSend(
  context: Client,
  options: DatetimeGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/datetime")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _datetimeGetDeserialize(
  result: PathUncheckedResponse,
): Promise<DatetimeProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    property: new Date(result.body["property"]),
  };
}

/** Get call */
export async function datetimeGet(
  context: Client,
  options: DatetimeGetOptionalParams = { requestOptions: {} },
): Promise<DatetimeProperty> {
  const result = await _datetimeGetSend(context, options);
  return _datetimeGetDeserialize(result);
}

export function _datetimePutSend(
  context: Client,
  body: DatetimeProperty,
  options: DatetimePutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/datetime")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"].toISOString() },
    });
}

export async function _datetimePutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function datetimePut(
  context: Client,
  body: DatetimeProperty,
  options: DatetimePutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _datetimePutSend(context, body, options);
  return _datetimePutDeserialize(result);
}
