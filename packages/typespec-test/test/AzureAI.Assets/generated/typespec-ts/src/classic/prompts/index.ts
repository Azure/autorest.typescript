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
} from "../../api/prompts/operations.js";
import {
  PromptsListLatestOptionalParams,
  PromptsGetNextVersionOptionalParams,
  PromptsGetLatestOptionalParams,
  PromptsListOptionalParams,
  PromptsCreateOrUpdateOptionalParams,
  PromptsGetOptionalParams,
} from "../../api/prompts/options.js";
import { VersionInfo, Prompt } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a Prompts operations. */
export interface PromptsOperations {
  /** List the latest version of each prompt. Latest is defined by most recent created by date. */
  listLatest: (
    options?: PromptsListLatestOptionalParams,
  ) => PagedAsyncIterableIterator<Prompt>;
  /** Get next Prompt version as defined by the server. The server keeps track of all versions that are string-representations of integers. If one exists, the nextVersion will be a string representation of the highest integer value + 1. Otherwise, the nextVersion will default to '1'. */
  getNextVersion: (
    name: string,
    options?: PromptsGetNextVersionOptionalParams,
  ) => Promise<VersionInfo>;
  /** Get latest version of the Prompt. Latest is defined by most recent created by date. */
  getLatest: (
    name: string,
    options?: PromptsGetLatestOptionalParams,
  ) => Promise<Prompt>;
  /** List the versions of a Prompt given the name. */
  list: (
    name: string,
    listViewType: string,
    options?: PromptsListOptionalParams,
  ) => PagedAsyncIterableIterator<Prompt>;
  /** Creates or updates a Prompt */
  createOrUpdate: (
    name: string,
    version: string,
    body: Prompt,
    options?: PromptsCreateOrUpdateOptionalParams,
  ) => Promise<Prompt>;
  /** Get a specific version of a Prompt. */
  get: (
    name: string,
    version: string,
    options?: PromptsGetOptionalParams,
  ) => Promise<Prompt>;
}

function _getPrompts(context: MachineLearningServicesContext) {
  return {
    listLatest: (options?: PromptsListLatestOptionalParams) =>
      listLatest(context, options),
    getNextVersion: (
      name: string,
      options?: PromptsGetNextVersionOptionalParams,
    ) => getNextVersion(context, name, options),
    getLatest: (name: string, options?: PromptsGetLatestOptionalParams) =>
      getLatest(context, name, options),
    list: (
      name: string,
      listViewType: string,
      options?: PromptsListOptionalParams,
    ) => list(context, name, listViewType, options),
    createOrUpdate: (
      name: string,
      version: string,
      body: Prompt,
      options?: PromptsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, name, version, body, options),
    get: (name: string, version: string, options?: PromptsGetOptionalParams) =>
      get(context, name, version, options),
  };
}

export function _getPromptsOperations(
  context: MachineLearningServicesContext,
): PromptsOperations {
  return {
    ..._getPrompts(context),
  };
}
