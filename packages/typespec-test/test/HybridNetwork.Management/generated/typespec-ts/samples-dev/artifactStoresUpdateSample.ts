// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to update artifact store resource.
 *
 * @summary update artifact store resource.
 * x-ms-original-file: 2025-03-30/ArtifactStoreUpdateTags.json
 */
async function updateArtifactStoreResourceTags(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.artifactStores.update("rg", "TestPublisher", "TestArtifactStore", {
    tags: { tag1: "value1", tag2: "value2" },
  });
  console.log(result);
}

async function main(): Promise<void> {
  await updateArtifactStoreResourceTags();
}

main().catch(console.error);
