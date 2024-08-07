// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { FloatLiteralProperty } from "../../models/models.js";
import { ValueTypesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  FloatLiteralGetOptionalParams,
  FloatLiteralPutOptionalParams,
} from "../../models/options.js";

export function _floatLiteralGetSend(
  context: Client,
  options: FloatLiteralGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/float/literal")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _floatLiteralGetDeserialize(
  result: PathUncheckedResponse,
): Promise<FloatLiteralProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function floatLiteralGet(
  context: Client,
  options: FloatLiteralGetOptionalParams = { requestOptions: {} },
): Promise<FloatLiteralProperty> {
  const result = await _floatLiteralGetSend(context, options);
  return _floatLiteralGetDeserialize(result);
}

export function _floatLiteralPutSend(
  context: Client,
  body: FloatLiteralProperty,
  options: FloatLiteralPutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/float/literal")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _floatLiteralPutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function floatLiteralPut(
  context: Client,
  body: FloatLiteralProperty,
  options: FloatLiteralPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _floatLiteralPutSend(context, body, options);
  return _floatLiteralPutDeserialize(result);
}
