// Licensed under the MIT license.

import {
  InputRecord,
  OutputRecord,
  InputOutputRecord,
} from "../models/models.js";
import { UsageContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@typespec/ts-http-runtime";
import {
  InputOptionalParams,
  OutputOptionalParams,
  InputAndOutputOptionalParams,
} from "../models/options.js";

export function _inputSend(
  context: Client,
  inputParameter: InputRecord,
  options: InputOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/model/usage/input")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { requiredProp: inputParameter["requiredProp"] },
    });
}

export async function _inputDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/type/model/usage/output")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _outputDeserialize(
  result: PathUncheckedResponse,
): Promise<OutputRecord> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/type/model/usage/input-output")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { requiredProp: body["requiredProp"] },
    });
}

export async function _inputAndOutputDeserialize(
  result: PathUncheckedResponse,
): Promise<InputOutputRecord> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
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
