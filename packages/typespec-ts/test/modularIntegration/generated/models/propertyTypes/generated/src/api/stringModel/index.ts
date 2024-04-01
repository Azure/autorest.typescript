// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { StringProperty } from "../../models/models.js";
import {
  StringModelGet200Response,
  StringModelPut204Response,
  ValueTypesContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { GetOptions, PutOptions } from "../../models/options.js";

export function _stringModelGetSend(
  context: Client,
  options: GetOptions = { requestOptions: {} },
): StreamableMethod<StringModelGet200Response> {
  return context
    .path("/type/property/value-types/string")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _stringModelGetDeserialize(
  result: StringModelGet200Response,
): Promise<StringProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function stringModelGet(
  context: Client,
  options: GetOptions = { requestOptions: {} },
): Promise<StringProperty> {
  const result = await _stringModelGetSend(context, options);
  return _stringModelGetDeserialize(result);
}

export function _stringModelPutSend(
  context: Client,
  body: StringProperty,
  options: PutOptions = { requestOptions: {} },
): StreamableMethod<StringModelPut204Response> {
  return context
    .path("/type/property/value-types/string")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _stringModelPutDeserialize(
  result: StringModelPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function stringModelPut(
  context: Client,
  body: StringProperty,
  options: PutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _stringModelPutSend(context, body, options);
  return _stringModelPutDeserialize(result);
}
