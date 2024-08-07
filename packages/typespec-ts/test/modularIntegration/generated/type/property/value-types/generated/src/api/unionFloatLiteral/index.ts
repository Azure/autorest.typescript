// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionFloatLiteralProperty } from "../../models/models.js";
import { ValueTypesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  UnionFloatLiteralGetOptionalParams,
  UnionFloatLiteralPutOptionalParams,
} from "../../models/options.js";

export function _unionFloatLiteralGetSend(
  context: Client,
  options: UnionFloatLiteralGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/union/float/literal")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _unionFloatLiteralGetDeserialize(
  result: PathUncheckedResponse,
): Promise<UnionFloatLiteralProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function unionFloatLiteralGet(
  context: Client,
  options: UnionFloatLiteralGetOptionalParams = { requestOptions: {} },
): Promise<UnionFloatLiteralProperty> {
  const result = await _unionFloatLiteralGetSend(context, options);
  return _unionFloatLiteralGetDeserialize(result);
}

export function _unionFloatLiteralPutSend(
  context: Client,
  body: UnionFloatLiteralProperty,
  options: UnionFloatLiteralPutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/union/float/literal")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _unionFloatLiteralPutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function unionFloatLiteralPut(
  context: Client,
  body: UnionFloatLiteralProperty,
  options: UnionFloatLiteralPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _unionFloatLiteralPutSend(context, body, options);
  return _unionFloatLiteralPutDeserialize(result);
}
