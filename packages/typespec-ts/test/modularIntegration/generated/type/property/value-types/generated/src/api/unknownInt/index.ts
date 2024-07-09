// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnknownIntProperty } from "../../models/models.js";
import {
  UnknownIntGet200Response,
  UnknownIntPut204Response,
  ValueTypesContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  UnknownIntGetOptionalParams,
  UnknownIntPutOptionalParams,
} from "../../models/options.js";

export function _unknownIntGetSend(
  context: Client,
  options: UnknownIntGetOptionalParams = { requestOptions: {} },
): StreamableMethod<UnknownIntGet200Response> {
  return context
    .path("/type/property/value-types/unknown/int")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _unknownIntGetDeserialize(
  result: UnknownIntGet200Response,
): Promise<UnknownIntProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as UnknownIntGet200Response;
  return {
    property: _result.body["property"],
  };
}

/** Get call */
export async function unknownIntGet(
  context: Client,
  options: UnknownIntGetOptionalParams = { requestOptions: {} },
): Promise<UnknownIntProperty> {
  const result = await _unknownIntGetSend(context, options);
  return _unknownIntGetDeserialize(result);
}

export function _unknownIntPutSend(
  context: Client,
  body: UnknownIntProperty,
  options: UnknownIntPutOptionalParams = { requestOptions: {} },
): StreamableMethod<UnknownIntPut204Response> {
  return context
    .path("/type/property/value-types/unknown/int")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _unknownIntPutDeserialize(
  result: UnknownIntPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function unknownIntPut(
  context: Client,
  body: UnknownIntProperty,
  options: UnknownIntPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _unknownIntPutSend(context, body, options);
  return _unknownIntPutDeserialize(result);
}
