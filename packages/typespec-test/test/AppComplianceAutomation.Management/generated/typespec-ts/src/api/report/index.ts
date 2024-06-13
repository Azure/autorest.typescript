// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  CheckNameAvailabilityRequest,
  CheckNameAvailabilityResponse,
  ReportResource,
  ReportResourcePatch,
  ReportResourceListResult,
  SyncCertRecordRequest,
  SyncCertRecordResponse,
  ReportFixResult,
  ScopingQuestions,
  ReportVerificationResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AppComplianceAutomationContext as Client,
  ReportCheckNameAvailability200Response,
  ReportCheckNameAvailabilityDefaultResponse,
  ReportCreateOrUpdate200Response,
  ReportCreateOrUpdate201Response,
  ReportCreateOrUpdateDefaultResponse,
  ReportCreateOrUpdateLogicalResponse,
  ReportDelete202Response,
  ReportDelete204Response,
  ReportDeleteDefaultResponse,
  ReportDeleteLogicalResponse,
  ReportFix200Response,
  ReportFix202Response,
  ReportFixDefaultResponse,
  ReportFixLogicalResponse,
  ReportGet200Response,
  ReportGetDefaultResponse,
  ReportGetScopingQuestions200Response,
  ReportGetScopingQuestionsDefaultResponse,
  ReportListByTenant200Response,
  ReportListByTenantDefaultResponse,
  ReportSyncCertRecord200Response,
  ReportSyncCertRecord202Response,
  ReportSyncCertRecordDefaultResponse,
  ReportSyncCertRecordLogicalResponse,
  ReportUpdate200Response,
  ReportUpdate202Response,
  ReportUpdateDefaultResponse,
  ReportUpdateLogicalResponse,
  ReportVerify200Response,
  ReportVerify202Response,
  ReportVerifyDefaultResponse,
  ReportVerifyLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ReportGetOptionalParams,
  ReportCreateOrUpdateOptionalParams,
  ReportUpdateOptionalParams,
  ReportDeleteOptionalParams,
  ReportListByTenantOptionalParams,
  ReportSyncCertRecordOptionalParams,
  ReportCheckNameAvailabilityOptionalParams,
  ReportFixOptionalParams,
  ReportGetScopingQuestionsOptionalParams,
  ReportVerifyOptionalParams,
} from "../../models/options.js";

export function _reportGetSend(
  context: Client,
  reportName: string,
  options: ReportGetOptionalParams = { requestOptions: {} },
): StreamableMethod<ReportGet200Response | ReportGetDefaultResponse> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}",
      reportName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _reportGetDeserialize(
  result: ReportGet200Response | ReportGetDefaultResponse,
): Promise<ReportResource> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: {
      triggerTime: new Date(result.body.properties["triggerTime"]),
      timeZone: result.body.properties["timeZone"],
      resources: result.body.properties["resources"].map((p) => ({
        resourceId: p["resourceId"],
        resourceType: p["resourceType"],
        resourceKind: p["resourceKind"],
        resourceOrigin: p["resourceOrigin"],
        accountId: p["accountId"],
      })),
      status: result.body.properties["status"],
      errors: result.body.properties["errors"],
      tenantId: result.body.properties["tenantId"],
      offerGuid: result.body.properties["offerGuid"],
      nextTriggerTime:
        result.body.properties["nextTriggerTime"] !== undefined
          ? new Date(result.body.properties["nextTriggerTime"])
          : undefined,
      lastTriggerTime:
        result.body.properties["lastTriggerTime"] !== undefined
          ? new Date(result.body.properties["lastTriggerTime"])
          : undefined,
      subscriptions: result.body.properties["subscriptions"],
      complianceStatus: !result.body.properties.complianceStatus
        ? undefined
        : {
            m365: !result.body.properties.complianceStatus?.m365
              ? undefined
              : {
                  passedCount:
                    result.body.properties.complianceStatus?.m365?.[
                      "passedCount"
                    ],
                  failedCount:
                    result.body.properties.complianceStatus?.m365?.[
                      "failedCount"
                    ],
                  manualCount:
                    result.body.properties.complianceStatus?.m365?.[
                      "manualCount"
                    ],
                  notApplicableCount:
                    result.body.properties.complianceStatus?.m365?.[
                      "notApplicableCount"
                    ],
                  pendingCount:
                    result.body.properties.complianceStatus?.m365?.[
                      "pendingCount"
                    ],
                },
          },
      storageInfo: !result.body.properties.storageInfo
        ? undefined
        : {
            subscriptionId:
              result.body.properties.storageInfo?.["subscriptionId"],
            resourceGroup:
              result.body.properties.storageInfo?.["resourceGroup"],
            accountName: result.body.properties.storageInfo?.["accountName"],
            location: result.body.properties.storageInfo?.["location"],
          },
      certRecords:
        result.body.properties["certRecords"] === undefined
          ? result.body.properties["certRecords"]
          : result.body.properties["certRecords"].map((p) => ({
              offerGuid: p["offerGuid"],
              certificationStatus: p["certificationStatus"],
              ingestionStatus: p["ingestionStatus"],
              controls:
                p["controls"] === undefined
                  ? p["controls"]
                  : p["controls"].map((p) => ({
                      controlId: p["controlId"],
                      controlStatus: p["controlStatus"],
                    })),
            })),
      provisioningState: result.body.properties["provisioningState"],
    },
  };
}

