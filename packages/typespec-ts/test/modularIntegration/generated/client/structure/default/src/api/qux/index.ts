// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ServiceContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { QuxEightOptionalParams } from "../../models/options.js";

export function _eightSend(
  context: Client,
  options: QuxEightOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/eight")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _eightDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function eight(
  context: Client,
  options: QuxEightOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _eightSend(context, options);
  return _eightDeserialize(result);
}
