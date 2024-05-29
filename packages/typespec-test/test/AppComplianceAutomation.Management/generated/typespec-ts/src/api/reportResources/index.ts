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
  ReportResourcesCheckNameAvailability200Response,
  ReportResourcesCheckNameAvailabilityDefaultResponse,
  ReportResourcesCreateOrUpdate200Response,
  ReportResourcesCreateOrUpdate201Response,
  ReportResourcesCreateOrUpdateDefaultResponse,
  ReportResourcesCreateOrUpdateLogicalResponse,
  ReportResourcesDelete202Response,
  ReportResourcesDelete204Response,
  ReportResourcesDeleteDefaultResponse,
  ReportResourcesDeleteLogicalResponse,
  ReportResourcesFix200Response,
  ReportResourcesFix202Response,
  ReportResourcesFixDefaultResponse,
  ReportResourcesFixLogicalResponse,
  ReportResourcesGet200Response,
  ReportResourcesGetDefaultResponse,
  ReportResourcesGetScopingQuestions200Response,
  ReportResourcesGetScopingQuestionsDefaultResponse,
  ReportResourcesListByTenant200Response,
  ReportResourcesListByTenantDefaultResponse,
  ReportResourcesSyncCertRecord200Response,
  ReportResourcesSyncCertRecord202Response,
  ReportResourcesSyncCertRecordDefaultResponse,
  ReportResourcesSyncCertRecordLogicalResponse,
  ReportResourcesUpdate200Response,
  ReportResourcesUpdate202Response,
  ReportResourcesUpdateDefaultResponse,
  ReportResourcesUpdateLogicalResponse,
  ReportResourcesVerify200Response,
  ReportResourcesVerify202Response,
  ReportResourcesVerifyDefaultResponse,
  ReportResourcesVerifyLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ReportResourcesGetOptionalParams,
  ReportResourcesCreateOrUpdateOptionalParams,
  ReportResourcesUpdateOptionalParams,
  ReportResourcesDeleteOptionalParams,
  ReportResourcesListByTenantOptionalParams,
  ReportResourcesSyncCertRecordOptionalParams,
  ReportResourcesCheckNameAvailabilityOptionalParams,
  ReportResourcesFixOptionalParams,
  ReportResourcesGetScopingQuestionsOptionalParams,
  ReportResourcesVerifyOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  reportName: string,
  options: ReportResourcesGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  ReportResourcesGet200Response | ReportResourcesGetDefaultResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}",
      reportName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: ReportResourcesGet200Response | ReportResourcesGetDefaultResponse,
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
export async function get(
  context: Client,
  reportName: string,
  options: ReportResourcesGetOptionalParams = { requestOptions: {} },
): Promise<ReportResource> {
  const result = await _getSend(context, reportName, options);
  return _getDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  reportName: string,
  parameters: ReportResource,
  options: ReportResourcesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | ReportResourcesCreateOrUpdate200Response
  | ReportResourcesCreateOrUpdate201Response
  | ReportResourcesCreateOrUpdateDefaultResponse
  | ReportResourcesCreateOrUpdateLogicalResponse
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

export async function _createOrUpdateDeserialize(
  result:
    | ReportResourcesCreateOrUpdate200Response
    | ReportResourcesCreateOrUpdate201Response
    | ReportResourcesCreateOrUpdateDefaultResponse
    | ReportResourcesCreateOrUpdateLogicalResponse,
): Promise<ReportResource> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as ReportResourcesCreateOrUpdateLogicalResponse;
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
export function createOrUpdate(
  context: Client,
  reportName: string,
  parameters: ReportResource,
  options: ReportResourcesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ReportResource>, ReportResource> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(context, reportName, parameters, options),
  }) as PollerLike<OperationState<ReportResource>, ReportResource>;
}

export function _updateSend(
  context: Client,
  reportName: string,
  properties: ReportResourcePatch,
  options: ReportResourcesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | ReportResourcesUpdate200Response
  | ReportResourcesUpdate202Response
  | ReportResourcesUpdateDefaultResponse
  | ReportResourcesUpdateLogicalResponse
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

export async function _updateDeserialize(
  result:
    | ReportResourcesUpdate200Response
    | ReportResourcesUpdate202Response
    | ReportResourcesUpdateDefaultResponse
    | ReportResourcesUpdateLogicalResponse,
): Promise<ReportResource> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as ReportResourcesUpdateLogicalResponse;
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
export function update(
  context: Client,
  reportName: string,
  properties: ReportResourcePatch,
  options: ReportResourcesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ReportResource>, ReportResource> {
  return getLongRunningPoller(context, _updateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(context, reportName, properties, options),
  }) as PollerLike<OperationState<ReportResource>, ReportResource>;
}

export function _$deleteSend(
  context: Client,
  reportName: string,
  options: ReportResourcesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | ReportResourcesDelete202Response
  | ReportResourcesDelete204Response
  | ReportResourcesDeleteDefaultResponse
  | ReportResourcesDeleteLogicalResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}",
      reportName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | ReportResourcesDelete202Response
    | ReportResourcesDelete204Response
    | ReportResourcesDeleteDefaultResponse
    | ReportResourcesDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as ReportResourcesDeleteLogicalResponse;
  return;
}

