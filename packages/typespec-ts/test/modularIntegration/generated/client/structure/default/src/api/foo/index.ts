// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  FooThreeOptionalParams,
  FooFourOptionalParams,
} from "../../models/options.js";

export function _threeSend(
  context: Client,
  options: FooThreeOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/three")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _threeDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
): StreamableMethod {
  return context
    .path("/four")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _fourDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
