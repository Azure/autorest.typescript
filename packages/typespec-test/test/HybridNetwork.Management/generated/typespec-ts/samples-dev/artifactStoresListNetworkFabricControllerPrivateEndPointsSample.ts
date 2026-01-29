// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list network fabric controllers to artifact stores
 *
 * @summary list network fabric controllers to artifact stores
 * x-ms-original-file: 2025-03-30/ArtifactStoreListNFCEndPoints.json
 */
async function listNetworkFabricEndpoints(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.artifactStores.listNetworkFabricControllerPrivateEndPoints(
    "rg",
    "TestPublisher",
    "TestArtifactStore",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await listNetworkFabricEndpoints();
}

main().catch(console.error);
