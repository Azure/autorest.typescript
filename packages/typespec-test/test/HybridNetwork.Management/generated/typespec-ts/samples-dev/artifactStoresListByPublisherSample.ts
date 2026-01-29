// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets information of the ArtifactStores under publisher.
 *
 * @summary gets information of the ArtifactStores under publisher.
 * x-ms-original-file: 2025-03-30/ArtifactStoresListByPublisherName.json
 */
async function getApplicationGroupsUnderAPublisherResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.artifactStores.listByPublisher("rg", "TestPublisher")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await getApplicationGroupsUnderAPublisherResource();
}

main().catch(console.error);
