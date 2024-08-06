// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientModel, TSModel } from "../../models/models.js";
import { NamingContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  ClientModelClientOptionalParams,
  ClientModelLanguageOptionalParams,
} from "../../models/options.js";

export function _clientSend(
  context: Client,
  body: ClientModel,
  options: ClientModelClientOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/client/naming/model/client")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { defaultName: body["defaultName"] },
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
  body: ClientModel,
  options: ClientModelClientOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _clientSend(context, body, options);
  return _clientDeserialize(result);
}

export function _languageSend(
  context: Client,
  body: TSModel,
  options: ClientModelLanguageOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/client/naming/model/language")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { defaultName: body["defaultName"] },
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
  body: TSModel,
  options: ClientModelLanguageOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _languageSend(context, body, options);
  return _languageDeserialize(result);
}
