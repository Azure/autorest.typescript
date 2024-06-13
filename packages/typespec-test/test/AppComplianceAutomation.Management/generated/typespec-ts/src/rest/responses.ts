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
export interface ReportGet200Response extends HttpResponse {
  status: "200";
  body: ReportResourceOutput;
}

export interface ReportGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'ReportResource' update operation succeeded */
export interface ReportCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: ReportResourceOutput;
}

export interface ReportCreateOrUpdate201Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource 'ReportResource' create operation succeeded */
export interface ReportCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: ReportResourceOutput;
  headers: RawHttpHeaders & ReportCreateOrUpdate201Headers;
}

export interface ReportCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running createOrUpdate operation */
export interface ReportCreateOrUpdateLogicalResponse extends HttpResponse {
  status: "200";
  body: ReportResourceOutput;
}

/** Azure operation completed successfully. */
export interface ReportUpdate200Response extends HttpResponse {
  status: "200";
  body: ReportResourceOutput;
}

export interface ReportUpdate202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource update request accepted. */
export interface ReportUpdate202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & ReportUpdate202Headers;
}

export interface ReportUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running update operation */
export interface ReportUpdateLogicalResponse extends HttpResponse {
  status: "200";
  body: ReportResourceOutput;
}

export interface ReportDelete202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource deletion accepted. */
export interface ReportDelete202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & ReportDelete202Headers;
}

/** Resource does not exist. */
export interface ReportDelete204Response extends HttpResponse {
  status: "204";
}

export interface ReportDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running delete operation */
export interface ReportDeleteLogicalResponse extends HttpResponse {
  status: "200";
}

/** Azure operation completed successfully. */
export interface ReportListByTenant200Response extends HttpResponse {
  status: "200";
  body: ReportResourceListResultOutput;
}

export interface ReportListByTenantDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface ReportSyncCertRecord200Response extends HttpResponse {
  status: "200";
  body: SyncCertRecordResponseOutput;
}

export interface ReportSyncCertRecord202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource operation accepted. */
export interface ReportSyncCertRecord202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & ReportSyncCertRecord202Headers;
}

export interface ReportSyncCertRecordDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running syncCertRecord operation */
export interface ReportSyncCertRecordLogicalResponse extends HttpResponse {
  status: "200";
  body: SyncCertRecordResponseOutput;
}

/** Azure operation completed successfully. */
export interface ReportCheckNameAvailability200Response extends HttpResponse {
  status: "200";
  body: CheckNameAvailabilityResponseOutput;
}

export interface ReportCheckNameAvailabilityDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface ReportFix200Response extends HttpResponse {
  status: "200";
  body: ReportFixResultOutput;
}

export interface ReportFix202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource operation accepted. */
export interface ReportFix202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & ReportFix202Headers;
}

export interface ReportFixDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running fix operation */
export interface ReportFixLogicalResponse extends HttpResponse {
  status: "200";
  body: ReportFixResultOutput;
}

/** Azure operation completed successfully. */
export interface ReportGetScopingQuestions200Response extends HttpResponse {
  status: "200";
  body: ScopingQuestionsOutput;
}

export interface ReportGetScopingQuestionsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface ReportVerify200Response extends HttpResponse {
  status: "200";
  body: ReportVerificationResultOutput;
}

export interface ReportVerify202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource operation accepted. */
export interface ReportVerify202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & ReportVerify202Headers;
}

export interface ReportVerifyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running verify operation */
export interface ReportVerifyLogicalResponse extends HttpResponse {
  status: "200";
  body: ReportVerificationResultOutput;
}

/** Azure operation completed successfully. */
export interface WebhookGet200Response extends HttpResponse {
  status: "200";
  body: WebhookResourceOutput;
}

export interface WebhookGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'WebhookResource' update operation succeeded */
export interface WebhookCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: WebhookResourceOutput;
}

/** Resource 'WebhookResource' create operation succeeded */
export interface WebhookCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: WebhookResourceOutput;
}

export interface WebhookCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface WebhookUpdate200Response extends HttpResponse {
  status: "200";
  body: WebhookResourceOutput;
}

export interface WebhookUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource deleted successfully. */
export interface WebhookDelete200Response extends HttpResponse {
  status: "200";
}

/** Resource does not exist. */
export interface WebhookDelete204Response extends HttpResponse {
  status: "204";
}

export interface WebhookDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface WebhookListByReportResource200Response extends HttpResponse {
  status: "200";
  body: WebhookResourceListResultOutput;
}

export interface WebhookListByReportResourceDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface SnapshotGet200Response extends HttpResponse {
  status: "200";
  body: SnapshotResourceOutput;
}

export interface SnapshotGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface SnapshotListByReportResource200Response extends HttpResponse {
  status: "200";
  body: SnapshotResourceListResultOutput;
}

export interface SnapshotListByReportResourceDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface SnapshotDownload200Response extends HttpResponse {
  status: "200";
  body: DownloadResponseOutput;
}

export interface SnapshotDownload202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource operation accepted. */
export interface SnapshotDownload202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & SnapshotDownload202Headers;
}

export interface SnapshotDownloadDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running download operation */
export interface SnapshotDownloadLogicalResponse extends HttpResponse {
  status: "200";
  body: DownloadResponseOutput;
}

/** Azure operation completed successfully. */
export interface ScopingConfigurationGet200Response extends HttpResponse {
  status: "200";
  body: ScopingConfigurationResourceOutput;
}

export interface ScopingConfigurationGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'ScopingConfigurationResource' update operation succeeded */
export interface ScopingConfigurationCreateOrUpdate200Response
  extends HttpResponse {
  status: "200";
  body: ScopingConfigurationResourceOutput;
}

/** Resource 'ScopingConfigurationResource' create operation succeeded */
export interface ScopingConfigurationCreateOrUpdate201Response
  extends HttpResponse {
  status: "201";
  body: ScopingConfigurationResourceOutput;
}

export interface ScopingConfigurationCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource deleted successfully. */
export interface ScopingConfigurationDelete200Response extends HttpResponse {
  status: "200";
}

/** Resource does not exist. */
export interface ScopingConfigurationDelete204Response extends HttpResponse {
  status: "204";
}

export interface ScopingConfigurationDeleteDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface ScopingConfigurationListByReportResource200Response
  extends HttpResponse {
  status: "200";
  body: ScopingConfigurationResourceListResultOutput;
}

export interface ScopingConfigurationListByReportResourceDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface EvidenceGet200Response extends HttpResponse {
  status: "200";
  body: EvidenceResourceOutput;
}

export interface EvidenceGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'EvidenceResource' update operation succeeded */
export interface EvidenceCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: EvidenceResourceOutput;
}

/** Resource 'EvidenceResource' create operation succeeded */
export interface EvidenceCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: EvidenceResourceOutput;
}

export interface EvidenceCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource deleted successfully. */
export interface EvidenceDelete200Response extends HttpResponse {
  status: "200";
}

/** Resource does not exist. */
export interface EvidenceDelete204Response extends HttpResponse {
  status: "204";
}

export interface EvidenceDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface EvidenceListByReportResource200Response extends HttpResponse {
  status: "200";
  body: EvidenceResourceListResultOutput;
}

export interface EvidenceListByReportResourceDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface EvidenceDownload200Response extends HttpResponse {
  status: "200";
  body: EvidenceFileDownloadResponseOutput;
}

export interface EvidenceDownloadDefaultResponse extends HttpResponse {
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
