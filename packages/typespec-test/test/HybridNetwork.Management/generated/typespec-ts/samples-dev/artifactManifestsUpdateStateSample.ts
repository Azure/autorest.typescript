// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to update state for artifact manifest.
 *
 * @summary update state for artifact manifest.
 * x-ms-original-file: 2025-03-30/ArtifactManifestUpdateState.json
 */
async function updateArtifactManifestState(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.artifactManifests.updateState(
    "rg",
    "TestPublisher",
    "TestArtifactStore",
    "TestArtifactManifestName",
    { artifactManifestState: "Uploaded" },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await updateArtifactManifestState();
}

main().catch(console.error);
