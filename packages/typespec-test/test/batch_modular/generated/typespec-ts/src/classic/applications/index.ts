// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BatchContext } from "../../api/BatchContext.js";
import { BatchApplication } from "../../models/models.js";
import {
  listApplications,
  getApplication,
} from "../../api/applications/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  ApplicationsListApplicationsOptions,
  ApplicationsGetApplicationOptions,
} from "../../models/options.js";

export interface ApplicationsOperations {
  listApplications: (
    options?: ApplicationsListApplicationsOptions,
  ) => PagedAsyncIterableIterator<BatchApplication>;
  getApplication: (
    applicationId: string,
    options?: ApplicationsGetApplicationOptions,
  ) => Promise<BatchApplication>;
}

export function getApplications(context: BatchContext) {
  return {
    listApplications: (options?: ApplicationsListApplicationsOptions) =>
      listApplications(context, options),
    getApplication: (
      applicationId: string,
      options?: ApplicationsGetApplicationOptions,
    ) => getApplication(context, applicationId, options),
  };
}

export function getApplicationsOperations(
  context: BatchContext,
): ApplicationsOperations {
  return {
    ...getApplications(context),
  };
}
