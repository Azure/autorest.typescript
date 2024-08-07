// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequiredAndOptionalProperty } from "../../models/models.js";
import { OptionalContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
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
): StreamableMethod {
  return context
    .path("/type/property/optional/requiredAndOptional/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getAllDeserialize(
  result: PathUncheckedResponse,
): Promise<RequiredAndOptionalProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    optionalProperty: result.body["optionalProperty"],
    requiredProperty: result.body["requiredProperty"],
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
): StreamableMethod {
  return context
    .path("/type/property/optional/requiredAndOptional/requiredOnly")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getRequiredOnlyDeserialize(
  result: PathUncheckedResponse,
): Promise<RequiredAndOptionalProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    optionalProperty: result.body["optionalProperty"],
    requiredProperty: result.body["requiredProperty"],
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
): StreamableMethod {
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
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
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
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
