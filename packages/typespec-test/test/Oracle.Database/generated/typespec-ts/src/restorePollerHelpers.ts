// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  PollerLike,
  OperationState,
  deserializeState,
  ResourceLocationConfig,
} from "@azure/core-lro";
import { DatabaseContext } from "./api/databaseContext.js";
import { DatabaseClient } from "./databaseClient.js";
import { getLongRunningPoller } from "./api/pollingHelpers.js";
import {
  _createOrUpdateDeserialize,
  _updateDeserialize,
  _$deleteDeserialize,
  _addStorageCapacityDeserialize,
} from "./api/cloudExadataInfrastructures/index.js";
import {
  _createOrUpdateDeserialize as _createOrUpdateDeserializeCloudVmClusters,
  _updateDeserialize as _updateDeserializeCloudVmClusters,
  _$deleteDeserialize as _$deleteDeserializeCloudVmClusters,
  _addVmsDeserialize,
  _removeVmsDeserialize,
} from "./api/cloudVmClusters/index.js";
import {
  _createOrUpdateDeserialize as _createOrUpdateDeserializeVirtualNetworkAddresses,
  _$deleteDeserialize as _$deleteDeserializeVirtualNetworkAddresses,
} from "./api/virtualNetworkAddresses/index.js";
import {
  _createOrUpdateDeserialize as _createOrUpdateDeserializeOracleSubscriptions,
  _updateDeserialize as _updateDeserializeOracleSubscriptions,
  _$deleteDeserialize as _$deleteDeserializeOracleSubscriptions,
  _listCloudAccountDetailsDeserialize,
  _listSaasSubscriptionDetailsDeserialize,
  _listActivationLinksDeserialize,
} from "./api/oracleSubscriptions/index.js";
import { _actionDeserialize } from "./api/dbNodes/index.js";
import {
  _createOrUpdateDeserialize as _createOrUpdateDeserializeAutonomousDatabases,
  _updateDeserialize as _updateDeserializeAutonomousDatabases,
  _$deleteDeserialize as _$deleteDeserializeAutonomousDatabases,
  _switchoverDeserialize,
  _failoverDeserialize,
  _restoreDeserialize,
  _shrinkDeserialize,
} from "./api/autonomousDatabases/index.js";
import {
  _createOrUpdateDeserialize as _createOrUpdateDeserializeAutonomousDatabaseBackups,
  _$deleteDeserialize as _$deleteDeserializeAutonomousDatabaseBackups,
  _updateDeserialize as _updateDeserializeAutonomousDatabaseBackups,
} from "./api/autonomousDatabaseBackups/index.js";
import {
  PathUncheckedResponse,
  OperationOptions,
} from "@azure-rest/core-client";
import { AbortSignalLike } from "@azure/abort-controller";

export interface RestorePollerOptions<
  TResult,
  TResponse extends PathUncheckedResponse = PathUncheckedResponse,
> extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /**
   * The signal which can be used to abort requests.
   */
  abortSignal?: AbortSignalLike;
  /** Deserialization function for raw response body */
  processResponseBody?: (result: TResponse) => Promise<TResult>;
}

/**
 * Creates a poller from the serialized state of another poller. This can be
 * useful when you want to create pollers on a different host or a poller
 * needs to be constructed after the original one is not in scope.
 */
export function restorePoller<TResponse extends PathUncheckedResponse, TResult>(
  client: DatabaseContext | DatabaseClient,
  serializedState: string,
  sourceOperation: (
    ...args: any[]
  ) => PollerLike<OperationState<TResult>, TResult>,
  options?: RestorePollerOptions<TResult>,
): PollerLike<OperationState<TResult>, TResult> {
  const pollerConfig = deserializeState(serializedState).config;
  const { initialRequestUrl, requestMethod, metadata } = pollerConfig;
  if (!initialRequestUrl || !requestMethod) {
    throw new Error(
      `Invalid serialized state: ${serializedState} for sourceOperation ${sourceOperation?.name}`,
    );
  }
  const resourceLocationConfig = metadata?.["resourceLocationConfig"] as
    | ResourceLocationConfig
    | undefined;
  const deserializeHelper =
    options?.processResponseBody ??
    getDeserializationHelper(initialRequestUrl, requestMethod);
  if (!deserializeHelper) {
    throw new Error(
      `Please ensure the operation is in this client! We can't find its deserializeHelper for ${sourceOperation?.name}.`,
    );
  }
  return getLongRunningPoller(
    (client as any)["_client"] ?? client,
    deserializeHelper as (result: TResponse) => Promise<TResult>,
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      resourceLocationConfig,
      restoreFrom: serializedState,
      initialRequestUrl,
    },
  );
}

const deserializeMap: Record<string, Function> = {
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}":
    _createOrUpdateDeserialize,
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}":
    _updateDeserialize,
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}":
    _$deleteDeserialize,
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}/addStorageCapacity":
    _addStorageCapacityDeserialize,
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}":
    _createOrUpdateDeserializeCloudVmClusters,
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}":
    _updateDeserializeCloudVmClusters,
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}":
    _$deleteDeserializeCloudVmClusters,
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/addVms":
    _addVmsDeserialize,
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/removeVms":
    _removeVmsDeserialize,
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/virtualNetworkAddresses/{virtualnetworkaddressname}":
    _createOrUpdateDeserializeVirtualNetworkAddresses,
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/virtualNetworkAddresses/{virtualnetworkaddressname}":
    _$deleteDeserializeVirtualNetworkAddresses,
  "PUT /subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default":
    _createOrUpdateDeserializeOracleSubscriptions,
  "PATCH /subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default":
    _updateDeserializeOracleSubscriptions,
  "DELETE /subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default":
    _$deleteDeserializeOracleSubscriptions,
  "POST /subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default/listCloudAccountDetails":
    _listCloudAccountDetailsDeserialize,
  "POST /subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default/listSaasSubscriptionDetails":
    _listSaasSubscriptionDetailsDeserialize,
  "POST /subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default/listActivationLinks":
    _listActivationLinksDeserialize,
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/dbNodes/{dbnodeocid}/action":
    _actionDeserialize,
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}":
    _createOrUpdateDeserializeAutonomousDatabases,
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}":
    _updateDeserializeAutonomousDatabases,
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}":
    _$deleteDeserializeAutonomousDatabases,
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/switchover":
    _switchoverDeserialize,
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/failover":
    _failoverDeserialize,
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/restore":
    _restoreDeserialize,
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/shrink":
    _shrinkDeserialize,
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/autonomousDatabaseBackups/{adbbackupid}":
    _createOrUpdateDeserializeAutonomousDatabaseBackups,
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/autonomousDatabaseBackups/{adbbackupid}":
    _$deleteDeserializeAutonomousDatabaseBackups,
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/autonomousDatabaseBackups/{adbbackupid}":
    _updateDeserializeAutonomousDatabaseBackups,
};

function getDeserializationHelper(
  urlStr: string,
  method: string,
): ((result: unknown) => Promise<unknown>) | undefined {
  const path = new URL(urlStr).pathname;
  const pathParts = path.split("/");

  // Traverse list to match the longest candidate
  // matchedLen: the length of candidate path
  // matchedValue: the matched status code array
  let matchedLen = -1,
    matchedValue: ((result: unknown) => Promise<unknown>) | undefined;

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(deserializeMap)) {
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
      matchedValue = value as (result: unknown) => Promise<unknown>;
    }
  }

  return matchedValue;
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
