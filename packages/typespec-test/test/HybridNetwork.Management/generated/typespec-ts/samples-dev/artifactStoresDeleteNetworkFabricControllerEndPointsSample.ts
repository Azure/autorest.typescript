// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete network fabric controllers on artifact stores
 *
 * @summary delete network fabric controllers on artifact stores
 * x-ms-original-file: 2025-03-30/ArtifactStoreDeleteNFCEndPoints.json
 */
async function deleteNetworkFabricEndpoints(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  await client.artifactStores.deleteNetworkFabricControllerEndPoints(
    "rg",
    "TestPublisher",
    "TestArtifactStore",
    {
      networkFabricControllerIds: [
        {
          id: "/subscriptions/testsubid/resourceGroups/testNFCMRG/providers/Microsoft.ManagedNetworkFabric/networkFabricControllers/testNFCControllerId",
        },
      ],
    },
  );
}

async function main(): Promise<void> {
  await deleteNetworkFabricEndpoints();
}

main().catch(console.error);
