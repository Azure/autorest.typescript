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
  RequiredAndOptionalGetAllOptions,
  RequiredAndOptionalGetRequiredOnlyOptions,
  RequiredAndOptionalPutAllOptions,
  RequiredAndOptionalPutRequiredOnlyOptions,
} from "../../models/options.js";

export function _requiredAndOptionalGetAllSend(
  context: Client,
  options: RequiredAndOptionalGetAllOptions = { requestOptions: {} },
): StreamableMethod<RequiredAndOptionalGetAll200Response> {
  return context
    .path("/type/property/optional/requiredAndOptional/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _requiredAndOptionalGetAllDeserialize(
  result: RequiredAndOptionalGetAll200Response,
): Promise<RequiredAndOptionalProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    optionalProperty: result.body["optionalProperty"],
    requiredProperty: result.body["requiredProperty"],
  };
}

/** Get models that will return all properties in the model */
export async function requiredAndOptionalGetAll(
  context: Client,
  options: RequiredAndOptionalGetAllOptions = { requestOptions: {} },
): Promise<RequiredAndOptionalProperty> {
  const result = await _requiredAndOptionalGetAllSend(context, options);
  return _requiredAndOptionalGetAllDeserialize(result);
}

export function _requiredAndOptionalGetRequiredOnlySend(
  context: Client,
  options: RequiredAndOptionalGetRequiredOnlyOptions = { requestOptions: {} },
): StreamableMethod<RequiredAndOptionalGetRequiredOnly200Response> {
  return context
    .path("/type/property/optional/requiredAndOptional/requiredOnly")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _requiredAndOptionalGetRequiredOnlyDeserialize(
  result: RequiredAndOptionalGetRequiredOnly200Response,
): Promise<RequiredAndOptionalProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    optionalProperty: result.body["optionalProperty"],
    requiredProperty: result.body["requiredProperty"],
  };
}

/** Get models that will return only the required properties */
export async function requiredAndOptionalGetRequiredOnly(
  context: Client,
  options: RequiredAndOptionalGetRequiredOnlyOptions = { requestOptions: {} },
): Promise<RequiredAndOptionalProperty> {
  const result = await _requiredAndOptionalGetRequiredOnlySend(
    context,
    options,
  );
  return _requiredAndOptionalGetRequiredOnlyDeserialize(result);
}

export function _requiredAndOptionalPutAllSend(
  context: Client,
  body: RequiredAndOptionalProperty,
  options: RequiredAndOptionalPutAllOptions = { requestOptions: {} },
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

export async function _requiredAndOptionalPutAllDeserialize(
  result: RequiredAndOptionalPutAll204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function requiredAndOptionalPutAll(
  context: Client,
  body: RequiredAndOptionalProperty,
  options: RequiredAndOptionalPutAllOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _requiredAndOptionalPutAllSend(context, body, options);
  return _requiredAndOptionalPutAllDeserialize(result);
}

export function _requiredAndOptionalPutRequiredOnlySend(
  context: Client,
  body: RequiredAndOptionalProperty,
  options: RequiredAndOptionalPutRequiredOnlyOptions = { requestOptions: {} },
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

export async function _requiredAndOptionalPutRequiredOnlyDeserialize(
  result: RequiredAndOptionalPutRequiredOnly204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with only required properties. */
export async function requiredAndOptionalPutRequiredOnly(
  context: Client,
  body: RequiredAndOptionalProperty,
  options: RequiredAndOptionalPutRequiredOnlyOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _requiredAndOptionalPutRequiredOnlySend(
    context,
    body,
    options,
  );
  return _requiredAndOptionalPutRequiredOnlyDeserialize(result);
}
