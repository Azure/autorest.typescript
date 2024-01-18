// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { InnerModel } from "../../models/models.js";
import {
  DictionaryContext as Client,
  RecursiveModelValueGet200Response,
  RecursiveModelValuePut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  RecursiveModelValueGetOptions,
  RecursiveModelValuePutOptions,
} from "../../models/options.js";

export function _recursiveModelValueGetSend(
  context: Client,
  options: RecursiveModelValueGetOptions = { requestOptions: {} },
): StreamableMethod<RecursiveModelValueGet200Response> {
  return context
    .path("/type/dictionary/model/recursive")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _recursiveModelValueGetDeserialize(
  result: RecursiveModelValueGet200Response,
): Promise<Record<string, InnerModel>> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

export async function recursiveModelValueGet(
  context: Client,
  options: RecursiveModelValueGetOptions = { requestOptions: {} },
): Promise<Record<string, InnerModel>> {
  const result = await _recursiveModelValueGetSend(context, options);
  return _recursiveModelValueGetDeserialize(result);
}

export function _recursiveModelValuePutSend(
  context: Client,
  body: Record<string, InnerModel>,
  options: RecursiveModelValuePutOptions = { requestOptions: {} },
): StreamableMethod<RecursiveModelValuePut204Response> {
  return context
    .path("/type/dictionary/model/recursive")
    .put({ ...operationOptionsToRequestParameters(options) });
}

export async function _recursiveModelValuePutDeserialize(
  result: RecursiveModelValuePut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function recursiveModelValuePut(
  context: Client,
  body: Record<string, InnerModel>,
  options: RecursiveModelValuePutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _recursiveModelValuePutSend(context, body, options);
  return _recursiveModelValuePutDeserialize(result);
}
