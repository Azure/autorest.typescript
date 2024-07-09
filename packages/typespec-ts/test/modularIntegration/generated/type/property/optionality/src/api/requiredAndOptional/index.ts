// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequiredAndOptionalProperty } from "../../models/models.js";
import {
  OptionalContext as Client,
  RequiredAndOptionalGetAll200Response,
  RequiredAndOptionalGetRequiredOnly200Response,
  RequiredAndOptionalPutAll204Response,
  RequiredAndOptionalPutRequiredOnly204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  RequiredAndOptionalGetAllOptionalParams,
  RequiredAndOptionalGetRequiredOnlyOptionalParams,
  RequiredAndOptionalPutAllOptionalParams,
  RequiredAndOptionalPutRequiredOnlyOptionalParams,
} from "../../models/options.js";

export function _getAllSend(
  context: Client,
  options: RequiredAndOptionalGetAllOptionalParams = { requestOptions: {} },
): StreamableMethod<RequiredAndOptionalGetAll200Response> {
  return context
    .path("/type/property/optional/requiredAndOptional/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getAllDeserialize(
  result: RequiredAndOptionalGetAll200Response,
): Promise<RequiredAndOptionalProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as RequiredAndOptionalGetAll200Response;
  return {
    optionalProperty: _result.body["optionalProperty"],
    requiredProperty: _result.body["requiredProperty"],
  };
}

/** Get models that will return all properties in the model */
export async function getAll(
  context: Client,
  options: RequiredAndOptionalGetAllOptionalParams = { requestOptions: {} },
): Promise<RequiredAndOptionalProperty> {
  const result = await _getAllSend(context, options);
  return _getAllDeserialize(result);
}

export function _getRequiredOnlySend(
  context: Client,
  options: RequiredAndOptionalGetRequiredOnlyOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<RequiredAndOptionalGetRequiredOnly200Response> {
  return context
    .path("/type/property/optional/requiredAndOptional/requiredOnly")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getRequiredOnlyDeserialize(
  result: RequiredAndOptionalGetRequiredOnly200Response,
): Promise<RequiredAndOptionalProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result =
    result as unknown as RequiredAndOptionalGetRequiredOnly200Response;
  return {
    optionalProperty: _result.body["optionalProperty"],
    requiredProperty: _result.body["requiredProperty"],
  };
}

/** Get models that will return only the required properties */
export async function getRequiredOnly(
  context: Client,
  options: RequiredAndOptionalGetRequiredOnlyOptionalParams = {
    requestOptions: {},
  },
): Promise<RequiredAndOptionalProperty> {
  const result = await _getRequiredOnlySend(context, options);
  return _getRequiredOnlyDeserialize(result);
}

export function _putAllSend(
  context: Client,
  body: RequiredAndOptionalProperty,
  options: RequiredAndOptionalPutAllOptionalParams = { requestOptions: {} },
): StreamableMethod<RequiredAndOptionalPutAll204Response> {
  return context
    .path("/type/property/optional/requiredAndOptional/all")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        optionalProperty: body["optionalProperty"],
        requiredProperty: body["requiredProperty"],
      },
    });
}

export async function _putAllDeserialize(
  result: RequiredAndOptionalPutAll204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function putAll(
  context: Client,
  body: RequiredAndOptionalProperty,
  options: RequiredAndOptionalPutAllOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putAllSend(context, body, options);
  return _putAllDeserialize(result);
}

export function _putRequiredOnlySend(
  context: Client,
  body: RequiredAndOptionalProperty,
  options: RequiredAndOptionalPutRequiredOnlyOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<RequiredAndOptionalPutRequiredOnly204Response> {
  return context
    .path("/type/property/optional/requiredAndOptional/requiredOnly")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        optionalProperty: body["optionalProperty"],
        requiredProperty: body["requiredProperty"],
      },
    });
}

export async function _putRequiredOnlyDeserialize(
  result: RequiredAndOptionalPutRequiredOnly204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with only required properties. */
export async function putRequiredOnly(
  context: Client,
  body: RequiredAndOptionalProperty,
  options: RequiredAndOptionalPutRequiredOnlyOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _putRequiredOnlySend(context, body, options);
  return _putRequiredOnlyDeserialize(result);
}
