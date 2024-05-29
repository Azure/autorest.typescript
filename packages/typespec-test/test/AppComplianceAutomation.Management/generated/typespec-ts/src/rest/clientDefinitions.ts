// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ReportResourcesGetParameters,
  ReportResourcesCreateOrUpdateParameters,
  ReportResourcesUpdateParameters,
  ReportResourcesDeleteParameters,
  ReportResourcesListByTenantParameters,
  ReportResourcesSyncCertRecordParameters,
  ReportResourcesCheckNameAvailabilityParameters,
  ReportResourcesFixParameters,
  ReportResourcesGetScopingQuestionsParameters,
  ReportResourcesVerifyParameters,
  WebhookResourcesGetParameters,
  WebhookResourcesCreateOrUpdateParameters,
  WebhookResourcesUpdateParameters,
  WebhookResourcesDeleteParameters,
  WebhookResourcesListByReportResourceParameters,
  SnapshotResourcesGetParameters,
  SnapshotResourcesListByReportResourceParameters,
  SnapshotResourcesDownloadParameters,
  ScopingConfigurationResourcesGetParameters,
  ScopingConfigurationResourcesCreateOrUpdateParameters,
  ScopingConfigurationResourcesDeleteParameters,
  ScopingConfigurationResourcesListByReportResourceParameters,
  EvidenceResourcesGetParameters,
  EvidenceResourcesCreateOrUpdateParameters,
  EvidenceResourcesDeleteParameters,
  EvidenceResourcesListByReportResourceParameters,
  EvidenceResourcesDownloadParameters,
  OperationsListParameters,
  ProviderActionsCheckNameAvailabilityParameters,
  ProviderActionsGetCollectionCountParameters,
  ProviderActionsGetOverviewStatusParameters,
  ProviderActionsOnboardParameters,
  ProviderActionsTriggerEvaluationParameters,
  ProviderActionsListInUseStorageAccountsParameters,
} from "./parameters.js";
import {
  ReportResourcesGet200Response,
  ReportResourcesGetDefaultResponse,
  ReportResourcesCreateOrUpdate200Response,
  ReportResourcesCreateOrUpdate201Response,
  ReportResourcesCreateOrUpdateDefaultResponse,
  ReportResourcesUpdate200Response,
  ReportResourcesUpdate202Response,
  ReportResourcesUpdateDefaultResponse,
  ReportResourcesDelete202Response,
  ReportResourcesDelete204Response,
  ReportResourcesDeleteDefaultResponse,
  ReportResourcesListByTenant200Response,
  ReportResourcesListByTenantDefaultResponse,
  ReportResourcesSyncCertRecord200Response,
  ReportResourcesSyncCertRecord202Response,
  ReportResourcesSyncCertRecordDefaultResponse,
  ReportResourcesCheckNameAvailability200Response,
  ReportResourcesCheckNameAvailabilityDefaultResponse,
  ReportResourcesFix200Response,
  ReportResourcesFix202Response,
  ReportResourcesFixDefaultResponse,
  ReportResourcesGetScopingQuestions200Response,
  ReportResourcesGetScopingQuestionsDefaultResponse,
  ReportResourcesVerify200Response,
  ReportResourcesVerify202Response,
  ReportResourcesVerifyDefaultResponse,
  WebhookResourcesGet200Response,
  WebhookResourcesGetDefaultResponse,
  WebhookResourcesCreateOrUpdate200Response,
  WebhookResourcesCreateOrUpdate201Response,
  WebhookResourcesCreateOrUpdateDefaultResponse,
  WebhookResourcesUpdate200Response,
  WebhookResourcesUpdateDefaultResponse,
  WebhookResourcesDelete200Response,
  WebhookResourcesDelete204Response,
  WebhookResourcesDeleteDefaultResponse,
  WebhookResourcesListByReportResource200Response,
  WebhookResourcesListByReportResourceDefaultResponse,
  SnapshotResourcesGet200Response,
  SnapshotResourcesGetDefaultResponse,
  SnapshotResourcesListByReportResource200Response,
  SnapshotResourcesListByReportResourceDefaultResponse,
  SnapshotResourcesDownload200Response,
  SnapshotResourcesDownload202Response,
  SnapshotResourcesDownloadDefaultResponse,
  ScopingConfigurationResourcesGet200Response,
  ScopingConfigurationResourcesGetDefaultResponse,
  ScopingConfigurationResourcesCreateOrUpdate200Response,
  ScopingConfigurationResourcesCreateOrUpdate201Response,
  ScopingConfigurationResourcesCreateOrUpdateDefaultResponse,
  ScopingConfigurationResourcesDelete200Response,
  ScopingConfigurationResourcesDelete204Response,
  ScopingConfigurationResourcesDeleteDefaultResponse,
  ScopingConfigurationResourcesListByReportResource200Response,
  ScopingConfigurationResourcesListByReportResourceDefaultResponse,
  EvidenceResourcesGet200Response,
  EvidenceResourcesGetDefaultResponse,
  EvidenceResourcesCreateOrUpdate200Response,
  EvidenceResourcesCreateOrUpdate201Response,
  EvidenceResourcesCreateOrUpdateDefaultResponse,
  EvidenceResourcesDelete200Response,
  EvidenceResourcesDelete204Response,
  EvidenceResourcesDeleteDefaultResponse,
  EvidenceResourcesListByReportResource200Response,
  EvidenceResourcesListByReportResourceDefaultResponse,
  EvidenceResourcesDownload200Response,
  EvidenceResourcesDownloadDefaultResponse,
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

export interface ReportResourcesGet {
  /** Get the AppComplianceAutomation report and its properties. */
  get(
    options?: ReportResourcesGetParameters,
  ): StreamableMethod<
    ReportResourcesGet200Response | ReportResourcesGetDefaultResponse
  >;
  /** Create a new AppComplianceAutomation report or update an exiting AppComplianceAutomation report. */
  put(
    options: ReportResourcesCreateOrUpdateParameters,
  ): StreamableMethod<
    | ReportResourcesCreateOrUpdate200Response
    | ReportResourcesCreateOrUpdate201Response
    | ReportResourcesCreateOrUpdateDefaultResponse
  >;
  /** Update an exiting AppComplianceAutomation report. */
  patch(
    options: ReportResourcesUpdateParameters,
  ): StreamableMethod<
    | ReportResourcesUpdate200Response
    | ReportResourcesUpdate202Response
    | ReportResourcesUpdateDefaultResponse
  >;
  /** Delete an AppComplianceAutomation report. */
  delete(
    options?: ReportResourcesDeleteParameters,
  ): StreamableMethod<
    | ReportResourcesDelete202Response
    | ReportResourcesDelete204Response
    | ReportResourcesDeleteDefaultResponse
  >;
}

export interface ReportResourcesListByTenant {
  /** Get the AppComplianceAutomation report list for the tenant. */
  get(
    options?: ReportResourcesListByTenantParameters,
  ): StreamableMethod<
    | ReportResourcesListByTenant200Response
    | ReportResourcesListByTenantDefaultResponse
  >;
}

export interface ReportResourcesSyncCertRecord {
  /** Synchronize attestation record from app compliance. */
  post(
    options: ReportResourcesSyncCertRecordParameters,
  ): StreamableMethod<
    | ReportResourcesSyncCertRecord200Response
    | ReportResourcesSyncCertRecord202Response
    | ReportResourcesSyncCertRecordDefaultResponse
  >;
}

export interface ReportResourcesCheckNameAvailability {
  /** Checks the report's nested resource name availability, e.g: Webhooks, Evidences, Snapshots. */
  post(
    options: ReportResourcesCheckNameAvailabilityParameters,
  ): StreamableMethod<
    | ReportResourcesCheckNameAvailability200Response
    | ReportResourcesCheckNameAvailabilityDefaultResponse
  >;
}

export interface ReportResourcesFix {
  /** Fix the AppComplianceAutomation report error. e.g: App Compliance Automation Tool service unregistered, automation removed. */
  post(
    options: ReportResourcesFixParameters,
  ): StreamableMethod<
    | ReportResourcesFix200Response
    | ReportResourcesFix202Response
    | ReportResourcesFixDefaultResponse
  >;
}

export interface ReportResourcesGetScopingQuestions {
  /** Fix the AppComplianceAutomation report error. e.g: App Compliance Automation Tool service unregistered, automation removed. */
  post(
    options: ReportResourcesGetScopingQuestionsParameters,
  ): StreamableMethod<
    | ReportResourcesGetScopingQuestions200Response
    | ReportResourcesGetScopingQuestionsDefaultResponse
  >;
}

export interface ReportResourcesVerify {
  /** Verify the AppComplianceAutomation report health status. */
  post(
    options: ReportResourcesVerifyParameters,
  ): StreamableMethod<
    | ReportResourcesVerify200Response
    | ReportResourcesVerify202Response
    | ReportResourcesVerifyDefaultResponse
  >;
}

export interface WebhookResourcesGet {
  /** Get the AppComplianceAutomation webhook and its properties. */
  get(
    options?: WebhookResourcesGetParameters,
  ): StreamableMethod<
    WebhookResourcesGet200Response | WebhookResourcesGetDefaultResponse
  >;
  /** Create a new AppComplianceAutomation webhook or update an exiting AppComplianceAutomation webhook. */
  put(
    options: WebhookResourcesCreateOrUpdateParameters,
  ): StreamableMethod<
    | WebhookResourcesCreateOrUpdate200Response
    | WebhookResourcesCreateOrUpdate201Response
    | WebhookResourcesCreateOrUpdateDefaultResponse
  >;
  /** Update an exiting AppComplianceAutomation webhook. */
  patch(
    options: WebhookResourcesUpdateParameters,
  ): StreamableMethod<
    WebhookResourcesUpdate200Response | WebhookResourcesUpdateDefaultResponse
  >;
  /** Delete an AppComplianceAutomation webhook. */
  delete(
    options?: WebhookResourcesDeleteParameters,
  ): StreamableMethod<
    | WebhookResourcesDelete200Response
    | WebhookResourcesDelete204Response
    | WebhookResourcesDeleteDefaultResponse
  >;
}

export interface WebhookResourcesListByReportResource {
  /** Get the AppComplianceAutomation webhook list. */
  get(
    options?: WebhookResourcesListByReportResourceParameters,
  ): StreamableMethod<
    | WebhookResourcesListByReportResource200Response
    | WebhookResourcesListByReportResourceDefaultResponse
  >;
}

export interface SnapshotResourcesGet {
  /** Get the AppComplianceAutomation snapshot and its properties. */
  get(
    options?: SnapshotResourcesGetParameters,
  ): StreamableMethod<
    SnapshotResourcesGet200Response | SnapshotResourcesGetDefaultResponse
  >;
}

export interface SnapshotResourcesListByReportResource {
  /** Get the AppComplianceAutomation snapshot list. */
  get(
    options?: SnapshotResourcesListByReportResourceParameters,
  ): StreamableMethod<
    | SnapshotResourcesListByReportResource200Response
    | SnapshotResourcesListByReportResourceDefaultResponse
  >;
}

export interface SnapshotResourcesDownload {
  /** Download compliance needs from snapshot, like: Compliance Report, Resource List. */
  post(
    options: SnapshotResourcesDownloadParameters,
  ): StreamableMethod<
    | SnapshotResourcesDownload200Response
    | SnapshotResourcesDownload202Response
    | SnapshotResourcesDownloadDefaultResponse
  >;
}

export interface ScopingConfigurationResourcesGet {
  /** Get the AppComplianceAutomation scoping configuration of the specific report. */
  get(
    options?: ScopingConfigurationResourcesGetParameters,
  ): StreamableMethod<
    | ScopingConfigurationResourcesGet200Response
    | ScopingConfigurationResourcesGetDefaultResponse
  >;
  /** Get the AppComplianceAutomation scoping configuration of the specific report. */
  put(
    options: ScopingConfigurationResourcesCreateOrUpdateParameters,
  ): StreamableMethod<
    | ScopingConfigurationResourcesCreateOrUpdate200Response
    | ScopingConfigurationResourcesCreateOrUpdate201Response
    | ScopingConfigurationResourcesCreateOrUpdateDefaultResponse
  >;
  /** Clean the AppComplianceAutomation scoping configuration of the specific report. */
  delete(
    options?: ScopingConfigurationResourcesDeleteParameters,
  ): StreamableMethod<
    | ScopingConfigurationResourcesDelete200Response
    | ScopingConfigurationResourcesDelete204Response
    | ScopingConfigurationResourcesDeleteDefaultResponse
  >;
}

export interface ScopingConfigurationResourcesListByReportResource {
  /** Returns a list format of the singleton scopingConfiguration for a specified report. */
  get(
    options?: ScopingConfigurationResourcesListByReportResourceParameters,
  ): StreamableMethod<
    | ScopingConfigurationResourcesListByReportResource200Response
    | ScopingConfigurationResourcesListByReportResourceDefaultResponse
  >;
}

export interface EvidenceResourcesGet {
  /** Get the evidence metadata */
  get(
    options?: EvidenceResourcesGetParameters,
  ): StreamableMethod<
    EvidenceResourcesGet200Response | EvidenceResourcesGetDefaultResponse
  >;
  /** Create or Update an evidence a specified report */
  put(
    options: EvidenceResourcesCreateOrUpdateParameters,
  ): StreamableMethod<
    | EvidenceResourcesCreateOrUpdate200Response
    | EvidenceResourcesCreateOrUpdate201Response
    | EvidenceResourcesCreateOrUpdateDefaultResponse
  >;
  /** Delete an existent evidence from a specified report */
  delete(
    options?: EvidenceResourcesDeleteParameters,
  ): StreamableMethod<
    | EvidenceResourcesDelete200Response
    | EvidenceResourcesDelete204Response
    | EvidenceResourcesDeleteDefaultResponse
  >;
}

export interface EvidenceResourcesListByReportResource {
  /** Returns a paginated list of evidences for a specified report. */
  get(
    options?: EvidenceResourcesListByReportResourceParameters,
  ): StreamableMethod<
    | EvidenceResourcesListByReportResource200Response
    | EvidenceResourcesListByReportResourceDefaultResponse
  >;
}

export interface EvidenceResourcesDownload {
  /** Download evidence file. */
  post(
    options: EvidenceResourcesDownloadParameters,
  ): StreamableMethod<
    | EvidenceResourcesDownload200Response
    | EvidenceResourcesDownloadDefaultResponse
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
  ): ReportResourcesGet;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports' has methods for the following verbs: get */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports",
  ): ReportResourcesListByTenant;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}/syncCertRecord' has methods for the following verbs: post */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/syncCertRecord",
    reportName: string,
  ): ReportResourcesSyncCertRecord;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}/checkNameAvailability' has methods for the following verbs: post */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/checkNameAvailability",
    reportName: string,
  ): ReportResourcesCheckNameAvailability;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}/fix' has methods for the following verbs: post */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/fix",
    reportName: string,
  ): ReportResourcesFix;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}/getScopingQuestions' has methods for the following verbs: post */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/getScopingQuestions",
    reportName: string,
  ): ReportResourcesGetScopingQuestions;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}/verify' has methods for the following verbs: post */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/verify",
    reportName: string,
  ): ReportResourcesVerify;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}/webhooks/\{webhookName\}' has methods for the following verbs: get, put, patch, delete */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}",
    reportName: string,
    webhookName: string,
  ): WebhookResourcesGet;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}/webhooks' has methods for the following verbs: get */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks",
    reportName: string,
  ): WebhookResourcesListByReportResource;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}/snapshots/\{snapshotName\}' has methods for the following verbs: get */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/snapshots/{snapshotName}",
    reportName: string,
    snapshotName: string,
  ): SnapshotResourcesGet;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}/snapshots' has methods for the following verbs: get */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/snapshots",
    reportName: string,
  ): SnapshotResourcesListByReportResource;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}/snapshots/\{snapshotName\}/download' has methods for the following verbs: post */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/snapshots/{snapshotName}/download",
    reportName: string,
    snapshotName: string,
  ): SnapshotResourcesDownload;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}/scopingConfigurations/\{scopingConfigurationName\}' has methods for the following verbs: get, put, delete */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations/{scopingConfigurationName}",
    reportName: string,
    scopingConfigurationName: string,
  ): ScopingConfigurationResourcesGet;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}/scopingConfigurations' has methods for the following verbs: get */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations",
    reportName: string,
  ): ScopingConfigurationResourcesListByReportResource;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}/evidences/\{evidenceName\}' has methods for the following verbs: get, put, delete */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences/{evidenceName}",
    reportName: string,
    evidenceName: string,
  ): EvidenceResourcesGet;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}/evidences' has methods for the following verbs: get */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences",
    reportName: string,
  ): EvidenceResourcesListByReportResource;
  /** Resource for '/providers/Microsoft.AppComplianceAutomation/reports/\{reportName\}/evidences/\{evidenceName\}/download' has methods for the following verbs: post */
  (
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences/{evidenceName}/download",
    reportName: string,
    evidenceName: string,
  ): EvidenceResourcesDownload;
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
