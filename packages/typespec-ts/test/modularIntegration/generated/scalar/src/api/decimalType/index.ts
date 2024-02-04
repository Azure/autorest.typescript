// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DecimalTypeRequestBody204Response,
  DecimalTypeRequestParameter204Response,
  DecimalTypeResponseBody200Response,
  ScalarContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  DecimalTypeResponseBodyOptions,
  DecimalTypeRequestBodyOptions,
  DecimalTypeRequestParameterOptions,
} from "../../models/options.js";

export function _decimalTypeResponseBodySend(
  context: Client,
  options: DecimalTypeResponseBodyOptions = { requestOptions: {} },
): StreamableMethod<DecimalTypeResponseBody200Response> {
  return context
    .path("/type/scalar/decimal/response_body")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _decimalTypeResponseBodyDeserialize(
  result: DecimalTypeResponseBody200Response,
): Promise<number> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

export async function decimalTypeResponseBody(
  context: Client,
  options: DecimalTypeResponseBodyOptions = { requestOptions: {} },
): Promise<number> {
  const result = await _decimalTypeResponseBodySend(context, options);
  return _decimalTypeResponseBodyDeserialize(result);
}

export function _decimalTypeRequestBodySend(
  context: Client,
  body: number,
  options: DecimalTypeRequestBodyOptions = { requestOptions: {} },
): StreamableMethod<DecimalTypeRequestBody204Response> {
  return context
    .path("/type/scalar/decimal/resquest_body")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _decimalTypeRequestBodyDeserialize(
  result: DecimalTypeRequestBody204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function decimalTypeRequestBody(
  context: Client,
  body: number,
  options: DecimalTypeRequestBodyOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _decimalTypeRequestBodySend(context, body, options);
  return _decimalTypeRequestBodyDeserialize(result);
}

export function _decimalTypeRequestParameterSend(
  context: Client,
  value: number,
  options: DecimalTypeRequestParameterOptions = { requestOptions: {} },
): StreamableMethod<DecimalTypeRequestParameter204Response> {
  return context
    .path("/type/scalar/decimal/request_parameter")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { value: value },
    });
}

export async function _decimalTypeRequestParameterDeserialize(
  result: DecimalTypeRequestParameter204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function decimalTypeRequestParameter(
  context: Client,
  value: number,
  options: DecimalTypeRequestParameterOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _decimalTypeRequestParameterSend(
    context,
    value,
    options,
  );
  return _decimalTypeRequestParameterDeserialize(result);
}
