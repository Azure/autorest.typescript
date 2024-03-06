// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Decimal128TypeRequestBody204Response,
  Decimal128TypeRequestParameter204Response,
  Decimal128TypeResponseBody200Response,
  ScalarContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  Decimal128TypeResponseBodyOptions,
  Decimal128TypeRequestBodyOptions,
  Decimal128TypeRequestParameterOptions,
} from "../../models/options.js";

export function _decimal128TypeResponseBodySend(
  context: Client,
  options: Decimal128TypeResponseBodyOptions = { requestOptions: {} },
): StreamableMethod<Decimal128TypeResponseBody200Response> {
  return context
    .path("/type/scalar/decimal128/response_body")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _decimal128TypeResponseBodyDeserialize(
  result: Decimal128TypeResponseBody200Response,
): Promise<number> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

export async function decimal128TypeResponseBody(
  context: Client,
  options: Decimal128TypeResponseBodyOptions = { requestOptions: {} },
): Promise<number> {
  const result = await _decimal128TypeResponseBodySend(context, options);
  return _decimal128TypeResponseBodyDeserialize(result);
}

export function _decimal128TypeRequestBodySend(
  context: Client,
  body: number,
  options: Decimal128TypeRequestBodyOptions = { requestOptions: {} },
): StreamableMethod<Decimal128TypeRequestBody204Response> {
  return context
    .path("/type/scalar/decimal128/resquest_body")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _decimal128TypeRequestBodyDeserialize(
  result: Decimal128TypeRequestBody204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function decimal128TypeRequestBody(
  context: Client,
  body: number,
  options: Decimal128TypeRequestBodyOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _decimal128TypeRequestBodySend(context, body, options);
  return _decimal128TypeRequestBodyDeserialize(result);
}

export function _decimal128TypeRequestParameterSend(
  context: Client,
  value: number,
  options: Decimal128TypeRequestParameterOptions = { requestOptions: {} },
): StreamableMethod<Decimal128TypeRequestParameter204Response> {
  return context
    .path("/type/scalar/decimal128/request_parameter")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { value: value },
    });
}

export async function _decimal128TypeRequestParameterDeserialize(
  result: Decimal128TypeRequestParameter204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function decimal128TypeRequestParameter(
  context: Client,
  value: number,
  options: Decimal128TypeRequestParameterOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _decimal128TypeRequestParameterSend(
    context,
    value,
    options,
  );
  return _decimal128TypeRequestParameterDeserialize(result);
}
