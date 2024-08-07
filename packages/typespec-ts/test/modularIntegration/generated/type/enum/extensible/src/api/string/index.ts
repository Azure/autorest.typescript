// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DaysOfWeekExtensibleEnum } from "../../models/models.js";
import { ExtensibleContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  StringGetKnownValueOptionalParams,
  StringGetUnknownValueOptionalParams,
  StringPutKnownValueOptionalParams,
  StringPutUnknownValueOptionalParams,
} from "../../models/options.js";

export function _getKnownValueSend(
  context: Client,
  options: StringGetKnownValueOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/enum/extensible/string/known-value")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getKnownValueDeserialize(
  result: PathUncheckedResponse,
): Promise<DaysOfWeekExtensibleEnum> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body as DaysOfWeekExtensibleEnum;
}

export async function getKnownValue(
  context: Client,
  options: StringGetKnownValueOptionalParams = { requestOptions: {} },
): Promise<DaysOfWeekExtensibleEnum> {
  const result = await _getKnownValueSend(context, options);
  return _getKnownValueDeserialize(result);
}

export function _getUnknownValueSend(
  context: Client,
  options: StringGetUnknownValueOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/enum/extensible/string/unknown-value")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getUnknownValueDeserialize(
  result: PathUncheckedResponse,
): Promise<DaysOfWeekExtensibleEnum> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body as DaysOfWeekExtensibleEnum;
}

export async function getUnknownValue(
  context: Client,
  options: StringGetUnknownValueOptionalParams = { requestOptions: {} },
): Promise<DaysOfWeekExtensibleEnum> {
  const result = await _getUnknownValueSend(context, options);
  return _getUnknownValueDeserialize(result);
}

export function _putKnownValueSend(
  context: Client,
  body: DaysOfWeekExtensibleEnum,
  options: StringPutKnownValueOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/enum/extensible/string/known-value")
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

export async function putKnownValue(
  context: Client,
  body: DaysOfWeekExtensibleEnum,
  options: StringPutKnownValueOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putKnownValueSend(context, body, options);
  return _putKnownValueDeserialize(result);
}

export function _putUnknownValueSend(
  context: Client,
  body: DaysOfWeekExtensibleEnum,
  options: StringPutUnknownValueOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/enum/extensible/string/unknown-value")
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

export async function putUnknownValue(
  context: Client,
  body: DaysOfWeekExtensibleEnum,
  options: StringPutUnknownValueOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putUnknownValueSend(context, body, options);
  return _putUnknownValueDeserialize(result);
}
