// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BooleanProperty } from "../../models/models.js";
import { ValueTypesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  BooleanGetOptionalParams,
  BooleanPutOptionalParams,
} from "../../models/options.js";

export function _booleanGetSend(
  context: Client,
  options: BooleanGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/boolean")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _booleanGetDeserialize(
  result: PathUncheckedResponse,
): Promise<BooleanProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function booleanGet(
  context: Client,
  options: BooleanGetOptionalParams = { requestOptions: {} },
): Promise<BooleanProperty> {
  const result = await _booleanGetSend(context, options);
  return _booleanGetDeserialize(result);
}

export function _booleanPutSend(
  context: Client,
  body: BooleanProperty,
  options: BooleanPutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/boolean")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _booleanPutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function booleanPut(
  context: Client,
  body: BooleanProperty,
  options: BooleanPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _booleanPutSend(context, body, options);
  return _booleanPutDeserialize(result);
}
