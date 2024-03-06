// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Decimal128VerifyPrepareVerify200Response,
  Decimal128VerifyVerify204Response,
  ScalarContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  Decimal128VerifyPrepareVerifyOptions,
  Decimal128VerifyVerifyOptions,
} from "../../models/options.js";

export function _decimal128VerifyPrepareVerifySend(
  context: Client,
  options: Decimal128VerifyPrepareVerifyOptions = { requestOptions: {} },
): StreamableMethod<Decimal128VerifyPrepareVerify200Response> {
  return context
    .path("/type/scalar/decimal128/prepare_verify")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _decimal128VerifyPrepareVerifyDeserialize(
  result: Decimal128VerifyPrepareVerify200Response,
): Promise<number[]> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

export async function decimal128VerifyPrepareVerify(
  context: Client,
  options: Decimal128VerifyPrepareVerifyOptions = { requestOptions: {} },
): Promise<number[]> {
  const result = await _decimal128VerifyPrepareVerifySend(context, options);
  return _decimal128VerifyPrepareVerifyDeserialize(result);
}

export function _decimal128VerifyVerifySend(
  context: Client,
  body: number,
  options: Decimal128VerifyVerifyOptions = { requestOptions: {} },
): StreamableMethod<Decimal128VerifyVerify204Response> {
  return context
    .path("/type/scalar/decimal128/verify")
    .post({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _decimal128VerifyVerifyDeserialize(
  result: Decimal128VerifyVerify204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function decimal128VerifyVerify(
  context: Client,
  body: number,
  options: Decimal128VerifyVerifyOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _decimal128VerifyVerifySend(context, body, options);
  return _decimal128VerifyVerifyDeserialize(result);
}
