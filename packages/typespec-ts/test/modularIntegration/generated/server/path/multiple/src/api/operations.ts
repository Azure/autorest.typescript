// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  MultipleContext as Client,
  NoOperationParams204Response,
  WithOperationPathParam204Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  NoOperationParamsOptions,
  WithOperationPathParamOptions,
} from "../models/options.js";

export function _noOperationParamsSend(
  context: Client,
  options: NoOperationParamsOptions = { requestOptions: {} },
): StreamableMethod<NoOperationParams204Response> {
  return context
    .path("/")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _noOperationParamsDeserialize(
  result: NoOperationParams204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function noOperationParams(
  context: Client,
  options: NoOperationParamsOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _noOperationParamsSend(context, options);
  return _noOperationParamsDeserialize(result);
}

export function _withOperationPathParamSend(
  context: Client,
  keyword: string,
  options: WithOperationPathParamOptions = { requestOptions: {} },
): StreamableMethod<WithOperationPathParam204Response> {
  return context
    .path("/{keyword}", keyword)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _withOperationPathParamDeserialize(
  result: WithOperationPathParam204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function withOperationPathParam(
  context: Client,
  keyword: string,
  options: WithOperationPathParamOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _withOperationPathParamSend(context, keyword, options);
  return _withOperationPathParamDeserialize(result);
}
