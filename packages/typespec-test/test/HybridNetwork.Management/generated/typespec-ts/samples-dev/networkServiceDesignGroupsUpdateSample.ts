// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to updates a network service design groups resource.
 *
 * @summary updates a network service design groups resource.
 * x-ms-original-file: 2025-03-30/NetworkServiceDesignGroupUpdateTags.json
 */
async function createOrUpdateTheNetworkServiceDesignGroupResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.networkServiceDesignGroups.update(
    "rg",
    "TestPublisher",
    "TestNetworkServiceDesignGroupName",
    { tags: { tag1: "value1", tag2: "value2" } },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateTheNetworkServiceDesignGroupResource();
}

main().catch(console.error);
