// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  pipelineGroupPropertiesSerializer,
  extendedLocationSerializer,
  pipelineGroupUpdatePropertiesSerializer,
  PipelineGroup,
  PipelineGroupUpdate,
  _PipelineGroupListResult,
} from "../../models/models.js";
import { MonitorContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  PipelineGroupsGetOptionalParams,
  PipelineGroupsCreateOrUpdateOptionalParams,
  PipelineGroupsDeleteOptionalParams,
  PipelineGroupsUpdateOptionalParams,
  PipelineGroupsListByResourceGroupOptionalParams,
  PipelineGroupsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  pipelineGroupName: string,
  options: PipelineGroupsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/pipelineGroups/{pipelineGroupName}",
      subscriptionId,
      resourceGroupName,
      pipelineGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<PipelineGroup> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
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
          replicas: result.body.properties?.["replicas"],
          receivers: result.body.properties?.["receivers"].map((p: any) => {
            return {
              type: p["type"],
              name: p["name"],
              syslog: !p.syslog
                ? undefined
                : {
                    endpoint: p.syslog?.["endpoint"],
                    protocol: p.syslog?.["protocol"],
                  },
              otlp: !p.otlp ? undefined : { endpoint: p.otlp?.["endpoint"] },
              udp: !p.udp
                ? undefined
                : {
                    endpoint: p.udp?.["endpoint"],
                    encoding: p.udp?.["encoding"],
                    readQueueLength: p.udp?.["readQueueLength"],
                  },
            };
          }),
          processors: result.body.properties?.["processors"].map((p: any) => {
            return {
              type: p["type"],
              name: p["name"],
              batch: !p.batch
                ? undefined
                : {
                    batchSize: p.batch?.["batchSize"],
                    timeout: p.batch?.["timeout"],
                  },
            };
          }),
          exporters: result.body.properties?.["exporters"].map((p: any) => {
            return {
              type: p["type"],
              name: p["name"],
              azureMonitorWorkspaceLogs: !p.azureMonitorWorkspaceLogs
                ? undefined
                : {
                    api: {
                      dataCollectionEndpointUrl:
                        p.azureMonitorWorkspaceLogs?.api[
                          "dataCollectionEndpointUrl"
                        ],
                      stream: p.azureMonitorWorkspaceLogs?.api["stream"],
                      dataCollectionRule:
                        p.azureMonitorWorkspaceLogs?.api["dataCollectionRule"],
                      schema: {
                        recordMap: p.azureMonitorWorkspaceLogs?.api.schema[
                          "recordMap"
                        ].map((p: any) => {
                          return { from: p["from"], to: p["to"] };
                        }),
                        resourceMap:
                          p.azureMonitorWorkspaceLogs?.api.schema[
                            "resourceMap"
                          ] === undefined
                            ? p.azureMonitorWorkspaceLogs?.api.schema[
                                "resourceMap"
                              ]
                            : p.azureMonitorWorkspaceLogs?.api.schema[
                                "resourceMap"
                              ].map((p: any) => {
                                return { from: p["from"], to: p["to"] };
                              }),
                        scopeMap:
                          p.azureMonitorWorkspaceLogs?.api.schema[
                            "scopeMap"
                          ] === undefined
                            ? p.azureMonitorWorkspaceLogs?.api.schema[
                                "scopeMap"
                              ]
                            : p.azureMonitorWorkspaceLogs?.api.schema[
                                "scopeMap"
                              ].map((p: any) => {
                                return { from: p["from"], to: p["to"] };
                              }),
                      },
                    },
                    concurrency: !p.azureMonitorWorkspaceLogs?.concurrency
                      ? undefined
                      : {
                          workerCount:
                            p.azureMonitorWorkspaceLogs?.concurrency?.[
                              "workerCount"
                            ],
                          batchQueueSize:
                            p.azureMonitorWorkspaceLogs?.concurrency?.[
                              "batchQueueSize"
                            ],
                        },
                    cache: !p.azureMonitorWorkspaceLogs?.cache
                      ? undefined
                      : {
                          maxStorageUsage:
                            p.azureMonitorWorkspaceLogs?.cache?.[
                              "maxStorageUsage"
                            ],
                          retentionPeriod:
                            p.azureMonitorWorkspaceLogs?.cache?.[
                              "retentionPeriod"
                            ],
                        },
                  },
              tcp: !p.tcp ? undefined : { url: p.tcp?.["url"] },
            };
          }),
          service: {
            pipelines: result.body.properties?.service["pipelines"].map(
              (p: any) => {
                return {
                  name: p["name"],
                  type: p["type"],
                  receivers: p["receivers"],
                  processors: p["processors"],
                  exporters: p["exporters"],
                };
              },
            ),
            persistence: !result.body.properties?.service.persistence
              ? undefined
              : {
                  persistentVolumeName:
                    result.body.properties?.service.persistence?.[
                      "persistentVolumeName"
                    ],
                },
          },
          networkingConfigurations:
            result.body.properties?.["networkingConfigurations"] === undefined
              ? result.body.properties?.["networkingConfigurations"]
              : result.body.properties?.["networkingConfigurations"].map(
                  (p: any) => {
                    return {
                      externalNetworkingMode: p["externalNetworkingMode"],
                      host: p["host"],
                      routes: p["routes"].map((p: any) => {
                        return {
                          receiver: p["receiver"],
                          port: p["port"],
                          path: p["path"],
                          subdomain: p["subdomain"],
                        };
                      }),
                    };
                  },
                ),
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: !result.body.extendedLocation
      ? undefined
      : {
          name: result.body.extendedLocation?.["name"],
          type: result.body.extendedLocation?.["type"],
        },
  };
}

