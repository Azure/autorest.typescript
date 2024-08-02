// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NeverProperty } from "../../models/models.js";
import { ValueTypesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  NeverGetOptionalParams,
  NeverPutOptionalParams,
} from "../../models/options.js";

export function _neverGetSend(
  context: Client,
  options: NeverGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/never")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _neverGetDeserialize(
  result: PathUncheckedResponse,
): Promise<NeverProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Get call */
export async function neverGet(
  context: Client,
  options: NeverGetOptionalParams = { requestOptions: {} },
): Promise<NeverProperty> {
  const result = await _neverGetSend(context, options);
  return _neverGetDeserialize(result);
}

export function _neverPutSend(
  context: Client,
  body: NeverProperty,
  options: NeverPutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/never")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _neverPutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function neverPut(
  context: Client,
  body: NeverProperty,
  options: NeverPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _neverPutSend(context, body, options);
  return _neverPutDeserialize(result);
}
