// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SingleContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { MyOpOptionalParams } from "../models/options.js";

export function _myOpSend(
  context: Client,
  options: MyOpOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/server/path/single/myOp")
    .head({ ...operationOptionsToRequestParameters(options) });
}

export async function _myOpDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function myOp(
  context: Client,
  options: MyOpOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _myOpSend(context, options);
  return _myOpDeserialize(result);
}
