// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets information of the network function definition groups under a publisher.
 *
 * @summary gets information of the network function definition groups under a publisher.
 * x-ms-original-file: 2025-03-30/NetworkFunctionDefinitionGroupsListByPublisherName.json
 */
async function getNetworkFunctionDefinitionGroupsUnderPublisherResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.networkFunctionDefinitionGroups.listByPublisher(
    "rg",
    "TestPublisher",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await getNetworkFunctionDefinitionGroupsUnderPublisherResource();
}

main().catch(console.error);
