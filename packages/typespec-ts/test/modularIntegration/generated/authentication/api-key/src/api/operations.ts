// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ApiKeyContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  ValidOptionalParams,
  InvalidOptionalParams,
} from "../models/options.js";

export function _validSend(
  context: Client,
  options: ValidOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/authentication/api-key/valid")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _validDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Check whether client is authenticated */
export async function valid(
  context: Client,
  options: ValidOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _validSend(context, options);
  return _validDeserialize(result);
}

export function _invalidSend(
  context: Client,
  options: InvalidOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/authentication/api-key/invalid")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _invalidDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Check whether client is authenticated. */
export async function invalid(
  context: Client,
  options: InvalidOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _invalidSend(context, options);
  return _invalidDeserialize(result);
}
