// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "./scVmmClient.js";
import { _guestAgentsCreateDeserialize } from "./api/guestAgents/operations.js";
import {
  _virtualMachineInstancesRestoreCheckpointDeserialize,
  _virtualMachineInstancesDeleteCheckpointDeserialize,
  _virtualMachineInstancesCreateCheckpointDeserialize,
  _virtualMachineInstancesRestartDeserialize,
  _virtualMachineInstancesStartDeserialize,
  _virtualMachineInstancesStopDeserialize,
  _virtualMachineInstancesDeleteDeserialize,
  _virtualMachineInstancesUpdateDeserialize,
  _virtualMachineInstancesCreateOrUpdateDeserialize,
} from "./api/virtualMachineInstances/operations.js";
import {
  _availabilitySetsDeleteDeserialize,
  _availabilitySetsUpdateDeserialize,
  _availabilitySetsCreateOrUpdateDeserialize,
} from "./api/availabilitySets/operations.js";
import {
  _virtualMachineTemplatesDeleteDeserialize,
  _virtualMachineTemplatesUpdateDeserialize,
  _virtualMachineTemplatesCreateOrUpdateDeserialize,
} from "./api/virtualMachineTemplates/operations.js";
import {
  _virtualNetworksDeleteDeserialize,
  _virtualNetworksUpdateDeserialize,
  _virtualNetworksCreateOrUpdateDeserialize,
} from "./api/virtualNetworks/operations.js";
import {
  _cloudsDeleteDeserialize,
  _cloudsUpdateDeserialize,
  _cloudsCreateOrUpdateDeserialize,
} from "./api/clouds/operations.js";
import {
  _vmmServersDeleteDeserialize,
  _vmmServersUpdateDeserialize,
  _vmmServersCreateOrUpdateDeserialize,
} from "./api/vmmServers/operations.js";
import { getLongRunningPoller } from "./static-helpers/pollingHelpers.js";
import {
  OperationOptions,
  PathUncheckedResponse,
} from "@azure-rest/core-client";
import { AbortSignalLike } from "@azure/abort-controller";
import {
  PollerLike,
  OperationState,
  deserializeState,
  ResourceLocationConfig,
} from "@azure/core-lro";

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
  client: ScVmmClient,
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
  const { deserializer, expectedStatuses = [] } =
    getDeserializationHelper(initialRequestUrl, requestMethod) ?? {};
  const deserializeHelper = options?.processResponseBody ?? deserializer;
  if (!deserializeHelper) {
    throw new Error(
      `Please ensure the operation is in this client! We can't find its deserializeHelper for ${sourceOperation?.name}.`,
    );
  }
  return getLongRunningPoller(
    (client as any)["_client"] ?? client,
    deserializeHelper as (result: TResponse) => Promise<TResult>,
    expectedStatuses,
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      resourceLocationConfig,
      restoreFrom: serializedState,
      initialRequestUrl,
    },
  );
}

interface DeserializationHelper {
  deserializer: Function;
  expectedStatuses: string[];
}

const deserializeMap: Record<string, DeserializationHelper> = {
  "PUT /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents/default":
    {
      deserializer: _guestAgentsCreateDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "POST /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/restoreCheckpoint":
    {
      deserializer: _virtualMachineInstancesRestoreCheckpointDeserialize,
      expectedStatuses: ["202", "200"],
    },
  "POST /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/deleteCheckpoint":
    {
      deserializer: _virtualMachineInstancesDeleteCheckpointDeserialize,
      expectedStatuses: ["202", "200"],
    },
  "POST /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/createCheckpoint":
    {
      deserializer: _virtualMachineInstancesCreateCheckpointDeserialize,
      expectedStatuses: ["202", "200"],
    },
  "POST /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/restart":
    {
      deserializer: _virtualMachineInstancesRestartDeserialize,
      expectedStatuses: ["202", "200"],
    },
  "POST /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/start":
    {
      deserializer: _virtualMachineInstancesStartDeserialize,
      expectedStatuses: ["202", "200"],
    },
  "POST /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/stop":
    {
      deserializer: _virtualMachineInstancesStopDeserialize,
      expectedStatuses: ["202", "200"],
    },
  "DELETE /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default":
    {
      deserializer: _virtualMachineInstancesDeleteDeserialize,
      expectedStatuses: ["202", "204", "200"],
    },
  "PATCH /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default":
    {
      deserializer: _virtualMachineInstancesUpdateDeserialize,
      expectedStatuses: ["200", "202"],
    },
  "PUT /{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default":
    {
      deserializer: _virtualMachineInstancesCreateOrUpdateDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}":
    {
      deserializer: _availabilitySetsDeleteDeserialize,
      expectedStatuses: ["202", "204", "200"],
    },
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}":
    {
      deserializer: _availabilitySetsUpdateDeserialize,
      expectedStatuses: ["200", "202"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}":
    {
      deserializer: _availabilitySetsCreateOrUpdateDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}":
    {
      deserializer: _virtualMachineTemplatesDeleteDeserialize,
      expectedStatuses: ["202", "204", "200"],
    },
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}":
    {
      deserializer: _virtualMachineTemplatesUpdateDeserialize,
      expectedStatuses: ["200", "202"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}":
    {
      deserializer: _virtualMachineTemplatesCreateOrUpdateDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}":
    {
      deserializer: _virtualNetworksDeleteDeserialize,
      expectedStatuses: ["202", "204", "200"],
    },
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}":
    {
      deserializer: _virtualNetworksUpdateDeserialize,
      expectedStatuses: ["200", "202"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}":
    {
      deserializer: _virtualNetworksCreateOrUpdateDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}":
    {
      deserializer: _cloudsDeleteDeserialize,
      expectedStatuses: ["202", "204", "200"],
    },
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}":
    {
      deserializer: _cloudsUpdateDeserialize,
      expectedStatuses: ["200", "202"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}":
    {
      deserializer: _cloudsCreateOrUpdateDeserialize,
      expectedStatuses: ["200", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}":
    {
      deserializer: _vmmServersDeleteDeserialize,
      expectedStatuses: ["202", "204", "200"],
    },
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}":
    {
      deserializer: _vmmServersUpdateDeserialize,
      expectedStatuses: ["200", "202"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}":
    {
      deserializer: _vmmServersCreateOrUpdateDeserialize,
      expectedStatuses: ["200", "201"],
    },
};

function getDeserializationHelper(
  urlStr: string,
  method: string,
): DeserializationHelper | undefined {
  const path = new URL(urlStr).pathname;
  const pathParts = path.split("/");

  // Traverse list to match the longest candidate
  // matchedLen: the length of candidate path
  // matchedValue: the matched status code array
  let matchedLen = -1,
    matchedValue: DeserializationHelper | undefined;

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
      matchedValue = value;
    }
  }

  return matchedValue;
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