/** Get the AppComplianceAutomation report and its properties. */
export async function reportGet(
  context: Client,
  reportName: string,
  options: ReportGetOptionalParams = { requestOptions: {} },
): Promise<ReportResource> {
  const result = await _reportGetSend(context, reportName, options);
  return _reportGetDeserialize(result);
}

export function _reportCreateOrUpdateSend(
  context: Client,
  reportName: string,
  parameters: ReportResource,
  options: ReportCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | ReportCreateOrUpdate200Response
  | ReportCreateOrUpdate201Response
  | ReportCreateOrUpdateDefaultResponse
  | ReportCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}",
      reportName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: {
          triggerTime: parameters.properties["triggerTime"].toISOString(),
          timeZone: parameters.properties["timeZone"],
          resources: parameters.properties["resources"].map((p) => ({
            resourceId: p["resourceId"],
            resourceType: p["resourceType"],
            resourceKind: p["resourceKind"],
            resourceOrigin: p["resourceOrigin"],
            accountId: p["accountId"],
          })),
          offerGuid: parameters.properties["offerGuid"],
          storageInfo: !parameters.properties.storageInfo
            ? undefined
            : {
                subscriptionId:
                  parameters.properties.storageInfo?.["subscriptionId"],
                resourceGroup:
                  parameters.properties.storageInfo?.["resourceGroup"],
                accountName: parameters.properties.storageInfo?.["accountName"],
                location: parameters.properties.storageInfo?.["location"],
              },
        },
      },
    });
}

