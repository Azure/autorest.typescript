// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { innerModelSerializer, InnerModel } from "../../models/models.js";
import {
  DictionaryContext as Client,
  ModelValueGet200Response,
  ModelValuePut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  ModelValueGetOptionalParams,
  ModelValuePutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: ModelValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod<ModelValueGet200Response> {
  return context
    .path("/type/dictionary/model")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: ModelValueGet200Response,
): Promise<Record<string, InnerModel>> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as ModelValueGet200Response;
  return _result.body as any;
}

export async function get(
  context: Client,
  options: ModelValueGetOptionalParams = { requestOptions: {} },
): Promise<Record<string, InnerModel>> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: Record<string, InnerModel>,
  options: ModelValuePutOptionalParams = { requestOptions: {} },
): StreamableMethod<ModelValuePut204Response> {
  return context
    .path("/type/dictionary/model")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: serializeRecord(body as any, innerModelSerializer) as any,
    });
}

export async function _putDeserialize(
  result: ModelValuePut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function put(
  context: Client,
  body: Record<string, InnerModel>,
  options: ModelValuePutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
