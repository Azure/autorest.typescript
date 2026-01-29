// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to creates or updates a network function definition group.
 *
 * @summary creates or updates a network function definition group.
 * x-ms-original-file: 2025-03-30/NetworkFunctionDefinitionGroupCreate.json
 */
async function createOrUpdateTheNetworkFunctionDefinitionGroup(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.networkFunctionDefinitionGroups.createOrUpdate(
    "rg",
    "TestPublisher",
    "TestNetworkFunctionDefinitionGroupName",
    { location: "eastus" },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateTheNetworkFunctionDefinitionGroup();
}

main().catch(console.error);
