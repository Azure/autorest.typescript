// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SearchServiceContext as Client } from "../index.js";
import { errorResponseDeserializer } from "../../../models/azure/search/documents/models.js";
import {
  SynonymMap,
  synonymMapSerializer,
  synonymMapDeserializer,
  ListSynonymMapsResult,
  listSynonymMapsResultDeserializer,
} from "../../../models/azure/search/documents/indexes/models.js";
import {
  SynonymMapsCreateOptionalParams,
  SynonymMapsListOptionalParams,
  SynonymMapsGetOptionalParams,
  SynonymMapsDeleteOptionalParams,
  SynonymMapsCreateOrUpdateOptionalParams,
} from "./options.js";
import { expandUrlTemplate } from "../../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _createSend(
  context: Client,
  synonymMap: SynonymMap,
  options: SynonymMapsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/synonymmaps{?api%2Dversion}",
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
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: synonymMapSerializer(synonymMap),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<SynonymMap> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return synonymMapDeserializer(result.body);
}

/** Creates a new synonym map. */
export async function create(
  context: Client,
  synonymMap: SynonymMap,
  options: SynonymMapsCreateOptionalParams = { requestOptions: {} },
): Promise<SynonymMap> {
  const result = await _createSend(context, synonymMap, options);
  return _createDeserialize(result);
}

export function _listSend(
  context: Client,
  options: SynonymMapsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/synonymmaps{?api%2Dversion,%24select}",
    {
      "api%2Dversion": context.apiVersion,
      "%24select": options?.select,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<ListSynonymMapsResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return listSynonymMapsResultDeserializer(result.body);
}

/** Lists all synonym maps available for a search service. */
export async function list(
  context: Client,
  options: SynonymMapsListOptionalParams = { requestOptions: {} },
): Promise<ListSynonymMapsResult> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}

export function _getSend(
  context: Client,
  synonymMapName: string,
  options: SynonymMapsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/synonymmaps('{synonymMapName}'){?api%2Dversion}",
    {
      synonymMapName: synonymMapName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<SynonymMap> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return synonymMapDeserializer(result.body);
}

/** Retrieves a synonym map definition. */
export async function get(
  context: Client,
  synonymMapName: string,
  options: SynonymMapsGetOptionalParams = { requestOptions: {} },
): Promise<SynonymMap> {
  const result = await _getSend(context, synonymMapName, options);
  return _getDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  synonymMapName: string,
  options: SynonymMapsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/synonymmaps('{synonymMapName}'){?api%2Dversion}",
    {
      synonymMapName: synonymMapName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "If-Match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "If-None-Match": options?.ifNoneMatch }
          : {}),
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _$deleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204", "404"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deletes a synonym map. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  synonymMapName: string,
  options: SynonymMapsDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(context, synonymMapName, options);
  return _$deleteDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  synonymMap: SynonymMap,
  synonymMapName: string,
  options: SynonymMapsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/synonymmaps('{synonymMapName}'){?api%2Dversion}",
    {
      synonymMapName: synonymMapName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "If-Match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "If-None-Match": options?.ifNoneMatch }
          : {}),
        prefer: "return=representation",
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: synonymMapSerializer(synonymMap),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<SynonymMap> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return synonymMapDeserializer(result.body);
}

/** Creates a new synonym map or updates a synonym map if it already exists. */
export async function createOrUpdate(
  context: Client,
  synonymMap: SynonymMap,
  synonymMapName: string,
  options: SynonymMapsCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<SynonymMap> {
  const result = await _createOrUpdateSend(
    context,
    synonymMap,
    synonymMapName,
    options,
  );
  return _createOrUpdateDeserialize(result);
}
