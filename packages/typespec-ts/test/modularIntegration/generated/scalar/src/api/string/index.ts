// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ScalarContext as Client,
  StringModelGet200Response,
  StringModelPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { StringGetOptions, StringPutOptions } from "../../models/options.js";

export function _stringGetSend(
  context: Client,
  options: StringGetOptions = { requestOptions: {} },
): StreamableMethod<StringModelGet200Response> {
  return context
    .path("/type/scalar/string")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _stringGetDeserialize(
  result: StringModelGet200Response,
): Promise<string> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

/** get string value */
export async function stringGet(
  context: Client,
  options: StringGetOptions = { requestOptions: {} },
): Promise<string> {
  const result = await _stringGetSend(context, options);
  return _stringGetDeserialize(result);
}

export function _stringPutSend(
  context: Client,
  body: string,
  options: StringPutOptions = { requestOptions: {} },
): StreamableMethod<StringModelPut204Response> {
  return context
    .path("/type/scalar/string")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _stringPutDeserialize(
  result: StringModelPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** put string value */
export async function stringPut(
  context: Client,
  body: string,
  options: StringPutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _stringPutSend(context, body, options);
  return _stringPutDeserialize(result);
}
