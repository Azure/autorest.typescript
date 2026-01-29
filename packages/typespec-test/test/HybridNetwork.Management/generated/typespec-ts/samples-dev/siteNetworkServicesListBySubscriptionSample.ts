// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to lists all sites in the network service in a subscription.
 *
 * @summary lists all sites in the network service in a subscription.
 * x-ms-original-file: 2025-03-30/SiteNetworkServiceListBySubscription.json
 */
async function listAllHybridNetworkSitesInASubscription(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.siteNetworkServices.listBySubscription()) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await listAllHybridNetworkSitesInASubscription();
}

main().catch(console.error);
