// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NotDefinedContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { ValidOptionalParams } from "../models/options.js";

export function _validSend(
  context: Client,
  options: ValidOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/server/endpoint/not-defined/valid")
    .head({ ...operationOptionsToRequestParameters(options) });
}

export async function _validDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function valid(
  context: Client,
  options: ValidOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _validSend(context, options);
  return _validDeserialize(result);
}
