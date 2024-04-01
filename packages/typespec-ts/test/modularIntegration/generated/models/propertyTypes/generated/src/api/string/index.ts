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
import { StringGetOptions, StringPutOptions } from "../../models/options.js";

export function _stringGetSend(
  context: Client,
  options: StringGetOptions = { requestOptions: {} },
): StreamableMethod<StringModelGet200Response> {
  return context
    .path("/type/property/value-types/string")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _stringGetDeserialize(
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
export async function stringGet(
  context: Client,
  options: StringGetOptions = { requestOptions: {} },
): Promise<StringProperty> {
  const result = await _stringGetSend(context, options);
  return _stringGetDeserialize(result);
}

export function _stringPutSend(
  context: Client,
  body: StringProperty,
  options: StringPutOptions = { requestOptions: {} },
): StreamableMethod<StringModelPut204Response> {
  return context
    .path("/type/property/value-types/string")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _stringPutDeserialize(
  result: StringModelPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function stringPut(
  context: Client,
  body: StringProperty,
  options: StringPutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _stringPutSend(context, body, options);
  return _stringPutDeserialize(result);
}
