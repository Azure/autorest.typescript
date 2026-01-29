// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to deletes the specified site network service.
 *
 * @summary deletes the specified site network service.
 * x-ms-original-file: 2025-03-30/SiteNetworkServiceDelete.json
 */
async function deleteNetworkSite(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  await client.siteNetworkServices.delete("rg1", "testSiteNetworkServiceName");
}

async function main(): Promise<void> {
  await deleteNetworkSite();
}

main().catch(console.error);
