// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets information about a network service design version.
 *
 * @summary gets information about a network service design version.
 * x-ms-original-file: 2025-03-30/NetworkServiceDesignVersionGet.json
 */
async function getANetworkServiceDesignVersionResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.networkServiceDesignVersions.get(
    "rg",
    "TestPublisher",
    "TestNetworkServiceDesignGroupName",
    "1.0.0",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getANetworkServiceDesignVersionResource();
}

main().catch(console.error);
