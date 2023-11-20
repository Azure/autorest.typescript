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
} from "@azure-rest/core-client";
import { RestError } from "@azure/core-rest-pipeline";
import { ValidKeyOptions, ValidTokenOptions } from "../models/options.js";

export function _validKeySend(
  context: Client,
  options: ValidKeyOptions = { requestOptions: {} }
): StreamableMethod<ValidKey204Response> {
  return context
    .path("/authentication/union/validkey")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _validKeyDeserialize(
  result: ValidKey204Response
): Promise<void> {
  if (result.status !== "204") {
    const internalError = (result.body as any).error || result.body || result;
    const message = `Unexpected status code ${result.status}`;
    throw new RestError(internalError.message ?? message, {
      statusCode: Number(result.status),
      code: internalError.code,
      request: result.request,
    });
  }

  return;
}

/** Check whether client is authenticated */
export async function validKey(
  context: Client,
  options: ValidKeyOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _validKeySend(context, options);
  return _validKeyDeserialize(result);
}

export function _validTokenSend(
  context: Client,
  options: ValidTokenOptions = { requestOptions: {} }
): StreamableMethod<ValidToken204Response> {
  return context
    .path("/authentication/union/validtoken")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _validTokenDeserialize(
  result: ValidToken204Response
): Promise<void> {
  if (result.status !== "204") {
    const internalError = (result.body as any).error || result.body || result;
    const message = `Unexpected status code ${result.status}`;
    throw new RestError(internalError.message ?? message, {
      statusCode: Number(result.status),
      code: internalError.code,
      request: result.request,
    });
  }

  return;
}

/** Check whether client is authenticated */
export async function validToken(
  context: Client,
  options: ValidTokenOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _validTokenSend(context, options);
  return _validTokenDeserialize(result);
}
