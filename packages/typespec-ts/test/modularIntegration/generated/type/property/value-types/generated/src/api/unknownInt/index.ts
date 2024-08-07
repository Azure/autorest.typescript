// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnknownIntProperty } from "../../models/models.js";
import { ValueTypesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  UnknownIntGetOptionalParams,
  UnknownIntPutOptionalParams,
} from "../../models/options.js";

export function _unknownIntGetSend(
  context: Client,
  options: UnknownIntGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/unknown/int")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _unknownIntGetDeserialize(
  result: PathUncheckedResponse,
): Promise<UnknownIntProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function unknownIntGet(
  context: Client,
  options: UnknownIntGetOptionalParams = { requestOptions: {} },
): Promise<UnknownIntProperty> {
  const result = await _unknownIntGetSend(context, options);
  return _unknownIntGetDeserialize(result);
}

export function _unknownIntPutSend(
  context: Client,
  body: UnknownIntProperty,
  options: UnknownIntPutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/unknown/int")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _unknownIntPutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function unknownIntPut(
  context: Client,
  body: UnknownIntProperty,
  options: UnknownIntPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _unknownIntPutSend(context, body, options);
  return _unknownIntPutDeserialize(result);
}
