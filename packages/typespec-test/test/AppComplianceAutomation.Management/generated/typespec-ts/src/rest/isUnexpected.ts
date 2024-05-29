// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ReportResourcesGet200Response,
  ReportResourcesGetDefaultResponse,
  ReportResourcesCreateOrUpdate200Response,
  ReportResourcesCreateOrUpdate201Response,
  ReportResourcesCreateOrUpdateLogicalResponse,
  ReportResourcesCreateOrUpdateDefaultResponse,
  ReportResourcesUpdate200Response,
  ReportResourcesUpdate202Response,
  ReportResourcesUpdateLogicalResponse,
  ReportResourcesUpdateDefaultResponse,
  ReportResourcesDelete202Response,
  ReportResourcesDelete204Response,
  ReportResourcesDeleteLogicalResponse,
  ReportResourcesDeleteDefaultResponse,
  ReportResourcesListByTenant200Response,
  ReportResourcesListByTenantDefaultResponse,
  ReportResourcesSyncCertRecord200Response,
  ReportResourcesSyncCertRecord202Response,
  ReportResourcesSyncCertRecordLogicalResponse,
  ReportResourcesSyncCertRecordDefaultResponse,
  ReportResourcesCheckNameAvailability200Response,
  ReportResourcesCheckNameAvailabilityDefaultResponse,
  ReportResourcesFix200Response,
  ReportResourcesFix202Response,
  ReportResourcesFixLogicalResponse,
  ReportResourcesFixDefaultResponse,
  ReportResourcesGetScopingQuestions200Response,
  ReportResourcesGetScopingQuestionsDefaultResponse,
  ReportResourcesVerify200Response,
  ReportResourcesVerify202Response,
  ReportResourcesVerifyLogicalResponse,
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
  SnapshotResourcesDownloadLogicalResponse,
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
  ProviderActionsOnboardLogicalResponse,
  ProviderActionsOnboardDefaultResponse,
  ProviderActionsTriggerEvaluation200Response,
  ProviderActionsTriggerEvaluation202Response,
  ProviderActionsTriggerEvaluationLogicalResponse,
  ProviderActionsTriggerEvaluationDefaultResponse,
  ProviderActionsListInUseStorageAccounts200Response,
  ProviderActionsListInUseStorageAccountsDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "GET /providers/Microsoft.AppComplianceAutomation/reports/{reportName}": [
    "200",
  ],
  "PUT /providers/Microsoft.AppComplianceAutomation/reports/{reportName}": [
    "200",
    "201",
  ],
  "PATCH /providers/Microsoft.AppComplianceAutomation/reports/{reportName}": [
    "200",
    "202",
  ],
  "DELETE /providers/Microsoft.AppComplianceAutomation/reports/{reportName}": [
    "202",
    "204",
  ],
  "GET /providers/Microsoft.AppComplianceAutomation/reports": ["200"],
  "GET /providers/Microsoft.AppComplianceAutomation/reports/{reportName}/syncCertRecord":
    ["200", "202"],
  "POST /providers/Microsoft.AppComplianceAutomation/reports/{reportName}/syncCertRecord":
    ["200", "202"],
  "POST /providers/Microsoft.AppComplianceAutomation/reports/{reportName}/checkNameAvailability":
    ["200"],
  "GET /providers/Microsoft.AppComplianceAutomation/reports/{reportName}/fix": [
    "200",
    "202",
  ],
  "POST /providers/Microsoft.AppComplianceAutomation/reports/{reportName}/fix":
    ["200", "202"],
  "POST /providers/Microsoft.AppComplianceAutomation/reports/{reportName}/getScopingQuestions":
    ["200"],
  "GET /providers/Microsoft.AppComplianceAutomation/reports/{reportName}/verify":
    ["200", "202"],
  "POST /providers/Microsoft.AppComplianceAutomation/reports/{reportName}/verify":
    ["200", "202"],
  "GET /providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}":
    ["200"],
  "PUT /providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}":
    ["200", "201"],
  "PATCH /providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}":
    ["200"],
  "DELETE /providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}":
    ["200", "204"],
  "GET /providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks":
    ["200"],
  "GET /providers/Microsoft.AppComplianceAutomation/reports/{reportName}/snapshots/{snapshotName}":
    ["200"],
  "GET /providers/Microsoft.AppComplianceAutomation/reports/{reportName}/snapshots":
    ["200"],
  "GET /providers/Microsoft.AppComplianceAutomation/reports/{reportName}/snapshots/{snapshotName}/download":
    ["200", "202"],
  "POST /providers/Microsoft.AppComplianceAutomation/reports/{reportName}/snapshots/{snapshotName}/download":
    ["200", "202"],
  "GET /providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations/{scopingConfigurationName}":
    ["200"],
  "PUT /providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations/{scopingConfigurationName}":
    ["200", "201"],
  "DELETE /providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations/{scopingConfigurationName}":
    ["200", "204"],
  "GET /providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations":
    ["200"],
  "GET /providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences/{evidenceName}":
    ["200"],
  "PUT /providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences/{evidenceName}":
    ["200", "201"],
  "DELETE /providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences/{evidenceName}":
    ["200", "204"],
  "GET /providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences":
    ["200"],
  "POST /providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences/{evidenceName}/download":
    ["200"],
  "GET /providers/Microsoft.AppComplianceAutomation/operations": ["200"],
  "POST /providers/Microsoft.AppComplianceAutomation/checkNameAvailability": [
    "200",
  ],
  "POST /providers/Microsoft.AppComplianceAutomation/getCollectionCount": [
    "200",
  ],
  "POST /providers/Microsoft.AppComplianceAutomation/getOverviewStatus": [
    "200",
  ],
  "GET /providers/Microsoft.AppComplianceAutomation/onboard": ["200", "202"],
  "POST /providers/Microsoft.AppComplianceAutomation/onboard": ["200", "202"],
  "GET /providers/Microsoft.AppComplianceAutomation/triggerEvaluation": [
    "200",
    "202",
  ],
  "POST /providers/Microsoft.AppComplianceAutomation/triggerEvaluation": [
    "200",
    "202",
  ],
  "POST /providers/Microsoft.AppComplianceAutomation/listInUseStorageAccounts":
    ["200"],
};

