// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  Fleet,
  FleetPatch,
  FleetListResult,
  FleetCredentialResults,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  ContainerServiceContext as Client,
  FleetsCreate200Response,
  FleetsCreate201Response,
  FleetsCreateDefaultResponse,
  FleetsCreateLogicalResponse,
  FleetsDelete200Response,
  FleetsDelete202Response,
  FleetsDelete204Response,
  FleetsDeleteDefaultResponse,
  FleetsDeleteLogicalResponse,
  FleetsGet200Response,
  FleetsGetDefaultResponse,
  FleetsListByResourceGroup200Response,
  FleetsListByResourceGroupDefaultResponse,
  FleetsListBySubscription200Response,
  FleetsListBySubscriptionDefaultResponse,
  FleetsListCredentials200Response,
  FleetsListCredentialsDefaultResponse,
  FleetsUpdateAsync200Response,
  FleetsUpdateAsync202Response,
  FleetsUpdateAsyncDefaultResponse,
  FleetsUpdateAsyncLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { stringToUint8Array } from "@azure/core-util";
import {
  FleetsGetOptionalParams,
  FleetsCreateOptionalParams,
  FleetsUpdateAsyncOptionalParams,
  FleetsDeleteOptionalParams,
  FleetsListByResourceGroupOptionalParams,
  FleetsListBySubscriptionOptionalParams,
  FleetsListCredentialsOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  options: FleetsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<FleetsGet200Response | FleetsGetDefaultResponse> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}",
      subscriptionId,
      resourceGroupName,
      fleetName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: FleetsGet200Response | FleetsGetDefaultResponse,
): Promise<Fleet> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    location: result.body["location"],
    tags: result.body["tags"],
    id: result.body["id"],
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
          provisioningState: result.body.properties?.["provisioningState"],
          hubProfile: !result.body.properties?.hubProfile
            ? undefined
            : {
                dnsPrefix: result.body.properties?.hubProfile?.["dnsPrefix"],
                apiServerAccessProfile: !result.body.properties?.hubProfile
                  ?.apiServerAccessProfile
                  ? undefined
                  : {
                      enablePrivateCluster:
                        result.body.properties?.hubProfile
                          ?.apiServerAccessProfile?.["enablePrivateCluster"],
                    },
                agentProfile: !result.body.properties?.hubProfile?.agentProfile
                  ? undefined
                  : {
                      subnetId:
                        result.body.properties?.hubProfile?.agentProfile?.[
                          "subnetId"
                        ],
                      vmSize:
                        result.body.properties?.hubProfile?.agentProfile?.[
                          "vmSize"
                        ],
                    },
                fqdn: result.body.properties?.hubProfile?.["fqdn"],
                kubernetesVersion:
                  result.body.properties?.hubProfile?.["kubernetesVersion"],
                portalFqdn: result.body.properties?.hubProfile?.["portalFqdn"],
              },
        },
    eTag: result.body["eTag"],
    identity: !result.body.identity
      ? undefined
      : {
          tenantId: result.body.identity?.["tenantId"],
          principalId: result.body.identity?.["principalId"],
          type: result.body.identity?.["type"],
          userAssignedIdentities:
            result.body.identity?.["userAssignedIdentities"],
        },
  };
}

/** Gets a Fleet. */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  options: FleetsGetOptionalParams = { requestOptions: {} },
): Promise<Fleet> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    fleetName,
    options,
  );
  return _getDeserialize(result);
}

