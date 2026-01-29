// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to updates the tags for the network function resource.
 *
 * @summary updates the tags for the network function resource.
 * x-ms-original-file: 2025-03-30/NetworkFunctionUpdateTags.json
 */
async function updateTagsForNetworkFunctionResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.networkFunctions.updateTags("rg", "testNf", {
    tags: { tag1: "value1", tag2: "value2" },
  });
  console.log(result);
}

async function main(): Promise<void> {
  await updateTagsForNetworkFunctionResource();
}

main().catch(console.error);
