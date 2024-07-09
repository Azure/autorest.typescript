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

export function _getAllSend(
  context: Client,
  options: StringGetAllOptionalParams = { requestOptions: {} },
): StreamableMethod<StringModelGetAll200Response> {
  return context
    .path("/type/property/optional/string/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getAllDeserialize(
  result: StringModelGetAll200Response,
): Promise<StringProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as StringModelGetAll200Response;
  return {
    property: _result.body["property"],
  };
}

/** Get models that will return all properties in the model */
export async function getAll(
  context: Client,
  options: StringGetAllOptionalParams = { requestOptions: {} },
): Promise<StringProperty> {
  const result = await _getAllSend(context, options);
  return _getAllDeserialize(result);
}

export function _getDefaultSend(
  context: Client,
  options: StringGetDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<StringModelGetDefault200Response> {
  return context
    .path("/type/property/optional/string/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDefaultDeserialize(
  result: StringModelGetDefault200Response,
): Promise<StringProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as StringModelGetDefault200Response;
  return {
    property: _result.body["property"],
  };
}

/** Get models that will return the default object */
export async function getDefault(
  context: Client,
  options: StringGetDefaultOptionalParams = { requestOptions: {} },
): Promise<StringProperty> {
  const result = await _getDefaultSend(context, options);
  return _getDefaultDeserialize(result);
}

export function _putAllSend(
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

export async function _putAllDeserialize(
  result: StringModelPutAll204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function putAll(
  context: Client,
  body: StringProperty,
  options: StringPutAllOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putAllSend(context, body, options);
  return _putAllDeserialize(result);
}

export function _putDefaultSend(
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

export async function _putDefaultDeserialize(
  result: StringModelPutDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function putDefault(
  context: Client,
  body: StringProperty,
  options: StringPutDefaultOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putDefaultSend(context, body, options);
  return _putDefaultDeserialize(result);
}
