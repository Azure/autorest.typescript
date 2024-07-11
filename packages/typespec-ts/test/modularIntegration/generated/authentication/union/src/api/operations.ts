// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  UnionContext as Client,
  ValidKey204Response,
  ValidToken204Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { ValidKeyOptionalParams, ValidTokenOptionalParams } from "./options.js";

export function _validKeySend(
  context: Client,
  options: ValidKeyOptionalParams = { requestOptions: {} },
): StreamableMethod<ValidKey204Response> {
  return context
    .path("/authentication/union/validkey")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _validKeyDeserialize(
  result: ValidKey204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<ValidToken204Response> {
  return context
    .path("/authentication/union/validtoken")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _validTokenDeserialize(
  result: ValidToken204Response,
): Promise<void> {
  if (result.status !== "204") {
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