/** Returns the specific pipeline group instance. */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  pipelineGroupName: string,
  options: PipelineGroupsGetOptionalParams = { requestOptions: {} },
): Promise<PipelineGroup> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    pipelineGroupName,
    options,
  );
  return _getDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  pipelineGroupName: string,
  resource: PipelineGroup,
  options: PipelineGroupsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/pipelineGroups/{pipelineGroupName}",
      subscriptionId,
      resourceGroupName,
      pipelineGroupName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !resource.tags
          ? resource.tags
          : (serializeRecord(resource.tags as any) as any),
        location: resource["location"],
        properties: !resource.properties
          ? resource.properties
          : pipelineGroupPropertiesSerializer(resource.properties),
        extendedLocation: !resource.extendedLocation
          ? resource.extendedLocation
          : extendedLocationSerializer(resource.extendedLocation),
      },
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<PipelineGroup> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
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
          replicas: result.body.properties?.["replicas"],
          receivers: result.body.properties?.["receivers"].map((p: any) => {
            return {
              type: p["type"],
              name: p["name"],
              syslog: !p.syslog
                ? undefined
                : {
                    endpoint: p.syslog?.["endpoint"],
                    protocol: p.syslog?.["protocol"],
                  },
              otlp: !p.otlp ? undefined : { endpoint: p.otlp?.["endpoint"] },
              udp: !p.udp
                ? undefined
                : {
                    endpoint: p.udp?.["endpoint"],
                    encoding: p.udp?.["encoding"],
                    readQueueLength: p.udp?.["readQueueLength"],
                  },
            };
          }),
          processors: result.body.properties?.["processors"].map((p: any) => {
            return {
              type: p["type"],
              name: p["name"],
              batch: !p.batch
                ? undefined
                : {
                    batchSize: p.batch?.["batchSize"],
                    timeout: p.batch?.["timeout"],
                  },
            };
          }),
          exporters: result.body.properties?.["exporters"].map((p: any) => {
            return {
              type: p["type"],
              name: p["name"],
              azureMonitorWorkspaceLogs: !p.azureMonitorWorkspaceLogs
                ? undefined
                : {
                    api: {
                      dataCollectionEndpointUrl:
                        p.azureMonitorWorkspaceLogs?.api[
                          "dataCollectionEndpointUrl"
                        ],
                      stream: p.azureMonitorWorkspaceLogs?.api["stream"],
                      dataCollectionRule:
                        p.azureMonitorWorkspaceLogs?.api["dataCollectionRule"],
                      schema: {
                        recordMap: p.azureMonitorWorkspaceLogs?.api.schema[
                          "recordMap"
                        ].map((p: any) => {
                          return { from: p["from"], to: p["to"] };
                        }),
                        resourceMap:
                          p.azureMonitorWorkspaceLogs?.api.schema[
                            "resourceMap"
                          ] === undefined
                            ? p.azureMonitorWorkspaceLogs?.api.schema[
                                "resourceMap"
                              ]
                            : p.azureMonitorWorkspaceLogs?.api.schema[
                                "resourceMap"
                              ].map((p: any) => {
                                return { from: p["from"], to: p["to"] };
                              }),
                        scopeMap:
                          p.azureMonitorWorkspaceLogs?.api.schema[
                            "scopeMap"
                          ] === undefined
                            ? p.azureMonitorWorkspaceLogs?.api.schema[
                                "scopeMap"
                              ]
                            : p.azureMonitorWorkspaceLogs?.api.schema[
                                "scopeMap"
                              ].map((p: any) => {
                                return { from: p["from"], to: p["to"] };
                              }),
                      },
                    },
                    concurrency: !p.azureMonitorWorkspaceLogs?.concurrency
                      ? undefined
                      : {
                          workerCount:
                            p.azureMonitorWorkspaceLogs?.concurrency?.[
                              "workerCount"
                            ],
                          batchQueueSize:
                            p.azureMonitorWorkspaceLogs?.concurrency?.[
                              "batchQueueSize"
                            ],
                        },
                    cache: !p.azureMonitorWorkspaceLogs?.cache
                      ? undefined
                      : {
                          maxStorageUsage:
                            p.azureMonitorWorkspaceLogs?.cache?.[
                              "maxStorageUsage"
                            ],
                          retentionPeriod:
                            p.azureMonitorWorkspaceLogs?.cache?.[
                              "retentionPeriod"
                            ],
                        },
                  },
              tcp: !p.tcp ? undefined : { url: p.tcp?.["url"] },
            };
          }),
          service: {
            pipelines: result.body.properties?.service["pipelines"].map(
              (p: any) => {
                return {
                  name: p["name"],
                  type: p["type"],
                  receivers: p["receivers"],
                  processors: p["processors"],
                  exporters: p["exporters"],
                };
              },
            ),
            persistence: !result.body.properties?.service.persistence
              ? undefined
              : {
                  persistentVolumeName:
                    result.body.properties?.service.persistence?.[
                      "persistentVolumeName"
                    ],
                },
          },
          networkingConfigurations:
            result.body.properties?.["networkingConfigurations"] === undefined
              ? result.body.properties?.["networkingConfigurations"]
              : result.body.properties?.["networkingConfigurations"].map(
                  (p: any) => {
                    return {
                      externalNetworkingMode: p["externalNetworkingMode"],
                      host: p["host"],
                      routes: p["routes"].map((p: any) => {
                        return {
                          receiver: p["receiver"],
                          port: p["port"],
                          path: p["path"],
                          subdomain: p["subdomain"],
                        };
                      }),
                    };
                  },
                ),
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: !result.body.extendedLocation
      ? undefined
      : {
          name: result.body.extendedLocation?.["name"],
          type: result.body.extendedLocation?.["type"],
        },
  };
}

