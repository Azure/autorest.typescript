// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(result: Get204Response): Promise<void> {
  if ("204" !== result.status) {
    throw result.body;
  }

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
