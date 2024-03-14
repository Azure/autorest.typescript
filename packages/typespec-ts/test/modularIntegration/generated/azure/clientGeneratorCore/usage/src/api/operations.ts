// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { InputModel, OutputModel } from "../models/models.js";
import {
  InputToInputOutput204Response,
  OutputToInputOutput200Response,
  UsageContext as Client,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  InputToInputOutputOptions,
  OutputToInputOutputOptions,
} from "../models/options.js";

export function _inputToInputOutputSend(
  context: Client,
  body: InputModel,
  options: InputToInputOutputOptions = { requestOptions: {} },
): StreamableMethod<InputToInputOutput204Response> {
  return context
    .path("/azure/client-generator-core/usage/inputToInputOutput")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _inputToInputOutputDeserialize(
  result: InputToInputOutput204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/**
 * Expected body parameter:
 * ```json
 * {
 *   "name": <any string>
 * }
 * ```
 */
export async function inputToInputOutput(
  context: Client,
  body: InputModel,
  options: InputToInputOutputOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _inputToInputOutputSend(context, body, options);
  return _inputToInputOutputDeserialize(result);
}

export function _outputToInputOutputSend(
  context: Client,
  options: OutputToInputOutputOptions = { requestOptions: {} },
): StreamableMethod<OutputToInputOutput200Response> {
  return context
    .path("/azure/client-generator-core/usage/outputToInputOutput")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _outputToInputOutputDeserialize(
  result: OutputToInputOutput200Response,
): Promise<OutputModel> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
  };
}

/**
 * Expected response body:
 * ```json
 * {
 *   "name": <any string>
 * }
 * ```
 */
export async function outputToInputOutput(
  context: Client,
  options: OutputToInputOutputOptions = { requestOptions: {} },
): Promise<OutputModel> {
  const result = await _outputToInputOutputSend(context, options);
  return _outputToInputOutputDeserialize(result);
}
