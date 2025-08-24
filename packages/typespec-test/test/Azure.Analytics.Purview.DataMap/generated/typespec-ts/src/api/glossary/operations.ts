// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PurviewDataMapContext as Client } from "../index.js";
import {
  atlasErrorResponseDeserializer,
  AtlasGlossary,
  atlasGlossarySerializer,
  atlasGlossaryDeserializer,
  atlasRelatedCategoryHeaderArrayDeserializer,
  AtlasRelatedCategoryHeader,
  atlasRelatedTermHeaderArrayDeserializer,
  AtlasRelatedTermHeader,
  AtlasGlossaryCategory,
  atlasGlossaryCategorySerializer,
  atlasGlossaryCategoryDeserializer,
  AtlasGlossaryTerm,
  atlasGlossaryTermSerializer,
  atlasGlossaryTermDeserializer,
  atlasRelatedObjectIdArraySerializer,
  atlasRelatedObjectIdArrayDeserializer,
  AtlasRelatedObjectId,
  AtlasGlossaryExtInfo,
  atlasGlossaryExtInfoDeserializer,
  atlasGlossaryArrayDeserializer,
  atlasGlossaryCategoryArraySerializer,
  atlasGlossaryCategoryArrayDeserializer,
  atlasRelatedCategoryHeaderArrayRecordDeserializer,
  atlasGlossaryTermArraySerializer,
  atlasGlossaryTermArrayDeserializer,
  atlasRelatedTermHeaderArrayRecordDeserializer,
} from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  GlossaryListTermHeadersOptionalParams,
  GlossaryListTermsOptionalParams,
  GlossaryPartialUpdateOptionalParams,
  GlossaryGetDetailedOptionalParams,
  GlossaryListCategoriesHeadersOptionalParams,
  GlossaryListCategoriesOptionalParams,
  GlossaryDeleteOptionalParams,
  GlossaryUpdateOptionalParams,
  GlossaryGetOptionalParams,
  GlossaryListRelatedTermsOptionalParams,
  GlossaryDeleteTermAssignmentFromEntitiesOptionalParams,
  GlossaryAssignTermToEntitiesOptionalParams,
  GlossaryListEntitiesAssignedWithTermOptionalParams,
  GlossaryCreateTermsOptionalParams,
  GlossaryPartialUpdateTermOptionalParams,
  GlossaryDeleteTermOptionalParams,
  GlossaryUpdateTermOptionalParams,
  GlossaryGetTermOptionalParams,
  GlossaryCreateTermOptionalParams,
  GlossaryListCategoryTermsOptionalParams,
  GlossaryListRelatedCategoriesOptionalParams,
  GlossaryPartialUpdateCategoryOptionalParams,
  GlossaryDeleteCategoryOptionalParams,
  GlossaryUpdateCategoryOptionalParams,
  GlossaryGetCategoryOptionalParams,
  GlossaryCreateCategoryOptionalParams,
  GlossaryCreateCategoriesOptionalParams,
  GlossaryCreateOptionalParams,
  GlossaryListOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listTermHeadersSend(
  context: Client,
  glossaryId: string,
  options: GlossaryListTermHeadersOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/glossary/{glossaryId}/terms/headers{?limit,offset,sort}",
    {
      glossaryId: glossaryId,
      limit: options?.limit,
      offset: options?.offset,
      sort: options?.sort,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listTermHeadersDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasRelatedTermHeader[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasRelatedTermHeaderArrayDeserializer(result.body);
}

/**
 * Get term headers belonging to a specific glossary. Recommend using limit/offset
 * to get pagination result.
 */
export async function listTermHeaders(
  context: Client,
  glossaryId: string,
  options: GlossaryListTermHeadersOptionalParams = { requestOptions: {} },
): Promise<AtlasRelatedTermHeader[]> {
  const result = await _listTermHeadersSend(context, glossaryId, options);
  return _listTermHeadersDeserialize(result);
}

export function _listTermsSend(
  context: Client,
  glossaryId: string,
  options: GlossaryListTermsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/glossary/{glossaryId}/terms{?api%2Dversion,limit,offset,sort}",
    {
      glossaryId: glossaryId,
      "api%2Dversion": context.apiVersion,
      limit: options?.limit,
      offset: options?.offset,
      sort: options?.sort,
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
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listTermsDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasGlossaryTerm[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasGlossaryTermArrayDeserializer(result.body);
}

/**
 * Get terms belonging to a specific glossary. Recommend using limit/offset to get
 * pagination result.
 */
export async function listTerms(
  context: Client,
  glossaryId: string,
  options: GlossaryListTermsOptionalParams = { requestOptions: {} },
): Promise<AtlasGlossaryTerm[]> {
  const result = await _listTermsSend(context, glossaryId, options);
  return _listTermsDeserialize(result);
}

export function _partialUpdateSend(
  context: Client,
  glossaryId: string,
  body: Record<string, string>,
  options: GlossaryPartialUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/glossary/{glossaryId}/partial{?api%2Dversion,ignoreTermsAndCategories}",
    {
      glossaryId: glossaryId,
      "api%2Dversion": context.apiVersion,
      ignoreTermsAndCategories: options?.ignoreTermsAndCategories,
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
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: body,
    });
}

export async function _partialUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasGlossary> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasGlossaryDeserializer(result.body);
}

/**
 * Update the glossary partially. Some properties such as qualifiedName are not
 * allowed to be updated.
 *
 * So far we only supports partial updating
 * shortDescription, longDescription, language and usage for glossary.
 *
 * Recommend
 * using 'ignoreTermsAndCategories=true' to reduce response body size.
 */
export async function partialUpdate(
  context: Client,
  glossaryId: string,
  body: Record<string, string>,
  options: GlossaryPartialUpdateOptionalParams = { requestOptions: {} },
): Promise<AtlasGlossary> {
  const result = await _partialUpdateSend(context, glossaryId, body, options);
  return _partialUpdateDeserialize(result);
}

export function _getDetailedSend(
  context: Client,
  glossaryId: string,
  options: GlossaryGetDetailedOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/glossary/{glossaryId}/detailed{?api%2Dversion}",
    {
      glossaryId: glossaryId,
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
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getDetailedDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasGlossaryExtInfo> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasGlossaryExtInfoDeserializer(result.body);
}

/**
 * Get a specific glossary with detailed information. This API is not
 * recommend.
 *
 * Recommend to fetch terms/categories details separately using
 *
 * GET /datamap/api/atlas/v2/glossary/{glossaryId}/terms and
 *
 * GET /datamap/api/atlas/v2/glossary/{glossaryId}/categories.
 */
export async function getDetailed(
  context: Client,
  glossaryId: string,
  options: GlossaryGetDetailedOptionalParams = { requestOptions: {} },
): Promise<AtlasGlossaryExtInfo> {
  const result = await _getDetailedSend(context, glossaryId, options);
  return _getDetailedDeserialize(result);
}

export function _listCategoriesHeadersSend(
  context: Client,
  glossaryId: string,
  options: GlossaryListCategoriesHeadersOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/glossary/{glossaryId}/categories/headers{?limit,offset,sort}",
    {
      glossaryId: glossaryId,
      limit: options?.limit,
      offset: options?.offset,
      sort: options?.sort,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listCategoriesHeadersDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasRelatedCategoryHeader[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasRelatedCategoryHeaderArrayDeserializer(result.body);
}

/**
 * Get the category headers belonging to a specific glossary. Recommend using
 * limit/offset to get pagination result.
 */
export async function listCategoriesHeaders(
  context: Client,
  glossaryId: string,
  options: GlossaryListCategoriesHeadersOptionalParams = { requestOptions: {} },
): Promise<AtlasRelatedCategoryHeader[]> {
  const result = await _listCategoriesHeadersSend(context, glossaryId, options);
  return _listCategoriesHeadersDeserialize(result);
}

export function _listCategoriesSend(
  context: Client,
  glossaryId: string,
  options: GlossaryListCategoriesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/glossary/{glossaryId}/categories{?limit,offset,sort}",
    {
      glossaryId: glossaryId,
      limit: options?.limit,
      offset: options?.offset,
      sort: options?.sort,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listCategoriesDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasGlossaryCategory[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasGlossaryCategoryArrayDeserializer(result.body);
}

/**
 * Get the categories belonging to a specific glossary. Recommend using
 * limit/offset to get pagination result.
 */
export async function listCategories(
  context: Client,
  glossaryId: string,
  options: GlossaryListCategoriesOptionalParams = { requestOptions: {} },
): Promise<AtlasGlossaryCategory[]> {
  const result = await _listCategoriesSend(context, glossaryId, options);
  return _listCategoriesDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  glossaryId: string,
  options: GlossaryDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/glossary/{glossaryId}",
    {
      glossaryId: glossaryId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/**
 * Delete a glossary. Will delete underlying terms/categories together. Recommend
 * separate delete terms and categories.
 */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  glossaryId: string,
  options: GlossaryDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(context, glossaryId, options);
  return _$deleteDeserialize(result);
}

export function _updateSend(
  context: Client,
  glossaryId: string,
  body: AtlasGlossary,
  options: GlossaryUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/glossary/{glossaryId}{?api%2Dversion,ignoreTermsAndCategories}",
    {
      glossaryId: glossaryId,
      "api%2Dversion": context.apiVersion,
      ignoreTermsAndCategories: options?.ignoreTermsAndCategories,
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
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: atlasGlossarySerializer(body),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasGlossary> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasGlossaryDeserializer(result.body);
}

/** Update the given glossary. */
export async function update(
  context: Client,
  glossaryId: string,
  body: AtlasGlossary,
  options: GlossaryUpdateOptionalParams = { requestOptions: {} },
): Promise<AtlasGlossary> {
  const result = await _updateSend(context, glossaryId, body, options);
  return _updateDeserialize(result);
}

export function _getSend(
  context: Client,
  glossaryId: string,
  options: GlossaryGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/glossary/{glossaryId}",
    {
      glossaryId: glossaryId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasGlossary> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasGlossaryDeserializer(result.body);
}

/** Get a specific Glossary by its GUID. */
export async function get(
  context: Client,
  glossaryId: string,
  options: GlossaryGetOptionalParams = { requestOptions: {} },
): Promise<AtlasGlossary> {
  const result = await _getSend(context, glossaryId, options);
  return _getDeserialize(result);
}

export function _listRelatedTermsSend(
  context: Client,
  termId: string,
  options: GlossaryListRelatedTermsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/glossary/terms/{termId}/related{?api%2Dversion,limit,offset,sort}",
    {
      termId: termId,
      "api%2Dversion": context.apiVersion,
      limit: options?.limit,
      offset: options?.offset,
      sort: options?.sort,
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
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listRelatedTermsDeserialize(
  result: PathUncheckedResponse,
): Promise<Record<string, AtlasRelatedTermHeader[]>> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasRelatedTermHeaderArrayRecordDeserializer(result.body);
}

/**
 * Get all related terms for a specific term by its GUID. Limit, offset, and sort
 * parameters are currently not being enabled and won't work even they are passed.
 */
export async function listRelatedTerms(
  context: Client,
  termId: string,
  options: GlossaryListRelatedTermsOptionalParams = { requestOptions: {} },
): Promise<Record<string, AtlasRelatedTermHeader[]>> {
  const result = await _listRelatedTermsSend(context, termId, options);
  return _listRelatedTermsDeserialize(result);
}

export function _deleteTermAssignmentFromEntitiesSend(
  context: Client,
  termId: string,
  body: AtlasRelatedObjectId[],
  options: GlossaryDeleteTermAssignmentFromEntitiesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/glossary/terms/{termId}/assignedEntities",
    {
      termId: termId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: atlasRelatedObjectIdArraySerializer(body),
    });
}

export async function _deleteTermAssignmentFromEntitiesDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete the term assignment for the given list of related objects. */
export async function deleteTermAssignmentFromEntities(
  context: Client,
  termId: string,
  body: AtlasRelatedObjectId[],
  options: GlossaryDeleteTermAssignmentFromEntitiesOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _deleteTermAssignmentFromEntitiesSend(
    context,
    termId,
    body,
    options,
  );
  return _deleteTermAssignmentFromEntitiesDeserialize(result);
}

export function _assignTermToEntitiesSend(
  context: Client,
  termId: string,
  body: AtlasRelatedObjectId[],
  options: GlossaryAssignTermToEntitiesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/glossary/terms/{termId}/assignedEntities",
    {
      termId: termId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: atlasRelatedObjectIdArraySerializer(body),
    });
}

export async function _assignTermToEntitiesDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/**
 * Assign the given term to the provided list of related objects. Recommend using
 * small batches with multiple API calls.
 *
 * [Entities Create Or Update
 * operation](https://learn.microsoft.com/en-us/rest/api/purview/datamapdataplane/entity/bulk-create-or-update?tabs=HTTP)
 * is an alternative to assign a term to multiple entities.
 */
export async function assignTermToEntities(
  context: Client,
  termId: string,
  body: AtlasRelatedObjectId[],
  options: GlossaryAssignTermToEntitiesOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _assignTermToEntitiesSend(
    context,
    termId,
    body,
    options,
  );
  return _assignTermToEntitiesDeserialize(result);
}

export function _listEntitiesAssignedWithTermSend(
  context: Client,
  termId: string,
  options: GlossaryListEntitiesAssignedWithTermOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/glossary/terms/{termId}/assignedEntities{?limit,offset,sort}",
    {
      termId: termId,
      limit: options?.limit,
      offset: options?.offset,
      sort: options?.sort,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listEntitiesAssignedWithTermDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasRelatedObjectId[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasRelatedObjectIdArrayDeserializer(result.body);
}

/**
 * List all related objects assigned with the specified term. Recommend using
 * limit/offset to get pagination result.
 */
export async function listEntitiesAssignedWithTerm(
  context: Client,
  termId: string,
  options: GlossaryListEntitiesAssignedWithTermOptionalParams = {
    requestOptions: {},
  },
): Promise<AtlasRelatedObjectId[]> {
  const result = await _listEntitiesAssignedWithTermSend(
    context,
    termId,
    options,
  );
  return _listEntitiesAssignedWithTermDeserialize(result);
}

export function _createTermsSend(
  context: Client,
  body: AtlasGlossaryTerm[],
  options: GlossaryCreateTermsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/glossary/terms{?api%2Dversion,includeTermHierarchy}",
    {
      "api%2Dversion": context.apiVersion,
      includeTermHierarchy: options?.includeTermHierarchy,
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
      body: atlasGlossaryTermArraySerializer(body),
    });
}

export async function _createTermsDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasGlossaryTerm[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasGlossaryTermArrayDeserializer(result.body);
}

/** Create glossary terms in bulk. */
export async function createTerms(
  context: Client,
  body: AtlasGlossaryTerm[],
  options: GlossaryCreateTermsOptionalParams = { requestOptions: {} },
): Promise<AtlasGlossaryTerm[]> {
  const result = await _createTermsSend(context, body, options);
  return _createTermsDeserialize(result);
}

export function _partialUpdateTermSend(
  context: Client,
  termId: string,
  body: Record<string, string>,
  options: GlossaryPartialUpdateTermOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/glossary/term/{termId}/partial{?api%2Dversion,includeTermHierarchy}",
    {
      termId: termId,
      "api%2Dversion": context.apiVersion,
      includeTermHierarchy: options?.includeTermHierarchy,
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
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: body,
    });
}

export async function _partialUpdateTermDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasGlossaryTerm> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasGlossaryTermDeserializer(result.body);
}

/**
 * Update the glossary term partially. So far we only supports partial updating
 * shortDescription, longDescription, abbreviation, usage and status for term.
 */
export async function partialUpdateTerm(
  context: Client,
  termId: string,
  body: Record<string, string>,
  options: GlossaryPartialUpdateTermOptionalParams = { requestOptions: {} },
): Promise<AtlasGlossaryTerm> {
  const result = await _partialUpdateTermSend(context, termId, body, options);
  return _partialUpdateTermDeserialize(result);
}

export function _deleteTermSend(
  context: Client,
  termId: string,
  options: GlossaryDeleteTermOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/glossary/term/{termId}",
    {
      termId: termId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteTermDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a glossary term. */
export async function deleteTerm(
  context: Client,
  termId: string,
  options: GlossaryDeleteTermOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteTermSend(context, termId, options);
  return _deleteTermDeserialize(result);
}

export function _updateTermSend(
  context: Client,
  termId: string,
  body: AtlasGlossaryTerm,
  options: GlossaryUpdateTermOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/glossary/term/{termId}{?api%2Dversion,includeTermHierarchy}",
    {
      termId: termId,
      "api%2Dversion": context.apiVersion,
      includeTermHierarchy: options?.includeTermHierarchy,
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
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: atlasGlossaryTermSerializer(body),
    });
}

export async function _updateTermDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasGlossaryTerm> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasGlossaryTermDeserializer(result.body);
}

/** Update the given glossary term by its GUID. */
export async function updateTerm(
  context: Client,
  termId: string,
  body: AtlasGlossaryTerm,
  options: GlossaryUpdateTermOptionalParams = { requestOptions: {} },
): Promise<AtlasGlossaryTerm> {
  const result = await _updateTermSend(context, termId, body, options);
  return _updateTermDeserialize(result);
}

export function _getTermSend(
  context: Client,
  termId: string,
  options: GlossaryGetTermOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/glossary/term/{termId}{?api%2Dversion}",
    {
      termId: termId,
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
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getTermDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasGlossaryTerm> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasGlossaryTermDeserializer(result.body);
}

/** Get a specific glossary term by its GUID. */
export async function getTerm(
  context: Client,
  termId: string,
  options: GlossaryGetTermOptionalParams = { requestOptions: {} },
): Promise<AtlasGlossaryTerm> {
  const result = await _getTermSend(context, termId, options);
  return _getTermDeserialize(result);
}

export function _createTermSend(
  context: Client,
  body: AtlasGlossaryTerm,
  options: GlossaryCreateTermOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/glossary/term{?includeTermHierarchy}",
    {
      includeTermHierarchy: options?.includeTermHierarchy,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: atlasGlossaryTermSerializer(body),
    });
}

export async function _createTermDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasGlossaryTerm> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasGlossaryTermDeserializer(result.body);
}

/** Create a glossary term. */
export async function createTerm(
  context: Client,
  body: AtlasGlossaryTerm,
  options: GlossaryCreateTermOptionalParams = { requestOptions: {} },
): Promise<AtlasGlossaryTerm> {
  const result = await _createTermSend(context, body, options);
  return _createTermDeserialize(result);
}

export function _listCategoryTermsSend(
  context: Client,
  categoryId: string,
  options: GlossaryListCategoryTermsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/glossary/category/{categoryId}/terms{?limit,offset,sort}",
    {
      categoryId: categoryId,
      limit: options?.limit,
      offset: options?.offset,
      sort: options?.sort,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listCategoryTermsDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasRelatedTermHeader[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasRelatedTermHeaderArrayDeserializer(result.body);
}

/** Get all terms associated with the specific category. */
export async function listCategoryTerms(
  context: Client,
  categoryId: string,
  options: GlossaryListCategoryTermsOptionalParams = { requestOptions: {} },
): Promise<AtlasRelatedTermHeader[]> {
  const result = await _listCategoryTermsSend(context, categoryId, options);
  return _listCategoryTermsDeserialize(result);
}

export function _listRelatedCategoriesSend(
  context: Client,
  categoryId: string,
  options: GlossaryListRelatedCategoriesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/glossary/category/{categoryId}/related{?limit,offset,sort}",
    {
      categoryId: categoryId,
      limit: options?.limit,
      offset: options?.offset,
      sort: options?.sort,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listRelatedCategoriesDeserialize(
  result: PathUncheckedResponse,
): Promise<Record<string, AtlasRelatedCategoryHeader[]>> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasRelatedCategoryHeaderArrayRecordDeserializer(result.body);
}

/**
 * Get all related categories (parent and children). Limit, offset, and sort
 * parameters are currently not being enabled and won't work even they are passed.
 */
export async function listRelatedCategories(
  context: Client,
  categoryId: string,
  options: GlossaryListRelatedCategoriesOptionalParams = { requestOptions: {} },
): Promise<Record<string, AtlasRelatedCategoryHeader[]>> {
  const result = await _listRelatedCategoriesSend(context, categoryId, options);
  return _listRelatedCategoriesDeserialize(result);
}

export function _partialUpdateCategorySend(
  context: Client,
  categoryId: string,
  body: Record<string, string>,
  options: GlossaryPartialUpdateCategoryOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/glossary/category/{categoryId}/partial",
    {
      categoryId: categoryId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: body,
    });
}

export async function _partialUpdateCategoryDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasGlossaryCategory> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasGlossaryCategoryDeserializer(result.body);
}

/**
 * Update the glossary category partially. So far we only supports partial
 * updating shortDescription and longDescription for category.
 */
export async function partialUpdateCategory(
  context: Client,
  categoryId: string,
  body: Record<string, string>,
  options: GlossaryPartialUpdateCategoryOptionalParams = { requestOptions: {} },
): Promise<AtlasGlossaryCategory> {
  const result = await _partialUpdateCategorySend(
    context,
    categoryId,
    body,
    options,
  );
  return _partialUpdateCategoryDeserialize(result);
}

export function _deleteCategorySend(
  context: Client,
  categoryId: string,
  options: GlossaryDeleteCategoryOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/glossary/category/{categoryId}",
    {
      categoryId: categoryId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteCategoryDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a glossary category. */
export async function deleteCategory(
  context: Client,
  categoryId: string,
  options: GlossaryDeleteCategoryOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteCategorySend(context, categoryId, options);
  return _deleteCategoryDeserialize(result);
}

export function _updateCategorySend(
  context: Client,
  categoryId: string,
  body: AtlasGlossaryCategory,
  options: GlossaryUpdateCategoryOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/glossary/category/{categoryId}",
    {
      categoryId: categoryId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: atlasGlossaryCategorySerializer(body),
    });
}

export async function _updateCategoryDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasGlossaryCategory> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasGlossaryCategoryDeserializer(result.body);
}

/** Update the given glossary category by its GUID. */
export async function updateCategory(
  context: Client,
  categoryId: string,
  body: AtlasGlossaryCategory,
  options: GlossaryUpdateCategoryOptionalParams = { requestOptions: {} },
): Promise<AtlasGlossaryCategory> {
  const result = await _updateCategorySend(context, categoryId, body, options);
  return _updateCategoryDeserialize(result);
}

export function _getCategorySend(
  context: Client,
  categoryId: string,
  options: GlossaryGetCategoryOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/glossary/category/{categoryId}",
    {
      categoryId: categoryId,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getCategoryDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasGlossaryCategory> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasGlossaryCategoryDeserializer(result.body);
}

/** Get specific glossary category by its GUID. */
export async function getCategory(
  context: Client,
  categoryId: string,
  options: GlossaryGetCategoryOptionalParams = { requestOptions: {} },
): Promise<AtlasGlossaryCategory> {
  const result = await _getCategorySend(context, categoryId, options);
  return _getCategoryDeserialize(result);
}

export function _createCategorySend(
  context: Client,
  body: AtlasGlossaryCategory,
  options: GlossaryCreateCategoryOptionalParams = { requestOptions: {} },
): StreamableMethod {
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path("/atlas/v2/glossary/category")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: atlasGlossaryCategorySerializer(body),
    });
}

export async function _createCategoryDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasGlossaryCategory> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasGlossaryCategoryDeserializer(result.body);
}

/** Create a glossary category. */
export async function createCategory(
  context: Client,
  body: AtlasGlossaryCategory,
  options: GlossaryCreateCategoryOptionalParams = { requestOptions: {} },
): Promise<AtlasGlossaryCategory> {
  const result = await _createCategorySend(context, body, options);
  return _createCategoryDeserialize(result);
}

export function _createCategoriesSend(
  context: Client,
  body: AtlasGlossaryCategory[],
  options: GlossaryCreateCategoriesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path("/atlas/v2/glossary/categories")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: atlasGlossaryCategoryArraySerializer(body),
    });
}

export async function _createCategoriesDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasGlossaryCategory[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasGlossaryCategoryArrayDeserializer(result.body);
}

/** Create glossary category in bulk. */
export async function createCategories(
  context: Client,
  body: AtlasGlossaryCategory[],
  options: GlossaryCreateCategoriesOptionalParams = { requestOptions: {} },
): Promise<AtlasGlossaryCategory[]> {
  const result = await _createCategoriesSend(context, body, options);
  return _createCategoriesDeserialize(result);
}

export function _createSend(
  context: Client,
  body: AtlasGlossary,
  options: GlossaryCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  context.pipeline.removePolicy({ name: "ClientApiVersionPolicy" });
  return context
    .path("/atlas/v2/glossary")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: atlasGlossarySerializer(body),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasGlossary> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasGlossaryDeserializer(result.body);
}

/** Create a glossary. */
export async function create(
  context: Client,
  body: AtlasGlossary,
  options: GlossaryCreateOptionalParams = { requestOptions: {} },
): Promise<AtlasGlossary> {
  const result = await _createSend(context, body, options);
  return _createDeserialize(result);
}

export function _listSend(
  context: Client,
  options: GlossaryListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/atlas/v2/glossary{?api%2Dversion,limit,offset,sort,ignoreTermsAndCategories}",
    {
      "api%2Dversion": context.apiVersion,
      limit: options?.limit,
      offset: options?.offset,
      sort: options?.sort,
      ignoreTermsAndCategories: options?.ignoreTermsAndCategories,
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
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<AtlasGlossary[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = atlasErrorResponseDeserializer(result.body);
    throw error;
  }

  return atlasGlossaryArrayDeserializer(result.body);
}

/**
 * Get all glossaries. Recommend using limit/offset to get pagination result.
 * Recommend using 'ignoreTermsAndCategories=true' and fetch terms/categories
 * separately using 'GET /datamap/api/atlas/v2/glossary/{glossaryId}/terms'
 * and 'GET '/datamap/api/atlas/v2/glossary/{glossaryId}/categories'.
 */
export async function list(
  context: Client,
  options: GlossaryListOptionalParams = { requestOptions: {} },
): Promise<AtlasGlossary[]> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}
