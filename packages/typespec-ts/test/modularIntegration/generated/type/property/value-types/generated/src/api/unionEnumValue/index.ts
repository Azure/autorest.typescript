// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionEnumValueProperty } from "../../models/models.js";
import { ValueTypesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  UnionEnumValueGetOptionalParams,
  UnionEnumValuePutOptionalParams,
} from "../../models/options.js";

export function _unionEnumValueGetSend(
  context: Client,
  options: UnionEnumValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/union-enum-value")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _unionEnumValueGetDeserialize(
  result: PathUncheckedResponse,
): Promise<UnionEnumValueProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function unionEnumValueGet(
  context: Client,
  options: UnionEnumValueGetOptionalParams = { requestOptions: {} },
): Promise<UnionEnumValueProperty> {
  const result = await _unionEnumValueGetSend(context, options);
  return _unionEnumValueGetDeserialize(result);
}

export function _unionEnumValuePutSend(
  context: Client,
  body: UnionEnumValueProperty,
  options: UnionEnumValuePutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/union-enum-value")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _unionEnumValuePutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function unionEnumValuePut(
  context: Client,
  body: UnionEnumValueProperty,
  options: UnionEnumValuePutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _unionEnumValuePutSend(context, body, options);
  return _unionEnumValuePutDeserialize(result);
}
