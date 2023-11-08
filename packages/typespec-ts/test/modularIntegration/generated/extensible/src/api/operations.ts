// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DaysOfWeekExtensibleEnum } from "../models/models.js";
import {
  ExtensibleContext as Client,
  GetKnownValue200Response,
  GetUnknownValue200Response,
  PutKnownValue204Response,
  PutUnknownValue204Response
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters
} from "@azure-rest/core-client";
import {
  GetKnownValueOptions,
  GetUnknownValueOptions,
  PutKnownValueOptions,
  PutUnknownValueOptions
} from "../models/options.js";

export function _getKnownValueSend(
  context: Client,
  options: GetKnownValueOptions = { requestOptions: {} }
): StreamableMethod<GetKnownValue200Response> {
  return context
    .path("/type/enum/extensible/string/known-value")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getKnownValueDeserialize(
  result: GetKnownValue200Response
): Promise<DaysOfWeekExtensibleEnum> {
  if (result.status !== "200") {
    throw result.body;
  }

  return result.body;
}

export async function getKnownValue(
  context: Client,
  options: GetKnownValueOptions = { requestOptions: {} }
): Promise<DaysOfWeekExtensibleEnum> {
  const result = await _getKnownValueSend(context, options);
  return _getKnownValueDeserialize(result);
}

export function _getUnknownValueSend(
  context: Client,
  options: GetUnknownValueOptions = { requestOptions: {} }
): StreamableMethod<GetUnknownValue200Response> {
  return context
    .path("/type/enum/extensible/string/unknown-value")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getUnknownValueDeserialize(
  result: GetUnknownValue200Response
): Promise<DaysOfWeekExtensibleEnum> {
  if (result.status !== "200") {
    throw result.body;
  }

  return result.body;
}

export async function getUnknownValue(
  context: Client,
  options: GetUnknownValueOptions = { requestOptions: {} }
): Promise<DaysOfWeekExtensibleEnum> {
  const result = await _getUnknownValueSend(context, options);
  return _getUnknownValueDeserialize(result);
}

export function _putKnownValueSend(
  context: Client,
  body: DaysOfWeekExtensibleEnum,
  options: PutKnownValueOptions = { requestOptions: {} }
): StreamableMethod<PutKnownValue204Response> {
  return context
    .path("/type/enum/extensible/string/known-value")
    .put({ ...operationOptionsToRequestParameters(options), body });
}

export async function _putKnownValueDeserialize(
  result: PutKnownValue204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function putKnownValue(
  context: Client,
  body: DaysOfWeekExtensibleEnum,
  options: PutKnownValueOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _putKnownValueSend(context, body, options);
  return _putKnownValueDeserialize(result);
}

export function _putUnknownValueSend(
  context: Client,
  body: DaysOfWeekExtensibleEnum,
  options: PutUnknownValueOptions = { requestOptions: {} }
): StreamableMethod<PutUnknownValue204Response> {
  return context
    .path("/type/enum/extensible/string/unknown-value")
    .put({ ...operationOptionsToRequestParameters(options), body });
}

export async function _putUnknownValueDeserialize(
  result: PutUnknownValue204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function putUnknownValue(
  context: Client,
  body: DaysOfWeekExtensibleEnum,
  options: PutUnknownValueOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _putUnknownValueSend(context, body, options);
  return _putUnknownValueDeserialize(result);
}
