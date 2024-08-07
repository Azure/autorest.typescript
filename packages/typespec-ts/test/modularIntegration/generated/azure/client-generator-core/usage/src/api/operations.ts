// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { InputModel, OutputModel, RoundTripModel } from "../models/models.js";
import { UsageContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
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
): StreamableMethod {
  return context
    .path("/azure/client-generator-core/usage/inputToInputOutput")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _inputToInputOutputDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/azure/client-generator-core/usage/outputToInputOutput")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _outputToInputOutputDeserialize(
  result: PathUncheckedResponse,
): Promise<OutputModel> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/azure/client-generator-core/usage/modelInReadOnlyProperty")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _modelInReadOnlyPropertyDeserialize(
  result: PathUncheckedResponse,
): Promise<RoundTripModel> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
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
