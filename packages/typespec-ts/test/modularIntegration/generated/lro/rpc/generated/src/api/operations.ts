// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "./pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { GenerationOptions, GenerationResult } from "../models/models.js";
import {
  isUnexpected,
  LongRunningRpc202Response,
  LongRunningRpcDefaultResponse,
  LongRunningRpcLogicalResponse,
  RpcContext as Client,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { LongRunningRpcOptions } from "../models/options.js";

export function _longRunningRpcSend(
  context: Client,
  body: GenerationOptions,
  options: LongRunningRpcOptions = { requestOptions: {} },
): StreamableMethod<
  | LongRunningRpc202Response
  | LongRunningRpcDefaultResponse
  | LongRunningRpcLogicalResponse
> {
  return context
    .path("/azure/core/lro/rpc/generations:submit")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prompt: body["prompt"] },
    });
}

export async function _longRunningRpcDeserialize(
  result:
    | LongRunningRpc202Response
    | LongRunningRpcDefaultResponse
    | LongRunningRpcLogicalResponse,
): Promise<GenerationResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as LongRunningRpcLogicalResponse;
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
  options: LongRunningRpcOptions = { requestOptions: {} },
): PollerLike<OperationState<GenerationResult>, GenerationResult> {
  return getLongRunningPoller(context, _longRunningRpcDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _longRunningRpcSend(context, body, options),
  }) as PollerLike<OperationState<GenerationResult>, GenerationResult>;
}
