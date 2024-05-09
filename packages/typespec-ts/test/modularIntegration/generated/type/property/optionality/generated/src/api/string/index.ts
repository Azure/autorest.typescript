// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { StringProperty } from "../../models/models.js";
import {
  OptionalContext as Client,
  StringModelGetAll200Response,
  StringModelGetDefault200Response,
  StringModelPutAll204Response,
  StringModelPutDefault204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  StringGetAllOptionalParams,
  StringGetDefaultOptionalParams,
  StringPutAllOptionalParams,
  StringPutDefaultOptionalParams,
} from "../../models/options.js";

export function _stringGetAllSend(
  context: Client,
  options: StringGetAllOptionalParams = { requestOptions: {} },
): StreamableMethod<StringModelGetAll200Response> {
  return context
    .path("/type/property/optional/string/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _stringGetAllDeserialize(
  result: StringModelGetAll200Response,
): Promise<StringProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get models that will return all properties in the model */
export async function stringGetAll(
  context: Client,
  options: StringGetAllOptionalParams = { requestOptions: {} },
): Promise<StringProperty> {
  const result = await _stringGetAllSend(context, options);
  return _stringGetAllDeserialize(result);
}

export function _stringGetDefaultSend(
  context: Client,
  options: StringGetDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<StringModelGetDefault200Response> {
  return context
    .path("/type/property/optional/string/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _stringGetDefaultDeserialize(
  result: StringModelGetDefault200Response,
): Promise<StringProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get models that will return the default object */
export async function stringGetDefault(
  context: Client,
  options: StringGetDefaultOptionalParams = { requestOptions: {} },
): Promise<StringProperty> {
  const result = await _stringGetDefaultSend(context, options);
  return _stringGetDefaultDeserialize(result);
}

export function _stringPutAllSend(
  context: Client,
  body: StringProperty,
  options: StringPutAllOptionalParams = { requestOptions: {} },
): StreamableMethod<StringModelPutAll204Response> {
  return context
    .path("/type/property/optional/string/all")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _stringPutAllDeserialize(
  result: StringModelPutAll204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function stringPutAll(
  context: Client,
  body: StringProperty,
  options: StringPutAllOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _stringPutAllSend(context, body, options);
  return _stringPutAllDeserialize(result);
}

export function _stringPutDefaultSend(
  context: Client,
  body: StringProperty,
  options: StringPutDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<StringModelPutDefault204Response> {
  return context
    .path("/type/property/optional/string/default")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _stringPutDefaultDeserialize(
  result: StringModelPutDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function stringPutDefault(
  context: Client,
  body: StringProperty,
  options: StringPutDefaultOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _stringPutDefaultSend(context, body, options);
  return _stringPutDefaultDeserialize(result);
}
