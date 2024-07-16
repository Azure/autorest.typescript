// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  FromNone204Response,
  FromOneOptional204Response,
  FromOneRequired204Response,
  ServiceDrivenContext as Client,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  FromNoneOptionalParams,
  FromOneRequiredOptionalParams,
  FromOneOptionalOptionalParams,
} from "../models/options.js";

export function _fromNoneSend(
  context: Client,
  options: FromNoneOptionalParams = { requestOptions: {} },
): StreamableMethod<FromNone204Response> {
  return context
    .path("/add-optional-param/from-none")
    .head({ ...operationOptionsToRequestParameters(options) });
}

export async function _fromNoneDeserialize(
  result: FromNone204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Test that currently accepts no parameters, will be updated in next spec to accept a new optional parameter as well */
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
      queryParameters: { parameter: parameter },
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

/** Test that currently accepts one required parameter, will be updated in next spec to accept a new optional parameter as well */
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
      queryParameters: { parameter: options?.parameter },
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

/** Test that currently accepts one optional parameter, will be updated in next spec to accept a new optional parameter as well */
export async function fromOneOptional(
  context: Client,
  options: FromOneOptionalOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _fromOneOptionalSend(context, options);
  return _fromOneOptionalDeserialize(result);
}
