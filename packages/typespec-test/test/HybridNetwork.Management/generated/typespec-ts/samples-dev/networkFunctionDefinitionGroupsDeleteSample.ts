// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to deletes a specified network function definition group.
 *
 * @summary deletes a specified network function definition group.
 * x-ms-original-file: 2025-03-30/NetworkFunctionDefinitionGroupDelete.json
 */
async function deleteANetworkFunctionGroupResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  await client.networkFunctionDefinitionGroups.delete(
    "rg",
    "TestPublisher",
    "TestNetworkFunctionDefinitionGroupName",
  );
}

async function main(): Promise<void> {
  await deleteANetworkFunctionGroupResource();
}

main().catch(console.error);