/** Delete an AppComplianceAutomation report. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  reportName: string,
  options: ReportResourcesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _$deleteSend(context, reportName, options),
  }) as PollerLike<OperationState<void>, void>;
}

export function _listByTenantSend(
  context: Client,
  options: ReportResourcesListByTenantOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | ReportResourcesListByTenant200Response
  | ReportResourcesListByTenantDefaultResponse
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

export async function _listByTenantDeserialize(
  result:
    | ReportResourcesListByTenant200Response
    | ReportResourcesListByTenantDefaultResponse,
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
export function listByTenant(
  context: Client,
  options: ReportResourcesListByTenantOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ReportResource> {
  return buildPagedAsyncIterator(
    context,
    () => _listByTenantSend(context, options),
    _listByTenantDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _syncCertRecordSend(
  context: Client,
  reportName: string,
  body: SyncCertRecordRequest,
  options: ReportResourcesSyncCertRecordOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | ReportResourcesSyncCertRecord200Response
  | ReportResourcesSyncCertRecord202Response
  | ReportResourcesSyncCertRecordDefaultResponse
  | ReportResourcesSyncCertRecordLogicalResponse
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

export async function _syncCertRecordDeserialize(
  result:
    | ReportResourcesSyncCertRecord200Response
    | ReportResourcesSyncCertRecord202Response
    | ReportResourcesSyncCertRecordDefaultResponse
    | ReportResourcesSyncCertRecordLogicalResponse,
): Promise<SyncCertRecordResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as ReportResourcesSyncCertRecordLogicalResponse;
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
export function syncCertRecord(
  context: Client,
  reportName: string,
  body: SyncCertRecordRequest,
  options: ReportResourcesSyncCertRecordOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<SyncCertRecordResponse>, SyncCertRecordResponse> {
  return getLongRunningPoller(context, _syncCertRecordDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _syncCertRecordSend(context, reportName, body, options),
  }) as PollerLike<
    OperationState<SyncCertRecordResponse>,
    SyncCertRecordResponse
  >;
}

export function _checkNameAvailabilitySend(
  context: Client,
  reportName: string,
  body: CheckNameAvailabilityRequest,
  options: ReportResourcesCheckNameAvailabilityOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | ReportResourcesCheckNameAvailability200Response
  | ReportResourcesCheckNameAvailabilityDefaultResponse
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

export async function _checkNameAvailabilityDeserialize(
  result:
    | ReportResourcesCheckNameAvailability200Response
    | ReportResourcesCheckNameAvailabilityDefaultResponse,
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
export async function checkNameAvailability(
  context: Client,
  reportName: string,
  body: CheckNameAvailabilityRequest,
  options: ReportResourcesCheckNameAvailabilityOptionalParams = {
    requestOptions: {},
  },
): Promise<CheckNameAvailabilityResponse> {
  const result = await _checkNameAvailabilitySend(
    context,
    reportName,
    body,
    options,
  );
  return _checkNameAvailabilityDeserialize(result);
}

export function _fixSend(
  context: Client,
  reportName: string,
  options: ReportResourcesFixOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | ReportResourcesFix200Response
  | ReportResourcesFix202Response
  | ReportResourcesFixDefaultResponse
  | ReportResourcesFixLogicalResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/fix",
      reportName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _fixDeserialize(
  result:
    | ReportResourcesFix200Response
    | ReportResourcesFix202Response
    | ReportResourcesFixDefaultResponse
    | ReportResourcesFixLogicalResponse,
): Promise<ReportFixResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as ReportResourcesFixLogicalResponse;
  return {
    result: result.body["result"],
    reason: result.body["reason"],
  };
}

/** Fix the AppComplianceAutomation report error. e.g: App Compliance Automation Tool service unregistered, automation removed. */
export function fix(
  context: Client,
  reportName: string,
  options: ReportResourcesFixOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ReportFixResult>, ReportFixResult> {
  return getLongRunningPoller(context, _fixDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _fixSend(context, reportName, options),
  }) as PollerLike<OperationState<ReportFixResult>, ReportFixResult>;
}

export function _getScopingQuestionsSend(
  context: Client,
  reportName: string,
  options: ReportResourcesGetScopingQuestionsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | ReportResourcesGetScopingQuestions200Response
  | ReportResourcesGetScopingQuestionsDefaultResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/getScopingQuestions",
      reportName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _getScopingQuestionsDeserialize(
  result:
    | ReportResourcesGetScopingQuestions200Response
    | ReportResourcesGetScopingQuestionsDefaultResponse,
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
export async function getScopingQuestions(
  context: Client,
  reportName: string,
  options: ReportResourcesGetScopingQuestionsOptionalParams = {
    requestOptions: {},
  },
): Promise<ScopingQuestions> {
  const result = await _getScopingQuestionsSend(context, reportName, options);
  return _getScopingQuestionsDeserialize(result);
}

export function _verifySend(
  context: Client,
  reportName: string,
  options: ReportResourcesVerifyOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | ReportResourcesVerify200Response
  | ReportResourcesVerify202Response
  | ReportResourcesVerifyDefaultResponse
  | ReportResourcesVerifyLogicalResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/verify",
      reportName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _verifyDeserialize(
  result:
    | ReportResourcesVerify200Response
    | ReportResourcesVerify202Response
    | ReportResourcesVerifyDefaultResponse
    | ReportResourcesVerifyLogicalResponse,
): Promise<ReportVerificationResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as ReportResourcesVerifyLogicalResponse;
  return {
    result: result.body["result"],
    reason: result.body["reason"],
  };
}

/** Verify the AppComplianceAutomation report health status. */
export function verify(
  context: Client,
  reportName: string,
  options: ReportResourcesVerifyOptionalParams = { requestOptions: {} },
): PollerLike<
  OperationState<ReportVerificationResult>,
  ReportVerificationResult
> {
  return getLongRunningPoller(context, _verifyDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _verifySend(context, reportName, options),
  }) as PollerLike<
    OperationState<ReportVerificationResult>,
    ReportVerificationResult
  >;
}
