// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Four204Response,
  ServiceContext as Client,
  Six204Response,
  Two204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  GroupRenamedTwoOptions,
  GroupRenamedFourOptions,
  GroupRenamedSixOptions,
} from "../../models/options.js";

export function _renamedTwoSend(
  context: Client,
  options: GroupRenamedTwoOptions = { requestOptions: {} },
): StreamableMethod<Two204Response> {
  return context
    .path("/two")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _renamedTwoDeserialize(
  result: Two204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function renamedTwo(
  context: Client,
  options: GroupRenamedTwoOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _renamedTwoSend(context, options);
  return _renamedTwoDeserialize(result);
}

export function _renamedFourSend(
  context: Client,
  options: GroupRenamedFourOptions = { requestOptions: {} },
): StreamableMethod<Four204Response> {
  return context
    .path("/four")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _renamedFourDeserialize(
  result: Four204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function renamedFour(
  context: Client,
  options: GroupRenamedFourOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _renamedFourSend(context, options);
  return _renamedFourDeserialize(result);
}

export function _renamedSixSend(
  context: Client,
  options: GroupRenamedSixOptions = { requestOptions: {} },
): StreamableMethod<Six204Response> {
  return context
    .path("/six")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _renamedSixDeserialize(
  result: Six204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function renamedSix(
  context: Client,
  options: GroupRenamedSixOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _renamedSixSend(context, options);
  return _renamedSixDeserialize(result);
}
