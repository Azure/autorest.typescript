// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ImmediateSuccess204Response,
  RepeatabilityContext as Client,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { ImmediateSuccessOptions } from "../models/options.js";

export function _immediateSuccessSend(
  context: Client,
  repeatabilityRequestID: string,
  repeatabilityFirstSent: Date,
  options: ImmediateSuccessOptions = { requestOptions: {} },
): StreamableMethod<ImmediateSuccess204Response> {
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
  result: ImmediateSuccess204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Check we recognize Repeatability-Request-ID and Repeatability-First-Sent. */
export async function immediateSuccess(
  context: Client,
  repeatabilityRequestID: string,
  repeatabilityFirstSent: Date,
  options: ImmediateSuccessOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _immediateSuccessSend(
    context,
    repeatabilityRequestID,
    repeatabilityFirstSent,
    options,
  );
  return _immediateSuccessDeserialize(result);
}
