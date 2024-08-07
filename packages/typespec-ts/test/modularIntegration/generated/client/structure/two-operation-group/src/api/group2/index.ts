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
  Group2TwoOptionalParams,
  Group2FiveOptionalParams,
  Group2SixOptionalParams,
} from "../../models/options.js";

export function _twoSend(
  context: Client,
  options: Group2TwoOptionalParams = { requestOptions: {} },
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
  options: Group2TwoOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _twoSend(context, options);
  return _twoDeserialize(result);
}

export function _fiveSend(
  context: Client,
  options: Group2FiveOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/five")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _fiveDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function five(
  context: Client,
  options: Group2FiveOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _fiveSend(context, options);
  return _fiveDeserialize(result);
}

export function _sixSend(
  context: Client,
  options: Group2SixOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/six")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _sixDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function six(
  context: Client,
  options: Group2SixOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _sixSend(context, options);
  return _sixDeserialize(result);
}