export async function _reportCreateOrUpdateDeserialize(
  result:
    | ReportCreateOrUpdate200Response
    | ReportCreateOrUpdate201Response
    | ReportCreateOrUpdateDefaultResponse
    | ReportCreateOrUpdateLogicalResponse,
): Promise<ReportResource> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as ReportCreateOrUpdateLogicalResponse;
  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: {
      triggerTime: new Date(result.body.properties["triggerTime"]),
      timeZone: result.body.properties["timeZone"],
      resources: result.body.properties["resources"].map((p) => ({
        resourceId: p["resourceId"],
        resourceType: p["resourceType"],
        resourceKind: p["resourceKind"],
        resourceOrigin: p["resourceOrigin"],
        accountId: p["accountId"],
      })),
      status: result.body.properties["status"],
      errors: result.body.properties["errors"],
      tenantId: result.body.properties["tenantId"],
      offerGuid: result.body.properties["offerGuid"],
      nextTriggerTime:
        result.body.properties["nextTriggerTime"] !== undefined
          ? new Date(result.body.properties["nextTriggerTime"])
          : undefined,
      lastTriggerTime:
        result.body.properties["lastTriggerTime"] !== undefined
          ? new Date(result.body.properties["lastTriggerTime"])
          : undefined,
      subscriptions: result.body.properties["subscriptions"],
      complianceStatus: !result.body.properties.complianceStatus
        ? undefined
        : {
            m365: !result.body.properties.complianceStatus?.m365
              ? undefined
              : {
                  passedCount:
                    result.body.properties.complianceStatus?.m365?.[
                      "passedCount"
                    ],
                  failedCount:
                    result.body.properties.complianceStatus?.m365?.[
                      "failedCount"
                    ],
                  manualCount:
                    result.body.properties.complianceStatus?.m365?.[
                      "manualCount"
                    ],
                  notApplicableCount:
                    result.body.properties.complianceStatus?.m365?.[
                      "notApplicableCount"
                    ],
                  pendingCount:
                    result.body.properties.complianceStatus?.m365?.[
                      "pendingCount"
                    ],
                },
          },
      storageInfo: !result.body.properties.storageInfo
        ? undefined
        : {
            subscriptionId:
              result.body.properties.storageInfo?.["subscriptionId"],
            resourceGroup:
              result.body.properties.storageInfo?.["resourceGroup"],
            accountName: result.body.properties.storageInfo?.["accountName"],
            location: result.body.properties.storageInfo?.["location"],
          },
      certRecords:
        result.body.properties["certRecords"] === undefined
          ? result.body.properties["certRecords"]
          : result.body.properties["certRecords"].map((p) => ({
              offerGuid: p["offerGuid"],
              certificationStatus: p["certificationStatus"],
              ingestionStatus: p["ingestionStatus"],
              controls:
                p["controls"] === undefined
                  ? p["controls"]
                  : p["controls"].map((p) => ({
                      controlId: p["controlId"],
                      controlStatus: p["controlStatus"],
                    })),
            })),
      provisioningState: result.body.properties["provisioningState"],
    },
  };
}

/** Create a new AppComplianceAutomation report or update an exiting AppComplianceAutomation report. */
export function reportCreateOrUpdate(
  context: Client,
  reportName: string,
  parameters: ReportResource,
  options: ReportCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ReportResource>, ReportResource> {
  return getLongRunningPoller(context, _reportCreateOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _reportCreateOrUpdateSend(context, reportName, parameters, options),
  }) as PollerLike<OperationState<ReportResource>, ReportResource>;
}

export function _reportUpdateSend(
  context: Client,
  reportName: string,
  properties: ReportResourcePatch,
  options: ReportUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | ReportUpdate200Response
  | ReportUpdate202Response
  | ReportUpdateDefaultResponse
  | ReportUpdateLogicalResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}",
      reportName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !properties.properties
          ? undefined
          : {
              triggerTime:
                properties.properties?.["triggerTime"]?.toISOString(),
              timeZone: properties.properties?.["timeZone"],
              resources:
                properties.properties?.["resources"] === undefined
                  ? properties.properties?.["resources"]
                  : properties.properties?.["resources"].map((p) => ({
                      resourceId: p["resourceId"],
                      resourceType: p["resourceType"],
                      resourceKind: p["resourceKind"],
                      resourceOrigin: p["resourceOrigin"],
                      accountId: p["accountId"],
                    })),
              offerGuid: properties.properties?.["offerGuid"],
              storageInfo: !properties.properties?.storageInfo
                ? undefined
                : {
                    subscriptionId:
                      properties.properties?.storageInfo?.["subscriptionId"],
                    resourceGroup:
                      properties.properties?.storageInfo?.["resourceGroup"],
                    accountName:
                      properties.properties?.storageInfo?.["accountName"],
                    location: properties.properties?.storageInfo?.["location"],
                  },
            },
      },
    });
}

