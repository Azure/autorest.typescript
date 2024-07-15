// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { innerModelSerializer, InnerModel } from "../../models/models.js";
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
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  RecursiveModelValueGetOptionalParams,
  RecursiveModelValuePutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: RecursiveModelValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod<RecursiveModelValueGet200Response> {
  return context
    .path("/type/dictionary/model/recursive")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: RecursiveModelValueGet200Response,
): Promise<Record<string, InnerModel>> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body as any;
}

export async function get(
  context: Client,
  options: RecursiveModelValueGetOptionalParams = { requestOptions: {} },
): Promise<Record<string, InnerModel>> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: Record<string, InnerModel>,
  options: RecursiveModelValuePutOptionalParams = { requestOptions: {} },
): StreamableMethod<RecursiveModelValuePut204Response> {
  return context
    .path("/type/dictionary/model/recursive")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: serializeRecord(body as any, innerModelSerializer) as any,
    });
}

export async function _putDeserialize(
  result: RecursiveModelValuePut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function put(
  context: Client,
  body: Record<string, InnerModel>,
  options: RecursiveModelValuePutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
