// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { MultipleContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  NoOperationParamsOptionalParams,
  WithOperationPathParamOptionalParams,
} from "../models/options.js";

export function _noOperationParamsSend(
  context: Client,
  options: NoOperationParamsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _noOperationParamsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function noOperationParams(
  context: Client,
  options: NoOperationParamsOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _noOperationParamsSend(context, options);
  return _noOperationParamsDeserialize(result);
}

export function _withOperationPathParamSend(
  context: Client,
  keyword: string,
  options: WithOperationPathParamOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/{keyword}", keyword)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _withOperationPathParamDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function withOperationPathParam(
  context: Client,
  keyword: string,
  options: WithOperationPathParamOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _withOperationPathParamSend(context, keyword, options);
  return _withOperationPathParamDeserialize(result);
}
