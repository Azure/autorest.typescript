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
  GroupRenamedTwoOptionalParams,
  GroupRenamedFourOptionalParams,
  GroupRenamedSixOptionalParams,
} from "../../models/options.js";

export function _renamedTwoSend(
  context: Client,
  options: GroupRenamedTwoOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/two")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _renamedTwoDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function renamedTwo(
  context: Client,
  options: GroupRenamedTwoOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _renamedTwoSend(context, options);
  return _renamedTwoDeserialize(result);
}

export function _renamedFourSend(
  context: Client,
  options: GroupRenamedFourOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/four")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _renamedFourDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function renamedFour(
  context: Client,
  options: GroupRenamedFourOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _renamedFourSend(context, options);
  return _renamedFourDeserialize(result);
}

export function _renamedSixSend(
  context: Client,
  options: GroupRenamedSixOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/six")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _renamedSixDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function renamedSix(
  context: Client,
  options: GroupRenamedSixOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _renamedSixSend(context, options);
  return _renamedSixDeserialize(result);
}
