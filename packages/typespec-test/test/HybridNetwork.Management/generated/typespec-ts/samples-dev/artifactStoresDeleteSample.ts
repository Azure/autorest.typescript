// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to deletes the specified artifact store.
 *
 * @summary deletes the specified artifact store.
 * x-ms-original-file: 2025-03-30/ArtifactStoreDelete.json
 */
async function deleteAArtifactStoreOfPublisherResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  await client.artifactStores.delete("rg", "TestPublisher", "TestArtifactStore");
}

async function main(): Promise<void> {
  await deleteAArtifactStoreOfPublisherResource();
}

main().catch(console.error);
