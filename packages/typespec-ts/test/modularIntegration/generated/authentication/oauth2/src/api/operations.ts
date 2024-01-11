// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Invalid204Response,
  Invalid403Response,
  OAuth2Context as Client,
  Valid204Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { ValidOptions, InvalidOptions } from "../models/options.js";

export function _validSend(
  context: Client,
  options: ValidOptions = { requestOptions: {} },
): StreamableMethod<Valid204Response> {
  return context
    .path("/authentication/oauth2/valid")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _validDeserialize(
  result: Valid204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Check whether client is authenticated */
export async function valid(
  context: Client,
  options: ValidOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _validSend(context, options);
  return _validDeserialize(result);
}

export function _invalidSend(
  context: Client,
  options: InvalidOptions = { requestOptions: {} },
): StreamableMethod<Invalid204Response | Invalid403Response> {
  return context
    .path("/authentication/oauth2/invalid")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _invalidDeserialize(
  result: Invalid204Response | Invalid403Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Check whether client is authenticated. Will return an invalid bearer error. */
export async function invalid(
  context: Client,
  options: InvalidOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _invalidSend(context, options);
  return _invalidDeserialize(result);
}
