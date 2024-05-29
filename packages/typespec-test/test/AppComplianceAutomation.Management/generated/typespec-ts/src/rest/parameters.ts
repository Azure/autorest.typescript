// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  ReportResource,
  ReportResourcePatch,
  SyncCertRecordRequest,
  CheckNameAvailabilityRequest,
  WebhookResource,
  WebhookResourcePatch,
  SnapshotDownloadRequest,
  ScopingConfigurationResource,
  EvidenceResource,
  EvidenceFileDownloadRequest,
  GetCollectionCountRequest,
  GetOverviewStatusRequest,
  OnboardRequest,
  TriggerEvaluationRequest,
  ListInUseStorageAccountsRequest,
} from "./models.js";

export type ReportResourcesGetParameters = RequestParameters;

export interface ReportResourcesCreateOrUpdateBodyParam {
  /** Parameters for the create or update operation */
  body: ReportResource;
}

export type ReportResourcesCreateOrUpdateParameters =
  ReportResourcesCreateOrUpdateBodyParam & RequestParameters;

export interface ReportResourcesUpdateBodyParam {
  /** Parameters for the create or update operation */
  body: ReportResourcePatch;
}

export type ReportResourcesUpdateParameters = ReportResourcesUpdateBodyParam &
  RequestParameters;
export type ReportResourcesDeleteParameters = RequestParameters;

export interface ReportResourcesListByTenantQueryParamProperties {
  /** Skip over when retrieving results. */
  $skipToken?: string;
  /** Number of elements to return when retrieving results. */
  $top?: number;
  /** OData Select statement. Limits the properties on each entry to just those requested, e.g. ?$select=reportName,id. */
  $select?: string;
  /** The filter to apply on the operation. */
  $filter?: string;
  /** OData order by query option. */
  $orderby?: string;
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
  /** The tenant id of the report creator. */
  reportCreatorTenantId?: string;
}

export interface ReportResourcesListByTenantQueryParam {
  queryParameters?: ReportResourcesListByTenantQueryParamProperties;
}

export type ReportResourcesListByTenantParameters =
  ReportResourcesListByTenantQueryParam & RequestParameters;

export interface ReportResourcesSyncCertRecordBodyParam {
  /** Parameters for synchronize certification record operation */
  body: SyncCertRecordRequest;
}

export type ReportResourcesSyncCertRecordParameters =
  ReportResourcesSyncCertRecordBodyParam & RequestParameters;

export interface ReportResourcesCheckNameAvailabilityBodyParam {
  /** NameAvailabilityRequest object. */
  body: CheckNameAvailabilityRequest;
}

export type ReportResourcesCheckNameAvailabilityParameters =
  ReportResourcesCheckNameAvailabilityBodyParam & RequestParameters;
export type ReportResourcesFixParameters = RequestParameters;
export type ReportResourcesGetScopingQuestionsParameters = RequestParameters;
export type ReportResourcesVerifyParameters = RequestParameters;
export type WebhookResourcesGetParameters = RequestParameters;

export interface WebhookResourcesCreateOrUpdateBodyParam {
  /** Parameters for the create or update operation */
  body: WebhookResource;
}

export type WebhookResourcesCreateOrUpdateParameters =
  WebhookResourcesCreateOrUpdateBodyParam & RequestParameters;

export interface WebhookResourcesUpdateBodyParam {
  /** Parameters for the create or update operation */
  body: WebhookResourcePatch;
}

export type WebhookResourcesUpdateParameters = WebhookResourcesUpdateBodyParam &
  RequestParameters;
export type WebhookResourcesDeleteParameters = RequestParameters;

export interface WebhookResourcesListByReportResourceQueryParamProperties {
  /** Skip over when retrieving results. */
  $skipToken?: string;
  /** Number of elements to return when retrieving results. */
  $top?: number;
  /** OData Select statement. Limits the properties on each entry to just those requested, e.g. ?$select=reportName,id. */
  $select?: string;
  /** The filter to apply on the operation. */
  $filter?: string;
  /** OData order by query option. */
  $orderby?: string;
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
  /** The tenant id of the report creator. */
  reportCreatorTenantId?: string;
}

export interface WebhookResourcesListByReportResourceQueryParam {
  queryParameters?: WebhookResourcesListByReportResourceQueryParamProperties;
}

export type WebhookResourcesListByReportResourceParameters =
  WebhookResourcesListByReportResourceQueryParam & RequestParameters;
export type SnapshotResourcesGetParameters = RequestParameters;

export interface SnapshotResourcesListByReportResourceQueryParamProperties {
  /** Skip over when retrieving results. */
  $skipToken?: string;
  /** Number of elements to return when retrieving results. */
  $top?: number;
  /** OData Select statement. Limits the properties on each entry to just those requested, e.g. ?$select=reportName,id. */
  $select?: string;
  /** The filter to apply on the operation. */
  $filter?: string;
  /** OData order by query option. */
  $orderby?: string;
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
  /** The tenant id of the report creator. */
  reportCreatorTenantId?: string;
}

