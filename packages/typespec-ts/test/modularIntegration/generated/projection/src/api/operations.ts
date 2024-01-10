// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Operation204Response,
  Parameter204Response,
  ProjectedNameContext as Client,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
  OperationOptions,
} from "@azure-rest/core-client";
import { ParameterOptions } from "../models/options.js";

export function _operationSend(
  context: Client,
  options: OperationOptions = { requestOptions: {} },
): StreamableMethod<Operation204Response> {
  return context
    .path("/projection/projected-name/operation")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationDeserialize(
  result: Operation204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function operation(
  context: Client,
  options: OperationOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _operationSend(context, options);
  return _operationDeserialize(result);
}

export function _parameterSend(
  context: Client,
  defaultName: string,
  options: ParameterOptions = { requestOptions: {} },
): StreamableMethod<Parameter204Response> {
  return context
    .path("/projection/projected-name/parameter")
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { "default-name": defaultName },
    });
}

export async function _parameterDeserialize(
  result: Parameter204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parameter(
  context: Client,
  defaultName: string,
  options: ParameterOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _parameterSend(context, defaultName, options);
  return _parameterDeserialize(result);
}
