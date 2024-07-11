// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  NotDefinedContext as Client,
  Valid200Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { ValidOptionalParams } from "./options.js";

export function _validSend(
  context: Client,
  options: ValidOptionalParams = { requestOptions: {} },
): StreamableMethod<Valid200Response> {
  return context
    .path("/server/endpoint/not-defined/valid")
    .head({ ...operationOptionsToRequestParameters(options) });
}

export async function _validDeserialize(
  result: Valid200Response,
): Promise<void> {
  if (result.status !== "200") {
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
