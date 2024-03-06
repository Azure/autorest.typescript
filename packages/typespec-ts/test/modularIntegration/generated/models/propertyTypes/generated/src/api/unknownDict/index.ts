// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnknownDictProperty } from "../../models/models.js";
import {
  UnknownDictGet200Response,
  UnknownDictPut204Response,
  ValueTypesContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  UnknownDictGetOptions,
  UnknownDictPutOptions,
} from "../../models/options.js";

export function _unknownDictGetSend(
  context: Client,
  options: UnknownDictGetOptions = { requestOptions: {} },
): StreamableMethod<UnknownDictGet200Response> {
  return context
    .path("/type/property/value-types/unknown/dict")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _unknownDictGetDeserialize(
  result: UnknownDictGet200Response,
): Promise<UnknownDictProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function unknownDictGet(
  context: Client,
  options: UnknownDictGetOptions = { requestOptions: {} },
): Promise<UnknownDictProperty> {
  const result = await _unknownDictGetSend(context, options);
  return _unknownDictGetDeserialize(result);
}

export function _unknownDictPutSend(
  context: Client,
  body: UnknownDictProperty,
  options: UnknownDictPutOptions = { requestOptions: {} },
): StreamableMethod<UnknownDictPut204Response> {
  return context
    .path("/type/property/value-types/unknown/dict")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _unknownDictPutDeserialize(
  result: UnknownDictPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function unknownDictPut(
  context: Client,
  body: UnknownDictProperty,
  options: UnknownDictPutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _unknownDictPutSend(context, body, options);
  return _unknownDictPutDeserialize(result);
}