export interface SnapshotResourcesListByReportResourceQueryParam {
  queryParameters?: SnapshotResourcesListByReportResourceQueryParamProperties;
}

export type SnapshotResourcesListByReportResourceParameters =
  SnapshotResourcesListByReportResourceQueryParam & RequestParameters;

export interface SnapshotResourcesDownloadBodyParam {
  /** Parameters for the query operation */
  body: SnapshotDownloadRequest;
}

export type SnapshotResourcesDownloadParameters =
  SnapshotResourcesDownloadBodyParam & RequestParameters;
export type ScopingConfigurationResourcesGetParameters = RequestParameters;

export interface ScopingConfigurationResourcesCreateOrUpdateBodyParam {
  /** Parameters for the create or update operation, this is a singleton resource, so please make sure you're using 'default' as the name. */
  body: ScopingConfigurationResource;
}

export type ScopingConfigurationResourcesCreateOrUpdateParameters =
  ScopingConfigurationResourcesCreateOrUpdateBodyParam & RequestParameters;
export type ScopingConfigurationResourcesDeleteParameters = RequestParameters;
export type ScopingConfigurationResourcesListByReportResourceParameters =
  RequestParameters;
export type EvidenceResourcesGetParameters = RequestParameters;

export interface EvidenceResourcesCreateOrUpdateBodyParam {
  /** Parameters for the create or update operation */
  body: EvidenceResource;
}

export interface EvidenceResourcesCreateOrUpdateQueryParamProperties {
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
  /** The tenant id of the report creator. */
  reportCreatorTenantId?: string;
}

export interface EvidenceResourcesCreateOrUpdateQueryParam {
  queryParameters?: EvidenceResourcesCreateOrUpdateQueryParamProperties;
}

export type EvidenceResourcesCreateOrUpdateParameters =
  EvidenceResourcesCreateOrUpdateQueryParam &
    EvidenceResourcesCreateOrUpdateBodyParam &
    RequestParameters;
export type EvidenceResourcesDeleteParameters = RequestParameters;

export interface EvidenceResourcesListByReportResourceQueryParamProperties {
  /** Skip over when retrieving results. */
  $skipToken?: string;
  /** Number of elements to return when retrieving results. */
  $top?: number;
  /** OData Select statement. Limits the properties on each entry to just those requested, e.g. ?$select=reportName,id. */
  $select?: string;
  /** The filter to apply on the operation. */
  $filter?: string;
  /** OData order by query option. */
  $orderby?: string;
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
  /** The tenant id of the report creator. */
  reportCreatorTenantId?: string;
}

export interface EvidenceResourcesListByReportResourceQueryParam {
  queryParameters?: EvidenceResourcesListByReportResourceQueryParamProperties;
}

export type EvidenceResourcesListByReportResourceParameters =
  EvidenceResourcesListByReportResourceQueryParam & RequestParameters;

export interface EvidenceResourcesDownloadBodyParam {
  /** Parameters for the query operation */
  body: EvidenceFileDownloadRequest;
}

export type EvidenceResourcesDownloadParameters =
  EvidenceResourcesDownloadBodyParam & RequestParameters;
export type OperationsListParameters = RequestParameters;

export interface ProviderActionsCheckNameAvailabilityBodyParam {
  /** The content of the action request */
  body: CheckNameAvailabilityRequest;
}

export type ProviderActionsCheckNameAvailabilityParameters =
  ProviderActionsCheckNameAvailabilityBodyParam & RequestParameters;

export interface ProviderActionsGetCollectionCountBodyParam {
  /** The content of the action request */
  body: GetCollectionCountRequest;
}

export type ProviderActionsGetCollectionCountParameters =
  ProviderActionsGetCollectionCountBodyParam & RequestParameters;

export interface ProviderActionsGetOverviewStatusBodyParam {
  /** The content of the action request */
  body: GetOverviewStatusRequest;
}

export type ProviderActionsGetOverviewStatusParameters =
  ProviderActionsGetOverviewStatusBodyParam & RequestParameters;

export interface ProviderActionsOnboardBodyParam {
  /** The content of the action request */
  body: OnboardRequest;
}

export type ProviderActionsOnboardParameters = ProviderActionsOnboardBodyParam &
  RequestParameters;

export interface ProviderActionsTriggerEvaluationBodyParam {
  /** The content of the action request */
  body: TriggerEvaluationRequest;
}

export type ProviderActionsTriggerEvaluationParameters =
  ProviderActionsTriggerEvaluationBodyParam & RequestParameters;

export interface ProviderActionsListInUseStorageAccountsBodyParam {
  /** The content of the action request */
  body: ListInUseStorageAccountsRequest;
}

export type ProviderActionsListInUseStorageAccountsParameters =
  ProviderActionsListInUseStorageAccountsBodyParam & RequestParameters;
