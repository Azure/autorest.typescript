// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AppComplianceAutomationContext } from "../../api/appComplianceAutomationContext.js";
import { ScopingConfigurationResource } from "../../models/models.js";
import {
  get,
  createOrUpdate,
  $delete,
  listByReportResource,
} from "../../api/scopingConfigurationResources/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  ScopingConfigurationResourcesGetOptionalParams,
  ScopingConfigurationResourcesCreateOrUpdateOptionalParams,
  ScopingConfigurationResourcesDeleteOptionalParams,
  ScopingConfigurationResourcesListByReportResourceOptionalParams,
} from "../../models/options.js";

export interface ScopingConfigurationResourcesOperations {
  get: (
    reportName: string,
    scopingConfigurationName: string,
    options?: ScopingConfigurationResourcesGetOptionalParams,
  ) => Promise<ScopingConfigurationResource>;
  createOrUpdate: (
    reportName: string,
    scopingConfigurationName: string,
    parameters: ScopingConfigurationResource,
    options?: ScopingConfigurationResourcesCreateOrUpdateOptionalParams,
  ) => Promise<ScopingConfigurationResource>;
  delete: (
    reportName: string,
    scopingConfigurationName: string,
    options?: ScopingConfigurationResourcesDeleteOptionalParams,
  ) => Promise<void>;
  listByReportResource: (
    reportName: string,
    options?: ScopingConfigurationResourcesListByReportResourceOptionalParams,
  ) => PagedAsyncIterableIterator<ScopingConfigurationResource>;
}

export function getScopingConfigurationResources(
  context: AppComplianceAutomationContext,
) {
  return {
    get: (
      reportName: string,
      scopingConfigurationName: string,
      options?: ScopingConfigurationResourcesGetOptionalParams,
    ) => get(context, reportName, scopingConfigurationName, options),
    createOrUpdate: (
      reportName: string,
      scopingConfigurationName: string,
      parameters: ScopingConfigurationResource,
      options?: ScopingConfigurationResourcesCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        reportName,
        scopingConfigurationName,
        parameters,
        options,
      ),
    delete: (
      reportName: string,
      scopingConfigurationName: string,
      options?: ScopingConfigurationResourcesDeleteOptionalParams,
    ) => $delete(context, reportName, scopingConfigurationName, options),
    listByReportResource: (
      reportName: string,
      options?: ScopingConfigurationResourcesListByReportResourceOptionalParams,
    ) => listByReportResource(context, reportName, options),
  };
}

export function getScopingConfigurationResourcesOperations(
  context: AppComplianceAutomationContext,
): ScopingConfigurationResourcesOperations {
  return {
    ...getScopingConfigurationResources(context),
  };
}
