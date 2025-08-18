// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PurviewDataMapContext } from "../../api/purviewDataMapContext.js";
import {
  listTermHeaders,
  listTerms,
  partialUpdate,
  getDetailed,
  listCategoriesHeaders,
  listCategories,
  $delete,
  update,
  get,
  listRelatedTerms,
  deleteTermAssignmentFromEntities,
  assignTermToEntities,
  listEntitiesAssignedWithTerm,
  createTerms,
  partialUpdateTerm,
  deleteTerm,
  updateTerm,
  getTerm,
  createTerm,
  listCategoryTerms,
  listRelatedCategories,
  partialUpdateCategory,
  deleteCategory,
  updateCategory,
  getCategory,
  createCategory,
  createCategories,
  create,
  list,
} from "../../api/glossary/operations.js";
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
  listTermHeaders: (
    glossaryId: string,
    options?: GlossaryListTermHeadersOptionalParams,
  ) => Promise<AtlasRelatedTermHeader[]>;
  /**
   * Get terms belonging to a specific glossary. Recommend using limit/offset to get
   * pagination result.
   */
  listTerms: (
    glossaryId: string,
    options?: GlossaryListTermsOptionalParams,
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
  listCategoriesHeaders: (
    glossaryId: string,
    options?: GlossaryListCategoriesHeadersOptionalParams,
  ) => Promise<AtlasRelatedCategoryHeader[]>;
  /**
   * Get the categories belonging to a specific glossary. Recommend using
   * limit/offset to get pagination result.
   */
  listCategories: (
    glossaryId: string,
    options?: GlossaryListCategoriesOptionalParams,
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
  listRelatedTerms: (
    termId: string,
    options?: GlossaryListRelatedTermsOptionalParams,
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
  listEntitiesAssignedWithTerm: (
    termId: string,
    options?: GlossaryListEntitiesAssignedWithTermOptionalParams,
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
  listCategoryTerms: (
    categoryId: string,
    options?: GlossaryListCategoryTermsOptionalParams,
  ) => Promise<AtlasRelatedTermHeader[]>;
  /**
   * Get all related categories (parent and children). Limit, offset, and sort
   * parameters are currently not being enabled and won't work even they are passed.
   */
  listRelatedCategories: (
    categoryId: string,
    options?: GlossaryListRelatedCategoriesOptionalParams,
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
  list: (options?: GlossaryListOptionalParams) => Promise<AtlasGlossary[]>;
}

function _getGlossary(context: PurviewDataMapContext) {
  return {
    listTermHeaders: (
      glossaryId: string,
      options?: GlossaryListTermHeadersOptionalParams,
    ) => listTermHeaders(context, glossaryId, options),
    listTerms: (
      glossaryId: string,
      options?: GlossaryListTermsOptionalParams,
    ) => listTerms(context, glossaryId, options),
    partialUpdate: (
      glossaryId: string,
      body: Record<string, string>,
      options?: GlossaryPartialUpdateOptionalParams,
    ) => partialUpdate(context, glossaryId, body, options),
    getDetailed: (
      glossaryId: string,
      options?: GlossaryGetDetailedOptionalParams,
    ) => getDetailed(context, glossaryId, options),
    listCategoriesHeaders: (
      glossaryId: string,
      options?: GlossaryListCategoriesHeadersOptionalParams,
    ) => listCategoriesHeaders(context, glossaryId, options),
    listCategories: (
      glossaryId: string,
      options?: GlossaryListCategoriesOptionalParams,
    ) => listCategories(context, glossaryId, options),
    delete: (glossaryId: string, options?: GlossaryDeleteOptionalParams) =>
      $delete(context, glossaryId, options),
    update: (
      glossaryId: string,
      body: AtlasGlossary,
      options?: GlossaryUpdateOptionalParams,
    ) => update(context, glossaryId, body, options),
    get: (glossaryId: string, options?: GlossaryGetOptionalParams) =>
      get(context, glossaryId, options),
    listRelatedTerms: (
      termId: string,
      options?: GlossaryListRelatedTermsOptionalParams,
    ) => listRelatedTerms(context, termId, options),
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
    listEntitiesAssignedWithTerm: (
      termId: string,
      options?: GlossaryListEntitiesAssignedWithTermOptionalParams,
    ) => listEntitiesAssignedWithTerm(context, termId, options),
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
    listCategoryTerms: (
      categoryId: string,
      options?: GlossaryListCategoryTermsOptionalParams,
    ) => listCategoryTerms(context, categoryId, options),
    listRelatedCategories: (
      categoryId: string,
      options?: GlossaryListRelatedCategoriesOptionalParams,
    ) => listRelatedCategories(context, categoryId, options),
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
    list: (options?: GlossaryListOptionalParams) => list(context, options),
  };
}

export function _getGlossaryOperations(
  context: PurviewDataMapContext,
): GlossaryOperations {
  return {
    ..._getGlossary(context),
  };
}
