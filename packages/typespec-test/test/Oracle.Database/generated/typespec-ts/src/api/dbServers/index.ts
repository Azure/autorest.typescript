// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DbServer, DbServerListResult } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  DatabaseContext as Client,
  DbServersGet200Response,
  DbServersGetDefaultResponse,
  DbServersListByCloudExadataInfrastructure200Response,
  DbServersListByCloudExadataInfrastructureDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  DbServersGetOptionalParams,
  DbServersListByCloudExadataInfrastructureOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  dbserverocid: string,
  options: DbServersGetOptionalParams = { requestOptions: {} },
): StreamableMethod<DbServersGet200Response | DbServersGetDefaultResponse> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}/dbServers/{dbserverocid}",
      subscriptionId,
      resourceGroupName,
      cloudexadatainfrastructurename,
      dbserverocid,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: DbServersGet200Response | DbServersGetDefaultResponse,
): Promise<DbServer> {
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
    properties: !result.body.properties
      ? undefined
      : {
          ocid: result.body.properties?.["ocid"],
          displayName: result.body.properties?.["displayName"],
          compartmentId: result.body.properties?.["compartmentId"],
          exadataInfrastructureId:
            result.body.properties?.["exadataInfrastructureId"],
          cpuCoreCount: result.body.properties?.["cpuCoreCount"],
          dbServerPatchingDetails: !result.body.properties
            ?.dbServerPatchingDetails
            ? undefined
            : {
                estimatedPatchDuration:
                  result.body.properties?.dbServerPatchingDetails?.[
                    "estimatedPatchDuration"
                  ],
                patchingStatus:
                  result.body.properties?.dbServerPatchingDetails?.[
                    "patchingStatus"
                  ],
                timePatchingEnded:
                  result.body.properties?.dbServerPatchingDetails?.[
                    "timePatchingEnded"
                  ] !== undefined
                    ? new Date(
                        result.body.properties?.dbServerPatchingDetails?.[
                          "timePatchingEnded"
                        ],
                      )
                    : undefined,
                timePatchingStarted:
                  result.body.properties?.dbServerPatchingDetails?.[
                    "timePatchingStarted"
                  ] !== undefined
                    ? new Date(
                        result.body.properties?.dbServerPatchingDetails?.[
                          "timePatchingStarted"
                        ],
                      )
                    : undefined,
              },
          maxMemoryInGbs: result.body.properties?.["maxMemoryInGbs"],
          dbNodeStorageSizeInGbs:
            result.body.properties?.["dbNodeStorageSizeInGbs"],
          vmClusterIds: result.body.properties?.["vmClusterIds"],
          dbNodeIds: result.body.properties?.["dbNodeIds"],
          lifecycleDetails: result.body.properties?.["lifecycleDetails"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          maxCpuCount: result.body.properties?.["maxCpuCount"],
          autonomousVmClusterIds:
            result.body.properties?.["autonomousVmClusterIds"],
          autonomousVirtualMachineIds:
            result.body.properties?.["autonomousVirtualMachineIds"],
          maxDbNodeStorageInGbs:
            result.body.properties?.["maxDbNodeStorageInGbs"],
          memorySizeInGbs: result.body.properties?.["memorySizeInGbs"],
          shape: result.body.properties?.["shape"],
          timeCreated:
            result.body.properties?.["timeCreated"] !== undefined
              ? new Date(result.body.properties?.["timeCreated"])
              : undefined,
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a DbServer */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  dbserverocid: string,
  options: DbServersGetOptionalParams = { requestOptions: {} },
): Promise<DbServer> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    cloudexadatainfrastructurename,
    dbserverocid,
    options,
  );
  return _getDeserialize(result);
}

export function _listByCloudExadataInfrastructureSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: DbServersListByCloudExadataInfrastructureOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | DbServersListByCloudExadataInfrastructure200Response
  | DbServersListByCloudExadataInfrastructureDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}/dbServers",
      subscriptionId,
      resourceGroupName,
      cloudexadatainfrastructurename,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByCloudExadataInfrastructureDeserialize(
  result:
    | DbServersListByCloudExadataInfrastructure200Response
    | DbServersListByCloudExadataInfrastructureDefaultResponse,
): Promise<DbServerListResult> {
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
      properties: !p.properties
        ? undefined
        : {
            ocid: p.properties?.["ocid"],
            displayName: p.properties?.["displayName"],
            compartmentId: p.properties?.["compartmentId"],
            exadataInfrastructureId: p.properties?.["exadataInfrastructureId"],
            cpuCoreCount: p.properties?.["cpuCoreCount"],
            dbServerPatchingDetails: !p.properties?.dbServerPatchingDetails
              ? undefined
              : {
                  estimatedPatchDuration:
                    p.properties?.dbServerPatchingDetails?.[
                      "estimatedPatchDuration"
                    ],
                  patchingStatus:
                    p.properties?.dbServerPatchingDetails?.["patchingStatus"],
                  timePatchingEnded:
                    p.properties?.dbServerPatchingDetails?.[
                      "timePatchingEnded"
                    ] !== undefined
                      ? new Date(
                          p.properties?.dbServerPatchingDetails?.[
                            "timePatchingEnded"
                          ],
                        )
                      : undefined,
                  timePatchingStarted:
                    p.properties?.dbServerPatchingDetails?.[
                      "timePatchingStarted"
                    ] !== undefined
                      ? new Date(
                          p.properties?.dbServerPatchingDetails?.[
                            "timePatchingStarted"
                          ],
                        )
                      : undefined,
                },
            maxMemoryInGbs: p.properties?.["maxMemoryInGbs"],
            dbNodeStorageSizeInGbs: p.properties?.["dbNodeStorageSizeInGbs"],
            vmClusterIds: p.properties?.["vmClusterIds"],
            dbNodeIds: p.properties?.["dbNodeIds"],
            lifecycleDetails: p.properties?.["lifecycleDetails"],
            lifecycleState: p.properties?.["lifecycleState"],
            maxCpuCount: p.properties?.["maxCpuCount"],
            autonomousVmClusterIds: p.properties?.["autonomousVmClusterIds"],
            autonomousVirtualMachineIds:
              p.properties?.["autonomousVirtualMachineIds"],
            maxDbNodeStorageInGbs: p.properties?.["maxDbNodeStorageInGbs"],
            memorySizeInGbs: p.properties?.["memorySizeInGbs"],
            shape: p.properties?.["shape"],
            timeCreated:
              p.properties?.["timeCreated"] !== undefined
                ? new Date(p.properties?.["timeCreated"])
                : undefined,
            provisioningState: p.properties?.["provisioningState"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List DbServer resources by CloudExadataInfrastructure */
export function listByCloudExadataInfrastructure(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: DbServersListByCloudExadataInfrastructureOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<DbServer> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByCloudExadataInfrastructureSend(
        context,
        subscriptionId,
        resourceGroupName,
        cloudexadatainfrastructurename,
        options,
      ),
    _listByCloudExadataInfrastructureDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
