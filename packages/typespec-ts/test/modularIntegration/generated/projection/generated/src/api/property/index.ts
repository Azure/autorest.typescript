// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  JsonProjectedNameModel,
  ClientProjectedNameModel,
  LanguageProjectedNameModel,
  JsonAndClientProjectedNameModel,
} from "../../models/models.js";
import {
  Client204Response,
  Json204Response,
  JsonAndClient204Response,
  Language204Response,
  ProjectedNameContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  PropertyJsonOptions,
  PropertyClientOptions,
  PropertyLanguageOptions,
  PropertyJsonAndClientOptions,
} from "../../models/options.js";

export function _jsonSend(
  context: Client,
  body: JsonProjectedNameModel,
  options: PropertyJsonOptions = { requestOptions: {} }
): StreamableMethod<Json204Response> {
  return context
    .path("/projection/projected-name/property/json")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { wireName: body["defaultName"] },
    });
}

export async function _jsonDeserialize(result: Json204Response): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function json(
  context: Client,
  body: JsonProjectedNameModel,
  options: PropertyJsonOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _jsonSend(context, body, options);
  return _jsonDeserialize(result);
}

export function _clientSend(
  context: Client,
  body: ClientProjectedNameModel,
  options: PropertyClientOptions = { requestOptions: {} }
): StreamableMethod<Client204Response> {
  return context
    .path("/projection/projected-name/property/client")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { defaultName: body["defaultName"] },
    });
}

export async function _clientDeserialize(
  result: Client204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function client(
  context: Client,
  body: ClientProjectedNameModel,
  options: PropertyClientOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _clientSend(context, body, options);
  return _clientDeserialize(result);
}

export function _languageSend(
  context: Client,
  body: LanguageProjectedNameModel,
  options: PropertyLanguageOptions = { requestOptions: {} }
): StreamableMethod<Language204Response> {
  return context
    .path("/projection/projected-name/property/language")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { defaultName: body["defaultName"] },
    });
}

export async function _languageDeserialize(
  result: Language204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function language(
  context: Client,
  body: LanguageProjectedNameModel,
  options: PropertyLanguageOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _languageSend(context, body, options);
  return _languageDeserialize(result);
}

export function _jsonAndClientSend(
  context: Client,
  body: JsonAndClientProjectedNameModel,
  options: PropertyJsonAndClientOptions = { requestOptions: {} }
): StreamableMethod<JsonAndClient204Response> {
  return context
    .path("/projection/projected-name/property/json-and-client")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { wireName: body["defaultName"] },
    });
}

export async function _jsonAndClientDeserialize(
  result: JsonAndClient204Response
): Promise<void> {
  if (result.status !== "204") {
    throw result.body;
  }

  return;
}

export async function jsonAndClient(
  context: Client,
  body: JsonAndClientProjectedNameModel,
  options: PropertyJsonAndClientOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _jsonAndClientSend(context, body, options);
  return _jsonAndClientDeserialize(result);
}
