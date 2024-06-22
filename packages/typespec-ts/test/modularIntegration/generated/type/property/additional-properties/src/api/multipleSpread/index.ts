// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  multipleSpreadRecordSerializer,
  MultipleSpreadRecord,
} from "../../models/models.js";
import {
  AdditionalPropertiesContext as Client,
  MultipleSpreadGet200Response,
  MultipleSpreadPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  MultipleSpreadGetOptionalParams,
  MultipleSpreadPutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: MultipleSpreadGetOptionalParams = { requestOptions: {} },
): StreamableMethod<MultipleSpreadGet200Response> {
  return context
    .path("/type/property/additionalProperties/multipleSpreadRecord")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: MultipleSpreadGet200Response,
): Promise<MultipleSpreadRecord> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body as any;
}

/** Get call */
export async function get(
  context: Client,
  options: MultipleSpreadGetOptionalParams = { requestOptions: {} },
): Promise<MultipleSpreadRecord> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: MultipleSpreadRecord,
  options: MultipleSpreadPutOptionalParams = { requestOptions: {} },
): StreamableMethod<MultipleSpreadPut204Response> {
  return context
    .path("/type/property/additionalProperties/multipleSpreadRecord")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: multipleSpreadRecordSerializer(body),
    });
}

export async function _putDeserialize(
  result: MultipleSpreadPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function put(
  context: Client,
  body: MultipleSpreadRecord,
  options: MultipleSpreadPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
