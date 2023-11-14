// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DictionaryContext as Client,
  UnknownValueGet200Response,
  UnknownValuePut204Response
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";
import {
  UnknownValueGetOptions,
  UnknownValuePutOptions
} from "../../models/options.js";

export function _unknownValueGetSend(
  context: Client,
  options: UnknownValueGetOptions = { requestOptions: {} }
): StreamableMethod<UnknownValueGet200Response> {
  return context
    .path("/type/dictionary/unknown")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _unknownValueGetDeserialize(
  result: UnknownValueGet200Response
): Promise<Record<string, unknown>> {
  if (result.status !== "200") {
    throw result.body;
  }

  return result.body;
}

export async function unknownValueGet(
  context: Client,
  options: UnknownValueGetOptions = { requestOptions: {} }
): Promise<Record<string, unknown>> {
  const result = await _unknownValueGetSend(context, options);
  return _unknownValueGetDeserialize(result);
}

export function _unknownValuePutSend(
  context: Client,
  body: Record<string, unknown>,
  options: UnknownValuePutOptions = { requestOptions: {} }
): StreamableMethod<UnknownValuePut204Response> {
  return context
    .path("/type/dictionary/unknown")
    .put({ ...operationOptionsToRequestParameters(options), body });
}

export async function _unknownValuePutDeserialize(
  result: UnknownValuePut204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function unknownValuePut(
  context: Client,
  body: Record<string, unknown>,
  options: UnknownValuePutOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _unknownValuePutSend(context, body, options);
  return _unknownValuePutDeserialize(result);
}
