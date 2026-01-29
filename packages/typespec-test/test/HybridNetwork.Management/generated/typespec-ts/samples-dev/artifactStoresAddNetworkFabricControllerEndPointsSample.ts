// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to add network fabric controllers to artifact stores
 *
 * @summary add network fabric controllers to artifact stores
 * x-ms-original-file: 2025-03-30/ArtifactStoreAddNFCEndPoints.json
 */
async function addNetworkFabricEndpoint(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  await client.artifactStores.addNetworkFabricControllerEndPoints(
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
  await addNetworkFabricEndpoint();
}

main().catch(console.error);
