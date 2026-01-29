// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets information about the specified networkFunctionDefinition group.
 *
 * @summary gets information about the specified networkFunctionDefinition group.
 * x-ms-original-file: 2025-03-30/NetworkFunctionDefinitionGroupGet.json
 */
async function getANetworkFunctionDefinitionGroupResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.networkFunctionDefinitionGroups.get(
    "rg",
    "TestPublisher",
    "TestNetworkFunctionDefinitionGroupName",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getANetworkFunctionDefinitionGroupResource();
}

main().catch(console.error);
