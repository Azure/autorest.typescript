// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnknownArrayProperty } from "../../models/models.js";
import {
  UnknownArrayGet200Response,
  UnknownArrayPut204Response,
  ValueTypesContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  UnknownArrayGetOptionalParams,
  UnknownArrayPutOptionalParams,
} from "../../models/options.js";

export function _unknownArrayGetSend(
  context: Client,
  options: UnknownArrayGetOptionalParams = { requestOptions: {} },
): StreamableMethod<UnknownArrayGet200Response> {
  return context
    .path("/type/property/value-types/unknown/array")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _unknownArrayGetDeserialize(
  result: UnknownArrayGet200Response,
): Promise<UnknownArrayProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as UnknownArrayGet200Response;
  return {
    property: _result.body["property"],
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
): StreamableMethod<UnknownArrayPut204Response> {
  return context
    .path("/type/property/value-types/unknown/array")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _unknownArrayPutDeserialize(
  result: UnknownArrayPut204Response,
): Promise<void> {
  if (result.status !== "204") {
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
