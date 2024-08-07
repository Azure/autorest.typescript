// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { StringLiteralProperty } from "../../models/models.js";
import { ValueTypesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  StringLiteralGetOptionalParams,
  StringLiteralPutOptionalParams,
} from "../../models/options.js";

export function _stringLiteralGetSend(
  context: Client,
  options: StringLiteralGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/string/literal")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _stringLiteralGetDeserialize(
  result: PathUncheckedResponse,
): Promise<StringLiteralProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function stringLiteralGet(
  context: Client,
  options: StringLiteralGetOptionalParams = { requestOptions: {} },
): Promise<StringLiteralProperty> {
  const result = await _stringLiteralGetSend(context, options);
  return _stringLiteralGetDeserialize(result);
}

export function _stringLiteralPutSend(
  context: Client,
  body: StringLiteralProperty,
  options: StringLiteralPutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/string/literal")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _stringLiteralPutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function stringLiteralPut(
  context: Client,
  body: StringLiteralProperty,
  options: StringLiteralPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _stringLiteralPutSend(context, body, options);
  return _stringLiteralPutDeserialize(result);
}
