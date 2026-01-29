// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to deletes the specified network service design version.
 *
 * @summary deletes the specified network service design version.
 * x-ms-original-file: 2025-03-30/NetworkServiceDesignVersionDelete.json
 */
async function deleteANetworkServiceDesignVersion(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  await client.networkServiceDesignVersions.delete(
    "rg",
    "TestPublisher",
    "TestNetworkServiceDesignGroupName",
    "1.0.0",
  );
}

async function main(): Promise<void> {
  await deleteANetworkServiceDesignVersion();
}

main().catch(console.error);
