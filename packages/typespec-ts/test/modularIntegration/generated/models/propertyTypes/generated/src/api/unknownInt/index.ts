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
  UnknownIntGetOptions,
  UnknownIntPutOptions,
} from "../../models/options.js";

export function _unknownIntGetSend(
  context: Client,
  options: UnknownIntGetOptions = { requestOptions: {} },
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

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function unknownIntGet(
  context: Client,
  options: UnknownIntGetOptions = { requestOptions: {} },
): Promise<UnknownIntProperty> {
  const result = await _unknownIntGetSend(context, options);
  return _unknownIntGetDeserialize(result);
}

export function _unknownIntPutSend(
  context: Client,
  body: UnknownIntProperty,
  options: UnknownIntPutOptions = { requestOptions: {} },
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
  options: UnknownIntPutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _unknownIntPutSend(context, body, options);
  return _unknownIntPutDeserialize(result);
}
