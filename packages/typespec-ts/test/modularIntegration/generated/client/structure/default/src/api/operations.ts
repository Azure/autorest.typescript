// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { OneOptionalParams, TwoOptionalParams } from "../models/options.js";

export function _oneSend(
  context: Client,
  options: OneOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/one")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _oneDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function one(
  context: Client,
  options: OneOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _oneSend(context, options);
  return _oneDeserialize(result);
}

export function _twoSend(
  context: Client,
  options: TwoOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/two")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _twoDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function two(
  context: Client,
  options: TwoOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _twoSend(context, options);
  return _twoDeserialize(result);
}