export async function _reportUpdateDeserialize(
  result:
    | ReportUpdate200Response
    | ReportUpdate202Response
    | ReportUpdateDefaultResponse
    | ReportUpdateLogicalResponse,
): Promise<ReportResource> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as ReportUpdateLogicalResponse;
  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: {
      triggerTime: new Date(result.body.properties["triggerTime"]),
      timeZone: result.body.properties["timeZone"],
      resources: result.body.properties["resources"].map((p) => ({
        resourceId: p["resourceId"],
        resourceType: p["resourceType"],
        resourceKind: p["resourceKind"],
        resourceOrigin: p["resourceOrigin"],
        accountId: p["accountId"],
      })),
      status: result.body.properties["status"],
      errors: result.body.properties["errors"],
      tenantId: result.body.properties["tenantId"],
      offerGuid: result.body.properties["offerGuid"],
      nextTriggerTime:
        result.body.properties["nextTriggerTime"] !== undefined
          ? new Date(result.body.properties["nextTriggerTime"])
          : undefined,
      lastTriggerTime:
        result.body.properties["lastTriggerTime"] !== undefined
          ? new Date(result.body.properties["lastTriggerTime"])
          : undefined,
      subscriptions: result.body.properties["subscriptions"],
      complianceStatus: !result.body.properties.complianceStatus
        ? undefined
        : {
            m365: !result.body.properties.complianceStatus?.m365
              ? undefined
              : {
                  passedCount:
                    result.body.properties.complianceStatus?.m365?.[
                      "passedCount"
                    ],
                  failedCount:
                    result.body.properties.complianceStatus?.m365?.[
                      "failedCount"
                    ],
                  manualCount:
                    result.body.properties.complianceStatus?.m365?.[
                      "manualCount"
                    ],
                  notApplicableCount:
                    result.body.properties.complianceStatus?.m365?.[
                      "notApplicableCount"
                    ],
                  pendingCount:
                    result.body.properties.complianceStatus?.m365?.[
                      "pendingCount"
                    ],
                },
          },
      storageInfo: !result.body.properties.storageInfo
        ? undefined
        : {
            subscriptionId:
              result.body.properties.storageInfo?.["subscriptionId"],
            resourceGroup:
              result.body.properties.storageInfo?.["resourceGroup"],
            accountName: result.body.properties.storageInfo?.["accountName"],
            location: result.body.properties.storageInfo?.["location"],
          },
      certRecords:
        result.body.properties["certRecords"] === undefined
          ? result.body.properties["certRecords"]
          : result.body.properties["certRecords"].map((p) => ({
              offerGuid: p["offerGuid"],
              certificationStatus: p["certificationStatus"],
              ingestionStatus: p["ingestionStatus"],
              controls:
                p["controls"] === undefined
                  ? p["controls"]
                  : p["controls"].map((p) => ({
                      controlId: p["controlId"],
                      controlStatus: p["controlStatus"],
                    })),
            })),
      provisioningState: result.body.properties["provisioningState"],
    },
  };
}

/** Update an exiting AppComplianceAutomation report. */
export function reportUpdate(
  context: Client,
  reportName: string,
  properties: ReportResourcePatch,
  options: ReportUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ReportResource>, ReportResource> {
  return getLongRunningPoller(context, _reportUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _reportUpdateSend(context, reportName, properties, options),
  }) as PollerLike<OperationState<ReportResource>, ReportResource>;
}

export function _reportDeleteSend(
  context: Client,
  reportName: string,
  options: ReportDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | ReportDelete202Response
  | ReportDelete204Response
  | ReportDeleteDefaultResponse
  | ReportDeleteLogicalResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}",
      reportName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _reportDeleteDeserialize(
  result:
    | ReportDelete202Response
    | ReportDelete204Response
    | ReportDeleteDefaultResponse
    | ReportDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as ReportDeleteLogicalResponse;
  return;
}

