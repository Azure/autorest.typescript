// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "./hybridNetworkManagementClient.js";
import {
  _cancelOperationDeserialize,
  _$deleteDeserialize,
  _createOrUpdateDeserialize,
} from "./api/siteNetworkServices/operations.js";
import {
  _$deleteDeserialize as _$deleteDeserializeSites,
  _createOrUpdateDeserialize as _createOrUpdateDeserializeSites,
} from "./api/sites/operations.js";
import {
  _updateStateDeserialize,
  _$deleteDeserialize as _$deleteDeserializeArtifactManifests,
  _createOrUpdateDeserialize as _createOrUpdateDeserializeArtifactManifests,
} from "./api/artifactManifests/operations.js";
import { _updateStateDeserialize as _updateStateDeserializeProxyArtifact } from "./api/proxyArtifact/operations.js";
import {
  _removePrivateEndPointsDeserialize,
  _approvePrivateEndPointsDeserialize,
  _deleteNetworkFabricControllerEndPointsDeserialize,
  _addNetworkFabricControllerEndPointsDeserialize,
  _$deleteDeserialize as _$deleteDeserializeArtifactStores,
  _createOrUpdateDeserialize as _createOrUpdateDeserializeArtifactStores,
} from "./api/artifactStores/operations.js";
import {
  _updateStateDeserialize as _updateStateDeserializeNetworkServiceDesignVersions,
  _$deleteDeserialize as _$deleteDeserializeNetworkServiceDesignVersions,
  _createOrUpdateDeserialize as _createOrUpdateDeserializeNetworkServiceDesignVersions,
} from "./api/networkServiceDesignVersions/operations.js";
import {
  _$deleteDeserialize as _$deleteDeserializeNetworkServiceDesignGroups,
  _createOrUpdateDeserialize as _createOrUpdateDeserializeNetworkServiceDesignGroups,
} from "./api/networkServiceDesignGroups/operations.js";
import {
  _updateStateDeserialize as _updateStateDeserializeNetworkFunctionDefinitionVersions,
  _$deleteDeserialize as _$deleteDeserializeNetworkFunctionDefinitionVersions,
  _createOrUpdateDeserialize as _createOrUpdateDeserializeNetworkFunctionDefinitionVersions,
} from "./api/networkFunctionDefinitionVersions/operations.js";
import {
  _$deleteDeserialize as _$deleteDeserializeNetworkFunctionDefinitionGroups,
  _createOrUpdateDeserialize as _createOrUpdateDeserializeNetworkFunctionDefinitionGroups,
} from "./api/networkFunctionDefinitionGroups/operations.js";
import {
  _executeRequestDeserialize,
  _$deleteDeserialize as _$deleteDeserializeNetworkFunctions,
  _createOrUpdateDeserialize as _createOrUpdateDeserializeNetworkFunctions,
} from "./api/networkFunctions/operations.js";
import {
  _$deleteDeserialize as _$deleteDeserializeConfigurationGroupValues,
  _createOrUpdateDeserialize as _createOrUpdateDeserializeConfigurationGroupValues,
} from "./api/configurationGroupValues/operations.js";
import {
  _$deleteDeserialize as _$deleteDeserializePublishers,
  _createOrUpdateDeserialize as _createOrUpdateDeserializePublishers,
} from "./api/publishers/operations.js";
import {
  _updateStateDeserialize as _updateStateDeserializeConfigurationGroupSchemas,
  _$deleteDeserialize as _$deleteDeserializeConfigurationGroupSchemas,
  _createOrUpdateDeserialize as _createOrUpdateDeserializeConfigurationGroupSchemas,
} from "./api/configurationGroupSchemas/operations.js";
import { getLongRunningPoller } from "./static-helpers/pollingHelpers.js";
import { OperationOptions, PathUncheckedResponse } from "@azure-rest/core-client";
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
  client: HybridNetworkManagementClient,
  serializedState: string,
  sourceOperation: (...args: any[]) => PollerLike<OperationState<TResult>, TResult>,
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
  const apiVersion = getApiVersionFromUrl(initialRequestUrl);
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
      apiVersion,
    },
  );
}

