// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list manual private endpoints on artifact stores
 *
 * @summary list manual private endpoints on artifact stores
 * x-ms-original-file: 2025-03-30/ArtifactStoreListPrivateEndPoints.json
 */
async function listManualPrivateEndpoints(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.artifactStores.listPrivateEndPoints(
    "rg",
    "TestPublisher",
    "TestArtifactStore",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await listManualPrivateEndpoints();
}

main().catch(console.error);
