// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Four204Response,
  ServiceContext as Client,
  Three204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { FooThreeOptions, FooFourOptions } from "../../models/options.js";

export function _threeSend(
  context: Client,
  options: FooThreeOptions = { requestOptions: {} },
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
  options: FooThreeOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _threeSend(context, options);
  return _threeDeserialize(result);
}

export function _fourSend(
  context: Client,
  options: FooFourOptions = { requestOptions: {} },
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
  options: FooFourOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _fourSend(context, options);
  return _fourDeserialize(result);
}
