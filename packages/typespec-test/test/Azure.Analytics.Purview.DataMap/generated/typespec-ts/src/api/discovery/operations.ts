// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DataMapContext as Client } from "../index.js";
import {
  atlasErrorResponseDeserializer,
  QueryOptions,
  queryOptionsSerializer,
  QueryResult,
  queryResultDeserializer,
  SuggestOptions,
  suggestOptionsSerializer,
  SuggestResult,
  suggestResultDeserializer,
  AutoCompleteOptions,
  autoCompleteOptionsSerializer,
  AutoCompleteResult,
  autoCompleteResultDeserializer,
} from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  DiscoveryAutoCompleteOptionalParams,
  DiscoverySuggestOptionalParams,
  DiscoveryQueryOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _autoCompleteSend(
  context: Client,
  body: AutoCompleteOptions,
  options: DiscoveryAutoCompleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/search/autocomplete{?api%2Dversion}",
    {
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: autoCompleteOptionsSerializer(body),
    });
}

export async function _autoCompleteDeserialize(
  result: PathUncheckedResponse,
): Promise<AutoCompleteResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return autoCompleteResultDeserializer(result.body);
}

/** Get auto complete options. */
export async function autoComplete(
  context: Client,
  body: AutoCompleteOptions,
  options: DiscoveryAutoCompleteOptionalParams = { requestOptions: {} },
): Promise<AutoCompleteResult> {
  const result = await _autoCompleteSend(context, body, options);
  return _autoCompleteDeserialize(result);
}

export function _suggestSend(
  context: Client,
  body: SuggestOptions,
  options: DiscoverySuggestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/search/suggest{?api%2Dversion}",
    {
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: suggestOptionsSerializer(body),
    });
}

export async function _suggestDeserialize(
  result: PathUncheckedResponse,
): Promise<SuggestResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return suggestResultDeserializer(result.body);
}

/** Get search suggestions by query criteria. */
export async function suggest(
  context: Client,
  body: SuggestOptions,
  options: DiscoverySuggestOptionalParams = { requestOptions: {} },
): Promise<SuggestResult> {
  const result = await _suggestSend(context, body, options);
  return _suggestDeserialize(result);
}

export function _querySend(
  context: Client,
  body: QueryOptions,
  options: DiscoveryQueryOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/search/query{?api%2Dversion}",
    {
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: queryOptionsSerializer(body),
    });
}

export async function _queryDeserialize(
  result: PathUncheckedResponse,
): Promise<QueryResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return queryResultDeserializer(result.body);
}

/** Get data using search. */
export async function query(
  context: Client,
  body: QueryOptions,
  options: DiscoveryQueryOptionalParams = { requestOptions: {} },
): Promise<QueryResult> {
  const result = await _querySend(context, body, options);
  return _queryDeserialize(result);
}
