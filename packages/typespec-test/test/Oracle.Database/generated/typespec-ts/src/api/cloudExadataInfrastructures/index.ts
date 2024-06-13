// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  CloudExadataInfrastructureListResult,
  CloudExadataInfrastructure,
  CloudExadataInfrastructureUpdate,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  DatabaseContext as Client,
  CloudExadataInfrastructuresAddStorageCapacity200Response,
  CloudExadataInfrastructuresAddStorageCapacity202Response,
  CloudExadataInfrastructuresAddStorageCapacityDefaultResponse,
  CloudExadataInfrastructuresAddStorageCapacityLogicalResponse,
  CloudExadataInfrastructuresCreateOrUpdate200Response,
  CloudExadataInfrastructuresCreateOrUpdate201Response,
  CloudExadataInfrastructuresCreateOrUpdateDefaultResponse,
  CloudExadataInfrastructuresCreateOrUpdateLogicalResponse,
  CloudExadataInfrastructuresDelete202Response,
  CloudExadataInfrastructuresDelete204Response,
  CloudExadataInfrastructuresDeleteDefaultResponse,
  CloudExadataInfrastructuresDeleteLogicalResponse,
  CloudExadataInfrastructuresGet200Response,
  CloudExadataInfrastructuresGetDefaultResponse,
  CloudExadataInfrastructuresListByResourceGroup200Response,
  CloudExadataInfrastructuresListByResourceGroupDefaultResponse,
  CloudExadataInfrastructuresListBySubscription200Response,
  CloudExadataInfrastructuresListBySubscriptionDefaultResponse,
  CloudExadataInfrastructuresUpdate200Response,
  CloudExadataInfrastructuresUpdate202Response,
  CloudExadataInfrastructuresUpdateDefaultResponse,
  CloudExadataInfrastructuresUpdateLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  CloudExadataInfrastructuresListBySubscriptionOptionalParams,
  CloudExadataInfrastructuresCreateOrUpdateOptionalParams,
  CloudExadataInfrastructuresGetOptionalParams,
  CloudExadataInfrastructuresUpdateOptionalParams,
  CloudExadataInfrastructuresDeleteOptionalParams,
  CloudExadataInfrastructuresListByResourceGroupOptionalParams,
  CloudExadataInfrastructuresAddStorageCapacityOptionalParams,
} from "../../models/options.js";

