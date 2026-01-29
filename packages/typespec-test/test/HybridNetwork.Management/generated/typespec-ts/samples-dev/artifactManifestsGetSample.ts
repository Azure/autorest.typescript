// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets information about a artifact manifest resource.
 *
 * @summary gets information about a artifact manifest resource.
 * x-ms-original-file: 2025-03-30/ArtifactManifestGet.json
 */
async function getAArtifactManifestResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.artifactManifests.get(
    "rg",
    "TestPublisher",
    "TestArtifactStore",
    "TestManifest",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getAArtifactManifestResource();
}

main().catch(console.error);
