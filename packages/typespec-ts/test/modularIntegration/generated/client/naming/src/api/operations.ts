// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ClientNameModel,
  LanguageClientNameModel,
  ClientNameAndJsonEncodedNameModel,
} from "../models/models.js";
import { NamingContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  ClientNameOptionalParams,
  ParameterOptionalParams,
  ClientOptionalParams,
  LanguageOptionalParams,
  CompatibleWithEncodedNameOptionalParams,
  RequestOptionalParams,
  ResponseOptionalParams,
} from "../models/options.js";

export function _clientNameSend(
  context: Client,
  options: ClientNameOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/client/naming/operation")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _clientNameDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function clientName(
  context: Client,
  options: ClientNameOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _clientNameSend(context, options);
  return _clientNameDeserialize(result);
}

export function _parameterSend(
  context: Client,
  clientName: string,
  options: ParameterOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/client/naming/parameter")
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { defaultName: clientName },
    });
}

export async function _parameterDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function parameter(
  context: Client,
  clientName: string,
  options: ParameterOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _parameterSend(context, clientName, options);
  return _parameterDeserialize(result);
}

export function _clientSend(
  context: Client,
  body: ClientNameModel,
  options: ClientOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/client/naming/property/client")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { defaultName: body["clientName"] },
    });
}

export async function _clientDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function client(
  context: Client,
  body: ClientNameModel,
  options: ClientOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _clientSend(context, body, options);
  return _clientDeserialize(result);
}

export function _languageSend(
  context: Client,
  body: LanguageClientNameModel,
  options: LanguageOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/client/naming/property/language")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { defaultName: body["tSName"] },
    });
}

export async function _languageDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function language(
  context: Client,
  body: LanguageClientNameModel,
  options: LanguageOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _languageSend(context, body, options);
  return _languageDeserialize(result);
}

export function _compatibleWithEncodedNameSend(
  context: Client,
  body: ClientNameAndJsonEncodedNameModel,
  options: CompatibleWithEncodedNameOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/client/naming/property/compatible-with-encoded-name")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { wireName: body["clientName"] },
    });
}

export async function _compatibleWithEncodedNameDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function compatibleWithEncodedName(
  context: Client,
  body: ClientNameAndJsonEncodedNameModel,
  options: CompatibleWithEncodedNameOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _compatibleWithEncodedNameSend(context, body, options);
  return _compatibleWithEncodedNameDeserialize(result);
}

export function _requestSend(
  context: Client,
  clientName: string,
  options: RequestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/client/naming/header")
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: { "default-name": clientName },
    });
}

export async function _requestDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function request(
  context: Client,
  clientName: string,
  options: RequestOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _requestSend(context, clientName, options);
  return _requestDeserialize(result);
}

export function _responseSend(
  context: Client,
  options: ResponseOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/client/naming/header")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _responseDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function response(
  context: Client,
  options: ResponseOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _responseSend(context, options);
  return _responseDeserialize(result);
}
