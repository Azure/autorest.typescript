// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AppComplianceAutomationContext } from "../../api/appComplianceAutomationContext.js";
import {
  EvidenceResource,
  EvidenceFileDownloadRequest,
  EvidenceFileDownloadResponse,
} from "../../models/models.js";
import {
  evidenceGet,
  evidenceCreateOrUpdate,
  evidenceDelete,
  evidenceListByReportResource,
  evidenceDownload,
} from "../../api/evidence/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  EvidenceGetOptionalParams,
  EvidenceCreateOrUpdateOptionalParams,
  EvidenceDeleteOptionalParams,
  EvidenceListByReportResourceOptionalParams,
  EvidenceDownloadOptionalParams,
} from "../../models/options.js";

export interface EvidenceOperations {
  get: (
    reportName: string,
    evidenceName: string,
    options?: EvidenceGetOptionalParams,
  ) => Promise<EvidenceResource>;
  createOrUpdate: (
    reportName: string,
    evidenceName: string,
    parameters: EvidenceResource,
    options?: EvidenceCreateOrUpdateOptionalParams,
  ) => Promise<EvidenceResource>;
  delete: (
    reportName: string,
    evidenceName: string,
    options?: EvidenceDeleteOptionalParams,
  ) => Promise<void>;
  listByReportResource: (
    reportName: string,
    options?: EvidenceListByReportResourceOptionalParams,
  ) => PagedAsyncIterableIterator<EvidenceResource>;
  download: (
    reportName: string,
    evidenceName: string,
    body: EvidenceFileDownloadRequest,
    options?: EvidenceDownloadOptionalParams,
  ) => Promise<EvidenceFileDownloadResponse>;
}

export function getEvidence(context: AppComplianceAutomationContext) {
  return {
    get: (
      reportName: string,
      evidenceName: string,
      options?: EvidenceGetOptionalParams,
    ) => evidenceGet(context, reportName, evidenceName, options),
    createOrUpdate: (
      reportName: string,
      evidenceName: string,
      parameters: EvidenceResource,
      options?: EvidenceCreateOrUpdateOptionalParams,
    ) =>
      evidenceCreateOrUpdate(
        context,
        reportName,
        evidenceName,
        parameters,
        options,
      ),
    delete: (
      reportName: string,
      evidenceName: string,
      options?: EvidenceDeleteOptionalParams,
    ) => evidenceDelete(context, reportName, evidenceName, options),
    listByReportResource: (
      reportName: string,
      options?: EvidenceListByReportResourceOptionalParams,
    ) => evidenceListByReportResource(context, reportName, options),
    download: (
      reportName: string,
      evidenceName: string,
      body: EvidenceFileDownloadRequest,
      options?: EvidenceDownloadOptionalParams,
    ) => evidenceDownload(context, reportName, evidenceName, body, options),
  };
}

export function getEvidenceOperations(
  context: AppComplianceAutomationContext,
): EvidenceOperations {
  return {
    ...getEvidence(context),
  };
}
