// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MachineLearningServicesContext } from "../../api/machineLearningServicesContext.js";
import {
  listLatest,
  getNextVersion,
  getLatest,
  list,
  createOrUpdate,
  get,
} from "../../api/indexes/operations.js";
import {
  IndexesListLatestOptionalParams,
  IndexesGetNextVersionOptionalParams,
  IndexesGetLatestOptionalParams,
  IndexesListOptionalParams,
  IndexesCreateOrUpdateOptionalParams,
  IndexesGetOptionalParams,
} from "../../api/indexes/options.js";
import { Index, VersionInfo } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a Indexes operations. */
export interface IndexesOperations {
  /** List the latest version of each index. Latest is defined by most recent created by date. */
  listLatest: (
    options?: IndexesListLatestOptionalParams,
  ) => PagedAsyncIterableIterator<Index>;
  /** Get next Index version as defined by the server. The server keeps track of all versions that are string-representations of integers. If one exists, the nextVersion will be a string representation of the highest integer value + 1. Otherwise, the nextVersion will default to '1'. */
  getNextVersion: (
    name: string,
    options?: IndexesGetNextVersionOptionalParams,
  ) => Promise<VersionInfo>;
  /** Get latest version of the Index. Latest is defined by most recent created by date. */
  getLatest: (
    name: string,
    options?: IndexesGetLatestOptionalParams,
  ) => Promise<Index>;
  /** List the versions of an Index given the name. */
  list: (
    name: string,
    listViewType: string,
    options?: IndexesListOptionalParams,
  ) => PagedAsyncIterableIterator<Index>;
  /** Creates or updates a IndexVersion. */
  createOrUpdate: (
    name: string,
    version: string,
    body: Index,
    options?: IndexesCreateOrUpdateOptionalParams,
  ) => Promise<Index>;
  /** Get a specific version of an Index. */
  get: (
    name: string,
    version: string,
    options?: IndexesGetOptionalParams,
  ) => Promise<Index>;
}

function _getIndexes(context: MachineLearningServicesContext) {
  return {
    listLatest: (options?: IndexesListLatestOptionalParams) =>
      listLatest(context, options),
    getNextVersion: (
      name: string,
      options?: IndexesGetNextVersionOptionalParams,
    ) => getNextVersion(context, name, options),
    getLatest: (name: string, options?: IndexesGetLatestOptionalParams) =>
      getLatest(context, name, options),
    list: (
      name: string,
      listViewType: string,
      options?: IndexesListOptionalParams,
    ) => list(context, name, listViewType, options),
    createOrUpdate: (
      name: string,
      version: string,
      body: Index,
      options?: IndexesCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, name, version, body, options),
    get: (name: string, version: string, options?: IndexesGetOptionalParams) =>
      get(context, name, version, options),
  };
}

export function _getIndexesOperations(
  context: MachineLearningServicesContext,
): IndexesOperations {
  return {
    ..._getIndexes(context),
  };
}
