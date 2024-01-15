// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Five204Response,
  One204Response,
  ServiceContext as Client,
  Three204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  RenamedOneOptions,
  RenamedThreeOptions,
  RenamedFiveOptions,
} from "../models/options.js";

export function _renamedOneSend(
  context: Client,
  options: RenamedOneOptions = { requestOptions: {} },
): StreamableMethod<One204Response> {
  return context
    .path("/one")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _renamedOneDeserialize(
  result: One204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function renamedOne(
  context: Client,
  options: RenamedOneOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _renamedOneSend(context, options);
  return _renamedOneDeserialize(result);
}

export function _renamedThreeSend(
  context: Client,
  options: RenamedThreeOptions = { requestOptions: {} },
): StreamableMethod<Three204Response> {
  return context
    .path("/three")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _renamedThreeDeserialize(
  result: Three204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function renamedThree(
  context: Client,
  options: RenamedThreeOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _renamedThreeSend(context, options);
  return _renamedThreeDeserialize(result);
}

export function _renamedFiveSend(
  context: Client,
  options: RenamedFiveOptions = { requestOptions: {} },
): StreamableMethod<Five204Response> {
  return context
    .path("/five")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _renamedFiveDeserialize(
  result: Five204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function renamedFive(
  context: Client,
  options: RenamedFiveOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _renamedFiveSend(context, options);
  return _renamedFiveDeserialize(result);
}
