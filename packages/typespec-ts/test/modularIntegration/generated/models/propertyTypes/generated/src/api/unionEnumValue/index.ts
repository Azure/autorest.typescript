// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionEnumValueProperty } from "../../models/models.js";
import {
  UnionEnumValueGet200Response,
  UnionEnumValuePut204Response,
  ValueTypesContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  UnionEnumValueGetOptionalParams,
  UnionEnumValuePutOptionalParams,
} from "../../models/options.js";

export function _unionEnumValueGetSend(
  context: Client,
  options: UnionEnumValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod<UnionEnumValueGet200Response> {
  return context
    .path("/type/property/value-types/union-enum-value")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _unionEnumValueGetDeserialize(
  result: UnionEnumValueGet200Response,
): Promise<UnionEnumValueProperty> {
  if (result.status !== "200") {
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
): StreamableMethod<UnionEnumValuePut204Response> {
  return context
    .path("/type/property/value-types/union-enum-value")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _unionEnumValuePutDeserialize(
  result: UnionEnumValuePut204Response,
): Promise<void> {
  if (result.status !== "204") {
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
