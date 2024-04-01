// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { StringLiteralProperty } from "../../models/models.js";
import {
  StringLiteralGet200Response,
  StringLiteralPut204Response,
  ValueTypesContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  StringLiteralGetOptions,
  StringLiteralPutOptions,
} from "../../models/options.js";

export function _stringLiteralGetSend(
  context: Client,
  options: StringLiteralGetOptions = { requestOptions: {} },
): StreamableMethod<StringLiteralGet200Response> {
  return context
    .path("/type/property/value-types/string/literal")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _stringLiteralGetDeserialize(
  result: StringLiteralGet200Response,
): Promise<StringLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function stringLiteralGet(
  context: Client,
  options: StringLiteralGetOptions = { requestOptions: {} },
): Promise<StringLiteralProperty> {
  const result = await _stringLiteralGetSend(context, options);
  return _stringLiteralGetDeserialize(result);
}

export function _stringLiteralPutSend(
  context: Client,
  body: StringLiteralProperty,
  options: StringLiteralPutOptions = { requestOptions: {} },
): StreamableMethod<StringLiteralPut204Response> {
  return context
    .path("/type/property/value-types/string/literal")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _stringLiteralPutDeserialize(
  result: StringLiteralPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function stringLiteralPut(
  context: Client,
  body: StringLiteralProperty,
  options: StringLiteralPutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _stringLiteralPutSend(context, body, options);
  return _stringLiteralPutDeserialize(result);
}
