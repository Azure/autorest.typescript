// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  JsonEncodedNameModel,
  ClientNameModel,
  LanguageClientNameModel,
  ClientNameAndJsonEncodedNameModel,
} from "../../models/models.js";
import {
  NameAndEncodedNameClientContext as Client,
  PropertyClient204Response,
  PropertyJson204Response,
  PropertyJsonAndClient204Response,
  PropertyLanguage204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  PropertyJsonOptions,
  PropertyClientOptions,
  PropertyLanguageOptions,
  PropertyJsonAndClientOptions,
} from "../../models/options.js";

export function _jsonSend(
  context: Client,
  body: JsonEncodedNameModel,
  options: PropertyJsonOptions = { requestOptions: {} },
): StreamableMethod<PropertyJson204Response> {
  return context
    .path("/projection/client-name-and-encoded-name/property/json")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { wireName: body["defaultName"] },
    });
}

export async function _jsonDeserialize(
  result: PropertyJson204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function json(
  context: Client,
  body: JsonEncodedNameModel,
  options: PropertyJsonOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _jsonSend(context, body, options);
  return _jsonDeserialize(result);
}

export function _clientSend(
  context: Client,
  body: ClientNameModel,
  options: PropertyClientOptions = { requestOptions: {} },
): StreamableMethod<PropertyClient204Response> {
  return context
    .path("/projection/client-name-and-encoded-name/property/client")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { defaultName: body["defaultName"] },
    });
}

export async function _clientDeserialize(
  result: PropertyClient204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function client(
  context: Client,
  body: ClientNameModel,
  options: PropertyClientOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _clientSend(context, body, options);
  return _clientDeserialize(result);
}

export function _languageSend(
  context: Client,
  body: LanguageClientNameModel,
  options: PropertyLanguageOptions = { requestOptions: {} },
): StreamableMethod<PropertyLanguage204Response> {
  return context
    .path("/projection/client-name-and-encoded-name/property/language")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { defaultName: body["defaultName"] },
    });
}

export async function _languageDeserialize(
  result: PropertyLanguage204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function language(
  context: Client,
  body: LanguageClientNameModel,
  options: PropertyLanguageOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _languageSend(context, body, options);
  return _languageDeserialize(result);
}

export function _jsonAndClientSend(
  context: Client,
  body: ClientNameAndJsonEncodedNameModel,
  options: PropertyJsonAndClientOptions = { requestOptions: {} },
): StreamableMethod<PropertyJsonAndClient204Response> {
  return context
    .path("/projection/client-name-and-encoded-name/property/json-and-client")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { wireName: body["defaultName"] },
    });
}

export async function _jsonAndClientDeserialize(
  result: PropertyJsonAndClient204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function jsonAndClient(
  context: Client,
  body: ClientNameAndJsonEncodedNameModel,
  options: PropertyJsonAndClientOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _jsonAndClientSend(context, body, options);
  return _jsonAndClientDeserialize(result);
}
