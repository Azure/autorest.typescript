// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OutputRecord, InputOutputRecord } from "../models/models.js";
import {
  Input204Response,
  InputAndOutput200Response,
  Output200Response,
  UsageContext as Client,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  InputOptions,
  OutputOptions,
  InputAndOutputOptions,
} from "../models/options.js";

export function _inputSend(
  context: Client,
  requiredProp: string,
  options: InputOptions = { requestOptions: {} }
): StreamableMethod<Input204Response> {
  return context
    .path("/type/model/usage/input")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { requiredProp: requiredProp },
    });
}

export async function _inputDeserialize(
  result: Input204Response
): Promise<void> {
  if ("204" !== result.status) {
    throw result.body;
  }

  return;
}

export async function input(
  context: Client,
  requiredProp: string,
  options: InputOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _inputSend(context, requiredProp, options);
  return _inputDeserialize(result);
}

export function _outputSend(
  context: Client,
  options: OutputOptions = { requestOptions: {} }
): StreamableMethod<Output200Response> {
  return context
    .path("/type/model/usage/output")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _outputDeserialize(
  result: Output200Response
): Promise<OutputRecord> {
  if ("200" !== result.status) {
    throw result.body;
  }

  return {
    requiredProp: result.body["requiredProp"],
  };
}

export async function output(
  context: Client,
  options: OutputOptions = { requestOptions: {} }
): Promise<OutputRecord> {
  const result = await _outputSend(context, options);
  return _outputDeserialize(result);
}

export function _inputAndOutputSend(
  context: Client,
  requiredProp: string,
  options: InputAndOutputOptions = { requestOptions: {} }
): StreamableMethod<InputAndOutput200Response> {
  return context
    .path("/type/model/usage/input-output")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { requiredProp: requiredProp },
    });
}

export async function _inputAndOutputDeserialize(
  result: InputAndOutput200Response
): Promise<InputOutputRecord> {
  if ("200" !== result.status) {
    throw result.body;
  }

  return {
    requiredProp: result.body["requiredProp"],
  };
}

export async function inputAndOutput(
  context: Client,
  requiredProp: string,
  options: InputAndOutputOptions = { requestOptions: {} }
): Promise<InputOutputRecord> {
  const result = await _inputAndOutputSend(context, requiredProp, options);
  return _inputAndOutputDeserialize(result);
}
