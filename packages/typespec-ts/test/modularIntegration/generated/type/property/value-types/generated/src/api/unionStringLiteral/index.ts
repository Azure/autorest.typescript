// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionStringLiteralProperty } from "../../models/models.js";
import { ValueTypesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  UnionStringLiteralGetOptionalParams,
  UnionStringLiteralPutOptionalParams,
} from "../../models/options.js";

export function _unionStringLiteralGetSend(
  context: Client,
  options: UnionStringLiteralGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/union/string/literal")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _unionStringLiteralGetDeserialize(
  result: PathUncheckedResponse,
): Promise<UnionStringLiteralProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function unionStringLiteralGet(
  context: Client,
  options: UnionStringLiteralGetOptionalParams = { requestOptions: {} },
): Promise<UnionStringLiteralProperty> {
  const result = await _unionStringLiteralGetSend(context, options);
  return _unionStringLiteralGetDeserialize(result);
}

export function _unionStringLiteralPutSend(
  context: Client,
  body: UnionStringLiteralProperty,
  options: UnionStringLiteralPutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/union/string/literal")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _unionStringLiteralPutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function unionStringLiteralPut(
  context: Client,
  body: UnionStringLiteralProperty,
  options: UnionStringLiteralPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _unionStringLiteralPutSend(context, body, options);
  return _unionStringLiteralPutDeserialize(result);
}
