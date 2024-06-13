// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ReportGet200Response,
  ReportGetDefaultResponse,
  ReportCreateOrUpdate200Response,
  ReportCreateOrUpdate201Response,
  ReportCreateOrUpdateLogicalResponse,
  ReportCreateOrUpdateDefaultResponse,
  ReportUpdate200Response,
  ReportUpdate202Response,
  ReportUpdateLogicalResponse,
  ReportUpdateDefaultResponse,
  ReportDelete202Response,
  ReportDelete204Response,
  ReportDeleteLogicalResponse,
  ReportDeleteDefaultResponse,
  ReportListByTenant200Response,
  ReportListByTenantDefaultResponse,
  ReportSyncCertRecord200Response,
  ReportSyncCertRecord202Response,
  ReportSyncCertRecordLogicalResponse,
  ReportSyncCertRecordDefaultResponse,
  ReportCheckNameAvailability200Response,
  ReportCheckNameAvailabilityDefaultResponse,
  ReportFix200Response,
  ReportFix202Response,
  ReportFixLogicalResponse,
  ReportFixDefaultResponse,
  ReportGetScopingQuestions200Response,
  ReportGetScopingQuestionsDefaultResponse,
  ReportVerify200Response,
  ReportVerify202Response,
  ReportVerifyLogicalResponse,
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
  SnapshotDownloadLogicalResponse,
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
  response: ReportGet200Response | ReportGetDefaultResponse,
): response is ReportGetDefaultResponse;
export function isUnexpected(
  response:
    | ReportCreateOrUpdate200Response
    | ReportCreateOrUpdate201Response
    | ReportCreateOrUpdateLogicalResponse
    | ReportCreateOrUpdateDefaultResponse,
): response is ReportCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | ReportUpdate200Response
    | ReportUpdate202Response
    | ReportUpdateLogicalResponse
    | ReportUpdateDefaultResponse,
): response is ReportUpdateDefaultResponse;
export function isUnexpected(
  response:
    | ReportDelete202Response
    | ReportDelete204Response
    | ReportDeleteLogicalResponse
    | ReportDeleteDefaultResponse,
): response is ReportDeleteDefaultResponse;
export function isUnexpected(
  response: ReportListByTenant200Response | ReportListByTenantDefaultResponse,
): response is ReportListByTenantDefaultResponse;
export function isUnexpected(
  response:
    | ReportSyncCertRecord200Response
    | ReportSyncCertRecord202Response
    | ReportSyncCertRecordLogicalResponse
    | ReportSyncCertRecordDefaultResponse,
): response is ReportSyncCertRecordDefaultResponse;
export function isUnexpected(
  response:
    | ReportCheckNameAvailability200Response
    | ReportCheckNameAvailabilityDefaultResponse,
): response is ReportCheckNameAvailabilityDefaultResponse;
export function isUnexpected(
  response:
    | ReportFix200Response
    | ReportFix202Response
    | ReportFixLogicalResponse
    | ReportFixDefaultResponse,
): response is ReportFixDefaultResponse;
export function isUnexpected(
  response:
    | ReportGetScopingQuestions200Response
    | ReportGetScopingQuestionsDefaultResponse,
): response is ReportGetScopingQuestionsDefaultResponse;
export function isUnexpected(
  response:
    | ReportVerify200Response
    | ReportVerify202Response
    | ReportVerifyLogicalResponse
    | ReportVerifyDefaultResponse,
): response is ReportVerifyDefaultResponse;
export function isUnexpected(
  response: WebhookGet200Response | WebhookGetDefaultResponse,
): response is WebhookGetDefaultResponse;
export function isUnexpected(
  response:
    | WebhookCreateOrUpdate200Response
    | WebhookCreateOrUpdate201Response
    | WebhookCreateOrUpdateDefaultResponse,
): response is WebhookCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: WebhookUpdate200Response | WebhookUpdateDefaultResponse,
): response is WebhookUpdateDefaultResponse;
export function isUnexpected(
  response:
    | WebhookDelete200Response
    | WebhookDelete204Response
    | WebhookDeleteDefaultResponse,
): response is WebhookDeleteDefaultResponse;
export function isUnexpected(
  response:
    | WebhookListByReportResource200Response
    | WebhookListByReportResourceDefaultResponse,
): response is WebhookListByReportResourceDefaultResponse;
export function isUnexpected(
  response: SnapshotGet200Response | SnapshotGetDefaultResponse,
): response is SnapshotGetDefaultResponse;
export function isUnexpected(
  response:
    | SnapshotListByReportResource200Response
    | SnapshotListByReportResourceDefaultResponse,
): response is SnapshotListByReportResourceDefaultResponse;
export function isUnexpected(
  response:
    | SnapshotDownload200Response
    | SnapshotDownload202Response
    | SnapshotDownloadLogicalResponse
    | SnapshotDownloadDefaultResponse,
): response is SnapshotDownloadDefaultResponse;
export function isUnexpected(
  response:
    | ScopingConfigurationGet200Response
    | ScopingConfigurationGetDefaultResponse,
): response is ScopingConfigurationGetDefaultResponse;
export function isUnexpected(
  response:
    | ScopingConfigurationCreateOrUpdate200Response
    | ScopingConfigurationCreateOrUpdate201Response
    | ScopingConfigurationCreateOrUpdateDefaultResponse,
): response is ScopingConfigurationCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | ScopingConfigurationDelete200Response
    | ScopingConfigurationDelete204Response
    | ScopingConfigurationDeleteDefaultResponse,
): response is ScopingConfigurationDeleteDefaultResponse;
export function isUnexpected(
  response:
    | ScopingConfigurationListByReportResource200Response
    | ScopingConfigurationListByReportResourceDefaultResponse,
): response is ScopingConfigurationListByReportResourceDefaultResponse;
export function isUnexpected(
  response: EvidenceGet200Response | EvidenceGetDefaultResponse,
): response is EvidenceGetDefaultResponse;
export function isUnexpected(
  response:
    | EvidenceCreateOrUpdate200Response
    | EvidenceCreateOrUpdate201Response
    | EvidenceCreateOrUpdateDefaultResponse,
): response is EvidenceCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | EvidenceDelete200Response
    | EvidenceDelete204Response
    | EvidenceDeleteDefaultResponse,
): response is EvidenceDeleteDefaultResponse;
export function isUnexpected(
  response:
    | EvidenceListByReportResource200Response
    | EvidenceListByReportResourceDefaultResponse,
): response is EvidenceListByReportResourceDefaultResponse;
export function isUnexpected(
  response: EvidenceDownload200Response | EvidenceDownloadDefaultResponse,
): response is EvidenceDownloadDefaultResponse;
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
    | ReportGet200Response
    | ReportGetDefaultResponse
    | ReportCreateOrUpdate200Response
    | ReportCreateOrUpdate201Response
    | ReportCreateOrUpdateLogicalResponse
    | ReportCreateOrUpdateDefaultResponse
    | ReportUpdate200Response
    | ReportUpdate202Response
    | ReportUpdateLogicalResponse
    | ReportUpdateDefaultResponse
    | ReportDelete202Response
    | ReportDelete204Response
    | ReportDeleteLogicalResponse
    | ReportDeleteDefaultResponse
    | ReportListByTenant200Response
    | ReportListByTenantDefaultResponse
    | ReportSyncCertRecord200Response
    | ReportSyncCertRecord202Response
    | ReportSyncCertRecordLogicalResponse
    | ReportSyncCertRecordDefaultResponse
    | ReportCheckNameAvailability200Response
    | ReportCheckNameAvailabilityDefaultResponse
    | ReportFix200Response
    | ReportFix202Response
    | ReportFixLogicalResponse
    | ReportFixDefaultResponse
    | ReportGetScopingQuestions200Response
    | ReportGetScopingQuestionsDefaultResponse
    | ReportVerify200Response
    | ReportVerify202Response
    | ReportVerifyLogicalResponse
    | ReportVerifyDefaultResponse
    | WebhookGet200Response
    | WebhookGetDefaultResponse
    | WebhookCreateOrUpdate200Response
    | WebhookCreateOrUpdate201Response
    | WebhookCreateOrUpdateDefaultResponse
    | WebhookUpdate200Response
    | WebhookUpdateDefaultResponse
    | WebhookDelete200Response
    | WebhookDelete204Response
    | WebhookDeleteDefaultResponse
    | WebhookListByReportResource200Response
    | WebhookListByReportResourceDefaultResponse
    | SnapshotGet200Response
    | SnapshotGetDefaultResponse
    | SnapshotListByReportResource200Response
    | SnapshotListByReportResourceDefaultResponse
    | SnapshotDownload200Response
    | SnapshotDownload202Response
    | SnapshotDownloadLogicalResponse
    | SnapshotDownloadDefaultResponse
    | ScopingConfigurationGet200Response
    | ScopingConfigurationGetDefaultResponse
    | ScopingConfigurationCreateOrUpdate200Response
    | ScopingConfigurationCreateOrUpdate201Response
    | ScopingConfigurationCreateOrUpdateDefaultResponse
    | ScopingConfigurationDelete200Response
    | ScopingConfigurationDelete204Response
    | ScopingConfigurationDeleteDefaultResponse
    | ScopingConfigurationListByReportResource200Response
    | ScopingConfigurationListByReportResourceDefaultResponse
    | EvidenceGet200Response
    | EvidenceGetDefaultResponse
    | EvidenceCreateOrUpdate200Response
    | EvidenceCreateOrUpdate201Response
    | EvidenceCreateOrUpdateDefaultResponse
    | EvidenceDelete200Response
    | EvidenceDelete204Response
    | EvidenceDeleteDefaultResponse
    | EvidenceListByReportResource200Response
    | EvidenceListByReportResourceDefaultResponse
    | EvidenceDownload200Response
    | EvidenceDownloadDefaultResponse
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
  | ReportGetDefaultResponse
  | ReportCreateOrUpdateDefaultResponse
  | ReportUpdateDefaultResponse
  | ReportDeleteDefaultResponse
  | ReportListByTenantDefaultResponse
  | ReportSyncCertRecordDefaultResponse
  | ReportCheckNameAvailabilityDefaultResponse
  | ReportFixDefaultResponse
  | ReportGetScopingQuestionsDefaultResponse
  | ReportVerifyDefaultResponse
  | WebhookGetDefaultResponse
  | WebhookCreateOrUpdateDefaultResponse
  | WebhookUpdateDefaultResponse
  | WebhookDeleteDefaultResponse
  | WebhookListByReportResourceDefaultResponse
  | SnapshotGetDefaultResponse
  | SnapshotListByReportResourceDefaultResponse
  | SnapshotDownloadDefaultResponse
  | ScopingConfigurationGetDefaultResponse
  | ScopingConfigurationCreateOrUpdateDefaultResponse
  | ScopingConfigurationDeleteDefaultResponse
  | ScopingConfigurationListByReportResourceDefaultResponse
  | EvidenceGetDefaultResponse
  | EvidenceCreateOrUpdateDefaultResponse
  | EvidenceDeleteDefaultResponse
  | EvidenceListByReportResourceDefaultResponse
  | EvidenceDownloadDefaultResponse
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
