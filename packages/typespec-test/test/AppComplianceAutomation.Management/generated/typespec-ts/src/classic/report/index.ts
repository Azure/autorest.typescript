// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AppComplianceAutomationContext } from "../../api/appComplianceAutomationContext.js";
import {
  CheckNameAvailabilityRequest,
  CheckNameAvailabilityResponse,
  ReportResource,
  ReportResourcePatch,
  SyncCertRecordRequest,
  SyncCertRecordResponse,
  ReportFixResult,
  ScopingQuestions,
  ReportVerificationResult,
} from "../../models/models.js";
import {
  reportGet,
  reportCreateOrUpdate,
  reportUpdate,
  reportDelete,
  reportListByTenant,
  reportSyncCertRecord,
  reportCheckNameAvailability,
  reportFix,
  reportGetScopingQuestions,
  reportVerify,
} from "../../api/report/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  ReportGetOptionalParams,
  ReportCreateOrUpdateOptionalParams,
  ReportUpdateOptionalParams,
  ReportDeleteOptionalParams,
  ReportListByTenantOptionalParams,
  ReportSyncCertRecordOptionalParams,
  ReportCheckNameAvailabilityOptionalParams,
  ReportFixOptionalParams,
  ReportGetScopingQuestionsOptionalParams,
  ReportVerifyOptionalParams,
} from "../../models/options.js";

export interface ReportOperations {
  get: (
    reportName: string,
    options?: ReportGetOptionalParams,
  ) => Promise<ReportResource>;
  createOrUpdate: (
    reportName: string,
    parameters: ReportResource,
    options?: ReportCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<ReportResource>, ReportResource>;
  update: (
    reportName: string,
    properties: ReportResourcePatch,
    options?: ReportUpdateOptionalParams,
  ) => PollerLike<OperationState<ReportResource>, ReportResource>;
  delete: (
    reportName: string,
    options?: ReportDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listByTenant: (
    options?: ReportListByTenantOptionalParams,
  ) => PagedAsyncIterableIterator<ReportResource>;
  syncCertRecord: (
    reportName: string,
    body: SyncCertRecordRequest,
    options?: ReportSyncCertRecordOptionalParams,
  ) => PollerLike<
    OperationState<SyncCertRecordResponse>,
    SyncCertRecordResponse
  >;
  checkNameAvailability: (
    reportName: string,
    body: CheckNameAvailabilityRequest,
    options?: ReportCheckNameAvailabilityOptionalParams,
  ) => Promise<CheckNameAvailabilityResponse>;
  fix: (
    reportName: string,
    options?: ReportFixOptionalParams,
  ) => PollerLike<OperationState<ReportFixResult>, ReportFixResult>;
  getScopingQuestions: (
    reportName: string,
    options?: ReportGetScopingQuestionsOptionalParams,
  ) => Promise<ScopingQuestions>;
  verify: (
    reportName: string,
    options?: ReportVerifyOptionalParams,
  ) => PollerLike<
    OperationState<ReportVerificationResult>,
    ReportVerificationResult
  >;
}

export function getReport(context: AppComplianceAutomationContext) {
  return {
    get: (reportName: string, options?: ReportGetOptionalParams) =>
      reportGet(context, reportName, options),
    createOrUpdate: (
      reportName: string,
      parameters: ReportResource,
      options?: ReportCreateOrUpdateOptionalParams,
    ) => reportCreateOrUpdate(context, reportName, parameters, options),
    update: (
      reportName: string,
      properties: ReportResourcePatch,
      options?: ReportUpdateOptionalParams,
    ) => reportUpdate(context, reportName, properties, options),
    delete: (reportName: string, options?: ReportDeleteOptionalParams) =>
      reportDelete(context, reportName, options),
    listByTenant: (options?: ReportListByTenantOptionalParams) =>
      reportListByTenant(context, options),
    syncCertRecord: (
      reportName: string,
      body: SyncCertRecordRequest,
      options?: ReportSyncCertRecordOptionalParams,
    ) => reportSyncCertRecord(context, reportName, body, options),
    checkNameAvailability: (
      reportName: string,
      body: CheckNameAvailabilityRequest,
      options?: ReportCheckNameAvailabilityOptionalParams,
    ) => reportCheckNameAvailability(context, reportName, body, options),
    fix: (reportName: string, options?: ReportFixOptionalParams) =>
      reportFix(context, reportName, options),
    getScopingQuestions: (
      reportName: string,
      options?: ReportGetScopingQuestionsOptionalParams,
    ) => reportGetScopingQuestions(context, reportName, options),
    verify: (reportName: string, options?: ReportVerifyOptionalParams) =>
      reportVerify(context, reportName, options),
  };
}

export function getReportOperations(
  context: AppComplianceAutomationContext,
): ReportOperations {
  return {
    ...getReport(context),
  };
}
