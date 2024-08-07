// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScalarContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  DecimalVerifyPrepareVerifyOptionalParams,
  DecimalVerifyVerifyOptionalParams,
} from "../../models/options.js";

export function _decimalVerifyPrepareVerifySend(
  context: Client,
  options: DecimalVerifyPrepareVerifyOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/scalar/decimal/prepare_verify")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _decimalVerifyPrepareVerifyDeserialize(
  result: PathUncheckedResponse,
): Promise<number[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function decimalVerifyPrepareVerify(
  context: Client,
  options: DecimalVerifyPrepareVerifyOptionalParams = { requestOptions: {} },
): Promise<number[]> {
  const result = await _decimalVerifyPrepareVerifySend(context, options);
  return _decimalVerifyPrepareVerifyDeserialize(result);
}

export function _decimalVerifyVerifySend(
  context: Client,
  body: number,
  options: DecimalVerifyVerifyOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/scalar/decimal/verify")
    .post({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _decimalVerifyVerifyDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function decimalVerifyVerify(
  context: Client,
  body: number,
  options: DecimalVerifyVerifyOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _decimalVerifyVerifySend(context, body, options);
  return _decimalVerifyVerifyDeserialize(result);
}
