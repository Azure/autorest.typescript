// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScalarContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  Decimal128TypeResponseBodyOptionalParams,
  Decimal128TypeRequestBodyOptionalParams,
  Decimal128TypeRequestParameterOptionalParams,
} from "../../models/options.js";

export function _decimal128TypeResponseBodySend(
  context: Client,
  options: Decimal128TypeResponseBodyOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/scalar/decimal128/response_body")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _decimal128TypeResponseBodyDeserialize(
  result: PathUncheckedResponse,
): Promise<number> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function decimal128TypeResponseBody(
  context: Client,
  options: Decimal128TypeResponseBodyOptionalParams = { requestOptions: {} },
): Promise<number> {
  const result = await _decimal128TypeResponseBodySend(context, options);
  return _decimal128TypeResponseBodyDeserialize(result);
}

export function _decimal128TypeRequestBodySend(
  context: Client,
  body: number,
  options: Decimal128TypeRequestBodyOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/scalar/decimal128/resquest_body")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _decimal128TypeRequestBodyDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function decimal128TypeRequestBody(
  context: Client,
  body: number,
  options: Decimal128TypeRequestBodyOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _decimal128TypeRequestBodySend(context, body, options);
  return _decimal128TypeRequestBodyDeserialize(result);
}

export function _decimal128TypeRequestParameterSend(
  context: Client,
  value: number,
  options: Decimal128TypeRequestParameterOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/type/scalar/decimal128/request_parameter")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { value: value },
    });
}

export async function _decimal128TypeRequestParameterDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function decimal128TypeRequestParameter(
  context: Client,
  value: number,
  options: Decimal128TypeRequestParameterOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _decimal128TypeRequestParameterSend(
    context,
    value,
    options,
  );
  return _decimal128TypeRequestParameterDeserialize(result);
}
