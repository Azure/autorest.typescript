// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets information of the network service design groups under a publisher.
 *
 * @summary gets information of the network service design groups under a publisher.
 * x-ms-original-file: 2025-03-30/NetworkServiceDesignGroupsListByPublisherName.json
 */
async function getNetworkServiceDesignGroupsUnderPublisherResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.networkServiceDesignGroups.listByPublisher(
    "rg",
    "TestPublisher",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await getNetworkServiceDesignGroupsUnderPublisherResource();
}

main().catch(console.error);
