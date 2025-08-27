// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DataMapContext } from "../../api/dataMapContext.js";
import {
  getTermHeaders,
  getTerms,
  partialUpdate,
  getDetailed,
  getCategoriesHeaders,
  getCategories,
  $delete,
  update,
  get,
  getRelatedTerms,
  deleteTermAssignmentFromEntities,
  assignTermToEntities,
  getEntitiesAssignedWithTerm,
  createTerms,
  partialUpdateTerm,
  deleteTerm,
  updateTerm,
  getTerm,
  createTerm,
  getCategoryTerms,
  getRelatedCategories,
  partialUpdateCategory,
  deleteCategory,
  updateCategory,
  getCategory,
  createCategory,
  createCategories,
  create,
  batchGet,
} from "../../api/glossary/operations.js";
import {
  GlossaryGetTermHeadersOptionalParams,
  GlossaryGetTermsOptionalParams,
  GlossaryPartialUpdateOptionalParams,
  GlossaryGetDetailedOptionalParams,
  GlossaryGetCategoriesHeadersOptionalParams,
  GlossaryGetCategoriesOptionalParams,
  GlossaryDeleteOptionalParams,
  GlossaryUpdateOptionalParams,
  GlossaryGetOptionalParams,
  GlossaryGetRelatedTermsOptionalParams,
  GlossaryDeleteTermAssignmentFromEntitiesOptionalParams,
  GlossaryAssignTermToEntitiesOptionalParams,
  GlossaryGetEntitiesAssignedWithTermOptionalParams,
  GlossaryCreateTermsOptionalParams,
  GlossaryPartialUpdateTermOptionalParams,
  GlossaryDeleteTermOptionalParams,
  GlossaryUpdateTermOptionalParams,
  GlossaryGetTermOptionalParams,
  GlossaryCreateTermOptionalParams,
  GlossaryGetCategoryTermsOptionalParams,
  GlossaryGetRelatedCategoriesOptionalParams,
  GlossaryPartialUpdateCategoryOptionalParams,
  GlossaryDeleteCategoryOptionalParams,
  GlossaryUpdateCategoryOptionalParams,
  GlossaryGetCategoryOptionalParams,
  GlossaryCreateCategoryOptionalParams,
  GlossaryCreateCategoriesOptionalParams,
  GlossaryCreateOptionalParams,
  GlossaryBatchGetOptionalParams,
} from "../../api/glossary/options.js";
import {
  AtlasGlossary,
  AtlasRelatedCategoryHeader,
  AtlasRelatedTermHeader,
  AtlasGlossaryCategory,
  AtlasGlossaryTerm,
  AtlasRelatedObjectId,
  AtlasGlossaryExtInfo,
} from "../../models/models.js";