export function _listBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: CloudExadataInfrastructuresListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | CloudExadataInfrastructuresListBySubscription200Response
  | CloudExadataInfrastructuresListBySubscriptionDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/cloudExadataInfrastructures",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listBySubscriptionDeserialize(
  result:
    | CloudExadataInfrastructuresListBySubscription200Response
    | CloudExadataInfrastructuresListBySubscriptionDefaultResponse,
): Promise<CloudExadataInfrastructureListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      location: p["location"],
      tags: p["tags"],
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
      properties: !p.properties
        ? undefined
        : {
            ocid: p.properties?.["ocid"],
            computeCount: p.properties?.["computeCount"],
            storageCount: p.properties?.["storageCount"],
            totalStorageSizeInGbs: p.properties?.["totalStorageSizeInGbs"],
            availableStorageSizeInGbs:
              p.properties?.["availableStorageSizeInGbs"],
            timeCreated: p.properties?.["timeCreated"],
            lifecycleDetails: p.properties?.["lifecycleDetails"],
            maintenanceWindow: !p.properties?.maintenanceWindow
              ? undefined
              : {
                  preference: p.properties?.maintenanceWindow?.["preference"],
                  months:
                    p.properties?.maintenanceWindow?.["months"] === undefined
                      ? p.properties?.maintenanceWindow?.["months"]
                      : p.properties?.maintenanceWindow?.["months"].map(
                          (p) => ({ name: p["name"] }),
                        ),
                  weeksOfMonth:
                    p.properties?.maintenanceWindow?.["weeksOfMonth"],
                  daysOfWeek:
                    p.properties?.maintenanceWindow?.["daysOfWeek"] ===
                    undefined
                      ? p.properties?.maintenanceWindow?.["daysOfWeek"]
                      : p.properties?.maintenanceWindow?.["daysOfWeek"].map(
                          (p) => ({ name: p["name"] }),
                        ),
                  hoursOfDay: p.properties?.maintenanceWindow?.["hoursOfDay"],
                  leadTimeInWeeks:
                    p.properties?.maintenanceWindow?.["leadTimeInWeeks"],
                  patchingMode:
                    p.properties?.maintenanceWindow?.["patchingMode"],
                  customActionTimeoutInMins:
                    p.properties?.maintenanceWindow?.[
                      "customActionTimeoutInMins"
                    ],
                  isCustomActionTimeoutEnabled:
                    p.properties?.maintenanceWindow?.[
                      "isCustomActionTimeoutEnabled"
                    ],
                  isMonthlyPatchingEnabled:
                    p.properties?.maintenanceWindow?.[
                      "isMonthlyPatchingEnabled"
                    ],
                },
            estimatedPatchingTime: !p.properties?.estimatedPatchingTime
              ? undefined
              : {
                  estimatedDbServerPatchingTime:
                    p.properties?.estimatedPatchingTime?.[
                      "estimatedDbServerPatchingTime"
                    ],
                  estimatedNetworkSwitchesPatchingTime:
                    p.properties?.estimatedPatchingTime?.[
                      "estimatedNetworkSwitchesPatchingTime"
                    ],
                  estimatedStorageServerPatchingTime:
                    p.properties?.estimatedPatchingTime?.[
                      "estimatedStorageServerPatchingTime"
                    ],
                  totalEstimatedPatchingTime:
                    p.properties?.estimatedPatchingTime?.[
                      "totalEstimatedPatchingTime"
                    ],
                },
            customerContacts:
              p.properties?.["customerContacts"] === undefined
                ? p.properties?.["customerContacts"]
                : p.properties?.["customerContacts"].map((p) => ({
                    email: p["email"],
                  })),
            provisioningState: p.properties?.["provisioningState"],
            lifecycleState: p.properties?.["lifecycleState"],
            shape: p.properties?.["shape"],
            ociUrl: p.properties?.["ociUrl"],
            cpuCount: p.properties?.["cpuCount"],
            maxCpuCount: p.properties?.["maxCpuCount"],
            memorySizeInGbs: p.properties?.["memorySizeInGbs"],
            maxMemoryInGbs: p.properties?.["maxMemoryInGbs"],
            dbNodeStorageSizeInGbs: p.properties?.["dbNodeStorageSizeInGbs"],
            maxDbNodeStorageSizeInGbs:
              p.properties?.["maxDbNodeStorageSizeInGbs"],
            dataStorageSizeInTbs: p.properties?.["dataStorageSizeInTbs"],
            maxDataStorageInTbs: p.properties?.["maxDataStorageInTbs"],
            dbServerVersion: p.properties?.["dbServerVersion"],
            storageServerVersion: p.properties?.["storageServerVersion"],
            activatedStorageCount: p.properties?.["activatedStorageCount"],
            additionalStorageCount: p.properties?.["additionalStorageCount"],
            displayName: p.properties?.["displayName"],
            lastMaintenanceRunId: p.properties?.["lastMaintenanceRunId"],
            nextMaintenanceRunId: p.properties?.["nextMaintenanceRunId"],
            monthlyDbServerVersion: p.properties?.["monthlyDbServerVersion"],
            monthlyStorageServerVersion:
              p.properties?.["monthlyStorageServerVersion"],
          },
      zones: p["zones"],
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List CloudExadataInfrastructure resources by subscription ID */
export function listBySubscription(
  context: Client,
  subscriptionId: string,
  options: CloudExadataInfrastructuresListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<CloudExadataInfrastructure> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, subscriptionId, options),
    _listBySubscriptionDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _createOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  resource: CloudExadataInfrastructure,
  options: CloudExadataInfrastructuresCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | CloudExadataInfrastructuresCreateOrUpdate200Response
  | CloudExadataInfrastructuresCreateOrUpdate201Response
  | CloudExadataInfrastructuresCreateOrUpdateDefaultResponse
  | CloudExadataInfrastructuresCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}",
      subscriptionId,
      resourceGroupName,
      cloudexadatainfrastructurename,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        location: resource["location"],
        tags: resource["tags"],
        properties: !resource.properties
          ? undefined
          : {
              computeCount: resource.properties?.["computeCount"],
              storageCount: resource.properties?.["storageCount"],
              maintenanceWindow: !resource.properties?.maintenanceWindow
                ? undefined
                : {
                    preference:
                      resource.properties?.maintenanceWindow?.["preference"],
                    months:
                      resource.properties?.maintenanceWindow?.["months"] ===
                      undefined
                        ? resource.properties?.maintenanceWindow?.["months"]
                        : resource.properties?.maintenanceWindow?.[
                            "months"
                          ].map((p) => ({ name: p["name"] })),
                    weeksOfMonth:
                      resource.properties?.maintenanceWindow?.["weeksOfMonth"],
                    daysOfWeek:
                      resource.properties?.maintenanceWindow?.["daysOfWeek"] ===
                      undefined
                        ? resource.properties?.maintenanceWindow?.["daysOfWeek"]
                        : resource.properties?.maintenanceWindow?.[
                            "daysOfWeek"
                          ].map((p) => ({ name: p["name"] })),
                    hoursOfDay:
                      resource.properties?.maintenanceWindow?.["hoursOfDay"],
                    leadTimeInWeeks:
                      resource.properties?.maintenanceWindow?.[
                        "leadTimeInWeeks"
                      ],
                    patchingMode:
                      resource.properties?.maintenanceWindow?.["patchingMode"],
                    customActionTimeoutInMins:
                      resource.properties?.maintenanceWindow?.[
                        "customActionTimeoutInMins"
                      ],
                    isCustomActionTimeoutEnabled:
                      resource.properties?.maintenanceWindow?.[
                        "isCustomActionTimeoutEnabled"
                      ],
                    isMonthlyPatchingEnabled:
                      resource.properties?.maintenanceWindow?.[
                        "isMonthlyPatchingEnabled"
                      ],
                  },
              customerContacts:
                resource.properties?.["customerContacts"] === undefined
                  ? resource.properties?.["customerContacts"]
                  : resource.properties?.["customerContacts"].map((p) => ({
                      email: p["email"],
                    })),
              shape: resource.properties?.["shape"],
              displayName: resource.properties?.["displayName"],
            },
        zones: resource["zones"],
      },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | CloudExadataInfrastructuresCreateOrUpdate200Response
    | CloudExadataInfrastructuresCreateOrUpdate201Response
    | CloudExadataInfrastructuresCreateOrUpdateDefaultResponse
    | CloudExadataInfrastructuresCreateOrUpdateLogicalResponse,
): Promise<CloudExadataInfrastructure> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as CloudExadataInfrastructuresCreateOrUpdateLogicalResponse;
  return {
    location: result.body["location"],
    tags: result.body["tags"],
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
    properties: !result.body.properties
      ? undefined
      : {
          ocid: result.body.properties?.["ocid"],
          computeCount: result.body.properties?.["computeCount"],
          storageCount: result.body.properties?.["storageCount"],
          totalStorageSizeInGbs:
            result.body.properties?.["totalStorageSizeInGbs"],
          availableStorageSizeInGbs:
            result.body.properties?.["availableStorageSizeInGbs"],
          timeCreated: result.body.properties?.["timeCreated"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          maintenanceWindow: !result.body.properties?.maintenanceWindow
            ? undefined
            : {
                preference:
                  result.body.properties?.maintenanceWindow?.["preference"],
                months:
                  result.body.properties?.maintenanceWindow?.["months"] ===
                  undefined
                    ? result.body.properties?.maintenanceWindow?.["months"]
                    : result.body.properties?.maintenanceWindow?.["months"].map(
                        (p) => ({ name: p["name"] }),
                      ),
                weeksOfMonth:
                  result.body.properties?.maintenanceWindow?.["weeksOfMonth"],
                daysOfWeek:
                  result.body.properties?.maintenanceWindow?.["daysOfWeek"] ===
                  undefined
                    ? result.body.properties?.maintenanceWindow?.["daysOfWeek"]
                    : result.body.properties?.maintenanceWindow?.[
                        "daysOfWeek"
                      ].map((p) => ({ name: p["name"] })),
                hoursOfDay:
                  result.body.properties?.maintenanceWindow?.["hoursOfDay"],
                leadTimeInWeeks:
                  result.body.properties?.maintenanceWindow?.[
                    "leadTimeInWeeks"
                  ],
                patchingMode:
                  result.body.properties?.maintenanceWindow?.["patchingMode"],
                customActionTimeoutInMins:
                  result.body.properties?.maintenanceWindow?.[
                    "customActionTimeoutInMins"
                  ],
                isCustomActionTimeoutEnabled:
                  result.body.properties?.maintenanceWindow?.[
                    "isCustomActionTimeoutEnabled"
                  ],
                isMonthlyPatchingEnabled:
                  result.body.properties?.maintenanceWindow?.[
                    "isMonthlyPatchingEnabled"
                  ],
              },
          estimatedPatchingTime: !result.body.properties?.estimatedPatchingTime
            ? undefined
            : {
                estimatedDbServerPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "estimatedDbServerPatchingTime"
                  ],
                estimatedNetworkSwitchesPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "estimatedNetworkSwitchesPatchingTime"
                  ],
                estimatedStorageServerPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "estimatedStorageServerPatchingTime"
                  ],
                totalEstimatedPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "totalEstimatedPatchingTime"
                  ],
              },
          customerContacts:
            result.body.properties?.["customerContacts"] === undefined
              ? result.body.properties?.["customerContacts"]
              : result.body.properties?.["customerContacts"].map((p) => ({
                  email: p["email"],
                })),
          provisioningState: result.body.properties?.["provisioningState"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          shape: result.body.properties?.["shape"],
          ociUrl: result.body.properties?.["ociUrl"],
          cpuCount: result.body.properties?.["cpuCount"],
          maxCpuCount: result.body.properties?.["maxCpuCount"],
          memorySizeInGbs: result.body.properties?.["memorySizeInGbs"],
          maxMemoryInGbs: result.body.properties?.["maxMemoryInGbs"],
          dbNodeStorageSizeInGbs:
            result.body.properties?.["dbNodeStorageSizeInGbs"],
          maxDbNodeStorageSizeInGbs:
            result.body.properties?.["maxDbNodeStorageSizeInGbs"],
          dataStorageSizeInTbs:
            result.body.properties?.["dataStorageSizeInTbs"],
          maxDataStorageInTbs: result.body.properties?.["maxDataStorageInTbs"],
          dbServerVersion: result.body.properties?.["dbServerVersion"],
          storageServerVersion:
            result.body.properties?.["storageServerVersion"],
          activatedStorageCount:
            result.body.properties?.["activatedStorageCount"],
          additionalStorageCount:
            result.body.properties?.["additionalStorageCount"],
          displayName: result.body.properties?.["displayName"],
          lastMaintenanceRunId:
            result.body.properties?.["lastMaintenanceRunId"],
          nextMaintenanceRunId:
            result.body.properties?.["nextMaintenanceRunId"],
          monthlyDbServerVersion:
            result.body.properties?.["monthlyDbServerVersion"],
          monthlyStorageServerVersion:
            result.body.properties?.["monthlyStorageServerVersion"],
        },
    zones: result.body["zones"],
  };
}

