// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets information about the artifact manifest.
 *
 * @summary gets information about the artifact manifest.
 * x-ms-original-file: 2025-03-30/ArtifactManifestListByArtifactStore.json
 */
async function getArtifactManifestListResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.artifactManifests.listByArtifactStore(
    "rg",
    "TestPublisher",
    "TestArtifactStore",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await getArtifactManifestListResource();
}

main().catch(console.error);
