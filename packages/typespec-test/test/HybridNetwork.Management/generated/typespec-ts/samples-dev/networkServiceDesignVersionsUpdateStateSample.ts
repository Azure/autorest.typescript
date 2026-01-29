// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to update network service design version state.
 *
 * @summary update network service design version state.
 * x-ms-original-file: 2025-03-30/NetworkServiceDesignVersionUpdateState.json
 */
async function updateNetworkServiceDesignVersionState(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.networkServiceDesignVersions.updateState(
    "rg",
    "TestPublisher",
    "TestNetworkServiceDesignGroupName",
    "1.0.0",
    { versionState: "Active" },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await updateNetworkServiceDesignVersionState();
}

main().catch(console.error);