interface DeserializationHelper {
  deserializer: (result: PathUncheckedResponse) => Promise<any>;
  expectedStatuses: string[];
}

const deserializeMap: Record<string, DeserializationHelper> = {
  "POST /subscriptions/{subscriptionId}/providers/Microsoft.HybridNetwork/cancelSiteNetworkServiceOperation":
    { deserializer: _cancelOperationDeserialize, expectedStatuses: ["202", "200", "201"] },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/siteNetworkServices/{siteNetworkServiceName}":
    { deserializer: _$deleteDeserialize, expectedStatuses: ["202", "204", "200"] },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/siteNetworkServices/{siteNetworkServiceName}":
    { deserializer: _createOrUpdateDeserialize, expectedStatuses: ["200", "201", "202"] },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/sites/{siteName}":
    { deserializer: _$deleteDeserializeSites, expectedStatuses: ["202", "204", "200"] },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/sites/{siteName}":
    { deserializer: _createOrUpdateDeserializeSites, expectedStatuses: ["200", "201", "202"] },
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/artifactManifests/{artifactManifestName}/updateState":
    { deserializer: _updateStateDeserialize, expectedStatuses: ["200", "202", "201"] },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/artifactManifests/{artifactManifestName}":
    { deserializer: _$deleteDeserializeArtifactManifests, expectedStatuses: ["202", "204", "200"] },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/artifactManifests/{artifactManifestName}":
    {
      deserializer: _createOrUpdateDeserializeArtifactManifests,
      expectedStatuses: ["200", "201", "202"],
    },
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/artifactVersions/{artifactVersionName}":
    { deserializer: _updateStateDeserializeProxyArtifact, expectedStatuses: ["200", "202", "201"] },
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/removePrivateEndPoints":
    { deserializer: _removePrivateEndPointsDeserialize, expectedStatuses: ["202", "200", "201"] },
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/approvePrivateEndPoints":
    { deserializer: _approvePrivateEndPointsDeserialize, expectedStatuses: ["202", "200", "201"] },
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/deleteNetworkFabricControllerEndPoints":
    {
      deserializer: _deleteNetworkFabricControllerEndPointsDeserialize,
      expectedStatuses: ["202", "200", "201"],
    },
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/addNetworkFabricControllerEndPoints":
    {
      deserializer: _addNetworkFabricControllerEndPointsDeserialize,
      expectedStatuses: ["202", "200", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}":
    { deserializer: _$deleteDeserializeArtifactStores, expectedStatuses: ["202", "204", "200"] },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}":
    {
      deserializer: _createOrUpdateDeserializeArtifactStores,
      expectedStatuses: ["200", "201", "202"],
    },
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}/networkServiceDesignVersions/{networkServiceDesignVersionName}/updateState":
    {
      deserializer: _updateStateDeserializeNetworkServiceDesignVersions,
      expectedStatuses: ["200", "202", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}/networkServiceDesignVersions/{networkServiceDesignVersionName}":
    {
      deserializer: _$deleteDeserializeNetworkServiceDesignVersions,
      expectedStatuses: ["202", "204", "200"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}/networkServiceDesignVersions/{networkServiceDesignVersionName}":
    {
      deserializer: _createOrUpdateDeserializeNetworkServiceDesignVersions,
      expectedStatuses: ["200", "201", "202"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}":
    {
      deserializer: _$deleteDeserializeNetworkServiceDesignGroups,
      expectedStatuses: ["202", "204", "200"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}":
    {
      deserializer: _createOrUpdateDeserializeNetworkServiceDesignGroups,
      expectedStatuses: ["200", "201", "202"],
    },
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkFunctionDefinitionGroups/{networkFunctionDefinitionGroupName}/networkFunctionDefinitionVersions/{networkFunctionDefinitionVersionName}/updateState":
    {
      deserializer: _updateStateDeserializeNetworkFunctionDefinitionVersions,
      expectedStatuses: ["200", "202", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkFunctionDefinitionGroups/{networkFunctionDefinitionGroupName}/networkFunctionDefinitionVersions/{networkFunctionDefinitionVersionName}":
    {
      deserializer: _$deleteDeserializeNetworkFunctionDefinitionVersions,
      expectedStatuses: ["202", "204", "200"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkFunctionDefinitionGroups/{networkFunctionDefinitionGroupName}/networkFunctionDefinitionVersions/{networkFunctionDefinitionVersionName}":
    {
      deserializer: _createOrUpdateDeserializeNetworkFunctionDefinitionVersions,
      expectedStatuses: ["200", "201", "202"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkFunctionDefinitionGroups/{networkFunctionDefinitionGroupName}":
    {
      deserializer: _$deleteDeserializeNetworkFunctionDefinitionGroups,
      expectedStatuses: ["202", "204", "200"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkFunctionDefinitionGroups/{networkFunctionDefinitionGroupName}":
    {
      deserializer: _createOrUpdateDeserializeNetworkFunctionDefinitionGroups,
      expectedStatuses: ["200", "201", "202"],
    },
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/networkFunctions/{networkFunctionName}/executeRequest":
    { deserializer: _executeRequestDeserialize, expectedStatuses: ["200", "202", "201"] },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/networkFunctions/{networkFunctionName}":
    { deserializer: _$deleteDeserializeNetworkFunctions, expectedStatuses: ["200", "202", "204"] },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/networkFunctions/{networkFunctionName}":
    {
      deserializer: _createOrUpdateDeserializeNetworkFunctions,
      expectedStatuses: ["200", "201", "202"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/configurationGroupValues/{configurationGroupValueName}":
    {
      deserializer: _$deleteDeserializeConfigurationGroupValues,
      expectedStatuses: ["202", "204", "200"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/configurationGroupValues/{configurationGroupValueName}":
    {
      deserializer: _createOrUpdateDeserializeConfigurationGroupValues,
      expectedStatuses: ["200", "201", "202"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}":
    { deserializer: _$deleteDeserializePublishers, expectedStatuses: ["202", "204", "200"] },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}":
    { deserializer: _createOrUpdateDeserializePublishers, expectedStatuses: ["200", "201", "202"] },
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/configurationGroupSchemas/{configurationGroupSchemaName}/updateState":
    {
      deserializer: _updateStateDeserializeConfigurationGroupSchemas,
      expectedStatuses: ["200", "202", "201"],
    },
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/configurationGroupSchemas/{configurationGroupSchemaName}":
    {
      deserializer: _$deleteDeserializeConfigurationGroupSchemas,
      expectedStatuses: ["202", "204", "200"],
    },
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/configurationGroupSchemas/{configurationGroupSchemaName}":
    {
      deserializer: _createOrUpdateDeserializeConfigurationGroupSchemas,
      expectedStatuses: ["200", "201", "202"],
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
    for (let i = candidateParts.length - 1, j = pathParts.length - 1; i >= 1 && j >= 1; i--, j--) {
      if (candidateParts[i]?.startsWith("{") && candidateParts[i]?.indexOf("}") !== -1) {
        const start = candidateParts[i]!.indexOf("}") + 1,
          end = candidateParts[i]?.length;
        // If the current part of the candidate is a "template" part
        // Try to use the suffix of pattern to match the path
        // {guid} ==> $
        // {guid}:export ==> :export$
        const isMatched = new RegExp(`${candidateParts[i]?.slice(start, end)}`).test(
          pathParts[j] || "",
        );

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

function getApiVersionFromUrl(urlStr: string): string | undefined {
  const url = new URL(urlStr);
  return url.searchParams.get("api-version") ?? undefined;
}
