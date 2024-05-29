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
  get,
  createOrUpdate,
  update,
  $delete,
  listByTenant,
  syncCertRecord,
  checkNameAvailability,
  fix,
  getScopingQuestions,
  verify,
} from "../../api/reportResources/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  ReportResourcesGetOptionalParams,
  ReportResourcesCreateOrUpdateOptionalParams,
  ReportResourcesUpdateOptionalParams,
  ReportResourcesDeleteOptionalParams,
  ReportResourcesListByTenantOptionalParams,
  ReportResourcesSyncCertRecordOptionalParams,
  ReportResourcesCheckNameAvailabilityOptionalParams,
  ReportResourcesFixOptionalParams,
  ReportResourcesGetScopingQuestionsOptionalParams,
  ReportResourcesVerifyOptionalParams,
} from "../../models/options.js";

export interface ReportResourcesOperations {
  get: (
    reportName: string,
    options?: ReportResourcesGetOptionalParams,
  ) => Promise<ReportResource>;
  createOrUpdate: (
    reportName: string,
    parameters: ReportResource,
    options?: ReportResourcesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<ReportResource>, ReportResource>;
  update: (
    reportName: string,
    properties: ReportResourcePatch,
    options?: ReportResourcesUpdateOptionalParams,
  ) => PollerLike<OperationState<ReportResource>, ReportResource>;
  delete: (
    reportName: string,
    options?: ReportResourcesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listByTenant: (
    options?: ReportResourcesListByTenantOptionalParams,
  ) => PagedAsyncIterableIterator<ReportResource>;
  syncCertRecord: (
    reportName: string,
    body: SyncCertRecordRequest,
    options?: ReportResourcesSyncCertRecordOptionalParams,
  ) => PollerLike<
    OperationState<SyncCertRecordResponse>,
    SyncCertRecordResponse
  >;
  checkNameAvailability: (
    reportName: string,
    body: CheckNameAvailabilityRequest,
    options?: ReportResourcesCheckNameAvailabilityOptionalParams,
  ) => Promise<CheckNameAvailabilityResponse>;
  fix: (
    reportName: string,
    options?: ReportResourcesFixOptionalParams,
  ) => PollerLike<OperationState<ReportFixResult>, ReportFixResult>;
  getScopingQuestions: (
    reportName: string,
    options?: ReportResourcesGetScopingQuestionsOptionalParams,
  ) => Promise<ScopingQuestions>;
  verify: (
    reportName: string,
    options?: ReportResourcesVerifyOptionalParams,
  ) => PollerLike<
    OperationState<ReportVerificationResult>,
    ReportVerificationResult
  >;
}

export function getReportResources(context: AppComplianceAutomationContext) {
  return {
    get: (reportName: string, options?: ReportResourcesGetOptionalParams) =>
      get(context, reportName, options),
    createOrUpdate: (
      reportName: string,
      parameters: ReportResource,
      options?: ReportResourcesCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, reportName, parameters, options),
    update: (
      reportName: string,
      properties: ReportResourcePatch,
      options?: ReportResourcesUpdateOptionalParams,
    ) => update(context, reportName, properties, options),
    delete: (
      reportName: string,
      options?: ReportResourcesDeleteOptionalParams,
    ) => $delete(context, reportName, options),
    listByTenant: (options?: ReportResourcesListByTenantOptionalParams) =>
      listByTenant(context, options),
    syncCertRecord: (
      reportName: string,
      body: SyncCertRecordRequest,
      options?: ReportResourcesSyncCertRecordOptionalParams,
    ) => syncCertRecord(context, reportName, body, options),
    checkNameAvailability: (
      reportName: string,
      body: CheckNameAvailabilityRequest,
      options?: ReportResourcesCheckNameAvailabilityOptionalParams,
    ) => checkNameAvailability(context, reportName, body, options),
    fix: (reportName: string, options?: ReportResourcesFixOptionalParams) =>
      fix(context, reportName, options),
    getScopingQuestions: (
      reportName: string,
      options?: ReportResourcesGetScopingQuestionsOptionalParams,
    ) => getScopingQuestions(context, reportName, options),
    verify: (
      reportName: string,
      options?: ReportResourcesVerifyOptionalParams,
    ) => verify(context, reportName, options),
  };
}

export function getReportResourcesOperations(
  context: AppComplianceAutomationContext,
): ReportResourcesOperations {
  return {
    ...getReportResources(context),
  };
}
