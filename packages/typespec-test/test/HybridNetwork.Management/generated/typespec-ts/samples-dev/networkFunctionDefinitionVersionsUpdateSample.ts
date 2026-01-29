// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to updates a network function definition version resource.
 *
 * @summary updates a network function definition version resource.
 * x-ms-original-file: 2025-03-30/NetworkFunctionDefinitionVersionUpdateTags.json
 */
async function updateTheNetworkFunctionDefinitionVersionTags(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.networkFunctionDefinitionVersions.update(
    "rg",
    "TestPublisher",
    "TestNetworkFunctionDefinitionGroupName",
    "1.0.0",
    { tags: { tag1: "value1", tag2: "value2" } },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await updateTheNetworkFunctionDefinitionVersionTags();
}

main().catch(console.error);
