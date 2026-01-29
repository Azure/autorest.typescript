// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to deletes the specified artifact manifest.
 *
 * @summary deletes the specified artifact manifest.
 * x-ms-original-file: 2025-03-30/ArtifactManifestDelete.json
 */
async function deleteAArtifactManifestResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  await client.artifactManifests.delete("rg", "TestPublisher", "TestArtifactStore", "TestManifest");
}

async function main(): Promise<void> {
  await deleteAArtifactManifestResource();
}

main().catch(console.error);
