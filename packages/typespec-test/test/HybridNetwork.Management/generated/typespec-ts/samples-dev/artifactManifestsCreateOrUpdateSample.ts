// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to creates or updates a artifact manifest.
 *
 * @summary creates or updates a artifact manifest.
 * x-ms-original-file: 2025-03-30/ArtifactManifestCreate.json
 */
async function createOrUpdateTheArtifactManifestResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.artifactManifests.createOrUpdate(
    "rg",
    "TestPublisher",
    "TestArtifactStore",
    "TestManifest",
    {
      location: "eastus",
      properties: {
        artifacts: [
          { artifactName: "fed-rbac", artifactType: "OCIArtifact", artifactVersion: "1.0.0" },
          { artifactName: "nginx", artifactType: "OCIArtifact", artifactVersion: "v1" },
        ],
      },
    },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateTheArtifactManifestResource();
}

main().catch(console.error);
