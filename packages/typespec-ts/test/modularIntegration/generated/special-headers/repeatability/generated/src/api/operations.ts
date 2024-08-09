// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RepeatabilityContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { ImmediateSuccessOptionalParams } from "../models/options.js";

export function _immediateSuccessSend(
  context: Client,
  repeatabilityRequestID: string,
  repeatabilityFirstSent: Date,
  options: ImmediateSuccessOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/special-headers/repeatability/immediateSuccess")
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        "Repeatability-Request-ID": repeatabilityRequestID,
        "Repeatability-First-Sent": repeatabilityFirstSent.toUTCString(),
      },
    });
}

export async function _immediateSuccessDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Check we recognize Repeatability-Request-ID and Repeatability-First-Sent. */
export async function immediateSuccess(
  context: Client,
  repeatabilityRequestID: string,
  repeatabilityFirstSent: Date,
  options: ImmediateSuccessOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _immediateSuccessSend(
    context,
    repeatabilityRequestID,
    repeatabilityFirstSent,
    options,
  );
  return _immediateSuccessDeserialize(result);
}