/** Delete an AppComplianceAutomation report. */
export function reportDelete(
  context: Client,
  reportName: string,
  options: ReportDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _reportDeleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _reportDeleteSend(context, reportName, options),
  }) as PollerLike<OperationState<void>, void>;
}

export function _reportListByTenantSend(
  context: Client,
  options: ReportListByTenantOptionalParams = { requestOptions: {} },
): StreamableMethod<
  ReportListByTenant200Response | ReportListByTenantDefaultResponse
> {
  return context
    .path("/providers/Microsoft.AppComplianceAutomation/reports")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        $skipToken: options?.skipToken,
        $top: options?.top,
        $select: options?.select,
        $filter: options?.filter,
        $orderby: options?.orderby,
        offerGuid: options?.offerGuid,
        reportCreatorTenantId: options?.reportCreatorTenantId,
      },
    });
}

export async function _reportListByTenantDeserialize(
  result: ReportListByTenant200Response | ReportListByTenantDefaultResponse,
): Promise<ReportResourceListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      id: p["id"],
      name: p["name"],
      type: p["type"],
      systemData: !p.systemData
        ? undefined
        : {
            createdBy: p.systemData?.["createdBy"],
            createdByType: p.systemData?.["createdByType"],
            createdAt:
              p.systemData?.["createdAt"] !== undefined
                ? new Date(p.systemData?.["createdAt"])
                : undefined,
            lastModifiedBy: p.systemData?.["lastModifiedBy"],
            lastModifiedByType: p.systemData?.["lastModifiedByType"],
            lastModifiedAt:
              p.systemData?.["lastModifiedAt"] !== undefined
                ? new Date(p.systemData?.["lastModifiedAt"])
                : undefined,
          },
      properties: {
        triggerTime: new Date(p.properties["triggerTime"]),
        timeZone: p.properties["timeZone"],
        resources: p.properties["resources"].map((p) => ({
          resourceId: p["resourceId"],
          resourceType: p["resourceType"],
          resourceKind: p["resourceKind"],
          resourceOrigin: p["resourceOrigin"],
          accountId: p["accountId"],
        })),
        status: p.properties["status"],
        errors: p.properties["errors"],
        tenantId: p.properties["tenantId"],
        offerGuid: p.properties["offerGuid"],
        nextTriggerTime:
          p.properties["nextTriggerTime"] !== undefined
            ? new Date(p.properties["nextTriggerTime"])
            : undefined,
        lastTriggerTime:
          p.properties["lastTriggerTime"] !== undefined
            ? new Date(p.properties["lastTriggerTime"])
            : undefined,
        subscriptions: p.properties["subscriptions"],
        complianceStatus: !p.properties.complianceStatus
          ? undefined
          : {
              m365: !p.properties.complianceStatus?.m365
                ? undefined
                : {
                    passedCount:
                      p.properties.complianceStatus?.m365?.["passedCount"],
                    failedCount:
                      p.properties.complianceStatus?.m365?.["failedCount"],
                    manualCount:
                      p.properties.complianceStatus?.m365?.["manualCount"],
                    notApplicableCount:
                      p.properties.complianceStatus?.m365?.[
                        "notApplicableCount"
                      ],
                    pendingCount:
                      p.properties.complianceStatus?.m365?.["pendingCount"],
                  },
            },
        storageInfo: !p.properties.storageInfo
          ? undefined
          : {
              subscriptionId: p.properties.storageInfo?.["subscriptionId"],
              resourceGroup: p.properties.storageInfo?.["resourceGroup"],
              accountName: p.properties.storageInfo?.["accountName"],
              location: p.properties.storageInfo?.["location"],
            },
        certRecords:
          p.properties["certRecords"] === undefined
            ? p.properties["certRecords"]
            : p.properties["certRecords"].map((p) => ({
                offerGuid: p["offerGuid"],
                certificationStatus: p["certificationStatus"],
                ingestionStatus: p["ingestionStatus"],
                controls:
                  p["controls"] === undefined
                    ? p["controls"]
                    : p["controls"].map((p) => ({
                        controlId: p["controlId"],
                        controlStatus: p["controlStatus"],
                      })),
              })),
        provisioningState: p.properties["provisioningState"],
      },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Get the AppComplianceAutomation report list for the tenant. */
