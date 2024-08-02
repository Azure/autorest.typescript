// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { StringProperty } from "../../models/models.js";
import { ValueTypesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  StringGetOptionalParams,
  StringPutOptionalParams,
} from "../../models/options.js";

export function _stringGetSend(
  context: Client,
  options: StringGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/string")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _stringGetDeserialize(
  result: PathUncheckedResponse,
): Promise<StringProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function stringGet(
  context: Client,
  options: StringGetOptionalParams = { requestOptions: {} },
): Promise<StringProperty> {
  const result = await _stringGetSend(context, options);
  return _stringGetDeserialize(result);
}

export function _stringPutSend(
  context: Client,
  body: StringProperty,
  options: StringPutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/string")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _stringPutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function stringPut(
  context: Client,
  body: StringProperty,
  options: StringPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _stringPutSend(context, body, options);
  return _stringPutDeserialize(result);
}
