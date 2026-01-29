// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to deletes a specified network service design group.
 *
 * @summary deletes a specified network service design group.
 * x-ms-original-file: 2025-03-30/NetworkServiceDesignGroupDelete.json
 */
async function deleteANetworkFunctionGroupResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  await client.networkServiceDesignGroups.delete(
    "rg",
    "TestPublisher",
    "TestNetworkServiceDesignGroupName",
  );
}

async function main(): Promise<void> {
  await deleteANetworkFunctionGroupResource();
}

main().catch(console.error);
