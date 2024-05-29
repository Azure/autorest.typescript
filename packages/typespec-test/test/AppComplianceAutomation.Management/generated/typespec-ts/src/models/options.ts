// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface ReportResourcesGetOptionalParams extends OperationOptions {}

export interface ReportResourcesCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface ReportResourcesUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface ReportResourcesDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface ReportResourcesListByTenantOptionalParams
  extends OperationOptions {
  /** Skip over when retrieving results. */
  skipToken?: string;
  /** Number of elements to return when retrieving results. */
  top?: number;
  /** OData Select statement. Limits the properties on each entry to just those requested, e.g. ?$select=reportName,id. */
  select?: string;
  /** The filter to apply on the operation. */
  filter?: string;
  /** OData order by query option. */
  orderby?: string;
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
  /** The tenant id of the report creator. */
  reportCreatorTenantId?: string;
}

export interface ReportResourcesSyncCertRecordOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface ReportResourcesCheckNameAvailabilityOptionalParams
  extends OperationOptions {}

export interface ReportResourcesFixOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface ReportResourcesGetScopingQuestionsOptionalParams
  extends OperationOptions {}

export interface ReportResourcesVerifyOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface WebhookResourcesGetOptionalParams extends OperationOptions {}

export interface WebhookResourcesCreateOrUpdateOptionalParams
  extends OperationOptions {}

export interface WebhookResourcesUpdateOptionalParams
  extends OperationOptions {}

export interface WebhookResourcesDeleteOptionalParams
  extends OperationOptions {}

export interface WebhookResourcesListByReportResourceOptionalParams
  extends OperationOptions {
  /** Skip over when retrieving results. */
  skipToken?: string;
  /** Number of elements to return when retrieving results. */
  top?: number;
  /** OData Select statement. Limits the properties on each entry to just those requested, e.g. ?$select=reportName,id. */
  select?: string;
  /** The filter to apply on the operation. */
  filter?: string;
  /** OData order by query option. */
  orderby?: string;
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
  /** The tenant id of the report creator. */
  reportCreatorTenantId?: string;
}

export interface SnapshotResourcesGetOptionalParams extends OperationOptions {}

export interface SnapshotResourcesListByReportResourceOptionalParams
  extends OperationOptions {
  /** Skip over when retrieving results. */
  skipToken?: string;
  /** Number of elements to return when retrieving results. */
  top?: number;
  /** OData Select statement. Limits the properties on each entry to just those requested, e.g. ?$select=reportName,id. */
  select?: string;
  /** The filter to apply on the operation. */
  filter?: string;
  /** OData order by query option. */
  orderby?: string;
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
  /** The tenant id of the report creator. */
  reportCreatorTenantId?: string;
}

export interface SnapshotResourcesDownloadOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface ScopingConfigurationResourcesGetOptionalParams
  extends OperationOptions {}

export interface ScopingConfigurationResourcesCreateOrUpdateOptionalParams
  extends OperationOptions {}

export interface ScopingConfigurationResourcesDeleteOptionalParams
  extends OperationOptions {}

export interface ScopingConfigurationResourcesListByReportResourceOptionalParams
  extends OperationOptions {}

export interface EvidenceResourcesGetOptionalParams extends OperationOptions {}

export interface EvidenceResourcesCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
  /** The tenant id of the report creator. */
  reportCreatorTenantId?: string;
}

export interface EvidenceResourcesDeleteOptionalParams
  extends OperationOptions {}

export interface EvidenceResourcesListByReportResourceOptionalParams
  extends OperationOptions {
  /** Skip over when retrieving results. */
  skipToken?: string;
  /** Number of elements to return when retrieving results. */
  top?: number;
  /** OData Select statement. Limits the properties on each entry to just those requested, e.g. ?$select=reportName,id. */
  select?: string;
  /** The filter to apply on the operation. */
  filter?: string;
  /** OData order by query option. */
  orderby?: string;
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
  /** The tenant id of the report creator. */
  reportCreatorTenantId?: string;
}

export interface EvidenceResourcesDownloadOptionalParams
  extends OperationOptions {}

export interface OperationsListOptionalParams extends OperationOptions {}

export interface ProviderActionsCheckNameAvailabilityOptionalParams
  extends OperationOptions {}

export interface ProviderActionsGetCollectionCountOptionalParams
  extends OperationOptions {}

export interface ProviderActionsGetOverviewStatusOptionalParams
  extends OperationOptions {}

export interface ProviderActionsOnboardOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface ProviderActionsTriggerEvaluationOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface ProviderActionsListInUseStorageAccountsOptionalParams
  extends OperationOptions {}