export function reportListByTenant(
  context: Client,
  options: ReportListByTenantOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ReportResource> {
  return buildPagedAsyncIterator(
    context,
    () => _reportListByTenantSend(context, options),
    _reportListByTenantDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _reportSyncCertRecordSend(
  context: Client,
  reportName: string,
  body: SyncCertRecordRequest,
  options: ReportSyncCertRecordOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | ReportSyncCertRecord200Response
  | ReportSyncCertRecord202Response
  | ReportSyncCertRecordDefaultResponse
  | ReportSyncCertRecordLogicalResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/syncCertRecord",
      reportName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        certRecord: {
          offerGuid: body.certRecord["offerGuid"],
          certificationStatus: body.certRecord["certificationStatus"],
          ingestionStatus: body.certRecord["ingestionStatus"],
          controls:
            body.certRecord["controls"] === undefined
              ? body.certRecord["controls"]
              : body.certRecord["controls"].map((p) => ({
                  controlId: p["controlId"],
                  controlStatus: p["controlStatus"],
                })),
        },
      },
    });
}

export async function _reportSyncCertRecordDeserialize(
  result:
    | ReportSyncCertRecord200Response
    | ReportSyncCertRecord202Response
    | ReportSyncCertRecordDefaultResponse
    | ReportSyncCertRecordLogicalResponse,
): Promise<SyncCertRecordResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as ReportSyncCertRecordLogicalResponse;
  return {
    certRecord: !result.body.certRecord
      ? undefined
      : {
          offerGuid: result.body.certRecord?.["offerGuid"],
          certificationStatus: result.body.certRecord?.["certificationStatus"],
          ingestionStatus: result.body.certRecord?.["ingestionStatus"],
          controls:
            result.body.certRecord?.["controls"] === undefined
              ? result.body.certRecord?.["controls"]
              : result.body.certRecord?.["controls"].map((p) => ({
                  controlId: p["controlId"],
                  controlStatus: p["controlStatus"],
                })),
        },
  };
}

/** Synchronize attestation record from app compliance. */
export function reportSyncCertRecord(
  context: Client,
  reportName: string,
  body: SyncCertRecordRequest,
  options: ReportSyncCertRecordOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<SyncCertRecordResponse>, SyncCertRecordResponse> {
  return getLongRunningPoller(context, _reportSyncCertRecordDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _reportSyncCertRecordSend(context, reportName, body, options),
  }) as PollerLike<
    OperationState<SyncCertRecordResponse>,
    SyncCertRecordResponse
  >;
}

export function _reportCheckNameAvailabilitySend(
  context: Client,
  reportName: string,
  body: CheckNameAvailabilityRequest,
  options: ReportCheckNameAvailabilityOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | ReportCheckNameAvailability200Response
  | ReportCheckNameAvailabilityDefaultResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/checkNameAvailability",
      reportName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"], type: body["type"] },
    });
}

export async function _reportCheckNameAvailabilityDeserialize(
  result:
    | ReportCheckNameAvailability200Response
    | ReportCheckNameAvailabilityDefaultResponse,
): Promise<CheckNameAvailabilityResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    nameAvailable: result.body["nameAvailable"],
    reason: result.body["reason"],
    message: result.body["message"],
  };
}

