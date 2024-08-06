// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "./pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { GenerationOptions, GenerationResult } from "../models/models.js";
import { RpcContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { LongRunningRpcOptionalParams } from "../models/options.js";

export function _longRunningRpcSend(
  context: Client,
  body: GenerationOptions,
  options: LongRunningRpcOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/azure/core/lro/rpc/generations:submit")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prompt: body["prompt"] },
    });
}

export async function _longRunningRpcDeserialize(
  result: PathUncheckedResponse,
): Promise<GenerationResult> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  if (result?.body?.result === undefined) {
    throw createRestError(
      `Expected a result in the response at position "result.body.result"`,
      result,
    );
  }

  return {
    data: result.body.result["data"],
  };
}

/** Generate data. */
export function longRunningRpc(
  context: Client,
  body: GenerationOptions,
  options: LongRunningRpcOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<GenerationResult>, GenerationResult> {
  return getLongRunningPoller(
    context,
    _longRunningRpcDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () => _longRunningRpcSend(context, body, options),
    },
  ) as PollerLike<OperationState<GenerationResult>, GenerationResult>;
}
