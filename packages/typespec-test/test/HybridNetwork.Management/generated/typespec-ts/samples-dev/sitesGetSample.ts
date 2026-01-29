// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets information about the specified network site.
 *
 * @summary gets information about the specified network site.
 * x-ms-original-file: 2025-03-30/SiteGet.json
 */
async function getNetworkSite(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.sites.get("rg1", "testSite");
  console.log(result);
}

async function main(): Promise<void> {
  await getNetworkSite();
}

main().catch(console.error);
