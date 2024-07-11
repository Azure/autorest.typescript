// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  modelForRecordSerializer,
  DifferentSpreadModelRecord,
} from "../../models/models.js";
import {
  AdditionalPropertiesContext as Client,
  SpreadDifferentModelGet200Response,
  SpreadDifferentModelPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  SpreadDifferentModelGetOptionalParams,
  SpreadDifferentModelPutOptionalParams,
} from "../options.js";

export function _getSend(
  context: Client,
  options: SpreadDifferentModelGetOptionalParams = { requestOptions: {} },
): StreamableMethod<SpreadDifferentModelGet200Response> {
  return context
    .path("/type/property/additionalProperties/spreadDifferentRecordModel")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: SpreadDifferentModelGet200Response,
): Promise<DifferentSpreadModelRecord> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body as any;
}

/** Get call */
export async function get(
  context: Client,
  options: SpreadDifferentModelGetOptionalParams = { requestOptions: {} },
): Promise<DifferentSpreadModelRecord> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: DifferentSpreadModelRecord,
  options: SpreadDifferentModelPutOptionalParams = { requestOptions: {} },
): StreamableMethod<SpreadDifferentModelPut204Response> {
  return context
    .path("/type/property/additionalProperties/spreadDifferentRecordModel")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: serializeRecord(body as any, modelForRecordSerializer) as any,
    });
}

export async function _putDeserialize(
  result: SpreadDifferentModelPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function put(
  context: Client,
  body: DifferentSpreadModelRecord,
  options: SpreadDifferentModelPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
