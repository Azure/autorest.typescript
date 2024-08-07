// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { IntLiteralProperty } from "../../models/models.js";
import { ValueTypesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  IntLiteralGetOptionalParams,
  IntLiteralPutOptionalParams,
} from "../../models/options.js";

export function _intLiteralGetSend(
  context: Client,
  options: IntLiteralGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/int/literal")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _intLiteralGetDeserialize(
  result: PathUncheckedResponse,
): Promise<IntLiteralProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function intLiteralGet(
  context: Client,
  options: IntLiteralGetOptionalParams = { requestOptions: {} },
): Promise<IntLiteralProperty> {
  const result = await _intLiteralGetSend(context, options);
  return _intLiteralGetDeserialize(result);
}

export function _intLiteralPutSend(
  context: Client,
  body: IntLiteralProperty,
  options: IntLiteralPutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/int/literal")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _intLiteralPutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function intLiteralPut(
  context: Client,
  body: IntLiteralProperty,
  options: IntLiteralPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _intLiteralPutSend(context, body, options);
  return _intLiteralPutDeserialize(result);
}
