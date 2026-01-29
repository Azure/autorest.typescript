// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets information about the specified networkServiceDesign group.
 *
 * @summary gets information about the specified networkServiceDesign group.
 * x-ms-original-file: 2025-03-30/NetworkServiceDesignGroupGet.json
 */
async function getANetworkServiceDesignGroupResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.networkServiceDesignGroups.get(
    "rg",
    "TestPublisher",
    "TestNetworkServiceDesignGroupName",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getANetworkServiceDesignGroupResource();
}

main().catch(console.error);
