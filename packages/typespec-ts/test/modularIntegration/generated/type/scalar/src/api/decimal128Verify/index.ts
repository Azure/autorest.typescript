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
  Decimal128VerifyPrepareVerifyOptionalParams,
  Decimal128VerifyVerifyOptionalParams,
} from "../../models/options.js";

export function _decimal128VerifyPrepareVerifySend(
  context: Client,
  options: Decimal128VerifyPrepareVerifyOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/scalar/decimal128/prepare_verify")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _decimal128VerifyPrepareVerifyDeserialize(
  result: PathUncheckedResponse,
): Promise<number[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

export async function decimal128VerifyPrepareVerify(
  context: Client,
  options: Decimal128VerifyPrepareVerifyOptionalParams = { requestOptions: {} },
): Promise<number[]> {
  const result = await _decimal128VerifyPrepareVerifySend(context, options);
  return _decimal128VerifyPrepareVerifyDeserialize(result);
}

export function _decimal128VerifyVerifySend(
  context: Client,
  body: number,
  options: Decimal128VerifyVerifyOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/scalar/decimal128/verify")
    .post({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _decimal128VerifyVerifyDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function decimal128VerifyVerify(
  context: Client,
  body: number,
  options: Decimal128VerifyVerifyOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _decimal128VerifyVerifySend(context, body, options);
  return _decimal128VerifyVerifyDeserialize(result);
}
