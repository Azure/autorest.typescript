// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ClientNameModel,
  LanguageClientNameModel,
  ClientNameAndJsonEncodedNameModel,
} from "../models/models.js";
import {
  HeaderRequest204Response,
  HeaderResponse204Response,
  NamingContext as Client,
  Operation204Response,
  Parameter204Response,
  PropertyClient204Response,
  PropertyCompatibleWithEncodedName204Response,
  PropertyLanguage204Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
  ClientOptions,
  OperationOptions,
} from "@azure-rest/core-client";
import {
  ParameterOptions,
  LanguageOptions,
  CompatibleWithEncodedNameOptions,
  RequestOptions,
  ResponseOptions,
} from "../models/options.js";

export function _operationSend(
  context: Client,
  options: OperationOptions = { requestOptions: {} },
): StreamableMethod<Operation204Response> {
  return context
    .path("/client/naming/operation")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationDeserialize(
  result: Operation204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function operation(
  context: Client,
  options: OperationOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _operationSend(context, options);
  return _operationDeserialize(result);
}

export function _parameterSend(
  context: Client,
  defaultName: string,
  options: ParameterOptions = { requestOptions: {} },
): StreamableMethod<Parameter204Response> {
  return context
    .path("/client/naming/parameter")
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { defaultName: defaultName },
    });
}

export async function _parameterDeserialize(
  result: Parameter204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function parameter(
  context: Client,
  defaultName: string,
  options: ParameterOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _parameterSend(context, defaultName, options);
  return _parameterDeserialize(result);
}

export function _clientSend(
  context: Client,
  body: ClientNameModel,
  options: ClientOptions = { requestOptions: {} },
): StreamableMethod<PropertyClient204Response> {
  return context
    .path("/client/naming/property/client")
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
  options: ClientOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _clientSend(context, body, options);
  return _clientDeserialize(result);
}

export function _languageSend(
  context: Client,
  body: LanguageClientNameModel,
  options: LanguageOptions = { requestOptions: {} },
): StreamableMethod<PropertyLanguage204Response> {
  return context
    .path("/client/naming/property/language")
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
  options: LanguageOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _languageSend(context, body, options);
  return _languageDeserialize(result);
}

export function _compatibleWithEncodedNameSend(
  context: Client,
  body: ClientNameAndJsonEncodedNameModel,
  options: CompatibleWithEncodedNameOptions = { requestOptions: {} },
): StreamableMethod<PropertyCompatibleWithEncodedName204Response> {
  return context
    .path("/client/naming/property/compatible-with-encoded-name")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { wireName: body["defaultName"] },
    });
}

export async function _compatibleWithEncodedNameDeserialize(
  result: PropertyCompatibleWithEncodedName204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function compatibleWithEncodedName(
  context: Client,
  body: ClientNameAndJsonEncodedNameModel,
  options: CompatibleWithEncodedNameOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _compatibleWithEncodedNameSend(context, body, options);
  return _compatibleWithEncodedNameDeserialize(result);
}

export function _requestSend(
  context: Client,
  defaultName: string,
  options: RequestOptions = { requestOptions: {} },
): StreamableMethod<HeaderRequest204Response> {
  return context
    .path("/client/naming/header")
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: { "default-name": defaultName },
    });
}

export async function _requestDeserialize(
  result: HeaderRequest204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function request(
  context: Client,
  defaultName: string,
  options: RequestOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _requestSend(context, defaultName, options);
  return _requestDeserialize(result);
}

export function _responseSend(
  context: Client,
  options: ResponseOptions = { requestOptions: {} },
): StreamableMethod<HeaderResponse204Response> {
  return context
    .path("/client/naming/header")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _responseDeserialize(
  result: HeaderResponse204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function response(
  context: Client,
  options: ResponseOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _responseSend(context, options);
  return _responseDeserialize(result);
}
