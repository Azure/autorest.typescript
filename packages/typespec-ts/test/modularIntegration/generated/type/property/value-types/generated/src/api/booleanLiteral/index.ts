// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BooleanLiteralProperty } from "../../models/models.js";
import { ValueTypesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  BooleanLiteralGetOptionalParams,
  BooleanLiteralPutOptionalParams,
} from "../../models/options.js";

export function _booleanLiteralGetSend(
  context: Client,
  options: BooleanLiteralGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/boolean/literal")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _booleanLiteralGetDeserialize(
  result: PathUncheckedResponse,
): Promise<BooleanLiteralProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function booleanLiteralGet(
  context: Client,
  options: BooleanLiteralGetOptionalParams = { requestOptions: {} },
): Promise<BooleanLiteralProperty> {
  const result = await _booleanLiteralGetSend(context, options);
  return _booleanLiteralGetDeserialize(result);
}

export function _booleanLiteralPutSend(
  context: Client,
  body: BooleanLiteralProperty,
  options: BooleanLiteralPutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/boolean/literal")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _booleanLiteralPutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function booleanLiteralPut(
  context: Client,
  body: BooleanLiteralProperty,
  options: BooleanLiteralPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _booleanLiteralPutSend(context, body, options);
  return _booleanLiteralPutDeserialize(result);
}
