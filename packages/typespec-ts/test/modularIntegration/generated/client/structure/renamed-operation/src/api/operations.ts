// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  RenamedOneOptionalParams,
  RenamedThreeOptionalParams,
  RenamedFiveOptionalParams,
} from "../models/options.js";

export function _renamedOneSend(
  context: Client,
  options: RenamedOneOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/one")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _renamedOneDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function renamedOne(
  context: Client,
  options: RenamedOneOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _renamedOneSend(context, options);
  return _renamedOneDeserialize(result);
}

export function _renamedThreeSend(
  context: Client,
  options: RenamedThreeOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/three")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _renamedThreeDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function renamedThree(
  context: Client,
  options: RenamedThreeOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _renamedThreeSend(context, options);
  return _renamedThreeDeserialize(result);
}

export function _renamedFiveSend(
  context: Client,
  options: RenamedFiveOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/five")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _renamedFiveDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function renamedFive(
  context: Client,
  options: RenamedFiveOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _renamedFiveSend(context, options);
  return _renamedFiveDeserialize(result);
}
