// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list credential for publishing artifacts defined in artifact manifest.
 *
 * @summary list credential for publishing artifacts defined in artifact manifest.
 * x-ms-original-file: 2025-03-30/ArtifactManifestListCredential.json
 */
async function listACredentialForArtifactManifest(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.artifactManifests.listCredential(
    "rg",
    "TestPublisher",
    "TestArtifactStore",
    "TestArtifactManifestName",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await listACredentialForArtifactManifest();
}

main().catch(console.error);