export function _createSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  resource: Fleet,
  options: FleetsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | FleetsCreate200Response
  | FleetsCreate201Response
  | FleetsCreateDefaultResponse
  | FleetsCreateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}",
      subscriptionId,
      resourceGroupName,
      fleetName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "If-Match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "If-None-Match": options?.ifNoneMatch }
          : {}),
      },
      body: {
        location: resource["location"],
        tags: resource["tags"],
        properties: !resource.properties
          ? undefined
          : {
              hubProfile: !resource.properties?.hubProfile
                ? undefined
                : {
                    dnsPrefix: resource.properties?.hubProfile?.["dnsPrefix"],
                    apiServerAccessProfile: !resource.properties?.hubProfile
                      ?.apiServerAccessProfile
                      ? undefined
                      : {
                          enablePrivateCluster:
                            resource.properties?.hubProfile
                              ?.apiServerAccessProfile?.[
                              "enablePrivateCluster"
                            ],
                        },
                    agentProfile: !resource.properties?.hubProfile?.agentProfile
                      ? undefined
                      : {
                          subnetId:
                            resource.properties?.hubProfile?.agentProfile?.[
                              "subnetId"
                            ],
                          vmSize:
                            resource.properties?.hubProfile?.agentProfile?.[
                              "vmSize"
                            ],
                        },
                  },
            },
        identity: !resource.identity
          ? undefined
          : {
              type: resource.identity?.["type"],
              userAssignedIdentities:
                resource.identity?.["userAssignedIdentities"],
            },
      },
    });
}

export async function _createDeserialize(
  result:
    | FleetsCreate200Response
    | FleetsCreate201Response
    | FleetsCreateDefaultResponse
    | FleetsCreateLogicalResponse,
): Promise<Fleet> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as FleetsCreateLogicalResponse;
  return {
    location: result.body["location"],
    tags: result.body["tags"],
    id: result.body["id"],
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
          provisioningState: result.body.properties?.["provisioningState"],
          hubProfile: !result.body.properties?.hubProfile
            ? undefined
            : {
                dnsPrefix: result.body.properties?.hubProfile?.["dnsPrefix"],
                apiServerAccessProfile: !result.body.properties?.hubProfile
                  ?.apiServerAccessProfile
                  ? undefined
                  : {
                      enablePrivateCluster:
                        result.body.properties?.hubProfile
                          ?.apiServerAccessProfile?.["enablePrivateCluster"],
                    },
                agentProfile: !result.body.properties?.hubProfile?.agentProfile
                  ? undefined
                  : {
                      subnetId:
                        result.body.properties?.hubProfile?.agentProfile?.[
                          "subnetId"
                        ],
                      vmSize:
                        result.body.properties?.hubProfile?.agentProfile?.[
                          "vmSize"
                        ],
                    },
                fqdn: result.body.properties?.hubProfile?.["fqdn"],
                kubernetesVersion:
                  result.body.properties?.hubProfile?.["kubernetesVersion"],
                portalFqdn: result.body.properties?.hubProfile?.["portalFqdn"],
              },
        },
    eTag: result.body["eTag"],
    identity: !result.body.identity
      ? undefined
      : {
          tenantId: result.body.identity?.["tenantId"],
          principalId: result.body.identity?.["principalId"],
          type: result.body.identity?.["type"],
          userAssignedIdentities:
            result.body.identity?.["userAssignedIdentities"],
        },
  };
}

/** Creates or updates a Fleet. */
export function create(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  resource: Fleet,
  options: FleetsCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Fleet>, Fleet> {
  return getLongRunningPoller(context, _createDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createSend(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        resource,
        options,
      ),
  }) as PollerLike<OperationState<Fleet>, Fleet>;
}

export function _updateAsyncSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  properties: FleetPatch,
  options: FleetsUpdateAsyncOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | FleetsUpdateAsync200Response
  | FleetsUpdateAsync202Response
  | FleetsUpdateAsyncDefaultResponse
  | FleetsUpdateAsyncLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}",
      subscriptionId,
      resourceGroupName,
      fleetName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "If-Match": options?.ifMatch }
          : {}),
      },
      body: {
        tags: properties["tags"],
        identity: !properties.identity
          ? undefined
          : {
              type: properties.identity?.["type"],
              userAssignedIdentities:
                properties.identity?.["userAssignedIdentities"],
            },
      },
    }) as StreamableMethod<
    | FleetsUpdateAsync200Response
    | FleetsUpdateAsync202Response
    | FleetsUpdateAsyncDefaultResponse
    | FleetsUpdateAsyncLogicalResponse
  >;
}

