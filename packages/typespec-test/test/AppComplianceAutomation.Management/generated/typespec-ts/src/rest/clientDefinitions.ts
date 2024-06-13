// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ReportGetParameters,
  ReportCreateOrUpdateParameters,
  ReportUpdateParameters,
  ReportDeleteParameters,
  ReportListByTenantParameters,
  ReportSyncCertRecordParameters,
  ReportCheckNameAvailabilityParameters,
  ReportFixParameters,
  ReportGetScopingQuestionsParameters,
  ReportVerifyParameters,
  WebhookGetParameters,
  WebhookCreateOrUpdateParameters,
  WebhookUpdateParameters,
  WebhookDeleteParameters,
  WebhookListByReportResourceParameters,
  SnapshotGetParameters,
  SnapshotListByReportResourceParameters,
  SnapshotDownloadParameters,
  ScopingConfigurationGetParameters,
  ScopingConfigurationCreateOrUpdateParameters,
  ScopingConfigurationDeleteParameters,
  ScopingConfigurationListByReportResourceParameters,
  EvidenceGetParameters,
  EvidenceCreateOrUpdateParameters,
  EvidenceDeleteParameters,
  EvidenceListByReportResourceParameters,
  EvidenceDownloadParameters,
  OperationsListParameters,
  ProviderActionsCheckNameAvailabilityParameters,
  ProviderActionsGetCollectionCountParameters,
  ProviderActionsGetOverviewStatusParameters,
  ProviderActionsOnboardParameters,
  ProviderActionsTriggerEvaluationParameters,
  ProviderActionsListInUseStorageAccountsParameters,
} from "./parameters.js";
import {
  ReportGet200Response,
  ReportGetDefaultResponse,
  ReportCreateOrUpdate200Response,
  ReportCreateOrUpdate201Response,
  ReportCreateOrUpdateDefaultResponse,
  ReportUpdate200Response,
  ReportUpdate202Response,
  ReportUpdateDefaultResponse,
  ReportDelete202Response,
  ReportDelete204Response,
  ReportDeleteDefaultResponse,
  ReportListByTenant200Response,
  ReportListByTenantDefaultResponse,
  ReportSyncCertRecord200Response,
  ReportSyncCertRecord202Response,
  ReportSyncCertRecordDefaultResponse,
  ReportCheckNameAvailability200Response,
  ReportCheckNameAvailabilityDefaultResponse,
  ReportFix200Response,
  ReportFix202Response,
  ReportFixDefaultResponse,
  ReportGetScopingQuestions200Response,
  ReportGetScopingQuestionsDefaultResponse,
  ReportVerify200Response,
  ReportVerify202Response,
  ReportVerifyDefaultResponse,
  WebhookGet200Response,
  WebhookGetDefaultResponse,
  WebhookCreateOrUpdate200Response,
  WebhookCreateOrUpdate201Response,
  WebhookCreateOrUpdateDefaultResponse,
  WebhookUpdate200Response,
  WebhookUpdateDefaultResponse,
  WebhookDelete200Response,
  WebhookDelete204Response,
  WebhookDeleteDefaultResponse,
  WebhookListByReportResource200Response,
  WebhookListByReportResourceDefaultResponse,
  SnapshotGet200Response,
  SnapshotGetDefaultResponse,
  SnapshotListByReportResource200Response,
  SnapshotListByReportResourceDefaultResponse,
  SnapshotDownload200Response,
  SnapshotDownload202Response,
  SnapshotDownloadDefaultResponse,
  ScopingConfigurationGet200Response,
  ScopingConfigurationGetDefaultResponse,
  ScopingConfigurationCreateOrUpdate200Response,
  ScopingConfigurationCreateOrUpdate201Response,
  ScopingConfigurationCreateOrUpdateDefaultResponse,
  ScopingConfigurationDelete200Response,
  ScopingConfigurationDelete204Response,
  ScopingConfigurationDeleteDefaultResponse,
  ScopingConfigurationListByReportResource200Response,
  ScopingConfigurationListByReportResourceDefaultResponse,
  EvidenceGet200Response,
  EvidenceGetDefaultResponse,
  EvidenceCreateOrUpdate200Response,
  EvidenceCreateOrUpdate201Response,
  EvidenceCreateOrUpdateDefaultResponse,
  EvidenceDelete200Response,
  EvidenceDelete204Response,
  EvidenceDeleteDefaultResponse,
  EvidenceListByReportResource200Response,
  EvidenceListByReportResourceDefaultResponse,
  EvidenceDownload200Response,
  EvidenceDownloadDefaultResponse,
  OperationsList200Response,
  OperationsListDefaultResponse,
  ProviderActionsCheckNameAvailability200Response,
  ProviderActionsCheckNameAvailabilityDefaultResponse,
  ProviderActionsGetCollectionCount200Response,
  ProviderActionsGetCollectionCountDefaultResponse,
  ProviderActionsGetOverviewStatus200Response,
  ProviderActionsGetOverviewStatusDefaultResponse,
  ProviderActionsOnboard200Response,
  ProviderActionsOnboard202Response,
  ProviderActionsOnboardDefaultResponse,
  ProviderActionsTriggerEvaluation200Response,
  ProviderActionsTriggerEvaluation202Response,
  ProviderActionsTriggerEvaluationDefaultResponse,
  ProviderActionsListInUseStorageAccounts200Response,
  ProviderActionsListInUseStorageAccountsDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ReportGet {
  /** Get the AppComplianceAutomation report and its properties. */
  get(
    options?: ReportGetParameters,
  ): StreamableMethod<ReportGet200Response | ReportGetDefaultResponse>;
  /** Create a new AppComplianceAutomation report or update an exiting AppComplianceAutomation report. */
  put(
    options: ReportCreateOrUpdateParameters,
  ): StreamableMethod<
    | ReportCreateOrUpdate200Response
    | ReportCreateOrUpdate201Response
    | ReportCreateOrUpdateDefaultResponse
  >;
  /** Update an exiting AppComplianceAutomation report. */
  patch(
    options: ReportUpdateParameters,
  ): StreamableMethod<
    | ReportUpdate200Response
    | ReportUpdate202Response
    | ReportUpdateDefaultResponse
  >;
  /** Delete an AppComplianceAutomation report. */
  delete(
    options?: ReportDeleteParameters,
  ): StreamableMethod<
    | ReportDelete202Response
    | ReportDelete204Response
    | ReportDeleteDefaultResponse
  >;
}

export interface ReportListByTenant {
  /** Get the AppComplianceAutomation report list for the tenant. */
  get(
    options?: ReportListByTenantParameters,
  ): StreamableMethod<
    ReportListByTenant200Response | ReportListByTenantDefaultResponse
  >;
}

export interface ReportSyncCertRecord {
  /** Synchronize attestation record from app compliance. */
  post(
    options: ReportSyncCertRecordParameters,
  ): StreamableMethod<
    | ReportSyncCertRecord200Response
    | ReportSyncCertRecord202Response
    | ReportSyncCertRecordDefaultResponse
  >;
}

export interface ReportCheckNameAvailability {
  /** Checks the report's nested resource name availability, e.g: Webhooks, Evidences, Snapshots. */
  post(
    options: ReportCheckNameAvailabilityParameters,
  ): StreamableMethod<
    | ReportCheckNameAvailability200Response
    | ReportCheckNameAvailabilityDefaultResponse
  >;
}

export interface ReportFix {
  /** Fix the AppComplianceAutomation report error. e.g: App Compliance Automation Tool service unregistered, automation removed. */
  post(
    options: ReportFixParameters,
  ): StreamableMethod<
    ReportFix200Response | ReportFix202Response | ReportFixDefaultResponse
  >;
}

export interface ReportGetScopingQuestions {
  /** Fix the AppComplianceAutomation report error. e.g: App Compliance Automation Tool service unregistered, automation removed. */
  post(
    options: ReportGetScopingQuestionsParameters,
  ): StreamableMethod<
    | ReportGetScopingQuestions200Response
    | ReportGetScopingQuestionsDefaultResponse
  >;
}

export interface ReportVerify {
  /** Verify the AppComplianceAutomation report health status. */
  post(
    options: ReportVerifyParameters,
  ): StreamableMethod<
    | ReportVerify200Response
    | ReportVerify202Response
    | ReportVerifyDefaultResponse
  >;
}

export interface WebhookGet {
  /** Get the AppComplianceAutomation webhook and its properties. */
  get(
    options?: WebhookGetParameters,
  ): StreamableMethod<WebhookGet200Response | WebhookGetDefaultResponse>;
  /** Create a new AppComplianceAutomation webhook or update an exiting AppComplianceAutomation webhook. */
  put(
    options: WebhookCreateOrUpdateParameters,
  ): StreamableMethod<
    | WebhookCreateOrUpdate200Response
    | WebhookCreateOrUpdate201Response
    | WebhookCreateOrUpdateDefaultResponse
  >;
  /** Update an exiting AppComplianceAutomation webhook. */
  patch(
    options: WebhookUpdateParameters,
  ): StreamableMethod<WebhookUpdate200Response | WebhookUpdateDefaultResponse>;
  /** Delete an AppComplianceAutomation webhook. */
  delete(
    options?: WebhookDeleteParameters,
  ): StreamableMethod<
    | WebhookDelete200Response
    | WebhookDelete204Response
    | WebhookDeleteDefaultResponse
  >;
}

export interface WebhookListByReportResource {
  /** Get the AppComplianceAutomation webhook list. */
  get(
    options?: WebhookListByReportResourceParameters,
  ): StreamableMethod<
    | WebhookListByReportResource200Response
    | WebhookListByReportResourceDefaultResponse
  >;
}

export interface SnapshotGet {
  /** Get the AppComplianceAutomation snapshot and its properties. */
  get(
    options?: SnapshotGetParameters,
  ): StreamableMethod<SnapshotGet200Response | SnapshotGetDefaultResponse>;
}

export interface SnapshotListByReportResource {
  /** Get the AppComplianceAutomation snapshot list. */
  get(
    options?: SnapshotListByReportResourceParameters,
  ): StreamableMethod<
    | SnapshotListByReportResource200Response
    | SnapshotListByReportResourceDefaultResponse
  >;
}

export interface SnapshotDownload {
  /** Download compliance needs from snapshot, like: Compliance Report, Resource List. */
  post(
    options: SnapshotDownloadParameters,
  ): StreamableMethod<
    | SnapshotDownload200Response
    | SnapshotDownload202Response
    | SnapshotDownloadDefaultResponse
  >;
}

export interface ScopingConfigurationGet {
  /** Get the AppComplianceAutomation scoping configuration of the specific report. */
  get(
    options?: ScopingConfigurationGetParameters,
  ): StreamableMethod<
    ScopingConfigurationGet200Response | ScopingConfigurationGetDefaultResponse
  >;
  /** Get the AppComplianceAutomation scoping configuration of the specific report. */
  put(
    options: ScopingConfigurationCreateOrUpdateParameters,
  ): StreamableMethod<
    | ScopingConfigurationCreateOrUpdate200Response
    | ScopingConfigurationCreateOrUpdate201Response
    | ScopingConfigurationCreateOrUpdateDefaultResponse
  >;
  /** Clean the AppComplianceAutomation scoping configuration of the specific report. */
  delete(
    options?: ScopingConfigurationDeleteParameters,
  ): StreamableMethod<
    | ScopingConfigurationDelete200Response
    | ScopingConfigurationDelete204Response
    | ScopingConfigurationDeleteDefaultResponse
  >;
}

export interface ScopingConfigurationListByReportResource {
  /** Returns a list format of the singleton scopingConfiguration for a specified report. */
  get(
    options?: ScopingConfigurationListByReportResourceParameters,
  ): StreamableMethod<
    | ScopingConfigurationListByReportResource200Response
    | ScopingConfigurationListByReportResourceDefaultResponse
  >;
}

export interface EvidenceGet {
  /** Get the evidence metadata */
  get(
    options?: EvidenceGetParameters,
  ): StreamableMethod<EvidenceGet200Response | EvidenceGetDefaultResponse>;
  /** Create or Update an evidence a specified report */
  put(
    options: EvidenceCreateOrUpdateParameters,
  ): StreamableMethod<
    | EvidenceCreateOrUpdate200Response
    | EvidenceCreateOrUpdate201Response
    | EvidenceCreateOrUpdateDefaultResponse
  >;
  /** Delete an existent evidence from a specified report */
  delete(
    options?: EvidenceDeleteParameters,
  ): StreamableMethod<
    | EvidenceDelete200Response
    | EvidenceDelete204Response
    | EvidenceDeleteDefaultResponse
  >;
}

export interface EvidenceListByReportResource {
  /** Returns a paginated list of evidences for a specified report. */
  get(
    options?: EvidenceListByReportResourceParameters,
  ): StreamableMethod<
    | EvidenceListByReportResource200Response
    | EvidenceListByReportResourceDefaultResponse
  >;
}

export interface EvidenceDownload {
  /** Download evidence file. */
  post(
    options: EvidenceDownloadParameters,
  ): StreamableMethod<
    EvidenceDownload200Response | EvidenceDownloadDefaultResponse
  >;
}

export interface OperationsList {
  /** List the operations for the provider */
  get(
    options?: OperationsListParameters,
  ): StreamableMethod<
    OperationsList200Response | OperationsListDefaultResponse
  >;
}

export interface ProviderActionsCheckNameAvailability {
  /** Check if the given name is available for a report. */
  post(
    options: ProviderActionsCheckNameAvailabilityParameters,
  ): StreamableMethod<
    | ProviderActionsCheckNameAvailability200Response
    | ProviderActionsCheckNameAvailabilityDefaultResponse
  >;
}

export interface ProviderActionsGetCollectionCount {
  /** Get the count of reports. */
  post(
    options: ProviderActionsGetCollectionCountParameters,
  ): StreamableMethod<
    | ProviderActionsGetCollectionCount200Response
    | ProviderActionsGetCollectionCountDefaultResponse
  >;
}

export interface ProviderActionsGetOverviewStatus {
  /** Get the resource overview status. */
  post(
    options: ProviderActionsGetOverviewStatusParameters,
  ): StreamableMethod<
    | ProviderActionsGetOverviewStatus200Response
    | ProviderActionsGetOverviewStatusDefaultResponse
  >;
}

export interface ProviderActionsOnboard {
  /** Onboard given subscriptions to Microsoft.AppComplianceAutomation provider. */
  post(
    options: ProviderActionsOnboardParameters,
  ): StreamableMethod<
    | ProviderActionsOnboard200Response
    | ProviderActionsOnboard202Response
    | ProviderActionsOnboardDefaultResponse
  >;
}

export interface ProviderActionsTriggerEvaluation {
  /** Trigger quick evaluation for the given subscriptions. */
  post(
    options: ProviderActionsTriggerEvaluationParameters,
  ): StreamableMethod<
    | ProviderActionsTriggerEvaluation200Response
    | ProviderActionsTriggerEvaluation202Response
    | ProviderActionsTriggerEvaluationDefaultResponse
  >;
}

export interface ProviderActionsListInUseStorageAccounts {
  /** List the storage accounts which are in use by related reports */
  post(
    options: ProviderActionsListInUseStorageAccountsParameters,
  ): StreamableMethod<
    | ProviderActionsListInUseStorageAccounts200Response
    | ProviderActionsListInUseStorageAccountsDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}' has methods for the following verbs: get, put, patch, delete */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}",
    reportName: string,
  ): ReportGet;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports' has methods for the following verbs: get */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports",
  ): ReportListByTenant;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}/syncCertRecord' has methods for the following verbs: post */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/syncCertRecord",
    reportName: string,
  ): ReportSyncCertRecord;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}/checkNameAvailability' has methods for the following verbs: post */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/checkNameAvailability",
    reportName: string,
  ): ReportCheckNameAvailability;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}/fix' has methods for the following verbs: post */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/fix",
    reportName: string,
  ): ReportFix;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}/getScopingQuestions' has methods for the following verbs: post */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/getScopingQuestions",
    reportName: string,
  ): ReportGetScopingQuestions;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}/verify' has methods for the following verbs: post */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/verify",
    reportName: string,
  ): ReportVerify;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}/webhooks/\{webhookName\}' has methods for the following verbs: get, put, patch, delete */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}",
    reportName: string,
    webhookName: string,
  ): WebhookGet;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}/webhooks' has methods for the following verbs: get */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks",
    reportName: string,
  ): WebhookListByReportResource;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}/snapshots/\{snapshotName\}' has methods for the following verbs: get */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/snapshots/{snapshotName}",
    reportName: string,
    snapshotName: string,
  ): SnapshotGet;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}/snapshots' has methods for the following verbs: get */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/snapshots",
    reportName: string,
  ): SnapshotListByReportResource;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}/snapshots/\{snapshotName\}/download' has methods for the following verbs: post */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/snapshots/{snapshotName}/download",
    reportName: string,
    snapshotName: string,
  ): SnapshotDownload;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}/scopingConfigurations/\{scopingConfigurationName\}' has methods for the following verbs: get, put, delete */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations/{scopingConfigurationName}",
    reportName: string,
    scopingConfigurationName: string,
  ): ScopingConfigurationGet;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}/scopingConfigurations' has methods for the following verbs: get */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations",
    reportName: string,
  ): ScopingConfigurationListByReportResource;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}/evidences/\{evidenceName\}' has methods for the following verbs: get, put, delete */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences/{evidenceName}",
    reportName: string,
    evidenceName: string,
  ): EvidenceGet;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}/evidences' has methods for the following verbs: get */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences",
    reportName: string,
  ): EvidenceListByReportResource;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}/evidences/\{evidenceName\}/download' has methods for the following verbs: post */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences/{evidenceName}/download",
    reportName: string,
    evidenceName: string,
  ): EvidenceDownload;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/operations' has methods for the following verbs: get */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/operations",
  ): OperationsList;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/checkNameAvailability' has methods for the following verbs: post */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/checkNameAvailability",
  ): ProviderActionsCheckNameAvailability;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/getCollectionCount' has methods for the following verbs: post */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/getCollectionCount",
  ): ProviderActionsGetCollectionCount;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/getOverviewStatus' has methods for the following verbs: post */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/getOverviewStatus",
  ): ProviderActionsGetOverviewStatus;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/onboard' has methods for the following verbs: post */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/onboard",
  ): ProviderActionsOnboard;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/triggerEvaluation' has methods for the following verbs: post */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/triggerEvaluation",
  ): ProviderActionsTriggerEvaluation;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/listInUseStorageAccounts' has methods for the following verbs: post */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/listInUseStorageAccounts",
  ): ProviderActionsListInUseStorageAccounts;
}

export type AppComplianceAutomationContext = Client & {
  path: Routes;
};
