// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AppComplianceAutomationContext } from "../../api/appComplianceAutomationContext.js";
import { ScopingConfigurationResource } from "../../models/models.js";
import {
  scopingConfigurationGet,
  scopingConfigurationCreateOrUpdate,
  scopingConfigurationDelete,
  scopingConfigurationListByReportResource,
} from "../../api/scopingConfiguration/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  ScopingConfigurationGetOptionalParams,
  ScopingConfigurationCreateOrUpdateOptionalParams,
  ScopingConfigurationDeleteOptionalParams,
  ScopingConfigurationListByReportResourceOptionalParams,
} from "../../models/options.js";

export interface ScopingConfigurationOperations {
  get: (
    reportName: string,
    scopingConfigurationName: string,
    options?: ScopingConfigurationGetOptionalParams,
  ) => Promise<ScopingConfigurationResource>;
  createOrUpdate: (
    reportName: string,
    scopingConfigurationName: string,
    parameters: ScopingConfigurationResource,
    options?: ScopingConfigurationCreateOrUpdateOptionalParams,
  ) => Promise<ScopingConfigurationResource>;
  delete: (
    reportName: string,
    scopingConfigurationName: string,
    options?: ScopingConfigurationDeleteOptionalParams,
  ) => Promise<void>;
  listByReportResource: (
    reportName: string,
    options?: ScopingConfigurationListByReportResourceOptionalParams,
  ) => PagedAsyncIterableIterator<ScopingConfigurationResource>;
}

export function getScopingConfiguration(
  context: AppComplianceAutomationContext,
) {
  return {
    get: (
      reportName: string,
      scopingConfigurationName: string,
      options?: ScopingConfigurationGetOptionalParams,
    ) =>
      scopingConfigurationGet(
        context,
        reportName,
        scopingConfigurationName,
        options,
      ),
    createOrUpdate: (
      reportName: string,
      scopingConfigurationName: string,
      parameters: ScopingConfigurationResource,
      options?: ScopingConfigurationCreateOrUpdateOptionalParams,
    ) =>
      scopingConfigurationCreateOrUpdate(
        context,
        reportName,
        scopingConfigurationName,
        parameters,
        options,
      ),
    delete: (
      reportName: string,
      scopingConfigurationName: string,
      options?: ScopingConfigurationDeleteOptionalParams,
    ) =>
      scopingConfigurationDelete(
        context,
        reportName,
        scopingConfigurationName,
        options,
      ),
    listByReportResource: (
      reportName: string,
      options?: ScopingConfigurationListByReportResourceOptionalParams,
    ) => scopingConfigurationListByReportResource(context, reportName, options),
  };
}

export function getScopingConfigurationOperations(
  context: AppComplianceAutomationContext,
): ScopingConfigurationOperations {
  return {
    ...getScopingConfiguration(context),
  };
}
