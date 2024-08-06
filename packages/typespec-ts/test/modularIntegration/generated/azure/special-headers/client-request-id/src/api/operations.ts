// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { XmsRequestIdClientContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { GetOptionalParams } from "../models/options.js";

export function _getSend(
  context: Client,
  options: GetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/azure/special-headers/x-ms-client-request-id/")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
      },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Get operation with azure `x-ms-client-request-id` header. */
export async function get(
  context: Client,
  options: GetOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}