/** Checks the report's nested resource name availability, e.g: Webhooks, Evidences, Snapshots. */
export async function reportCheckNameAvailability(
  context: Client,
  reportName: string,
  body: CheckNameAvailabilityRequest,
  options: ReportCheckNameAvailabilityOptionalParams = { requestOptions: {} },
): Promise<CheckNameAvailabilityResponse> {
  const result = await _reportCheckNameAvailabilitySend(
    context,
    reportName,
    body,
    options,
  );
  return _reportCheckNameAvailabilityDeserialize(result);
}

export function _reportFixSend(
  context: Client,
  reportName: string,
  options: ReportFixOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | ReportFix200Response
  | ReportFix202Response
  | ReportFixDefaultResponse
  | ReportFixLogicalResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/fix",
      reportName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _reportFixDeserialize(
  result:
    | ReportFix200Response
    | ReportFix202Response
    | ReportFixDefaultResponse
    | ReportFixLogicalResponse,
): Promise<ReportFixResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as ReportFixLogicalResponse;
  return {
    result: result.body["result"],
    reason: result.body["reason"],
  };
}

/** Fix the AppComplianceAutomation report error. e.g: App Compliance Automation Tool service unregistered, automation removed. */
export function reportFix(
  context: Client,
  reportName: string,
  options: ReportFixOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ReportFixResult>, ReportFixResult> {
  return getLongRunningPoller(context, _reportFixDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _reportFixSend(context, reportName, options),
  }) as PollerLike<OperationState<ReportFixResult>, ReportFixResult>;
}

export function _reportGetScopingQuestionsSend(
  context: Client,
  reportName: string,
  options: ReportGetScopingQuestionsOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | ReportGetScopingQuestions200Response
  | ReportGetScopingQuestionsDefaultResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/getScopingQuestions",
      reportName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _reportGetScopingQuestionsDeserialize(
  result:
    | ReportGetScopingQuestions200Response
    | ReportGetScopingQuestionsDefaultResponse,
): Promise<ScopingQuestions> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    questions:
      result.body["questions"] === undefined
        ? result.body["questions"]
        : result.body["questions"].map((p) => ({
            questionId: p["questionId"],
            superiorQuestionId: p["superiorQuestionId"],
            inputType: p["inputType"],
            optionIds: p["optionIds"],
            rules: p["rules"],
            showSubQuestionsValue: p["showSubQuestionsValue"],
          })),
  };
}

/** Fix the AppComplianceAutomation report error. e.g: App Compliance Automation Tool service unregistered, automation removed. */
export async function reportGetScopingQuestions(
  context: Client,
  reportName: string,
  options: ReportGetScopingQuestionsOptionalParams = { requestOptions: {} },
): Promise<ScopingQuestions> {
  const result = await _reportGetScopingQuestionsSend(
    context,
    reportName,
    options,
  );
  return _reportGetScopingQuestionsDeserialize(result);
}

export function _reportVerifySend(
  context: Client,
  reportName: string,
  options: ReportVerifyOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | ReportVerify200Response
  | ReportVerify202Response
  | ReportVerifyDefaultResponse
  | ReportVerifyLogicalResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/verify",
      reportName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _reportVerifyDeserialize(
  result:
    | ReportVerify200Response
    | ReportVerify202Response
    | ReportVerifyDefaultResponse
    | ReportVerifyLogicalResponse,
): Promise<ReportVerificationResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as ReportVerifyLogicalResponse;
  return {
    result: result.body["result"],
    reason: result.body["reason"],
  };
}

/** Verify the AppComplianceAutomation report health status. */
export function reportVerify(
  context: Client,
  reportName: string,
  options: ReportVerifyOptionalParams = { requestOptions: {} },
): PollerLike<
  OperationState<ReportVerificationResult>,
  ReportVerificationResult
> {
  return getLongRunningPoller(context, _reportVerifyDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _reportVerifySend(context, reportName, options),
  }) as PollerLike<
    OperationState<ReportVerificationResult>,
    ReportVerificationResult
  >;
}
