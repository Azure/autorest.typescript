// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  StandbyVirtualMachineResource,
  StandbyVirtualMachineResourceListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  StandbyPoolContext as Client,
  StandbyVirtualMachinesGet200Response,
  StandbyVirtualMachinesGetDefaultResponse,
  StandbyVirtualMachinesListByStandbyVirtualMachinePoolResource200Response,
  StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  StandbyVirtualMachinesGetOptionalParams,
  StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  standbyVirtualMachineName: string,
  options: StandbyVirtualMachinesGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | StandbyVirtualMachinesGet200Response
  | StandbyVirtualMachinesGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}/standbyVirtualMachines/{standbyVirtualMachineName}",
      subscriptionId,
      resourceGroupName,
      standbyVirtualMachinePoolName,
      standbyVirtualMachineName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result:
    | StandbyVirtualMachinesGet200Response
    | StandbyVirtualMachinesGetDefaultResponse,
): Promise<StandbyVirtualMachineResource> {
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
          virtualMachineResourceId:
            result.body.properties?.["virtualMachineResourceId"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a StandbyVirtualMachineResource */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  standbyVirtualMachineName: string,
  options: StandbyVirtualMachinesGetOptionalParams = { requestOptions: {} },
): Promise<StandbyVirtualMachineResource> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    standbyVirtualMachinePoolName,
    standbyVirtualMachineName,
    options,
  );
  return _getDeserialize(result);
}

export function _listByStandbyVirtualMachinePoolResourceSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  options: StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | StandbyVirtualMachinesListByStandbyVirtualMachinePoolResource200Response
  | StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}/standbyVirtualMachines",
      subscriptionId,
      resourceGroupName,
      standbyVirtualMachinePoolName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByStandbyVirtualMachinePoolResourceDeserialize(
  result:
    | StandbyVirtualMachinesListByStandbyVirtualMachinePoolResource200Response
    | StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceDefaultResponse,
): Promise<StandbyVirtualMachineResourceListResult> {
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
            virtualMachineResourceId:
              p.properties?.["virtualMachineResourceId"],
            provisioningState: p.properties?.["provisioningState"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List StandbyVirtualMachineResource resources by StandbyVirtualMachinePoolResource */
export function listByStandbyVirtualMachinePoolResource(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  standbyVirtualMachinePoolName: string,
  options: StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<StandbyVirtualMachineResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByStandbyVirtualMachinePoolResourceSend(
        context,
        subscriptionId,
        resourceGroupName,
        standbyVirtualMachinePoolName,
        options,
      ),
    _listByStandbyVirtualMachinePoolResourceDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
