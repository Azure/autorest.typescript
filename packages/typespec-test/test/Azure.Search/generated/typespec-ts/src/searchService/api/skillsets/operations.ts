// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SearchServiceContext as Client } from "../index.js";
import { errorResponseDeserializer } from "../../../models/azure/search/documents/models.js";
import {
  SearchIndexerSkillset,
  searchIndexerSkillsetSerializer,
  searchIndexerSkillsetDeserializer,
  ListSkillsetsResult,
  listSkillsetsResultDeserializer,
  SkillNames,
  skillNamesSerializer,
} from "../../../models/azure/search/documents/indexes/models.js";
import {
  SkillsetsResetSkillsOptionalParams,
  SkillsetsCreateOptionalParams,
  SkillsetsListOptionalParams,
  SkillsetsGetOptionalParams,
  SkillsetsDeleteOptionalParams,
  SkillsetsCreateOrUpdateOptionalParams,
} from "./options.js";
import { expandUrlTemplate } from "../../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _resetSkillsSend(
  context: Client,
  skillNames: SkillNames,
  skillsetName: string,
  options: SkillsetsResetSkillsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/skillsets('{skillsetName}')/search.resetskills{?api%2Dversion}",
    {
      skillsetName: skillsetName,
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
      body: skillNamesSerializer(skillNames),
    });
}

export async function _resetSkillsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Reset an existing skillset in a search service. */
export async function resetSkills(
  context: Client,
  skillNames: SkillNames,
  skillsetName: string,
  options: SkillsetsResetSkillsOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _resetSkillsSend(
    context,
    skillNames,
    skillsetName,
    options,
  );
  return _resetSkillsDeserialize(result);
}

export function _createSend(
  context: Client,
  skillset: SearchIndexerSkillset,
  options: SkillsetsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/skillsets{?api%2Dversion}",
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
      body: searchIndexerSkillsetSerializer(skillset),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<SearchIndexerSkillset> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return searchIndexerSkillsetDeserializer(result.body);
}

/** Creates a new skillset in a search service. */
export async function create(
  context: Client,
  skillset: SearchIndexerSkillset,
  options: SkillsetsCreateOptionalParams = { requestOptions: {} },
): Promise<SearchIndexerSkillset> {
  const result = await _createSend(context, skillset, options);
  return _createDeserialize(result);
}

export function _listSend(
  context: Client,
  options: SkillsetsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/skillsets{?api%2Dversion,%24select}",
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
): Promise<ListSkillsetsResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return listSkillsetsResultDeserializer(result.body);
}

/** List all skillsets in a search service. */
export async function list(
  context: Client,
  options: SkillsetsListOptionalParams = { requestOptions: {} },
): Promise<ListSkillsetsResult> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}

export function _getSend(
  context: Client,
  skillsetName: string,
  options: SkillsetsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/skillsets('{skillsetName}'){?api%2Dversion}",
    {
      skillsetName: skillsetName,
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
): Promise<SearchIndexerSkillset> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return searchIndexerSkillsetDeserializer(result.body);
}

/** Retrieves a skillset in a search service. */
export async function get(
  context: Client,
  skillsetName: string,
  options: SkillsetsGetOptionalParams = { requestOptions: {} },
): Promise<SearchIndexerSkillset> {
  const result = await _getSend(context, skillsetName, options);
  return _getDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  skillsetName: string,
  options: SkillsetsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/skillsets('{skillsetName}'){?api%2Dversion}",
    {
      skillsetName: skillsetName,
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

/** Deletes a skillset in a search service. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  skillsetName: string,
  options: SkillsetsDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(context, skillsetName, options);
  return _$deleteDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  skillset: SearchIndexerSkillset,
  skillsetName: string,
  options: SkillsetsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/skillsets('{skillsetName}'){?api%2Dversion,ignoreResetRequirements,disableCacheReprocessingChangeDetection}",
    {
      skillsetName: skillsetName,
      "api%2Dversion": context.apiVersion,
      ignoreResetRequirements: options?.skipIndexerResetRequirementForCache,
      disableCacheReprocessingChangeDetection:
        options?.disableCacheReprocessingChangeDetection,
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
      body: searchIndexerSkillsetSerializer(skillset),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<SearchIndexerSkillset> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return searchIndexerSkillsetDeserializer(result.body);
}

/**
 * Creates a new skillset in a search service or updates the skillset if it
 * already exists.
 */
export async function createOrUpdate(
  context: Client,
  skillset: SearchIndexerSkillset,
  skillsetName: string,
  options: SkillsetsCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<SearchIndexerSkillset> {
  const result = await _createOrUpdateSend(
    context,
    skillset,
    skillsetName,
    options,
  );
  return _createOrUpdateDeserialize(result);
}
