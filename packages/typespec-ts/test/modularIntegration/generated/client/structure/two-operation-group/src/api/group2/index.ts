// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Five204Response,
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
  Group2TwoOptions,
  Group2FiveOptions,
  Group2SixOptions,
} from "../../models/options.js";

export function _twoSend(
  context: Client,
  options: Group2TwoOptions = { requestOptions: {} },
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
  options: Group2TwoOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _twoSend(context, options);
  return _twoDeserialize(result);
}

export function _fiveSend(
  context: Client,
  options: Group2FiveOptions = { requestOptions: {} },
): StreamableMethod<Five204Response> {
  return context
    .path("/five")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _fiveDeserialize(result: Five204Response): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function five(
  context: Client,
  options: Group2FiveOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _fiveSend(context, options);
  return _fiveDeserialize(result);
}

export function _sixSend(
  context: Client,
  options: Group2SixOptions = { requestOptions: {} },
): StreamableMethod<Six204Response> {
  return context
    .path("/six")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _sixDeserialize(result: Six204Response): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function six(
  context: Client,
  options: Group2SixOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _sixSend(context, options);
  return _sixDeserialize(result);
}
