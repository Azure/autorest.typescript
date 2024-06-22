// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  spreadFloatRecordSerializer,
  SpreadFloatRecord,
} from "../../models/models.js";
import {
  AdditionalPropertiesContext as Client,
  SpreadFloatGet200Response,
  SpreadFloatPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  SpreadFloatGetOptionalParams,
  SpreadFloatPutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: SpreadFloatGetOptionalParams = { requestOptions: {} },
): StreamableMethod<SpreadFloatGet200Response> {
  return context
    .path("/type/property/additionalProperties/spreadRecordFloat")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: SpreadFloatGet200Response,
): Promise<SpreadFloatRecord> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body as any;
}

/** Get call */
export async function get(
  context: Client,
  options: SpreadFloatGetOptionalParams = { requestOptions: {} },
): Promise<SpreadFloatRecord> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: SpreadFloatRecord,
  options: SpreadFloatPutOptionalParams = { requestOptions: {} },
): StreamableMethod<SpreadFloatPut204Response> {
  return context
    .path("/type/property/additionalProperties/spreadRecordFloat")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: spreadFloatRecordSerializer(body),
    });
}

export async function _putDeserialize(
  result: SpreadFloatPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function put(
  context: Client,
  body: SpreadFloatRecord,
  options: SpreadFloatPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
