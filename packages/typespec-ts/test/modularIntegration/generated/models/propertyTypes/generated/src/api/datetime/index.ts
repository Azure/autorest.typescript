// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DatetimeProperty } from "../../models/models.js";
import {
  DatetimeGet200Response,
  DatetimePut204Response,
  ValueTypesContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  DatetimeGetOptions,
  DatetimePutOptions,
} from "../../models/options.js";

export function _datetimeGetSend(
  context: Client,
  options: DatetimeGetOptions = { requestOptions: {} },
): StreamableMethod<DatetimeGet200Response> {
  return context
    .path("/type/property/value-types/datetime")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _datetimeGetDeserialize(
  result: DatetimeGet200Response,
): Promise<DatetimeProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: new Date(result.body["property"]),
  };
}

/** Get call */
export async function datetimeGet(
  context: Client,
  options: DatetimeGetOptions = { requestOptions: {} },
): Promise<DatetimeProperty> {
  const result = await _datetimeGetSend(context, options);
  return _datetimeGetDeserialize(result);
}

export function _datetimePutSend(
  context: Client,
  body: DatetimeProperty,
  options: DatetimePutOptions = { requestOptions: {} },
): StreamableMethod<DatetimePut204Response> {
  return context
    .path("/type/property/value-types/datetime")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"].toISOString() },
    });
}

export async function _datetimePutDeserialize(
  result: DatetimePut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function datetimePut(
  context: Client,
  body: DatetimeProperty,
  options: DatetimePutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _datetimePutSend(context, body, options);
  return _datetimePutDeserialize(result);
}
