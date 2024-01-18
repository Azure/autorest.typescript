// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DaysOfWeekEnum } from "../models/models.js";
import {
  FixedContext as Client,
  GetKnownValue200Response,
  PutKnownValue204Response,
  PutUnknownValue204Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  GetKnownValueOptions,
  PutKnownValueOptions,
  PutUnknownValueOptions,
} from "../models/options.js";

export function _getKnownValueSend(
  context: Client,
  options: GetKnownValueOptions = { requestOptions: {} },
): StreamableMethod<GetKnownValue200Response> {
  return context
    .path("/type/enum/fixed/string/known-value")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getKnownValueDeserialize(
  result: GetKnownValue200Response,
): Promise<DaysOfWeekEnum> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

/** getKnownValue */
export async function getKnownValue(
  context: Client,
  options: GetKnownValueOptions = { requestOptions: {} },
): Promise<DaysOfWeekEnum> {
  const result = await _getKnownValueSend(context, options);
  return _getKnownValueDeserialize(result);
}

export function _putKnownValueSend(
  context: Client,
  body: DaysOfWeekEnum,
  options: PutKnownValueOptions = { requestOptions: {} },
): StreamableMethod<PutKnownValue204Response> {
  return context
    .path("/type/enum/fixed/string/known-value")
    .put({ ...operationOptionsToRequestParameters(options) });
}

export async function _putKnownValueDeserialize(
  result: PutKnownValue204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** putKnownValue */
export async function putKnownValue(
  context: Client,
  body: DaysOfWeekEnum,
  options: PutKnownValueOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _putKnownValueSend(context, body, options);
  return _putKnownValueDeserialize(result);
}

export function _putUnknownValueSend(
  context: Client,
  body: DaysOfWeekEnum,
  options: PutUnknownValueOptions = { requestOptions: {} },
): StreamableMethod<PutUnknownValue204Response> {
  return context
    .path("/type/enum/fixed/string/unknown-value")
    .put({ ...operationOptionsToRequestParameters(options) });
}

export async function _putUnknownValueDeserialize(
  result: PutUnknownValue204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** putUnknownValue */
export async function putUnknownValue(
  context: Client,
  body: DaysOfWeekEnum,
  options: PutUnknownValueOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _putUnknownValueSend(context, body, options);
  return _putUnknownValueDeserialize(result);
}
