// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to lists all the publishers in a resource group.
 *
 * @summary lists all the publishers in a resource group.
 * x-ms-original-file: 2025-03-30/PublisherListByResourceGroup.json
 */
async function listAllPublisherResourcesInAResourceGroup(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.publishers.listByResourceGroup("rg")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await listAllPublisherResourcesInAResourceGroup();
}

main().catch(console.error);
