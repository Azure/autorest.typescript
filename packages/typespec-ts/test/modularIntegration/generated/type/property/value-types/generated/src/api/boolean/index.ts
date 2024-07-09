// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BooleanProperty } from "../../models/models.js";
import {
  BooleanModelGet200Response,
  BooleanModelPut204Response,
  ValueTypesContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  BooleanGetOptionalParams,
  BooleanPutOptionalParams,
} from "../../models/options.js";

export function _booleanGetSend(
  context: Client,
  options: BooleanGetOptionalParams = { requestOptions: {} },
): StreamableMethod<BooleanModelGet200Response> {
  return context
    .path("/type/property/value-types/boolean")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _booleanGetDeserialize(
  result: BooleanModelGet200Response,
): Promise<BooleanProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as BooleanModelGet200Response;
  return {
    property: _result.body["property"],
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
): StreamableMethod<BooleanModelPut204Response> {
  return context
    .path("/type/property/value-types/boolean")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _booleanPutDeserialize(
  result: BooleanModelPut204Response,
): Promise<void> {
  if (result.status !== "204") {
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
