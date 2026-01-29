// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets information about a list of network function definition versions under a network function definition group.
 *
 * @summary gets information about a list of network function definition versions under a network function definition group.
 * x-ms-original-file: 2025-03-30/NetworkFunctionDefinitionVersionListByNetworkFunctionDefinitionGroup.json
 */
async function getPublisherResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.networkFunctionDefinitionVersions.listByNetworkFunctionDefinitionGroup(
    "rg",
    "TestPublisher",
    "TestNetworkFunctionDefinitionGroupNameName",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await getPublisherResource();
}

main().catch(console.error);
