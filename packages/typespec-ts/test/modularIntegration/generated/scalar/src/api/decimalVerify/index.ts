// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DecimalVerifyPrepareVerify200Response,
  DecimalVerifyVerify204Response,
  ScalarContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  DecimalVerifyPrepareVerifyOptions,
  DecimalVerifyVerifyOptions,
} from "../../models/options.js";

export function _decimalVerifyPrepareVerifySend(
  context: Client,
  options: DecimalVerifyPrepareVerifyOptions = { requestOptions: {} },
): StreamableMethod<DecimalVerifyPrepareVerify200Response> {
  return context
    .path("/type/scalar/decimal/prepare_verify")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _decimalVerifyPrepareVerifyDeserialize(
  result: DecimalVerifyPrepareVerify200Response,
): Promise<number[]> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

export async function decimalVerifyPrepareVerify(
  context: Client,
  options: DecimalVerifyPrepareVerifyOptions = { requestOptions: {} },
): Promise<number[]> {
  const result = await _decimalVerifyPrepareVerifySend(context, options);
  return _decimalVerifyPrepareVerifyDeserialize(result);
}

export function _decimalVerifyVerifySend(
  context: Client,
  body: number,
  options: DecimalVerifyVerifyOptions = { requestOptions: {} },
): StreamableMethod<DecimalVerifyVerify204Response> {
  return context
    .path("/type/scalar/decimal/verify")
    .post({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _decimalVerifyVerifyDeserialize(
  result: DecimalVerifyVerify204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function decimalVerifyVerify(
  context: Client,
  body: number,
  options: DecimalVerifyVerifyOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _decimalVerifyVerifySend(context, body, options);
  return _decimalVerifyVerifyDeserialize(result);
}
