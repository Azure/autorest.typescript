// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import {
  ReportResourceOutput,
  ErrorResponseOutput,
  ReportResourceListResultOutput,
  SyncCertRecordResponseOutput,
  CheckNameAvailabilityResponseOutput,
  ReportFixResultOutput,
  ScopingQuestionsOutput,
  ReportVerificationResultOutput,
  WebhookResourceOutput,
  WebhookResourceListResultOutput,
  SnapshotResourceOutput,
  SnapshotResourceListResultOutput,
  DownloadResponseOutput,
  ScopingConfigurationResourceOutput,
  ScopingConfigurationResourceListResultOutput,
  EvidenceResourceOutput,
  EvidenceResourceListResultOutput,
  EvidenceFileDownloadResponseOutput,
  PagedOperationOutput,
  GetCollectionCountResponseOutput,
  GetOverviewStatusResponseOutput,
  OnboardResponseOutput,
  TriggerEvaluationResponseOutput,
  ListInUseStorageAccountsResponseOutput,
} from "./outputModels.js";

/** Azure operation completed successfully. */
export interface ReportResourcesGet200Response extends HttpResponse {
  status: "200";
  body: ReportResourceOutput;
}

export interface ReportResourcesGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'ReportResource' update operation succeeded */
export interface ReportResourcesCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: ReportResourceOutput;
}

export interface ReportResourcesCreateOrUpdate201Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource 'ReportResource' create operation succeeded */
export interface ReportResourcesCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: ReportResourceOutput;
  headers: RawHttpHeaders & ReportResourcesCreateOrUpdate201Headers;
}

export interface ReportResourcesCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running createOrUpdate operation */
export interface ReportResourcesCreateOrUpdateLogicalResponse
  extends HttpResponse {
  status: "200";
  body: ReportResourceOutput;
}

/** Azure operation completed successfully. */
export interface ReportResourcesUpdate200Response extends HttpResponse {
  status: "200";
  body: ReportResourceOutput;
}

export interface ReportResourcesUpdate202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource update request accepted. */
export interface ReportResourcesUpdate202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & ReportResourcesUpdate202Headers;
}

export interface ReportResourcesUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running update operation */
export interface ReportResourcesUpdateLogicalResponse extends HttpResponse {
  status: "200";
  body: ReportResourceOutput;
}

export interface ReportResourcesDelete202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource deletion accepted. */
export interface ReportResourcesDelete202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & ReportResourcesDelete202Headers;
}

/** Resource does not exist. */
export interface ReportResourcesDelete204Response extends HttpResponse {
  status: "204";
}

export interface ReportResourcesDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running delete operation */
export interface ReportResourcesDeleteLogicalResponse extends HttpResponse {
  status: "200";
}

/** Azure operation completed successfully. */
export interface ReportResourcesListByTenant200Response extends HttpResponse {
  status: "200";
  body: ReportResourceListResultOutput;
}

export interface ReportResourcesListByTenantDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface ReportResourcesSyncCertRecord200Response extends HttpResponse {
  status: "200";
  body: SyncCertRecordResponseOutput;
}

export interface ReportResourcesSyncCertRecord202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource operation accepted. */
export interface ReportResourcesSyncCertRecord202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & ReportResourcesSyncCertRecord202Headers;
}

export interface ReportResourcesSyncCertRecordDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running syncCertRecord operation */
export interface ReportResourcesSyncCertRecordLogicalResponse
  extends HttpResponse {
  status: "200";
  body: SyncCertRecordResponseOutput;
}

/** Azure operation completed successfully. */
export interface ReportResourcesCheckNameAvailability200Response
  extends HttpResponse {
  status: "200";
  body: CheckNameAvailabilityResponseOutput;
}

export interface ReportResourcesCheckNameAvailabilityDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface ReportResourcesFix200Response extends HttpResponse {
  status: "200";
  body: ReportFixResultOutput;
}

