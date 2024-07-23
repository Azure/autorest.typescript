// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { InputModel, OutputModel, RoundTripModel } from "../models/models.js";
import {
  InputToInputOutput204Response,
  ModelInReadOnlyProperty200Response,
  OutputToInputOutput200Response,
  UsageContext as Client,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  InputToInputOutputOptionalParams,
  OutputToInputOutputOptionalParams,
  ModelInReadOnlyPropertyOptionalParams,
} from "../models/options.js";

export function _inputToInputOutputSend(
  context: Client,
  body: InputModel,
  options: InputToInputOutputOptionalParams = { requestOptions: {} },
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
  options: InputToInputOutputOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _inputToInputOutputSend(context, body, options);
  return _inputToInputOutputDeserialize(result);
}

export function _outputToInputOutputSend(
  context: Client,
  options: OutputToInputOutputOptionalParams = { requestOptions: {} },
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
  options: OutputToInputOutputOptionalParams = { requestOptions: {} },
): Promise<OutputModel> {
  const result = await _outputToInputOutputSend(context, options);
  return _outputToInputOutputDeserialize(result);
}

export function _modelInReadOnlyPropertySend(
  context: Client,
  body: RoundTripModel,
  options: ModelInReadOnlyPropertyOptionalParams = { requestOptions: {} },
): StreamableMethod<ModelInReadOnlyProperty200Response> {
  return context
    .path("/azure/client-generator-core/usage/modelInReadOnlyProperty")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _modelInReadOnlyPropertyDeserialize(
  result: ModelInReadOnlyProperty200Response,
): Promise<RoundTripModel> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    result: { name: result.body.result["name"] },
  };
}

/**
 * "ResultModel" should be usage=output, as it is read-only and does not exist in request body.
 *
 * Expected body parameter:
 * ```json
 * {
 * }
 * ```
 *
 * Expected response body:
 * ```json
 * {
 *   "result": {
 *     "name": <any string>
 *   }
 * }
 * ```
 */
export async function modelInReadOnlyProperty(
  context: Client,
  body: RoundTripModel,
  options: ModelInReadOnlyPropertyOptionalParams = { requestOptions: {} },
): Promise<RoundTripModel> {
  const result = await _modelInReadOnlyPropertySend(context, body, options);
  return _modelInReadOnlyPropertyDeserialize(result);
}