export function isUnexpected(
  response: ReportResourcesGet200Response | ReportResourcesGetDefaultResponse,
): response is ReportResourcesGetDefaultResponse;
export function isUnexpected(
  response:
    | ReportResourcesCreateOrUpdate200Response
    | ReportResourcesCreateOrUpdate201Response
    | ReportResourcesCreateOrUpdateLogicalResponse
    | ReportResourcesCreateOrUpdateDefaultResponse,
): response is ReportResourcesCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | ReportResourcesUpdate200Response
    | ReportResourcesUpdate202Response
    | ReportResourcesUpdateLogicalResponse
    | ReportResourcesUpdateDefaultResponse,
): response is ReportResourcesUpdateDefaultResponse;
export function isUnexpected(
  response:
    | ReportResourcesDelete202Response
    | ReportResourcesDelete204Response
    | ReportResourcesDeleteLogicalResponse
    | ReportResourcesDeleteDefaultResponse,
): response is ReportResourcesDeleteDefaultResponse;
export function isUnexpected(
  response:
    | ReportResourcesListByTenant200Response
    | ReportResourcesListByTenantDefaultResponse,
): response is ReportResourcesListByTenantDefaultResponse;
export function isUnexpected(
  response:
    | ReportResourcesSyncCertRecord200Response
    | ReportResourcesSyncCertRecord202Response
    | ReportResourcesSyncCertRecordLogicalResponse
    | ReportResourcesSyncCertRecordDefaultResponse,
): response is ReportResourcesSyncCertRecordDefaultResponse;
export function isUnexpected(
  response:
    | ReportResourcesCheckNameAvailability200Response
    | ReportResourcesCheckNameAvailabilityDefaultResponse,
): response is ReportResourcesCheckNameAvailabilityDefaultResponse;
export function isUnexpected(
  response:
    | ReportResourcesFix200Response
    | ReportResourcesFix202Response
    | ReportResourcesFixLogicalResponse
    | ReportResourcesFixDefaultResponse,
): response is ReportResourcesFixDefaultResponse;
export function isUnexpected(
  response:
    | ReportResourcesGetScopingQuestions200Response
    | ReportResourcesGetScopingQuestionsDefaultResponse,
): response is ReportResourcesGetScopingQuestionsDefaultResponse;
export function isUnexpected(
  response:
    | ReportResourcesVerify200Response
    | ReportResourcesVerify202Response
    | ReportResourcesVerifyLogicalResponse
    | ReportResourcesVerifyDefaultResponse,
): response is ReportResourcesVerifyDefaultResponse;
export function isUnexpected(
  response: WebhookResourcesGet200Response | WebhookResourcesGetDefaultResponse,
): response is WebhookResourcesGetDefaultResponse;
export function isUnexpected(
  response:
    | WebhookResourcesCreateOrUpdate200Response
    | WebhookResourcesCreateOrUpdate201Response
    | WebhookResourcesCreateOrUpdateDefaultResponse,
): response is WebhookResourcesCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | WebhookResourcesUpdate200Response
    | WebhookResourcesUpdateDefaultResponse,
): response is WebhookResourcesUpdateDefaultResponse;
export function isUnexpected(
  response:
    | WebhookResourcesDelete200Response
    | WebhookResourcesDelete204Response
    | WebhookResourcesDeleteDefaultResponse,
): response is WebhookResourcesDeleteDefaultResponse;
export function isUnexpected(
  response:
    | WebhookResourcesListByReportResource200Response
    | WebhookResourcesListByReportResourceDefaultResponse,
): response is WebhookResourcesListByReportResourceDefaultResponse;
export function isUnexpected(
  response:
    | SnapshotResourcesGet200Response
    | SnapshotResourcesGetDefaultResponse,
): response is SnapshotResourcesGetDefaultResponse;
export function isUnexpected(
  response:
    | SnapshotResourcesListByReportResource200Response
    | SnapshotResourcesListByReportResourceDefaultResponse,
): response is SnapshotResourcesListByReportResourceDefaultResponse;
export function isUnexpected(
  response:
    | SnapshotResourcesDownload200Response
    | SnapshotResourcesDownload202Response
    | SnapshotResourcesDownloadLogicalResponse
    | SnapshotResourcesDownloadDefaultResponse,
): response is SnapshotResourcesDownloadDefaultResponse;
export function isUnexpected(
  response:
    | ScopingConfigurationResourcesGet200Response
    | ScopingConfigurationResourcesGetDefaultResponse,
): response is ScopingConfigurationResourcesGetDefaultResponse;
export function isUnexpected(
  response:
    | ScopingConfigurationResourcesCreateOrUpdate200Response
    | ScopingConfigurationResourcesCreateOrUpdate201Response
    | ScopingConfigurationResourcesCreateOrUpdateDefaultResponse,
): response is ScopingConfigurationResourcesCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | ScopingConfigurationResourcesDelete200Response
    | ScopingConfigurationResourcesDelete204Response
    | ScopingConfigurationResourcesDeleteDefaultResponse,
): response is ScopingConfigurationResourcesDeleteDefaultResponse;
export function isUnexpected(
  response:
    | ScopingConfigurationResourcesListByReportResource200Response
    | ScopingConfigurationResourcesListByReportResourceDefaultResponse,
): response is ScopingConfigurationResourcesListByReportResourceDefaultResponse;
export function isUnexpected(
  response:
    | EvidenceResourcesGet200Response
    | EvidenceResourcesGetDefaultResponse,
): response is EvidenceResourcesGetDefaultResponse;
export function isUnexpected(
  response:
    | EvidenceResourcesCreateOrUpdate200Response
    | EvidenceResourcesCreateOrUpdate201Response
    | EvidenceResourcesCreateOrUpdateDefaultResponse,
): response is EvidenceResourcesCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | EvidenceResourcesDelete200Response
    | EvidenceResourcesDelete204Response
    | EvidenceResourcesDeleteDefaultResponse,
): response is EvidenceResourcesDeleteDefaultResponse;
export function isUnexpected(
  response:
    | EvidenceResourcesListByReportResource200Response
    | EvidenceResourcesListByReportResourceDefaultResponse,
): response is EvidenceResourcesListByReportResourceDefaultResponse;
export function isUnexpected(
  response:
    | EvidenceResourcesDownload200Response
    | EvidenceResourcesDownloadDefaultResponse,
): response is EvidenceResourcesDownloadDefaultResponse;
export function isUnexpected(
  response: OperationsList200Response | OperationsListDefaultResponse,
): response is OperationsListDefaultResponse;
export function isUnexpected(
  response:
    | ProviderActionsCheckNameAvailability200Response
    | ProviderActionsCheckNameAvailabilityDefaultResponse,
): response is ProviderActionsCheckNameAvailabilityDefaultResponse;
export function isUnexpected(
  response:
    | ProviderActionsGetCollectionCount200Response
    | ProviderActionsGetCollectionCountDefaultResponse,
): response is ProviderActionsGetCollectionCountDefaultResponse;
export function isUnexpected(
  response:
    | ProviderActionsGetOverviewStatus200Response
    | ProviderActionsGetOverviewStatusDefaultResponse,
): response is ProviderActionsGetOverviewStatusDefaultResponse;
export function isUnexpected(
  response:
    | ProviderActionsOnboard200Response
    | ProviderActionsOnboard202Response
    | ProviderActionsOnboardLogicalResponse
    | ProviderActionsOnboardDefaultResponse,
): response is ProviderActionsOnboardDefaultResponse;
export function isUnexpected(
  response:
    | ProviderActionsTriggerEvaluation200Response
    | ProviderActionsTriggerEvaluation202Response
    | ProviderActionsTriggerEvaluationLogicalResponse
    | ProviderActionsTriggerEvaluationDefaultResponse,
): response is ProviderActionsTriggerEvaluationDefaultResponse;
export function isUnexpected(
  response:
    | ProviderActionsListInUseStorageAccounts200Response
    | ProviderActionsListInUseStorageAccountsDefaultResponse,
): response is ProviderActionsListInUseStorageAccountsDefaultResponse;
export function isUnexpected(
  response:
    | ReportResourcesGet200Response
    | ReportResourcesGetDefaultResponse
    | ReportResourcesCreateOrUpdate200Response
    | ReportResourcesCreateOrUpdate201Response
    | ReportResourcesCreateOrUpdateLogicalResponse
    | ReportResourcesCreateOrUpdateDefaultResponse
    | ReportResourcesUpdate200Response
    | ReportResourcesUpdate202Response
    | ReportResourcesUpdateLogicalResponse
    | ReportResourcesUpdateDefaultResponse
    | ReportResourcesDelete202Response
    | ReportResourcesDelete204Response
    | ReportResourcesDeleteLogicalResponse
    | ReportResourcesDeleteDefaultResponse
    | ReportResourcesListByTenant200Response
    | ReportResourcesListByTenantDefaultResponse
    | ReportResourcesSyncCertRecord200Response
    | ReportResourcesSyncCertRecord202Response
    | ReportResourcesSyncCertRecordLogicalResponse
    | ReportResourcesSyncCertRecordDefaultResponse
    | ReportResourcesCheckNameAvailability200Response
    | ReportResourcesCheckNameAvailabilityDefaultResponse
    | ReportResourcesFix200Response
    | ReportResourcesFix202Response
    | ReportResourcesFixLogicalResponse
    | ReportResourcesFixDefaultResponse
    | ReportResourcesGetScopingQuestions200Response
    | ReportResourcesGetScopingQuestionsDefaultResponse
    | ReportResourcesVerify200Response
    | ReportResourcesVerify202Response
    | ReportResourcesVerifyLogicalResponse
    | ReportResourcesVerifyDefaultResponse
    | WebhookResourcesGet200Response
    | WebhookResourcesGetDefaultResponse
    | WebhookResourcesCreateOrUpdate200Response
    | WebhookResourcesCreateOrUpdate201Response
    | WebhookResourcesCreateOrUpdateDefaultResponse
    | WebhookResourcesUpdate200Response
    | WebhookResourcesUpdateDefaultResponse
    | WebhookResourcesDelete200Response
    | WebhookResourcesDelete204Response
    | WebhookResourcesDeleteDefaultResponse
    | WebhookResourcesListByReportResource200Response
    | WebhookResourcesListByReportResourceDefaultResponse
    | SnapshotResourcesGet200Response
    | SnapshotResourcesGetDefaultResponse
    | SnapshotResourcesListByReportResource200Response
    | SnapshotResourcesListByReportResourceDefaultResponse
    | SnapshotResourcesDownload200Response
    | SnapshotResourcesDownload202Response
    | SnapshotResourcesDownloadLogicalResponse
    | SnapshotResourcesDownloadDefaultResponse
    | ScopingConfigurationResourcesGet200Response
    | ScopingConfigurationResourcesGetDefaultResponse
    | ScopingConfigurationResourcesCreateOrUpdate200Response
    | ScopingConfigurationResourcesCreateOrUpdate201Response
    | ScopingConfigurationResourcesCreateOrUpdateDefaultResponse
    | ScopingConfigurationResourcesDelete200Response
    | ScopingConfigurationResourcesDelete204Response
    | ScopingConfigurationResourcesDeleteDefaultResponse
    | ScopingConfigurationResourcesListByReportResource200Response
    | ScopingConfigurationResourcesListByReportResourceDefaultResponse
    | EvidenceResourcesGet200Response
    | EvidenceResourcesGetDefaultResponse
    | EvidenceResourcesCreateOrUpdate200Response
    | EvidenceResourcesCreateOrUpdate201Response
    | EvidenceResourcesCreateOrUpdateDefaultResponse
    | EvidenceResourcesDelete200Response
    | EvidenceResourcesDelete204Response
    | EvidenceResourcesDeleteDefaultResponse
    | EvidenceResourcesListByReportResource200Response
    | EvidenceResourcesListByReportResourceDefaultResponse
    | EvidenceResourcesDownload200Response
    | EvidenceResourcesDownloadDefaultResponse
    | OperationsList200Response
    | OperationsListDefaultResponse
    | ProviderActionsCheckNameAvailability200Response
    | ProviderActionsCheckNameAvailabilityDefaultResponse
    | ProviderActionsGetCollectionCount200Response
    | ProviderActionsGetCollectionCountDefaultResponse
    | ProviderActionsGetOverviewStatus200Response
    | ProviderActionsGetOverviewStatusDefaultResponse
    | ProviderActionsOnboard200Response
    | ProviderActionsOnboard202Response
    | ProviderActionsOnboardLogicalResponse
    | ProviderActionsOnboardDefaultResponse
    | ProviderActionsTriggerEvaluation200Response
    | ProviderActionsTriggerEvaluation202Response
    | ProviderActionsTriggerEvaluationLogicalResponse
    | ProviderActionsTriggerEvaluationDefaultResponse
    | ProviderActionsListInUseStorageAccounts200Response
    | ProviderActionsListInUseStorageAccountsDefaultResponse,
): response is
  | ReportResourcesGetDefaultResponse
  | ReportResourcesCreateOrUpdateDefaultResponse
  | ReportResourcesUpdateDefaultResponse
  | ReportResourcesDeleteDefaultResponse
  | ReportResourcesListByTenantDefaultResponse
  | ReportResourcesSyncCertRecordDefaultResponse
  | ReportResourcesCheckNameAvailabilityDefaultResponse
  | ReportResourcesFixDefaultResponse
  | ReportResourcesGetScopingQuestionsDefaultResponse
  | ReportResourcesVerifyDefaultResponse
  | WebhookResourcesGetDefaultResponse
  | WebhookResourcesCreateOrUpdateDefaultResponse
  | WebhookResourcesUpdateDefaultResponse
  | WebhookResourcesDeleteDefaultResponse
  | WebhookResourcesListByReportResourceDefaultResponse
  | SnapshotResourcesGetDefaultResponse
  | SnapshotResourcesListByReportResourceDefaultResponse
  | SnapshotResourcesDownloadDefaultResponse
  | ScopingConfigurationResourcesGetDefaultResponse
  | ScopingConfigurationResourcesCreateOrUpdateDefaultResponse
  | ScopingConfigurationResourcesDeleteDefaultResponse
  | ScopingConfigurationResourcesListByReportResourceDefaultResponse
  | EvidenceResourcesGetDefaultResponse
  | EvidenceResourcesCreateOrUpdateDefaultResponse
  | EvidenceResourcesDeleteDefaultResponse
  | EvidenceResourcesListByReportResourceDefaultResponse
  | EvidenceResourcesDownloadDefaultResponse
  | OperationsListDefaultResponse
  | ProviderActionsCheckNameAvailabilityDefaultResponse
  | ProviderActionsGetCollectionCountDefaultResponse
  | ProviderActionsGetOverviewStatusDefaultResponse
  | ProviderActionsOnboardDefaultResponse
  | ProviderActionsTriggerEvaluationDefaultResponse
  | ProviderActionsListInUseStorageAccountsDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = getParametrizedPathSuccess(method, url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function getParametrizedPathSuccess(method: string, path: string): string[] {
  const pathParts = path.split("/");

  // Traverse list to match the longest candidate
  // matchedLen: the length of candidate path
  // matchedValue: the matched status code array
  let matchedLen = -1,
    matchedValue: string[] = [];

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    if (!key.startsWith(method)) {
      continue;
    }
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // track if we have found a match to return the values found.
    let found = true;
    for (
      let i = candidateParts.length - 1, j = pathParts.length - 1;
      i >= 1 && j >= 1;
      i--, j--
    ) {
      if (
        candidateParts[i]?.startsWith("{") &&
        candidateParts[i]?.indexOf("}") !== -1
      ) {
        const start = candidateParts[i]!.indexOf("}") + 1,
          end = candidateParts[i]?.length;
        // If the current part of the candidate is a "template" part
        // Try to use the suffix of pattern to match the path
        // {guid} ==> $
        // {guid}:export ==> :export$
        const isMatched = new RegExp(
          `${candidateParts[i]?.slice(start, end)}`,
        ).test(pathParts[j] || "");

        if (!isMatched) {
          found = false;
          break;
        }
        continue;
      }

      // If the candidate part is not a template and
      // the parts don't match mark the candidate as not found
      // to move on with the next candidate path.
      if (candidateParts[i] !== pathParts[j]) {
        found = false;
        break;
      }
    }

    // We finished evaluating the current candidate parts
    // Update the matched value if and only if we found the longer pattern
    if (found && candidatePath.length > matchedLen) {
      matchedLen = candidatePath.length;
      matchedValue = value;
    }
  }

  return matchedValue;
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
