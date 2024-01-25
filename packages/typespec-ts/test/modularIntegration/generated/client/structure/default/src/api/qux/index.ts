// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Eight204Response,
  ServiceContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { QuxEightOptions } from "../../models/options.js";

export function _eightSend(
  context: Client,
  options: QuxEightOptions = { requestOptions: {} },
): StreamableMethod<Eight204Response> {
  return context
    .path("/eight")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _eightDeserialize(
  result: Eight204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function eight(
  context: Client,
  options: QuxEightOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _eightSend(context, options);
  return _eightDeserialize(result);
}
