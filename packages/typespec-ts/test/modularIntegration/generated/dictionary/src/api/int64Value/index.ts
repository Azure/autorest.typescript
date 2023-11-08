// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DictionaryContext as Client,
  Int64ValueGet200Response,
  Int64ValuePut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  Int64ValueGetOptions,
  Int64ValuePutOptions,
} from "../../models/options.js";

export function _int64ValueGetSend(
  context: Client,
  options: Int64ValueGetOptions = { requestOptions: {} }
): StreamableMethod<Int64ValueGet200Response> {
  return context
    .path("/type/dictionary/int64")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _int64ValueGetDeserialize(
  result: Int64ValueGet200Response
): Promise<Record<string, number>> {
  if (result.status !== "200") {
    throw result.body;
  }

  return result.body;
}

export async function int64ValueGet(
  context: Client,
  options: Int64ValueGetOptions = { requestOptions: {} }
): Promise<Record<string, number>> {
  const result = await _int64ValueGetSend(context, options);
  return _int64ValueGetDeserialize(result);
}

export function _int64ValuePutSend(
  context: Client,
  body: Record<string, number>,
  options: Int64ValuePutOptions = { requestOptions: {} }
): StreamableMethod<Int64ValuePut204Response> {
  return context
    .path("/type/dictionary/int64")
    .put({ ...operationOptionsToRequestParameters(options) });
}

export async function _int64ValuePutDeserialize(
  result: Int64ValuePut204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function int64ValuePut(
  context: Client,
  body: Record<string, number>,
  options: Int64ValuePutOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _int64ValuePutSend(context, body, options);
  return _int64ValuePutDeserialize(result);
}