/** Create a CloudExadataInfrastructure */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  resource: CloudExadataInfrastructure,
  options: CloudExadataInfrastructuresCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<CloudExadataInfrastructure>,
  CloudExadataInfrastructure
> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        cloudexadatainfrastructurename,
        resource,
        options,
      ),
  }) as PollerLike<
    OperationState<CloudExadataInfrastructure>,
    CloudExadataInfrastructure
  >;
}

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: CloudExadataInfrastructuresGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | CloudExadataInfrastructuresGet200Response
  | CloudExadataInfrastructuresGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}",
      subscriptionId,
      resourceGroupName,
      cloudexadatainfrastructurename,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result:
    | CloudExadataInfrastructuresGet200Response
    | CloudExadataInfrastructuresGetDefaultResponse,
): Promise<CloudExadataInfrastructure> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    location: result.body["location"],
    tags: result.body["tags"],
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
    properties: !result.body.properties
      ? undefined
      : {
          ocid: result.body.properties?.["ocid"],
          computeCount: result.body.properties?.["computeCount"],
          storageCount: result.body.properties?.["storageCount"],
          totalStorageSizeInGbs:
            result.body.properties?.["totalStorageSizeInGbs"],
          availableStorageSizeInGbs:
            result.body.properties?.["availableStorageSizeInGbs"],
          timeCreated: result.body.properties?.["timeCreated"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          maintenanceWindow: !result.body.properties?.maintenanceWindow
            ? undefined
            : {
                preference:
                  result.body.properties?.maintenanceWindow?.["preference"],
                months:
                  result.body.properties?.maintenanceWindow?.["months"] ===
                  undefined
                    ? result.body.properties?.maintenanceWindow?.["months"]
                    : result.body.properties?.maintenanceWindow?.["months"].map(
                        (p) => ({ name: p["name"] }),
                      ),
                weeksOfMonth:
                  result.body.properties?.maintenanceWindow?.["weeksOfMonth"],
                daysOfWeek:
                  result.body.properties?.maintenanceWindow?.["daysOfWeek"] ===
                  undefined
                    ? result.body.properties?.maintenanceWindow?.["daysOfWeek"]
                    : result.body.properties?.maintenanceWindow?.[
                        "daysOfWeek"
                      ].map((p) => ({ name: p["name"] })),
                hoursOfDay:
                  result.body.properties?.maintenanceWindow?.["hoursOfDay"],
                leadTimeInWeeks:
                  result.body.properties?.maintenanceWindow?.[
                    "leadTimeInWeeks"
                  ],
                patchingMode:
                  result.body.properties?.maintenanceWindow?.["patchingMode"],
                customActionTimeoutInMins:
                  result.body.properties?.maintenanceWindow?.[
                    "customActionTimeoutInMins"
                  ],
                isCustomActionTimeoutEnabled:
                  result.body.properties?.maintenanceWindow?.[
                    "isCustomActionTimeoutEnabled"
                  ],
                isMonthlyPatchingEnabled:
                  result.body.properties?.maintenanceWindow?.[
                    "isMonthlyPatchingEnabled"
                  ],
              },
          estimatedPatchingTime: !result.body.properties?.estimatedPatchingTime
            ? undefined
            : {
                estimatedDbServerPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "estimatedDbServerPatchingTime"
                  ],
                estimatedNetworkSwitchesPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "estimatedNetworkSwitchesPatchingTime"
                  ],
                estimatedStorageServerPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "estimatedStorageServerPatchingTime"
                  ],
                totalEstimatedPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "totalEstimatedPatchingTime"
                  ],
              },
          customerContacts:
            result.body.properties?.["customerContacts"] === undefined
              ? result.body.properties?.["customerContacts"]
              : result.body.properties?.["customerContacts"].map((p) => ({
                  email: p["email"],
                })),
          provisioningState: result.body.properties?.["provisioningState"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          shape: result.body.properties?.["shape"],
          ociUrl: result.body.properties?.["ociUrl"],
          cpuCount: result.body.properties?.["cpuCount"],
          maxCpuCount: result.body.properties?.["maxCpuCount"],
          memorySizeInGbs: result.body.properties?.["memorySizeInGbs"],
          maxMemoryInGbs: result.body.properties?.["maxMemoryInGbs"],
          dbNodeStorageSizeInGbs:
            result.body.properties?.["dbNodeStorageSizeInGbs"],
          maxDbNodeStorageSizeInGbs:
            result.body.properties?.["maxDbNodeStorageSizeInGbs"],
          dataStorageSizeInTbs:
            result.body.properties?.["dataStorageSizeInTbs"],
          maxDataStorageInTbs: result.body.properties?.["maxDataStorageInTbs"],
          dbServerVersion: result.body.properties?.["dbServerVersion"],
          storageServerVersion:
            result.body.properties?.["storageServerVersion"],
          activatedStorageCount:
            result.body.properties?.["activatedStorageCount"],
          additionalStorageCount:
            result.body.properties?.["additionalStorageCount"],
          displayName: result.body.properties?.["displayName"],
          lastMaintenanceRunId:
            result.body.properties?.["lastMaintenanceRunId"],
          nextMaintenanceRunId:
            result.body.properties?.["nextMaintenanceRunId"],
          monthlyDbServerVersion:
            result.body.properties?.["monthlyDbServerVersion"],
          monthlyStorageServerVersion:
            result.body.properties?.["monthlyStorageServerVersion"],
        },
    zones: result.body["zones"],
  };
}

