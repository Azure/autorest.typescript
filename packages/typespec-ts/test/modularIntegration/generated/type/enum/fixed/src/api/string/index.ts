// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DaysOfWeekEnum } from "../../models/models.js";
import { FixedContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  StringGetKnownValueOptionalParams,
  StringPutKnownValueOptionalParams,
  StringPutUnknownValueOptionalParams,
} from "../../models/options.js";

export function _getKnownValueSend(
  context: Client,
  options: StringGetKnownValueOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/enum/fixed/string/known-value")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getKnownValueDeserialize(
  result: PathUncheckedResponse,
): Promise<DaysOfWeekEnum> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body;
}

/** getKnownValue */
export async function getKnownValue(
  context: Client,
  options: StringGetKnownValueOptionalParams = { requestOptions: {} },
): Promise<DaysOfWeekEnum> {
  const result = await _getKnownValueSend(context, options);
  return _getKnownValueDeserialize(result);
}

export function _putKnownValueSend(
  context: Client,
  body: DaysOfWeekEnum,
  options: StringPutKnownValueOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/enum/fixed/string/known-value")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _putKnownValueDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** putKnownValue */
export async function putKnownValue(
  context: Client,
  body: DaysOfWeekEnum,
  options: StringPutKnownValueOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putKnownValueSend(context, body, options);
  return _putKnownValueDeserialize(result);
}

export function _putUnknownValueSend(
  context: Client,
  body: DaysOfWeekEnum,
  options: StringPutUnknownValueOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/enum/fixed/string/unknown-value")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _putUnknownValueDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** putUnknownValue */
export async function putUnknownValue(
  context: Client,
  body: DaysOfWeekEnum,
  options: StringPutUnknownValueOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putUnknownValueSend(context, body, options);
  return _putUnknownValueDeserialize(result);
}
