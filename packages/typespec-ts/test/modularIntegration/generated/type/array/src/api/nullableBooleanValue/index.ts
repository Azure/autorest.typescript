// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ArrayContext as Client,
  NullableBooleanValueGet200Response,
  NullableBooleanValuePut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  NullableBooleanValueGetOptionalParams,
  NullableBooleanValuePutOptionalParams,
} from "../../models/options.js";

export function _nullableBooleanValueGetSend(
  context: Client,
  options: NullableBooleanValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod<NullableBooleanValueGet200Response> {
  return context
    .path("/type/array/nullable-boolean")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _nullableBooleanValueGetDeserialize(
  result: NullableBooleanValueGet200Response,
): Promise<(boolean | null)[]> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

export async function nullableBooleanValueGet(
  context: Client,
  options: NullableBooleanValueGetOptionalParams = { requestOptions: {} },
): Promise<(boolean | null)[]> {
  const result = await _nullableBooleanValueGetSend(context, options);
  return _nullableBooleanValueGetDeserialize(result);
}

export function _nullableBooleanValuePutSend(
  context: Client,
  body: (boolean | null)[],
  options: NullableBooleanValuePutOptionalParams = { requestOptions: {} },
): StreamableMethod<NullableBooleanValuePut204Response> {
  return context
    .path("/type/array/nullable-boolean")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _nullableBooleanValuePutDeserialize(
  result: NullableBooleanValuePut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function nullableBooleanValuePut(
  context: Client,
  body: (boolean | null)[],
  options: NullableBooleanValuePutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _nullableBooleanValuePutSend(context, body, options);
  return _nullableBooleanValuePutDeserialize(result);
}
