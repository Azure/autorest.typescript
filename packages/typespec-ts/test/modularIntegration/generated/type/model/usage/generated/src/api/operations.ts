// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  InputRecord,
  OutputRecord,
  InputOutputRecord,
} from "../models/models.js";
import {
  Input204Response,
  InputAndOutput200Response,
  Output200Response,
  UsageContext as Client,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  InputOptionalParams,
  OutputOptionalParams,
  InputAndOutputOptionalParams,
} from "./options.js";

export function _inputSend(
  context: Client,
  inputParameter: InputRecord,
  options: InputOptionalParams = { requestOptions: {} },
): StreamableMethod<Input204Response> {
  return context
    .path("/type/model/usage/input")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { requiredProp: inputParameter["requiredProp"] },
    });
}

export async function _inputDeserialize(
  result: Input204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function input(
  context: Client,
  inputParameter: InputRecord,
  options: InputOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _inputSend(context, inputParameter, options);
  return _inputDeserialize(result);
}

export function _outputSend(
  context: Client,
  options: OutputOptionalParams = { requestOptions: {} },
): StreamableMethod<Output200Response> {
  return context
    .path("/type/model/usage/output")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _outputDeserialize(
  result: Output200Response,
): Promise<OutputRecord> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    requiredProp: result.body["requiredProp"],
  };
}

export async function output(
  context: Client,
  options: OutputOptionalParams = { requestOptions: {} },
): Promise<OutputRecord> {
  const result = await _outputSend(context, options);
  return _outputDeserialize(result);
}

export function _inputAndOutputSend(
  context: Client,
  body: InputOutputRecord,
  options: InputAndOutputOptionalParams = { requestOptions: {} },
): StreamableMethod<InputAndOutput200Response> {
  return context
    .path("/type/model/usage/input-output")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { requiredProp: body["requiredProp"] },
    });
}

export async function _inputAndOutputDeserialize(
  result: InputAndOutput200Response,
): Promise<InputOutputRecord> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    requiredProp: result.body["requiredProp"],
  };
}

export async function inputAndOutput(
  context: Client,
  body: InputOutputRecord,
  options: InputAndOutputOptionalParams = { requestOptions: {} },
): Promise<InputOutputRecord> {
  const result = await _inputAndOutputSend(context, body, options);
  return _inputAndOutputDeserialize(result);
}
