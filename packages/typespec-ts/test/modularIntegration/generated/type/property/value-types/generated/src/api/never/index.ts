// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NeverProperty } from "../../models/models.js";
import {
  NeverGet200Response,
  NeverPut204Response,
  ValueTypesContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  NeverGetOptionalParams,
  NeverPutOptionalParams,
} from "../../models/options.js";

export function _neverGetSend(
  context: Client,
  options: NeverGetOptionalParams = { requestOptions: {} },
): StreamableMethod<NeverGet200Response> {
  return context
    .path("/type/property/value-types/never")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _neverGetDeserialize(
  result: NeverGet200Response,
): Promise<NeverProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as NeverGet200Response;
  return _result.body;
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
): StreamableMethod<NeverPut204Response> {
  return context
    .path("/type/property/value-types/never")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _neverPutDeserialize(
  result: NeverPut204Response,
): Promise<void> {
  if (result.status !== "204") {
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