/** Get a CloudExadataInfrastructure */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: CloudExadataInfrastructuresGetOptionalParams = {
    requestOptions: {},
  },
): Promise<CloudExadataInfrastructure> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    cloudexadatainfrastructurename,
    options,
  );
  return _getDeserialize(result);
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  properties: CloudExadataInfrastructureUpdate,
  options: CloudExadataInfrastructuresUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | CloudExadataInfrastructuresUpdate200Response
  | CloudExadataInfrastructuresUpdate202Response
  | CloudExadataInfrastructuresUpdateDefaultResponse
  | CloudExadataInfrastructuresUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}",
      subscriptionId,
      resourceGroupName,
      cloudexadatainfrastructurename,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        zones: properties["zones"],
        tags: properties["tags"],
        properties: !properties.properties
          ? undefined
          : {
              computeCount: properties.properties?.["computeCount"],
              storageCount: properties.properties?.["storageCount"],
              maintenanceWindow: !properties.properties?.maintenanceWindow
                ? undefined
                : {
                    preference:
                      properties.properties?.maintenanceWindow?.["preference"],
                    months:
                      properties.properties?.maintenanceWindow?.["months"] ===
                      undefined
                        ? properties.properties?.maintenanceWindow?.["months"]
                        : properties.properties?.maintenanceWindow?.[
                            "months"
                          ].map((p) => ({ name: p["name"] })),
                    weeksOfMonth:
                      properties.properties?.maintenanceWindow?.[
                        "weeksOfMonth"
                      ],
                    daysOfWeek:
                      properties.properties?.maintenanceWindow?.[
                        "daysOfWeek"
                      ] === undefined
                        ? properties.properties?.maintenanceWindow?.[
                            "daysOfWeek"
                          ]
                        : properties.properties?.maintenanceWindow?.[
                            "daysOfWeek"
                          ].map((p) => ({ name: p["name"] })),
                    hoursOfDay:
                      properties.properties?.maintenanceWindow?.["hoursOfDay"],
                    leadTimeInWeeks:
                      properties.properties?.maintenanceWindow?.[
                        "leadTimeInWeeks"
                      ],
                    patchingMode:
                      properties.properties?.maintenanceWindow?.[
                        "patchingMode"
                      ],
                    customActionTimeoutInMins:
                      properties.properties?.maintenanceWindow?.[
                        "customActionTimeoutInMins"
                      ],
                    isCustomActionTimeoutEnabled:
                      properties.properties?.maintenanceWindow?.[
                        "isCustomActionTimeoutEnabled"
                      ],
                    isMonthlyPatchingEnabled:
                      properties.properties?.maintenanceWindow?.[
                        "isMonthlyPatchingEnabled"
                      ],
                  },
              customerContacts:
                properties.properties?.["customerContacts"] === undefined
                  ? properties.properties?.["customerContacts"]
                  : properties.properties?.["customerContacts"].map((p) => ({
                      email: p["email"],
                    })),
              displayName: properties.properties?.["displayName"],
            },
      },
    });
}