/** Create or update a pipeline group instance. */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  pipelineGroupName: string,
  resource: PipelineGroup,
  options: PipelineGroupsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<PipelineGroup>, PipelineGroup> {
  return getLongRunningPoller(
    context,
    _createOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _createOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          pipelineGroupName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<PipelineGroup>, PipelineGroup>;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  pipelineGroupName: string,
  options: PipelineGroupsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/pipelineGroups/{pipelineGroupName}",
      subscriptionId,
      resourceGroupName,
      pipelineGroupName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a pipeline group instance. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  pipelineGroupName: string,
  options: PipelineGroupsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _$deleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _$deleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          pipelineGroupName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  pipelineGroupName: string,
  properties: PipelineGroupUpdate,
  options: PipelineGroupsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/pipelineGroups/{pipelineGroupName}",
      subscriptionId,
      resourceGroupName,
      pipelineGroupName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
        properties: !properties.properties
          ? properties.properties
          : pipelineGroupUpdatePropertiesSerializer(properties.properties),
      },
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<PipelineGroup> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
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
          replicas: result.body.properties?.["replicas"],
          receivers: result.body.properties?.["receivers"].map((p: any) => {
            return {
              type: p["type"],
              name: p["name"],
              syslog: !p.syslog
                ? undefined
                : {
                    endpoint: p.syslog?.["endpoint"],
                    protocol: p.syslog?.["protocol"],
                  },
              otlp: !p.otlp ? undefined : { endpoint: p.otlp?.["endpoint"] },
              udp: !p.udp
                ? undefined
                : {
                    endpoint: p.udp?.["endpoint"],
                    encoding: p.udp?.["encoding"],
                    readQueueLength: p.udp?.["readQueueLength"],
                  },
            };
          }),
          processors: result.body.properties?.["processors"].map((p: any) => {
            return {
              type: p["type"],
              name: p["name"],
              batch: !p.batch
                ? undefined
                : {
                    batchSize: p.batch?.["batchSize"],
                    timeout: p.batch?.["timeout"],
                  },
            };
          }),
          exporters: result.body.properties?.["exporters"].map((p: any) => {
            return {
              type: p["type"],
              name: p["name"],
              azureMonitorWorkspaceLogs: !p.azureMonitorWorkspaceLogs
                ? undefined
                : {
                    api: {
                      dataCollectionEndpointUrl:
                        p.azureMonitorWorkspaceLogs?.api[
                          "dataCollectionEndpointUrl"
                        ],
                      stream: p.azureMonitorWorkspaceLogs?.api["stream"],
                      dataCollectionRule:
                        p.azureMonitorWorkspaceLogs?.api["dataCollectionRule"],
                      schema: {
                        recordMap: p.azureMonitorWorkspaceLogs?.api.schema[
                          "recordMap"
                        ].map((p: any) => {
                          return { from: p["from"], to: p["to"] };
                        }),
                        resourceMap:
                          p.azureMonitorWorkspaceLogs?.api.schema[
                            "resourceMap"
                          ] === undefined
                            ? p.azureMonitorWorkspaceLogs?.api.schema[
                                "resourceMap"
                              ]
                            : p.azureMonitorWorkspaceLogs?.api.schema[
                                "resourceMap"
                              ].map((p: any) => {
                                return { from: p["from"], to: p["to"] };
                              }),
                        scopeMap:
                          p.azureMonitorWorkspaceLogs?.api.schema[
                            "scopeMap"
                          ] === undefined
                            ? p.azureMonitorWorkspaceLogs?.api.schema[
                                "scopeMap"
                              ]
                            : p.azureMonitorWorkspaceLogs?.api.schema[
                                "scopeMap"
                              ].map((p: any) => {
                                return { from: p["from"], to: p["to"] };
                              }),
                      },
                    },
                    concurrency: !p.azureMonitorWorkspaceLogs?.concurrency
                      ? undefined
                      : {
                          workerCount:
                            p.azureMonitorWorkspaceLogs?.concurrency?.[
                              "workerCount"
                            ],
                          batchQueueSize:
                            p.azureMonitorWorkspaceLogs?.concurrency?.[
                              "batchQueueSize"
                            ],
                        },
                    cache: !p.azureMonitorWorkspaceLogs?.cache
                      ? undefined
                      : {
                          maxStorageUsage:
                            p.azureMonitorWorkspaceLogs?.cache?.[
                              "maxStorageUsage"
                            ],
                          retentionPeriod:
                            p.azureMonitorWorkspaceLogs?.cache?.[
                              "retentionPeriod"
                            ],
                        },
                  },
              tcp: !p.tcp ? undefined : { url: p.tcp?.["url"] },
            };
          }),
          service: {
            pipelines: result.body.properties?.service["pipelines"].map(
              (p: any) => {
                return {
                  name: p["name"],
                  type: p["type"],
                  receivers: p["receivers"],
                  processors: p["processors"],
                  exporters: p["exporters"],
                };
              },
            ),
            persistence: !result.body.properties?.service.persistence
              ? undefined
              : {
                  persistentVolumeName:
                    result.body.properties?.service.persistence?.[
                      "persistentVolumeName"
                    ],
                },
          },
          networkingConfigurations:
            result.body.properties?.["networkingConfigurations"] === undefined
              ? result.body.properties?.["networkingConfigurations"]
              : result.body.properties?.["networkingConfigurations"].map(
                  (p: any) => {
                    return {
                      externalNetworkingMode: p["externalNetworkingMode"],
                      host: p["host"],
                      routes: p["routes"].map((p: any) => {
                        return {
                          receiver: p["receiver"],
                          port: p["port"],
                          path: p["path"],
                          subdomain: p["subdomain"],
                        };
                      }),
                    };
                  },
                ),
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: !result.body.extendedLocation
      ? undefined
      : {
          name: result.body.extendedLocation?.["name"],
          type: result.body.extendedLocation?.["type"],
        },
  };
}

