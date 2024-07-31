// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ServiceContext as Client,
  Four204Response,
  Three204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  FooThreeOptionalParams,
  FooFourOptionalParams,
} from "../../models/options.js";

export function _threeSend(
  context: Client,
  options: FooThreeOptionalParams = { requestOptions: {} },
): StreamableMethod<Three204Response> {
  return context
    .path("/three")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _threeDeserialize(
  result: Three204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function three(
  context: Client,
  options: FooThreeOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _threeSend(context, options);
  return _threeDeserialize(result);
}

export function _fourSend(
  context: Client,
  options: FooFourOptionalParams = { requestOptions: {} },
): StreamableMethod<Four204Response> {
  return context
    .path("/four")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _fourDeserialize(result: Four204Response): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function four(
  context: Client,
  options: FooFourOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _fourSend(context, options);
  return _fourDeserialize(result);
}
