// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { IntProperty } from "../../models/models.js";
import { ValueTypesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  IntGetOptionalParams,
  IntPutOptionalParams,
} from "../../models/options.js";

export function _intGetSend(
  context: Client,
  options: IntGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/int")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _intGetDeserialize(
  result: PathUncheckedResponse,
): Promise<IntProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function intGet(
  context: Client,
  options: IntGetOptionalParams = { requestOptions: {} },
): Promise<IntProperty> {
  const result = await _intGetSend(context, options);
  return _intGetDeserialize(result);
}

export function _intPutSend(
  context: Client,
  body: IntProperty,
  options: IntPutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/int")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _intPutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function intPut(
  context: Client,
  body: IntProperty,
  options: IntPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _intPutSend(context, body, options);
  return _intPutDeserialize(result);
}
