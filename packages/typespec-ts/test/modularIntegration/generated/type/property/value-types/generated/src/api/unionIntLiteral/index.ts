// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionIntLiteralProperty } from "../../models/models.js";
import { ValueTypesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  UnionIntLiteralGetOptionalParams,
  UnionIntLiteralPutOptionalParams,
} from "../../models/options.js";

export function _unionIntLiteralGetSend(
  context: Client,
  options: UnionIntLiteralGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/union/int/literal")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _unionIntLiteralGetDeserialize(
  result: PathUncheckedResponse,
): Promise<UnionIntLiteralProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function unionIntLiteralGet(
  context: Client,
  options: UnionIntLiteralGetOptionalParams = { requestOptions: {} },
): Promise<UnionIntLiteralProperty> {
  const result = await _unionIntLiteralGetSend(context, options);
  return _unionIntLiteralGetDeserialize(result);
}

export function _unionIntLiteralPutSend(
  context: Client,
  body: UnionIntLiteralProperty,
  options: UnionIntLiteralPutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/union/int/literal")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _unionIntLiteralPutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function unionIntLiteralPut(
  context: Client,
  body: UnionIntLiteralProperty,
  options: UnionIntLiteralPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _unionIntLiteralPutSend(context, body, options);
  return _unionIntLiteralPutDeserialize(result);
}
