// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  ValidKeyOptionalParams,
  ValidTokenOptionalParams,
} from "../models/options.js";

export function _validKeySend(
  context: Client,
  options: ValidKeyOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/authentication/union/validkey")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _validKeyDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Check whether client is authenticated */
export async function validKey(
  context: Client,
  options: ValidKeyOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _validKeySend(context, options);
  return _validKeyDeserialize(result);
}

export function _validTokenSend(
  context: Client,
  options: ValidTokenOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/authentication/union/validtoken")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _validTokenDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Check whether client is authenticated */
export async function validToken(
  context: Client,
  options: ValidTokenOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _validTokenSend(context, options);
  return _validTokenDeserialize(result);
}
