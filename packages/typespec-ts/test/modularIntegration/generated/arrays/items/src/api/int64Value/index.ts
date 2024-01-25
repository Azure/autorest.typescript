// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ArrayContext as Client,
  Int64ValueGet200Response,
  Int64ValuePut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  Int64ValueGetOptions,
  Int64ValuePutOptions,
} from "../../models/options.js";

export function _int64ValueGetSend(
  context: Client,
  options: Int64ValueGetOptions = { requestOptions: {} },
): StreamableMethod<Int64ValueGet200Response> {
  return context
    .path("/type/array/int64")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _int64ValueGetDeserialize(
  result: Int64ValueGet200Response,
): Promise<number[]> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

export async function int64ValueGet(
  context: Client,
  options: Int64ValueGetOptions = { requestOptions: {} },
): Promise<number[]> {
  const result = await _int64ValueGetSend(context, options);
  return _int64ValueGetDeserialize(result);
}

export function _int64ValuePutSend(
  context: Client,
  body: number[],
  options: Int64ValuePutOptions = { requestOptions: {} },
): StreamableMethod<Int64ValuePut204Response> {
  return context
    .path("/type/array/int64")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _int64ValuePutDeserialize(
  result: Int64ValuePut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function int64ValuePut(
  context: Client,
  body: number[],
  options: Int64ValuePutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _int64ValuePutSend(context, body, options);
  return _int64ValuePutDeserialize(result);
}