/** Updates a pipeline group instance */
export function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  pipelineGroupName: string,
  properties: PipelineGroupUpdate,
  options: PipelineGroupsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<PipelineGroup>, PipelineGroup> {
  return getLongRunningPoller(context, _updateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        subscriptionId,
        resourceGroupName,
        pipelineGroupName,
        properties,
        options,
      ),
  }) as PollerLike<OperationState<PipelineGroup>, PipelineGroup>;
}

export function _listByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: PipelineGroupsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/pipelineGroups",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_PipelineGroupListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        tags: p["tags"],
        location: p["location"],
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
              replicas: p.properties?.["replicas"],
              receivers: p.properties?.["receivers"].map((p: any) => {
                return {
                  type: p["type"],
                  name: p["name"],
                  syslog: !p.syslog
                    ? undefined
                    : {
                        endpoint: p.syslog?.["endpoint"],
                        protocol: p.syslog?.["protocol"],
                      },
                  otlp: !p.otlp
                    ? undefined
                    : { endpoint: p.otlp?.["endpoint"] },
                  udp: !p.udp
                    ? undefined
                    : {
                        endpoint: p.udp?.["endpoint"],
                        encoding: p.udp?.["encoding"],
                        readQueueLength: p.udp?.["readQueueLength"],
                      },
                };
              }),
              processors: p.properties?.["processors"].map((p: any) => {
                return {
                  type: p["type"],
                  name: p["name"],
                  batch: !p.batch
                    ? undefined
                    : {
                        batchSize: p.batch?.["batchSize"],
                        timeout: p.batch?.["timeout"],
                      },
                };
              }),
              exporters: p.properties?.["exporters"].map((p: any) => {
                return {
                  type: p["type"],
                  name: p["name"],
                  azureMonitorWorkspaceLogs: !p.azureMonitorWorkspaceLogs
                    ? undefined
                    : {
                        api: {
                          dataCollectionEndpointUrl:
                            p.azureMonitorWorkspaceLogs?.api[
                              "dataCollectionEndpointUrl"
                            ],
                          stream: p.azureMonitorWorkspaceLogs?.api["stream"],
                          dataCollectionRule:
                            p.azureMonitorWorkspaceLogs?.api[
                              "dataCollectionRule"
                            ],
                          schema: {
                            recordMap: p.azureMonitorWorkspaceLogs?.api.schema[
                              "recordMap"
                            ].map((p: any) => {
                              return { from: p["from"], to: p["to"] };
                            }),
                            resourceMap:
                              p.azureMonitorWorkspaceLogs?.api.schema[
                                "resourceMap"
                              ] === undefined
                                ? p.azureMonitorWorkspaceLogs?.api.schema[
                                    "resourceMap"
                                  ]
                                : p.azureMonitorWorkspaceLogs?.api.schema[
                                    "resourceMap"
                                  ].map((p: any) => {
                                    return { from: p["from"], to: p["to"] };
                                  }),
                            scopeMap:
                              p.azureMonitorWorkspaceLogs?.api.schema[
                                "scopeMap"
                              ] === undefined
                                ? p.azureMonitorWorkspaceLogs?.api.schema[
                                    "scopeMap"
                                  ]
                                : p.azureMonitorWorkspaceLogs?.api.schema[
                                    "scopeMap"
                                  ].map((p: any) => {
                                    return { from: p["from"], to: p["to"] };
                                  }),
                          },
                        },
                        concurrency: !p.azureMonitorWorkspaceLogs?.concurrency
                          ? undefined
                          : {
                              workerCount:
                                p.azureMonitorWorkspaceLogs?.concurrency?.[
                                  "workerCount"
                                ],
                              batchQueueSize:
                                p.azureMonitorWorkspaceLogs?.concurrency?.[
                                  "batchQueueSize"
                                ],
                            },
                        cache: !p.azureMonitorWorkspaceLogs?.cache
                          ? undefined
                          : {
                              maxStorageUsage:
                                p.azureMonitorWorkspaceLogs?.cache?.[
                                  "maxStorageUsage"
                                ],
                              retentionPeriod:
                                p.azureMonitorWorkspaceLogs?.cache?.[
                                  "retentionPeriod"
                                ],
                            },
                      },
                  tcp: !p.tcp ? undefined : { url: p.tcp?.["url"] },
                };
              }),
              service: {
                pipelines: p.properties?.service["pipelines"].map((p: any) => {
                  return {
                    name: p["name"],
                    type: p["type"],
                    receivers: p["receivers"],
                    processors: p["processors"],
                    exporters: p["exporters"],
                  };
                }),
                persistence: !p.properties?.service.persistence
                  ? undefined
                  : {
                      persistentVolumeName:
                        p.properties?.service.persistence?.[
                          "persistentVolumeName"
                        ],
                    },
              },
              networkingConfigurations:
                p.properties?.["networkingConfigurations"] === undefined
                  ? p.properties?.["networkingConfigurations"]
                  : p.properties?.["networkingConfigurations"].map((p: any) => {
                      return {
                        externalNetworkingMode: p["externalNetworkingMode"],
                        host: p["host"],
                        routes: p["routes"].map((p: any) => {
                          return {
                            receiver: p["receiver"],
                            port: p["port"],
                            path: p["path"],
                            subdomain: p["subdomain"],
                          };
                        }),
                      };
                    }),
              provisioningState: p.properties?.["provisioningState"],
            },
        extendedLocation: !p.extendedLocation
          ? undefined
          : {
              name: p.extendedLocation?.["name"],
              type: p.extendedLocation?.["type"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Lists all workspaces in the specified resource group */
export function listByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: PipelineGroupsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<PipelineGroup> {
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
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: PipelineGroupsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Monitor/pipelineGroups",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_PipelineGroupListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        tags: p["tags"],
        location: p["location"],
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
              replicas: p.properties?.["replicas"],
              receivers: p.properties?.["receivers"].map((p: any) => {
                return {
                  type: p["type"],
                  name: p["name"],
                  syslog: !p.syslog
                    ? undefined
                    : {
                        endpoint: p.syslog?.["endpoint"],
                        protocol: p.syslog?.["protocol"],
                      },
                  otlp: !p.otlp
                    ? undefined
                    : { endpoint: p.otlp?.["endpoint"] },
                  udp: !p.udp
                    ? undefined
                    : {
                        endpoint: p.udp?.["endpoint"],
                        encoding: p.udp?.["encoding"],
                        readQueueLength: p.udp?.["readQueueLength"],
                      },
                };
              }),
              processors: p.properties?.["processors"].map((p: any) => {
                return {
                  type: p["type"],
                  name: p["name"],
                  batch: !p.batch
                    ? undefined
                    : {
                        batchSize: p.batch?.["batchSize"],
                        timeout: p.batch?.["timeout"],
                      },
                };
              }),
              exporters: p.properties?.["exporters"].map((p: any) => {
                return {
                  type: p["type"],
                  name: p["name"],
                  azureMonitorWorkspaceLogs: !p.azureMonitorWorkspaceLogs
                    ? undefined
                    : {
                        api: {
                          dataCollectionEndpointUrl:
                            p.azureMonitorWorkspaceLogs?.api[
                              "dataCollectionEndpointUrl"
                            ],
                          stream: p.azureMonitorWorkspaceLogs?.api["stream"],
                          dataCollectionRule:
                            p.azureMonitorWorkspaceLogs?.api[
                              "dataCollectionRule"
                            ],
                          schema: {
                            recordMap: p.azureMonitorWorkspaceLogs?.api.schema[
                              "recordMap"
                            ].map((p: any) => {
                              return { from: p["from"], to: p["to"] };
                            }),
                            resourceMap:
                              p.azureMonitorWorkspaceLogs?.api.schema[
                                "resourceMap"
                              ] === undefined
                                ? p.azureMonitorWorkspaceLogs?.api.schema[
                                    "resourceMap"
                                  ]
                                : p.azureMonitorWorkspaceLogs?.api.schema[
                                    "resourceMap"
                                  ].map((p: any) => {
                                    return { from: p["from"], to: p["to"] };
                                  }),
                            scopeMap:
                              p.azureMonitorWorkspaceLogs?.api.schema[
                                "scopeMap"
                              ] === undefined
                                ? p.azureMonitorWorkspaceLogs?.api.schema[
                                    "scopeMap"
                                  ]
                                : p.azureMonitorWorkspaceLogs?.api.schema[
                                    "scopeMap"
                                  ].map((p: any) => {
                                    return { from: p["from"], to: p["to"] };
                                  }),
                          },
                        },
                        concurrency: !p.azureMonitorWorkspaceLogs?.concurrency
                          ? undefined
                          : {
                              workerCount:
                                p.azureMonitorWorkspaceLogs?.concurrency?.[
                                  "workerCount"
                                ],
                              batchQueueSize:
                                p.azureMonitorWorkspaceLogs?.concurrency?.[
                                  "batchQueueSize"
                                ],
                            },
                        cache: !p.azureMonitorWorkspaceLogs?.cache
                          ? undefined
                          : {
                              maxStorageUsage:
                                p.azureMonitorWorkspaceLogs?.cache?.[
                                  "maxStorageUsage"
                                ],
                              retentionPeriod:
                                p.azureMonitorWorkspaceLogs?.cache?.[
                                  "retentionPeriod"
                                ],
                            },
                      },
                  tcp: !p.tcp ? undefined : { url: p.tcp?.["url"] },
                };
              }),
              service: {
                pipelines: p.properties?.service["pipelines"].map((p: any) => {
                  return {
                    name: p["name"],
                    type: p["type"],
                    receivers: p["receivers"],
                    processors: p["processors"],
                    exporters: p["exporters"],
                  };
                }),
                persistence: !p.properties?.service.persistence
                  ? undefined
                  : {
                      persistentVolumeName:
                        p.properties?.service.persistence?.[
                          "persistentVolumeName"
                        ],
                    },
              },
              networkingConfigurations:
                p.properties?.["networkingConfigurations"] === undefined
                  ? p.properties?.["networkingConfigurations"]
                  : p.properties?.["networkingConfigurations"].map((p: any) => {
                      return {
                        externalNetworkingMode: p["externalNetworkingMode"],
                        host: p["host"],
                        routes: p["routes"].map((p: any) => {
                          return {
                            receiver: p["receiver"],
                            port: p["port"],
                            path: p["path"],
                            subdomain: p["subdomain"],
                          };
                        }),
                      };
                    }),
              provisioningState: p.properties?.["provisioningState"],
            },
        extendedLocation: !p.extendedLocation
          ? undefined
          : {
              name: p.extendedLocation?.["name"],
              type: p.extendedLocation?.["type"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Lists all workspaces in the specified subscription */
export function listBySubscription(
  context: Client,
  subscriptionId: string,
  options: PipelineGroupsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<PipelineGroup> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, subscriptionId, options),
    _listBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
