// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface ReportGetOptionalParams extends OperationOptions {}

export interface ReportCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface ReportUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface ReportDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface ReportListByTenantOptionalParams extends OperationOptions {
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

export interface ReportSyncCertRecordOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface ReportCheckNameAvailabilityOptionalParams
  extends OperationOptions {}

export interface ReportFixOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface ReportGetScopingQuestionsOptionalParams
  extends OperationOptions {}

export interface ReportVerifyOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface WebhookGetOptionalParams extends OperationOptions {}

export interface WebhookCreateOrUpdateOptionalParams extends OperationOptions {}

export interface WebhookUpdateOptionalParams extends OperationOptions {}

export interface WebhookDeleteOptionalParams extends OperationOptions {}

export interface WebhookListByReportResourceOptionalParams
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

export interface SnapshotGetOptionalParams extends OperationOptions {}

export interface SnapshotListByReportResourceOptionalParams
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

export interface SnapshotDownloadOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface ScopingConfigurationGetOptionalParams
  extends OperationOptions {}

export interface ScopingConfigurationCreateOrUpdateOptionalParams
  extends OperationOptions {}

export interface ScopingConfigurationDeleteOptionalParams
  extends OperationOptions {}

export interface ScopingConfigurationListByReportResourceOptionalParams
  extends OperationOptions {}

export interface EvidenceGetOptionalParams extends OperationOptions {}

export interface EvidenceCreateOrUpdateOptionalParams extends OperationOptions {
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
  /** The tenant id of the report creator. */
  reportCreatorTenantId?: string;
}

export interface EvidenceDeleteOptionalParams extends OperationOptions {}

export interface EvidenceListByReportResourceOptionalParams
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

export interface EvidenceDownloadOptionalParams extends OperationOptions {}

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
