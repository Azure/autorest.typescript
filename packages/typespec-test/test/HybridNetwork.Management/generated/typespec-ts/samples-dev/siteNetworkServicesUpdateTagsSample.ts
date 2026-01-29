// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to updates a site update tags.
 *
 * @summary updates a site update tags.
 * x-ms-original-file: 2025-03-30/SiteNetworkServiceUpdateTags.json
 */
async function updateNetworkSiteTags(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.siteNetworkServices.updateTags("rg1", "testSiteNetworkServiceName", {
    tags: { tag1: "value1", tag2: "value2" },
  });
  console.log(result);
}

async function main(): Promise<void> {
  await updateNetworkSiteTags();
}

main().catch(console.error);
