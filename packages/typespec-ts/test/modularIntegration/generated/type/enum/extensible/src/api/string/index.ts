// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DaysOfWeekExtensibleEnum } from "../../models/models.js";
import {
  ExtensibleContext as Client,
  GetKnownValue200Response,
  GetUnknownValue200Response,
  PutKnownValue204Response,
  PutUnknownValue204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  StringGetKnownValueOptionalParams,
  StringGetUnknownValueOptionalParams,
  StringPutKnownValueOptionalParams,
  StringPutUnknownValueOptionalParams,
} from "../options.js";

export function _getKnownValueSend(
  context: Client,
  options: StringGetKnownValueOptionalParams = { requestOptions: {} },
): StreamableMethod<GetKnownValue200Response> {
  return context
    .path("/type/enum/extensible/string/known-value")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getKnownValueDeserialize(
  result: GetKnownValue200Response,
): Promise<DaysOfWeekExtensibleEnum> {
  if (result.status !== "200") {
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
): StreamableMethod<GetUnknownValue200Response> {
  return context
    .path("/type/enum/extensible/string/unknown-value")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getUnknownValueDeserialize(
  result: GetUnknownValue200Response,
): Promise<DaysOfWeekExtensibleEnum> {
  if (result.status !== "200") {
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
): StreamableMethod<PutKnownValue204Response> {
  return context
    .path("/type/enum/extensible/string/known-value")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _putKnownValueDeserialize(
  result: PutKnownValue204Response,
): Promise<void> {
  if (result.status !== "204") {
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
): StreamableMethod<PutUnknownValue204Response> {
  return context
    .path("/type/enum/extensible/string/unknown-value")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _putUnknownValueDeserialize(
  result: PutUnknownValue204Response,
): Promise<void> {
  if (result.status !== "204") {
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
