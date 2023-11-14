// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DictionaryContext as Client,
  StringValueGet200Response,
  StringValuePut204Response
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";
import {
  StringValueGetOptions,
  StringValuePutOptions
} from "../../models/options.js";

export function _stringValueGetSend(
  context: Client,
  options: StringValueGetOptions = { requestOptions: {} }
): StreamableMethod<StringValueGet200Response> {
  return context
    .path("/type/dictionary/string")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _stringValueGetDeserialize(
  result: StringValueGet200Response
): Promise<Record<string, string>> {
  if (result.status !== "200") {
    throw result.body;
  }

  return result.body;
}

export async function stringValueGet(
  context: Client,
  options: StringValueGetOptions = { requestOptions: {} }
): Promise<Record<string, string>> {
  const result = await _stringValueGetSend(context, options);
  return _stringValueGetDeserialize(result);
}

export function _stringValuePutSend(
  context: Client,
  body: Record<string, string>,
  options: StringValuePutOptions = { requestOptions: {} }
): StreamableMethod<StringValuePut204Response> {
  return context
    .path("/type/dictionary/string")
    .put({ ...operationOptionsToRequestParameters(options), body });
}

export async function _stringValuePutDeserialize(
  result: StringValuePut204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function stringValuePut(
  context: Client,
  body: Record<string, string>,
  options: StringValuePutOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _stringValuePutSend(context, body, options);
  return _stringValuePutDeserialize(result);
}
