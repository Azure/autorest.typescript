// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SearchServiceContext } from "../../api/searchServiceContext.js";
import {
  SynonymMap,
  ListSynonymMapsResult,
} from "../../../models/azure/search/documents/indexes/models.js";
import {
  SynonymMapsCreateOptionalParams,
  SynonymMapsListOptionalParams,
  SynonymMapsGetOptionalParams,
  SynonymMapsDeleteOptionalParams,
  SynonymMapsCreateOrUpdateOptionalParams,
} from "../../api/synonymMaps/options.js";
import {
  create,
  list,
  get,
  $delete,
  createOrUpdate,
} from "../../api/synonymMaps/operations.js";

/** Interface representing a SynonymMaps operations. */
export interface SynonymMapsOperations {
  /** Creates a new synonym map. */
  create: (
    synonymMap: SynonymMap,
    options?: SynonymMapsCreateOptionalParams,
  ) => Promise<SynonymMap>;
  /** Lists all synonym maps available for a search service. */
  list: (
    options?: SynonymMapsListOptionalParams,
  ) => Promise<ListSynonymMapsResult>;
  /** Retrieves a synonym map definition. */
  get: (
    synonymMapName: string,
    options?: SynonymMapsGetOptionalParams,
  ) => Promise<SynonymMap>;
  /** Deletes a synonym map. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    synonymMapName: string,
    options?: SynonymMapsDeleteOptionalParams,
  ) => Promise<void>;
  /** Creates a new synonym map or updates a synonym map if it already exists. */
  createOrUpdate: (
    synonymMap: SynonymMap,
    synonymMapName: string,
    options?: SynonymMapsCreateOrUpdateOptionalParams,
  ) => Promise<SynonymMap>;
}

function _getSynonymMaps(context: SearchServiceContext) {
  return {
    create: (
      synonymMap: SynonymMap,
      options?: SynonymMapsCreateOptionalParams,
    ) => create(context, synonymMap, options),
    list: (options?: SynonymMapsListOptionalParams) => list(context, options),
    get: (synonymMapName: string, options?: SynonymMapsGetOptionalParams) =>
      get(context, synonymMapName, options),
    delete: (
      synonymMapName: string,
      options?: SynonymMapsDeleteOptionalParams,
    ) => $delete(context, synonymMapName, options),
    createOrUpdate: (
      synonymMap: SynonymMap,
      synonymMapName: string,
      options?: SynonymMapsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, synonymMap, synonymMapName, options),
  };
}

export function _getSynonymMapsOperations(
  context: SearchServiceContext,
): SynonymMapsOperations {
  return {
    ..._getSynonymMaps(context),
  };
}
