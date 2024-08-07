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
  DecimalTypeResponseBodyOptionalParams,
  DecimalTypeRequestBodyOptionalParams,
  DecimalTypeRequestParameterOptionalParams,
} from "../../models/options.js";

export function _decimalTypeResponseBodySend(
  context: Client,
  options: DecimalTypeResponseBodyOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/scalar/decimal/response_body")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _decimalTypeResponseBodyDeserialize(
  result: PathUncheckedResponse,
): Promise<number> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function decimalTypeResponseBody(
  context: Client,
  options: DecimalTypeResponseBodyOptionalParams = { requestOptions: {} },
): Promise<number> {
  const result = await _decimalTypeResponseBodySend(context, options);
  return _decimalTypeResponseBodyDeserialize(result);
}

export function _decimalTypeRequestBodySend(
  context: Client,
  body: number,
  options: DecimalTypeRequestBodyOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/scalar/decimal/resquest_body")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _decimalTypeRequestBodyDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function decimalTypeRequestBody(
  context: Client,
  body: number,
  options: DecimalTypeRequestBodyOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _decimalTypeRequestBodySend(context, body, options);
  return _decimalTypeRequestBodyDeserialize(result);
}

export function _decimalTypeRequestParameterSend(
  context: Client,
  value: number,
  options: DecimalTypeRequestParameterOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/scalar/decimal/request_parameter")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { value: value },
    });
}

export async function _decimalTypeRequestParameterDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function decimalTypeRequestParameter(
  context: Client,
  value: number,
  options: DecimalTypeRequestParameterOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _decimalTypeRequestParameterSend(
    context,
    value,
    options,
  );
  return _decimalTypeRequestParameterDeserialize(result);
}