export async function _updateAsyncDeserialize(
  result:
    | FleetsUpdateAsync200Response
    | FleetsUpdateAsync202Response
    | FleetsUpdateAsyncDefaultResponse
    | FleetsUpdateAsyncLogicalResponse,
): Promise<Fleet> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as FleetsUpdateAsyncLogicalResponse;
  return {
    location: result.body["location"],
    tags: result.body["tags"],
    id: result.body["id"],
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
          provisioningState: result.body.properties?.["provisioningState"],
          hubProfile: !result.body.properties?.hubProfile
            ? undefined
            : {
                dnsPrefix: result.body.properties?.hubProfile?.["dnsPrefix"],
                apiServerAccessProfile: !result.body.properties?.hubProfile
                  ?.apiServerAccessProfile
                  ? undefined
                  : {
                      enablePrivateCluster:
                        result.body.properties?.hubProfile
                          ?.apiServerAccessProfile?.["enablePrivateCluster"],
                    },
                agentProfile: !result.body.properties?.hubProfile?.agentProfile
                  ? undefined
                  : {
                      subnetId:
                        result.body.properties?.hubProfile?.agentProfile?.[
                          "subnetId"
                        ],
                      vmSize:
                        result.body.properties?.hubProfile?.agentProfile?.[
                          "vmSize"
                        ],
                    },
                fqdn: result.body.properties?.hubProfile?.["fqdn"],
                kubernetesVersion:
                  result.body.properties?.hubProfile?.["kubernetesVersion"],
                portalFqdn: result.body.properties?.hubProfile?.["portalFqdn"],
              },
        },
    eTag: result.body["eTag"],
    identity: !result.body.identity
      ? undefined
      : {
          tenantId: result.body.identity?.["tenantId"],
          principalId: result.body.identity?.["principalId"],
          type: result.body.identity?.["type"],
          userAssignedIdentities:
            result.body.identity?.["userAssignedIdentities"],
        },
  };
}

/** Update a Fleet */
export function updateAsync(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  properties: FleetPatch,
  options: FleetsUpdateAsyncOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Fleet>, Fleet> {
  return getLongRunningPoller(context, _updateAsyncDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateAsyncSend(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        properties,
        options,
      ),
  }) as PollerLike<OperationState<Fleet>, Fleet>;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  options: FleetsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | FleetsDelete200Response
  | FleetsDelete202Response
  | FleetsDelete204Response
  | FleetsDeleteDefaultResponse
  | FleetsDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}",
      subscriptionId,
      resourceGroupName,
      fleetName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "If-Match": options?.ifMatch }
          : {}),
      },
    }) as StreamableMethod<
    | FleetsDelete200Response
    | FleetsDelete202Response
    | FleetsDelete204Response
    | FleetsDeleteDefaultResponse
    | FleetsDeleteLogicalResponse
  >;
}

export async function _$deleteDeserialize(
  result:
    | FleetsDelete200Response
    | FleetsDelete202Response
    | FleetsDelete204Response
    | FleetsDeleteDefaultResponse
    | FleetsDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as FleetsDeleteLogicalResponse;
  return;
}

