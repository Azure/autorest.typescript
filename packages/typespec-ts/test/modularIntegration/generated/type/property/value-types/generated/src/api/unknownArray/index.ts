// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnknownArrayProperty } from "../../models/models.js";
import { ValueTypesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  UnknownArrayGetOptionalParams,
  UnknownArrayPutOptionalParams,
} from "../../models/options.js";

export function _unknownArrayGetSend(
  context: Client,
  options: UnknownArrayGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/unknown/array")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _unknownArrayGetDeserialize(
  result: PathUncheckedResponse,
): Promise<UnknownArrayProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function unknownArrayGet(
  context: Client,
  options: UnknownArrayGetOptionalParams = { requestOptions: {} },
): Promise<UnknownArrayProperty> {
  const result = await _unknownArrayGetSend(context, options);
  return _unknownArrayGetDeserialize(result);
}

export function _unknownArrayPutSend(
  context: Client,
  body: UnknownArrayProperty,
  options: UnknownArrayPutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/unknown/array")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _unknownArrayPutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function unknownArrayPut(
  context: Client,
  body: UnknownArrayProperty,
  options: UnknownArrayPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _unknownArrayPutSend(context, body, options);
  return _unknownArrayPutDeserialize(result);
}
