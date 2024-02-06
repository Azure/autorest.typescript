// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  One204Response,
  ServiceContext as Client,
  Two204Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { OneOptions, TwoOptions } from "../models/options.js";

export function _oneSend(
  context: Client,
  options: OneOptions = { requestOptions: {} },
): StreamableMethod<One204Response> {
  return context
    .path("/one")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _oneDeserialize(result: One204Response): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function one(
  context: Client,
  options: OneOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _oneSend(context, options);
  return _oneDeserialize(result);
}

export function _twoSend(
  context: Client,
  options: TwoOptions = { requestOptions: {} },
): StreamableMethod<Two204Response> {
  return context
    .path("/two")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _twoDeserialize(result: Two204Response): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function two(
  context: Client,
  options: TwoOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _twoSend(context, options);
  return _twoDeserialize(result);
}
