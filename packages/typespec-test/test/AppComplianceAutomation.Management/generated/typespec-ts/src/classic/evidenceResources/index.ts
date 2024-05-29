// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AppComplianceAutomationContext } from "../../api/appComplianceAutomationContext.js";
import {
  EvidenceResource,
  EvidenceFileDownloadRequest,
  EvidenceFileDownloadResponse,
} from "../../models/models.js";
import {
  get,
  createOrUpdate,
  $delete,
  listByReportResource,
  download,
} from "../../api/evidenceResources/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  EvidenceResourcesGetOptionalParams,
  EvidenceResourcesCreateOrUpdateOptionalParams,
  EvidenceResourcesDeleteOptionalParams,
  EvidenceResourcesListByReportResourceOptionalParams,
  EvidenceResourcesDownloadOptionalParams,
} from "../../models/options.js";

export interface EvidenceResourcesOperations {
  get: (
    reportName: string,
    evidenceName: string,
    options?: EvidenceResourcesGetOptionalParams,
  ) => Promise<EvidenceResource>;
  createOrUpdate: (
    reportName: string,
    evidenceName: string,
    parameters: EvidenceResource,
    options?: EvidenceResourcesCreateOrUpdateOptionalParams,
  ) => Promise<EvidenceResource>;
  delete: (
    reportName: string,
    evidenceName: string,
    options?: EvidenceResourcesDeleteOptionalParams,
  ) => Promise<void>;
  listByReportResource: (
    reportName: string,
    options?: EvidenceResourcesListByReportResourceOptionalParams,
  ) => PagedAsyncIterableIterator<EvidenceResource>;
  download: (
    reportName: string,
    evidenceName: string,
    body: EvidenceFileDownloadRequest,
    options?: EvidenceResourcesDownloadOptionalParams,
  ) => Promise<EvidenceFileDownloadResponse>;
}

export function getEvidenceResources(context: AppComplianceAutomationContext) {
  return {
    get: (
      reportName: string,
      evidenceName: string,
      options?: EvidenceResourcesGetOptionalParams,
    ) => get(context, reportName, evidenceName, options),
    createOrUpdate: (
      reportName: string,
      evidenceName: string,
      parameters: EvidenceResource,
      options?: EvidenceResourcesCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, reportName, evidenceName, parameters, options),
    delete: (
      reportName: string,
      evidenceName: string,
      options?: EvidenceResourcesDeleteOptionalParams,
    ) => $delete(context, reportName, evidenceName, options),
    listByReportResource: (
      reportName: string,
      options?: EvidenceResourcesListByReportResourceOptionalParams,
    ) => listByReportResource(context, reportName, options),
    download: (
      reportName: string,
      evidenceName: string,
      body: EvidenceFileDownloadRequest,
      options?: EvidenceResourcesDownloadOptionalParams,
    ) => download(context, reportName, evidenceName, body, options),
  };
}

export function getEvidenceResourcesOperations(
  context: AppComplianceAutomationContext,
): EvidenceResourcesOperations {
  return {
    ...getEvidenceResources(context),
  };
}
