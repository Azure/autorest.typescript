// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { innerModelSerializer, InnerModel } from "../../models/models.js";
import { DictionaryContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
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
): StreamableMethod {
  return context
    .path("/type/dictionary/model")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<Record<string, InnerModel>> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body as any;
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
): StreamableMethod {
  return context
    .path("/type/dictionary/model")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: serializeRecord(body as any, innerModelSerializer) as any,
    });
}

export async function _putDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