/** Interface representing a Glossary operations. */
export interface GlossaryOperations {
  /**
   * Get term headers belonging to a specific glossary. Recommend using limit/offset
   * to get pagination result.
   */
  getTermHeaders: (
    glossaryId: string,
    options?: GlossaryGetTermHeadersOptionalParams,
  ) => Promise<AtlasRelatedTermHeader[]>;
  /**
   * Get terms belonging to a specific glossary. Recommend using limit/offset to get
   * pagination result.
   */
  getTerms: (
    glossaryId: string,
    options?: GlossaryGetTermsOptionalParams,
  ) => Promise<AtlasGlossaryTerm[]>;
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
  partialUpdate: (
    glossaryId: string,
    body: Record<string, string>,
    options?: GlossaryPartialUpdateOptionalParams,
  ) => Promise<AtlasGlossary>;
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
  getDetailed: (
    glossaryId: string,
    options?: GlossaryGetDetailedOptionalParams,
  ) => Promise<AtlasGlossaryExtInfo>;
  /**
   * Get the category headers belonging to a specific glossary. Recommend using
   * limit/offset to get pagination result.
   */
  getCategoriesHeaders: (
    glossaryId: string,
    options?: GlossaryGetCategoriesHeadersOptionalParams,
  ) => Promise<AtlasRelatedCategoryHeader[]>;
  /**
   * Get the categories belonging to a specific glossary. Recommend using
   * limit/offset to get pagination result.
   */
  getCategories: (
    glossaryId: string,
    options?: GlossaryGetCategoriesOptionalParams,
  ) => Promise<AtlasGlossaryCategory[]>;
  /**
   * Delete a glossary. Will delete underlying terms/categories together. Recommend
   * separate delete terms and categories.
   */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    glossaryId: string,
    options?: GlossaryDeleteOptionalParams,
  ) => Promise<void>;
  /** Update the given glossary. */
  update: (
    glossaryId: string,
    body: AtlasGlossary,
    options?: GlossaryUpdateOptionalParams,
  ) => Promise<AtlasGlossary>;
  /** Get a specific Glossary by its GUID. */
  get: (
    glossaryId: string,
    options?: GlossaryGetOptionalParams,
  ) => Promise<AtlasGlossary>;
  /**
   * Get all related terms for a specific term by its GUID. Limit, offset, and sort
   * parameters are currently not being enabled and won't work even they are passed.
   */
  getRelatedTerms: (
    termId: string,
    options?: GlossaryGetRelatedTermsOptionalParams,
  ) => Promise<Record<string, AtlasRelatedTermHeader[]>>;
  /** Delete the term assignment for the given list of related objects. */
  deleteTermAssignmentFromEntities: (
    termId: string,
    body: AtlasRelatedObjectId[],
    options?: GlossaryDeleteTermAssignmentFromEntitiesOptionalParams,
  ) => Promise<void>;
  /**
   * Assign the given term to the provided list of related objects. Recommend using
   * small batches with multiple API calls.
   *
   * [Entities Create Or Update
   * operation](https://learn.microsoft.com/en-us/rest/api/purview/datamapdataplane/entity/bulk-create-or-update?tabs=HTTP)
   * is an alternative to assign a term to multiple entities.
   */
  assignTermToEntities: (
    termId: string,
    body: AtlasRelatedObjectId[],
    options?: GlossaryAssignTermToEntitiesOptionalParams,
  ) => Promise<void>;
  /**
   * List all related objects assigned with the specified term. Recommend using
   * limit/offset to get pagination result.
   */
  getEntitiesAssignedWithTerm: (
    termId: string,
    options?: GlossaryGetEntitiesAssignedWithTermOptionalParams,
  ) => Promise<AtlasRelatedObjectId[]>;
  /** Create glossary terms in bulk. */
  createTerms: (
    body: AtlasGlossaryTerm[],
    options?: GlossaryCreateTermsOptionalParams,
  ) => Promise<AtlasGlossaryTerm[]>;
  /**
   * Update the glossary term partially. So far we only supports partial updating
   * shortDescription, longDescription, abbreviation, usage and status for term.
   */
  partialUpdateTerm: (
    termId: string,
    body: Record<string, string>,
    options?: GlossaryPartialUpdateTermOptionalParams,
  ) => Promise<AtlasGlossaryTerm>;
  /** Delete a glossary term. */
  deleteTerm: (
    termId: string,
    options?: GlossaryDeleteTermOptionalParams,
  ) => Promise<void>;
  /** Update the given glossary term by its GUID. */
  updateTerm: (
    termId: string,
    body: AtlasGlossaryTerm,
    options?: GlossaryUpdateTermOptionalParams,
  ) => Promise<AtlasGlossaryTerm>;
  /** Get a specific glossary term by its GUID. */
  getTerm: (
    termId: string,
    options?: GlossaryGetTermOptionalParams,
  ) => Promise<AtlasGlossaryTerm>;
  /** Create a glossary term. */
  createTerm: (
    body: AtlasGlossaryTerm,
    options?: GlossaryCreateTermOptionalParams,
  ) => Promise<AtlasGlossaryTerm>;
  /** Get all terms associated with the specific category. */
  getCategoryTerms: (
    categoryId: string,
    options?: GlossaryGetCategoryTermsOptionalParams,
  ) => Promise<AtlasRelatedTermHeader[]>;
  /**
   * Get all related categories (parent and children). Limit, offset, and sort
   * parameters are currently not being enabled and won't work even they are passed.
   */
  getRelatedCategories: (
    categoryId: string,
    options?: GlossaryGetRelatedCategoriesOptionalParams,
  ) => Promise<Record<string, AtlasRelatedCategoryHeader[]>>;
  /**
   * Update the glossary category partially. So far we only supports partial
   * updating shortDescription and longDescription for category.
   */
  partialUpdateCategory: (
    categoryId: string,
    body: Record<string, string>,
    options?: GlossaryPartialUpdateCategoryOptionalParams,
  ) => Promise<AtlasGlossaryCategory>;
  /** Delete a glossary category. */
  deleteCategory: (
    categoryId: string,
    options?: GlossaryDeleteCategoryOptionalParams,
  ) => Promise<void>;
  /** Update the given glossary category by its GUID. */
  updateCategory: (
    categoryId: string,
    body: AtlasGlossaryCategory,
    options?: GlossaryUpdateCategoryOptionalParams,
  ) => Promise<AtlasGlossaryCategory>;
  /** Get specific glossary category by its GUID. */
  getCategory: (
    categoryId: string,
    options?: GlossaryGetCategoryOptionalParams,
  ) => Promise<AtlasGlossaryCategory>;
  /** Create a glossary category. */
  createCategory: (
    body: AtlasGlossaryCategory,
    options?: GlossaryCreateCategoryOptionalParams,
  ) => Promise<AtlasGlossaryCategory>;
  /** Create glossary category in bulk. */
  createCategories: (
    body: AtlasGlossaryCategory[],
    options?: GlossaryCreateCategoriesOptionalParams,
  ) => Promise<AtlasGlossaryCategory[]>;
  /** Create a glossary. */
  create: (
    body: AtlasGlossary,
    options?: GlossaryCreateOptionalParams,
  ) => Promise<AtlasGlossary>;
  /**
   * Get all glossaries. Recommend using limit/offset to get pagination result.
   * Recommend using 'ignoreTermsAndCategories=true' and fetch terms/categories
   * separately using 'GET /datamap/api/atlas/v2/glossary/{glossaryId}/terms'
   * and 'GET '/datamap/api/atlas/v2/glossary/{glossaryId}/categories'.
   */
  batchGet: (
    options?: GlossaryBatchGetOptionalParams,
  ) => Promise<AtlasGlossary[]>;
}

