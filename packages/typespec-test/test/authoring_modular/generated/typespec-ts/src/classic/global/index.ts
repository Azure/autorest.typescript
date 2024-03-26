// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AuthoringContext } from "../../api/AuthoringContext.js";
import {
  SupportedLanguage,
  TrainingConfigVersion,
} from "../../models/models.js";
import {
  getSupportedLanguages,
  listTrainingConfigVersions,
} from "../../api/global/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  GlobalGetSupportedLanguagesOptions,
  GlobalListTrainingConfigVersionsOptions,
} from "../../models/options.js";

export interface GlobalOperations {
  getSupportedLanguages: (
    options?: GlobalGetSupportedLanguagesOptions,
  ) => PagedAsyncIterableIterator<SupportedLanguage>;
  listTrainingConfigVersions: (
    options?: GlobalListTrainingConfigVersionsOptions,
  ) => PagedAsyncIterableIterator<TrainingConfigVersion>;
}

export function getGlobal(context: AuthoringContext) {
  return {
    getSupportedLanguages: (options?: GlobalGetSupportedLanguagesOptions) =>
      getSupportedLanguages(context, options),
    listTrainingConfigVersions: (
      options?: GlobalListTrainingConfigVersionsOptions,
    ) => listTrainingConfigVersions(context, options),
  };
}

export function getGlobalOperations(
  context: AuthoringContext,
): GlobalOperations {
  return {
    ...getGlobal(context),
  };
}
