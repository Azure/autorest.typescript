// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ServiceContext as Client,
  Five204Response,
  Six204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  BarFiveOptionalParams,
  BarSixOptionalParams,
} from "../../models/options.js";

export function _fiveSend(
  context: Client,
  options: BarFiveOptionalParams = { requestOptions: {} },
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
  options: BarFiveOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _fiveSend(context, options);
  return _fiveDeserialize(result);
}

export function _sixSend(
  context: Client,
  options: BarSixOptionalParams = { requestOptions: {} },
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
  options: BarSixOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _sixSend(context, options);
  return _sixDeserialize(result);
}