export interface ReportResourcesFix202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource operation accepted. */
export interface ReportResourcesFix202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & ReportResourcesFix202Headers;
}

export interface ReportResourcesFixDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running fix operation */
export interface ReportResourcesFixLogicalResponse extends HttpResponse {
  status: "200";
  body: ReportFixResultOutput;
}

/** Azure operation completed successfully. */
export interface ReportResourcesGetScopingQuestions200Response
  extends HttpResponse {
  status: "200";
  body: ScopingQuestionsOutput;
}

export interface ReportResourcesGetScopingQuestionsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface ReportResourcesVerify200Response extends HttpResponse {
  status: "200";
  body: ReportVerificationResultOutput;
}

export interface ReportResourcesVerify202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource operation accepted. */
export interface ReportResourcesVerify202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & ReportResourcesVerify202Headers;
}

export interface ReportResourcesVerifyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running verify operation */
export interface ReportResourcesVerifyLogicalResponse extends HttpResponse {
  status: "200";
  body: ReportVerificationResultOutput;
}

/** Azure operation completed successfully. */
export interface WebhookResourcesGet200Response extends HttpResponse {
  status: "200";
  body: WebhookResourceOutput;
}

export interface WebhookResourcesGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'WebhookResource' update operation succeeded */
export interface WebhookResourcesCreateOrUpdate200Response
  extends HttpResponse {
  status: "200";
  body: WebhookResourceOutput;
}

/** Resource 'WebhookResource' create operation succeeded */
export interface WebhookResourcesCreateOrUpdate201Response
  extends HttpResponse {
  status: "201";
  body: WebhookResourceOutput;
}

export interface WebhookResourcesCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface WebhookResourcesUpdate200Response extends HttpResponse {
  status: "200";
  body: WebhookResourceOutput;
}

export interface WebhookResourcesUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource deleted successfully. */
export interface WebhookResourcesDelete200Response extends HttpResponse {
  status: "200";
}

/** Resource does not exist. */
export interface WebhookResourcesDelete204Response extends HttpResponse {
  status: "204";
}

export interface WebhookResourcesDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface WebhookResourcesListByReportResource200Response
  extends HttpResponse {
  status: "200";
  body: WebhookResourceListResultOutput;
}

export interface WebhookResourcesListByReportResourceDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface SnapshotResourcesGet200Response extends HttpResponse {
  status: "200";
  body: SnapshotResourceOutput;
}

export interface SnapshotResourcesGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface SnapshotResourcesListByReportResource200Response
  extends HttpResponse {
  status: "200";
  body: SnapshotResourceListResultOutput;
}

export interface SnapshotResourcesListByReportResourceDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface SnapshotResourcesDownload200Response extends HttpResponse {
  status: "200";
  body: DownloadResponseOutput;
}

export interface SnapshotResourcesDownload202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource operation accepted. */
export interface SnapshotResourcesDownload202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & SnapshotResourcesDownload202Headers;
}

export interface SnapshotResourcesDownloadDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running download operation */
export interface SnapshotResourcesDownloadLogicalResponse extends HttpResponse {
  status: "200";
  body: DownloadResponseOutput;
}

/** Azure operation completed successfully. */
export interface ScopingConfigurationResourcesGet200Response
  extends HttpResponse {
  status: "200";
  body: ScopingConfigurationResourceOutput;
}

export interface ScopingConfigurationResourcesGetDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'ScopingConfigurationResource' update operation succeeded */
export interface ScopingConfigurationResourcesCreateOrUpdate200Response
  extends HttpResponse {
  status: "200";
  body: ScopingConfigurationResourceOutput;
}

/** Resource 'ScopingConfigurationResource' create operation succeeded */
export interface ScopingConfigurationResourcesCreateOrUpdate201Response
  extends HttpResponse {
  status: "201";
  body: ScopingConfigurationResourceOutput;
}

export interface ScopingConfigurationResourcesCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource deleted successfully. */
export interface ScopingConfigurationResourcesDelete200Response
  extends HttpResponse {
  status: "200";
}

