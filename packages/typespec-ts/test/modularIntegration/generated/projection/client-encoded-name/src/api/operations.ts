// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Header204Response,
  NameAndEncodedNameClientContext as Client,
  Operation204Response,
  Parameter204Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
  OperationOptions,
} from "@azure-rest/core-client";
import { ParameterOptions, HeaderOptions } from "../models/options.js";

export function _operationSend(
  context: Client,
  options: OperationOptions = { requestOptions: {} },
): StreamableMethod<Operation204Response> {
  return context
    .path("/projection/client-name-and-encoded-name/operation")
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
    .path("/projection/client-name-and-encoded-name/parameter")
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { defaultName: defaultName },
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

export function _headerSend(
  context: Client,
  defaultName: string,
  options: HeaderOptions = { requestOptions: {} },
): StreamableMethod<Header204Response> {
  return context
    .path("/projection/client-name-and-encoded-name/header")
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: { "default-name": defaultName },
    });
}

export async function _headerDeserialize(
  result: Header204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function header(
  context: Client,
  defaultName: string,
  options: HeaderOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _headerSend(context, defaultName, options);
  return _headerDeserialize(result);
}
