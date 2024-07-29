// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AddOperation204Response,
  ServiceDrivenContext as Client,
  FromNone204Response,
  FromOneOptional204Response,
  FromOneRequired204Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  AddOperationOptionalParams,
  FromNoneOptionalParams,
  FromOneRequiredOptionalParams,
  FromOneOptionalOptionalParams,
} from "../models/options.js";

export function _addOperationSend(
  context: Client,
  options: AddOperationOptionalParams = { requestOptions: {} },
): StreamableMethod<AddOperation204Response> {
  return context
    .path("/add-operation")
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _addOperationDeserialize(
  result: AddOperation204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Added operation */
export async function addOperation(
  context: Client,
  options: AddOperationOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _addOperationSend(context, options);
  return _addOperationDeserialize(result);
}

export function _fromNoneSend(
  context: Client,
  options: FromNoneOptionalParams = { requestOptions: {} },
): StreamableMethod<FromNone204Response> {
  return context
    .path("/add-optional-param/from-none")
    .head({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { "new-parameter": options?.newParameter },
    });
}

export async function _fromNoneDeserialize(
  result: FromNone204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Test that grew up from accepting no parameters to an optional input parameter */
export async function fromNone(
  context: Client,
  options: FromNoneOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _fromNoneSend(context, options);
  return _fromNoneDeserialize(result);
}

export function _fromOneRequiredSend(
  context: Client,
  parameter: string,
  options: FromOneRequiredOptionalParams = { requestOptions: {} },
): StreamableMethod<FromOneRequired204Response> {
  return context
    .path("/add-optional-param/from-one-required")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        parameter: parameter,
        "new-parameter": options?.newParameter,
      },
    });
}

export async function _fromOneRequiredDeserialize(
  result: FromOneRequired204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Operation that grew up from accepting one required parameter to accepting a required parameter and an optional parameter. */
export async function fromOneRequired(
  context: Client,
  parameter: string,
  options: FromOneRequiredOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _fromOneRequiredSend(context, parameter, options);
  return _fromOneRequiredDeserialize(result);
}

export function _fromOneOptionalSend(
  context: Client,
  options: FromOneOptionalOptionalParams = { requestOptions: {} },
): StreamableMethod<FromOneOptional204Response> {
  return context
    .path("/add-optional-param/from-one-optional")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        parameter: options?.parameter,
        "new-parameter": options?.newParameter,
      },
    });
}

export async function _fromOneOptionalDeserialize(
  result: FromOneOptional204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Tests that we can grow up an operation from accepting one optional parameter to accepting two optional parameters. */
export async function fromOneOptional(
  context: Client,
  options: FromOneOptionalOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _fromOneOptionalSend(context, options);
  return _fromOneOptionalDeserialize(result);
}