function _getGlossary(context: DataMapContext) {
  return {
    getTermHeaders: (
      glossaryId: string,
      options?: GlossaryGetTermHeadersOptionalParams,
    ) => getTermHeaders(context, glossaryId, options),
    getTerms: (glossaryId: string, options?: GlossaryGetTermsOptionalParams) =>
      getTerms(context, glossaryId, options),
    partialUpdate: (
      glossaryId: string,
      body: Record<string, string>,
      options?: GlossaryPartialUpdateOptionalParams,
    ) => partialUpdate(context, glossaryId, body, options),
    getDetailed: (
      glossaryId: string,
      options?: GlossaryGetDetailedOptionalParams,
    ) => getDetailed(context, glossaryId, options),
    getCategoriesHeaders: (
      glossaryId: string,
      options?: GlossaryGetCategoriesHeadersOptionalParams,
    ) => getCategoriesHeaders(context, glossaryId, options),
    getCategories: (
      glossaryId: string,
      options?: GlossaryGetCategoriesOptionalParams,
    ) => getCategories(context, glossaryId, options),
    delete: (glossaryId: string, options?: GlossaryDeleteOptionalParams) =>
      $delete(context, glossaryId, options),
    update: (
      glossaryId: string,
      body: AtlasGlossary,
      options?: GlossaryUpdateOptionalParams,
    ) => update(context, glossaryId, body, options),
    get: (glossaryId: string, options?: GlossaryGetOptionalParams) =>
      get(context, glossaryId, options),
    getRelatedTerms: (
      termId: string,
      options?: GlossaryGetRelatedTermsOptionalParams,
    ) => getRelatedTerms(context, termId, options),
    deleteTermAssignmentFromEntities: (
      termId: string,
      body: AtlasRelatedObjectId[],
      options?: GlossaryDeleteTermAssignmentFromEntitiesOptionalParams,
    ) => deleteTermAssignmentFromEntities(context, termId, body, options),
    assignTermToEntities: (
      termId: string,
      body: AtlasRelatedObjectId[],
      options?: GlossaryAssignTermToEntitiesOptionalParams,
    ) => assignTermToEntities(context, termId, body, options),
    getEntitiesAssignedWithTerm: (
      termId: string,
      options?: GlossaryGetEntitiesAssignedWithTermOptionalParams,
    ) => getEntitiesAssignedWithTerm(context, termId, options),
    createTerms: (
      body: AtlasGlossaryTerm[],
      options?: GlossaryCreateTermsOptionalParams,
    ) => createTerms(context, body, options),
    partialUpdateTerm: (
      termId: string,
      body: Record<string, string>,
      options?: GlossaryPartialUpdateTermOptionalParams,
    ) => partialUpdateTerm(context, termId, body, options),
    deleteTerm: (termId: string, options?: GlossaryDeleteTermOptionalParams) =>
      deleteTerm(context, termId, options),
    updateTerm: (
      termId: string,
      body: AtlasGlossaryTerm,
      options?: GlossaryUpdateTermOptionalParams,
    ) => updateTerm(context, termId, body, options),
    getTerm: (termId: string, options?: GlossaryGetTermOptionalParams) =>
      getTerm(context, termId, options),
    createTerm: (
      body: AtlasGlossaryTerm,
      options?: GlossaryCreateTermOptionalParams,
    ) => createTerm(context, body, options),
    getCategoryTerms: (
      categoryId: string,
      options?: GlossaryGetCategoryTermsOptionalParams,
    ) => getCategoryTerms(context, categoryId, options),
    getRelatedCategories: (
      categoryId: string,
      options?: GlossaryGetRelatedCategoriesOptionalParams,
    ) => getRelatedCategories(context, categoryId, options),
    partialUpdateCategory: (
      categoryId: string,
      body: Record<string, string>,
      options?: GlossaryPartialUpdateCategoryOptionalParams,
    ) => partialUpdateCategory(context, categoryId, body, options),
    deleteCategory: (
      categoryId: string,
      options?: GlossaryDeleteCategoryOptionalParams,
    ) => deleteCategory(context, categoryId, options),
    updateCategory: (
      categoryId: string,
      body: AtlasGlossaryCategory,
      options?: GlossaryUpdateCategoryOptionalParams,
    ) => updateCategory(context, categoryId, body, options),
    getCategory: (
      categoryId: string,
      options?: GlossaryGetCategoryOptionalParams,
    ) => getCategory(context, categoryId, options),
    createCategory: (
      body: AtlasGlossaryCategory,
      options?: GlossaryCreateCategoryOptionalParams,
    ) => createCategory(context, body, options),
    createCategories: (
      body: AtlasGlossaryCategory[],
      options?: GlossaryCreateCategoriesOptionalParams,
    ) => createCategories(context, body, options),
    create: (body: AtlasGlossary, options?: GlossaryCreateOptionalParams) =>
      create(context, body, options),
    batchGet: (options?: GlossaryBatchGetOptionalParams) =>
      batchGet(context, options),
  };
}

export function _getGlossaryOperations(
  context: DataMapContext,
): GlossaryOperations {
  return {
    ..._getGlossary(context),
  };
}