export async function _updateDeserialize(
  result:
    | CloudExadataInfrastructuresUpdate200Response
    | CloudExadataInfrastructuresUpdate202Response
    | CloudExadataInfrastructuresUpdateDefaultResponse
    | CloudExadataInfrastructuresUpdateLogicalResponse,
): Promise<CloudExadataInfrastructure> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as CloudExadataInfrastructuresUpdateLogicalResponse;
  return {
    location: result.body["location"],
    tags: result.body["tags"],
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
    properties: !result.body.properties
      ? undefined
      : {
          ocid: result.body.properties?.["ocid"],
          computeCount: result.body.properties?.["computeCount"],
          storageCount: result.body.properties?.["storageCount"],
          totalStorageSizeInGbs:
            result.body.properties?.["totalStorageSizeInGbs"],
          availableStorageSizeInGbs:
            result.body.properties?.["availableStorageSizeInGbs"],
          timeCreated: result.body.properties?.["timeCreated"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          maintenanceWindow: !result.body.properties?.maintenanceWindow
            ? undefined
            : {
                preference:
                  result.body.properties?.maintenanceWindow?.["preference"],
                months:
                  result.body.properties?.maintenanceWindow?.["months"] ===
                  undefined
                    ? result.body.properties?.maintenanceWindow?.["months"]
                    : result.body.properties?.maintenanceWindow?.["months"].map(
                        (p) => ({ name: p["name"] }),
                      ),
                weeksOfMonth:
                  result.body.properties?.maintenanceWindow?.["weeksOfMonth"],
                daysOfWeek:
                  result.body.properties?.maintenanceWindow?.["daysOfWeek"] ===
                  undefined
                    ? result.body.properties?.maintenanceWindow?.["daysOfWeek"]
                    : result.body.properties?.maintenanceWindow?.[
                        "daysOfWeek"
                      ].map((p) => ({ name: p["name"] })),
                hoursOfDay:
                  result.body.properties?.maintenanceWindow?.["hoursOfDay"],
                leadTimeInWeeks:
                  result.body.properties?.maintenanceWindow?.[
                    "leadTimeInWeeks"
                  ],
                patchingMode:
                  result.body.properties?.maintenanceWindow?.["patchingMode"],
                customActionTimeoutInMins:
                  result.body.properties?.maintenanceWindow?.[
                    "customActionTimeoutInMins"
                  ],
                isCustomActionTimeoutEnabled:
                  result.body.properties?.maintenanceWindow?.[
                    "isCustomActionTimeoutEnabled"
                  ],
                isMonthlyPatchingEnabled:
                  result.body.properties?.maintenanceWindow?.[
                    "isMonthlyPatchingEnabled"
                  ],
              },
          estimatedPatchingTime: !result.body.properties?.estimatedPatchingTime
            ? undefined
            : {
                estimatedDbServerPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "estimatedDbServerPatchingTime"
                  ],
                estimatedNetworkSwitchesPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "estimatedNetworkSwitchesPatchingTime"
                  ],
                estimatedStorageServerPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "estimatedStorageServerPatchingTime"
                  ],
                totalEstimatedPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "totalEstimatedPatchingTime"
                  ],
              },
          customerContacts:
            result.body.properties?.["customerContacts"] === undefined
              ? result.body.properties?.["customerContacts"]
              : result.body.properties?.["customerContacts"].map((p) => ({
                  email: p["email"],
                })),
          provisioningState: result.body.properties?.["provisioningState"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          shape: result.body.properties?.["shape"],
          ociUrl: result.body.properties?.["ociUrl"],
          cpuCount: result.body.properties?.["cpuCount"],
          maxCpuCount: result.body.properties?.["maxCpuCount"],
          memorySizeInGbs: result.body.properties?.["memorySizeInGbs"],
          maxMemoryInGbs: result.body.properties?.["maxMemoryInGbs"],
          dbNodeStorageSizeInGbs:
            result.body.properties?.["dbNodeStorageSizeInGbs"],
          maxDbNodeStorageSizeInGbs:
            result.body.properties?.["maxDbNodeStorageSizeInGbs"],
          dataStorageSizeInTbs:
            result.body.properties?.["dataStorageSizeInTbs"],
          maxDataStorageInTbs: result.body.properties?.["maxDataStorageInTbs"],
          dbServerVersion: result.body.properties?.["dbServerVersion"],
          storageServerVersion:
            result.body.properties?.["storageServerVersion"],
          activatedStorageCount:
            result.body.properties?.["activatedStorageCount"],
          additionalStorageCount:
            result.body.properties?.["additionalStorageCount"],
          displayName: result.body.properties?.["displayName"],
          lastMaintenanceRunId:
            result.body.properties?.["lastMaintenanceRunId"],
          nextMaintenanceRunId:
            result.body.properties?.["nextMaintenanceRunId"],
          monthlyDbServerVersion:
            result.body.properties?.["monthlyDbServerVersion"],
          monthlyStorageServerVersion:
            result.body.properties?.["monthlyStorageServerVersion"],
        },
    zones: result.body["zones"],
  };
}

