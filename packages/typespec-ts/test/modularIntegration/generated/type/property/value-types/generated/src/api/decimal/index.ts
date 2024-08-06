// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DecimalProperty } from "../../models/models.js";
import { ValueTypesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  DecimalGetOptionalParams,
  DecimalPutOptionalParams,
} from "../../models/options.js";

export function _decimalGetSend(
  context: Client,
  options: DecimalGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/decimal")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _decimalGetDeserialize(
  result: PathUncheckedResponse,
): Promise<DecimalProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function decimalGet(
  context: Client,
  options: DecimalGetOptionalParams = { requestOptions: {} },
): Promise<DecimalProperty> {
  const result = await _decimalGetSend(context, options);
  return _decimalGetDeserialize(result);
}

export function _decimalPutSend(
  context: Client,
  body: DecimalProperty,
  options: DecimalPutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/decimal")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _decimalPutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function decimalPut(
  context: Client,
  body: DecimalProperty,
  options: DecimalPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _decimalPutSend(context, body, options);
  return _decimalPutDeserialize(result);
}
