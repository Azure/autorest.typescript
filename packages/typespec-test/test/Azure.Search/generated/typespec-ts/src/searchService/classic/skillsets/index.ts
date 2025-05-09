// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SearchServiceContext } from "../../api/searchServiceContext.js";
import {
  SearchIndexerSkillset,
  ListSkillsetsResult,
  SkillNames,
} from "../../../models/azure/search/documents/indexes/models.js";
import {
  SkillsetsResetSkillsOptionalParams,
  SkillsetsCreateOptionalParams,
  SkillsetsListOptionalParams,
  SkillsetsGetOptionalParams,
  SkillsetsDeleteOptionalParams,
  SkillsetsCreateOrUpdateOptionalParams,
} from "../../api/skillsets/options.js";
import {
  resetSkills,
  create,
  list,
  get,
  $delete,
  createOrUpdate,
} from "../../api/skillsets/operations.js";

/** Interface representing a Skillsets operations. */
export interface SkillsetsOperations {
  /** Reset an existing skillset in a search service. */
  resetSkills: (
    skillNames: SkillNames,
    skillsetName: string,
    options?: SkillsetsResetSkillsOptionalParams,
  ) => Promise<void>;
  /** Creates a new skillset in a search service. */
  create: (
    skillset: SearchIndexerSkillset,
    options?: SkillsetsCreateOptionalParams,
  ) => Promise<SearchIndexerSkillset>;
  /** List all skillsets in a search service. */
  list: (options?: SkillsetsListOptionalParams) => Promise<ListSkillsetsResult>;
  /** Retrieves a skillset in a search service. */
  get: (
    skillsetName: string,
    options?: SkillsetsGetOptionalParams,
  ) => Promise<SearchIndexerSkillset>;
  /** Deletes a skillset in a search service. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    skillsetName: string,
    options?: SkillsetsDeleteOptionalParams,
  ) => Promise<void>;
  /**
   * Creates a new skillset in a search service or updates the skillset if it
   * already exists.
   */
  createOrUpdate: (
    skillset: SearchIndexerSkillset,
    skillsetName: string,
    options?: SkillsetsCreateOrUpdateOptionalParams,
  ) => Promise<SearchIndexerSkillset>;
}

function _getSkillsets(context: SearchServiceContext) {
  return {
    resetSkills: (
      skillNames: SkillNames,
      skillsetName: string,
      options?: SkillsetsResetSkillsOptionalParams,
    ) => resetSkills(context, skillNames, skillsetName, options),
    create: (
      skillset: SearchIndexerSkillset,
      options?: SkillsetsCreateOptionalParams,
    ) => create(context, skillset, options),
    list: (options?: SkillsetsListOptionalParams) => list(context, options),
    get: (skillsetName: string, options?: SkillsetsGetOptionalParams) =>
      get(context, skillsetName, options),
    delete: (skillsetName: string, options?: SkillsetsDeleteOptionalParams) =>
      $delete(context, skillsetName, options),
    createOrUpdate: (
      skillset: SearchIndexerSkillset,
      skillsetName: string,
      options?: SkillsetsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, skillset, skillsetName, options),
  };
}

export function _getSkillsetsOperations(
  context: SearchServiceContext,
): SkillsetsOperations {
  return {
    ..._getSkillsets(context),
  };
}
