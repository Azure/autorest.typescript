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
import { GetOptions, PutOptions } from "../../models/options.js";

export function _stringModelGetSend(
  context: Client,
  options: GetOptions = { requestOptions: {} },
): StreamableMethod<StringModelGet200Response> {
  return context
    .path("/type/scalar/string")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _stringModelGetDeserialize(
  result: StringModelGet200Response,
): Promise<string> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

/** get string value */
export async function stringModelGet(
  context: Client,
  options: GetOptions = { requestOptions: {} },
): Promise<string> {
  const result = await _stringModelGetSend(context, options);
  return _stringModelGetDeserialize(result);
}

export function _stringModelPutSend(
  context: Client,
  body: string,
  options: PutOptions = { requestOptions: {} },
): StreamableMethod<StringModelPut204Response> {
  return context
    .path("/type/scalar/string")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _stringModelPutDeserialize(
  result: StringModelPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** put string value */
export async function stringModelPut(
  context: Client,
  body: string,
  options: PutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _stringModelPutSend(context, body, options);
  return _stringModelPutDeserialize(result);
}
