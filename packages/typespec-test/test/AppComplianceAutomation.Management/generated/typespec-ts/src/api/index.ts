// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  createAppComplianceAutomation,
  AppComplianceAutomationClientOptions,
  AppComplianceAutomationContext,
} from "./appComplianceAutomationContext.js";
export {
  evidenceGet,
  evidenceCreateOrUpdate,
  evidenceDelete,
  evidenceListByReportResource,
  evidenceDownload,
} from "./evidence/index.js";
export { operationsList } from "./operations/index.js";
export {
  providerActionsCheckNameAvailability,
  providerActionsGetCollectionCount,
  providerActionsGetOverviewStatus,
  providerActionsOnboard,
  providerActionsTriggerEvaluation,
  providerActionsListInUseStorageAccounts,
} from "./providerActions/index.js";
export {
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
} from "./report/index.js";
export {
  scopingConfigurationGet,
  scopingConfigurationCreateOrUpdate,
  scopingConfigurationDelete,
  scopingConfigurationListByReportResource,
} from "./scopingConfiguration/index.js";
export {
  snapshotGet,
  snapshotListByReportResource,
  snapshotDownload,
} from "./snapshot/index.js";
export {
  webhookGet,
  webhookCreateOrUpdate,
  webhookUpdate,
  webhookDelete,
  webhookListByReportResource,
} from "./webhook/index.js";