/** Update a CloudExadataInfrastructure */
export function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  properties: CloudExadataInfrastructureUpdate,
  options: CloudExadataInfrastructuresUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<CloudExadataInfrastructure>,
  CloudExadataInfrastructure
> {
  return getLongRunningPoller(context, _updateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        subscriptionId,
        resourceGroupName,
        cloudexadatainfrastructurename,
        properties,
        options,
      ),
  }) as PollerLike<
    OperationState<CloudExadataInfrastructure>,
    CloudExadataInfrastructure
  >;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: CloudExadataInfrastructuresDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | CloudExadataInfrastructuresDelete202Response
  | CloudExadataInfrastructuresDelete204Response
  | CloudExadataInfrastructuresDeleteDefaultResponse
  | CloudExadataInfrastructuresDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}",
      subscriptionId,
      resourceGroupName,
      cloudexadatainfrastructurename,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | CloudExadataInfrastructuresDelete202Response
    | CloudExadataInfrastructuresDelete204Response
    | CloudExadataInfrastructuresDeleteDefaultResponse
    | CloudExadataInfrastructuresDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as CloudExadataInfrastructuresDeleteLogicalResponse;
  return;
}

/** Delete a CloudExadataInfrastructure */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: CloudExadataInfrastructuresDeleteOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        subscriptionId,
        resourceGroupName,
        cloudexadatainfrastructurename,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _listByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: CloudExadataInfrastructuresListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | CloudExadataInfrastructuresListByResourceGroup200Response
  | CloudExadataInfrastructuresListByResourceGroupDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByResourceGroupDeserialize(
  result:
    | CloudExadataInfrastructuresListByResourceGroup200Response
    | CloudExadataInfrastructuresListByResourceGroupDefaultResponse,
): Promise<CloudExadataInfrastructureListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      location: p["location"],
      tags: p["tags"],
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
      properties: !p.properties
        ? undefined
        : {
            ocid: p.properties?.["ocid"],
            computeCount: p.properties?.["computeCount"],
            storageCount: p.properties?.["storageCount"],
            totalStorageSizeInGbs: p.properties?.["totalStorageSizeInGbs"],
            availableStorageSizeInGbs:
              p.properties?.["availableStorageSizeInGbs"],
            timeCreated: p.properties?.["timeCreated"],
            lifecycleDetails: p.properties?.["lifecycleDetails"],
            maintenanceWindow: !p.properties?.maintenanceWindow
              ? undefined
              : {
                  preference: p.properties?.maintenanceWindow?.["preference"],
                  months:
                    p.properties?.maintenanceWindow?.["months"] === undefined
                      ? p.properties?.maintenanceWindow?.["months"]
                      : p.properties?.maintenanceWindow?.["months"].map(
                          (p) => ({ name: p["name"] }),
                        ),
                  weeksOfMonth:
                    p.properties?.maintenanceWindow?.["weeksOfMonth"],
                  daysOfWeek:
                    p.properties?.maintenanceWindow?.["daysOfWeek"] ===
                    undefined
                      ? p.properties?.maintenanceWindow?.["daysOfWeek"]
                      : p.properties?.maintenanceWindow?.["daysOfWeek"].map(
                          (p) => ({ name: p["name"] }),
                        ),
                  hoursOfDay: p.properties?.maintenanceWindow?.["hoursOfDay"],
                  leadTimeInWeeks:
                    p.properties?.maintenanceWindow?.["leadTimeInWeeks"],
                  patchingMode:
                    p.properties?.maintenanceWindow?.["patchingMode"],
                  customActionTimeoutInMins:
                    p.properties?.maintenanceWindow?.[
                      "customActionTimeoutInMins"
                    ],
                  isCustomActionTimeoutEnabled:
                    p.properties?.maintenanceWindow?.[
                      "isCustomActionTimeoutEnabled"
                    ],
                  isMonthlyPatchingEnabled:
                    p.properties?.maintenanceWindow?.[
                      "isMonthlyPatchingEnabled"
                    ],
                },
            estimatedPatchingTime: !p.properties?.estimatedPatchingTime
              ? undefined
              : {
                  estimatedDbServerPatchingTime:
                    p.properties?.estimatedPatchingTime?.[
                      "estimatedDbServerPatchingTime"
                    ],
                  estimatedNetworkSwitchesPatchingTime:
                    p.properties?.estimatedPatchingTime?.[
                      "estimatedNetworkSwitchesPatchingTime"
                    ],
                  estimatedStorageServerPatchingTime:
                    p.properties?.estimatedPatchingTime?.[
                      "estimatedStorageServerPatchingTime"
                    ],
                  totalEstimatedPatchingTime:
                    p.properties?.estimatedPatchingTime?.[
                      "totalEstimatedPatchingTime"
                    ],
                },
            customerContacts:
              p.properties?.["customerContacts"] === undefined
                ? p.properties?.["customerContacts"]
                : p.properties?.["customerContacts"].map((p) => ({
                    email: p["email"],
                  })),
            provisioningState: p.properties?.["provisioningState"],
            lifecycleState: p.properties?.["lifecycleState"],
            shape: p.properties?.["shape"],
            ociUrl: p.properties?.["ociUrl"],
            cpuCount: p.properties?.["cpuCount"],
            maxCpuCount: p.properties?.["maxCpuCount"],
            memorySizeInGbs: p.properties?.["memorySizeInGbs"],
            maxMemoryInGbs: p.properties?.["maxMemoryInGbs"],
            dbNodeStorageSizeInGbs: p.properties?.["dbNodeStorageSizeInGbs"],
            maxDbNodeStorageSizeInGbs:
              p.properties?.["maxDbNodeStorageSizeInGbs"],
            dataStorageSizeInTbs: p.properties?.["dataStorageSizeInTbs"],
            maxDataStorageInTbs: p.properties?.["maxDataStorageInTbs"],
            dbServerVersion: p.properties?.["dbServerVersion"],
            storageServerVersion: p.properties?.["storageServerVersion"],
            activatedStorageCount: p.properties?.["activatedStorageCount"],
            additionalStorageCount: p.properties?.["additionalStorageCount"],
            displayName: p.properties?.["displayName"],
            lastMaintenanceRunId: p.properties?.["lastMaintenanceRunId"],
            nextMaintenanceRunId: p.properties?.["nextMaintenanceRunId"],
            monthlyDbServerVersion: p.properties?.["monthlyDbServerVersion"],
            monthlyStorageServerVersion:
              p.properties?.["monthlyStorageServerVersion"],
          },
      zones: p["zones"],
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List CloudExadataInfrastructure resources by resource group */
export function listByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: CloudExadataInfrastructuresListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<CloudExadataInfrastructure> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _listByResourceGroupDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _addStorageCapacitySend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: CloudExadataInfrastructuresAddStorageCapacityOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | CloudExadataInfrastructuresAddStorageCapacity200Response
  | CloudExadataInfrastructuresAddStorageCapacity202Response
  | CloudExadataInfrastructuresAddStorageCapacityDefaultResponse
  | CloudExadataInfrastructuresAddStorageCapacityLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}/addStorageCapacity",
      subscriptionId,
      resourceGroupName,
      cloudexadatainfrastructurename,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _addStorageCapacityDeserialize(
  result:
    | CloudExadataInfrastructuresAddStorageCapacity200Response
    | CloudExadataInfrastructuresAddStorageCapacity202Response
    | CloudExadataInfrastructuresAddStorageCapacityDefaultResponse
    | CloudExadataInfrastructuresAddStorageCapacityLogicalResponse,
): Promise<CloudExadataInfrastructure> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result =
    result as CloudExadataInfrastructuresAddStorageCapacityLogicalResponse;
  return {
    location: result.body["location"],
    tags: result.body["tags"],
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
    properties: !result.body.properties
      ? undefined
      : {
          ocid: result.body.properties?.["ocid"],
          computeCount: result.body.properties?.["computeCount"],
          storageCount: result.body.properties?.["storageCount"],
          totalStorageSizeInGbs:
            result.body.properties?.["totalStorageSizeInGbs"],
          availableStorageSizeInGbs:
            result.body.properties?.["availableStorageSizeInGbs"],
          timeCreated: result.body.properties?.["timeCreated"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          maintenanceWindow: !result.body.properties?.maintenanceWindow
            ? undefined
            : {
                preference:
                  result.body.properties?.maintenanceWindow?.["preference"],
                months:
                  result.body.properties?.maintenanceWindow?.["months"] ===
                  undefined
                    ? result.body.properties?.maintenanceWindow?.["months"]
                    : result.body.properties?.maintenanceWindow?.["months"].map(
                        (p) => ({ name: p["name"] }),
                      ),
                weeksOfMonth:
                  result.body.properties?.maintenanceWindow?.["weeksOfMonth"],
                daysOfWeek:
                  result.body.properties?.maintenanceWindow?.["daysOfWeek"] ===
                  undefined
                    ? result.body.properties?.maintenanceWindow?.["daysOfWeek"]
                    : result.body.properties?.maintenanceWindow?.[
                        "daysOfWeek"
                      ].map((p) => ({ name: p["name"] })),
                hoursOfDay:
                  result.body.properties?.maintenanceWindow?.["hoursOfDay"],
                leadTimeInWeeks:
                  result.body.properties?.maintenanceWindow?.[
                    "leadTimeInWeeks"
                  ],
                patchingMode:
                  result.body.properties?.maintenanceWindow?.["patchingMode"],
                customActionTimeoutInMins:
                  result.body.properties?.maintenanceWindow?.[
                    "customActionTimeoutInMins"
                  ],
                isCustomActionTimeoutEnabled:
                  result.body.properties?.maintenanceWindow?.[
                    "isCustomActionTimeoutEnabled"
                  ],
                isMonthlyPatchingEnabled:
                  result.body.properties?.maintenanceWindow?.[
                    "isMonthlyPatchingEnabled"
                  ],
              },
          estimatedPatchingTime: !result.body.properties?.estimatedPatchingTime
            ? undefined
            : {
                estimatedDbServerPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "estimatedDbServerPatchingTime"
                  ],
                estimatedNetworkSwitchesPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "estimatedNetworkSwitchesPatchingTime"
                  ],
                estimatedStorageServerPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "estimatedStorageServerPatchingTime"
                  ],
                totalEstimatedPatchingTime:
                  result.body.properties?.estimatedPatchingTime?.[
                    "totalEstimatedPatchingTime"
                  ],
              },
          customerContacts:
            result.body.properties?.["customerContacts"] === undefined
              ? result.body.properties?.["customerContacts"]
              : result.body.properties?.["customerContacts"].map((p) => ({
                  email: p["email"],
                })),
          provisioningState: result.body.properties?.["provisioningState"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          shape: result.body.properties?.["shape"],
          ociUrl: result.body.properties?.["ociUrl"],
          cpuCount: result.body.properties?.["cpuCount"],
          maxCpuCount: result.body.properties?.["maxCpuCount"],
          memorySizeInGbs: result.body.properties?.["memorySizeInGbs"],
          maxMemoryInGbs: result.body.properties?.["maxMemoryInGbs"],
          dbNodeStorageSizeInGbs:
            result.body.properties?.["dbNodeStorageSizeInGbs"],
          maxDbNodeStorageSizeInGbs:
            result.body.properties?.["maxDbNodeStorageSizeInGbs"],
          dataStorageSizeInTbs:
            result.body.properties?.["dataStorageSizeInTbs"],
          maxDataStorageInTbs: result.body.properties?.["maxDataStorageInTbs"],
          dbServerVersion: result.body.properties?.["dbServerVersion"],
          storageServerVersion:
            result.body.properties?.["storageServerVersion"],
          activatedStorageCount:
            result.body.properties?.["activatedStorageCount"],
          additionalStorageCount:
            result.body.properties?.["additionalStorageCount"],
          displayName: result.body.properties?.["displayName"],
          lastMaintenanceRunId:
            result.body.properties?.["lastMaintenanceRunId"],
          nextMaintenanceRunId:
            result.body.properties?.["nextMaintenanceRunId"],
          monthlyDbServerVersion:
            result.body.properties?.["monthlyDbServerVersion"],
          monthlyStorageServerVersion:
            result.body.properties?.["monthlyStorageServerVersion"],
        },
    zones: result.body["zones"],
  };
}

/** Perform add storage capacity on exadata infra */
export function addStorageCapacity(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: CloudExadataInfrastructuresAddStorageCapacityOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<CloudExadataInfrastructure>,
  CloudExadataInfrastructure
> {
  return getLongRunningPoller(context, _addStorageCapacityDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _addStorageCapacitySend(
        context,
        subscriptionId,
        resourceGroupName,
        cloudexadatainfrastructurename,
        options,
      ),
  }) as PollerLike<
    OperationState<CloudExadataInfrastructure>,
    CloudExadataInfrastructure
  >;
}
