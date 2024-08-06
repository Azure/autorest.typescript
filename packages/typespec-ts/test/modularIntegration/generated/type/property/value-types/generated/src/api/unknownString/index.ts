// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnknownStringProperty } from "../../models/models.js";
import { ValueTypesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  UnknownStringGetOptionalParams,
  UnknownStringPutOptionalParams,
} from "../../models/options.js";

export function _unknownStringGetSend(
  context: Client,
  options: UnknownStringGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/unknown/string")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _unknownStringGetDeserialize(
  result: PathUncheckedResponse,
): Promise<UnknownStringProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function unknownStringGet(
  context: Client,
  options: UnknownStringGetOptionalParams = { requestOptions: {} },
): Promise<UnknownStringProperty> {
  const result = await _unknownStringGetSend(context, options);
  return _unknownStringGetDeserialize(result);
}

export function _unknownStringPutSend(
  context: Client,
  body: UnknownStringProperty,
  options: UnknownStringPutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/unknown/string")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _unknownStringPutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function unknownStringPut(
  context: Client,
  body: UnknownStringProperty,
  options: UnknownStringPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _unknownStringPutSend(context, body, options);
  return _unknownStringPutDeserialize(result);
}
