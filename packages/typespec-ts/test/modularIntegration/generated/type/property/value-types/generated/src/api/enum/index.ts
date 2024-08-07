// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { EnumProperty } from "../../models/models.js";
import { ValueTypesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  EnumGetOptionalParams,
  EnumPutOptionalParams,
} from "../../models/options.js";

export function _enumGetSend(
  context: Client,
  options: EnumGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/enum")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _enumGetDeserialize(
  result: PathUncheckedResponse,
): Promise<EnumProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function enumGet(
  context: Client,
  options: EnumGetOptionalParams = { requestOptions: {} },
): Promise<EnumProperty> {
  const result = await _enumGetSend(context, options);
  return _enumGetDeserialize(result);
}

export function _enumPutSend(
  context: Client,
  body: EnumProperty,
  options: EnumPutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/enum")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _enumPutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function enumPut(
  context: Client,
  body: EnumProperty,
  options: EnumPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _enumPutSend(context, body, options);
  return _enumPutDeserialize(result);
}