/** Resource does not exist. */
export interface ScopingConfigurationResourcesDelete204Response
  extends HttpResponse {
  status: "204";
}

export interface ScopingConfigurationResourcesDeleteDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface ScopingConfigurationResourcesListByReportResource200Response
  extends HttpResponse {
  status: "200";
  body: ScopingConfigurationResourceListResultOutput;
}

export interface ScopingConfigurationResourcesListByReportResourceDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface EvidenceResourcesGet200Response extends HttpResponse {
  status: "200";
  body: EvidenceResourceOutput;
}

export interface EvidenceResourcesGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'EvidenceResource' update operation succeeded */
export interface EvidenceResourcesCreateOrUpdate200Response
  extends HttpResponse {
  status: "200";
  body: EvidenceResourceOutput;
}

/** Resource 'EvidenceResource' create operation succeeded */
export interface EvidenceResourcesCreateOrUpdate201Response
  extends HttpResponse {
  status: "201";
  body: EvidenceResourceOutput;
}

export interface EvidenceResourcesCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource deleted successfully. */
export interface EvidenceResourcesDelete200Response extends HttpResponse {
  status: "200";
}

/** Resource does not exist. */
export interface EvidenceResourcesDelete204Response extends HttpResponse {
  status: "204";
}

export interface EvidenceResourcesDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface EvidenceResourcesListByReportResource200Response
  extends HttpResponse {
  status: "200";
  body: EvidenceResourceListResultOutput;
}

export interface EvidenceResourcesListByReportResourceDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface EvidenceResourcesDownload200Response extends HttpResponse {
  status: "200";
  body: EvidenceFileDownloadResponseOutput;
}

export interface EvidenceResourcesDownloadDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface OperationsList200Response extends HttpResponse {
  status: "200";
  body: PagedOperationOutput;
}

export interface OperationsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface ProviderActionsCheckNameAvailability200Response
  extends HttpResponse {
  status: "200";
  body: CheckNameAvailabilityResponseOutput;
}

export interface ProviderActionsCheckNameAvailabilityDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface ProviderActionsGetCollectionCount200Response
  extends HttpResponse {
  status: "200";
  body: GetCollectionCountResponseOutput;
}

export interface ProviderActionsGetCollectionCountDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface ProviderActionsGetOverviewStatus200Response
  extends HttpResponse {
  status: "200";
  body: GetOverviewStatusResponseOutput;
}

export interface ProviderActionsGetOverviewStatusDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface ProviderActionsOnboard200Response extends HttpResponse {
  status: "200";
  body: OnboardResponseOutput;
}

export interface ProviderActionsOnboard202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource operation accepted. */
export interface ProviderActionsOnboard202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & ProviderActionsOnboard202Headers;
}

export interface ProviderActionsOnboardDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running onboard operation */
export interface ProviderActionsOnboardLogicalResponse extends HttpResponse {
  status: "200";
  body: OnboardResponseOutput;
}

/** Azure operation completed successfully. */
export interface ProviderActionsTriggerEvaluation200Response
  extends HttpResponse {
  status: "200";
  body: TriggerEvaluationResponseOutput;
}

export interface ProviderActionsTriggerEvaluation202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource operation accepted. */
export interface ProviderActionsTriggerEvaluation202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & ProviderActionsTriggerEvaluation202Headers;
}

export interface ProviderActionsTriggerEvaluationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running triggerEvaluation operation */
export interface ProviderActionsTriggerEvaluationLogicalResponse
  extends HttpResponse {
  status: "200";
  body: TriggerEvaluationResponseOutput;
}

/** Azure operation completed successfully. */
export interface ProviderActionsListInUseStorageAccounts200Response
  extends HttpResponse {
  status: "200";
  body: ListInUseStorageAccountsResponseOutput;
}

export interface ProviderActionsListInUseStorageAccountsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
