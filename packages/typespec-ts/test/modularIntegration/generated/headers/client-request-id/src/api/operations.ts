// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import "../models/models.js";
import {
  Get204Response,
  RequestIdClientContext as Client,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { GetOptions } from "../models/options.js";

export function _getSend(
  context: Client,
  options: GetOptions = { requestOptions: {} }
): StreamableMethod<Get204Response> {
  return context
    .path("/special-headers/client-request-id")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { "client-request-id": options?.clientRequestId },
    });
}

export async function _getDeserialize(_result: Get204Response): Promise<void> {
  return;
}

/** Get operation with azure client request id header. */
export async function get(
  context: Client,
  options: GetOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}
