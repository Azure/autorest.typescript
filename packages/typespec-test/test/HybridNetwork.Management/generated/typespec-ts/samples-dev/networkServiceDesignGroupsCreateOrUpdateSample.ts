// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to creates or updates a network service design group.
 *
 * @summary creates or updates a network service design group.
 * x-ms-original-file: 2025-03-30/NetworkServiceDesignGroupCreate.json
 */
async function createOrUpdateTheNetworkServiceDesignGroup(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.networkServiceDesignGroups.createOrUpdate(
    "rg",
    "TestPublisher",
    "TestNetworkServiceDesignGroupName",
    { location: "eastus" },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateTheNetworkServiceDesignGroup();
}

main().catch(console.error);
