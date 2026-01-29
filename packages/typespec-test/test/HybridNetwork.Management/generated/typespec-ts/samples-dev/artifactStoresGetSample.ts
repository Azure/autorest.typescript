// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets information about the specified artifact store.
 *
 * @summary gets information about the specified artifact store.
 * x-ms-original-file: 2025-03-30/ArtifactStoreGet.json
 */
async function getAArtifactStoreResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.artifactStores.get("rg", "TestPublisher", "TestArtifactStoreName");
  console.log(result);
}

async function main(): Promise<void> {
  await getAArtifactStoreResource();
}

main().catch(console.error);
