// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DifferentSpreadFloatRecord } from "../../models/models.js";
import {
  AdditionalPropertiesContext as Client,
  SpreadDifferentFloatGet200Response,
  SpreadDifferentFloatPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  SpreadDifferentFloatGetOptionalParams,
  SpreadDifferentFloatPutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: SpreadDifferentFloatGetOptionalParams = { requestOptions: {} },
): StreamableMethod<SpreadDifferentFloatGet200Response> {
  return context
    .path("/type/property/additionalProperties/spreadDifferentRecordFloat")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: SpreadDifferentFloatGet200Response,
): Promise<DifferentSpreadFloatRecord> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as SpreadDifferentFloatGet200Response;
  return _result.body as any;
}

/** Get call */
export async function get(
  context: Client,
  options: SpreadDifferentFloatGetOptionalParams = { requestOptions: {} },
): Promise<DifferentSpreadFloatRecord> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: DifferentSpreadFloatRecord,
  options: SpreadDifferentFloatPutOptionalParams = { requestOptions: {} },
): StreamableMethod<SpreadDifferentFloatPut204Response> {
  return context
    .path("/type/property/additionalProperties/spreadDifferentRecordFloat")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: serializeRecord(body as any) as any,
    });
}

export async function _putDeserialize(
  result: SpreadDifferentFloatPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function put(
  context: Client,
  body: DifferentSpreadFloatRecord,
  options: SpreadDifferentFloatPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