/** Delete a Fleet */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  options: FleetsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        subscriptionId,
        resourceGroupName,
        fleetName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _listByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: FleetsListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | FleetsListByResourceGroup200Response
  | FleetsListByResourceGroupDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByResourceGroupDeserialize(
  result:
    | FleetsListByResourceGroup200Response
    | FleetsListByResourceGroupDefaultResponse,
): Promise<FleetListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      location: p["location"],
      tags: p["tags"],
      id: p["id"],
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
            provisioningState: p.properties?.["provisioningState"],
            hubProfile: !p.properties?.hubProfile
              ? undefined
              : {
                  dnsPrefix: p.properties?.hubProfile?.["dnsPrefix"],
                  apiServerAccessProfile: !p.properties?.hubProfile
                    ?.apiServerAccessProfile
                    ? undefined
                    : {
                        enablePrivateCluster:
                          p.properties?.hubProfile?.apiServerAccessProfile?.[
                            "enablePrivateCluster"
                          ],
                      },
                  agentProfile: !p.properties?.hubProfile?.agentProfile
                    ? undefined
                    : {
                        subnetId:
                          p.properties?.hubProfile?.agentProfile?.["subnetId"],
                        vmSize:
                          p.properties?.hubProfile?.agentProfile?.["vmSize"],
                      },
                  fqdn: p.properties?.hubProfile?.["fqdn"],
                  kubernetesVersion:
                    p.properties?.hubProfile?.["kubernetesVersion"],
                  portalFqdn: p.properties?.hubProfile?.["portalFqdn"],
                },
          },
      eTag: p["eTag"],
      identity: !p.identity
        ? undefined
        : {
            tenantId: p.identity?.["tenantId"],
            principalId: p.identity?.["principalId"],
            type: p.identity?.["type"],
            userAssignedIdentities: p.identity?.["userAssignedIdentities"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Lists fleets in the specified subscription and resource group. */
export function listByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: FleetsListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Fleet> {
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

export function _listBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: FleetsListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod<
  FleetsListBySubscription200Response | FleetsListBySubscriptionDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/fleets",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listBySubscriptionDeserialize(
  result:
    | FleetsListBySubscription200Response
    | FleetsListBySubscriptionDefaultResponse,
): Promise<FleetListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      location: p["location"],
      tags: p["tags"],
      id: p["id"],
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
            provisioningState: p.properties?.["provisioningState"],
            hubProfile: !p.properties?.hubProfile
              ? undefined
              : {
                  dnsPrefix: p.properties?.hubProfile?.["dnsPrefix"],
                  apiServerAccessProfile: !p.properties?.hubProfile
                    ?.apiServerAccessProfile
                    ? undefined
                    : {
                        enablePrivateCluster:
                          p.properties?.hubProfile?.apiServerAccessProfile?.[
                            "enablePrivateCluster"
                          ],
                      },
                  agentProfile: !p.properties?.hubProfile?.agentProfile
                    ? undefined
                    : {
                        subnetId:
                          p.properties?.hubProfile?.agentProfile?.["subnetId"],
                        vmSize:
                          p.properties?.hubProfile?.agentProfile?.["vmSize"],
                      },
                  fqdn: p.properties?.hubProfile?.["fqdn"],
                  kubernetesVersion:
                    p.properties?.hubProfile?.["kubernetesVersion"],
                  portalFqdn: p.properties?.hubProfile?.["portalFqdn"],
                },
          },
      eTag: p["eTag"],
      identity: !p.identity
        ? undefined
        : {
            tenantId: p.identity?.["tenantId"],
            principalId: p.identity?.["principalId"],
            type: p.identity?.["type"],
            userAssignedIdentities: p.identity?.["userAssignedIdentities"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Lists fleets in the specified subscription. */
export function listBySubscription(
  context: Client,
  subscriptionId: string,
  options: FleetsListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Fleet> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, subscriptionId, options),
    _listBySubscriptionDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listCredentialsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  body: void,
  options: FleetsListCredentialsOptionalParams = { requestOptions: {} },
): StreamableMethod<
  FleetsListCredentials200Response | FleetsListCredentialsDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/listCredentials",
      subscriptionId,
      resourceGroupName,
      fleetName,
    )
    .post({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _listCredentialsDeserialize(
  result:
    | FleetsListCredentials200Response
    | FleetsListCredentialsDefaultResponse,
): Promise<FleetCredentialResults> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    kubeconfigs:
      result.body["kubeconfigs"] === undefined
        ? result.body["kubeconfigs"]
        : result.body["kubeconfigs"].map((p) => ({
            name: p["name"],
            value:
              typeof p["value"] === "string"
                ? stringToUint8Array(p["value"], "base64")
                : p["value"],
          })),
  };
}

/** Lists the user credentials of a Fleet. */
export async function listCredentials(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fleetName: string,
  body: void,
  options: FleetsListCredentialsOptionalParams = { requestOptions: {} },
): Promise<FleetCredentialResults> {
  const result = await _listCredentialsSend(
    context,
    subscriptionId,
    resourceGroupName,
    fleetName,
    body,
    options,
  );
  return _listCredentialsDeserialize(result);
}
