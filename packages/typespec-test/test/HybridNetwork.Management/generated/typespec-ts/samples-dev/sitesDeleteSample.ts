// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to deletes the specified network site.
 *
 * @summary deletes the specified network site.
 * x-ms-original-file: 2025-03-30/SiteDelete.json
 */
async function deleteNetworkSite(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  await client.sites.delete("rg1", "testSite");
}

async function main(): Promise<void> {
  await deleteNetworkSite();
}

main().catch(console.error);
