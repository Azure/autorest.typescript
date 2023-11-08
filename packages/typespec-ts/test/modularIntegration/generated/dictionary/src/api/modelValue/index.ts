// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { InnerModel } from "../../models/models.js";
import {
  DictionaryContext as Client,
  ModelValueGet200Response,
  ModelValuePut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  ModelValueGetOptions,
  ModelValuePutOptions,
} from "../../models/options.js";

export function _modelValueGetSend(
  context: Client,
  options: ModelValueGetOptions = { requestOptions: {} }
): StreamableMethod<ModelValueGet200Response> {
  return context
    .path("/type/dictionary/model")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _modelValueGetDeserialize(
  result: ModelValueGet200Response
): Promise<Record<string, InnerModel>> {
  if (result.status !== "200") {
    throw result.body;
  }

  return result.body;
}

export async function modelValueGet(
  context: Client,
  options: ModelValueGetOptions = { requestOptions: {} }
): Promise<Record<string, InnerModel>> {
  const result = await _modelValueGetSend(context, options);
  return _modelValueGetDeserialize(result);
}

export function _modelValuePutSend(
  context: Client,
  body: Record<string, InnerModel>,
  options: ModelValuePutOptions = { requestOptions: {} }
): StreamableMethod<ModelValuePut204Response> {
  return context
    .path("/type/dictionary/model")
    .put({ ...operationOptionsToRequestParameters(options) });
}

export async function _modelValuePutDeserialize(
  result: ModelValuePut204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function modelValuePut(
  context: Client,
  body: Record<string, InnerModel>,
  options: ModelValuePutOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _modelValuePutSend(context, body, options);
  return _modelValuePutDeserialize(result);
}
