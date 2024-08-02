// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DurationProperty } from "../../models/models.js";
import { ValueTypesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  DurationGetOptionalParams,
  DurationPutOptionalParams,
} from "../../models/options.js";

export function _durationGetSend(
  context: Client,
  options: DurationGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/duration")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _durationGetDeserialize(
  result: PathUncheckedResponse,
): Promise<DurationProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function durationGet(
  context: Client,
  options: DurationGetOptionalParams = { requestOptions: {} },
): Promise<DurationProperty> {
  const result = await _durationGetSend(context, options);
  return _durationGetDeserialize(result);
}

export function _durationPutSend(
  context: Client,
  body: DurationProperty,
  options: DurationPutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/duration")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _durationPutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function durationPut(
  context: Client,
  body: DurationProperty,
  options: DurationPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _durationPutSend(context, body, options);
  return _durationPutDeserialize(result);
}
